<template>
    <div class="recipeContainer">
        <router-link :to="{path: '/recipe/' + recipe._RecipeID}" tag="article" class="recipeItem">
        <div >
            {{recipe._RecipeName}}
        </div>
        </router-link>
        <div class="recipeItemTrash">
            <i class="fa fa-trash pull-right" v-on:click="alertTrash()"></i>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'RecipeListItem',
        props: ['recipe'],

        methods: {
            alertTrash(){
                alert("Trash clicked!");
            }
        }
    }
</script>

<style scoped>

    .recipeContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .recipeItem {
        flex-grow: 1;
        min-width: 90%;
    }

    .recipeItemTrash {
        flex-grow: 1;
    }

</style>