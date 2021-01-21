<template>

    <!-- Begin contents -->
    <div class="container mx-auto my-4">

        <!-- Begin category and slide contents -->
        <cats-and-adslides></cats-and-adslides>
        <!-- End category and slide contents -->

        <!-- Begin Juasoonline tags -->
        <juaso-tags></juaso-tags>
        <!-- End Juasoonline tags -->

    </div>
    <!-- End contents -->

</template>

<script>
    import CatsAndAdslides from "@/components/Home/CatsAndAdslides";
    import JuasoTags from "@/components/Shared/JuasoTags";

    export default
    {
        name: "MainContents",
        components: { CatsAndAdslides, JuasoTags }
    }
</script>

<style scoped>

</style>