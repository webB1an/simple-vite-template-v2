<script lang='ts' setup>
import { Loading } from '~/components'
const router = useRouter()

// 第一种使用方式
const loadingInstance = Loading.service({
  color: 'red',
})

setTimeout(() => {
  loadingInstance.setText('正在加油加载中...')
}, 1000)

setTimeout(() => {
  loadingInstance.setText('还需要加载一会儿...')
}, 1000)

setTimeout(() => {
  loadingInstance.hide()
}, 5000)

// 第二种使用方式
/* const $loading = getCurrentInstance()!.proxy!.$loading

$loading.show({
  color: 'red',
})

setTimeout(() => {
  $loading.setText('加载完成')
}, 1000)

setTimeout(() => {
  $loading.hide()
}, 5000) */
</script>

<template>
  <div class="flex justify-center items-center max-w-lg h-screen m-auto text-4xl text-sky font-bold">
    <span class="hover:text-sky-200 cursor-pointer hover:underline">Home</span>
    <span class="ml-10 hover:text-sky-200 cursor-pointer hover:underline" @click="router.push('/markdown')">Markdown</span>
  </div>
</template>

<style lang='scss' scoped>
</style>
