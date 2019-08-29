<template>
  <div class="hello">
     <div class="holder">
       <label>{{ helloWord }}</label>
       <br />
       <textarea v-model="recipeData">
       </textarea>
       <!-- Form for submitting data -->
       <form @submit.prevent="addIngredient">
       <input type="text" placeholder="Ingredient here..." v-model="ingredient" v-validate="'min:5'" name="ingredient">
       
       <!-- Animation for entrance of error message. Use Vee Validate for the validtion and show the error if it's invalid -->
       <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <article class="alert" v-if="errors.has('ingredient')">{{ errors.first('ingredient')}}</article>
       </transition>
       </form>

        <!-- For loop showing items in a list -->
       <ul>
         <!-- Wrap v-for in transition to give each list item a transition when they move into the group -->
         <transition-group name="alert-in" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <!-- For loop showing items in a list -->
            <li v-for="(data,index) in ingredients" :key='index'>
              {{ index }}. {{data.ingredient}}
              <i class="fa fa-minus-circle pull-right" v-on:click="remove(index)"></i>
            </li>
         </transition-group>
       </ul>

      <!-- If else example -->
      <p v-if="ingredients.length >= 2"> You have more than one ingredient</p>
      <p v-else>You have 1 or fewer ingredients</p>

      <!-- Bind CSS classes to items from code behind, use a boolean value to determine if a style is applied -->
      <div v-bind:class="{ alert: !showAlert, 'another-class': true }"></div>

      <!-- Bind multiple CSS classes based on a class in the code behind -->
      <div v-bind:class="alertObject"></div>

      <!-- Bind values to styles in style tag -->
      <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div>

      <p>These are the ingredients that you need</p>

      <p>These are the ingredients that you posses</p>


     </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ingredient',
  data(){
    return {
      helloWord: "",
      recipeData: "",
      showAlert: true,
      ingredient: '',
      ingredients: [
        { "ingredient" : "Peanut butter"},
        { "ingredient" : "Jelly"},
        { "ingredient" : "Bread"},
        { "ingredient" : "Chips"}
      ],
      alertObject: {
        alert: true,
        pinkclass: true
      },
      bgColor: 'blue',
      bgWidth: '100%',
      bgHeight: '30px'
    }
  },
  mounted() {
    axios({method: "GET", "url": "http://localhost:8090/category"}).then(result => {
        for (var i = 0; i < result.data.length;i++){
          this.recipeData += result.data[i].notes;
          this.ingredients.push({"ingredient" : result.data[i].recipeName});
        }
        
        console.log(result.data);
    });

    axios({method: "GET", "url": "http://localhost:8090/hello"}).then(result => {
        this.helloWord = result.data;
    })
  },
  methods: {
    //function to add items to a list from the textbox: ingredient
    addIngredient(){
      //Use vee validator to determine whether the item in the textbox is valid.
      this.$validator.validateAll().then((result) => {
        if (result){
          this.ingredients.push({ingredient:this.ingredient})
          this.ingredient="";
        } else {
          alert("Not valid");
        }
      })
    },
    remove(id){
      this.ingredients.splice(id,1);
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css"; */

/* @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; */
h3 {
    margin: 40px 0 0;
  }
  ul {
    margin: 0;
    list-style-type: none;
    padding: 0;
  }
  li {
    font-weight: bold;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #e0edf4;
    border-left: 5px solid #3eb3f6;
    margin-bottom: 2px;
    color: #3e5252;
  }

  p {
    text-align: center;
    padding: 30px 0;
    color: gray;
  }

  a {
    color: #42b983;
  }
  
  .another-class {
    border:5px solid orange;
    height: 30px;
  }
  .pinkclass {
    background-color: pink;
  }

  .holder {
    background: #fff;
  }

  input {
    border: 2px solid black;
    padding : 20px;
    font-size: 1.3em;
    background-color: #fff;
    color: #687f7f;
    width: 100%;
    box-sizing: border-box;
  }

  .alert {
      background-color: yellow;
      margin-bottom: 10px;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }

  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

</style>
