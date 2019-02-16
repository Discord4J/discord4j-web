<template lang="pug">
  section.section#getting-started
    .container
      .columns
        .column
          h2.title Getting Started
          p Discord4J is split up into different modules for maximum flexibility. You may pick and use only what you need from the 
            a(href="https://github.com/Discord4J/Discord4J/tree/v3#modules") modules list
            | .
          br
          p To interact with all facets of the Discord API built on top of all the other modules, import the 
            a.code(href="https://github.com/Discord4J/Discord4J/tree/v3#core")
              code.inline core
            |  module into your favourite dependency manager (see the example configurations).
        .column#snippets
          h2.title Configuration
          .box.code
            .version
              a.button.is-small(href="https://github.com/Discord4J/Discord4J/releases", target="_blank") v3.0.0M1
            .tabs.is-centered
              ul
                li(@click="setIndex(0)", :class="{'is-active': index === 0}")
                  a Gradle
                li(@click="setIndex(1)", :class="{'is-active': index === 1}")
                  a Maven
                li(@click="setIndex(2)", :class="{'is-active': index === 2}")
                  a SBT
            .code-wrapper(:style="{ height: heightPx }")
              transition(name="slide-fade", tag="div", mode="out-in")
                prism(v-if="index === 0", key="gradle", language="groovy") {{ indexes[0].text }}
                prism(v-if="index === 1", key="maven", language="xml") {{ indexes[1].text }}
                prism(v-if="index === 2", key="sbt", language="java") {{ indexes[2].text }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Prism from "vue-prism-component"
import gradle from "@/snippets/gradle"
import maven from "@/snippets/maven"
import sbt from "@/snippets/sbt"

@Component({
  components: {
    Prism,
  },
})
export default class GettingStarted extends Vue {
  public indexes = [gradle, maven, sbt]
  public index: number = 0 // 0, 1, 2 for selecting gradle, maven, or sbt

  /**
   * Sets the height of the code snippet box based on the number of lines in the text
   */
  public get heightPx(): string {
    return this.indexes[this.index].lines * 21 + 51 + "px"
  }

  /**
   * Sets the current index for displaying the chosen configuration snippet
   */
  public setIndex(num: number): void {
    this.index = num
  }
}
</script>

<style lang="sass" scoped>
.code-wrapper
  height: 400px
  transition: height 0.25s ease-in-out

.box.code
  padding: 0
  max-width: 620px
  position: relative

.tabs
  margin: 0

#getting-started
  text-align: left
  h2
    text-align: center
  background-color: #f2f3f7
  p
    padding: 0 2rem

.version
  position: absolute
  right: 0
  top: 3.5em
  margin-right: 1.5em
  a.button
    font-weight: 600
    background: #F5F6FA
    font-family: inherit
    color: #649941
    &:hover
      border-color: #b5b5b5

.slide-fade-enter-active
  transition: all 0.25s ease-in-out

.slide-fade-leave-active
  transition: all 0.15s ease-in-out

.slide-fade-enter,
.slide-fade-leave-to
  transform: translateX(10px)
  opacity: 0
</style>
