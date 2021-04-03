import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import jQuery from "jquery";
import firebase from "firebase";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "bootstrap";
import "./assets/app.scss";

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.config.productionTip = false;
var firebaseConfig = {
  apiKey: "AIzaSyC2QyYZyPziDpI5EI2qK1AWULrL4Y0DUP4",
  authDomain: "vue-project-3c018.firebaseapp.com",
  projectId: "vue-project-3c018",
  storageBucket: "vue-project-3c018.appspot.com",
  messagingSenderId: "809789541010",
  appId: "1:809789541010:web:6fd796aae3d3cc4f22f44b",
  measurementId: "G-1D2HFZDF1Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
