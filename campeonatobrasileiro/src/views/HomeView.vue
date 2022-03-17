<template>
  <div class="home">
    <Conteudo />
  </div>
</template>

<script>
  import Conteudo from '@/components/Conteudo.vue'

  export default {
    name: 'HomeView',
    components: {
      Conteudo,
    },
  }
</script>

<style scoped>
  .home{
    background-color: rgb(211, 211, 211);
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
  }
</style>
