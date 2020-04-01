import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios';
import NProgress from 'nprogress';
import VueAxios from 'vue-axios';

import Create from '@/components/Create.vue';
import Edit from '@/components/Edit.vue';
import Index from '@/components/Index.vue';


//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(VueAxios, axios);

const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
  },
];
//const router = new VueRouter({ mode: 'history', routes: routes });



// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

export default new Router({
   mode: 'history', routes: routes 
})
