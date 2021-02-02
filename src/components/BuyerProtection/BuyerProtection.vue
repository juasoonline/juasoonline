<template>

    <!-- Begin contents wrapper -->
    <div class="">

        <!-- Begin top ads -->
        <top-ads></top-ads>
        <!-- End top ads -->

        <!-- Begin navbar -->
        <nav-bar></nav-bar>
        <!-- End navbar -->

        <!-- Begin logo, search and cart -->
        <search-bar></search-bar>
        <!-- End logo, search and cart -->

        <!-- Begin main contents -->
<!--        <main-contents></main-contents>-->
        <!-- End main contents -->

        <!-- Begin footer -->
        <main-footer></main-footer>
        <!-- End footer -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import TopAds from "@/components/Shared/TopAds";
    import NavBar from "@/components/Shared/NavBar";
    import SearchBar from "@/components/Shared/MainHeader";
    import MainFooter from "@/components/Shared/MainFooter";

    export default
    {
        name: 'Home',
        components: { TopAds, NavBar, SearchBar, MainFooter }
    }
</script>

<style scoped lang="scss">
</style>
