<template>
  <div id="home">
    <h1>Home</h1>
    <login></login>
    <div class="link-collection">
      <router-link to="/collection">
        <img src="../assets/icons/fleche.svg" alt="icone de lien collection" />
      </router-link>
    </div>
    <div class="network">
      <Network />
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Network from "@/components/Network.vue";

export default {
  name: "Home",
  components: {
    Login,
    Network
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 90vh;
  background-image: url("../assets/img/essaie1.jpg");

  .link-collection {
    position: absolute;
    bottom: 30px;
    right: 50px;
  }

  .network {
    width: max-content;
    position: fixed;
    top: 45%;
    right: 0;
    padding: 20px;
  }
}
</style>
