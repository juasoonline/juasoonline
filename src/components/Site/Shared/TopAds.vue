<template>

    <!-- Begin contents -->
    <div class="flex">
        <div class="2xl:container xl:container lg:container md:px-1.5 sm:px-1.5 xs:px-1.5 md:bg-juaso-extra sm:bg-juaso-extra xs:bg-juaso-extra w-full">

            <!-- Begin ad banner -->
            <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden mx-auto w-screen">
                <router-link to="" class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden" >
                    <img src="https://ae01.alicdn.com/kf/Sebe1e13a68ce4cf69143eb1a0e592a14W.jpg_Q90.jpg_.webp"  alt=""/>
                    <!-- <img :src="banners.banners.image"  alt=""/> -->
                </router-link>
            </div>
            <!-- Begin ad banner -->

        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    import { onBeforeMount, reactive } from "vue";
    import axios from "axios";

    export default
    {
        name: "TopAds",

        setup()
        {
            const banners = reactive({ banners: [], loaded: false })

            onBeforeMount( async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'juaso/banners' })
                    const data = await response.data
                    banners.banners = data.data[0].attributes
                    banners.loaded = true
                }
                catch( err )
                {
                    banners.loaded = false
                }
            })

            return { banners }
        }
    }
</script>

<style scoped>
</style>