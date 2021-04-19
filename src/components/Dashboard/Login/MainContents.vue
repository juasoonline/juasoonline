<template>

    <!-- Begin contents -->
    <main class="container mx-auto my-4">
        <section class="my-40">
                <div class="w-1/4 m-auto justify-center">

                    <!-- Begin login form -->
                    <login-form></login-form>
                    <!-- End login form -->

                </div>
        </section>
    </main>
    <!-- End contents -->

</template>

<script>
    import LoginForm from "./LoginForm";

    export default
    {
        name: "MainContents",
        components: { LoginForm },
    }
</script>

<style scoped>
</style>