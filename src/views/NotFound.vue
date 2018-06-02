<template lang="pug">
  section.section.not-found
    h1.title Oops.
    p.subtitle This page doesn't exist!
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class NotFound extends Vue {}
</script>

<style lang="scss">
</style>
