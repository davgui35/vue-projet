<template>
  <div id="article">
    <div>
      <img :src="image" alt="image de l'article" width="60px" />
    </div>
    <p><span>Nom :</span> {{ title }}</p>
    <p><span>Quantité:</span> {{ quantity }} ✖ {{ price }} €</p>
    <p><span>Prix:</span> {{ roundDecimal(price * quantity, 2) }} €</p>
  </div>
</template>
<script>
export default {
  name: "Article",
  props: ["image", "title", "quantity", "price", "trash"],
  methods: {
    roundDecimal(nombre, precision) {
      precision = precision || 2;
      let tmp = Math.pow(10, precision);
      return Math.round(nombre * tmp) / tmp;
    }
  }
};
</script>

<style lang="scss" scoped>
#article {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  margin: 10px 20px;
  border-radius: 5px;
  width: 800px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  p {
    span {
      color: rgb(134, 134, 134);
    }
  }
}
</style>
