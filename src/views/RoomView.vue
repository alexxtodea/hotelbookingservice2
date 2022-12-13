<template>
  <div class="page">
    <html>
      <NavBar />

      <p class="headers">this room</p>
      <div class="Card">
        <RoomComponent style=""
          :id="room.id"
          :roomType="room.roomType"
          :description="room.description"
          :imageUrl="room.imageUrl"
          :bedAmount="room.bedAmount"
          :price="room.price"
          :roomNumber="room.roomNumber"
        />
        <br />
      </div>
    </html>
  </div>
</template>

<script>
import RoomComponent from "../components/RoomComponent.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "room",
  components: {
    RoomComponent,
    NavBar,
  },
  props: {
    id: String,
  },
  data() {
    return {
      room: "",
      error: null,
    };
  },
  methods: {
    getRoomById() {
      console.log(this.$route);

      const id = this.$route.params.Rid;

      fetch(`http://localhost:8002/rooms/find/${id}`)
        .then((response) => {
          if (response.ok) {
            console.log(id);
            return response.json();
          } else {
            console.log(response);
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {
          this.room = response;
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
  created: function () {
    this.getRoomById(this.id);
  },
};
</script>

<style scoped>

*{
  position: relative;
}
.page {
  margin: 0%;
  background-color: #f0f0f0;
  align-content: center;
  align-items: center;
}

.container-header {
  margin: 0%;
  background-color: #000000;
  flex: space;
}

.container-header-nav {
 
  background-image: url("../assets/hotel.jpg");
  width: 100%;
  height: auto;
  background-position: center;
  display: flex;
  color: #ffffff;
  font-size: 50px;
  padding: 60px;
  margin-left: 30px;
  padding-left: 30px;
  text-transform: uppercase;
  
}
.card{
  position: absolute;
}

.headers {
  text-align: center;
  text-transform: uppercase;
  color: black;
}

.navbar-options {
  display: flex;
  padding: 10px;
  margin: 10px;
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
