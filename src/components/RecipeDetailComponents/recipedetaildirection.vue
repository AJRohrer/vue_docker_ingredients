<template>
    <div>

        <div v-for="(direction,index) in recipeDirections" :key='index'>
            {{direction._DirectionNumber}}. {{direction._DirectionDescription}}
        </div>
    </div>
</template>

<script>
    export default{
        name: 'RecipeTitle',
        props: ['recipeDirections']
    }
</script>

<style scoped></style>