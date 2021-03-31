<template>
  <div id="total">
    <div class="box-3">
      <div class="btn btn-three">
        <span>Valider</span>
      </div>
    </div>
    <p>TOTAL :</p>
    <p>{{ totalProduct }}</p>
    <p>{{ totalPrice / 100 }} €</p>
  </div>
</template>

<script>
export default {
  name: "TotalShop",
  props: ["totalProduct", "totalPrice"]
};
</script>

<style lang="scss" scoped>
#total {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  margin: 10px 20px;
  border-radius: 5px;
  width: 800px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background: #66a182;

  .btn-three {
    color: #fff;
    transition: all 0.5s;
    position: relative;
    padding: 20px;
  }
  .btn-three::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
  }
  .btn-three:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  .btn-three::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: scale(1.2, 1.2);
  }
  .btn-three:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
}
</style>
