import Vue from 'vue'
import Router from 'vue-router'
import CategoryList from './components/categorylist.vue'
import About from './components/About.vue'
import RecipeList from './components/recipelist.vue'
import RecipeDetail from './components/recipedetail.vue'

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
            path: '/recipe/:id',
            name: 'recipedetail',
            component: RecipeDetail
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