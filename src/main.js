import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import bootstrap from 'bootstrap';
import { createAuth0 } from '@auth0/auth0-vue';
import { createAuth0Client } from '@auth0/auth0-spa-js';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



createApp(App).use(router).use(
    createAuth0({
      domain: "dev-5btrrn5mgbvclta3.us.auth0.com",
      client_id: "wdkVftRMIvTrNbRHQ1gJV8092tl0vVOJ",
      redirect_uri: 'http://localhost:8080/rooms'
    })
  ).mount('#app');
// Vue.http.headers.common['Access-Control-Allow-Origin'] = true
