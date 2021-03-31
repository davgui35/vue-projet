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
  </div>
</template>

<script>
import TextInfini from "@/components/TextInfini.vue";
export default {
  name: "Collection",
  components: {
    TextInfini
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
    top: 660px;
    left: 50%;
    transform: rotate(90deg);
  }
  .text-infinite {
    height: 70px;
  }
  .content-collection {
    margin-top: 250px;
  }
}
</style>
