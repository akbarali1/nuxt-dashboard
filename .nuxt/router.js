import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4258d5fd = () => interopDefault(import('../pages/academic.vue' /* webpackChunkName: "pages/academic" */))
const _0afa2ac0 = () => interopDefault(import('../pages/academic/index.vue' /* webpackChunkName: "pages/academic/index" */))
const _97c5a2de = () => interopDefault(import('../pages/course.vue' /* webpackChunkName: "pages/course" */))
const _59927758 = () => interopDefault(import('../pages/course/index.vue' /* webpackChunkName: "pages/course/index" */))
const _b484c3c0 = () => interopDefault(import('../pages/data.vue' /* webpackChunkName: "pages/data" */))
const _6d230ca3 = () => interopDefault(import('../pages/data/index.vue' /* webpackChunkName: "pages/data/index" */))
const _21150bcf = () => interopDefault(import('../pages/finances.vue' /* webpackChunkName: "pages/finances" */))
const _085189dc = () => interopDefault(import('../pages/finances/index.vue' /* webpackChunkName: "pages/finances/index" */))
const _3b372043 = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _696d2886 = () => interopDefault(import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */))
const _58038264 = () => interopDefault(import('../pages/notice.vue' /* webpackChunkName: "pages/notice" */))
const _76301a5e = () => interopDefault(import('../pages/notice/index.vue' /* webpackChunkName: "pages/notice/index" */))
const _5b52d765 = () => interopDefault(import('../pages/programs.vue' /* webpackChunkName: "pages/programs" */))
const _64377e28 = () => interopDefault(import('../pages/programs/index.vue' /* webpackChunkName: "pages/programs/index" */))
const _0bc54568 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4479d91c = () => interopDefault(import('../pages/scholarship.vue' /* webpackChunkName: "pages/scholarship" */))
const _4aee1a9f = () => interopDefault(import('../pages/scholarship/index.vue' /* webpackChunkName: "pages/scholarship/index" */))
const _0e502e0e = () => interopDefault(import('../pages/students.vue' /* webpackChunkName: "pages/students" */))
const _69597211 = () => interopDefault(import('../pages/students/index.vue' /* webpackChunkName: "pages/students/index" */))
const _e2c0823e = () => interopDefault(import('../pages/transfer.vue' /* webpackChunkName: "pages/transfer" */))
const _4d7fd8a4 = () => interopDefault(import('../pages/transfer/index.vue' /* webpackChunkName: "pages/transfer/index" */))
const _3f873782 = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _b48ed6f6 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/academic",
    component: _4258d5fd,
    children: [{
      path: "",
      component: _0afa2ac0,
      name: "academic___en"
    }]
  }, {
    path: "/course",
    component: _97c5a2de,
    children: [{
      path: "",
      component: _59927758,
      name: "course___en"
    }]
  }, {
    path: "/data",
    component: _b484c3c0,
    children: [{
      path: "",
      component: _6d230ca3,
      name: "data___en"
    }]
  }, {
    path: "/finances",
    component: _21150bcf,
    children: [{
      path: "",
      component: _085189dc,
      name: "finances___en"
    }]
  }, {
    path: "/Login",
    component: _3b372043,
    children: [{
      path: "",
      component: _696d2886,
      name: "Login___en"
    }]
  }, {
    path: "/notice",
    component: _58038264,
    children: [{
      path: "",
      component: _76301a5e,
      name: "notice___en"
    }]
  }, {
    path: "/programs",
    component: _5b52d765,
    children: [{
      path: "",
      component: _64377e28,
      name: "programs___en"
    }]
  }, {
    path: "/ru",
    component: _0bc54568,
    name: "index___ru"
  }, {
    path: "/scholarship",
    component: _4479d91c,
    children: [{
      path: "",
      component: _4aee1a9f,
      name: "scholarship___en"
    }]
  }, {
    path: "/students",
    component: _0e502e0e,
    children: [{
      path: "",
      component: _69597211,
      name: "students___en"
    }]
  }, {
    path: "/transfer",
    component: _e2c0823e,
    children: [{
      path: "",
      component: _4d7fd8a4,
      name: "transfer___en"
    }]
  }, {
    path: "/users",
    component: _3f873782,
    children: [{
      path: "",
      component: _b48ed6f6,
      name: "users___en"
    }]
  }, {
    path: "/ru/academic",
    component: _4258d5fd,
    children: [{
      path: "",
      component: _0afa2ac0,
      name: "academic___ru"
    }]
  }, {
    path: "/ru/course",
    component: _97c5a2de,
    children: [{
      path: "",
      component: _59927758,
      name: "course___ru"
    }]
  }, {
    path: "/ru/data",
    component: _b484c3c0,
    children: [{
      path: "",
      component: _6d230ca3,
      name: "data___ru"
    }]
  }, {
    path: "/ru/finances",
    component: _21150bcf,
    children: [{
      path: "",
      component: _085189dc,
      name: "finances___ru"
    }]
  }, {
    path: "/ru/Login",
    component: _3b372043,
    children: [{
      path: "",
      component: _696d2886,
      name: "Login___ru"
    }]
  }, {
    path: "/ru/notice",
    component: _58038264,
    children: [{
      path: "",
      component: _76301a5e,
      name: "notice___ru"
    }]
  }, {
    path: "/ru/programs",
    component: _5b52d765,
    children: [{
      path: "",
      component: _64377e28,
      name: "programs___ru"
    }]
  }, {
    path: "/ru/scholarship",
    component: _4479d91c,
    children: [{
      path: "",
      component: _4aee1a9f,
      name: "scholarship___ru"
    }]
  }, {
    path: "/ru/students",
    component: _0e502e0e,
    children: [{
      path: "",
      component: _69597211,
      name: "students___ru"
    }]
  }, {
    path: "/ru/transfer",
    component: _e2c0823e,
    children: [{
      path: "",
      component: _4d7fd8a4,
      name: "transfer___ru"
    }]
  }, {
    path: "/ru/users",
    component: _3f873782,
    children: [{
      path: "",
      component: _b48ed6f6,
      name: "users___ru"
    }]
  }, {
    path: "/",
    component: _0bc54568,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
