import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Line from '@/components/Line'
import Bar from '@/components/Bar'
import Scattar from '@/components/Scatter'
import Map from '@/components/Map'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Line',
      component: Line
    },{
      path: '/bar',
      name: 'Bar',
      component: Bar
    },{
      path: '/scatter',
      name: 'Scattar',
      component: Scattar
    },{
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
