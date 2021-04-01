<template>
  <div id="home">
    <login></login>
    <div class="link-collection">
      <router-link to="/collection">
        <img src="../assets/icons/fleche.svg" alt="icone de lien collection" />
      </router-link>
    </div>
    <div class="video container-fluid">
      <div class="row">
        <div class="embed-responsive embed-responsive-16by9">
          <video autoplay="true" loop controls="controls">
            <source src="../assets/video/crazyJungle.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
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
  position: relative;

  .link-collection {
    position: fixed;
    z-index: 3;
    top: 80%;
    right: 10px;
    cursor: pointer;
    animation: bounce 0.7s ease infinite;
  }

  .network {
    background: rgba(0, 0, 0, 0.3);
    width: max-content;
    height: 150px;
    position: fixed;
    border-radius: 5px;
    top: 45%;
    right: 0;
    padding: 5px;
  }

  video {
    width: 100%;
  }

  @keyframes bounce {
    from {
      right: 50px;
    }
    50% {
      right: 30px;
    }
    to {
      right: 50px;
    }
  }
}
</style>
