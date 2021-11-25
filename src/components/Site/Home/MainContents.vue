<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container md:w-screen sm:w-screen xs:w-screen mx-auto 2xl:my-5  xl:my-5  lg:my-5 my-3">

        <!-- Begin category and slide contents -->
        <cats-and-ad-slides></cats-and-ad-slides>
        <!-- End category and slide contents -->

        <!-- Begin category menu for mobile -->
        <categories-mobile></categories-mobile>
        <!-- End category menu for mobile -->

        <!-- Begin Juasoonline tags -->
        <juaso-tags></juaso-tags>
        <!-- End Juasoonline tags -->

        <!-- Begin special promo -->
        <special-promotion></special-promotion>
        <!-- End special promo -->

        <!-- Begin quick details -->
        <suspense>
            <template #default><flash-deals></flash-deals></template>
            <template #fallback><div class="mx-auto text-center"><img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/others/loader.gif" alt=""></div></template>
        </suspense>
        <!-- End quick details -->

        <!-- Begin new arrivals -->
        <suspense>
            <template #default><new-arrivals></new-arrivals></template>
            <template #fallback><div class="mx-auto text-center"><img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/others/loader.gif" alt=""></div></template>
        </suspense>
        <!-- End new arrivals -->

        <!-- Begin top rankings -->
        <top-rankings></top-rankings>
        <!-- End top rankings -->

        <!-- Begin items -->
        <section class="md:px-1.5 sm:px-1.5 xs:px-1.5 w-full mb-16">

            <!-- Begin items list -->
            <items-list></items-list>
            <!-- End items list -->

        </section>
        <!-- End items -->

    </main>
    <!-- End contents -->

</template>

<script>
    import CatsAndAdSlides from "@/components/Site/Home/CatsAndAdSlides";
    import CategoriesMobile from "./CategoriesMobile";
    import JuasoTags from "@/components/Site/Shared/JuasoTags";
    import SpecialPromotion from "./SpecialPromotion";
    import FlashDeals from "./FlashDeals";
    import NewArrivals from "./NewArrivals";
    import TopRankings from "./TopRankings";
    import ItemsList from "./ItemsList";

    export default
    {
        name: "MainContents",
        components: { CatsAndAdSlides, CategoriesMobile, JuasoTags, SpecialPromotion, FlashDeals, NewArrivals, TopRankings, ItemsList },
    }
</script>

<style scoped>
</style>