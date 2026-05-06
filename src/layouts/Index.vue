<template>
    <div>
        <Topbar />
         <router-view />
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

<style lang="scss" scoped>

</style>