<template>
  <div class="app">
    <div class="nav">
      <Navbar />
    </div>
    <div class="router">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HomeView from '@/views/HomeView.vue'
import Navbar from '@/components/Navbar.vue'


export default {
  name: 'App',
  components: {
    HomeView,
    Navbar
  }
}
</script>

<style scoped>
 .router{
   display: flex;
   justify-content: center;
   width: 100vw;
   min-height: 100vh;
   height: auto;
 }
</style>