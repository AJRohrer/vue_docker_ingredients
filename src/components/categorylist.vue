<template>
    <div class="holder">
      <!-- For loop showing items in a list -->
      <ul>
        <li class="addCategory">
          <section class="categoryContainer">
              <div class="categoryAddItem" v-on:click="createNewCategory()"><i class="fa fa-plus"></i></div>
          </section>
        </li>
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
    createNewCategory() {
      alert("You want to create a new recipe category!");
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
    background-color: #5bbffd;
    margin-bottom: 2px;
    color: #3e5252;
    cursor: pointer;
    width: 95%;
  }
  @media only screen and (max-width: 600px){
    ul li {
      width: 90%;
    }
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

    .categoryAddItem {
        flex-grow: 1;
        text-align: center;
        font-size: 1.4em;
    }

    .categoryItemNumber {
        flex-grow: 1;
        max-width: 5%;
    }

    .addCategory {
        flex-grow: 1;
        background: #8DE8A2;
        color:#fff;
        height:25px;
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
