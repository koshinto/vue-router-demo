import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Links from '@/components/Links'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        link: Links
      }
    },
    {
      path: '/about',
      name: 'About',
      components: {
        default: About,
        link: Links
      }
    }
  ]
})
