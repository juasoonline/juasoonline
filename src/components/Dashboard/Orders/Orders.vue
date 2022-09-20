<template>

    <!-- Begin contents wrapper -->
    <div class="">

        <!-- Begin navbar -->
        <nav-bar></nav-bar>
        <!-- End navbar -->

        <!-- Begin logo, search and cart -->
        <main-header></main-header>
        <!-- End logo, search and cart -->

        <!-- Begin mobile header -->
        <mobile-header></mobile-header>
        <!-- End mobile header -->

        <!-- Begin top contents -->
        <main-contents></main-contents>
        <!-- End top contents -->

        <!-- Begin footer -->
        <suspense>
            <main-footer></main-footer>
        </suspense>
        <!-- End footer -->

        <!-- Begin mobile menu -->
        <mobile-bottom-nav-bar></mobile-bottom-nav-bar>
        <!-- End mobile menu -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import NavBar from "../Shared/NavBar.vue"
    import MainHeader from "../Shared/MainHeader";
    import MobileHeader from "../Shared/MobileHeader";
    import MainContents from "./MainContents";
    import MainFooter from "../../Site/Shared/MainFooter";
    import MobileBottomNavBar from "../../Site/Shared/MobileBottomNavBar";

    export default
    {
        name: 'Home',
        components: { NavBar, MainHeader, MobileHeader, MainContents, MainFooter, MobileBottomNavBar }
    }
</script>

<style scoped lang="scss">
</style>
