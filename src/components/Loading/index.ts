import { createApp } from 'vue'
import type { App } from 'vue'
import LoadingComponent from './index.vue'

export type Data = Record<string, unknown>

const options = reactive({
  loading: true,
  text: '加载中...',
})

let loadingInstance: App

function LoadingService(rootProps: Data) {
  loadingInstance = createApp(LoadingComponent, rootProps)
  // provide must above mount
  loadingInstance.provide('options', options)

  const vm = loadingInstance.mount(document.createElement('div'))
  document.body.appendChild(vm.$el)

  return {
    setText(text: string) {
      options.text = text
    },
    hide() {
      options.loading = false
      loadingInstance.unmount()
    },
  }
}

export const Loading = {
  install(app: App) {
    app.config.globalProperties.$loading = LoadingService
  },
  service: LoadingService,
}

export default Loading
