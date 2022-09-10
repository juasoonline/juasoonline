<template>

    <!-- Begin contents wrapper -->
    <div class="">

        <!-- Begin contents for large screens -->
        <main-contents></main-contents>
        <!-- End contents for large screens -->

        <!-- Begin contents for mobile screens -->
        <!-- <mobile-contents v-else></mobile-contents> -->
        <!-- End contents for mobile screens -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    // import { useMobileDetection } from "vue3-mobile-detection"

    import MainContents from "@/components/Site/Item/MainContents";
    // import MobileContents from "@/components/Site/Item/MobileContents";

    export default
    {
        name: "Item",
        components: { MainContents },
        setup()
        {
            // const { isMobile } = useMobileDetection();
            // return { isMobile }
        }
    }
</script>

<style scoped>
</style>