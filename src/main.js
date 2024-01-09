import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from "vue3-particles";

import './assets/main.css'


// FIREBASE SDK ANALTICS
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Flu2aeo-UZI1yWCw6RKFtt3hXCCYwa4",
  authDomain: "olesturchyn.firebaseapp.com",
  projectId: "olesturchyn",
  storageBucket: "olesturchyn.appspot.com",
  messagingSenderId: "316261042539",
  appId: "1:316261042539:web:3760b62f63e9f8622aa42e",
  measurementId: "G-QJ64MMDB8L"
};

const app = createApp(App)

app.use(router)

app.use(Particles)

app.mount('#app')
