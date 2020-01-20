<template>
    <div class="modal-backdrop">
        <div class="modal">
            
            <div class="modalTitle marginRightLeft">Add Recipe:</div>
            <div class="flexContainer marginRightLeft">
                <input class="recipeInputBox" v-model="recipePost._RecipeName" type="text" placeholder="Recipe Name"/>
                <input class="recipeInputBox" v-model="recipePost._RecipeUrl" type="text" placeholder="Recipe Url"/>
            </div>

            <div class="marginTopBottom marginRightLeft">Ingredients:</div>
            <IngredientListItem class="marginRightLeft"></IngredientListItem>

            <div class="marginTopBottom marginRightLeft">Directions:</div>
            <DirectionListItem class="marginRightLeft"></DirectionListItem>

            <div class="flexContainer">
                <button class="flexButton createButton" type="button" @click="addRecipe()">Create</button>
                <div class="flexSpacer"></div>
                <button class="flexButton cancelButton" type="button" @click="close()">Cancel</button>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from "axios";
import { recipeServiceHost } from '../../constants'
import IngredientListItem from '../ListItemComponents/RecipeIngredientListItem'
import DirectionListItem from '../ListItemComponents/recipeDirectionListItem'

export default {
    name: 'AddRecipeModal',
    data() {
        return {
            recipePost: {
                "_RecipeID" : 0,
                "_CategoryID" : this.categoryId,
                "_RecipeName" : "",
                "_RecipeUrl" : "",
                "_UserID" : 1
            },
            addRecipeMessage: ""
        }
    },
    props: {
        categoryId: String
    },
    methods: {
        close() {
            this.$emit('close');
        },
        addRecipe() {
            axios.post(recipeServiceHost + "/CreateRecipe", 
                
                JSON.stringify(this.recipePost),
                {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                }
            )
            .then(
                this.addRecipeMessage = "Recipe added successfully",
                this.$emit('close')
            )
        }
    },
    components: {
        IngredientListItem,
        DirectionListItem
    }
    
}
</script>

<style scoped>
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .25);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
    }
    .recipeInputBox {
        margin-bottom:5px;
        margin-top:5px;
        flex-grow: 1;
        width: 90%;
    }
    .flexContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .flexButton {
        flex-grow: 1;
        width: 35%;
        border-radius: .5em;
        border-style: solid;
        color: white;
        padding: 6px;
    }

    .flexSpacer {
        flex-grow: 1;
        width:10%;
    }

    .modalTitle {
        font-size:24px;
    }

    .modalTitle {
        font-size:24px;
    }
    .createButton {
        margin-left:5px;
        background-color:#8DE8A2;
        
    }

    .cancelButton {
        margin-right:5px;
        background-color:#cc4400;
    }

    .marginTopBottom {
        margin-top: .3em;
        margin-bottom: .3em;
    }
    .marginRightLeft {
        margin-right: .5em;
        margin-left: .5em;
    }
</style>