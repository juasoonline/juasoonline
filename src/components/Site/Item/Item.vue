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
        <main-header class="sticky top-0 z-40"></main-header>
        <!-- End logo, search and cart -->

        <!-- Begin top contents -->
        <main-contents></main-contents>
        <!-- End top contents -->

        <!-- Begin footer -->
        <suspense><main-footer></main-footer></suspense>
        <!-- End footer -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import TopAds from "@/components/Site/Shared/TopAds";
    import NavBar from "@/components/Site/Shared/NavBar";
    import MainHeader from "@/components/Site/Shared/MainHeader";
    import MainContents from "@/components/Site/Item/MainContents";
    import MainFooter from "@/components/Site/Shared/MainFooter";

    export default
    {
        name: "Item",
        components: { TopAds, NavBar, MainHeader, MainContents, MainFooter }
    }
</script>

<style scoped>
</style>