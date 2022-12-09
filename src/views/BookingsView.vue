<template>
    <div class="page">
    <html >
      
        <NavBar/>
     
  
  
  
    <p class="headers">our bookings:</p>
      <div v-for="booking in bookings" v-bind:key="booking.id" class="room">
        <BookingsComponent
          :id="booking.id"
          :room="booking.room"          
          :timeOfArrival="booking.timeOfArrival"
          :timeOfDeparture="booking.timeOfDeparture"
          :amountDaysStay="booking.amountDaysStay"
          :bookerFullName="booking.bookerFullName"
          :bookerEmail="booking.bookerEmail"
          :amountOfGuests="booking.amountOfGuests"
        />
      </div>
   

    </html>
  </div>
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue';
  import router from '@/router';
  import BookingsComponent from '../components/BookingsComponent.vue';
  
  
  export default {
    name: 'Bookings',
    components: {
      BookingsComponent,
      NavBar,
  },
  
    data() {
      return {
        bookings: [],
        room: {roomType:""},
        error: null,
        
      }
    },
    methods: {
      navigateto(url){
        debugger;
        router.push(url)
      },
      getBookings() {
        
  
          fetch(`http://localhost:8002/booking/getAll`)
          .then(response => {
              if(response.ok){
                  return response.json()
              } else{
                console.log(response)
                  alert("Server returned " + response.status + " : " + response.statusText);
              }
          })
          .then(response => {
              this.bookings = response;
          })
          .catch(err => {
              this.error = err;
          });
        },
    },
  
    created: function(){
      this.getBookings();
     
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
    opacity: 0.6;
    background-color: rgba(61, 58, 58, 0.9); 
  }
  
  
  </style>