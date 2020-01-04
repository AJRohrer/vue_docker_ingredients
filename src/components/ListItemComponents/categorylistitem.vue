<template>
    <div class="categoryContainer">
        <router-link :to="{path: 'category/' + category._CategoryID}" tag="article">
        <div class="categoryItem">
            {{category._CategoryName}}
        </div>
        </router-link>
        <div class="categoryItemTrash">
            <i class="fa fa-trash pull-right" v-on:click="remove(index)"></i>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'CategoryListItem',
        props: ['category']
    }
</script>

<style scoped>

    .categoryContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .categoryItem {
        flex-grow: 1;
        min-width: 90%;
    }

    .categoryItemTrash {
        flex-grow: 1;
        max-width: 5%;
    }

</style>