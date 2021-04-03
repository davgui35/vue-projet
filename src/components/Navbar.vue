<template>
  <nav
    class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <router-link class="navbar-brand" to="/"
          ><img src="../assets/icons/logo.svg" alt="logo de la marque"
        /></router-link>
        <ul class="navbar-nav mr-auto d-flex align-items-center">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">
              <img class="icon" src="../assets/icons/home.svg" alt="icone home"
            /></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#"
              >A propos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/collection" class="nav-link" href="#"
              >Collection</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/shopping" class="nav-link" href="#">
              <img src="../assets/icons/shopping-basket.svg" alt="icone home" />
              <p class="number_articles">{{ totalProduct }}</p></router-link
            >
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <a
            class="btn btn-warning my-2 my-sm-0"
            style="background: #FBCB00;"
            data-toggle="modal"
            data-target="#login"
            >Se connecter</a
          >
          <a class="btn btn-danger my-2 my-sm-0" @click="logout"
            >Se déconnecter</a
          >
          <a
            class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0"
            data-toggle="modal"
            data-target="#miniCart"
          >
            <i class="fas fa-cart-plus"></i>
          </a>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  computed: {
    totalProduct() {
      return this.$store.getters.getShoppingCart.reduce(
        (acc, current) => acc + current.quantity,
        0
      );
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Vous êtes déconnecté !!!");
          let homeLink = this.$router.options.routes[0].path;
          this.$router.replace(homeLink);
          document.location.reload();
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 992px) {
  .navbar.custom-nav {
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: #fff !important;
  }

  .navbar {
    opacity: 0.5;
  }

  .number_articles {
    position: absolute;
    top: 22px;
    left: 530px;
    color: #f1f1f1;
    background: Crimson;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    text-align: center;
  }

  .router-link-exact-active {
    font-weight: bold;
    color: #ce1db6;
  }
  .icon {
    position: relative;
  }
}
</style>
