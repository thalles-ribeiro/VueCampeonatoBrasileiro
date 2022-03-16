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
    background-color: blue;
    width: 80%;
    display: flex;
    justify-content: center;
  }
</style>
