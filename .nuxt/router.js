import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _19ffa616 = () => interopDefault(import('..\\pages\\academic\\index.vue' /* webpackChunkName: "pages/academic/index" */))
const _7063d17c = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _5a7bc113 = () => interopDefault(import('..\\pages\\data\\index.vue' /* webpackChunkName: "pages/data/index" */))
const _44c4a004 = () => interopDefault(import('..\\pages\\finances\\index.vue' /* webpackChunkName: "pages/finances/index" */))
const _a006cb64 = () => interopDefault(import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages/Login/index" */))
const _0c42b865 = () => interopDefault(import('..\\pages\\notice\\index.vue' /* webpackChunkName: "pages/notice/index" */))
const _2f2680a4 = () => interopDefault(import('..\\pages\\programs\\index.vue' /* webpackChunkName: "pages/programs/index" */))
const _7684b686 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5e945c15 = () => interopDefault(import('..\\pages\\scholarship\\index.vue' /* webpackChunkName: "pages/scholarship/index" */))
const _f0ed6e36 = () => interopDefault(import('..\\pages\\students\\index.vue' /* webpackChunkName: "pages/students/index" */))
const _282fb4b2 = () => interopDefault(import('..\\pages\\transfer\\index.vue' /* webpackChunkName: "pages/transfer/index" */))
const _05c2a3a2 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))

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
    component: _19ffa616,
    name: "academic___en"
  }, {
    path: "/course",
    component: _7063d17c,
    name: "course___en"
  }, {
    path: "/data",
    component: _5a7bc113,
    name: "data___en"
  }, {
    path: "/finances",
    component: _44c4a004,
    name: "finances___en"
  }, {
    path: "/Login",
    component: _a006cb64,
    name: "Login___en"
  }, {
    path: "/notice",
    component: _0c42b865,
    name: "notice___en"
  }, {
    path: "/programs",
    component: _2f2680a4,
    name: "programs___en"
  }, {
    path: "/ru",
    component: _7684b686,
    name: "index___ru"
  }, {
    path: "/scholarship",
    component: _5e945c15,
    name: "scholarship___en"
  }, {
    path: "/students",
    component: _f0ed6e36,
    name: "students___en"
  }, {
    path: "/transfer",
    component: _282fb4b2,
    name: "transfer___en"
  }, {
    path: "/users",
    component: _05c2a3a2,
    name: "users___en"
  }, {
    path: "/ru/academic",
    component: _19ffa616,
    name: "academic___ru"
  }, {
    path: "/ru/course",
    component: _7063d17c,
    name: "course___ru"
  }, {
    path: "/ru/data",
    component: _5a7bc113,
    name: "data___ru"
  }, {
    path: "/ru/finances",
    component: _44c4a004,
    name: "finances___ru"
  }, {
    path: "/ru/Login",
    component: _a006cb64,
    name: "Login___ru"
  }, {
    path: "/ru/notice",
    component: _0c42b865,
    name: "notice___ru"
  }, {
    path: "/ru/programs",
    component: _2f2680a4,
    name: "programs___ru"
  }, {
    path: "/ru/scholarship",
    component: _5e945c15,
    name: "scholarship___ru"
  }, {
    path: "/ru/students",
    component: _f0ed6e36,
    name: "students___ru"
  }, {
    path: "/ru/transfer",
    component: _282fb4b2,
    name: "transfer___ru"
  }, {
    path: "/ru/users",
    component: _05c2a3a2,
    name: "users___ru"
  }, {
    path: "/",
    component: _7684b686,
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
