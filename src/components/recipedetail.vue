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
        axios({method: "GET", "url": "http://localhost:8090/Recipe?RecipeID=" + this.$route.params.id}).then(result => {
            
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