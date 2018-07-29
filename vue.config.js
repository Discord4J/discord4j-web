const PrerenderSPAPlugin = require("prerender-spa-plugin")
const path = require("path")
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== "production") return

    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "dist"),
          routes: ["/", "/blog", "/blog/docker-containerization"],
          renderer: new Renderer({
            renderAfterTime: 10000,
          })
        }),
      ],
    }
  },
}
