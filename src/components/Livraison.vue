<template>
  <div class="card-size">
    <div class="card-body">
      <h5 class="card-title">Expédition en France</h5>
      <p>
        <img
          class="icons-liv"
          src="../assets/icons/delivery.svg"
          alt="livraison"
        />
        Livraison Standard gratuite dès 39,00 € d'achat > Livraison estimée le
        08/04/21 - 10/04/21
      </p>
      <p>
        <img
          class="icons-liv"
          src="../assets/icons/politique.svg"
          alt="politique de retour"
        />
        Politique de retour >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Livraison"
};
</script>

<style lang="scss" scoped>
.card-size {
  margin-top: 80px;
  width: 800px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 5px;
  text-align: start;
  &:hover {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    transform: scale(1.2);
  }
  .block-size {
    div {
      margin: 10px 20px;
    }
  }
  a {
    color: #e52024;
    text-decoration: none;
  }
  .icons-liv {
    margin-right: 10px;
  }
}
</style>
