<template>
  <div class="card" style="width: 20rem;">
    <div class="col-sm card__image">
      <img :src="image" alt="gourd" width="230px" />
    </div>
    <div class="col-sm card__content">
      <h1 class="mb-5">{{ title }}</h1>
      <div class="card__description mt-5">
        <p>{{ description }}</p>
      </div>
      <router-link class="card__link" to="/collection"
        ><button class="card__button">
          Découvrir
          <img
            src="..//assets/icons/flecheBtn.svg"
            alt="icone de flèche"
          /></button
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProducts",
  props: ["name", "id", "image", "title", "description"]
};
</script>

<style lang="scss">
.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 5px;
  margin: 25px;
  padding: 10px 20px;
  height: max-content;
  width: max-content;

  &:hover {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    transform: scale(1.2);
  }

  &__image {
    img {
      width: 250px;
    }
    border-radius: 5px;
  }

  &__content {
    text-align: center;
    h1 {
      text-transform: uppercase;
      font-size: 2.5em;
      font-weight: 900;
      color: black;
    }
    p {
      text-decoration: none;
      color: black;
    }

    a {
      button {
        padding: 0px 20px;
        outline: none;
        border: none;
        border-radius: 7px;
        font-size: 1.3rem;
        font-weight: bold;
        letter-spacing: 1.3px;
        color: #333;
        background-color: #fbcb00;
        box-shadow: 2px 2px 25px -7px #333;
        cursor: pointer;
      }
    }
  }
}
</style>
