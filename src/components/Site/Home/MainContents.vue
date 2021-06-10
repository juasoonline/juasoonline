<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container md:w-screen sm:w-screen xs:w-screen mx-auto my-4 px-1.5">

        <!-- Begin category and slide contents -->
        <cats-and-ad-slides></cats-and-ad-slides>
        <!-- End category and slide contents -->

        <!-- Begin Juasoonline tags -->
        <juaso-tags></juaso-tags>
        <!-- End Juasoonline tags -->

        <!-- Begin error message -->
        <div v-if="error">{{ error.errors }}</div>
        <!-- End error message -->

        <!-- Begin quick details -->
        <Suspense>
            <template #default>
                <quick-deals></quick-deals>
            </template>
            <template #fallback>
                <div class="mx-auto text-center">
                    <img class="mx-auto text-center w-20 h-20" src="https://assets.juasoonline.com/juasoonline/assets/images/loader.gif">
                </div>
            </template>
        </Suspense>
        <!-- End quick details -->

        <!-- Begin items -->
        <section class="md:px-1.5 sm:px-1.5 xs:px-1.5 w-full mb-14">

            <!-- Begin title -->
            <div class="mx-auto text-center"><h4 class="text-2xl font-bold mt-6 pb-2 md:text-center sm:text-center xs:text-center">Latest items</h4></div>
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
    import QuickDeals from "./QuickDeals";
    import ItemsList from "./ItemsList";

    export default
    {
        name: "MainContents",
        components: { CatsAndAdSlides, JuasoTags, QuickDeals, ItemsList },

    }
</script>

<style scoped>
</style>