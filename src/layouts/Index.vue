<!-- <template>
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

</style> -->
<template>
    <!-- Waxaan ku darnay 'main-container' si aan u xakameyno layout-ka -->
    <div class="main-container">
        <Topbar />
        
        <!-- 'main-content' wuxuu qaadanayaa booska bannaan oo dhan -->
        <main class="main-content">
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

<style lang="scss" scoped>
.main-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Waxay ka dhigaysaa dhererka mid u dhigma shaashadda oo dhan */
}

.main-content {
    flex: 1; /* Qaybtan ayaa buuxinaysa booska u dhexeeya Topbar iyo Footer */
}
</style>