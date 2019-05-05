import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/HelloWorld.1'
import HelloWorld2 from '@/components/HelloWorld.2'
import HelloWorld3 from '@/components/HelloWorld.3'
import HelloWorld4 from '@/components/HelloWorld.4'
import HelloWorld5 from '@/components/HelloWorld.5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'HelloWorld1',
      component: HelloWorld1
    },
    {
      path: '/b',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/c',
      name: 'HelloWorld3',
      component: HelloWorld3
    },
    {
      path: '/d',
      name: 'HelloWorld4',
      component: HelloWorld4
    },
    {
      path: '/e',
      name: 'HelloWorld5',
      component: HelloWorld5
    }
  ]
})
