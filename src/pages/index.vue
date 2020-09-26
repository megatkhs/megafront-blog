<template lang="pug">
  .container
    logo
    a(href="") みなさんこんにちは
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ArticleDetailPage extends Vue {}
</script>

<style lang="scss">
p + p {
  font-size: 1.5em;
}
</style>
