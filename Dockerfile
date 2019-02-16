### Build step
FROM node:10-slim as yarn_build

# See https://crbug.com/795759
RUN apt-get update && apt-get install -yq libgconf-2-4

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.
RUN apt-get update && apt-get install -y wget --no-install-recommends \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get purge --auto-remove -y curl \
    && rm -rf /src/*.deb

# It's a good idea to use dumb-init to help prevent zombie chrome processes.
ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

# Uncomment to skip the chromium download when installing puppeteer. If you do,
# you'll need to launch puppeteer with:
#     browser.launch({executablePath: 'google-chrome-unstable'})
# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Enter sub-directory for building the website
WORKDIR /discord4j-web

# Copy over mostly static stuff that can be cached beforehand
COPY LICENSE LICENSE
COPY README.md README.md
COPY .browserslistrc .browserslistrc
COPY .postcssrc.js .postcssrc.js
COPY .prettierrc.yaml .prettierrc.yaml
COPY babel.config.js babel.config.js
COPY .autoblog.json .autoblog.json
COPY tsconfig.json tsconfig.json
COPY tslint.json tsling.json

# Install required dependencies (from yarn.lock / package.json), including puppeteer
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install && yarn add puppeteer

# Copy over source files
COPY public public
COPY src src
COPY vue.config.js vue.config.js

# Add user so we don't need --no-sandbox.
RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /discord4j-web/

# Run everything after as non-privileged user.
USER pptruser

# Generate routes and pre-render website for production environment
RUN yarn clean
RUN yarn generate
RUN yarn build

### Build step complete, create container of just dist folder
FROM tianon/true

WORKDIR /discord4j-web/
COPY --from=yarn_build /discord4j-web/dist/ .
