<template>
  <div class="BookingComponent">
    <div class="text-container">
      <h1 class="text-3xl font-bold underline">
        {{ bookerFullName }}
      </h1>
      <div class="container-container">
        <h3 class="container-description">
          <span>{{ roomDetails() }}</span>
        </h3>
        <p>{{ timeOfArrival }}</p>
        <p>{{ timeOfDeparture }}</p>
      </div>
      <div class="btns">
        <button v-if="!isAuthenticated" @click.prevent="deleteRoom(this.id)">
          delete this room
        </button>
        <button v-if="!isAuthenticated">
          <router-link
            :to="`/rooms/update/${id}`"
            style="text-decoration: none; color: inherit"
            >edit this room</router-link
          >
        </button>
        <button v-if="isAuthenticated">
          <router-link
            :to="`/rooms/bookings/add/${id}`"
            style="text-decoration: none; color: inherit"
            >BOOK</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RoomComponent",
  props: {
    id: String,
    roomType: String,
    description: String,
    imageUrl: String,
    bedAmount: Number,
    price: Number,
    roomNumber: Number,
  },

  methods: {
    deleteRoom(id) {
      axios
        .delete(`http://localhost:8002/rooms/delete/${this.id}`)
        .then((response) => {
          console.log(response);
        })
        .finally(() => {
          location.assign("/");
          // this.$router.push({ name: "home" });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.BookingComponent {
  margin: auto;
  margin-top: 40px;
  width: 80%;
  border-style: none;
  border-radius: 40px;
  background-color: white;
  padding: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}

.container-description {
  display: flex;
  margin: 10px;
  width: 25%;
  float: left;
  font-size: 1.5cm;
}
.menu {
  margin-right: 50px;
  margin-left: 20px;
  width: 60%;
}
.btns {
  display: grid;
  margin-left: 50px;
  width: 10%;
  float: right;
  position: absolute;
  right: 16px;
  align-items: center;
  bottom: 40px;
}

.container-container {
  display: flex;
}

button {
  padding: 10px;
  margin: 5px;
  opacity: 0.5;
  filter: alpha(opacity=90);
  background-color: rgba(27, 26, 26, 0.9);
  border: transparent;
  border-radius: 10px;
  transition-duration: 0.4s;
}

button:hover {
  opacity: 0.3;
  background-color: rgba(61, 58, 58, 0.9);
}
</style>
