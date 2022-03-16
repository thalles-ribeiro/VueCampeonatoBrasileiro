<template>
  <div class="home">
    <Conteudo />
    <p>larissa</p>
    <img :src='times.escudo'>
  </div>
</template>

<script>
import Conteudo from '@/components/Conteudo.vue'


export default {
  name: 'HomeView',
  components: {
    Conteudo,
  },
  data(){
    return{
      times:[]
    }
  },
  created(){
    fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json?print=pretty')
    .then(resultado => resultado.json()) 
    .then(json => {
      this.times = json;
    });
  }
}
</script>

<style scoped>

</style>
