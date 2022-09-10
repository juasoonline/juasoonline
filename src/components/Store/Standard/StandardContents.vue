<template>

    <!-- Begin contents -->
    <div class="">

        <!-- Begin banner -->
        <div>

        </div>
        <!-- End banner -->

        <!-- Begin store stat nav -->
        <stat-bar></stat-bar>
        <!-- Begin store stat nav -->

        <!-- Begin main menu -->
        <main-menu></main-menu>
        <!-- End main menu -->

        <!-- Begin main contents -->
        <main class="h-screen"></main>
        <!-- End main contents -->

    </div>
    <!-- End contents -->

</template>

<script>
    import { onBeforeMount } from "vue";
    import StatBar from "./Shared/StatBar";
    import MainMenu from "../Standard/Shared/MainMenu";

    export default
    {
        name: "StandardContents",
        components : { StatBar, MainMenu },
        setup()
        {
            onBeforeMount(async () =>
            {
            })

            return {  }
        }
    }
</script>

<style scoped>

</style>