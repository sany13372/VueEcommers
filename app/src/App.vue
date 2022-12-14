<template>
  <component :is="resolveLayout">
    <router-view></router-view>

  </component>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useRouter } from '@/utils'
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'
import LayoutDataOrder from '@/layouts/DataOrder.vue'

export default {
  components: {
    LayoutBlank,
    LayoutContent,
    LayoutDataOrder
  },
  setup() {
    const { route } = useRouter()

    const resolveLayout = computed(() => {
      // Handles initial route
      if (route.value.name === null) return null

      if (route.value.meta.layout === 'blank') return 'layout-blank'

      if (route.value.meta.layout === 'order') return 'layout-Data-Order'

      return 'layout-content'
    })

    return {
      resolveLayout,
    }
  },
}
</script>
