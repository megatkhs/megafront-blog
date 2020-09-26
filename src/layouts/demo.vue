<script lang="tsx">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return () => (
      <div id="content">
        <nuxt />
      </div>
    )
  },
})
</script>
