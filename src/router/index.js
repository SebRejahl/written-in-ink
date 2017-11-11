import Vue from 'vue'
import Router from 'vue-router'
import start from '@/components/start'
import VTooltip from 'v-tooltip'

Vue.use(Router)
Vue.use(VTooltip)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    { path: '*', redirect: '/'}
  ]
})
