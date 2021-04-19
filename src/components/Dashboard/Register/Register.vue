<template>

    <!-- Begin contents wrapper -->
    <div class="bg-gray-50 h-screen">

        <!-- Begin logo, search and cart -->
        <main-header></main-header>
        <!-- End logo, search and cart -->

        <!-- Begin top contents -->
        <main-contents></main-contents>
        <!-- End top contents -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import MainHeader from "./MainHeader";
    import MainContents from "./MainContents";

    export default
    {
        name: "Join",
        components: { MainHeader, MainContents }
    }
</script>

<style scoped>
</style>