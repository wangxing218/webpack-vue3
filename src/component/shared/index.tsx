import { defineComponent } from 'vue'

export function load() {
  return defineComponent({
    setup() {
      return () => <div>tsx</div>
    },
  })
}
