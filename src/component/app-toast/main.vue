<template>
  <transition name="mea-fade">
    <div v-show="show" class="mea-toast" :style="style">
      <div class="mea-toast-message">
        {{ content }}
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      content: '',
      duration: 2000,
      style: {},
    }
  },
}
</script>
<style lang="scss" scoped>
.mea-toast {
  position: fixed;
  z-index: 9999;
  line-height: 0.34rem;
  left: 50%;
  transform: translate(-50%, 0);
  top: 100px;
}

.mea-toast-message {
  font-size: 0.28rem;
  padding: 0.24rem 0.32rem;
  text-align: center;
  color: #fff;
  border-radius: 0.12rem;
  background: #323232;
  opacity: 0.9;
}

.mea-fade-enter,
.mea-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -120px);
}

.mea-fade-enter-active,
.mea-fade-leave-active {
  transition: transform 0.25s, opacity 0.25s;
}
</style>
