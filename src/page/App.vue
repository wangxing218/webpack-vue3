<template>
  <router-view />
</template>

<script>
import { reactive, toRefs } from 'vue'
var a = 1
export default {
  setup() {
    const state = reactive({
      msg: 'Hello App',
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
