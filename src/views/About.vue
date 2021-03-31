<template>
  <div id="about">
    <div class="header">
      <img src="../assets/img/essaie1.jpg" alt="image de header" />
    </div>
    <div class="arrow-header">
      <a href="#we" class="we">
        <img src="../assets/icons/fleche.svg" alt="icone de lien collection"
      /></a>
    </div>
    <div id="we"></div>
    <div class="container center-block">
      <div>
        <p>
          <img src="../assets/img/300x400.png" alt="image d'exemple" />
        </p>
      </div>
      <div class="content-we">
        <h1>NOTRE</h1>
        <h3>WE</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          quibusdam recusandae quam, aperiam corporis blanditiis, aliquid cumque
          debitis totam aliquam dolor, adipisci perspiciatis! Aliquid mollitia
          aspernatur vel quam nesciunt veritatis.
        </p>
      </div>
    </div>
    <div>
      <TextInfini />
    </div>
    <div class="img-presentation">
      <img src="../assets/img/essaie1.jpg" alt="img" width="100%" />
      <div class="container center-block">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          voluptatibus doloribus similique? Aspernatur eius quasi dolorem
          reiciendis harum eveniet magnam sed omnis consequuntur! Neque labore
          facilis qui, atque aliquid odit? Quidem quos officia facere esse
          maiores voluptas ex ab suscipit!
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TextInfini from "@/components/TextInfini.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  components: {
    TextInfini,
    Footer
  }
};
</script>

<style lang="scss" scoped>
#about {
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

  .container {
    display: flex;
    max-width: 600px;
    margin-top: 150px;
    .content-we {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        position: absolute;
        top: -100px;
        left: -200px;
        font-size: 5rem;
        font-weight: bold;
      }
      h3 {
        position: absolute;
        top: 0px;
        font-size: 5rem;
        left: -50px;
      }
    }
  }

  .img-presentation {
    margin-top: 200px;
    text-align: center;
    img {
      max-width: 950px;
      height: 600px;
    }
    p {
      max-width: 600px;
    }
  }
}
</style>
