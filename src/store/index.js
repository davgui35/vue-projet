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
        title: "ELEFUN",
        image: require("@/assets/img/elefun.png"),
        description: `La cité n'est pas une jungle. C'est un zoo.`,
        note: 3,
        size: "M",
        quantity: 0,
        price: 25.3
      },
      {
        id: 2,
        title: `REQUIN
        FUFUME`,
        image: require("@/assets/img/RequinFufume.png"),
        description: `Quand la loi redevient celle de la jungle, c'est un honneur que d'être déclaré hors-la-loi.`,
        note: 5,
        size: "L",
        quantity: 0,
        price: 25.3
      },
      {
        id: 3,
        title: "TIGRRR",
        image: require("@/assets/img/Tigrrrr.png"),
        description: `On peut sortir un tigre de la jungle, mais la jungle ne quitte jamais le tigre !`,
        note: 4,
        size: "XL",
        quantity: 0,
        price: 25.3
      },
      {
        id: 4,
        title: `LAMEL 
        COLO`,
        image: require("@/assets/img/lamalColo.png"),
        description: `Mais quand un arbre tombe au milieu de la jungle, qui l’entend ?`,
        note: 1,
        size: "M",
        quantity: 0,
        price: 25.3
      },
      {
        id: 5,
        title: "PANDABIS",
        image: require("@/assets/img/pandaBis.png"),
        description: `voici la superbe gourde qui plaira à tout le monde!`,
        note: 3,
        size: "S",
        quantity: 0,
        price: 25.3
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
