<template>
  <div id="product">
    <h1 class="product__title">{{ product.title }}</h1>
    <div
      class="product__image"
      :style="{ backgroundImage: 'url(\'' + product.image + '\')' }"
    ></div>
    <div class="product__image">
      <img :src="product.image" alt="gourd" width="240px" />
    </div>
    <p class="product__description">{{ product.description }}</p>
    <div class="product__note">
      <span
        v-for="i in 5"
        :key="i"
        :class="{
          product__star: true,
          'product__star--dark': i > product.note
        }"
        @click="updateNote(i)"
      >
        ★
      </span>
      <div class="product__infos">
        <p v-if="shoppingCartId > 1" class="success">
          {{ shoppingCartId }} articles sont dans votre shop.
        </p>
        <p v-if="shoppingCartId == 1" class="success">
          {{ shoppingCartId }} article sont dans votre shop.
        </p>
        <p>
          <button
            class="product__button"
            @click="$store.commit('addProductToCart', product)"
          >
            Ajouter au panier
          </button>
        </p>
        <p>
          Prix de l'article:
          <span>{{ product.price }} €</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_NOTE } from "@/store/mutations-types";
export default {
  name: "Product",
  props: ["id"],
  components: {},
  created() {
    this.$store.dispatch("setCurrentProduct", this.id);
  },
  computed: {
    product: function() {
      // console.log(this.$store.getters.getCurrentProduct);
      return this.$store.getters.getCurrentProduct;
    },
    productId() {
      return this.$store.state.products.find(
        element => element.id === this.$route.params.id
      );
    },
    shoppingCartId() {
      //console.log(this.$store.getters.getShoppingCart);
      let quantityActually = 0;
      this.$store.getters.getShoppingCart.forEach(cart => {
        // console.log(this.id);
        // console.log(cart.id);
        if (this.id == cart.id) {
          // console.log(cart.quantity);
          quantityActually = cart.quantity;
        }
      });
      return quantityActually;
    }
  },
  methods: {
    updateNote(newNote) {
      this.$store.commit(SET_NOTE, newNote);
    }
  }
};
</script>

<style lang="scss" scoped>
#product {
  padding-top: 80px;
  text-align: center;
  overflow: hidden;
  a {
    text-decoration: none;
    img {
      margin-top: 20px;
    }
  }
  .product {
    &__title {
      margin: 15px;
    }
    &__description {
      margin: 15px;
    }
    &__note {
      cursor: pointer;
    }
    &__star {
      margin: 15px;
      color: rgb(206, 178, 22);
      &--dark {
        color: #333;
      }
    }
    &__button {
      padding: 1.5em 3.1em;
      outline: none;
      margin: 30px;
      border: none;
      border-radius: 7px;
      font-size: 0.8em;
      font-weight: 700;
      letter-spacing: 1.3px;
      color: #fff;
      background-color: #333;
      box-shadow: 2px 2px 25px -7px #333;
      cursor: pointer;
    }

    &__infos {
      margin: 15px;
    }

    &__image {
      img {
        margin: 20px;
      }
    }
  }
  .success {
    display: inline;
    background: rgb(119, 185, 251);
    border-radius: 5px;
    padding: 10px;
  }
}
</style>
