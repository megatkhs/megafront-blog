<script lang="tsx">
import { defineComponent, useAsync } from '@nuxtjs/composition-api'
import { Ref } from '@vue/composition-api'
import { IContentDocument } from '@nuxt/content/types/content'

export default defineComponent({
  name: 'ArticleDetailPage',
  setup(_, { root }) {
    const { $route, $content } = root

    const content = useAsync(async () => {
      const { slug } = $route.params
      const path = `/articles/${slug}`
      let result = await $content(path).fetch()
      if (typeof result === 'object' && Array.isArray(result)) {
        result = await $content(`${path}/index`).fetch()
      }
      return result
    }) as Ref<IContentDocument>

    return () => (
      <article class="article">
        <header class="article__header">
          <h1 class="article__headerTtl">{content.value.title}</h1>
        </header>
        <nuxt-content document={content.value} />
      </article>
    )
  },
})
</script>
<style lang="scss">
p + p {
  font-size: 1.5em;
}
</style>
