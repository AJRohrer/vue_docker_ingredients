<template>
    <div>
        <label></label>
        <RecipeTitle v-bind:recipeName="recipeName"/><br />
        <RecipeUrl v-bind:recipeUrl="recipeUrl" /><br />
        <RecipeIngredients v-bind:recipeIngredients="recipeIngredients" /><br />
        <RecipeDirections v-bind:recipeDirections="recipeDirections" />
    </div>
</template>

<script>
import axios from "axios";
import RecipeTitle from './RecipeDetailComponents/recipedetailtitle';
import RecipeUrl from './RecipeDetailComponents/recipedetailurl';
import RecipeIngredients from './RecipeDetailComponents/recipedetailingredient'
import RecipeDirections from './RecipeDetailComponents/recipedetaildirection'
import { recipeServiceHost } from '../constants'

export default {
    name: 'RecipeDetail',
    data(){
        return{
            recipeName: "",
            recipeUrl: "",
            recipeDirections: [],
            recipeIngredients: []
        }
    },
    mounted(){
        axios({method: "GET", "url": recipeServiceHost + "/Recipe?RecipeID=" + this.$route.params.id}).then(result => {
            
            this.recipeName = result.data._RecipeName;
            this.recipeUrl = result.data._RecipeUrl;
            this.recipeDirections = result.data._Directions;
            this.recipeIngredients = result.data._Ingredients;
        })
    },
    components: {
        RecipeTitle,
        RecipeUrl,
        RecipeIngredients,
        RecipeDirections
    }
}
</script>

<style scoped>

</style>