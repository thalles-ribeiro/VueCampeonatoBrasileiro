<template>
  <container>
    <h2>TIMES BRASILEIROS</h2>
    <div class="itens" v-for="item of times" :key="item.id"> <!--A cada posiçao da lista equipes(variavel declarada no array, o resultado vai exibir nome,escudo e pontos-->
     <v-card
    class="card" 
    width="300"
    tile
  >
    <v-img style="padding:20px"
      max-width="200"
      :src="item.escudo"
    ></v-img>
   

    <v-card-title>
      {{item.nome}}
    </v-card-title>

    <v-card-subtitle>
      pontos {{item.pontos}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </div>
  </container>
</template>

<script>
export default {
  name:'conteudo',
  data(){
    return{
      times:[],
      show:false,
    }
  },
    created(){
      fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json?print=pretty')
      .then(resultado => resultado.json()) 
      .then(json => {
        this.times = json;
    });
  },
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
      margin-top: 20px;
  }
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
</style>