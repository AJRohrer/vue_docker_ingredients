<template>
    <div class="holder">
      <!-- For loop showing items in a list -->
      <ul>
          <!-- For loop showing items in a list the "data object is a category" -->
        <li v-for="(data,index) in categories" :key='index' >
          <section class="categoryContainer">
          <!-- <router-link :to="{path: 'category/' + data.category._CategoryID}" tag="article"> -->
              <div class="categoryItemNumber">{{ index + 1 }}.</div>
              <div class="categoryItem"><CategoryListItem v-bind="data"/></div>
          <!-- </router-link> -->
          </section>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from "axios";
import { recipeServiceHost } from '../constants'
import CategoryListItem from './ListItemComponents/categorylistitem'

export default {
  name: 'CategoryList',
  data(){
    return {
      recipeData: "",
      showAlert: true,
      category: '',
      categories: [],
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
    axios({method: "GET", "url": recipeServiceHost + "/Categories?userId=1"}).then(result => {
        for (var i = 0; i < result.data.length;i++){
          this.categories.push({"category" : result.data[i]});
        }
        
    });
  },
  methods: {
    //function to add items to a list from the textbox: ingredient
    addIngredient(){
      //Use vee validator to determine whether the item in the textbox is valid.
      this.$validator.validateAll().then((result) => {
        if (result){
          this.categories.push({category:this.category});
          this.category="";
        } else {
          alert("Not valid");
        }
      })
    },
    remove(id){
      this.categories.splice(id,1);
    }

  },
  components: {
    CategoryListItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css";

@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
h3 {
    margin: 40px 0 0;
  }
  ul {
    margin: 0;
    list-style-type: none;
    padding: 0;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #e0edf4;
    border-left: 5px solid #3eb3f6;
    margin-bottom: 2px;
    color: #3e5252;
    cursor: pointer;
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

  .categoryContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .categoryItem {
        flex-grow: 1;
        width: 32%;
    }

    .categoryItemNumber {
        flex-grow: 1;
        max-width: 5%;
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
