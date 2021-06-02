<template>

    <!-- Begin route contents -->
    <router-view :key="$route.fullPath"></router-view>
    <!-- End route contents -->

</template>

<script>
    import { provide } from 'vue'
    import authentication from './store/authentication'

    export default
    {
        setup()
        {
            provide( 'authentication', authentication )
        }
    };
</script>

<style lang="scss">
</style>
