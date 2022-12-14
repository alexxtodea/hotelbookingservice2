<template>
  <div class="BookingsComponent">
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
      <p>
        <button>
          <router-link
            :to="`/booking/${id}`"
            class="text-black"
            style="text-decoration: none; color: inherit"
            >Details</router-link
          >
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingsComponent",
  props: {
    id: String,
    room: {
      id: String,
      roomType: String,
      description: String,
      imageUrl: String,
      bedAmount: Number,
      price: Number,
      roomNumber: Number,
    },
    timeOfArrival: Date,
    timeOfDeparture: Date,
    amountDaysStay: Number,
    bookerFullName: String,
    bookerEmail: String,
    amountOfGuests: Number,
  },
  methods: {
    roomDetails() {
      console.log(this.room);
      // return this.room.description;
    },
  },
  data: function () {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.BookingsComponent {
  margin: auto;
  margin-top: 40px;
  padding: 20px;
  width: 70%;
  border-style: none;
  border-radius: 25px;
  align-self: center;
  background-color: white;
  margin: 40px;
  display: flexbox;
  padding: 30px;
}

.roomdescription {
  margin-bottom: 40px;
}

.container-description {
  display: flex;
  margin: 20px;
  width: 30%;
  float: left;
  font-size: 1.5cm;
}
.menu {
  margin-right: 50px;
}
.btns {
  display: grid;
  margin-left: 50px;
  width: 10%;
  float: right;
  position: absolute;
  right: 16px;
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
