<template>
  <router-view />
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      msg: 'Hello App',
      hello: '这个好',
    })
    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  color: #0080ff;
}
</style>
