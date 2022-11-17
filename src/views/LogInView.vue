<template>

            <div><label> User Name : <input type="text" name="username"/> </label></div>
            <div><label> Password: <input type="password" name="password"/> </label></div>

            <button @click="LogIn()" style="text-decoration: none; color: inherit;">Login</button> 

 
</template>

<script>
import axios from "axios";


export default {
  name: 'LogIn',


methods: {

LogIn() {
      
    axios.defaults.baseURL = 'http://localhost:8002';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    axios.post(`http://localhost:8002/login`,
            {
                
                username: this.username,
                password: this.password
            })
            .then((res) => {
          console.log(res);
        })
      .catch(err => {
          this.error = err;
      });
    },
},
}

  </script>