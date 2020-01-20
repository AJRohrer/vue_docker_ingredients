<template>
    <div class="directionContainer">
        <input type="text" placeholder="Melt the butter in the microwave" class="directionDescription"/>
        <div class="directionItemTrash"><i class="fa fa-trash pull-right" v-on:click="alertTrash()"></i></div>
    </div>
</template>

<script>
    export default{
        name: 'DirectionListItem',
        props: ['direction'],
        data() {
            return{
            }
        },

        methods: {
            alertTrash(){
                alert("Trash clicked!");
            }

        }
    }
</script>

<style scoped>

    .directionContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .directionDescription {
        flex-grow: 1;
        max-width:86%;
    }

    .directionItemTrash {
        flex-grow: 1;
        max-width: 12%;
    }

</style>