<template>
  <container>
    <p>TIMES BRASILEIROS</p>
    <div v-for="item of times" :key="item.id"> <!--A cada posiçao da lista equipes(variavel declarada no array, o resultado vai exibir nome,escudo e pontos-->
    <p>{{item.nome}}</p>
    <img :src='item.escudo'>
    {{item.pontos}}
    </div>
  </container>
</template>

<script>
export default {
  name:'conteudo',
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