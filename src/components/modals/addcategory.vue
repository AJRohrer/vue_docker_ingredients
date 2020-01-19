<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="modalTitle">Add Category:</div>
            <input class="categoryInputBox" v-model="categoryPost._CategoryName" type="text" placeholder="Category Name"/>

            <div class="buttonContainer">
                <button class="flexButton createButton" type="button" @click="addCategory()">Create</button>
                <div class="flexSpacer"></div>
                <button class="flexButton cancelButton" type="button" @click="close()">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { recipeServiceHost } from '../../constants'
export default {
    name: 'AddCategoryModal',
    data() {
        return {
            categoryToAdd: "",
            categoryPost: {
                "_CategoryID" : 0,
                "_CategoryName" : this.categoryToAdd,
                "_UserID" : 1
            },
            addCategoryMessage: ""
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        addCategory() {
            axios.post(recipeServiceHost + "/CreateCategory", 
                
                JSON.stringify(this.categoryPost),
                {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                }
            )
            .then(
                this.addCategoryMessage = "Category added successfully",
                this.$emit('close')
            )
        }
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
    .categoryInputBox {
        margin-bottom:5px;
        margin-top:5px;
    }
    .buttonContainer {
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

    .bodyPadding {
        padding-top: 40px;
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
</style>