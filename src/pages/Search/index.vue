<template>
   <div>
      <!-- <h1>Serach</h1>
      <p>params:{{this.$route.params.keyword}}-----------简化---------{{keyword}}</p>
      <p>query:{{this.$route.query.keyword1}}-----------简化---------{{keyword1}}</p>
      <p>111111</p>
      <p>传递过来的参数：{{username}}</p>
      <p>传递过来的参数：{{username}}</p> -->
      <TypeNav></TypeNav>
  </div>
</template>

<script>
    export default {
        name:'Serach',
        props:["keyword",'username','keyword1'],
        mounted(){
            console.log('this.route',this.route);
        }
    }
</script>

<style>

</style>