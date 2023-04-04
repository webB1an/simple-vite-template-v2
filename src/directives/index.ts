import type { App } from 'vue'

interface Directive {
  name: string
  directive: Record<string, () => {}>
}

const directives = import.meta.glob<Record<string, Directive>>('./**/*.ts', { eager: true })

export function setDirectives(app: App) {
  Object.keys(directives).forEach((key) => {
    app.directive(directives[key].default.name, directives[key].default.directive)
  })
}
