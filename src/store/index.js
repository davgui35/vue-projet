import Vue from "vue";
import Vuex from "vuex";
import { SET_NOTE } from "@/store/mutations-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingCart: [],
    currentProduct: {},
    products: [
      {
        id: 1,
        title: "Product1",
        image: require("@/assets/img/teeShirt.png"),
        description: "voici la superbe gourde qui plaira à tout le monde!",
        note: 3,
        quantity: 0,
        price: 5.3
      },
      {
        id: 2,
        title: "Product2",
        image: require("@/assets/img/teeShirt.png"),
        description: "voici la superbe gourde qui plaira à tout le monde!",
        note: 5,
        quantity: 0,
        price: 5.3
      },
      {
        id: 3,
        title: "Product3",
        image: require("@/assets/img/teeShirt.png"),
        description: "voici la superbe gourde qui plaira à tout le monde!",
        note: 4,
        quantity: 0,
        price: 5.3
      },
      {
        id: 4,
        title: "Product4",
        image: require("@/assets/img/teeShirt.png"),
        description: "voici la superbe gourde qui plaira à tout le monde!",
        note: 1,
        quantity: 0,
        price: 5.3
      },
      {
        id: 5,
        title: "Product5",
        image: require("@/assets/img/teeShirt.png"),
        description: "voici la superbe gourde qui plaira à tout le monde!",
        note: 3,
        quantity: 0,
        price: 5.3
      },
      {
        id: 6,
        title: "Product6",
        image: require("@/assets/img/teeShirt.png"),
        description: "voici la superbe gourde qui plaira à tout le monde!",
        note: 3,
        quantity: 0,
        price: 5.3
      }
    ]
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCurrentProduct(state) {
      return state.currentProduct;
    },
    getShoppingCart(state) {
      return state.shoppingCart;
    }
  },
  mutations: {
    setCurrentProduct(state, product) {
      state.currentProduct = product;
    },
    setCurrentProductVsMutation(state, productId) {
      let productFound = {};
      state.products.forEach(product => {
        if (productId == product.id) {
          productFound = product;
        }
      });
      state.currentProduct = productFound;
    },
    [SET_NOTE](state, note) {
      state.currentProduct.note = note;
    },
    //récup products
    setProducts(state, products) {
      state.products = products;
    },
    //Add
    addProductToCart(state, product) {
      const duplacatedProductIndex = state.shoppingCart.findIndex(
        item => item.id === product.id
      );
      if (duplacatedProductIndex !== -1) {
        state.shoppingCart[duplacatedProductIndex].quantity++;
        return;
      }
      product.quantity = 1;
      state.shoppingCart.push(product);
    },
    //Remove
    removeProductToCart(state, index) {
      let i = state.shoppingCart.findIndex(data => data.id === index);
      if (i !== -1) {
        state.shoppingCart.splice(i, 1);
      }
    },
    //Remove panier
    removeShopping(state) {
      state.shoppingCart = [];
    }
  },
  actions: {
    setCurrentProduct({ commit, state }, productId) {
      let productFound = {};
      state.products.forEach(product => {
        if (productId == product.id) {
          productFound = product;
        }
      });
      commit("setCurrentProduct", productFound);
    }
  }
});
