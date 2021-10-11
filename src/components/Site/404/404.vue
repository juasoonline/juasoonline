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
        <main-header></main-header>
        <!-- End logo, search and cart -->

        <!-- Begin top contents -->
        <main-contents></main-contents>
        <!-- End top contents -->

        <!-- Begin footer -->
        <suspense>
            <main-footer></main-footer>
        </suspense>
        <!-- End footer -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import TopAds from "@/components/Site/Shared/TopAds";
    import NavBar from "@/components/Site/Shared/NavBar";
    import MainHeader from "@/components/Site/Shared/MainHeader";
    import MainContents from "@/components/Site/404/MainContents";
    import MainFooter from "@/components/Site/Shared/MainFooter";

    export default
    {
        name: 'Home',
        components: { TopAds, NavBar, MainHeader, MainContents, MainFooter }
    }
</script>

<style scoped lang="scss">

</style>