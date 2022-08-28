<template>
  <div>
    <img
      src="../assect/woman.webp"
      alt=""
      style="width: 200px; height: 180px"
    />
  </div>
</template>

<script>
export default {
  name: "Woman",
  beforeRouteEnter(to, from, next) {
    next();
    // 注意：这里组件实例对象 是 undefined 
    // this.$message('这是一条消息提示');
  },
  beforeRouteLeave(to, from, next) {
    this.$alert("客官，是否真的要离开本页面？", "提示", {
      confirmButtonText: "确定",
      callback: () => {
        next();
      },
    });
  },
};
</script>

<style>
</style>