import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css' // fonticon 图标库

const app = createApp(App)

//注册全局组件
import cButton from './components/c-button.vue'
import cIcon from './components/c-icon.vue'
import cGroupButton from './components/c-group-button.vue'
import cInput from './components/c-input.vue'
import cCol from './components/c-col.vue'
import cRow from './components/c-row.vue'
app.component("cButton",cButton);
app.component("cIcon",cIcon);
app.component("cGroupButton",cGroupButton);
app.component("cInput",cInput);
app.component("cCol",cCol);
app.component("cRow",cRow);

app.use(store).use(router).mount('#app')

