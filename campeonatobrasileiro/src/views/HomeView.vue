<template>
  <main>
    <Navbar />
    <Conteudo />
    
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Conteudo from './components/Conteudo.vue'


export default{
  name:'HomeView',
  components:{
    Navbar,
    Conteudo,
  },

}
</script>

<style scoped>

</style>