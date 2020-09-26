<script lang="tsx">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TopPage',
  layout: 'demo',
  setup() {
    return () => (
      <article class="demo article">
        <header class="demo__cont">
          <h1 class="demo__logo">.zezehihi</h1>
          <p class="demo__desc">新卒フロントエンドエンジニアの技術ブログ</p>
          <p class="demo__txt">Coming Soon</p>
        </header>
      </article>
    )
  },
})
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  flex-direction: column;
  padding: 80px 20px;

  &__cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__logo {
    font-family: font.$family-display;
    font-size: 4.2rem;
    letter-spacing: 0;
    margin-bottom: 8px;
    font-weight: normal;
  }

  &__desc {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 24px;
  }

  &__txt {
    font-size: 2rem;
  }
}
</style>

<style lang="scss">
html {
  background: #f4f7fb;
  color: #1e446a;
}
</style>
