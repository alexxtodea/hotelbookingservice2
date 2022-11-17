<template>
    <div class="RoomComponent">
        <div class="text-container">
        <h1 class="text-3xl font-bold underline">
            {{ roomType }}</h1>
            <div class="container-container">
      <h3 class="container-description">       
        {{ price }} $ 
      
      </h3>
            <div>      
              <p>{{description}}</p> 
              <p>{{bedAmount}} bed(s)</p> 
            </div>
 
      <p>the room number{{roomNumber}}</p> 
      <p>{{imageUrl}}</p> 
      <button @click.prevent="deleteRoom(this.id)">delete this room</button>
      <button><router-link :to="`/rooms/update/${id}`" style="text-decoration: none; color: inherit;">edit this room</router-link></button> 
</div>
</div>
    </div>
  </template>
    
  <script>
  import axios from "axios";

    export default {
    name: 'RoomComponent',
    props:{  
        id: String,    
        roomType: String,
        description: String,
        imageUrl: String,
        bedAmount: Number,
        price: Number,
        roomNumber: Number
      },    
      
      methods: {
        deleteRoom(id){
       axios.delete(`http://localhost:8002/rooms/delete/${this.id}`)
       .then(response => {
         console.log(response);
         })
       .finally(() => {
          location.assign("/rooms");
          // this.$router.push({ name: "home" });
        });
      }
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    .RoomComponent {
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
    