<template>

    <!-- Begin contents -->
    <main class="container mx-auto my-4">
        <section class="my-40">
                <div class="w-1/4 m-auto justify-center">

                    <!-- Begin forgot password form -->
                    <forgot-password-form></forgot-password-form>
                    <!-- End forgot password form -->

                </div>
        </section>
    </main>
    <!-- End contents -->

</template>

<script>
    import ForgotPasswordForm from "./ForgotPasswordForm";

    export default
    {
        name: "MainContents",
        components: { ForgotPasswordForm },
    }
</script>

<style scoped>
</style>