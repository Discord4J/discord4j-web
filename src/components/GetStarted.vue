<template lang="pug">
    section.section.get-started
      .container
        .columns
          .column
            h2.title Getting Started
            p Discord4J is split up into different modules for maximum flexibility. You may pick and use only what you need from the 
              a(href="https://github.com/Discord4J/Discord4J/tree/v3#modules") modules list
              | . To interact with all facets of the Discord API built on top of all the other modules, import the 
              code.inline core
              |  module into your favourite dependency manager.
            .title
              i.fas.fa-spinner.fa-9x
          .column
            h2.title Configuration
            .box.code
              .tabs.is-centered
                ul
                  li(@click="setIndex(0)", :class="{'is-active': index === 0}")
                    a Gradle
                  li(@click="setIndex(1)", :class="{'is-active': index === 1}")
                    a Maven
                  li(@click="setIndex(2)", :class="{'is-active': index === 2}")
                    a SBT
              transition(name="slide-fade", tag="div", mode="out-in")
                .a(v-if="index === 0", key="0", style="height: 279px;")
                  prism(language="groovy") {{ gradle }}
                .a(v-if="index === 1", key="1", style="height: 24rem;")
                  prism(language="xml") {{ maven }}
                .a(v-if="index === 2", key="2", style="height: 195px;")
                  prism(language="java") {{ sbt }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Prism from "vue-prism-component"

@Component({
  components: {
    Prism,
  },
})
export default class GetStarted extends Vue {
  public index: number = 0 // 0, 1, 2

  public maven: string = `<!-- pom.xml -->

<repositories>
  <repository>
    <id>jitpack.io</id>
    <url>https://jitpack.io</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>com.github.Discord4J.Discord4J</groupId>
    <artifactId>Discord4J-core</artifactId>
    <version>@VERSION@</version>
  </dependency>
</dependencies>`

  public gradle: string = `// build.gradle

repositories {
  maven {
    url  "https://jitpack.io"
  }
}

dependencies {
  compile "com.github.Discord4J.Discord4J:Discord4J-core:@VERSION@"
}`

  public sbt: string = `// build.sbt

libraryDependencies ++= Seq(
  "com.github.Discord4J.Discord4J" % "Discord4J-core" % "@VERSION@"
)

resolvers += "jitpack.io" at "https://jitpack.io"`

  public setIndex(num: number): void {
    this.index = num
  }
}
</script>

<style lang="scss">
@import "../style.scss";

.box.code .tabs {
  margin: 0;
}

.a {
  transition: all .3s ease;
}

.get-started {
  background: #f2f3f7;
  p {
    text-align: left;
    padding: 0 2rem;
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: opacity .3s ease-in;
}
.slide-fade-leave-active {
  transition: opacity .3s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  // transform: translateX(10px);
  opacity: 0;
}
</style>
