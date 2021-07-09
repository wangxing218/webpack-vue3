<template>
  <div style="height: 800px">
    <div class="pdb-bg box">
      {{ name }}
    </div>
    <van-button type="primary" :name="'wefwe'" :aebb="false" :func="12312" @click="handle">
      我的来了
    </van-button>
  </div>
</template>

<script lang="ts">
import { get } from '../service/ajax'
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      name: 'Login',
    }
  },
  computed: {},
  mounted() {},
  methods: {
    async handle() {
      const res = await get('/list', {}, {})
      console.log(res)
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  color: #f00;
}
</style>
