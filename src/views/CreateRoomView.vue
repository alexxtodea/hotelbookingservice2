<template>
    <div class="page">
    <html>
      

    <form class="form-inline" v-on:click.prevent>
    <div class="form-group">
      <label>title</label>
      <input v-model="roomType" type="text" class="form-control ml-sm-2 mr-sm-4 my-2"  required>
    </div>
    <div class="form-group">
      <label>number</label>
      <input v-model="roomNumber" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
    </div>
    <div class="form-group">
      <label>Price</label>
      <input v-model="price" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
    </div>
    <div class="form-group">
      <label>description</label>
      <input v-model="description" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
    </div>
    <div class="form-group">
      <label>amount of beds</label>
      <input v-model="bedAmount" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
    </div>
    <div class="form-group">
      <label>image</label>
      <input v-model="imageUrl" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
    </div>
    <div class="ml-auto text-right">
      <button><router-link :to="`/rooms`" @click="updateRoom()" style="text-decoration: none; color: inherit;">Add</router-link></button> 
      </div>
    </form>
</html>
</div>
</template>

<script>
import axios from "axios";


export default {

    name: 'CreateRoom',
 


    data(){
        return {
            name:'App',
            room:{},
            id: null,
            roomType: null,
            price: null,
            description: null,
            imageUrl: null,
            debAmount: null,
    }
    },

    methods: {

        postRoom(){

            axios.post(`http://localhost:8002/rooms/add`,
            {
                
                id: this.id,
                roomType: this.roomType,
                roomNumber: this.roomNumber,
                price: this.price,
                description: this.description,
                imageUrl: this.imageUrl,
                bedAmount: this.bedAmount,
            })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
      
        })
        .finally(() => {
            
          location.reload("/rooms");
          
        });
    },
}
}





</script>

<style scoped>
 .page{
  margin: 0%;
  background-color:#3d364d;
 }

 .container-header{
  margin: 0%;
  background-color:#000000;
  flex: space;
 }

 router-link{
    text-decoration: none;
}
.container-header-nav{
   /* background-color:	#6a545f;  */
   background-image: url("../assets/hotel.jpg");
  width: 100%;
  height: auto;
background-position: center;
   display:flex;
  color: #ffffff;
  font-size:50px;
  padding: 60px;
  margin-left: 30px;
  padding-left: 30px;
  text-transform: uppercase;
}

.headers{
  text-align: center;
  text-transform: uppercase;
  color: #f0d6c3;
}

.navbar-options{
  display: flex;
  padding: 10px;
  margin: 10px;
  
}
img{
  width: 150px;
}

button{ 
  padding: 20px;
  margin: 10px;
  opacity: 0.9;
  filter: alpha(opacity=90);
  background-color: rgba(27, 26, 26, 0.9); 
  border: transparent;
  border-radius: 10px;
  transition-duration: 0.4s;
}
b-button{ 
  padding: 20px;
  margin: 10px;
  opacity: 0.9;
  filter: alpha(opacity=90);
  background-color: rgba(27, 26, 26, 0.9); 
  border: transparent;
  border-radius: 10px;
  transition-duration: 0.4s;
}
b-button:hover{
  opacity: 0.3;
  background-color: rgba(61, 58, 58, 0.9); 
}

button:hover{
  opacity: 0.3;
  background-color: rgba(61, 58, 58, 0.9); 
}
</style>