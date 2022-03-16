<template>
  <div class="app">
    <Navbar />
    <router-view/>
  </div>
</template> sim.. pode crer.. e o bom é  qpegando de la ele ja vem responsivel

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

</style>