import Rooms from '../views/RoomsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Room from '../views/RoomView.vue'
import CreateRoom from '../views/CreateRoomView.vue'
import UpdateRoom from '../views/UpdateRoomView.vue'
import LogIn from '../views/LogInView.vue'

const routes = [

  {
    path: '/rooms/',
    name: 'rooms',
    component: Rooms,
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: `/rooms/:Rid`,
    name: 'room',
    component: Room,
    props: true
  },
  {
    path: '/rooms/add',
    name: 'createroom',
    component: CreateRoom,
    },

    {
    path: '/rooms/update/:Rid',
    name: 'updateroom',
    component: UpdateRoom,
    },

    {
      path: '/login',
      name: 'login',
      component: LogIn,
      },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
