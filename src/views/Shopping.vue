<template>
  <div id="shop">
    <h1>Shop</h1>
    <div class="panier" v-if="totalProduct > 0">
      <div class="cards" v-for="article in shoppingCart" :key="article.id">
        <Article
          :image="article.image"
          :title="article.title"
          :quantity="article.quantity"
          :price="article.price"
        />
        <p
          class="bin"
          @click="$store.commit('removeProductToCart', article.id)"
        >
          <img src="../assets/icons/delete.svg" alt="icone poubelle" />
        </p>
      </div>
      <div class="total">
        <Total :totalProduct="totalProduct" :totalPrice="totalPrice" />
        <p class="bin" @click="$store.commit('removeShopping')">
          <img src="../assets/icons/delete.svg" alt="icone poubelle" />
        </p>
      </div>
    </div>
    <p v-else>Le panier est vide ☹️</p>
  </div>
</template>

<script>
import Article from "@/components/CardArticle.vue";
import Total from "@/components/TotalShop.vue";
export default {
  name: "ShoppingCart",
  components: {
    Article,
    Total
  },
  data() {
    return {
      articles: this.$store.getters.getShoppingCart
    };
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    shoppingCart() {
      return this.$store.getters.getShoppingCart;
    },
    totalProduct() {
      return this.$store.getters.getShoppingCart.reduce(
        (acc, current) => acc + current.quantity,
        0
      );
    },
    totalPrice() {
      return this.$store.getters.getShoppingCart.reduce(
        (acc, current) =>
          acc + Math.round(current.price * current.quantity * 100),
        0
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#shop {
  text-align: center;
  h1 {
    font-size: 5rem;
    text-transform: uppercase;
    margin: 20px 10px;
  }
  .panier {
    &__titles {
      display: flex;
      justify-content: center;
    }
    .cards {
      display: flex;
      justify-content: center;
    }
    .total {
      display: flex;
      justify-content: center;
    }
  }
  .bin {
    display: flex;
  }
}
</style>
