<template>
  <router-view />
</template>

<script>
import RoomsComponent from "./components/RoomsComponent.vue";

export default {
  name: "Rooms",

  components: {
    RoomsComponent,
  },
};
</script>

<style scoped>
* {
  margin: auto 10px;
  width: auto;
  height: 2000px;
  align-content: center;
  background-repeat: repeat;
}
</style>
