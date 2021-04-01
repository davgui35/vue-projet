<template>
  <div id="article">
    <div>
      <img :src="image" alt="image de l'article" width="60px" />
    </div>
    <div>
      <h2>{{ title }}</h2>
      <p><em>Description: </em>{{ description }}</p>
      <p><em>Taille: </em>{{ size }}</p>
    </div>
    <div>
      <p><span>Quantité:</span> {{ quantity }} ✖ {{ price }} €</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  props: [
    "image",
    "title",
    "quantity",
    "price",
    "description",
    "size",
    "totalProduct"
  ],
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
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  h2 {
    text-align: start;
  }
  p {
    text-align: start;
    span {
      color: rgb(134, 134, 134);
    }
  }
}
</style>
