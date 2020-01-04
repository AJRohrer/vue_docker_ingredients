<template>
    <div class="about">
        <h1>About Our Recipes</h1>
        <p>Hello, this website can be used to store and categorize recpies from different sites. It allows you to store directions and ingredients about the recipe as well as the original URL that the recipe was found. It is called "Our Recipes" because each recipe can be shared with anyone! Happy cooking! </p>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            username: this.$route.params.name
        }
    }
}
</script>