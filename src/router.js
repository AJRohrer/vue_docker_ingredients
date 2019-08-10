import Vue from 'vue'
import Router from 'vue-router'
import Ingredient from './components/ingredient.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'ingredient',
            component: Ingredient
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