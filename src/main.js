import Vue from 'vue';
import App from './App.vue';
import router from './router';

import * as io from 'socket.io-client';
import WebRTC from 'vue-webrtc';

// Font Awesome Import
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faVideo, faUser, faPodcast } from '@fortawesome/free-solid-svg-icons';

window.io = io;
library.add(faTrash, faVideo, faUser, faPodcast);

Vue.config.productionTip = false;
Vue.use(WebRTC);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
