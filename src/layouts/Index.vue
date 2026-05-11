<template>
  <div class="min-h-screen flex flex-col">
    
    <Topbar />

    <!-- THIS grows -->
    <main class="flex-1 w-full"> 
      <router-view />
    </main>

    <Footer />
    
  </div>
</template>

<script>
import Topbar from './Topbar.vue'
import Footer from './Footer.vue'

export default {
  name: 'Index',
  components: {
    Topbar,
    Footer
  }
}
</script>

<style scoped>
/* No custom SCSS needed! Tailwind handles the flexbox and constraints. */
</style>