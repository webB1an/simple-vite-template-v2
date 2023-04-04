import type { App } from 'vue'

const directives = import.meta.glob<Record<string, () => {}>>('./**/*.ts', { eager: true })

export function setDirectives(app: App) {
  Object.keys(directives).forEach((key) => {
    app.directive(directives[key].default.name, directives[key].default)
  })
}
