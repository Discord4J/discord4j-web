<template lang="pug">
  section.section#getting-started
    .container
      .columns
        .column
          h2.title Getting Started
          p Discord4J is split up into different modules for maximum flexibility. You may pick and use only what you need from the 
            a(href="https://github.com/Discord4J/Discord4J#modules") modules list
            | .
          br
          p To interact with all facets of the Discord API built on top of all the other modules, import the 
            a.code(href="https://github.com/Discord4J/Discord4J#core")
              code.inline core
            |  module into your favourite dependency manager (see the example configurations).
        .column#snippets
          h2.title Configuration
          .box.code
            .version
              a.button.is-small(href="https://github.com/Discord4J/Discord4J/releases", target="_blank") {{ version }}
            .tabs.is-centered
              ul
                li(@click="setIndex(0)", :class="{'is-active': index === 0}")
                  a Gradle
                li(@click="setIndex(1)", :class="{'is-active': index === 1}")
                  a Kotlin
                li(@click="setIndex(2)", :class="{'is-active': index === 2}")
                  a Maven
                li(@click="setIndex(3)", :class="{'is-active': index === 3}")
                  a SBT
            .code-wrapper(:style="{ height: heightPx }")
              transition(name="slide-fade", tag="div", mode="out-in")
                prism(v-if="index === 0", key="gradle", language="groovy") {{ indexes[0].text }}
                prism(v-if="index === 1", key="kotlin", language="kotlin") {{ indexes[1].text }}
                prism(v-if="index === 2", key="maven", language="xml") {{ indexes[2].text }}
                prism(v-if="index === 3", key="sbt", language="java") {{ indexes[3].text }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Prism from "vue-prism-component"
import axios from "axios"
import gs, { TextLines } from "@/snippets/getting-started"

const VERSIONS_API = "https://api.discord4j.com/versions"

interface VersionResponse {
  prerelease: boolean
  tag: string
  title: string
  url: string
}

@Component({
  components: {
    Prism,
  },
})
export default class GettingStarted extends Vue {
  public indexes: TextLines[] = [gs.gradle, gs.kotlin, gs.maven, gs.sbt]
  public index: number = 0 // 0, 1, 2, 3 for selecting gradle, kotlin, maven, or sbt
  private version: string = gs.version

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

  public mounted() {
    axios.get(VERSIONS_API).then(response => {
      const versions: VersionResponse[] = response.data
      gs.version = versions.find(v => !v.prerelease)!.tag
      this.version = gs.version
      this.indexes = [gs.gradle, gs.kotlin, gs.maven, gs.sbt]
    })
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
  background-color: #f2f3f7
  h2
    text-align: center
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
