<template lang="pug">
    section.section.get-started
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
              .code-wrapper(:style="{ height: heightPx }")
                transition(name="slide-fade", tag="div", mode="out-in")
                  prism(v-if="index === 0", key="gradle", language="groovy") {{ gradle }}
                  prism(v-if="index === 1", key="maven", language="xml") {{ maven }}
                  prism(v-if="index === 2", key="sbt", language="java") {{ sbt }}
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
export default class GetStarted extends Vue {
  public heightPx: string = "279px"
  public gradle = gradle
  public maven = maven
  public sbt = sbt

  public index: number = 0 // 0, 1, 2

  public setIndex(num: number): void {
    this.index = num
    if (this.index === 0) {
      this.heightPx = "279px"
    } else if (this.index === 1) {
      this.heightPx = "24rem"
    } else {
      this.heightPx = "195px"
    }
  }
}
</script>

<style lang="scss">
@import "../colours.scss";

a.code:hover {
  code {
    text-decoration: underline;
  }
}

.box.code .tabs {
  margin: 0;
}

.code-wrapper {
  transition: height 0.25s ease-in-out;
}

.get-started {
  background: #f2f3f7;
  p {
    text-align: left;
    padding: 0 2rem;
  }
}

.box.code .tabs {
  margin: 0;
}

.code-wrapper {
  transition: height 0.25s ease-in-out;
}

.get-started {
  background: #f2f3f7;
  p {
    text-align: left;
    padding: 0 2rem;
  }
}

.slide-fade-enter-active {
  transition: all 0.25s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.15s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
