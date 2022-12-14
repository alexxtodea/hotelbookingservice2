<template>
  <div class="page">
    <html>
      <div class="card">
        <form class="form-inline" v-on:click.prevent>
          <div class="form-group">
            <label>title</label>
            <input
              v-model="roomType"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>number</label>
            <input
              v-model="roomNumber"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="price"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>description</label>
            <input
              v-model="description"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>amount of beds</label>
            <input
              v-model="bedAmount"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="form-group">
            <label>image</label>
            <input
              v-model="imageUrl"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            />
          </div>
          <div class="ml-auto text-right">
            <button>
              <router-link
                :to="`/`"
                @click="postRoom()"
                style="text-decoration: none; color: inherit; text-white"
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
  name: "CreateRoom",

  data() {
    return {
      name: "App",
      room: {},
      id: null,
      roomType: null,
      price: null,
      description: null,
      imageUrl: null,
      debAmount: null,
    };
  },

  methods: {
    postRoom() {
      axios
        .post(`http://localhost:8002/rooms/add`, {
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
          location.reload("/");
        });
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
