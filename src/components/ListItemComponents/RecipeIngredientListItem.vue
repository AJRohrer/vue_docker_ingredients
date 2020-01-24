<template>
    <div class="ingredientContainer">
        <input type="text" placeholder="1 cup" class="ingredientQuantityItem"/>
        <input type="text" placeholder="Butter" class="ingredientItem"/>
        <div class="ingredientItemTrash"><i class="fa fa-trash pull-right" v-on:click="alertTrash()"></i></div>
    </div>
</template>

<script>
    export default{
        name: 'IngredientListItem',
        props: ['ingredient'],
        data() {
            return{
                ingredientList: []
            }
        },

        methods: {
            alertTrash(){
                alert("Trash clicked!");
            },
            emitIngredientList(){
                this.$emit('ingredientList', this.ingredientList)
            }

        }
    }
</script>

<style scoped>

    .ingredientContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .ingredientItem {
        flex-grow: 1;
        max-width: 63%;
    }

    .ingredientQuantityItem {
        flex-grow: 1;
        max-width:20%;
        margin-right: 1em;
    }

    .ingredientItemTrash {
        flex-grow: 1;
        max-width:10%;
    }

</style>