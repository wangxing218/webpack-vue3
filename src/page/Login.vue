<template>
  <div style="height: 800px">
    <div class="pdb-bg box">
      {{ name }}
    </div>
    <van-button type="primary" :name="'wefwe'" :aebb="false" :func="12312" @click="handle">
      Loewewgin
    </van-button>
  </div>
</template>

<script>
import nprogrss from 'nprogress'
import 'nprogress/nprogress.css'
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
    handle() {
      nprogrss.start(0.6)
      this.name = '点击了'
      console.log('this: ')
      setTimeout(() => {
        nprogrss.done()
      }, 3000)
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  color: #f00;
}
</style>
