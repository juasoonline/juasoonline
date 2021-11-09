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
            <template #default>
                <quick-deals></quick-deals>
            </template>
            <template #fallback>
                <div class="mx-auto text-center">
                    <img class="mx-auto text-center w-20 h-20" src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/loader.gif">
                </div>
            </template>
        </suspense>
        <!-- End quick details -->

        <!-- Begin top rankings -->
        <div class="bg-white rounded my-5 p-5">

            <!-- Begin header -->
            <div class="flex justify-between items-center">
                <div class="font-black text-xl text-gray-700"><router-link to="">Top Rankings</router-link></div>
                <div class="text-xs"><router-link to="">VIEW MORE</router-link></div>
            </div>
            <!-- End header -->

            <!-- Begin items -->
            <div class="flex gap-3 mt-3">
                <div v-for="index in 3" :key="index" class="bg-gray-100 p-2 rounded">

                    <!-- Begin header -->
                    <div class="mb-3 text-lg font-bold">Some category name goes here</div>
                    <!-- End header -->

                    <!-- Begin category items -->
                    <div class="rounded flex grid grid-cols-3 gap-1">
                        <div v-for="index in 3" :key="index" class="card overflow-hidden">

                            <!-- Begin image -->
                            <router-link class="" :to="{ name: 'Item', params: { item: 78236748275482 }}">
                                <img class="object-cover w-full rounded" src="https://juasoonline.nyc3.digitaloceanspaces.com/test/images/products/product14_1.jpg" alt="product">
                            </router-link>
                            <!-- End image -->

                            <!-- Begin price -->
                            <div class="text-center mt-3">
                                <p class="text-xxxs font-bold text-center"><span>GHS 2000.00</span></p>
                            </div>
                            <!-- End price -->

                        </div>
                    </div>
                    <!-- End category items -->

                </div>
            </div>
            <!-- End items -->

        </div>
        <!-- End top rankings -->

        <!-- Begin items -->
        <section class="md:px-1.5 sm:px-1.5 xs:px-1.5 w-full mb-14">

            <!-- Begin title -->
            <div class="text-center my-5 font-black text-3xl text-gray-700">More To Love</div>
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