<template>
  <div id="about">
    <h1 class="title-header">A propos</h1>
    <div class="arrow-header">
      <a href="#we" class="we">
        <img src="../assets/icons/fleche.svg" alt="icone de lien collection"
      /></a>
    </div>
    <div class="container center-block">
      <div>
        <p>
          <img
            src="../assets/img/concept.png"
            alt="image d'exemple"
            width="300px"
          />
        </p>
      </div>
      <div class="content-we">
        <h1>NOTRE</h1>
        <h3>CONCEPT</h3>
        <p class="text-we">
          "Notre concept est de créer une marque conviviale, familiale, qui nous
          ressemble. On crée des collections en fonction de thèmes 3 fois par
          an. La diversité des thèmes est nombreuse. Celle-ci nous laisse
          libre-court à la création et à notre imagination."
        </p>
      </div>
    </div>
    <div class="text-infinite">
      <div class="up">
        <TextInfini :content="' - TU ES QUI TOI ?'" />
      </div>
      <div class="down">
        <TextAgain :content="'- TU ES QUI TOI ? '" />
      </div>
    </div>
    <div id="we"></div>
    <div class="img-presentation">
      <img src="../assets/img/team.gif" alt="img" width="100%" />
      <div class="container center-block">
        <p class="text-presentation">
          <!-- <img src="../assets/icons/straight-quotes.svg" alt="" /> -->
          "C'est l'histoire de 2 personnes qui avaient envie de faire des
          projets ensembles, avec des idées communes et des univers différents.
          Au fur et à mesure du temps qui passe, le groupe s’agrandit et ces
          nouvelles rencontres permettent d’enrichir le projet avec de nouvelles
          idées. De ce point de départ est né le projet : Duo foufou qui retrace
          l’univers déjanté des 4 personnalités qui se tiennent devant vous."
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TextInfini from "@/components/TextInfini.vue";
import TextAgain from "@/components/Text2Infini.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  components: {
    TextInfini,
    Footer,
    TextAgain
  }
};
</script>

<style lang="scss" scoped>
#about {
  padding-top: 850px;
  background-image: url("../assets/img/about.png");
  background-repeat: no-repeat;
  background-size: contain;

  .title-header {
    font-family: "Staatliches", cursive;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    letter-spacing: 2rem;
    position: absolute;
    top: 500px;
    left: 25%;
    font-size: 9rem;
    font-weight: bold;
    color: #f1f1f1;
  }
  .arrow-header {
    position: absolute;
    z-index: 3;
    top: 50%;
    right: 50%;
    cursor: pointer;
    transform: rotate(90deg);
    animation: bounce 0.7s ease infinite;
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

      .text-we {
        margin-top: 100px;
        text-align: start;
        padding-left: 30px;
      }

      h1 {
        font-family: "Staatliches", cursive;
        position: absolute;
        top: -100px;
        left: -200px;
        font-size: 6rem;
        font-weight: bold;
      }
      h3 {
        font-family: "Staatliches", cursive;
        position: absolute;
        top: 0px;
        font-size: 5rem;
        left: -50px;
      }
    }
  }

  .text-infinite {
    .up {
      font-family: "Staatliches", cursive;
      margin-top: -100px;
      padding-top: 100px;
    }
    .down {
      font-family: "Londrina Outline", cursive;
      padding-top: 300px;
      margin-top: -100px;
    }
  }

  .img-presentation {
    padding-top: 350px;
    text-align: center;
    img {
      max-width: 950px;
      height: 600px;
    }
    p {
      width: 100%;
      text-align: start;
      font-size: 1.2rem;
      margin-top: -100px;
      max-width: 800px;
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
