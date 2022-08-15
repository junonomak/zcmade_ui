import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css' // fonticon 图标库

const app = createApp(App)

//注册全局组件
import cButton from './components/Button/c-button.vue'
import cGroupButton from './components/Button/c-group-button.vue'
import cIcon from './components/Icon/c-icon.vue'
import cInput from './components/Input/c-input.vue'
import cCol from './components/Grid/c-col.vue'
import cRow from './components/Grid/c-row.vue'
import cLayout from './components/Layout/c-layout.vue'
import cFooter from './components/Layout/c-footer.vue'
import cHeader from './components/Layout/c-header.vue'
import cContent from './components/Layout/c-content.vue'
import cSider from './components/Layout/c-sider.vue'
import {Toast} from './components/Toast/toast.js'
import cTabs from './components/Tabs/c-tabs.vue'
import cTabsHead from './components/Tabs/c-tabs-head.vue'
import cTabsItems from './components/Tabs/c-tabs-items.vue'
import cCard from './components/Card/c-card.vue'
import cSwitch from './components/Switch/c-switch.vue'

app.component("cButton",cButton);
app.component("cIcon",cIcon);
app.component("cGroupButton",cGroupButton);
app.component("cInput",cInput);
app.component("cCol",cCol);
app.component("cRow",cRow);
app.component("cLayout",cLayout);
app.component("cFooter",cFooter);
app.component("cHeader",cHeader);
app.component("cContent",cContent);
app.component("cSider",cSider);
app.component("cTabs",cTabs);
app.component("cTabsHead",cTabsHead);
app.component("cTabsItems",cTabsItems);
app.component("cCard",cCard);
app.component("cSwitch",cSwitch);


app.use(store).use(router).mount('#app')


