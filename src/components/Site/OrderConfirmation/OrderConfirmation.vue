<template>

    <!-- Begin contents wrapper -->
    <div class="">

        <!-- Begin top nav -->
        <div class="flex bg-juaso-primary 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
            <div class="2xl:w-2/3 xl:w-4/5 lg:w-4/5 mx-auto px-1.5">
                <div class="flex justify-between">

                    <!-- Begin left menu -->
                    <nav class="py-3">
                        <ul class="flex items-center">
                            <li class="topNave mr-4">
                                <router-link class="navLink" to="/help">
                                    <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span class="">Help</span>
                                </router-link>
                            </li>
                            <li class="topNave mr-4">
                                <router-link class="navLink" to="/buyer-protection">
                                    <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
                                    <span class="">Buyer Protection</span>
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                    <!-- End left menu -->

                    <!-- Begin right menu -->
                    <nav class="py-3">
                        <ul class="flex items-center">
                            <li class="topNave mr-3">
                                <router-link class="navLink" to="/">
                                    <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                    <span class="">Sell on Juasoonline</span>
                                </router-link>
                            </li>
                            <li class="topNave">
                                <router-link class="navLink" to="/">
                                    <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                    <span class="">Download App</span>
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                    <!-- End right menu -->

                </div>
            </div>
        </div>
        <!-- End top nav -->

        <!-- Begin logo --->
        <div class="bg-white 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden shadow-sm">
            <div class="2xl:w-2/3 xl:w-4/5 lg:w-4/5 mx-auto px-1.5">
                <div class="py-3">
                    <router-link to="/" class="p-0 flex w-auto">
                        <img src="https://assets.juasoonline.com/juasoonline/assets/images/logo.png" alt="" class="w-28 h-8">
                    </router-link>
                </div>
            </div>
        </div>
        <!-- End logo --->

        <!-- Begin main contents -->
        <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden my-4">
            <div class="2xl:w-2/3 xl:w-4/5 lg:w-4/5 mx-auto px-1.5">
                <div class="flex">

                    <!-- Begin left contents -->
                    <div class="w-3/4 mr-5">

                        <!-- Begin shipping information -->
                        <div class="bg-white rounded p-5">
                            <h2 class="font-bold text-lg">Shipping Information</h2>

                            <h4 class="font-bold mt-4">Michael Kabutey, +233 244637602</h4>
                            <div class="flex items-center justify-between gap-10">
                                <div class="w-3/4">
                                    <p class="text-sm">#1, Liman Street, Ambassadorial Enclave, East Legon, Accra - Ghana Accra, Lakeside Ashaley Botwe, Ghana, 23321</p>
                                </div>
                                <div class="w-1/4 text-right font-bold text-xs text-juaso-secondary">
                                    <p class="cursor-pointer mb-2">+ Add new address</p>
                                    <p class="cursor-pointer">Select other addresses</p>
                                </div>
                            </div>
                        </div>
                        <!-- End shipping information -->

                        <!-- Begin payment methods -->
                        <div class="bg-white rounded p-5 mt-4">
                            <h2 class="font-bold text-lg">Payment Methods</h2>

                            <div class="mt-4">
                                <div class="flex grid grid-cols-5 gap-5">
                                    <div class="card bg-white rounded overflow-hidden border p-2 hover:border-red-500 cursor-pointer">
                                        <h4 class="text-sm font-bold">MTN Momo</h4>
                                        <div class="flex items-center mt-1.5">
                                            <img class="h-6 mr-1.5 border p-1 rounded" src="https://assets.juasoonline.com/juasoonline/assets/images/payments/mtn-momo.png">
                                            <p class="text-xxs">Pay with MTN Mobile Money</p>
                                        </div>
                                    </div>
                                    <div class="card bg-white rounded overflow-hidden border p-2 hover:border-red-500 cursor-pointer">
                                        <h4 class="text-sm font-bold">Visa</h4>
                                        <div class="flex items-center mt-1.5">
                                            <img class="h-6 mr-1.5 border p-1 rounded" src="https://assets.juasoonline.com/juasoonline/assets/images/payments/visa.png">
                                            <p class="text-xxs">Pay with Visa Card</p>
                                        </div>
                                    </div>
                                    <div class="card bg-white rounded overflow-hidden border p-2 hover:border-red-500 cursor-pointer">
                                        <h4 class="text-sm font-bold">MasterCard</h4>
                                        <div class="flex items-center mt-1.5">
                                            <img class="h-6 mr-1.5 border p-1 rounded" src="https://assets.juasoonline.com/juasoonline/assets/images/payments/mastercard.png">
                                            <p class="text-xxs">Pay with Master Card</p>
                                        </div>
                                    </div>
                                    <div class="card bg-white rounded overflow-hidden border p-2 hover:border-red-500 cursor-pointer">
                                        <h4 class="text-sm font-bold">Vodafone Cash</h4>
                                        <div class="flex items-center mt-1.5">
                                            <img class="h-6 mr-1.5 border p-1 rounded" src="https://assets.juasoonline.com/juasoonline/assets/images/payments/vodafonecash.png">
                                            <p class="text-xxs">Pay with Vodafone Cash</p>
                                        </div>
                                    </div>
                                    <div class="card bg-white rounded overflow-hidden border p-2 hover:border-red-500 cursor-pointer">
                                        <h4 class="text-sm font-bold">AirtelTigo Money</h4>
                                        <div class="flex items-center mt-1.5">
                                            <img class="h-6 mr-1.5 border p-1 rounded" src="https://assets.juasoonline.com/juasoonline/assets/images/payments/airteltigo.jpeg">
                                            <p class="text-xxs">Pay with AirtelTigo Money</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End payment methods -->

                        <!-- Begin order review -->
                        <div class="bg-white rounded p-5 mt-4">
                            <h2 class="font-bold text-lg">Order Review</h2>

                            <div class="mt-4">
                                <p class="text-sm mb-1">Seller: Test Store 1 Ghana Limited</p>

                                <div class="">
                                    <div class="flex border-t border-b border-gray-100 grid grid-cols-12 gap-3 py-3">
                                        <div class="col-span-2">
                                            <div class="justify-center items-center border border-gray-100 rounded">
                                                <img src="https://assets.juasoonline.com/test/images/products/product14_1.jpg" class="rounded border border-gray-300 p-0.5">
                                            </div>
                                        </div>
                                        <div class="col-span-8">
                                            <p class="text-xs">Minglu Spring Mens Shirts Luxury Flower Printing Long Sleeve Casual Mens Dress Shirts Fashion Slim Fit Party Male Shirts</p>
                                            <p class="text-xs mt-2 flex items-center"><strong class="mr-2">Color:</strong> Yellow <img src="https://assets.juasoonline.com/test/images/products/product14_1.jpg" class="rounded w-4 h-4 ml-2 border border-gray-300"> <strong class="mx-2">Size:</strong> 40</p>
                                            <p class="text-sm font-bold my-2.5">GHS 240.00</p>
                                            <p class="text-xs my-2.5"><strong class="mr-1 text-juaso-secondary">Shipping:</strong> GH 5.11 via AliExpress Standard Shipping Estimated Delivery Time: 32-50 hours</p>
                                        </div>
                                        <div class="col-span-2">
                                            <div class="custom-number-input mt-12">
                                                <div class="flex flex-row h-10 w-full rounded relative bg-transparent mt-1">
                                                    <button @click="quantityCounter( '-' )" data-action="decrement" class="focus:outline-none border text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer">
                                                        <span class="m-auto text-xl font-thin">−</span>
                                                    </button>
                                                    <input type="text" class="outline-none focus:outline-none text-center w-full bg-white border-t border-b font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" :value="1">
                                                    <button @click="quantityCounter( '+' )" data-action="increment" class="focus:outline-none border text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer">
                                                        <span class="m-auto text-xl font-thin">+</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="text-xxs flex justify-end">
                                        <table class="mt-4">
                                            <tbody>
                                                <tr>
                                                    <td class="py-1.5 pr-40">Subtotal</td>
                                                    <td class="py-1.5 text-right">GHS 858.00</td>
                                                </tr>
                                                <tr>
                                                    <td class="py-1.5 pr-40">Shipping</td>
                                                    <td class="py-1.5 text-right">GHS 112</td>
                                                </tr>
                                                <tr class="font-bold text-xs">
                                                    <td class="py-1.5 pr-40">Total</td>
                                                    <td class="py-1.5 text-right">GHS 1,280</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End order review -->

                    </div>
                    <!-- End left contents -->

                    <!-- Begin right contents -->
                    <div class="w-1/4">
                        <div class="sticky inset-x-0 top-5 left-0">

                            <!-- Begin order button -->
                            <div class="bg-white rounded p-5">
                                <h2 class="text-lg font-bold">Order Summary</h2>

                                <!-- Begin selected coupon -->
                                <div class="flex justify-between items-center font-bold mt-4 py-3">
                                    <p class="text-xs">Select Coupon</p>
                                    <p class="text-xs"></p>
                                </div>
                                <!-- End selected coupon -->

                                <!-- Begin juasoonline coupon -->
                                <div class="flex justify-between items-center font-bold">
                                    <p class="text-xs">Juaso Coupon</p>
                                    <p class="text-xs"></p>
                                </div>
                                <!-- End juasoonline coupon -->

                                <!-- Begin promo code form -->
                                <div class="my-3">
                                    <p class="text-xs font-bold mb-1">Promo Code</p>
                                    <div class="flex justify-between items-center font-bold">
                                        <div class="mr-1">
                                            <input type="text" class="outline-none focus:outline-none py-0.5 text-center w-full bg-white rounded border font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number">
                                        </div>
                                        <div>
                                            <button type="button" class="focus:outline-none py-1 px-3 border border-transparent rounded text-sm text-white bg-red-500 hover:bg-red-400 w-full ">Apply</button>
                                        </div>
                                    </div>
                                </div>
                                <!-- End promo code form -->

                                <!-- Begin total price -->
                                <div class="flex justify-between items-center font-bold border-t mt-5 py-3">
                                    <p class="text-sm">Total</p>
                                    <p class="text-lg">GHS 500.00</p>
                                </div>
                                <!-- End total price -->

                                <!-- Begin order button -->
                                <div class="py-3">
                                    <button type="button" class="focus:outline-none py-2 border border-transparent rounded shadow-sm text-sm 2xl:font-bold text-white bg-red-500 hover:bg-red-400 w-full">Place Order</button>
                                </div>
                                <!-- End order button -->

                            </div>
                            <!-- Begin order button -->

                            <!-- Begin user policy -->
                            <div class="py-3 text-xxs">
                                <p>Upon clicking "Place Order", I confirm I have read and acknowledge all <router-link to="/" target="_blank" class="text-juaso-primary hover:text-juaso-secondary">terms and policies</router-link>.</p>
                            </div>
                            <!-- End user policy -->

                        </div>
                    </div>
                    <!-- End right contents -->

                </div>
            </div>
        </div>
        <!-- End main contents -->

        <!-- Begin footer -->
        <half-footer></half-footer>
        <!-- End footer -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import HalfFooter from "../Shared/HalfFooter";

    export default
    {
        name: "OrderConfirmation",
        components: { HalfFooter },

        setup()
        {
            const quantityCounter = ( operator ) =>
            {
                console.log( operator )
                // if ( operator === '+' ){ orderData.quantity = orderData.quantity +1 }
                // else { orderData.quantity = orderData.quantity -1 }
            }
            return { quantityCounter }
        }
    }
</script>

<style scoped>

</style>