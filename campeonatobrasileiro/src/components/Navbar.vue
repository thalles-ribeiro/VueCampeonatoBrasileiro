<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://www.netbet.com/br/blog/wp-content/uploads/2019/06/IMG_1-Campeonato-Brasileiro.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-title>CAMPEONATO BRASILEIRO</v-app-bar-title>


      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">HOME</v-tab>
          <v-tab>SERIE A</v-tab>
          <v-tab to="/classificacao">CLASSIFICAÇÃO</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name:'navbar',
    data: () => ({
      drawer: false,
      group: null,
      props: null,
    }),
  }
</script>

<style scoped>
  #v-tab{
    text-decoration: none;
  }
</style>
