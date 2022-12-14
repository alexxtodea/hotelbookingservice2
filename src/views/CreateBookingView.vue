<template>
  <div class="page">
    <html>
      <div class="card">
        <form class="form-inline" v-on:click.prevent>
          <div class="form-group">
            <label>Full Name:</label>
            <input
              v-model="bookerFullName"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>Your Email:</label>
            <input
              v-model="bookerEmail"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>Your Arrival Date:</label>
            <input
              v-model="timeOfArrival"
              type="date"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>Your Departure Date:</label>
            <input
              v-model="timeOfDeparture"
              type="date"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>Amount of Guests:</label>
            <input
              v-model="amountOfGuests"
              type="number"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="ml-auto text-right">
            <button>
              <router-link
                :to="`/rooms`"
                @click="postBooking()"
                style="text-decoration: none; color: inherit"
                >Add</router-link
              >
            </button>
          </div>
        </form>
      </div>
    </html>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateBooking",

  props: {
    id: String,
  },
  data() {
    return {
      name: "CreateBooking",
      booking: {},
      timeOfArrival: null,
      timeOfDeparture: null,
      amountDaysStay: null,
      bookerFullName: null,
      bookerEmail: null,
      amountOfGuests: null,
    };
  },

  methods: {
    postBooking() {
      console.log(this.$route);

      const id = this.$route.params.Rid;

      axios
        .post(`http://localhost:8002/rooms/bookings/add/${id}`, {
          id: this.id,
          room: {
            id: this.id,
            roomType: this.roomType,
            roomNumber: this.roomNumber,
            price: this.price,
            description: this.description,
            imageUrl: this.imageUrl,
            bedAmount: this.bedAmount,
          },
          timeOfArrival: this.timeOfArrival,
          timeOfDeparture: this.timeOfDeparture,
          amountDaysStay: this.amountDaysStay,
          bookerFullName: this.bookerFullName,
          bookerEmail: this.bookerEmail,
          amountOfGuests: this.amountOfGuests,
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
    created: function () {
      this.postBooking(this.id);
    },
  },
};
</script>

<style scoped>
.page {
  background-color: #f0f0f0;
  align-content: center;
  align-items: center;
}

.card {
  margin: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

router-link {
  text-decoration: none;
}

img {
  width: 150px;
}

button {
  padding: 20px;
  margin: 10px;
  opacity: 0.9;
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
