<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="value"
      />&nbsp;<button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    search() {
      // 调接口
      axios.get(`https://api.github.com/search/users?q=${this.value}`).then(
        (res) => {
            this.$bus.$emit('getData',res.data.items);
        },
        (err) => {
            console.log(err);
        }
      );
    },
  },
};
</script>

<style>
</style>