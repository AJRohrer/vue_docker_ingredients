<template>
  <div class="hello">
     <div class="holder">


       <!-- Form for submitting data -->
       <form @submit.prevent="addIngredient">
       <input type="text" placeholder="Ingredient here..." v-model="ingredient" v-validate="'min:5'" name="ingredient">
       <p class="alert" v-if="errors.has('ingredient')">{{ errors.first('ingredient')}}</p>
       </form>

        <!-- For loop showing items in a list -->
       <ul>
         <li v-for="(data,index) in ingredients" :key='index'> {{ index }}. {{data.ingredient}}<br></li>
       </ul>

      <!-- If else example -->
      <p v-if="ingredients.length >= 2"> You have more than one ingredient</p>
      <p v-else>You have 1 ingredient</p>

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
export default {
  name: 'ingredient',
  data(){
    return {
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
  methods: {
    //function to add items to a list from the textbox: ingredient
    addIngredient(){
      this.ingredients.push({ingredient:this.ingredient})
      this.ingredient="";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
  }
  ul {
    margin: 0;
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
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
  .alert {
    background-color: yellow;
    width: 100%;
    height: 30px;

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
    margin:10px;
    font-size: 1.3em;
    background-color: #fff;
    color: #687f7f;
    width: 93%;
  }

</style>
