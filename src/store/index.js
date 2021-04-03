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
        description: `Délirez avec Elefun. Tu vois cette personne qui te fait rire peu importe les situations ? C’est tout Elefun ça ! .`,
        note: 3,
        size: "M",
        quantity: 0,
        price: 25
      },
      {
        id: 2,
        title: `REQUIN
        FUFUME`,
        image: require("@/assets/img/RequinFufume.png"),
        description: `Requin Fufume il te fera tourner la tête. Avec son charisme naturel ce tchatcheur pourrait te faire croire tout ce qu’il veut.`,
        note: 5,
        size: "L",
        quantity: 0,
        price: 25
      },
      {
        id: 3,
        title: "TIGRRR",
        image: require("@/assets/img/Tigrrrr.png"),
        description: `Vibrez pour ce monsieur Tigrrrr. Il est classe et surtout si quelqu’un vous embête, il n’hésitera pas à casser des têtes. `,
        note: 4,
        size: "XL",
        quantity: 0,
        price: 25
      },
      {
        id: 4,
        title: `LAMAL 
        COLO`,
        image: require("@/assets/img/lamalColo.png"),
        description: `Attention, Lamalcolo va faire des jaloux. C’est la reine des soirées!!! Vous savez, celle qui gagne tout le temps au bière pong et qui est toujours bourrée avec classe ? `,
        note: 1,
        size: "M",
        quantity: 0,
        price: 25
      },
      {
        id: 5,
        title: "PANDABIS",
        image: require("@/assets/img/pandaBis.png"),
        description: `Craquez pour ce Panda Bis trop mignon..Attention sous ses airs d’ange se cache un petit foufou dont sa phrase préférée est « one life ».!`,
        note: 3,
        size: "S",
        quantity: 0,
        price: 25
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
