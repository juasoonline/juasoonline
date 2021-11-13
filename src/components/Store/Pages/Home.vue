<template>

    <!-- Begin contents wrapper -->
    <div class="">

        <!-- Begin nav bar -->
        <main-header></main-header>
        <!-- End nav bar -->

        <!-- Begin store contents -->
        <premium-contents v-if="store.subscription.subscription === 'Premium'"></premium-contents>
        <standard-contents v-else-if="store.subscription.subscription === 'Standard'"></standard-contents>
        <!-- End store contents -->

        <!-- Begin footer -->
        <suspense><main-footer></main-footer></suspense>
        <!-- End footer -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import { onBeforeMount, reactive } from "vue";
    import { useRoute } from "vue-router";

    import router from "../../../router";
    import axios from "axios";

    import PremiumContents from "../Premium/PremiumContents";
    import StandardContents from "../Standard/StandardContents";

    import MainHeader from "@/components/Site/Shared/MainHeader";
    import MainFooter from "@/components/Site/Shared/MainFooter";

    export default
    {
        name: "Store",
        components: { MainHeader, MainFooter, PremiumContents, StandardContents },
        setup()
        {
            const route = useRoute()

            const store = reactive({ data: [], subscription: [], loaded: false })

            const getStore = async () =>
            {
                try
                {
                    const response = await axios({ method: 'GET', url: 'business/stores/' + route.params.slug + '?include=subscription' })
                    const data = await response.data

                    if ( data.code === 200 && ( data.data.include.subscription.attributes.subscription === 'Premium' || data.data.include.subscription.attributes.subscription === 'Standard' ))
                    {
                        store.data = data.data.attributes
                        store.subscription = data.data.include.subscription.attributes
                        store.loaded = true
                    }
                    else
                    {
                        await router.replace('/404')
                    }
                }
                catch( err )
                {
                    store.loaded = false
                }
            }

            onBeforeMount(async () =>
            {
                await getStore()
            })

            return { store }
        }
    }
</script>

<style scoped>
</style>