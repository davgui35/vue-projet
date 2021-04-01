<template>
  <div class="card-size">
    <div class="card-body">
      <h5 class="card-title">Tailles</h5>
      <div class=" block-size d-flex justify-content-evenly w-100">
        <div>XS(34)</div>
        <div>S(36)</div>
        <div>M(38)</div>
        <div>L(40/42)</div>
        <div>XL(42/44)</div>
        <div>XLL(44/46)</div>
      </div>
      <a href="#">Guide des Tailles ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSize"
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
}
</style>
