<template>
  <div>
    <h1>当前数据是：{{ $store.state.num }}</h1>
    <select name="选择加几" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    <button @click="plusOdd">奇数就加</button>
    <button @click="plusWait">等一等在加</button>
    <h2>我是num的倍数{{ $store.getters.enlargement }}</h2>
    <p>-------------------------------------------</p>
    <h1>{{ a }}</h1>
    <h1>{{ b }}</h1>
    <h1>{{ c }}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // 加
    plus() {
      this.$store.commit("plus", this.n);
    },
    // 减
    minus() {
      this.$store.commit("minus", this.n);
    },
    // 奇数就加
    plusOdd() {
      this.$store.dispatch("plusOdd", this.n);
    },
    // 等一下再加
    plusWait() {
      this.$store.dispatch("plusWait", this.n);
    },
  },
  computed: {
    // A() {
    //   return this.$store.state.a;
    // },
    // B() {
    //   return this.$store.state.b;
    // },
    // C() {
    //   return this.$store.state.c;
    // },
    // ...mapState({A: 'a',B: 'b',C: 'c'})
    ...mapState(['a','b','c'])
  },
  mounted() {
    // console.log(">>>this", this);
    // const x = mapState({A: 'a',B: 'b',C: 'c'});
    const x = mapState(['a','b','c']);
    console.log('>>>x',x);
  },
};
</script>

<style scoped>
* {
  margin-right: 10px;
}
</style>