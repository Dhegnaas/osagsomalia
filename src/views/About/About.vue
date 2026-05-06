<template>
    <div>
        <h1>About Us</h1>
        <OfficeEstablishment />
        <OurVision />
        <OurMission />
    </div>
</template>

<script>
import OfficeEstablishment from '@/components/Office Establishment.vue';
import OurVision from '@/components/OurVision.vue';
import OurMission from '@/components/OurMission.vue';
    export default {
        name: 'About Us',
        components: {
            OfficeEstablishment,
            OurVision,
            OurMission
        }
    }
</script>