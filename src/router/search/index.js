import Search from '../../views/Search.vue'

export default [
  {
    path: '/',
    name: 'search-index',
    beforeEnter: async (to, params, next) => {
      // await Store.dispatch('initLocationFromLocalStorage')
      // await Store.dispatch('initLocationFromLocalStorage')
      next()
    },
    component: Search
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
