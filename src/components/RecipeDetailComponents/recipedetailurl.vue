<template>
    <div>
        Source: <a v-bind:href=this.recipeUrl>{{ this.recipeUrl }}</a>
    </div>
</template>

<script>
export default{
    name: 'RecipeTitle',
    props: ['recipeUrl']
}
</script>

<style scoped></style>