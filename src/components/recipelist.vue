<template>
    <div>
        Test recipe number {{ categoryId }}
    

    <ul>
        <li v-for="(data,index) in recipes" :key='index'>
            <section>
                <router-link :to="{path: '/Recipe/' + data.recipe._RecipeID}" tag="article">{{index}}. {{data.recipe._RecipeName}}<i class="fa fa-minus-circle pull-right" v-on:click="remove(index)"></i></router-link>
            </section>
        </li>
    </ul>
    </div>

</template>

<script>
import axios from "axios";
import {recipeServiceHost} from '../constants'
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
            console.log(result);
        });
    }
}
</script>

<style scoped>

</style>