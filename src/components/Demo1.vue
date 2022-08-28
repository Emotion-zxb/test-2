<template>
  <div class="container">
    <header>
      <!-- 具名插槽 -->
      <slot name="header"></slot>
    </header>
    <main>
    </main>
    <footer>
      <!-- 具名插槽 -->
      <slot name="footer"></slot>
    </footer>
    <!-- 作用域插槽 -->
    <slot :user='user'></slot>
    <slot :user='user1' name="user1"></slot>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      url: "http://localhost:demo",
      user: {
        name: '查小兵',
        age: 24,
        school: '铜陵学院'
      },
      user1: {
        name: '张三',
        age: 24,
        school: '理论'
      }
    };
  },
  mounted(){
    console.log(this);
  }
};
</script>

<style scoped>
.demo1 {
  width: 200px;
  height: 200px;
  background-color: skyblue;
}
</style>