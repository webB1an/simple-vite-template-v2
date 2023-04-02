import { createApp } from 'vue'
import type { App } from 'vue'
import LoadingComponent from './index.vue'
import type { Props as LoadingProps } from './index.vue'

const options = reactive({
  loading: true,
  text: '加载中...',
})

function LoadingService(rootProps: LoadingProps) {
  const instance = createApp(LoadingComponent, { ...rootProps })
  // provide must above mount
  instance.provide('options', options)

  const vm = instance.mount(document.createElement('div'))
  document.body.appendChild(vm.$el)

  return {
    setText(text: string) {
      options.text = text
    },
    hide() {
      options.loading = false
      instance.unmount()
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
