<template>
    <div>
        
        <div v-for="(ingredient,index) in recipeIngredients" :key='index'>
            {{ingredient._IngredientName}} - {{ingredient._IngredientQuantity}}
        </div>
    </div>
</template>

<script>
    export default{
        name: 'RecipeTitle',
        props: ['recipeIngredients']
    }
</script>

<style scoped></style>