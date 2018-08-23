<template lang="pug">
  footer.footer
    .top
      .container
        .columns
          .column
            .title.is-5 Documentation
            ul
              li
                a(href="http://discord4j.readthedocs.io/en/latest/", target="_blank") Discord4J Docs
              li
                a(href="https://jitpack.io/com/github/Discord4J/Discord4j/2.10.1/javadoc/", target="_blank") Javadocs
          .column
            .title.is-5 Resources
            ul
              li
                a(href="https://github.com/Discord4J/Discord4J/wiki", target="_blank") GitHub Wiki
              li
                a(href="https://projectreactor.io/docs/core/release/reference/", target="_blank") Reactor Guide
              li
                a(href="https://discordapp.com/developers/docs/intro", target="_blank") Discord API
          .column
            .title.is-5 Community
            ul
              li
                a(href="https://github.com/Discord4J", target="_blank") GitHub
              li
                a(href="https://discord.gg/NxGAeCY", target="_blank") Discord
    .bottom
      .container
        p Copyright © 2018 Discord4J - Licensed under 
          a(href="https://www.gnu.org/licenses/lgpl-3.0.en.html", target="_blank") LGPLv3
          | .
        p Powered by 
          a.affiliate.smaller(href="https://vuejs.org", target="_blank")
            img(src="https://vuejs.org/images/logo.png", height="1")
</template>

<style lang="sass" scoped>
@import "@/sass/colours.sass"

footer.footer
  border-top: 2px solid #eee
  padding: 0
  background-color: $footer-light

.columns
  margin: 0

.top
  padding: 2rem 0 3rem 0

.bottom
  padding: 2rem 0 3rem 0
  border-top: 1px solid #eee
  background-color: $footer-dark

img
  max-height: 1.25rem
  vertical-align: middle
  display: inline-block
</style>
