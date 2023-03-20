<script lang='ts' setup>
const router = useRouter()
</script>

<template>
  <div class="flex justify-center items-center max-w-lg h-screen m-auto text-4xl text-sky font-bold">
    <span class="hover:text-sky-200 cursor-pointer hover:underline">Home</span>
    <span class="ml-10 hover:text-sky-200 cursor-pointer hover:underline" @click="router.push('/markdown')">Markdown</span>
  </div>
</template>

<style lang='scss' scoped>
</style>
