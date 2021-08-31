<template>
  <div>
      <TypeNav></TypeNav>
      <Container></Container>
      <Recommend></Recommend>
      <Rank></Rank>
      <Like></Like>
      <Floor></Floor>
      <Brand></Brand>
  </div>
</template>

<script>
    import Container from './Container'
    import Recommend from './Recommend'
    import Rank from './Rank'
    import Like from './Like'
    import Floor from './Floor'
    import Brand from './Brand'
    export default {
        name:'Home',
        mounted(){
            console.log('Home',this);
        },
        components:{
            Container,
            Recommend,
            Rank,
            Like,
            Floor,
            Brand
        }
    }
</script>

<style>

</style>