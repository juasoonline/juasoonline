<template>

    <!-- Begin contents -->
    <div>

        <!-- Begin nav bar -->
        <nav-bar class=""></nav-bar>
        <!-- End nav bar -->

        <!-- Begin logo, search and cart -->
        <main-header class=""></main-header>
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
    <!-- Begin contents -->

</template>

<script>
    import NavBar from "@/components/Site/Shared/NavBar";
    import MainHeader from "@/components/Site/Shared/MainHeader";
    import MainContents from "@/components/Site/Campaigns/Campaign/MainContents";
    import MainFooter from "@/components/Site/Shared/MainFooter";
    import MobileBottomNavBar from "../../Shared/MobileBottomNavBar";

    export default
    {
        name: "Campaign",
        components: { NavBar, MainHeader, MainContents, MainFooter, MobileBottomNavBar },
    }
</script>

<style scoped>

</style>