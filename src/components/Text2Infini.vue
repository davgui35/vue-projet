<template>
  <div class="text-again">
    <span class="texte">{{ content }}&nbsp; </span>
    <span class="texte">{{ content }}&nbsp; </span>
  </div>
</template>

<script>
export default {
  name: "TextAgain",
  props: ["content"]
};
</script>

<style lang="scss" scoped>
.text-again {
  display: flex;
  overflow: hidden;
  width: -100%;
  height: 300px;
  position: absolute;
  margin-bottom: 50px;
  opacity: 0.5;

  .texte {
    color: rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    font-size: 250px;
    animation: 15s scrollTxt linear infinite;
    @keyframes scrollTxt {
      0% {
        transform: translate(-100%, 0);
      }
      100% {
        transform: translate(0%, 0);
      }
    }
  }
}
</style>
