<template>
    <div class="holder">

        <AddRecipeModalBody :categoryId="categoryId" v-show="isAddRecipeModalVisible" @close="closeNewRecipe()"></AddRecipeModalBody>

        <ul>
            <li class="addRecipe">
                <section class="recipeContainer">
                    <div class="recipeAddItem" v-on:click="createNewRecipe()"><i class="fa fa-plus"></i></div>
                </section>
            </li>
            <li v-for="(data,index) in recipes" :key='index'>
                <section class="recipeContainer">
                    <div class="recipeItemNumber">{{ index + 1 }}.</div>
                    <div class="recipeItem"><RecipeListItem v-bind="data"/></div>
                </section>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import {recipeServiceHost} from '../constants'
import RecipeListItem from './ListItemComponents/recpielistitem'
import AddRecipeModalBody from "./modals/addrecipe"

export default {
    name: 'Recipe',
    data() {
        return {
            categoryId: this.$route.params.id,
            recipes : [],
            isAddRecipeModalVisible: false
        }
    },
    mounted(){
        axios({method: "GET","url": recipeServiceHost + "/Recipes?CategoryId=" + this.categoryId}).then(result => {
            for (var i = 0; i < result.data.length;i++){
                this.recipes.push({"recipe": result.data[i]});
            }
        });
    },
    methods: {
        createNewRecipe() {
            this.isAddRecipeModalVisible = true;
        },
        closeNewRecipe() {
            this.isAddRecipeModalVisible = false;
        }
    },
    components: {
        RecipeListItem,
        AddRecipeModalBody
    }
}
</script>

<style scoped>
    ul {
        margin: 0;
        list-style-type: none;
        padding: 0;
    }

    ul li {
        padding: 20px;
        font-size: 1.3em;
        background-color: #e0edf4;
        margin-bottom: 2px;
        color: #3e5252;
        cursor: pointer;
        width: 95%;
    }

    p {
        text-align: center;
        padding: 30px 0;
        color: gray;
    }

    a {
        color: #42b983;
    }

    .holder {
        background: #fff;
    }

    .recipeContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .recipeAddItem {
        flex-grow: 1;
        text-align: center;
        font-size: 1.4em;
    }

    .recipeItem {
        flex-grow: 1;
        width: 32%;
    }

    .recipeItemNumber {
        flex-grow: 1;
        max-width: 5%;
    }

    .addRecipe {
        flex-grow: 1;
        background: #8DE8A2;
        color:#fff;
        height:25px;
    }
</style>