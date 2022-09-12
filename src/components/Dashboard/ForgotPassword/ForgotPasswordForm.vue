<template>

    <!-- Begin code confirmation -->
    <form v-if="data.step_1 === true" @submit.prevent="verifyCode()" class="">
        <div class="mt-6 text-sm bg-white shadow-md p-5 rounded">

            <!-- Begin title -->
            <div class="w-full text-center">
                <h3 class="font-bold text-lg text-gray-500 uppercase mb-5">Account Verification</h3>
            </div>
            <!-- End title -->

            <!-- Begin verification info -->
            <div class="px-5 mt-2 text-xs text-center">
                We want to make sure its really you. In order to further verify your identity, enter the verification code that was sent to <span class="font-bold">{{ data.email }}</span>
            </div>
            <!-- End verification info -->

            <!-- Begin verification code -->
            <div class="mt-8">
                <div class="flex mt-1">
                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <input type="text" v-model="data.verification_code" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter verification code">
                </div>
            </div>
            <!-- End first name -->

            <!-- Begin submit button -->
            <div class="mt-10">
                <div class="flex mt-3">
                    <button v-if="loader.isLoading === false" type="submit" class="rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                        <span class="uppercase text-xxs">Verify Code</span>
                    </button>
                    <button v-else disabled type="submit" class="flex items-center rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                        <span class="flex w-full items-center">
                            <p class="uppercase text-xxs w-full">Please wait...</p>
                            <spinner :loading="loader.loading" :color="loader.color" :size="loader.size" style="margin-left: -130px"></spinner>
                        </span>
                    </button>
                </div>
            </div>
            <!-- End submit button -->

        </div>
    </form>
    <!-- End code confirmation -->

    <!-- Begin change password -->
    <form v-else-if="data.step_2 === true" @submit.prevent="resetPassword()" class="">
        <div class="mt-6 text-sm bg-white shadow-md p-5 rounded">

            <!-- Begin title -->
            <div class="w-full text-center">
                <h3 class="font-bold text-lg text-gray-500 uppercase mb-5">Change Password</h3>
            </div>
            <!-- End title -->

            <!-- Begin password -->
            <div class="mt-6">
                <div class="flex justify-between">
                    <label class="text-gray-500 text-xs">New Password</label>
                </div>
                <div class="flex my-3">
                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <input type="password" v-model="data.password" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Password">
                </div>
            </div>
            <!-- End password -->

            <!-- Begin password confirmation -->
            <div class="mt-6">
                <div class="flex justify-between">
                    <label class="text-gray-500 text-xs">Confirmation New Password</label>
                </div>
                <div class="flex my-3">
                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <input type="password" v-model="data.password_confirmation" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Password Confirmation">
                </div>
            </div>
            <!-- End password confirmation -->

            <!-- Begin submit button -->
            <div class="mt-10">
                <div class="flex mt-3">
                    <button v-if="loader.isLoading === false" type="submit" class="rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                        <span class="uppercase text-xxs">RESET PASSWORD</span>
                    </button>
                    <button v-else disabled type="submit" class="flex items-center rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                        <span class="flex w-full items-center">
                            <p class="uppercase text-xxs w-full">Please wait...</p>
                            <spinner :loading="loader.loading" :color="loader.color" :size="loader.size" style="margin-left: -130px"></spinner>
                        </span>
                    </button>
                </div>
            </div>
            <!-- End submit button -->

        </div>
    </form>
    <!-- End change password -->

    <!-- Begin confirmation -->
    <div v-else-if="data.step_3 === true">
        <form @submit.prevent="signIn" class="">
            <div class="mt-6 text-sm bg-white shadow-md p-5 rounded">

                <!-- Begin title -->
                <div class="w-full text-center">
                    <h3 class="font-bold text-lg text-gray-500 uppercase mb-5">Sign In</h3>
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
                    <div class="flex my-3">
                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </div>
                        <input type="password" v-model="loginData.password" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="password">
                    </div>
                    <p class="text-right"><router-link class="text-xs hover:text-juaso-secondary" to="/forgot-password">Forgot your password?</router-link></p>
                </div>
                <!-- End password -->

                <!-- Begin submit button -->
                <div class="mt-5">
                    <div class="flex mt-3">
                        <button v-if="loader.isLoading === false" type="submit" class="rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                            <span class="uppercase text-xxs">Login</span>
                        </button>
                        <button v-else disabled type="submit" class="flex items-center rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                        <span class="flex w-full items-center">
                            <p class="uppercase text-xxs w-full">Please wait...</p>
                            <spinner :loading="loader.loading" :color="loader.color" :size="loader.size" style="margin-left: -130px"></spinner>
                        </span>
                        </button>
                    </div>
                </div>
                <!-- End submit button -->

                <!-- Begin register link -->
                <div class="mt-2 text-center text-xs">
                    Don't have an account yet? <router-link to="/register" class="text-juaso-primary hover:text-juaso-secondary">Register Here</router-link>
                </div>
                <!-- End register link -->

            </div>
        </form>
    </div>
    <!-- End confirmation -->

    <!-- Begin email form -->
    <form v-else @submit.prevent="verifyEmail()" class="">
        <div class="mt-6 text-sm bg-white shadow-md p-5 rounded">

            <!-- Begin title -->
            <div class="w-full text-center">
                <h3 class="font-bold text-lg text-gray-500 uppercase mb-5">Forgot Password</h3>
            </div>
            <!-- End title -->

            <!-- Begin forgot password info -->
            <div class="px-5 mt-2 text-xs text-center">
                Please enter the login email of the account to retrieve your password
            </div>
            <!-- End forgot password info -->

            <!-- Begin email -->
            <div class="mt-2">
                <label class="text-gray-500 text-xs">Email Address</label>
                <div class="flex mt-3">
                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                        <svg class="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <input type="email" v-model="data.email" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="example@example.com">
                </div>
            </div>
            <!-- End email -->

            <!-- Begin submit button -->
            <div class="mt-10">
                <div class="flex mt-3">
                    <button v-if="loader.isLoading === false" type="submit" class="rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                        <span class="uppercase text-xxs">REQUEST NEW PASSWORD</span>
                    </button>
                    <button v-else disabled type="submit" class="flex items-center rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                        <span class="flex w-full items-center">
                            <p class="uppercase text-xxs w-full">Please wait...</p>
                            <spinner :loading="loader.loading" :color="loader.color" :size="loader.size" style="margin-left: -130px"></spinner>
                        </span>
                    </button>
                </div>
            </div>
            <!-- End submit button -->

            <!-- Begin register link -->
            <div class="mt-2 text-center text-xs">
                Remember password? <router-link to="/login" class="text-juaso-primary hover:text-juaso-secondary">Login Here</router-link>
            </div>
            <!-- End register link -->

        </div>
    </form>
    <!-- End email form -->

</template>

<script>
    import { Notyf } from 'notyf';
    import { inject, onBeforeMount, reactive } from 'vue';
    import Spinner from 'vue-spinner/src/MoonLoader.vue'
    import axios from "axios";
    import router from "@/router";

    export default
    {
        name: "LoginForm",
        components: { Spinner },

        setup()
        {
            const notification = new Notyf();
            const authentication = inject( 'authentication' );

            const loader = reactive({ color: '#FFFFFF', size: '18px', loading: true, isLoading: false })
            const data = reactive({ email: "", verification_code: "", password: "", password_confirmation: "", step_1: false, step_2: false, step_3: false })
            const loginData = reactive({ email: "", password: "" })

            const verifyEmail = () =>
            {
                loader.isLoading = true;
                axios( { method: 'POST', url: 'customers/authentication/password/reset/email/verification', headers: {}, data: { data: { type: "Customer", attributes: { email: data.email } } } })
                    .then( response =>
                    {
                        if ( response.data.code === 200 )
                        {
                            notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Code resent. Check your email for confirmation.</p>', duration: 10000, ripple: false, dismissible: true })

                            localStorage.setItem( "pwrs_stp_1", "01.002.111" )
                            setActiveStep()

                            loader.isLoading = false
                        }
                        else
                        {
                            loader.isLoading = false;
                            notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                        }
                    })
            }
            const verifyCode = () =>
            {
                loader.isLoading = true;
                axios( { method: 'POST', url: 'customers/authentication/password/reset/code/verification', headers: {}, data: { data: { type: "Customer", attributes: { email: data.email, verification_code: data.verification_code } } } })
                    .then( response =>
                    {
                        if ( response.data.code === 200 )
                        {
                            notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Code resent. Check your email for confirmation.</p>', duration: 10000, ripple: false, dismissible: true })

                            localStorage.setItem( "pwrs_stp_1", "01.002.000" );
                            localStorage.setItem( "pwrs_stp_2", "01.002.111" )
                            setActiveStep()

                            loader.isLoading = false
                        }
                        else
                        {
                            loader.isLoading = false;
                            notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                        }
                    })
            }
            const resetPassword = () =>
            {
                loader.isLoading = true;
                axios( { method: 'POST', url: 'customers/authentication/password/reset', headers: {}, data: { data: { type: "Customer", attributes: { email: data.email, password: data.password, password_confirmation: data.password_confirmation } } } })
                    .then( response =>
                    {
                        if ( response.data.code === 200 )
                        {
                            notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Code resent. Check your email for confirmation.</p>', duration: 10000, ripple: false, dismissible: true })

                            localStorage.setItem( "pwrs_stp_2", "01.002.000" )
                            localStorage.setItem( "pwrs_stp_3", "01.002.111" )
                            setActiveStep()

                            loader.isLoading = false
                            notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Password reset, please keep in mind your new password</p>', duration: 10000, ripple: false, dismissible: true })
                        }
                        else
                        {
                            loader.isLoading = false;
                            notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                        }
                    })
            }

            const setActiveStep = () =>
            {
                if ( localStorage.getItem( 'pwrs_stp_1' ) === "01.002.111" ) { data.step_1 = true; data.step_2 = false; data.step_3 = false;  }
                else if ( localStorage.getItem( 'pwrs_stp_2' ) === "01.002.111" ) { data.step_2 = true; data.step_3 = false; data.step_1 = false; }
                else if ( localStorage.getItem( 'pwrs_stp_3' ) === "01.002.111" ) { data.step_3 = true; data.step_1 = false; data.step_2 = false; }
            }
            const signIn = () =>
            {
                loader.isLoading = true
                authentication.loginUser( loginData )
                    .then(() =>
                    {
                        router.replace('/')
                        localStorage.removeItem( "pwrs_stp_1" )
                        localStorage.removeItem( "pwrs_stp_2" )
                        localStorage.removeItem( "pwrs_stp_3" )
                    })
                    .catch(() => { loader.isLoading = false; notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Email or password is incorrect</p>', duration: 8000, ripple: false, dismissible: true }) })
            }

            onBeforeMount(() =>
            {
                setActiveStep()
            })

            return { notification, loader, data, authentication, loginData, verifyEmail, verifyCode, resetPassword, signIn }
        }
    }
</script>

<style scoped>
</style>
