<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500&family=Staatliches&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap");

// font-family: 'Staatliches', cursive;
// font-family: 'Baloo 2', cursive;
// font-family: 'Londrina Outline', cursive;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
