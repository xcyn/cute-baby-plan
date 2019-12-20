import VueRouter from 'vue-router'
import Vue from 'vue'
const isDev = process.env.NODE_ENV === "development";

Vue.use(VueRouter)

const notFound = {
  path: '*',
  redirect: '/'
}
const defaultPage = {
  path: '/',
  redirect: {
    name: ''
  }
}

const router = new VueRouter({
  mode: 'history',
  base: isDev ? '/' : '/activity',
  routes: [
    {
      path: '/',
      name: 'baby',
      redirect: 'baby'
    },
    {
      path: '/baby',
      name: 'baby',
      component: () => import(/* webpackChunkName: 'baby' */'@/pages/baby/index.vue'),
      children: [
        {
          path: 'all',
          name: 'all',
          component: ()=>import(/* webpackChunkName: '-all' */'@/pages/baby/all/index.vue')
        }
      ]
    },
    notFound,
    defaultPage
  ]
})

export default router
