<template>
  <div id="home">
    <h1>Welcome</h1>
    <login></login>
    <div class="link-collection">
      <router-link to="/collection">
        <img src="../assets/icons/fleche.svg" alt="icone de lien collection" />
      </router-link>
    </div>
    <div class="video container-fluid">
      <div class="row">
        <div class="embed-responsive embed-responsive-16by9">
          <video autoplay loop>
            <source src="../assets/video/mountains.mp4" type="video/mp4" />
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
  height: 80vh;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-size: 8rem;
  }

  .link-collection {
    position: fixed;
    z-index: 3;
    bottom: 30px;
    right: 50px;
    cursor: pointer;
    animation: bounce 0.7s ease infinite;
  }

  .network {
    width: max-content;
    position: fixed;
    top: 45%;
    right: 0;
    padding: 20px;
  }

  video {
    height: max-content;
    width: 100vw;
    z-index: -1;
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
