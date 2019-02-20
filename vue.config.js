const IS_PROD = process.env.NODE_ENV === "production"
const PrerenderSPAPlugin = require("prerender-spa-plugin")
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require("path")

// Import routes to prerender
const prerenderRoutes = require("./prerender-routes")
const routes = ["/", "/blog"].concat(prerenderRoutes)

// For pre-rendering inside Docker
const isPuppeteerUser = require("os").userInfo().username === "pptruser"

// Options for pre-rendering
const prerenderOptions = {
  staticDir: path.join(__dirname, "dist"),
  routes,
  renderer: new Renderer({
    renderAfterTime: 5000,
    headless: true,
  }),
  postProcess(context) {
    context.html = context.html.replace(`id="app"`, `id="app" data-server-rendered="true"`)
    return context
  }
}

// Apply different puppeteer settings if in Docker or on local machine
if (IS_PROD) {
  if (isPuppeteerUser) {
    console.log("isPuppeteerUser: true -- assuming this is a Docker container")
    prerenderOptions.renderer = new Renderer({
      executablePath: "/usr/bin/google-chrome-unstable",
      renderAfterTime: 5000,
      headless: true,
      args: ['--disable-dev-shm-usage'],
    })
  } else {
    console.log("isPuppeteerUser: false -- prerendering with local google-chrome")
  }
}

// Use PrerenderSPAPlugin when building for production
module.exports = {
  configureWebpack: config => {
    if (!IS_PROD) return

    return {
      plugins: [
        new PrerenderSPAPlugin(prerenderOptions),
      ],
    }
  },
}
