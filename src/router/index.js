import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Shopping from "../views/Shopping.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    props: true,
    component: Home
  },
  {
    path: "/about",
    name: "About",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/collection",
    name: "Collection",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Collection.vue")
  },
  {
    path: "/collection/:id",
    name: "Product",
    props: true,
    component: Product
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: Shopping,
    props: true,
    meta: {
      title: "Shopping"
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
