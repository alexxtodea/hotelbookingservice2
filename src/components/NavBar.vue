<template>
  <header class="container-header">
    <nav class="container-header-nav">
      <h1>welcome</h1>
      <div class="navbar-options">
        <button v-if="isAuthenticated">
          <router-link
            :to="`/bookings`"
            class="text-white"
            style="text-decoration: none; color: inherit; text-white;"
            >Bookings</router-link
          >
        </button>

        <button v-if="!isAuthenticated" style="text-decoration: none; color: inherit; text-white;" @click="login">Log in</button>
        <button v-if="isAuthenticated" style="text-decoration: none; color: inherit; text-white;" @click="logout()">Logout</button>

        <button v-if="isAuthenticated">
          <router-link
            :to="`/rooms/add`"
            class="text-white"
            style="text-decoration: none; color: inherit; text-white;"
            >Add rooms</router-link
          >
        </button>
      </div>
      <div></div>
    </nav>
  </header>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "LogIn",

  setup() {
    const { loginWithRedirect } = useAuth0();

    const auth0 = useAuth0();

    return {
      isAuthenticated: auth0.isAuthenticated,
      login: () => {
        loginWithRedirect();
      },

      logout() {
        auth0.logout({
          returnTo: window.location.origin,
        });
      },
    };
  },
};
</script>

<style scoped>
.NavBar {
  margin: 0%;
  display: flex;
  padding: 40px;
}

.container-header {
  margin: 0%;
  background-color: #000000;
  flex: space;
}

.container-header-nav {
  /* background-color:	#6a545f;  */
  background-image: url("../assets/hotel.jpg");
  width: 100%;
  height: auto;
  background-position: center;
  display: flex;
  color: #ffffff;
  font-size: 50px;
  padding: 150px;
  margin-left: 30px;
  padding-left: 30px;
  text-transform: uppercase;
}

.headers {
  text-align: center;
  text-transform: uppercase;
  color: #f0d6c3;
}

.navbar-options {
  display: flex;
  padding: 10px;
  margin: 10px;
  position: absolute;
  top: 8px;
  right: 16px;
}

button {
  font-size:x-large;
  padding: 50px 30px;
  margin: 10px;
  opacity: 0.9;
  filter: alpha(opacity=90);
  background-color: rgba(27, 26, 26, 0.9);
  border: transparent;
  border-radius: 10px;
  transition-duration: 0.4s;
  text-align: center;
  

}

button:hover {
  opacity: 0.6;
  background-color: rgba(61, 58, 58, 0.9);
}

img {
  width: 150px;
}
</style>
