import App from './App.vue';
import {createApp} from 'vue'
import  {createRouter,createWebHashHistory} from 'vue-router'

import Layout from './components/Layout.vue';
import Index from './components/Index.vue';
import About from './components/About.vue';
import MenuList from './components/menu/List.vue';
import MenuDetail from './components/menu/Detail.vue';

import AdminLayout from './components/admin/Layout.vue';
import AdminMenuList from './components/admin/menu/List.vue';
// import AdminIndex from './components/admin/Index.vue';
// 라우터 추가
const routes = [
    {path: '/index', component: Index},
    { path: '/', component: Layout, children:[
        // {path: 'index', component: Index},
        {path: 'menu/list', component: MenuList},
        {path: 'menu/detail', component: MenuDetail},
        {path: 'about', component: About},
    ]},
    { path: '/admin', component: AdminLayout, children:[
      {path: 'menu/list', component: AdminMenuList},
      // {path: '/index', component: AdminIndex}, 

  ]}
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })



createApp(App)
.use(router) //라우터 추가
.mount("#app");