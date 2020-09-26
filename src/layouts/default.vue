<script lang="tsx">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return () => (
      <div id="content">
        <header id="header"></header>
        <main id="main" class="main" role="main">
          <div class="main__inner">
            <nuxt />
          </div>
        </main>
        <footer id="footer"></footer>
      </div>
    )
  },
})
</script>

<style></style>
