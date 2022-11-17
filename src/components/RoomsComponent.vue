<template>
    <div class="RoomsComponent">
        <div class="text-container">
        <h1 class="text-3xl font-bold underline">
            {{ roomType }}</h1>
            <div class="container-container">
      <h3 class="container-description">       
        {{ price }} $
      
      </h3>
      <p>{{description}}</p> 
    </div> 
      <p>
        <button>
   
        <router-link :to="`/rooms/${id}`" class="text-white" style="text-decoration: none; color: inherit;">Explore</router-link>
            
        </button>
      </p>
    </div>
</div>
  </template>
    
  <script>
    export default {
    name: 'RoomsComponent',
    props:{      
        id: String,
        roomType: String,
        description: String,
        imageUrl: String,
        bedAmount: Number,
        price: Number,
        roomNumber: Number
      },
      data: function () {
      return {
      }
    }    
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    .RoomsComponent {
      margin: auto;
      margin-top: 40px;
      padding: 20px;
      width: 70%;
      border-style:none;
      border-radius: 25px;
      align-self: center;
      background-color:	#6a545f;
      margin: 40px;
      display:flexbox;
      padding: 30px; 
    }

    .container-description{
        /* padding: 20px; */
        display:flex;
        margin: 20px;
    }

    .container-container{
        display: flex;
    }
    router-link{
        color: white;
    }
    button{ 
  padding: 10px;
  margin: 5px;
  opacity: 0.5;
  filter: alpha(opacity=90);
  background-color: rgba(27, 26, 26, 0.9); 
  border: transparent;
  border-radius: 10px;
  transition-duration: 0.4s;
}

button:hover{
  opacity: 0.3;
  background-color: rgba(61, 58, 58, 0.9); 
}
    
    </style>
    