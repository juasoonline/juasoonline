<template>

    <!-- Begin contents wrapper -->
    <div class="">

        <!-- Begin nav bar -->
        <nav-bar></nav-bar>
        <!-- End nav bar -->

        <!-- Begin logo, search and cart -->
        <main-header class="2xl:sticky 2xl:top-0 2xl:z-40 xl:sticky xl:top-0 xl:z-40 lg:sticky lg:top-0 lg:z-40"></main-header>
        <!-- End logo, search and cart -->

        <!-- Begin main contents -->
        <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden my-4">
            <div class="container mx-auto px-1.5">
                <div class="flex">

                    <!-- Begin left contents -->
                    <div class="w-3/4 mr-5">

                        <!-- Begin shipping information -->
                        <div class="bg-white rounded p-5">
                            <h2 class="font-bold text-lg">Shipping Information</h2>

                            <h4 class="font-bold mt-4">{{ customerData.customer.first_name }} {{ customerData.customer.last_name }}, {{ customerData.customer.mobile_phone }}</h4>
                            <div class="flex items-center justify-between gap-10">
                                <div class="w-3/4">
                                    <p class="text-sm my-0.5">{{ customerData.addresses[0].attributes.street_name }}, {{ customerData.addresses[0].attributes.city }} - {{ customerData.addresses[0].attributes.country }}, </p>
                                    <p class="text-sm">{{ customerData.addresses[0].attributes.city }}. {{ customerData.addresses[0].attributes.postal_code }} </p>
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
                                    <div v-for="option in paymentOptions.paymentOptions" :key="option.attributes.resource_id" class="card bg-white text-center rounded overflow-hidden border p-2 hover:border-red-500 cursor-pointer">
                                        <h4 class="text-sm font-bold">{{ option.attributes.name }}</h4>
                                        <div class="mt-1.5 text-center">
                                            <img class="h-6 mx-auto my-2" :src="option.attributes.logo">
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
                                <p class="text-sm mb-1">Seller: {{ sellerData.seller.name }}</p>

                                <div class="">
                                    <div class="flex border-t border-b border-gray-100 grid grid-cols-12 gap-3 py-3">
                                        <div class="col-span-2">
                                            <div class="justify-center items-center border border-gray-100 rounded">
                                                <img :src="product.product.image" class="rounded border border-gray-300 p-0.5">
                                            </div>
                                        </div>
                                        <div class="col-span-8">
                                            <p class="text-xs">{{ product.product.name }}</p>
                                            <p class="text-xs mt-2 flex items-center">
                                                <strong class="mr-2">Color:</strong> Yellow
                                                <img src="https://assets.juasoonline.com/test/images/products/product14_1.jpg" class="rounded w-5 h-5 ml-2 border border-gray-300">
                                                <strong class="mx-2">Size:</strong> 40
                                            </p>
                                            <p class="text-sm font-bold my-2.5"> {{ product.product.sales_price }}</p>
                                            <p class="text-xs my-2.5">
                                                <strong class="mr-1 text-juaso-secondary">Delivery:</strong> GH 5.11 via Juaso Xpress Delivery. Estimated Delivery Time: 1 - 50 hours
                                            </p>
                                        </div>
                                        <div class="col-span-2">
                                            <div class="custom-number-input mt-12">
                                                <div class="flex flex-row h-10 w-full rounded relative bg-transparent mt-1">
                                                    <button @click="quantityCounter( '-' )" data-action="decrement" class="focus:outline-none border text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer">
                                                        <span class="m-auto text-xl font-thin">−</span>
                                                    </button>
                                                    <input type="text" class="outline-none focus:outline-none text-center w-full bg-white border-t border-b font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" :value="orderData.order.quantity">
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
                                                    <td class="py-1.5 pr-40 text-right">Subtotal</td>
                                                    <td class="py-1.5 text-right"> {{ orderData.order.subtotal }}</td>
                                                </tr>
                                                <tr>
                                                    <td class="py-1.5 pr-40 text-right">Delivery Fee</td>
                                                    <td class="py-1.5 text-right"> {{ orderData.order.delivery_fee }}</td>
                                                </tr>
                                                <tr class="font-bold text-xs">
                                                    <td class="py-1.5 pr-40 text-right">Total</td>
                                                    <td class="py-1.5 text-right"> {{ orderData.order.total }}</td>
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
                                    <p class="text-lg"> {{ orderData.order.total }}</p>
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
        <suspense>
            <main-footer></main-footer>
        </suspense>
        <!-- End footer -->

    </div>
    <!-- End contents wrapper -->

</template>

<script>
    import NavBar from "@/components/Site/Shared/NavBar";
    import MainHeader from "@/components/Site/Shared/MainHeader";
    import MainFooter from "@/components/Site/Shared/MainFooter"
    
    import { inject, onBeforeMount, reactive } from "vue";
    import axios from "axios";
    import { useRoute } from "vue-router";

    export default
    {
        name: "OrderConfirmation",
        components: { NavBar, MainHeader, MainFooter },

        setup()
        {
            const authentication = inject( 'authentication' );
            const route = useRoute()

            const orderData = reactive({ order: [] })
            const customerData = reactive({customer: [], addresses: [], isLoading: false })
            const product = reactive({ product: [], isLoading: false })
            const sellerData = reactive({ seller: [], isLoading: false })
            const paymentOptions = reactive({ paymentOptions: [], isLoading: false })

            onBeforeMount( async () =>
            {
                await getOrder()
                await getProduct()
                await getPaymentOptions()
            })

            // Get order data
            const getOrder = async () =>
            {
                const response = await axios({ method: 'GET', url: 'customers/' + authentication.state.user.resource_id + '/orders/' + route.params.order_id + '?include=customer.addresses', headers: { 'Authorization': 'Bearer ' + authentication.state.token } })
                orderData.order = await response.data.data.attributes;
                customerData.customer = await response.data.data.include.customer.attributes;
                customerData.addresses = await response.data.data.include.customer.include.addresses;
            }

            // Get product data
            const getProduct = async () =>
            {
                const response = await axios({ method: 'GET', url: 'product/' + orderData.order.product_id + '?include=store', headers: {} })
                product.product = await response.data.data.attributes;
                sellerData.product = await response.data.data.include.store.attributes;
            }

            // Get payment options data
            const getPaymentOptions = async () =>
            {
                const response = await axios({ method: 'GET', url: 'payment-methods', headers: {} })
                paymentOptions.paymentOptions = await response.data.data;
            }

            // Quantity count method
            const quantityCounter = ( operator ) =>
            {
                if ( operator === '+' )
                {
                    orderData.order.quantity = orderData.order.quantity +1
                }
                else
                {
                    orderData.order.quantity = orderData.order.quantity -1
                }
            }

            return { authentication, orderData, customerData, product, sellerData, paymentOptions, quantityCounter }
        }
    }
</script>

<style scoped>

</style>