<template>
    <div class="holder">
        <ul>
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

export default {
    name: 'Recipe',
    data() {
        return {
            categoryId: this.$route.params.id,
            recipes : []
        }
    },
    mounted(){
        axios({method: "GET","url": recipeServiceHost + "/Recipes?CategoryId=" + this.categoryId}).then(result => {
            for (var i = 0; i < result.data.length;i++){
                this.recipes.push({"recipe": result.data[i]});
            }
        });
    },
    components: {
        RecipeListItem
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
        border-left: 5px solid #3eb3f6;
        margin-bottom: 2px;
        color: #3e5252;
        cursor: pointer;
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

    .recipeItem {
        flex-grow: 1;
        width: 32%;
    }

    .recipeItemNumber {
        flex-grow: 1;
        max-width: 5%;
    }
</style>