<template>

    <!-- Begin contents wrapper -->
    <div class="">

        <!-- Begin navbar -->
        <nav-bar></nav-bar>
        <!-- End navbar -->

        <!-- Begin logo, search and cart -->
        <main-header></main-header>
        <!-- End logo, search and cart -->

        <!-- Begin main nav -->
        <main-nav-bar></main-nav-bar>
        <!-- End main nav -->

        <!-- Begin top contents -->
        <main-contents></main-contents>
        <!-- End top contents -->

        <!-- Begin footer -->
        <main-footer></main-footer>
        <!-- End footer -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import NavBar from "../Shared/NavBar";
    import MainHeader from "../Shared/MainHeader";
    import MainNavBar from "../Shared/MainNavBar";
    import MainContents from "./MainContents";
    import MainFooter from "../Shared/MainFooter";

    export default
    {
        name: 'Coupons',
        components: { NavBar, MainHeader, MainNavBar, MainContents, MainFooter }
    }
</script>

<style scoped lang="scss">
</style>
