<template>
  <div>
    <h3>
      学习
      <img
        src="@/assect/study.jpg"
        alt=""
        style="width: 400px; height: 200px"
      />
    </h3>
    <div style="display: flex">
      <div>
        <li v-for="item in subList" :key="item.id">
          <router-link
            :to="{
              name: 'leibiao',
              params: {
                id: item.id,
                name: item.name,
              },
            }"
          >
            {{ item.name }}
          </router-link>
        </li>
      </div>

      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Study",
  data() {
    return {
      subList: [
        {
          id: nanoid(),
          name: "语文",
        },
        {
          id: nanoid(),
          name: "数学",
        },
        {
          id: nanoid(),
          name: "英语",
        },
        {
          id: nanoid(),
          name: "物理",
        },
        {
          id: nanoid(),
          name: "化学",
        },
        {
          id: nanoid(),
          name: "生物",
        },
      ],
    };
  },
  // mounted() {
  //   console.log("study挂载了");
  // },
  // beforeDestroy() {
  //   console.log("study销毁了");
  // },
};
</script>

<style>
</style>