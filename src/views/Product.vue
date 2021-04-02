<template>
  <div class="container-fluid">
    <div class="container d-flex justify-content-center">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="card-body">
              <h1 class="card-title">{{ product.title }}</h1>
              <p class="card-text">
                {{ product.description }}
              </p>
              <p class="price">
                <span>{{ product.price }} €</span>
              </p>
              <p class="card-text">
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
              </p>
              <p v-if="shoppingCartId > 1" class="success">
                <em>{{ shoppingCartId }} articles sont dans votre shop.</em>
              </p>
              <p v-if="shoppingCartId == 1" class="success">
                <em>{{ shoppingCartId }} article sont dans votre shop.</em>
              </p>
              <div class="d-flex align-items-center">
                <p>
                  <img src="@/assets/icons/heart.svg" alt="no Favorite" />
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
          <div class="colors col-md-4 d-flex">
            <img :src="product.image" alt="teeShirt" width="340px" />
            <div>
              <div class="share">
                <img src="../assets/icons/share.svg" alt="partagez" />
              </div>
              <div class="white"></div>
              <div class="gray"></div>
              <div class="black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product">
      <div class="container-fluid d-flex justify-content-center">
        <CardSize />
      </div>
      <div class="container-fluid d-flex justify-content-center">
        <Livraison />
      </div>
      <h3 class="content">Ils peuvent vous interesser</h3>
    </div>
    <div class="container">
      <div class="row">
        <div v-for="interest in products" :key="interest.id">
          <CardInterest
            class="product"
            :name="'Product'"
            :id="interest.id"
            :image="interest.image"
            :title="interest.title"
            :description="interest.description"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { SET_NOTE } from "@/store/mutations-types";
import CardSize from "@/components/CardSize.vue";
import Livraison from "@/components/Livraison.vue";
import CardInterest from "@/components/CardInterest.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Product",
  props: ["id"],
  components: { CardSize, Livraison, Footer, CardInterest },
  created() {
    this.$store.dispatch("setCurrentProduct", this.id);
  },
  computed: {
    products() {
      let products = this.$store.getters.getProducts;
      let interest = [];
      let counter = 0;
      for (let product of products) {
        if (parseInt(this.id) !== parseInt(product.id)) {
          if (counter < 3) {
            interest.push(product);
          }
          counter++;
        }
      }
      return interest;
    },

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
    },
    roundCards() {
      return Math.floor(Math.random() * this.images.length);
    }
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding-left: 0;
  padding-right: 0;
}
.card {
  margin-top: 140px;
  width: 800px;
  text-align: start;
  h1 {
    text-transform: uppercase;
  }
  .image {
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: filter 0.3s ease-in;
  }

  .image:hover {
    filter: brightness(1.2);
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
    cursor: pointer;
    font-size: 30px;
    &--dark {
      color: #333;
    }
  }
  .price {
    text-align: start;
    font-weight: bold;
    span {
      font-size: 2rem;
    }
  }

  .button {
    padding: 0.5em 3.1em;
    outline: none;
    margin-left: 60px;
    border: none;
    border-radius: 7px;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1.3px;
    color: #333;
    background-color: #fbcb00;
    box-shadow: 2px 2px 15px -7px #333;
    cursor: pointer;
  }

  .add {
    margin-left: -50px;
  }
}
.content {
  font-size: 8rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 100px;
  margin-left: -10px;
  text-align: start;
}
.colors {
  position: relative;
  .share {
    margin: 5px;
    padding: 5px;
    border: 1px solid #707070;
    border-radius: 50%;
    cursor: pointer;
  }

  .white {
    position: absolute;
    bottom: 00px;
    margin: 5px;
    width: 15px;
    height: 15px;
    border: 1px solid #707070;
    border-radius: 50%;
  }
  .gray {
    position: absolute;
    bottom: 20px;
    margin: 5px;
    width: 15px;
    height: 15px;
    border: 1px solid #707070;
    border-radius: 50%;
    background: #707070;
  }
  .black {
    position: absolute;
    bottom: 40px;
    margin: 5px;
    width: 15px;
    height: 15px;
    border: 1px solid #707070;
    border-radius: 50%;
    background: black;
  }
}
</style>
