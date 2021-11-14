<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container md:w-screen sm:w-screen xs:w-screen mx-auto my-5 px-1.5">

        <!-- Begin category and slide contents -->
        <cats-and-ad-slides></cats-and-ad-slides>
        <!-- End category and slide contents -->

        <!-- Begin Juasoonline tags -->
        <juaso-tags></juaso-tags>
        <!-- End Juasoonline tags -->

        <!-- Begin special promo -->
        <!-- End special promo -->

        <!-- Begin quick details -->
        <suspense>
            <template #default><flash-deals></flash-deals></template>
            <template #fallback><div class="mx-auto text-center"><img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/loader.gif" alt=""></div></template>
        </suspense>
        <!-- End quick details -->

        <!-- Begin new arrivals -->
        <suspense>
            <template #default><new-arrivals></new-arrivals></template>
            <template #fallback><div class="mx-auto text-center"><img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/loader.gif" alt=""></div></template>
        </suspense>
        <!-- End new arrivals -->

        <!-- Begin top rankings -->
        <top-rankings></top-rankings>
        <!-- End top rankings -->

        <!-- Begin items -->
        <section class="md:px-1.5 sm:px-1.5 xs:px-1.5 w-full mb-14">

            <!-- Begin title -->
            <div class="mb-3 font-black text-xl text-gray-700">Recommendations For You</div>
            <!-- End title -->

            <!-- Begin items list -->
            <items-list></items-list>
            <!-- End items list -->

            <!-- Begin load more button -->
            <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden my-10 justify-center">
<!--                <button class="inline-block mr-1 px-7 py-2 text-xs font-medium leading-4 text-center text-white transition bg-red-500 rounded shadow ripple hover:bg-red-600 mx-auto">Load more</button>-->
            </div>
            <!-- End load more button -->

        </section>
        <!-- End items -->

    </main>
    <!-- End contents -->

</template>

<script>
    import CatsAndAdSlides from "@/components/Site/Home/CatsAndAdSlides";
    import JuasoTags from "@/components/Site/Shared/JuasoTags";
    import FlashDeals from "./FlashDeals";
    import NewArrivals from "./NewArrivals";
    import TopRankings from "./TopRankings";
    import ItemsList from "./ItemsList";

    export default
    {
        name: "MainContents",
        components: { CatsAndAdSlides, JuasoTags, FlashDeals, NewArrivals, TopRankings, ItemsList },
    }
</script>

<style scoped>
</style>