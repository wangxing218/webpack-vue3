// import "core-js/features/promise";
// import config from './config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from "./store";
import '@/css/common.scss'
import '@/css/home.scss'

let app = createApp(App)
app.use(router)
app.config.productionTip = false

import { Button } from 'vant'
app.use(Button)

app.mount('#app')

// let instance;

// function render(props) {
//   instance = new Vue({
//     store,
//     router,
//     render: h => h(App)
//   }).$mount(props ? props.container.querySelector("#app") : "#app");
// }

// // 独立运行时
// if (!config.inQiankun) {
//   render();
// }
// export async function bootstrap() {
//   console.log("[vue] vue app bootstraped");
// }
// export async function mount(props) {
//   console.log("[vue] props from main framework", props);
//   render(props);
// }
// export async function unmount() {
//   instance.$destroy();
//   instance.$el.innerHTML = "";
//   instance = null;
// }
