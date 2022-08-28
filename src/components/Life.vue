<template>
  <div>
    <h3>生活
      <img src="@/assect/life.png" alt="生活" style="width: 400px;height: 200px">
      <el-input v-model="value"></el-input>
    </h3>
    <p>
      <router-link :to="{name: 'nan'}" tag="a">男</router-link><br />
      <router-link to="/life/woman" tag="a">女</router-link>
    </p>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Life',
    data(){
      return {
        value: ''
      }
    },
    activated(){
      console.log('Life组件激活了~');
    },
    deactivated(){
      console.log('Life组件失活了~');
    }
}
</script>

<style>

</style>