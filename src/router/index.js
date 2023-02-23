import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = (resolve) => {
  import('@/components/index').then((module) => {
    resolve(module)
  })
}

const Category = (resolve) => {
  import('@/components/category/category').then((module) => {
    resolve(module)
  })
}

const Member = (resolve) => {
  import('@/components/member/member').then((module) => {
    resolve(module)
  })
}

const Info = (resolve) => {
  import('@/components/member/info').then((module) => {
    resolve(module)
  })
}

const Detail = (resolve) => {
  import('@/components/detail/detail').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/info',
      component: Info
    },
    {
      path: '/detail',
      component: Detail
    },
  ]
})
