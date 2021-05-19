<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container md:w-screen sm:w-screen xs:w-screen mx-auto my-4">
        <section class="2xl:my-40 xl:my-40 lg:my-40 md:my-20 sm:my-20 xs:my-20">
            <div class="2xl:w-1/4 xl:w-1/4 lg:w-1/4 m-auto justify-center">
                <div class="md:px-2 sm:px-2 xs:px-2">

                    <!-- Begin logo -->
                    <div class="">
                        <router-link to="/"><img :src="files.logo" class="2xl:w-32 xl:w-32 lg:w-32 md:w-24 sm:w-24 xs:w-24 mx-auto"></router-link>
                    </div>
                    <!-- End logo -->

                    <!-- Begin register form -->
                    <register-form></register-form>
                    <!-- End register form -->

                </div>
            </div>
        </section>
    </main>
    <!-- End contents -->

</template>

<script>
    import RegisterForm from "./RegisterForm";
    import { reactive } from "vue";

    export default
    {
        name: "MainContents",
        components: { RegisterForm },
        setup()
        {
            const files = reactive ({ userIconMale: '../assets/images/user-icon-male.png', logo: '../assets/images/logo.png' })
            return { files }
        }
    }
</script>

<style scoped>
</style>