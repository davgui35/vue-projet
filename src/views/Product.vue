<template>
  <div class="container">
    <div class="product d-flex justify-content-center">
      <div class="card">
        <div class="card-body d-flex">
          <div>
            <h1>Nom du produit</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos odit asperiores saepe laborum aperiam, quibusdam
              repudiandae perferendis reprehenderit unde quod ut harum error
              officiis. Cum error expedita repellat est libero.
            </p>
            <p class="price">
              <span>{{ product.price }} €</span>
            </p>
            <div class="note">
              <span
                v-for="i in 5"
                :key="i"
                :class="{
                  star: true,
                  'star--dark': i > product.note
                }"
                @click="updateNote(i)"
              >
                ★
              </span>
              <div class="infos">
                <p v-if="shoppingCartId > 1" class="success">
                  <em>{{ shoppingCartId }} articles sont dans votre shop.</em>
                </p>
                <p v-if="shoppingCartId == 1" class="success">
                  <em>{{ shoppingCartId }} article sont dans votre shop.</em>
                </p>
                <div
                  class="add d-flex justify-content-center align-items-center"
                >
                  <p>
                    <img src="../assets/icons/heart.svg" alt="icones favoris" />
                  </p>
                  <p>
                    <button
                      class="button"
                      @click="$store.commit('addProductToCart', product)"
                    >
                      Ajouter au panier
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="image">
              <img :src="product.image" alt="teeShirt" width="240px" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid d-flex justify-content-center">
      <CardSize />
    </div>
    <div class="container-fluid d-flex justify-content-center">
      <Livraison />
    </div>
  </div>
</template>

<script>
import { SET_NOTE } from "@/store/mutations-types";
import CardSize from "@/components/CardSize.vue";
import Livraison from "@/components/Livraison.vue";
export default {
  name: "Product",
  props: ["id"],
  components: { CardSize, Livraison },
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
.card {
  margin-top: 140px;
  width: 800px;
  text-align: start;
  h1 {
    text-transform: uppercase;
    margin-left: 40px;
  }

  p {
    margin-left: 40px;
  }
  .title {
    margin: 15px;
  }

  .description {
    margin: 15px;
  }
  .note {
    text-align: start;
    margin-left: 40px;
    cursor: pointer;
  }
  .star {
    margin: 5px;
    color: #fbcb00;
    font-size: 30px;
    &--dark {
      color: #333;
    }
  }
  .price {
    text-align: start;
    margin-left: 40px;
    span {
      font-size: 2rem;
    }
  }

  button {
    padding: 1.5em 3.1em;
    outline: none;
    margin: 30px;
    border: none;
    border-radius: 7px;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1.3px;
    color: #333;
    background-color: #fbcb00;
    box-shadow: 2px 2px 25px -7px #333;
    cursor: pointer;
  }

  .add {
    margin-left: -50px;
  }
}
</style>
