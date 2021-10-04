<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container md:w-screen sm:w-screen xs:w-screen mx-auto my-4">
        <section class="2xl:my-40 xl:my-40 lg:my-40 md:my-20 sm:my-20 xs:my-20">
            <div class="2xl:w-1/4 xl:w-1/4 lg:w-1/4 m-auto justify-center">
                <div class="md:px-2 sm:px-2 xs:px-2">

                    <!-- Begin logo -->
                    <div class="">
                        <router-link to="/">
                            <img src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/logo.png" class="2xl:w-32 xl:w-32 lg:w-32 md:w-24 sm:w-24 xs:w-24 mx-auto w-12 h-9.5">
                        </router-link>
                    </div>
                    <!-- End logo -->

                    <!-- Begin login form -->
                    <login-form></login-form>
                    <!-- End login form -->

                </div>
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