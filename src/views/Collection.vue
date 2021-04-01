<template>
  <div id="collection">
    <div class="arrow-header">
      <a href="#we" class="we">
        <img src="../assets/icons/fleche.svg" alt="icone de lien collection"
      /></a>
    </div>
    <div class="text-infinite">
      <div class="up">
        <TextInfini :content="' - TU ES QUI TOI ?'" />
      </div>
      <div class="down">
        <TextAgain :content="'- TU ES QUI TOI ? '" />
      </div>
    </div>
    <div class="content-collection container center-block">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
        quasi deserunt expedita dignissimos facere laborum libero suscipit nulla
        beatae nihil, soluta qui sapiente ullam iusto autem alias debitis hic
        fuga nostrum nemo dicta! Voluptatibus consequuntur suscipit vero est
        deleniti quam? Mollitia cupiditate sit repudiandae harum non, delectus
        neque sunt autem vero adipisci necessitatibus, exercitationem animi
        ullam dolore. Ipsum iusto et, animi minus excepturi pariatur veritatis
        possimus adipisci dolores ex, eaque aut perspiciatis, voluptatibus fugit
        earum deserunt labore repellendus error iste consequatur atque nobis.
        Nulla, illum est facere dignissimos esse temporibus aliquid culpa
        maiores ab rem numquam itaque, inventore laborum? Odit!
      </p>
    </div>
    <div class="filter-btn">
      <div id="we"></div>
      <button type="button" class="btn btn-outline-danger m-5">
        Chaussures
      </button>
      <button
        type="button"
        class="btn btn-danger m-5"
        style="background: #E52024;"
      >
        Tee shirts
      </button>
      <button type="button" class="btn btn-outline-danger m-5">
        Accessoires
      </button>
      <button type="button" class="btn btn-outline-danger m-5">
        Gourdes
      </button>
    </div>

    <div class="products" v-for="product in products" :key="product.id">
      <router-link :to="{ name: 'Product', params: { id: product.id } }">
        <card-products
          class="product"
          :name="'Product'"
          :id="product.id"
          :image="product.image"
          :title="product.title"
          :description="product.description"
        ></card-products>
      </router-link>
    </div>

    <Footer />
  </div>
</template>

<script>
import TextInfini from "@/components/TextInfini.vue";
import TextAgain from "@/components/Text2Infini.vue";
import CardProducts from "../components/CardProducts.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Collection",
  components: {
    TextInfini,
    TextAgain,
    Footer,
    CardProducts
  },
  computed: {
    products() {
      // console.log(this.$store.getters.getProducts);
      return this.$store.getters.getProducts;
    }
  }
};
</script>

<style lang="scss" scoped>
#collection {
  padding-top: 800px;
  background-image: url("../assets/img/collection.png");
  background-repeat: no-repeat;
  background-size: contain;
  .arrow-header {
    position: absolute;
    top: 500px;
    right: 50%;
    transform: rotate(90deg);
    animation: bounce 0.7s ease infinite;
  }

  .text-infinite {
    overflow: hidden;
    .up {
      margin-top: -100px;
      padding-top: 100px;
    }
    .down {
      padding-top: 300px;
      margin-top: -100px;
    }
  }

  .content-collection {
    padding-top: 350px;
  }
  .products {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 120px;
    a {
      text-decoration: none;
    }
    .product {
      display: flex;
      text-decoration: none;
    }
  }

  @keyframes bounce {
    from {
      top: 740px;
    }
    50% {
      top: 756px;
    }
    to {
      top: 740px;
    }
  }
}
</style>
