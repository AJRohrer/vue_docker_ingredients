<template>
    <div>
        <label></label>
        <div>{{ recipeName }}</div>
        <div>{{ recipeUrl }}</div>
        <div>{{ recipeIngredients }}</div>
        <div>{{ recipeDirections }}</div>
    </div>
</template>

<script>
import axios from "axios";
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
            console.log(result);
            this.recipeName = result.data._RecipeName;
            this.recipeUrl = result.data._RecipeUrl;
            this.recipeDirections = result.data._Directions;
            this.recipeIngredients = result.data._Ingredients;
        })
    }
}
</script>

<style scoped>

</style>