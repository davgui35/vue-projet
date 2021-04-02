<template>
  <div id="total">
    <div>
      <button
        type="button"
        style="background: #E52024;"
        class="btn btn-danger"
        @click="toggleModal"
      >
        Ma commande
      </button>
      <div
        ref="modal"
        class="modal fade"
        :class="{ show, 'd-block': active }"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 v-if="totalProduct <= 1" class="modal-title">
                Commande des {{ totalProduct }} article
              </h5>
              <h5 v-if="totalProduct > 1" class="modal-title">
                Commande des {{ totalProduct }} articles
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="toggleModal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="alert alert-success" role="alert">
                Bravo votre commande a bien été validée!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="active" class="modal-backdrop fade show"></div>
    </div>
    <p>TOTAL :</p>
    <p>
      <strong>{{ totalProduct }}</strong>
    </p>
    <p>{{ totalPrice / 100 }} €</p>
  </div>
</template>

<script>
export default {
  name: "TotalShop",
  props: ["totalProduct", "totalPrice"],
  data() {
    return {
      active: false,
      show: false
    };
  },
  methods: {
    toggleModal() {
      const body = document.querySelector("body");
      this.active = !this.active;
      this.active
        ? body.classList.add("modal-open")
        : body.classList.remove("modal-open");
      setTimeout(() => (this.show = !this.show), 10);
    }
  }
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
  background: #bde4eb;

  .btn-three {
    color: #333;
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
