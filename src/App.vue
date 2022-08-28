<template>
  <div class="container">
    <!-- vue中借助router-link标签实现路由的切换 -->
    <router-link tag="el-button" to="/life">生活</router-link>
    <router-link tag="el-button" to="/study">学习</router-link>
    <el-button @click="toList">去列表</el-button>
    <el-button @click="toLife">去生活</el-button>
    <el-button @click="back">后退back</el-button>
    <el-button @click="forward">前进forward</el-button>
    <el-button @click="go">go</el-button>
    <!-- 指定路由组件出现的位置 -->
    <keep-alive include="Life"> <!-- 注意这里的Life是组件名，组件名，组件名 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import Search from "@/components/Search.vue";
// import List from "@/components/List.vue";
// import Demo1 from "@/components/Demo1.vue";
// import Count from '@/components/Count.vue'
export default {
  name: "App",
  components: {},
  data() {
    return {
      url: "http://localhost:app",
    };
  },
  methods: {
    toList() {
      this.$router.push({
        name: "leibiao",
        params: {
          id: "111",
          name: "lubenwei",
        },
      });
    },
    toLife() {
      this.$router.replace({
        path: "/life",
      });
    },
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    go() {
      this.$router.go(-2); //表示后退2步  //正数表示前进几步
    },
  },
};
</script>

<style>
</style>
