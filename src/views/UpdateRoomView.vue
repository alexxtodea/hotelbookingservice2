<template>
    <div class="page">
      
    <html >    
      
    <form class="form-inline" v-on:click.prevent>
    <div class="form-group">
      <label>title</label>
      <input type="text" v-model="room.roomType" class="form-control ml-sm-2 mr-sm-4 my-2"  required>
      
    </div>
    <div class="form-group">
      <label>number</label>
      <input v-model="room.roomNumber"  type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
    </div>
    <div class="form-group">
      <label>Price</label>
      <input v-model="room.price"  type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
    </div>
    <div class="form-group">
      <label>description</label>
      <input v-model="room.description"  type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
    </div>
    <div class="form-group">
      <label>amount of beds</label>
      <input v-model="room.bedAmount" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
    </div>
    <div class="form-group">
      <label>image</label>
      <input v-model="room.imageUrl" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
    </div>
    <div class="ml-auto text-right">
        <!-- <button @click="updateRoom()" class="btn btn-primary my-2">Update</button> -->
        <button><router-link :to="`/rooms`" @click="updateRoom()" style="text-decoration: none; color: inherit;">Update</router-link></button> 
      </div>
    </form>


</html>
</div>
</template>

<script>
import axios from "axios";


export default {
  name: 'UpdateRoom',


props:{
  id: String,
},
  data() {
    return {
      room: {roomType:""},
      error: null,
    }
  },
 methods: {
 getRoomById() {
  console.log(this.$route)

     const id = this.$route.params.Rid;

     fetch(`http://localhost:8002/rooms/find/${id}`)
    .then(response => {
         if(response.ok){
            console.log(id)
            //console.log(roomType)
             return response.json()
         } else{
           console.log(response)
            alert("Server returned " + response.status + " : " + response.statusText);
         }     
       })
     .then(response => {
         this.room = response;
     })
     .catch(err => {
         this.error = err;
      });
    },

updateRoom(){
console.log("ddd" + this.room.roomType);
      
axios.put(`http://localhost:8002/rooms/update`,
{
    
    id: this.room.id,
    roomType: this.room.roomType,
    roomNumber: this.room.roomNumber,
    price: this.room.price,
    description: this.room.description,
    imageUrl: this.room.imageUrl,
    bedAmount: this.room.bedAmount,
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
 },
created: function(){
  
 this.getRoomById(this.id);
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

button:hover{
  opacity: 0.3;
  background-color: rgba(61, 58, 58, 0.9); 
}


</style>