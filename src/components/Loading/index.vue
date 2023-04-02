<script lang='ts' setup>
export interface Props {
  color: string
}

withDefaults(defineProps<Props>(), {
  color: '#fff',
})

const options = inject('options', {
  loading: false,
  text: '加载中...',
})
</script>

<template>
  <div v-show="options.loading" class="loading">
    <div class="loading-bar-container">
      <div class="loading-bar" />
      <div class="loading-bar" />
      <div class="loading-bar" />
      <div class="loading-bar" />
      <div class="loading-bar" />
    </div>

    <div class="loading-text" :style="`color: ${color} !important`">
      {{ options.text }}
    </div>
  </div>
</template>

<style scoped>
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loading-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-bar {
  width: 5px;
  height: 20px;
  margin: 0 5px;
  background-color: #5ec5cc;
  animation: loading 1s ease-in-out infinite;
}

.loading-bar:nth-child(1) {
  animation-delay: 0.1s;
}

.loading-bar:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-bar:nth-child(3) {
  animation-delay: 0.3s;
}

.loading-bar:nth-child(4) {
  animation-delay: 0.4s;
}

.loading-bar:nth-child(5) {
  animation-delay: 0.5s;
}

.loading-text {
  margin-top: 20px;
  font-size: 18px;
  color: #5ec5cc;
}

@keyframes loading {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 2.5);
  }
  40% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
