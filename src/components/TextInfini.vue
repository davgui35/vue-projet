<template>
  <div class="text-infinite">
    <span class="txt t1">{{ content }}&nbsp; </span>
    <span class="txt t2">{{ content }}&nbsp; </span>
  </div>
</template>

<script>
export default {
  name: "TextInfini",
  props: ["content"]
};
</script>

<style lang="scss" scoped>
.text-infinite {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 300px;
  position: absolute;
  margin-bottom: 50px;

  .txt {
    white-space: nowrap;
    font-size: 250px;
    animation: 15s scrollTxt linear infinite;
    @keyframes scrollTxt {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(-100%, 0);
      }
    }
  }
}
</style>
