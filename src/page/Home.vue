<template>
  <div class="flex-column height-full">
    <img class="mgb-bg" src="@image/logo.gif" alt="" />
    <h1 class="title">{{ title }}</h1>
    <hello></hello>
  </div>
</template>

<script lang="ts">
import { get } from '@/service/ajax'
import { load } from '@/component/shared/index'
export default {
  components: {
    hello: load(),
  },
  data() {
    return {
      title: '这个不错吧',
      arr: ['gd ', 1, 4],
    }
  },
  async mounted() {
    var a = 1231
    const res = await get('/list', { name: 33 }, {})
  },
}
</script>

<style lang="scss" scoped>
.title {
  color: #0080ff;
}
</style>
