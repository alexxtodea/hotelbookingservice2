<template>
  <div class="RoomsComponent">
    <div class="text-container">
      <h1 class="roomdescription">
        {{ roomType }}
      </h1>
      <div class="container-container">
        <h3 class="container-description">{{ price }} $</h3>
        <div class="menu">
          <ul>
            <li>
              <p>{{ description }}</p>
            </li>
          </ul>
        </div>
      </div>
      <p>
        <button>
          <router-link
            :to="`/rooms/${id}`"
            class="text-white"
            style="text-decoration: none; color: inherit"
            >Explore</router-link
          >
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomsComponent",
  props: {
    id: String,
    roomType: String,
    description: String,
    imageUrl: String,
    bedAmount: Number,
    price: Number,
    roomNumber: Number,
  },
  data: function () {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.RoomsComponent {
  margin: auto;
  margin-top: 40px;
  width: 70%;
  border-style: none;
  border-radius: 40px;
  background-color: white;
  padding: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
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
