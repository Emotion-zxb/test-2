<template>
  <div id="demo1">
    <h2>{{ name }}</h2>
    <p>{{ fans }}</p>
    <button @click="sendName">按钮</button>
    <button @click="demo">通过全局事件总线实现兄弟组件的传值</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Teacher",
  props: ["showName"],
  data() {
    return {
      name: "Bibili年度UP主：罗翔",
      fans: "2400万",
    };
  },
  methods: {
    sendName() {
      // 调用父组件传过来的函数实现 儿子 给 父亲 传输数据
      this.showName(this.name);
    },
    demo() {
      // this.$bus.$emit('zhaxiaobing',{name: '查小兵',age: 24})
    },
  },
  mounted() {
    // 绑定zhaxiaobing事件
    // this.$bus.$on("zhaxiaobing", (data) => {
    //   alert(data.name+data.age);
    // });
    this.pubsubId = pubsub.subscribe("Emotion", (massageName, data) => {
      console.log("我收到消息了", massageName, data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubsubId);
  },
};
</script>

<style scoped>
#demo1 {
  background-color: #ccc;
  min-width: 500px;
}
</style>