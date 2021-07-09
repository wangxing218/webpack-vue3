declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
interface Window {
  __POWERED_BY_QIANKUN__: boolean
}
