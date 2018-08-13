const PrerenderSPAPlugin = require("prerender-spa-plugin")
const path = require("path")
const prerenderRoutes = require("./prerender-routes")
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const isPuppeeteerUser = require("os").userInfo().username === "pptruser"

const routes = ["/", "/blog"].concat(prerenderRoutes)

const prerenderOptions = {
  staticDir: path.join(__dirname, "dist"),
  routes,
}

if (isPuppeeteerUser) {
  prerenderOptions.renderer = new Renderer({
    executablePath: "/usr/bin/chromium-browser"
  })
}

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "production") return

    return {
      plugins: [
        new PrerenderSPAPlugin(prerenderOptions),
      ],
    }
  },
}
