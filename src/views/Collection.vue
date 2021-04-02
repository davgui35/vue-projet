<template>
  <div id="collection">
    <h1 class="title-header">Collection</h1>
    <div class="arrow-header">
      <a href="#we" class="we">
        <img src="../assets/icons/fleche.svg" alt="icone de lien collection"
      /></a>
    </div>
    <div class="lacoste">
      <h3 class="content">NOUVELLE COLLAB <br /><span>avec LACOSTE</span></h3>
      <div class="block-lacoste">
        <div class="img-lacoste">
          <p>
            <img
              src="../assets/img/lacoste.png"
              alt="image lacoste"
              width="400px"
            />
          </p>
        </div>
        <div class="description-lacoste">
          <p>
            "Afin de nous faire connaitre, nous avons pensé à créer une
            collaboration avec plusieurs marques. Cette saison, nous avons
            choisi Lacoste. Découvrez notre collection."
          </p>
          <a href="https://www.lacoste.com/" target="_blank"
            ><button class="btn" style="background: #FBCB00;">
              Découvrir
              <img
                src="@/assets/icons/flecheBtn.svg"
                alt="icone de flèche"
              /></button
          ></a>
        </div>
      </div>
    </div>

    <div class="text-infinite">
      <div class="up">
        <TextInfini :content="' - COLLECTION SAUVAGE '" />
      </div>
      <div class="down">
        <TextAgain :content="'- COLLECTION SAUVAGE '" />
      </div>
    </div>
    <div class="content-collection container center-block">
      <p>
        Nous souhaitons par le biais de notre collection, faire évader les gens
        vers la nature, la faune et surtout vers la liberté. Dans la symbolique,
        nous avons mis en avant la représentation d’animaux qui nous inspire et
        qui représente un élément fort pour nous. On insiste sur des
        problématiques fortes de notre époque par le biais d’animaux en voie de
        disparition, de la chasse abusive pour les éléphants et les requins. Les
        pandas en voie de disparition. Les lamas et les tigres abusés dans les
        cirques.
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
          v-if="product.id % 2 == 0"
          class="product"
          :name="'Product'"
          :id="product.id"
          :image="product.image"
          :title="product.title"
          :description="product.description"
        ></card-products>
        <card-products2
          v-else
          class="product"
          :name="'Product'"
          :id="product.id"
          :image="product.image"
          :title="product.title"
          :description="product.description"
        ></card-products2>
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import TextInfini from "@/components/TextInfini.vue";
import TextAgain from "@/components/Text2Infini.vue";
import CardProducts from "../components/CardProducts.vue";
import CardProducts2 from "../components/CardProducts2.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Collection",
  components: {
    TextInfini,
    TextAgain,
    Footer,
    CardProducts,
    CardProducts2
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

  .title-header {
    font-family: "Staatliches", cursive;
    letter-spacing: 2rem;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 550px;
    left: 25%;
    font-size: 9rem;
    font-weight: bold;
    color: #f1f1f1;
  }

  .lacoste {
    padding-top: 100px;
    text-align: start;

    h3 {
      font-family: "Staatliches", cursive;
      letter-spacing: 1.6rem;
      position: absolute;
      font-size: 8rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-left: -10px;
      text-align: start;
    }
  }
  .block-lacoste {
    font-family: "Baloo 2", cursive;
    padding-top: 250px;
    margin-left: 100px;
    max-width: 1200px;
    display: flex;
    align-items: center;
    z-index: -1;
    .description-lacoste {
      margin-left: 50px;
      font-size: 1.6rem;

      .btn {
        margin-top: 20px;
        padding: 0px 20px;
        font-size: 2rem;
        font-weight: bold;
        box-shadow: 2px 2px 15px -7px rgb(156, 154, 154);
        cursor: pointer;
      }
    }
  }

  .filter-btn {
    font-family: "Baloo 2", cursive;
  }

  .text-infinite {
    overflow: hidden;
    .up {
      font-family: "Staatliches", cursive;
      margin-top: -100px;
      padding-top: 100px;
    }
    .down {
      font-family: "Staatliches", cursive;
      padding-top: 300px;
      margin-top: -100px;
    }
  }

  .content-collection {
    font-family: "Baloo 2", cursive;
    padding-top: 350px;
    font-size: 1.6rem;
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
