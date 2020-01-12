<template>
    <div>
        <input class="categoryInputBox" v-model="categoryToAdd" type="text" placeholder="Category Name"/>
        
    </div>
</template>

<script>
export default {
    name: 'AddCategoryModalBody',
    methods: {
        close() {
            this.$emit('close');
        },
        addCategory(c) {
            alert(c);
        }
    }
}
</script>

<style scoped>
    .categoryInputBox {
        margin-bottom:5px;
        margin-top:5px;
    }
</style>