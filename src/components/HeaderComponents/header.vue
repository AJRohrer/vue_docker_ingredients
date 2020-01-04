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
    .headerItemTitle {
        width: 90%;
        flex-grow: 1;
        font-size: 45px;
        }
    .headerItemLogo {
        width: 10%;
        flex-grow: 1;
    }

    @media only screen and (max-width: 600px){
        .headerItemTitle {
        width: 85%;
        flex-grow: 1;
        font-size: 35px;
        }
    }

    .headerContainer {
       display: flex;
       flex-wrap: wrap;
    }
    
</style>