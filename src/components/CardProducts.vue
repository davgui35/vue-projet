<template>
  <div class="card">
    <div class="card__image">
      <img :src="image" alt="gourd" width="230px" />
    </div>
    <div class="card__content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <router-link :to="{ name: name, params: { id: id } }"
        ><button class="card__button">
          Découvrir
          <img
            src="@/assets/icons/flecheBtn.svg"
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
  width: 800px;
  margin: 100px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.2);
  }

  &__image {
    border-radius: 5px;
  }

  &__content {
    h1 {
      margin: 1em;
      font-size: 1.5em;
      font-weight: 900;
    }
    p {
      margin: 40px;
    }

    a {
      button {
        padding: 1.5em 3.1em;
        outline: none;
        border: none;
        border-radius: 7px;
        font-size: 0.8em;
        font-weight: 700;
        letter-spacing: 1.3px;
        color: #fff;
        background-color: #333;
        box-shadow: 2px 2px 25px -7px #333;
        cursor: pointer;
      }
    }
  }
}
</style>
