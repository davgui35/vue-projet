<template>
  <div class="card">
    <div class="container">
      <div class="row">
        <div class="col-sm card__image">
          <img :src="image" alt="gourd" width="230px" />
        </div>
        <div class="col-sm card__content">
          <h1 class="mb-5">{{ title }}</h1>
          <div class="card__description mt-5">
            <p>{{ description }}</p>
          </div>
          <router-link
            class="card__link"
            :to="{ name: name, params: { id: id } }"
            ><button class="card__button">
              Découvrir
              <img
                src="@/assets/icons/flecheBtn.svg"
                alt="icone de flèche"
              /></button
          ></router-link>
        </div>
      </div>
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
  text-align: start;
  width: 800px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 5px;
  margin-top: 35px;

  &:hover {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    transform: scale(1.2);
  }

  &__image {
    border-radius: 5px;
  }

  &__content {
    h1 {
      position: absolute;
      top: -50px;
      text-transform: uppercase;
      font-size: 2.5em;
      font-weight: 900;
      color: black;
    }
    p {
      text-decoration: none;
      margin: 40px;
      color: black;
    }

    a {
      button {
        margin: 20px 0;
        padding: 0.5em 2.1em;
        outline: none;
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
    }
  }
}
</style>
