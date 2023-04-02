import type { App } from 'vue'

interface Plugin {
  install: (app: App) => void
}

const components = import.meta.glob<Record<string, Plugin>>('./**/*.ts', { eager: true })

export function setComponents(app: App) {
  Object.keys(components).forEach((key) => {
    app.use(components[key].default)
  })
}

export * from './Loading'
