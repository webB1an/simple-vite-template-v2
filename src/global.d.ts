export {}

import { Data } from './components'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $loading: (rootProps: Data) => {
      setText(text: string): void
      hide(): void
    }
  }
}
