<template>

    <!-- Begin contents -->
    <div>
        <form v-if="accountData.verification === false" @submit.prevent="createAccount()" class="">
            <div class="mt-6 text-sm">

                <!-- Begin title -->
                <div class="w-full text-center">
                    <h3 class="font-bold text-lg text-gray-500 uppercase mb-5">Registration</h3>
                </div>
                <!-- End title -->

                <!-- Begin first name -->
                <div class="mt-3">
                    <label class="text-gray-500 text-xs">First Name</label>
                    <div class="flex mt-1">
                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                        <input type="text" v-model="accountData.first_name" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter first name">
                    </div>
                </div>
                <!-- End first name -->

                <!-- Begin last name -->
                <div class="mt-3">
                    <label class="text-gray-500 text-xs">Last Name</label>
                    <div class="flex mt-1">
                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <input type="text" v-model="accountData.last_name" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter last name">
                    </div>
                </div>
                <!-- End last name -->

                <!-- Begin phone number -->
                <div class="mt-3">
                    <label class="text-gray-500 text-xs">Phone Number</label>
                    <div class="flex mt-1">
                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                        </div>
                        <input type="text" v-model="accountData.mobile_phone" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter phone number">
                    </div>
                </div>
                <!-- End phone number -->

                <!-- Begin email -->
                <div class="mt-3">
                    <label class="text-gray-500 text-xs">Email Address</label>
                    <div class="flex mt-1">
                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <input type="email" v-model="accountData.email" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="example@example.com">
                    </div>
                </div>
                <!-- End email -->

                <!-- Begin password -->
                <div class="mt-3">
                    <div class="flex justify-between">
                        <label class="text-gray-500 text-xs">Password</label>
                    </div>
                    <div class="flex mt-1">
                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </div>
                        <input type="password" v-model="accountData.password" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="password">
                    </div>
                </div>
                <!-- End password -->

                <!-- Begin submit button -->
                <div class="mt-10">
                    <div class="flex mt-3">
                        <button type="submit" class="rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                            <span v-if="loader.isLoading === false">Create Account</span>
                            <div v-else class="w-full px-40">
                                <spinner :color="loader.color" :size="loader.size"></spinner>
                            </div>
                        </button>
                    </div>
                </div>
                <!-- End submit button -->

                <!-- Begin register link -->
                <div class="mt-2 text-center text-xs">
                    Already have an account? <router-link to="/login" class="text-juaso-primary hover:text-juaso-secondary">Login Here</router-link>
                </div>
                <!-- End register link -->

                <!-- Begin agreement info -->
                <div class="px-5 mt-2 text-xs text-center">
                    By creating an account, you agree to the <router-link to="" class="text-juaso-primary">Juasoonline.com</router-link> <router-link to="" class="text-juaso-primary">Membership Agreement </router-link> and <router-link to="" class="text-juaso-primary">Privacy Policy</router-link>
                </div>
                <!-- End agreement info -->

            </div>
        </form>
        <form v-else @submit.prevent="verifyAccount()" class="">
            <div class="mt-6 text-sm">

                <!-- Begin title -->
                <div class="w-full text-center">
                    <h3 class="font-bold text-lg text-gray-500 uppercase mb-5">Account Verification</h3>
                </div>
                <!-- End title -->

                <!-- Begin verification info -->
                <div class="px-5 mt-2 text-xs text-center">
                    We want to make sure its really you. In order to further verify your identity, enter the verification code that was sent to <span class="font-bold">{{ accountData.email }}</span>
                </div>
                <!-- End verification info -->

                <!-- Begin verification code -->
                <div class="mt-8">
                    <div class="flex mt-1">
                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </div>
                        <input type="text" v-model="accountData.verification_code" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter verification code">
                    </div>
                </div>
                <!-- End first name -->

                <!-- Begin submit button -->
                <div class="mt-10">
                    <div class="flex mt-3">
                        <button type="submit" class="rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                            <span v-if="loader.isLoading === false">Verify Account</span>
                            <div v-else class="w-full px-40">
                                <spinner :color="loader.color" :size="loader.size"></spinner>
                            </div>
                        </button>
                    </div>
                </div>
                <!-- End submit button -->

                <!-- Begin register link -->
                <div class="mt-2 text-center text-xs">
                    You did not get the code? <router-link to="" class="text-juaso-primary hover:text-juaso-secondary">Resend Code</router-link>
                </div>
                <!-- End register link -->

            </div>
        </form>
    </div>
    <!-- End contents -->

</template>

<script>
    import { Notyf } from 'notyf';
    import { reactive } from 'vue';
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
            const loader = reactive({ color: '#FFFFFF', size: '30px', isLoading: false })
            const accountData = reactive({ first_name: "", last_name: "", mobile_phone: "", email: "", password: "", verification_code: "", verification: false })

            const createAccount = () =>
            {
                loader.isLoading = true
                axios( { method: 'POST', url: 'customers/registration', headers: {}, data: { data: { type: "Customer", attributes: { first_name: accountData.first_name, last_name: accountData.last_name, mobile_phone: accountData.mobile_phone, email: accountData.email, password: accountData.password } } } })
                    .then( response =>
                    {
                        if ( response.data.status === "Success" )
                        {
                            accountData.verification = true
                            notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Account created. Check your email for verification code.</p>', duration: 10000, ripple: false, dismissible: true })
                            loader.isLoading = false
                        }
                        else
                        {
                            loader.isLoading = false;
                            notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                        }
                    })
                    .catch( error =>
                    {
                        console.log( error.response )
                        loader.isLoading = false;
                        notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                    })

            }
            const verifyAccount = () =>
            {
                loader.isLoading = true
                axios( { method: 'POST', url: 'customers/account/verification', headers: {}, data: { data: { type: "Customer", attributes: { email: accountData.email, verification_code: accountData.verification_code } } } })
                    .then( response =>
                    {
                        if ( response.data.status === "Success" )
                        {
                            loader.isLoading = false
                            notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Registration completed.</p>', duration: 10000, ripple: false, dismissible: true })
                            router.replace('/login' )
                        }
                        else
                        {
                            loader.isLoading = false;
                            notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                        }
                    })
                    .catch( error =>
                    {
                        loader.isLoading = false
                        error.response
                    })
            }

            return { loader, accountData, createAccount, verifyAccount }
        }
    }
</script>

<style scoped>
</style>