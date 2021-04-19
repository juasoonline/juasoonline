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
    import TopAds from "@/components/Site/Shared/TopAds";
    import NavBar from "@/components/Site/Shared/NavBar";
    import SearchBar from "@/components/Site/Shared/MainHeader";
    import MainContents from "@/components/Site/Home/MainContents";
    import MainFooter from "@/components/Site/Shared/MainFooter";

    export default
    {
        name: 'Home',
        components: { TopAds, NavBar, SearchBar, MainContents, MainFooter }
    }
</script>

<style scoped lang="scss">
</style>
