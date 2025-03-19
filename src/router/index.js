import { createRouter, createWebHashHistory } from 'vue-router';
// createWebHistory / createWebHashHistory
import Home from '@/pages/Home.vue';
import List from '@/pages/List.vue';
import Item from '@/pages/Item.vue';
import My from '@/pages/My.vue';
import Cart from '@/pages/Cart.vue';
import store from '@/store'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/list',
    component: List,
    children: [
     { path: 'item', component: Item }
    ]
  },
  {
    path: '/item/:id',
    component: Item,
  },
  {
    path: '/my',
    component: My,
  },
  {
    path: '/cart',
    component: Cart,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn; // 从 Vuex 获取登录状态

  if (to.meta.requiresAuth && !isLoggedIn) {
    // 如果目标路由需要登录且用户未登录，则重定向到登录页
    next('/login');
  } else if (to.path === '/login' && isLoggedIn) {
    // 如果用户已登录但尝试访问登录页，则重定向到首页
    next('/');
  } else {
    // 否则，继续导航
    next();
  }
});

export default router;