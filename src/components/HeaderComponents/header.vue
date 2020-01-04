<template>
    <div>
        <div class="headerContainer">
            <HeaderLogo class="headerItemLogo"></HeaderLogo>
            <div class="headerItemTitle">Our Recipes</div>
        </div>
    </div>
</template>

<script>
import HeaderLogo from './headerlogo'

export default {
    name: 'RecipeHeader',
    components: {
        HeaderLogo
    }
}
</script>

<style scoped>
    .headerContainer {
       display: flex;
       flex-wrap: wrap;
    }
    .headerItemLogo {
        width: 10%;
        flex-grow: 1;
    }
    .headerItemTitle {
        width: 60%;
        flex-grow: 1;
        font-size: 30px;
    }
</style>