<template>

    <!-- Begin contents wrapper -->
    <div class="">

        <!-- Begin top ads -->
        <top-ads></top-ads>
        <!-- End top ads -->

        <!-- Begin nav bar -->
        <nav-bar class=""></nav-bar>
        <!-- End nav bar -->

        <!-- Begin logo, search and cart -->
        <main-header class="sticky top-0 z-40"></main-header>
        <!-- End logo, search and cart -->

        <!-- Begin top contents -->
        <main-contents></main-contents>
        <!-- End top contents -->

        <!-- Begin footer -->
        <suspense><main-footer></main-footer></suspense>
        <!-- End footer -->

        <!-- Begin mobile menu -->
        <mobile-bottom-nav-bar></mobile-bottom-nav-bar>
        <!-- End mobile menu -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import TopAds from "@/components/Site/Shared/TopAds";
    import NavBar from "@/components/Site/Shared/NavBar";
    import MainHeader from "@/components/Site/Shared/MainHeader";
    import MainContents from "@/components/Site/Brands/MainContents";
    import MainFooter from "@/components/Site/Shared/MainFooter";
    import MobileBottomNavBar from "../Shared/MobileBottomNavBar";

    export default
    {
        name: "Store",
        components: { TopAds, NavBar, MainHeader, MainContents, MainFooter, MobileBottomNavBar },
    }
</script>

<style scoped>
</style>