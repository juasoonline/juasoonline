<template>

    <!-- Begin contents wrapper -->
    <div class="bg-gray-50 h-screen">

        <!-- Begin logo, search and cart -->
        <main-header></main-header>
        <!-- End logo, search and cart -->

        <!-- Begin top contents -->
        <main-contents></main-contents>
        <!-- End top contents -->

        <!-- Begin mobile menu -->
        <mobile-bottom-nav-bar></mobile-bottom-nav-bar>
        <!-- End mobile menu -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import MainHeader from "./MainHeader";
    import MainContents from "./MainContents";
    import MobileBottomNavBar from "../../Site/Shared/MobileBottomNavBar";

    export default
    {
        name: "Item",
        components: { MainHeader, MainContents, MobileBottomNavBar }
    }
</script>

<style scoped>
</style>