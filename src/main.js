import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCyS9PQTcPbMQjhPGEdwFSH5KwxG_ron54",
  authDomain: "vue-calander-9e059.firebaseapp.com",
  projectId: "vue-calander-9e059",
  storageBucket: "vue-calander-9e059.appspot.com",
  messagingSenderId: "187045084934",
  appId: "1:187045084934:web:a030c98a20084e2c90a887"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
