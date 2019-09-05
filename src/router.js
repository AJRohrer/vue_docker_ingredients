import Vue from 'vue'
import Router from 'vue-router'
import CategoryList from './components/categorylist.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'categorylist',
            component: CategoryList
        },
        {
            path: '/',
            name: 'ingredient',
            component: CategoryList
        },
        {
            path: '/about/:name',
            name: 'aboutname',
            component: About
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})