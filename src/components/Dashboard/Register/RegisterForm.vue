<template>

    <!-- Begin contents -->
    <form @submit.prevent="signIn" class="">
        <div class="mt-6 text-sm">

            <!-- Begin title -->
            <div class="w-full text-center">
                <h3 class="font-bold text-lg text-gray-500 uppercase mb-5">Registration</h3>
            </div>
            <!-- End title -->

            <!-- Begin email -->
            <div class="mt-2">
                <label class="text-gray-500 text-xs">Email Address</label>
                <div class="flex mt-3">
                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                        <svg class="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <input type="email" v-model="loginData.email" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="example@example.com">
                </div>
            </div>
            <!-- End email -->

            <!-- Begin password -->
            <div class="mt-6">
                <div class="flex justify-between">
                    <label class="text-gray-500 text-xs">Password</label>
                </div>
                <div class="flex mt-3">
                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <input type="password" v-model="loginData.password" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="password">
                </div>
            </div>
            <!-- End password -->

            <!-- Begin password -->
            <div class="mt-6">
                <div class="flex justify-between">
                    <label class="text-gray-500 text-xs">Confirm Password</label>
                </div>
                <div class="flex mt-3">
                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <input type="password" v-model="loginData.password" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Confirm Password">
                </div>
            </div>
            <!-- End password -->

            <!-- Begin submit button -->
            <div class="mt-10">
                <div class="flex mt-3">
                    <button type="submit" class="rounded bg-juaso-primary text-white font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                        <span>Register Now</span>
<!--                        <span v-if="loader.isLoading === false">Login</span>-->
<!--                        <span v-else><moon-loader :loading="loader.loading" :color="loader.color" :size="loader.size"></moon-loader></span>-->
                    </button>
                </div>
            </div>
            <!-- End submit button -->

            <!-- Begin register link -->
            <div class="mt-2 text-center text-xs">
                Already have an account? <router-link to="/login" class="text-juaso-primary hover:text-juaso-secondary">Login Here</router-link>
            </div>
            <!-- End register link -->

        </div>
    </form>
    <!-- End contents -->

</template>

<script>
    import { reactive } from 'vue';
    export default
    {
        name: "LoginForm",
        setup()
        {
            const loginData = reactive({ email: "", password: "" })

            const signIn = () =>
            {}

            return { loginData, signIn }
        }
    }
</script>

<style scoped>
</style>