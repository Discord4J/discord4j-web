### Build step
FROM node:10-alpine as yarn_build

# Installs latest Chromium (68) package.
RUN apk update && apk upgrade && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk add --no-cache \
      chromium@edge \
      nss@edge \
      bash

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

WORKDIR /discord4j-web/

# Add user so we don't need --no-sandbox.
RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /discord4j-web

# Run everything after as non-privileged user.

COPY package.json package.json

RUN yarn --silent install && yarn --silent add puppeteer

COPY . .

RUN yarn clean && yarn types && npx vue-autoblog

USER pptruser

RUN yarn build

### Build step complete, create container of just dist folder
FROM tianon/true

WORKDIR /discord4j-web/
COPY --from=yarn_build /discord4j-web/dist/ .
