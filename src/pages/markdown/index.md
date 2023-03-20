<div class="text-center my-6">
  <!-- You can use Vue components inside markdown -->
  <div i-carbon:aperture class="text-4xl m-auto"/>
  <h3 class="mt-2">Markdown Example</h3>
</div>

- Markdown 使用方法参考 [博客](https://webb1an.github.io/blog/front-end/vue3.html#vue3-%E6%94%AF%E6%8C%81-markdown)，Markdown 是基于 [@antfu](https://github.com/antfu) 的 [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown) 项目。
- 项目架构基于 [Vitesse](https://github.com/antfu/vitesse)
- 项目集成了：
  - [unplugin-vue-macros](https://github.com/sxzz/unplugin-vue-macros) - 一个 Vue3 的宏插件，可以让你在 Vue3 中使用 Vue2 的写法，比如 `defineOptions`、`defineProps`、`defineEmits` 等等。
  - [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 一个自动导 api 的插件，可以让你在使用 api 的时候不用手动导入，比如 `import { ref } from 'vue'`，只需要在使用的时候 `ref` 就可以了。
  - [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 一个自动导入组件的插件，可以让你在使用组件的时候不用手动导入，比如 `import { Button } from 'ant-design-vue'`，只需要在使用的时候 `Button` 就可以了。


#### 代码块展示

```js
const a = 'hello world'
```

```js
function bubbleSort(arr: number[]): number[] {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1])
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // ES6 解构赋值交换两个元素的值

    }
  }
  return arr
}
```

