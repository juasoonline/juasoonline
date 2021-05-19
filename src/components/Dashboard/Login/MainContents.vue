<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container md:w-screen sm:w-screen xs:w-screen mx-auto my-4">
        <section class="2xl:my-40 xl:my-40 lg:my-40 md:my-20 sm:my-20 xs:my-20">
            <div class="2xl:w-1/4 xl:w-1/4 lg:w-1/4 m-auto justify-center">
                <div class="md:px-1.5 sm:px-1.5 xs:px-1.5">

                    <!-- Begin logo -->
                    <div class="">
                        <img :src="files.logo" class="2xl:w-28 xl:w-28 lg:w-28 md:w-20 sm:w-20 xs:w-20 mx-auto">
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
    import { reactive } from "vue";

    export default
    {
        name: "MainContents",
        components: { LoginForm },

        setup()
        {
            const files = reactive ({ userIconMale: '../assets/images/user-icon-male.png', logo: '../assets/images/logo.png' })
            return { files }
        }
    }
</script>

<style scoped>
</style>