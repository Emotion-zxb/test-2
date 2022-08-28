<template>
  <div style="width: 400px;height: 200px;margin-left: 50px">
    <p>{{$route.params.id}}</p>
    <p>{{$route.params.name}}</p>
    <p>{{id}}</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
    name: 'List',
    props: ['id','name'],
    mounted(){
        console.log(">>>this",this);
    }
}
</script>

<style>

</style>