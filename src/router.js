import Vue from 'vue'
import Router from 'vue-router'
import CategoryList from './components/categorylist.vue'
import About from './components/About.vue'
import RecipeList from './components/recipelist.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'categorylist',
            component: CategoryList
        },
        {
            path: '/category/:id',
            name: 'recipelist',
            component: RecipeList
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