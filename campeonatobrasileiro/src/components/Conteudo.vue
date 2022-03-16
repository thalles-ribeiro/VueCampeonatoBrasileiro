<template>
  <container>
    <h2>TIMES BRASILEIROS</h2>
    <div class="itens" v-for="item of times" :key="item.id"> <!--A cada posiçao da lista equipes(variavel declarada no array, o resultado vai exibir nome,escudo e pontos-->
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
  h2{
    margin-top: 100px;
  }
  p{
    margin-top: 50px;
  }
  .itens{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>