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
        <main-footer></main-footer>
        <!-- End footer -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import TopAds from "@/components/Shared/TopAds";
    import NavBar from "@/components/Shared/NavBar";
    import MainHeader from "@/components/Shared/MainHeader";
    import MainContents from "@/components/Login/MainContents";
    import MainFooter from "@/components/Shared/MainFooter";

    export default
    {
        name: "Item",
        components: { TopAds, NavBar, MainHeader, MainContents, MainFooter }
    }
</script>

<style scoped>
</style>