<template>
  <div class="toast-wrapper" :class="[type, animate]" v-if="flag">
    <div class="toast-content">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      show: true,
    };
  },
  computed: {
    animate() {
      return this.show ? "fade-in" : "fade-out";
    },
  },
};
</script>

<style scoped>
.toast-wrapper {
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: fixed;
  top: 0;
  margin-top: 30px;
  border-radius: 10px;
  left: calc(50% - 100px);
}
.toast-content {
  color: #fff;
  font-weight: 600;
}
.suc {
  background-color: #67c23a;
}
.err {
  background-color: #f56c6c;
}
@keyframes fadeIn {
  0% {
    top: -80px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    top: 0px;
    opacity: 1;
  }
  100% {
    top: -80px;
    opacity: 0;
  }
}
.fade-in {
  animation: fadeIn 0.3s;
}
.fade-out {
  animation: fadeOut 0.3s;
}
</style>>
