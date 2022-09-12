<template>

    <!-- Begin contents -->
    <div>
        <form v-if="accountData.verification === false" @submit.prevent="resendCode()" class="">
            <div class="mt-6 text-sm bg-white shadow-md p-5 rounded">

                <!-- Begin title -->
                <div class="w-full text-center">
                    <h3 class="font-bold text-lg text-gray-500 uppercase mb-5">Resend Registration Code</h3>
                </div>
                <!-- End title -->

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

                <!-- Begin submit button -->
                <div class="mt-10">
                    <div class="flex mt-3">
                        <button v-if="loader.isLoading === false" type="submit" class="rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                            <span class="uppercase text-xxs">Send New Code</span>
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

                <!-- Begin verify link -->
                <div class="mt-2 text-center text-xs">
                    Already have a code? <span @click="verification()" class="text-juaso-primary hover:text-juaso-secondary cursor-pointer">Verify Here</span>
                </div>
                <!-- End verify link -->

            </div>
        </form>
        <form v-else @submit.prevent="verifyAccount()" class="">
            <div class="mt-6 text-sm bg-white shadow-md p-5 rounded">

                <!-- Begin title -->
                <div class="w-full text-center">
                    <h3 class="font-bold text-lg text-gray-500 uppercase mb-5">Account Verification</h3>
                </div>
                <!-- End title -->

                <!-- Begin verification info -->
                <div class="px-5 mt-2 text-xs text-center">
                    We want to make sure its really you. In order to verify your identity, enter the verification code that was sent to your email
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
                        <button v-if="loader.isLoading === false" type="submit" class="rounded bg-juaso-primary text-white text-xs font-bold px-3 py-3 w-full uppercase focus:outline-none hover:bg-juaso-secondary">
                            <span class="uppercase text-xxs">Verify Account</span>
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
                    You did not get the code? <span @click="verification()" class="text-juaso-primary hover:text-juaso-secondary cursor-pointer">Resend Code</span>
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
            const loader = reactive({ color: '#FFFFFF', size: '18px', loading: true, isLoading: false })
            const accountData = reactive({ first_name: "", last_name: "", mobile_phone: "", email: "", password: "", verification_code: "", verification: false })

            const resendCode = () =>
            {
                loader.isLoading = true
                axios( { method: 'POST', url: 'customers/authentication/code/resend', headers: {}, data: { data: { type: "Customer", attributes: { email: accountData.email } } } })
                    .then( response =>
                    {
                        if ( response.data.code === 201 )
                        {
                            verification()
                            notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Code resent. Check your email for confirmation.</p>', duration: 10000, ripple: false, dismissible: true })
                            loader.isLoading = false
                        }
                        else
                        {
                            loader.isLoading = false;
                            notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                        }
                    })
            }
            const verifyAccount = () =>
            {
                loader.isLoading = true
                axios( { method: 'POST', url: 'customers/authentication/code/verification', headers: {}, data: { data: { type: "Customer", attributes: { email: accountData.email, verification_code: accountData.verification_code } } } })
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
            const verification = () =>
            {
                if ( accountData.verification === false ) { accountData.verification = true }
                else if ( accountData.verification === true ) { accountData.verification = false }
            }

            return { loader, accountData, resendCode, verifyAccount, verification }
        }
    }
</script>

<style scoped>
</style>