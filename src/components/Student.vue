<template>
  <div id="demo1">
    <h2>{{ name }}</h2>
    <p>{{ fans }}</p>
    <button @click="sendName">按钮</button>
    <button @click="unbind">解绑</button>
    <h1>{{ num }}</h1>
    <button @click="add">点我加1</button>
    <button @click="death">一键销毁</button>
    <button @click="demo">通过全局事件总线实现兄弟组件的传值</button>
    <input type="text" v-model="value" v-show="flag" ref="input">
    <button @click="showInput">显示input</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "Student",
  data() {
    return {
      name: "法外狂徒：张三",
      fans: "一个违法乱纪的破环份子",
      num: 0,
      value: "123",
      flag: false
    };
  },
  methods: {
    sendName() {
      // 给组件绑定一个 自定义事件 ，在组件内出发这个 事件
      this.$emit("zhaxiaobing", this.name);
    },
    unbind() {
      // 解绑 zhaxiaobing 事件
      this.$off("zhaxiaobing");
    },
    death() {
      this.$destroy();
      console.log(this);
    },
    add() {
      this.num++;
      console.log("add函数调用了", this.num);
    },
    demo() {
      // this.$bus.$emit("zhaxiaobing", { name: "查小兵", age: 24 });
      pubsub.publish("Emotion",'查小兵')
    },
    showInput(){
      this.flag = true;
      // 这里不会立即去重新去解析模版
      // 会继续执行完下面的代码
      // 等DOM渲染完毕后在执行回调函数...
      this.$nextTick(() => {
        this.$refs.input.focus();
      })
    }
  },
  beforeDestroy() {
    console.log("我要销毁了");
    // 解绑
    // this.$bus.$off("zhaxiaobing");
  },
};
</script>

<style scoped>
#demo1 {
  background-color: #ccc;
  min-width: 500px;
  margin-top: 20px;
}
</style>