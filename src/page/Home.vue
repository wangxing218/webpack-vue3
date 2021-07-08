<template>
  <div class="flex-column height-full">
    <img class="mgb-bg" src="@/image/logo.gif" alt="" />
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '这个不错吧',
      arr: ['gd ', 1, 4],
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.title {
  color: #0080ff;
}
</style>
