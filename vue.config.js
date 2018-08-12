const PrerenderSPAPlugin = require("prerender-spa-plugin")
const path = require("path")
const prerenderRoutes = require("./prerender-routes")
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const routes = ["/", "/blog"].concat(prerenderRoutes)

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== "production") return

    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "dist"),
          routes,
          // renderer: new Renderer({
          //   renderAfterTime: 10000,
          // })
        }),
      ],
    }
  },
}
