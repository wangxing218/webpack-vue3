<template>
  <div class="wrap">
    <div class="con flex-column align-stretch">
      <div class="pd-md flex justify-around">
        <router-link to="/">首页</router-link>
        <router-link to="/login">登录</router-link>
      </div>
      <div class="flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {
      name: '24',
    }
  },
}
</script>

<style lang="scss" scoped></style>
