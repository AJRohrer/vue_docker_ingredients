<template>
    <div>
        Test recipe number {{ categoryId }}
    

    <ul>
        <li v-for="(data,index) in recipes" :key='index'>
            <section>
                <router-link :to="{path: 'recipe/' + categoryId + '/' + index}" tag="article">{{index}}. {{data.recipe}}<i class="fa fa-minus-circle pull-right" v-on:click="remove(index)"></i></router-link>
            </section>
        </li>
    </ul>
    </div>

</template>

<script>
export default {
    name: 'Recipe',
    data() {
        return {
            categoryId: this.$route.params.id,
            recipes : [
                { "recipe" : "Pizza" },
                { "recipe" : "Spaghetti" },
                { "recipe" : "Lazagna" },
                { "recipe" : "Alfredo" },
                { "recipe" : "Flatbread" }
            ]
        }
    }
}
</script>

<style scoped>

</style>