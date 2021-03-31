<template>
  <div id="collection">
    <div class="header">
      <img src="../assets/img/essaie1.jpg" alt="image de header" />
    </div>
    <div class="arrow-header">
      <a href="#we" class="we">
        <img src="../assets/icons/fleche.svg" alt="icone de lien collection"
      /></a>
    </div>
    <div id="we"></div>
    <div class="text-infinite">
      <TextInfini />
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
import CardProducts from "../components/CardProducts.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Collection",
  components: {
    TextInfini,
    Footer,
    CardProducts
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    }
  }
};
</script>

<style lang="scss" scoped>
#collection {
  .header {
    img {
      width: 100%;
      height: 650px;
    }
  }
  .arrow-header {
    position: absolute;
    top: 740px;
    left: 50%;
    transform: rotate(90deg);
    animation: bounce 0.7s ease infinite;
  }
  .text-infinite {
    height: 70px;
  }
  .content-collection {
    margin-top: 250px;
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
