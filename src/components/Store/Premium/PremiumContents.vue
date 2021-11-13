<template>

    <!-- Begin contents -->
    <div class="">

        <!-- Begin store stat nav -->
        <stat-bar></stat-bar>
        <!-- Begin store stat nav -->

        <!-- Begin main menu -->
        <main-menu></main-menu>
        <!-- End main menu -->

        <!-- Begin sliders -->
        <banner-sliders></banner-sliders>
        <!-- End sliders -->

        <!-- Begin flash sales contents -->
        <div class=""></div>
        <!-- End flash sales contents -->

        <!-- Begin top sales contents -->
        <div class=""></div>
        <!-- End top sales contents -->

        <!-- Begin items category contents -->
        <div class=""></div>
        <!-- End items category contents -->

    </div>
    <!-- End contents -->

</template>

<script>
    import { onBeforeMount, reactive } from "vue";
    import axios from "axios";

    import StatBar from "./Shared/StatBar";
    import MainMenu from "./Shared/MainMenu";
    import BannerSliders from "./Shared/BannerSliders";

    export default
    {
        name: "PremiumContents",
        components : { StatBar, MainMenu, BannerSliders },
        setup()
        {
            const flashSales = reactive({ items: [], loaded: false })
            const topSales = reactive({ items: [], loaded: false })

            const getStoreFlashSales = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'business/products', headers: {} })
                    const data = await response.data
                    flashSales.items = data.data
                    flashSales.loaded = true
                }
                catch( err )
                {
                    flashSales.loaded = false
                }
            }
            onBeforeMount(async () =>
            {
                await getStoreFlashSales()
            })

            return { flashSales, topSales }
        }
    }
</script>

<style scoped>

</style>