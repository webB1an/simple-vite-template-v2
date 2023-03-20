import { defineStore } from 'pinia'
import { store } from '~/store'

export const useAppStore = defineStore('app-store', {
  state: () => {
    return {
    }
  },
  actions: {

  },
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
