<template>

    <!-- Begin contents -->
    <main class="container mx-auto my-4">
        <section class="my-40">
                <div class="w-1/4 m-auto justify-center">

                    <!-- Begin register form -->
                    <register-form></register-form>
                    <!-- End register form -->

                </div>
        </section>
    </main>
    <!-- End contents -->

</template>

<script>
    import RegisterForm from "./RegisterForm";

    export default
    {
        name: "MainContents",
        components: { RegisterForm },
    }
</script>

<style scoped>
</style>