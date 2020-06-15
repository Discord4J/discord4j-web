### Build step
FROM alpine:edge as yarn_build

# Installs latest Chromium (76) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn 

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Enter sub-directory for building the website
WORKDIR /discord4j-web

# Copy over mostly static stuff that can be cached beforehand
COPY LICENSE LICENSE
COPY README.md README.md
COPY .browserslistrc .browserslistrc
COPY .dockerignore .dockerignore
COPY .eslintrc.js .eslintrc.js
COPY .gitignore .gitignore
COPY .postcssrc.js .postcssrc.js
COPY .prettierrc.yaml .prettierrc.yaml
COPY babel.config.js babel.config.js
COPY tsconfig.json tsconfig.json

# Install required dependencies (from yarn.lock / package.json), including puppeteer (Puppeteer v1.17.0 works with Chromium 76)
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install && yarn add puppeteer@1.17.0

# Copy over source files
COPY vue.config.js vue.config.js
COPY .autoblog.json .autoblog.json
COPY public public
COPY src src

# Add user so we don't need --no-sandbox.
RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /discord4j-web

# Run everything after as non-privileged user.
USER pptruser

# Generate routes and pre-render website for production environment
RUN yarn clean
RUN yarn generate
RUN yarn build

### Build step complete, create container of just dist folder
FROM tianon/true

WORKDIR /dist/
COPY --from=yarn_build /discord4j-web/dist/ .
