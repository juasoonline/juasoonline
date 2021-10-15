<template>

    <!-- Begin contents for mobile screens -->
    <section class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block bg-gray-200">
        <div class="mx-2">

            <!-- Begin user welcome -->
            <div class="pt-7 pb-12">
                <h2 class="font-bold text-xl">Welcome! {{ authentication.state.user.name }}</h2>
            </div>
            <!-- Begin user welcome -->

        </div>
    </section>
    <!-- End contents for mobile screens -->

</template>

<script>
    import { inject } from "vue";

    export default
    {
        name: "NavBar",
        setup()
        {
            const authentication = inject( 'authentication' );
            return { authentication }
        }
    }
</script>

<style scoped>
</style>