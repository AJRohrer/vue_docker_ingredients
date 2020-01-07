<template>
    <div class="categoryContainer">
        <router-link :to="{path: 'category/' + category._CategoryID}" tag="article" class="categoryItem">
        <div >
            {{category._CategoryName}}
        </div>
        </router-link>
        <div class="categoryItemTrash">
            <i class="fa fa-trash pull-right" v-on:click="alertTrash()"></i>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'CategoryListItem',
        props: ['category'],

        methods: {
            alertTrash(){
                alert("Trash clicked!");
            }
        }
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
    }

</style>