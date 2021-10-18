<template>

    <!-- Begin contents -->
    <main class="">

        <!-- Begin item contents -->
        <section class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden bg-white rounded">
            <div class="2xl:container xl:container lg:container px-1.5 mx-auto">
                <div class="flex grid grid-cols-12 gap-2 py-5">

                    <!-- Begin item images -->
                    <div class="col-span-4 py-4">
                        <div class="sticky inset-x-0 top-20 left-0">
                            <div class="justify-center items-center border border-gray-100 rounded mb-2">
                                <img :src="product.currentImage" alt="" class="rounded cursor-pointer">
                            </div>
                            <div class="flex justify-center items-center">
                                <a v-for="image in images.images" :key="image.attributes.resource_id" href="#" class="">
                                    <img @mouseover="changeImage( image.attributes.image )" :src="image.attributes.image" alt="" class="rounded w-12 h-12 mx-1 border border-gray-300 p-0.5 hover:border-red-500">
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- End item images -->

                    <!-- Begin item info -->
                    <div class="col-span-6 p-4">

                        <!-- Begin item name -->
                        <div class="text-xl text-gray-600 pb-3">
                            <h2 class="text-lg font-light leading-6 mb-3">{{ product.item.name }}</h2>
                            <div class="text-xs font-light mt-1 flex items-center">
                                <span class="mr-4 hover:text-red-500"><router-link :to="{ name: 'Store', params: { store: store.store.resource_id }}" class="inline-flex py-0.5 px-5 font-bold items-center border rounded text-xxxs text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">All Product {{ store.store.doing_business_as }}</router-link></span>
                                <span class="mr-4 font-bold border-r pr-3">Brand: <router-link :to="{ name: 'Brand', params: { brand: brand.brand.slug }}" class="hover:text-red-500">{{  brand.brand.name }}</router-link></span>
                                <span class="mr-4 hover:text-red-500 flex">
                                      <div class="text-sm text-gray-500 flex items-center">
                                          <span><svg class="w-3.5 h-3.5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                          <span><svg class="w-3.5 h-3.5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                          <span><svg class="w-3.5 h-3.5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                          <span><svg class="w-3.5 h-3.5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                          <span><svg class="w-3.5 h-3.5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                      </div>
                                      <a class="ml-2">{{ rating.stats.average_rating }}</a>
                                </span>
                                <span class="mr-4 hover:text-red-500"><a>{{ rating.stats.total_rating }} Review(s)</a></span>
                                <span class="mr-4 hover:text-red-500"><a>({{ product.item.total_sold }} Orders)</a></span>
                            </div>
                        </div>
                        <!-- End item name -->

                        <!-- Begin item price -->
                        <div class="">
                            <div v-if="pricing.priced === 'Product'" class="flex text-center text-gray-600 border-b border-t py-4 border-gray-100">
                                <span class="font-extrabold text-xl text-gray-600"> {{ pricing.data.sales_price }}</span>
                                <span class="text-gray-600 mx-3 text-xs py-1.5"><del> {{ pricing.data.price }}</del></span>
                                <span class=""><p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">- {{ pricing.data.discount_percentage }}</p></span>
                            </div>
                            <div v-else class="flex text-center text-gray-600 border-b border-t py-4 border-gray-100">
                                <span v-if="pricing.selected.length === 0" class="font-extrabold text-xl text-gray-600"> {{ pricing.data.price_range }}</span>
                                <div v-else class="flex">
                                    <span class="font-extrabold text-xl text-gray-600"> {{ pricing.selected.sales_price }}</span>
                                    <span class="text-gray-600 mx-3 text-xs py-1.5"><del> {{ pricing.selected.price }}</del></span>
                                    <span class=""><p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">- {{ pricing.selected.discount_percentage }}</p></span>
                                </div>
                            </div>
                        </div>
                        <!-- End item price -->

                        <!-- Begin buying options -->
                        <div class="">

                            <!-- Begin color -->
                            <div v-if="colors.colors.length > 0 " class="mt-3">
                                <label class="w-full text-gray-700 text-xs font-semibold">Colors: <span class="font-light">{{ orderData.colorValue }}</span></label>
                                <div class="flex gap-2 mt-1">
                                    <div v-for="( color, index ) in colors.colors" :key="color.attributes.resource_id" @click="chooseColor( color.attributes.color, index, color.attributes.resource_id )" class="flex cursor-pointer">
                                        <img @click="changeImage( color.attributes.image )" :src="color.attributes.image" :alt="color.attributes.resource_id" v-bind:class="{'w-12 h-12 mr-1 rounded-md border border-gray-300 p-0.5 hover:border-red-500': orderData.colorActive !== index, 'w-12 h-12 mr-1 rounded-md border-2 border-red-500 p-0.5': orderData.colorActive === index }" />
                                    </div>
                                </div>
                            </div>
                            <!-- End color -->

                            <!-- Begin bundle -->
                            <div v-if="bundles.bundles.length > 0 " class="mt-3">
                                <label class="w-full text-gray-700 text-xs font-semibold">Bundles: <span class="font-light">{{ orderData.bundleValue }}</span></label>
                                <div class="flex gap-2 mt-1">
                                    <div v-for="( bundle, index ) in bundles.bundles" :key="bundle.attributes.resource_id" @click="chooseBundle( bundle.attributes.bundle, index, bundle.attributes.resource_id )" class="flex cursor-pointer">
                                        <img @click="changeImage( bundle.attributes.image )" :src="bundle.attributes.image" :alt="bundle.attributes.resource_id" v-bind:class="{'w-12 h-12 mr-1 rounded-md border border-gray-300 p-0.5 hover:border-red-500': orderData.bundleActive !== index, 'w-12 h-12 mr-1 rounded-md border-2 border-red-500 p-0.5': orderData.bundleActive === index }" />
                                    </div>
                                </div>
                            </div>
                            <!-- End bundle -->

                            <!-- Begin size -->
                            <div v-if="sizes.sizes.length > 0" class="mt-3">
                                <label class="w-full text-gray-700 text-xs font-semibold">Sizes: <span class="font-light">{{ orderData.sizeValue }}</span></label>
                                <div class="flex gap-2 mt-1">
                                    <div v-for="( size, index ) in sizes.sizes" :key="size.attributes.resource_id" @click="chooseSize( size.attributes.size, index, size.attributes.resource_id )" class="flex cursor-pointer">
                                        <div @click="chooseSize( size.attributes.size, size.id, size.attributes.resource_id )" v-bind:class="{'w-10 mr-1 text-center rounded-md border border-gray-300 py-1.5 hover:border-red-500': orderData.sizeActive !== index, 'w-10 mr-1 text-center rounded-md border-2 py-1.5 border-red-500': orderData.sizeActive === index }">
                                            {{ size.attributes.size }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End size -->

                            <!-- Begin quantity -->
                            <div class="mt-3">
                                <label class="w-full text-gray-700 text-xs font-semibold">Quantity:</label>
                                <div class="flex items-center mt-1">
                                    <div class="custom-number-input h-10 w-32">
                                        <div class="flex flex-row h-10 w-full rounded relative bg-transparent mt-1">
                                            <button @click="quantityCounter( '-' )" data-action="decrement" class=" border text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none">
                                                <span class="m-auto text-2xl font-thin">−</span>
                                            </button>

                                            <input type="text" class="outline-none focus:outline-none text-center w-full bg-white border-t border-b font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" :value="orderData.quantity">

                                            <button @click="quantityCounter( '+' )" data-action="increment" class="border text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer">
                                                <span class="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="ml-4 mt-2">
                                        <span class="text-gray-400 text-xs">{{ product.item.quantity }} pieces available</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End quantity -->

                        </div>
                        <!-- End buying options -->

                        <!-- Begin delivery fee info -->
                        <div class="mt-5">
                            <div v-if="product.item.free_delivery === null || product.item.free_delivery !== 'Free Delivery'">
                                <p class="font-extrabold text-sm">Delivery Fee: {{ deliveryFees.current.fee }}</p>
                                <p @click="toggleDeliveryOptionsModal()" class="text-sm text-gray-500 flex items-center hover:text-red-600 cursor-pointer">Rapid Delivery via <strong class="ml-2"> {{ deliveryFees.current.carrier }}</strong><span class="mx-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span></p>
                                <p class="text-xs mt-0.5 text-gray-500">Estimated Delivery: {{ deliveryFees.current.delivery_time }}</p>
                            </div>
                            <div v-else>
                                <div>
                                    <p v-if="deliveryFees.current.carrier === 'Juasoonline Standard Delivery'" class="font-extrabold text-sm">{{ product.item.free_delivery }}</p>
                                    <p v-else class="font-extrabold text-sm">Delivery Fee: {{ deliveryFees.current.fee }}</p>
                                </div>
                                <p @click="toggleDeliveryOptionsModal()" class="text-sm text-gray-500 flex items-center hover:text-red-600 cursor-pointer">via <strong class="ml-2"> {{ deliveryFees.current.carrier }}</strong><span class="mx-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span></p>
                                <p class="text-xs mt-0.5 text-gray-500">Estimated Delivery: {{ deliveryFees.current.delivery_time }}</p>
                            </div>
                        </div>
                        <!-- End delivery fee info -->

                        <!-- Begin action button -->
                        <div class="flex inline-block mt-5">
                            <button v-if="orderData.orderLoading === false" @click="makeOrder()" class="inline-flex focus:outline-none items-center px-16 py-2 border border-transparent rounded shadow-sm text-sm 2xl:font-bold text-white bg-red-500 hover:bg-red-400">Buy Now</button>
                            <button v-else disabled class="inline-flex focus:outline-none items-center px-16 py-2 border border-transparent rounded shadow-sm text-sm 2xl:font-bold text-white bg-red-500 hover:bg-red-400">Please wait...</button>

                            <button v-if="orderData.cartLoading === false" @click="addToCart()" class="inline-flex focus:outline-none items-center px-16 py-2 border border-transparent rounded shadow-sm text-sm 2xl:font-bold text-white bg-yellow-400 hover:bg-yellow-300 mx-3">Add to Cart</button>
                            <button v-else disabled class="inline-flex focus:outline-none items-center px-16 py-2 border border-transparent rounded shadow-sm text-sm 2xl:font-bold text-white bg-yellow-400 hover:bg-yellow-300 mx-3">Please wait...</button>

                            <button v-if="wishlist.isLoading === false" @click="addToWishlist()" class="inline-flex focus:outline-none items-center px-5 py-2 border border rounded text-sm font-medium text-gray-500 bg-white-600">
                                <svg v-if="wishlist.status === false" class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                <svg v-else class="mr-2 h-5 w-5 text-red-500" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                {{ wishlist.wishlist_count }}
                            </button>
                            <button v-else disabled class="inline-flex focus:outline-none items-center px-5 py-2 border border rounded text-sm font-medium text-gray-500 bg-white-600"><svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>Loading...</button>
                        </div>
                        <!-- End action button -->

                        <!-- Begin buyer protection -->
                        <div class="mt-5 flex items-center">
                            <div class="mr-2 border border-gray-400 rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <p class="font-bold text-sm leading-4">
                                    <span>{{ product.item.buyer_protection }}-Days Buyer Protection</span> <br>
                                    <router-link to="/buyer-protection" class="text-xs font-light leading-none">Money back guarantee</router-link>
                                </p>
                            </div>
                        </div>
                        <!-- End buyer protection -->

                    </div>
                    <!-- End item info -->

                    <!-- Begin buy info -->
                    <div class="col-span-2 py-4 justify-center">

                        <!-- Begin buyer guarantees -->
                        <div class="">

                            <!-- Begin 24/7 help -->
                            <div class="flex mb-3 bg-gray-200 rounded p-2">
                                <svg class="w-16 h-16 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                <span class="text-gray-500">
                                    <h3 class="text-sm font-bold text-gray-600">24/7 Help Center</h3>
                                    <p class="text-xs">Round-the-clock assistance for a smooth shopping experience.</p>
                                </span>
                            </div>
                            <!-- End 24/7 help -->

                            <!-- Begin safe payment -->
                            <div class="flex mb-3 bg-gray-200 rounded p-2">
                                <svg class="w-16 h-16 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                <span class="text-gray-500">
                                    <h3 class="text-sm font-bold text-gray-600">Convenient payment</h3>
                                    <p class="text-xs">Pay with the popular and secure payment methods or on delivery</p>
                                </span>
                            </div>
                            <!-- End safe payment -->

                            <!-- Begin shop with confidence -->
                            <div class="flex mb-3 bg-gray-200 rounded p-2">
                                <svg class="w-16 h-16 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                <span class="text-gray-500">
                                    <h3 class="text-sm font-bold text-gray-600">Shop with Confidence</h3>
                                    <p class="text-xs">Our Buyer Protection covers your purchase from click to delivery.</p>
                                </span>
                            </div>
                            <!-- End shop with confidence -->

                            <!-- Begin products counts -->
                            <div class="flex mb-3 bg-gray-200 rounded p-2">
                                <svg class="w-16 h-16 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                                <span class="text-gray-500">
                                    <h3 class="text-sm font-bold text-gray-600">Over 1 million items</h3>
                                    <p class="text-xs">With over 1 million items, there's always something on sale!</p>
                                </span>
                            </div>
                            <!-- End products counts -->

                        </div>
                        <!-- End buyer guarantees -->

                        <!-- Begin flash deals -->
                        <div class="">
                        </div>
                        <!-- End flash deals -->

                    </div>
                    <!-- End buyer info -->

                </div>
            </div>
        </section>
        <!-- End item contents -->

        <!-- Begin main contents -->
        <section class="2xl:container xl:container lg:container 2xl:my-4 xl:my-4 lg:my-4 mx-auto px-1.5">

            <!-- Begin contents for large screens -->
            <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">

                <!-- Begin store banner -->
                <section class="my-4">
                    <div class="rounded">
                        <router-link :to="{ name: 'Store', params: { store: store.store.resource_id }}" class="focus:outline-none">
                            <img src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/advertisment/top/banner1.jpg" alt="Store banner" class="rounded">
                        </router-link>
                    </div>
                </section>
                <!-- End store banner -->

                <!-- Begin item review and specifications -->
                <section class="flex gap-5 my-4">

                    <!-- Begin left contents -->
                    <aside class="w-1/5 rounded">

                        <!-- Begin store category -->
                        <div class="bg-white rounded px-4 py-4 mb-5">
                            <div class="flex justify-start border-b pb-2">
                                <svg class="w-5 h-5 mr-1.5 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                                <span class="text-sm font-bold">Store Categories</span>
                            </div>
                            <div class="py-3">
                                <ul>
                                    <li v-for="category in store.categories" :key="category.attributes.resource_id" class="text-xs font-extrabold text-gray-500 my-1.5">
                                        <router-link :to="{ name: 'Store', params: { store: store.store.resource_id }}" class="flex items-center hover:text-red-500">
                                            <svg v-if="category.include.subcategories.length > 0" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -ml-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -ml-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                                            {{ category.attributes.name }}
                                        </router-link>
                                        <ul v-if="category.include.subcategories.length > 0" class="ml-6 text-xxs font-normal mt-1.5 mb-2.5">
                                            <li v-for="subcategory in category.include.subcategories" :key="subcategory.attributes.resource_id" class="my-2 hover:text-red-500">
                                                <router-link :to="{ name: 'Store', params: { store: store.store.resource_id }}">{{ subcategory.attributes.name }}</router-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- End store category -->

                        <!-- Begin top selling -->
                        <div class="bg-white rounded px-4 py-4 mb-5">
                            <div class="flex justify-start">
                                <span class="text-sm font-bold">Top Selling</span>
                            </div>
                            <div class="py-3">
                                <div v-for="item in storeItems.items.slice( 0, 5 )" :key="item.id" class="max-w-xs">
                                    <router-link :to="{ name: 'Item', params: { item: item.attributes.resource_id }}"><img class="w-full rounded border cursor-pointer" :src="item.attributes.image" alt="Sunset in the mountains"></router-link>
                                    <div class="font-bold text-sm mt-1.5">{{ item.attributes.sales_price }}</div>
                                    <p v-if="item.pricing.priced === 'Product'" class="font-bold block text-xs my-0.5">
                                        <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                            {{ item.pricing.price_data[0].sales_price }}
                                            <del class="ml-2 text-xxxs font-light text-gray-500 text-red-500"> {{ item.pricing.price_data[0].price }}</del>
                                        </router-link>
                                    </p>
                                    <p v-else class="font-bold block text-xs my-0.5">
                                        <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                            {{ item.pricing.price_data[0].price_range }}
                                        </router-link>
                                    </p>
                                    <div class="flex text-xs justify-between text-gray-400 mb-5">
                                        <p class="flex inline-block text-grey-darker items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <span>{{ item.attributes.average_rating }}</span>
                                        </p>
                                        <p class="inline-block text-grey-darker">{{ item.attributes.total_sold }} Sold</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End top selling -->

                    </aside>
                    <!-- End left contents -->

                    <!-- Begin right contents -->
                    <div class="w-4/5">

                        <!-- Begin store info -->
                        <div class="bg-white mb-4 rounded p-4">
                            <div class="flex">

                                <!-- Begin store info -->
                                <div class="w-1/5 mr-3">

                                    <!-- Begin store name -->
                                    <div class="flex items-center">
                                        <span class="text-sm font-bold">
                                            <router-link :to="{ name: 'Store', params: { store: store.store.resource_id }}">{{ store.store.doing_business_as }}</router-link>
                                        </span>
                                    </div>
                                    <!-- End store name -->

                                    <!-- Begin store stats -->
                                    <div class="my-2">
                                        <p class="text-xs">{{ store.rating.overall_rating }}<span class="text-gray-400 mx-2">Positive Feedback</span></p>
                                        <p class="text-xs">{{ store.stats.items }}<span class="text-gray-400 mx-2">Items</span></p>
                                        <p class="text-xs">{{ store.stats.followers }}<span class="text-gray-400 mx-2">Followers</span></p>
                                        <p class="text-xs my-2">
                                            <router-link to="/messages" class="flex items-center hover:text-juaso-primary cursor-pointer ">
                                                <svg class="w-5 h-5 text-juaso-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                                <span class="text-juaso-secondary mx-2">Message Store</span>
                                            </router-link>
                                        </p>
                                    </div>
                                    <!-- End store stats -->

                                    <!-- Begin call to action -->
                                    <div class="mt-3 flex justify-between items-center">
                                        <router-link :to="{ name: 'Store', params: { store: store.store.resource_id }}" class="bg-red-600 text-white 2xl:text-xs xl:text-xxs lg:text-xxxs py-1 px-4 border rounded-full border-red-600">Visit Store</router-link>
                                        <button @click="followAction()" class="text-red-600 2xl:text-xs xl:text-xxs lg:text-xxxs py-1 px-4 border rounded-full border-red-600">
                                            <span v-if="follows.isLoading === true">Loading</span>
                                            <span v-else>{{ follows.status }}</span>
                                        </button>
                                    </div>
                                    <!-- End call to action -->

                                </div>
                                <!-- Begin store info -->

                                <!-- Begin store items -->
                                <div class="w-4/5">
                                    <div class="2xl:block xl:hidden lg:hidden">
                                        <div class="flex grid gap-2 grid-cols-7">
                                            <div v-for="item in storeItems.items.slice( 0, 7 )" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden">
                                                <router-link class="text-center" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                                                    <img v-bind:src="item.attributes.image" :alt="item.attributes.name" class="object-cover text-center border mx-auto rounded">
                                                </router-link>
                                                <div class="m-3 text-center">
                                                    <p class="font-bold block text-xs"><router-link class="w-full object-cover hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}"> {{ item.pricing.price_data[0].sales_price }} </router-link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="2xl:hidden xl:block lg:hidden">
                                        <div class="flex grid gap-2 grid-cols-6">
                                            <div v-for="item in storeItems.items.slice( 0, 6 )" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden">
                                                <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                                                    <img class="object-fill h-38 w-full border rounded" v-bind:src="item.attributes.image" :alt="item.attributes.name">
                                                </router-link>
                                                <div class="m-3 text-center">
                                                    <p class="font-bold block text-xs"><router-link class="w-full object-cover hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}"> {{ item.pricing.price_data[0].sales_price }} </router-link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="2xl:hidden xl:hidden lg:block">
                                        <div class="flex grid gap-2 grid-cols-4">
                                            <div v-for="item in storeItems.items.slice( 0, 4 )" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden">
                                                <router-link class="text-center object-cover h-48 w-full" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                                                    <img v-bind:src="item.attributes.image" :alt="item.attributes.name" class="object-cover text-center border mx-auto rounded">
                                                </router-link>
                                                <div class="m-3 text-center">
                                                    <p class="font-bold block text-xs"><router-link class="w-full object-cover hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}"> {{ item.pricing.price_data[0].sales_price }} </router-link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End store items -->

                            </div>
                        </div>
                        <!-- End store info -->

                        <!-- Begin item detailed info -->
                        <div class="bg-white rounded mb-5">
                            <div class="flex flex-wrap">
                                <div class="w-full">

                                    <!-- Begin tab menu -->
                                    <div class="rounded">
                                        <ul class="flex mb-0 list-none flex-wrap flex-row">
                                            <li class="-mb-px last:mr-0 cursor-pointer"><a class="text-sm px-5 py-2 block leading-normal font-bold border-b" @click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white rounded-tl': tabs.openTab !== 1, 'text-gray-500 bg-gray-200 rounded-tl': tabs.openTab === 1}">Product Overview</a></li>
                                            <li class="-mb-px last:mr-0 cursor-pointer"><a class="text-sm px-5 py-2 block leading-normal font-bold border-b" @click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 2, 'text-gray-500 bg-gray-200': tabs.openTab === 2}">Customer Reviews ({{rating.stats.total_rating}})</a></li>
                                            <li class="-mb-px last:mr-0 cursor-pointer"><a class="text-sm px-5 py-2 block leading-normal font-bold border-b" @click="toggleTabs(3)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 3, 'text-gray-500 bg-gray-200': tabs.openTab === 3}">Product Specifications</a></li>
                                        </ul>
                                    </div>
                                    <!-- End tab menu -->

                                    <!-- Begin tab contents -->
                                    <div class="relative rounded-b flex flex-col min-w-0 break-words bg-white w-full border-t">
                                        <div class="flex-auto">
                                            <div class="tab-content tab-space px-5">

                                                <!-- Begin overview -->
                                                <div v-bind:class="{ 'hidden': tabs.openTab !== 1, 'block': tabs.openTab === 1 }" class="">
                                                    <div v-for="overview in overviews.overviews" :key="overview.attributes.resource_id" class="flex items-center justify-center py-5">
                                                        <div class="flex flex-col bg-white items-center">
                                                            <h3 class="font-serif font-bold text-gray-900 text-2xl">{{ overview.attributes.title }}</h3>
                                                            <p class="text-center leading-relaxed">{{ overview.attributes.description }}</p>
                                                            <img class="rounded w-full mt-4" :src="overview.attributes.image" alt="motivation" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End overview -->

                                                <!-- Begin customers review -->
                                                <div v-bind:class="{ 'hidden': tabs.openTab !== 2, 'block': tabs.openTab === 2 }">

                                                    <!-- Begin reviews if any -->
                                                    <div v-if="reviews.reviews.length > 0">

                                                        <!-- Begin reviews stats -->
                                                        <div class="my-5 border-b pb-8">
                                                            <h2 class="mb-5 font-extrabold text-gray-700">Customer Reviews ({{rating.stats.total_rating}})</h2>
                                                            <div class="flex grid items-center grid-cols-2 ">
                                                                <div>
                                                                    <div class="flex mr-10 items-center grid grid-cols-5 text-xs">
                                                                        <div class="mr-5 mb-1.5 col-span-1">5 Stars</div>
                                                                        <div class="mr-5 col-span-3 overflow-hidden h-1.5 text-xs flex bg-gray-200">
                                                                            <div :style="'width:' + rating.rating_percentage.star_5" class="mr-5 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                                                        </div>
                                                                        <div class="col-span-1"><div class="border rounded w-1/2 text-center text-xxs">{{ rating.rating_percentage.star_5 }}</div></div>
                                                                    </div>
                                                                    <div class="flex mr-10 items-center grid grid-cols-5 text-xs">
                                                                        <div class="mr-5 mb-1.5 col-span-1">4 Stars</div>
                                                                        <div class="mr-5 col-span-3 overflow-hidden h-1.5 text-xs flex bg-gray-200">
                                                                            <div :style="'width:' + rating.rating_percentage.star_4" class="mr-5 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                                                        </div>
                                                                        <div class="col-span-1"><div class="border rounded w-1/2 text-center text-xxs">{{ rating.rating_percentage.star_4 }}</div></div>
                                                                    </div>
                                                                    <div class="flex mr-10 items-center grid grid-cols-5 text-xs">
                                                                        <div class="mr-5 mb-1.5 col-span-1">3 Stars</div>
                                                                        <div class="mr-5 col-span-3 overflow-hidden h-1.5 text-xs flex bg-gray-200">
                                                                            <div :style="'width:' + rating.rating_percentage.star_3" class="mr-5 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                                                        </div>
                                                                        <div class="col-span-1"><div class="border rounded w-1/2 text-center text-xxs">{{ rating.rating_percentage.star_3 }}</div></div>
                                                                    </div>
                                                                    <div class="flex mr-10 items-center grid grid-cols-5 text-xs">
                                                                        <div class="mr-5 mb-1.5 col-span-1">2 Stars</div>
                                                                        <div class="mr-5 col-span-3 overflow-hidden h-1.5 text-xs flex bg-gray-200">
                                                                            <div :style="'width:' + rating.rating_percentage.star_2" class="mr-5 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                                                        </div>
                                                                        <div class="col-span-1"><div class="border rounded w-1/2 text-center text-xxs">{{ rating.rating_percentage.star_2 }}</div></div>
                                                                    </div>
                                                                    <div class="flex mr-10 items-center grid grid-cols-5 text-xs">
                                                                    <div class="mr-5 mb-1.5 col-span-1">1 Stars</div>
                                                                        <div class="mr-5 col-span-3 overflow-hidden h-1.5 text-xs flex bg-gray-200">
                                                                            <div :style="'width:' + rating.rating_percentage.star_1" class="mr-5 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                                                        </div>
                                                                        <div class="col-span-1"><div class="border rounded w-1/2 text-center text-xxs">{{ rating.rating_percentage.star_1 }}</div></div>
                                                                    </div>
                                                                </div>
                                                                <div class="flex gap-5 items-center">
                                                                    <div class="font-black text-gray-700">{{ rating.stats.average_rating }} / 5</div>
                                                                    <div class="text-sm text-gray-500 flex items-center">
                                                                        <span><svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                        <span><svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                        <span><svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                        <span><svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                        <span><svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- End reviews stats -->

                                                        <!-- Begin reviews contents -->
                                                        <div v-for="review in reviews.reviews" :key="review" class="flex mb-3">
                                                            <div class="flex-1 border-b py-4 leading-relaxed">
                                                                <div class="flex items-center">
                                                                    <strong class="mr-2">{{ review.attributes.reviewer }}</strong>
                                                                    <span class="text-xs text-gray-400 mr-2">{{ review.attributes.created_at }}</span>
                                                                    <span class="">
                                                                        <div class="text-sm text-gray-500 flex">
                                                                            <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                            <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                            <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                            <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                            <span><svg class="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                                <p class="text-sm my-1">{{ review.attributes.review }}</p>
                                                                <div class="mt-4 flex items-center float-right">
                                                                    <p class="text-xs mr-3">Helpful?</p>
                                                                    <div class="mr-2">
                                                                        <button type="button" class="flex items-center rounded bg-juaso-primary text-white font-bold px-2 py-1 focus:outline-none hover:bg-juaso-secondary">
                                                                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                            <span class="uppercase text-xxxs font-bold">Yes</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="">
                                                                        <button type="button" class="flex items-center rounded bg-red-500 text-white font-bold px-2 py-1 focus:outline-none hover:bg-red-600">
                                                                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                            <span class="uppercase text-xxxs font-bold">No</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- End reviews contents -->

                                                    </div>
                                                    <!-- Begin reviews -->

                                                    <!-- Begin no reviews content -->
                                                    <div v-else class="flex mb-3">
                                                        <p class="text-middle m-auto my-20 text-gray-400">There are no reviews for this item</p>
                                                    </div>
                                                    <!-- End no reviews content -->

                                                </div>
                                                <!-- End image -->

                                                <!-- Begin specifications -->
                                                <div v-bind:class="{ 'hidden': tabs.openTab !== 3, 'block': tabs.openTab === 3 }">
                                                    <table class="table table-bordered ps-table ps-table--specification text-sm my-5">
                                                        <tbody>
                                                            <tr v-for="specification in specifications.specifications" :key="specification.attributes.resource_id">
                                                                <td class="w-1/2">{{ specification.attributes.specification }}</td><td class="w-1/2">{{ specification.attributes.value }}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!-- End specifications -->

                                            </div>
                                        </div>
                                    </div>
                                    <!-- End tab contents -->

                                </div>
                            </div>
                        </div>
                        <!-- End item detailed info -->

                        <!-- Begin FAQs if any -->
                        <div v-if="faqs.faqs.length > 0" class="bg-white rounded mb-3">
                            <div class="flex-wrap p-5">

                                <!-- Begin header -->
                                <div class="mb-3 border-b pb-2">
                                    <h2 class="font-extrabold text-xl text-gray-700">Buyer Questions & Answers</h2>
                                </div>
                                <!-- End header -->

                                <!-- Begin FAQs if any -->
                                <div class="">
                                    <div v-for="faq in faqs.faqs" :key="faq.attributes.resource_id" class="">
                                        <div v-if="faq.attributes.answer !== null" class="border-b mb-2 py-2">

                                        <!-- Begin question -->
                                        <div class="flex items-center my-1.5">
                                            <div class="mr-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg></div>
                                            <div class="font-extrabold">{{ faq.attributes.question }}</div>
                                        </div>
                                        <!-- End question -->

                                        <!-- Begin answer -->
                                        <div class="flex items-center my-1.5">
                                            <div class="mr-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" /></svg></div>
                                            <div class="font-light text-sm">{{ faq.attributes.answer }}</div>
                                        </div>
                                        <!-- End answer -->

                                        </div>
                                    </div>
                                </div>
                                <!-- End FAQs if any -->

                            </div>
                        </div>
                        <!-- End FAQs if any -->

                        <!-- Begin store recommendations -->
                        <div class="rounded mb-5">
                            <h3 class="font-bold text-lg text-gray-600 mb-2">Seller Recommendations</h3>

                            <!-- Begin items -->
                            <div class="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 gap-4">
                                <div v-for="item in storeRecommendations.items" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                                    <router-link :to="{ name: 'Item', params: { item: item.attributes.resource_id }}" class="w-full object-cover">
                                        <img  class="object-cover h-48 w-full" :src="item.attributes.image" :alt="item.attributes.name">
                                    </router-link>
                                    <div class="m-2">
                                        <span class="text-gray-500 text-xs hover:text-red-500">
                                            <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                                                <p class="" :title="item.attributes.name">{{ item.attributes.name.substring(0, 20) }}...</p>
                                            </router-link>
                                        </span>

                                        <p v-if="item.pricing.priced === 'Product'" class="font-bold block text-xs my-0.5">
                                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                                {{ item.pricing.price_data[0].sales_price }}
                                                <del class="ml-2 text-xxxs font-light text-gray-500 text-red-500"> {{ item.pricing.price_data[0].price }}</del>
                                            </router-link>
                                        </p>
                                        <p v-else class="font-bold block text-xs my-0.5">
                                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                                {{ item.pricing.price_data[0].price_range }}
                                            </router-link>
                                        </p>
                                        <div class="flex items-center justify-between">
                                            <p class="block text-xs my-0.5 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                                <span>{{ item.attributes.average_rating }}</span>
                                            </p>
                                            <router-link :to="{ name: 'Item', params: { item: item.attributes.resource_id }}" class="hover:text-red-500">
                                                <span class="text-xs font-light text-gray-500">{{ item.attributes.total_sold }} Sold</span>
                                            </router-link>
                                        </div>

                                        <span class="block text-gray-500 text-xxs"></span>
                                    </div>
                                </div>
                            </div>
                            <!-- End items -->

                        </div>
                        <!-- End store recommendations -->

                        <!-- Begin more to love items -->
                        <div class="rounded mb-5">

                            <!-- Begin title -->
                            <div class="flex items-center justify-between">
                                <h3 class="font-bold text-lg text-gray-600 mb-2">More To Love</h3>
                                <router-link to="">
                                    <p class="flex items-center text-xs text-gray-600 hover:text-juaso-primary">View More <span><svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span></p>
                                </router-link>
                            </div>
                            <!-- End title -->

                            <!-- Begin items -->
                            <div class="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 gap-4">
                                <div v-for="item in recommendations.items" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                                    <router-link :to="{ name: 'Item', params: { item: item.attributes.resource_id }}" class="w-full object-cover">
                                        <img  class="object-cover h-48 w-full" :src="item.attributes.image" :alt="item.attributes.name">
                                    </router-link>
                                    <div class="m-2">
                                        <span class="text-gray-500 text-xs hover:text-red-500">
                                            <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                                                <p class="" :title="item.attributes.name">{{ item.attributes.name.substring(0, 20) }}...</p>
                                            </router-link>
                                        </span>
                                        <p v-if="item.pricing.priced === 'Product'" class="font-bold block text-xs my-0.5">
                                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                                {{ item.pricing.price_data[0].sales_price }}
                                                <del class="ml-2 text-xxxs font-light text-gray-500 text-red-500"> {{ item.pricing.price_data[0].price }}</del>
                                            </router-link>
                                        </p>
                                        <p v-else class="font-bold block text-xs my-0.5">
                                            <router-link class="w-full object-cover text-gray-700 hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id } }">
                                                {{ item.pricing.price_data[0].price_range }}
                                            </router-link>
                                        </p>
                                        <div class="flex items-center justify-between">
                                            <p class="block text-xs my-0.5 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                                <span>{{ item.attributes.average_rating }}</span>
                                            </p>
                                            <router-link :to="{ name: 'Item', params: { item: item.attributes.resource_id }}" class="hover:text-red-500">
                                                <span class="text-xs font-light text-gray-500">{{ item.attributes.total_sold }} Sold</span>
                                            </router-link>
                                        </div>
                                        <span class="block text-gray-500 text-xxs"></span>
                                    </div>
                                </div>
                            </div>
                            <!-- End items -->

                        </div>
                        <!-- Begin  more to love items -->

                    </div>
                    <!-- End right contents -->

                </section>
                <!-- End item review and specifications -->

            </div>
            <!-- Begin contents for large screens -->

            <!-- Begin contents for mobile screens -->
            <div class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block">

                <!-- Begin image slider -->
                <div class="">
                    <swiper :slides-per-view="1" :speed="1000">
                        <swiper-slide v-for="image in images.images" :key="image.attributes.resource_id">
                            <div class="swiper-container"><img :src="image.attributes.image" :alt="image.attributes.description"></div>
                        </swiper-slide>
                    </swiper>
                </div>
                <!-- Begin image slider -->

                <!-- Begin product name and price -->
                <div class="bg-white p-2">
                    <div class="border-b pb-2.5">
                        <div v-if="pricing.priced === 'Product'" class="flex items-center justify-between">
                            <p class="font-bold text-lg items-center flex">
                                {{ pricing.data.sales_price }}
                                <del class="text-xxs text-red-600 font-light mx-2"> {{ pricing.data.price }}</del>
                                <span class="inline-flex py-0.5 px-3 items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">- {{ pricing.data.discount_percentage }}</span>
                            </p>
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                        <div v-else class="flex items-center justify-between">
                            <p class="font-bold text-lg items-center flex">
                                 {{ pricing.data.price_range }}
                            </p>
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                        <p class="text-sm mt-2">{{ product.item.name }}</p>
                        <span class="block text-gray-500 text-xs flex items-center mt-2">
                            <svg class="w-3.5 h-3.5 text-red-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                            {{ rating.stats.average_rating }} | {{ product.item.total_sold }} Sold
                        </span>
                    </div>
                </div>
                <!-- End product name and price -->

                <!-- Begin delivery info -->
                <div class="bg-white p-2 mb-3">
                    <p class="font-bold text-sm">Delivery Fee:  30.21</p>
                    <p class="text-sm text-gray-400">Nationwide Delivery via Juasoonline Delivery</p>
                    <p class="text-xs mt-0.5 text-gray-400">Estimated Delivery: 7-15 days</p>
                </div>
                <!-- End delivery info -->

                <!-- Begin color -->
                <div class="bg-white px-2 pt-1 pb-3 mb-3">
                    <label class="w-full text-gray-700 text-sm">Color:</label>
                    <div class="flex gap-2 grid grid-cols-6">
                        <div v-for="color in colors.colors" :key="color.attributes.resource_id" class="flex cursor-pointer">
                            <img :src="color.attributes.image" alt="mountain" class="w-12 rounded-md border border-gray-300 p-0.5 hover:border-red-500 active:shadow-md" />
                        </div>
                    </div>
                </div>
                <!-- End color -->

                <!-- Begin size -->
                <div class="bg-white px-2 pt-1 pb-3 mb-3">
                    <label class="w-full text-gray-700 text-xs font-semibold">Size:</label>
                    <div class="flex gap-2 grid grid-cols-6">
                        <div v-for="size in sizes.sizes" :key="size.attributes.resource_id" class="flex cursor-pointer">
                            <div class="w-10 text-center rounded-md border border-gray-300 py-1.5 hover:border-red-500 active:shadow-md">{{ size.attributes.size }}</div>
                        </div>
                    </div>
                </div>
                <!-- End size -->

                <!-- Begin quantity -->
                <div class="bg-white px-2 pt-1 pb-3 mb-7">
                      <label class="w-full text-gray-700 text-xs font-semibold">Quantity:</label>
                      <div class="flex items-center">
                          <div class="custom-number-input h-10 w-32">
                              <div class="flex flex-row h-10 w-full rounded relative bg-transparent mt-1">
                                <button data-action="decrement" class=" border text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span class="m-auto text-2xl font-thin">−</span>
                                </button>
                                <input type="text" class="outline-none focus:outline-none text-center w-full bg-white border-t border-b font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0">
                                <button data-action="increment" class="border text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl font-thin">+</span>
                                </button>
                              </div>
                          </div>
                          <div class="ml-4 mt-2">
                              <span class="text-gray-400 text-sm">{{ product.item.quantity }} pieces available</span>
                          </div>
                      </div>
                </div>
                <!-- End quantity -->

                <!-- Begin overview, review and specification info -->
                <div class="bg-white mb-3">
                    <div class="flex flex-wrap">
                        <div class="w-full">

                            <!-- Begin tab menu -->
                            <div class="sticky top-20 z-30 border-t">
                                <ul class="flex mb-0 list-none flex-wrap flex-row -mt-4">
                                    <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer"><a class="text-sm font-bold px-3 py-2 block leading-normal border-b" @click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 1, 'text-gray-500 bg-gray-200': tabs.openTab === 1}">Overview</a></li>
                                    <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer"><a class="text-sm font-bold px-3 py-2 block leading-normal border-b" @click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 2, 'text-gray-500 bg-gray-200': tabs.openTab === 2}">Reviews</a></li>
                                    <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer"><a class="text-sm font-bold px-3 py-2 block leading-normal border-b" @click="toggleTabs(3)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 3, 'text-gray-500 bg-gray-200': tabs.openTab === 3}">Specifications</a></li>
                                </ul>
                            </div>
                            <!-- End tab menu -->

                            <!-- Begin tab contents -->
                            <div class="relative rounded-b flex flex-col min-w-0 break-words bg-white w-full border-t">
                                <div class="flex-auto">
                                    <div class="tab-content tab-space px-2">

                                        <!-- Begin overview -->
                                        <div v-bind:class="{ 'hidden': tabs.openTab !== 1, 'block': tabs.openTab === 1 }" class="">
                                            <div v-for="overview in overviews.overviews" :key="overview.attributes.resource_id" class="flex items-center justify-center py-2">
                                                <div class="flex flex-col bg-white items-center">
                                                    <h3 class="font-serif font-bold text-gray-900 text-lg mt-3">{{ overview.attributes.title }}</h3>
                                                    <p class="text-center leading-relaxed py-1 text-sm">{{ overview.attributes.description }}</p>
                                                    <img class="rounded w-full mt-2" :src="overview.attributes.image" alt="motivation" />
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End overview -->

                                        <!-- Begin customers review -->
                                        <div v-bind:class="{ 'hidden': tabs.openTab !== 2, 'block': tabs.openTab === 2 }">
                                            <div v-for="review in 5" :key="review" class="flex mb-3">
                                                <div class="flex-1 border-b py-4 leading-relaxed">
                                                    <div class="flex items-center">
                                                        <strong class="mr-2">Michael Kabutey</strong>
                                                        <span class="text-xs text-gray-400 mr-2">29 Mar 2021 @ 3:34 PM</span>
                                                        <span class="">
                                                            <div class="text-sm text-gray-500 flex">
                                                                <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                                <span><svg class="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <p class="text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                                    <div class="mt-4 flex items-center float-right">
                                                        <p class="text-xs mr-3">Helpful?</p>
                                                        <div class="mr-2">
                                                            <button type="button" class="flex items-center rounded bg-juaso-primary text-white font-bold px-2 py-1 focus:outline-none hover:bg-juaso-secondary">
                                                                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                <span class="uppercase text-xxxs font-bold">Yes</span>
                                                            </button>
                                                        </div>
                                                        <div class="">
                                                            <button type="button" class="flex items-center rounded bg-red-500 text-white font-bold px-2 py-1 focus:outline-none hover:bg-red-600">
                                                                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                <span class="uppercase text-xxxs font-bold">No</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End image -->

                                        <!-- Begin specifications -->
                                        <div v-bind:class="{ 'hidden': tabs.openTab !== 3, 'block': tabs.openTab === 3 }">
                                            <table class="table table-bordered ps-table ps-table--specification text-sm my-5">
                                                <tbody>
                                                    <tr v-for="specification in specifications.specifications" :key="specification.attributes.resource_id">
                                                        <td class="w-1/2">{{ specification.attributes.specification }}</td><td class="w-1/2">{{ specification.attributes.value }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <!-- End specifications -->

                                    </div>
                                </div>
                            </div>
                            <!-- End tab contents -->

                        </div>
                    </div>
                </div>
                <!-- End overview, review and specification info -->

                <!-- Begin seller and recommendations -->
                <div class="bg-white px-2 py-3 mb-3">

                    <!-- Begin store name -->
                    <div class="flex items-center">
                        <svg class="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
                        <span class="text-lg font-bold"><router-link :to="{ name: 'Store', params: { store: store.store.resource_id }}">{{ store.store.name }}</router-link></span>
                    </div>
                    <!-- End store name -->

                    <!-- Begin store stats -->
                    <div class="flex items-center justify-between my-3">
                        <div class="text-left">
                            <p class="text-sm">95.7%</p>
                            <p class="text-gray-400 text-xs">Positive Feedback</p>
                        </div>
                        <div class="text-center">
                            <p class="text-sm">230</p>
                            <p class="text-gray-400 text-xs">Items</p>
                        </div>
                        <div class="text-right">
                            <p class="text-sm">230</p>
                            <p class="text-gray-400 text-xs">Followers</p>
                        </div>
                    </div>
                    <!-- End store stats -->

                    <!-- Begin call to action -->
                    <div class="my-3 border-b pb-4">
                        <router-link :to="{ name: 'Store', params: { store: store.store.resource_id }}" class="bg-red-600 text-white mr-3 text-xs py-1 px-4 border rounded-full border-red-600">Visit Store</router-link>
                        <button class="text-red-600 text-xs py-1 px-4 border rounded-full border-red-600">Follow</button>
                    </div>
                    <!-- End call to action -->

                    <!-- Begin recommendations header -->
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="font-bold text-sm mb-1.5">Seller Recommendations</h3>
                        <p class="text-xxs text-juaso-secondary"><router-link :to="{ name: 'Store', params: { store: store.store.resource_id }}">View All Product</router-link></p>
                    </div>
                    <!-- End recommendations header -->

                    <!-- Begin items list -->
                    <div class="grid gap-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3">
                        <div v-for="item in storeRecommendations.items.slice(0, 6)" :key="item.resource_id" class="card bg-white rounded overflow-hidden">
                            <router-link class="text-center" :to="{ name: 'Item', params: { item: item.resource_id }}">
                                <img v-bind:src="item.image" :alt="item.name" class="object-cover h-16 w-16 text-center mx-auto">
                            </router-link>
                            <div class="m-3 text-center">
                                <p class="font-bold block text-xxs my-0.5">
                                    <router-link class="w-full object-cover hover:text-red-500" :to="{ name: 'Item', params: { item: item.resource_id }}"> {{ item.sales_price }}</router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End items list -->

                </div>
                <!-- End seller and recommendations -->

                <!-- Begin more to love -->
                <div class="px-2 mb-16">
                    <h3 class="font-bold text-sm mb-1.5 text-center">More To Love</h3>

                    <!-- Begin items list -->
                    <div class="grid gap-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
                        <div v-for="item in recommendations.items" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                            <router-link class="w-full object-cover" target= '_blank' :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                                <img v-bind:src="item.attributes.image" :alt="item.name">
                            </router-link>
                            <div class="m-5">
                                <p class="text-gray-500 text-xs hover:text-red-500">
                                    <router-link class="w-full object-cover" target= '_blank' :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">{{ item.attributes.name.substring(0, 22) }}...</router-link>
                                </p>
                                <p class="font-bold block text-xs my-0.5">
                                    <router-link class="w-full object-cover hover:text-red-500" target= '_blank' :to="{ name: 'Item', params: { item: item.attributes.resource_id }}"> {{ item.attributes.sales_price }}</router-link>
                                </p>
                                <span class="block text-gray-500 text-xxs flex items-center">
                                    <svg class="w-3 h-3 text-red-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                    {{ item.attributes.total_rating }}  | {{ item.attributes.total_sold }} Sold
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- End items list -->

                </div>
                <!-- End more to love -->

                <!-- Begin bottom navbar -->
                <section id="bottom-navigation" class="2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block block fixed inset-x-0 bottom-0 z-40 bg-white shadow">
                    <div id="tabs" class="flex justify-between">
                        <router-link to="/" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 border-r">
                            <svg class="w-5 h-5 m-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
                            <span class="text-xxs">Store</span>
                        </router-link>
                        <router-link to="categories" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                            <svg class="w-5 h-5 m-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                            <span class="text-xxs">Chat</span>
                        </router-link>
                        <button class="w-full bg-red-400 text-white focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                            <span class="text-xs uppercase">Add To Cart</span>
                        </button>
                        <button class="w-full bg-red-600 text-white focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                            <span class="text-xs uppercase">Buy Now</span>
                        </button>
                    </div>
                </section>
                <!-- End bottom navbar -->

            </div>
            <!-- End contents for mobile screens -->

        </section>
        <!-- End main contents -->

    </main>
    <!-- End contents -->

    <!-- Begin sign in form modal -->
    <div class="">
        <div v-if="modal.showSignInModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex animated fadeIn faster">

            <!-- Begin modal -->
            <div class="relative w-auto my-6 mx-auto max-w-sm">
                <div class="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    <!-- Begin modal header -->
                    <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <div>
                            <router-link to="/">
                                <img src="https://juasoonline.nyc3.digitaloceanspaces.com/assets/images/logo.png" class="2xl:w-32 xl:w-24 lg:w-18 md:w-24 sm:w-24 xs:w-24 mx-auto w-12 h-9.5">
                            </router-link>
                        </div>
                        <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleSignInModal()">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <!-- End modal header -->

                    <!-- Begin modal body -->
                    <div class="relative px-5 flex-auto">
                        <form @submit.prevent="signIn" class="">
                            <div class="mt-4 text-sm">

                                <!-- Begin title -->
                                <div class="max-w-lg text-center">
                                    <h3 class="font-bold text-lg text-gray-500 uppercase mb-3">Sign In</h3>
                                    <p> Please provide your email and password to log into your Juasoonline account: </p>
                                </div>
                                <!-- End title -->

                                <!-- Begin email -->
                                <div class="mt-2">
                                    <label class="text-gray-500 text-sm">Email Address</label>
                                    <div class="flex mt-3">
                                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                            <svg class="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <input v-model="loginData.email" type="email" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="example@example.com">
                                    </div>
                                </div>
                                <!-- End email -->

                                <!-- Begin password -->
                                <div class="mt-6">
                                    <div class="flex justify-between"><label class="text-gray-500 text-sm">Password</label></div>
                                    <div class="flex my-3">
                                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                        </div>
                                        <input v-model="loginData.password" type="password" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="password">
                                    </div>
                                    <router-link class="text-sm hover:text-juaso-secondary" to="/forgot-password">Forgot your password?</router-link>
                                </div>
                                <!-- End password -->

                                <!-- Begin sign in button  -->
                                <div class="rounded-b mt-3">
                                    <div class="flex items-center justify-end sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button v-if="loginData.isLoading === false" type="submit" class="w-full inline-flex justify-center rounded shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">Sign In</button>
                                        <button v-else disabled class="w-full inline-flex justify-center rounded shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">Logging In...</button>
                                    </div>
                                </div>
                                <!-- End sign in button -->

                            </div>
                        </form>
                    </div>
                    <!-- End modal body -->

                    <!-- Begin register link -->
                    <div class="my-3 mb-7 text-center text-sm">
                        Don't have an account yet? <router-link to="/register" class="text-juaso-primary hover:text-juaso-secondary">Register Here</router-link>
                    </div>
                    <!-- End register link -->

                </div>
            </div>
            <!-- End modal -->

        </div>
        <div v-if="modal.showSignInModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
    <!-- End sign in form modal -->

    <!-- Begin addToCart modal -->
    <div class="">
        <div v-if="modal.showAddToCartModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex animated fadeIn faster">

            <!-- Begin modal -->
            <div class="relative w-auto my-6 mx-auto 2xl:w-2/4 xl:w-2/3">
                <div class="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    <!-- Begin modal header -->
                    <div class="flex p-2 rounded-t">
                        <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleAddToCartModal()">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <!-- End modal header -->

                    <!-- Begin alert -->
                    <div class="flex p-2 mx-4 font-medium py-1 px-2 bg-white rounded text-green-700 bg-green-100 border border-green-300 rounded">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle w-5 h-5 mx-2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <div class="text-xs font-normal  max-w-full flex-initial">
                            {{ modal.message }}
                        </div>
                    </div>
                    <!-- End alert -->

                    <!-- Begin action buttons -->
                    <div class="flex m-4">
                        <button class="inline-flex justify-center rounded shadow-sm px-4 py-1 mr-5 bg-red-600 font-medium text-sm text-white hover:bg-red-700 focus:outline-none">View Shopping Cart</button>
                        <button class="inline-flex justify-center rounded shadow-sm px-4 py-1 border border-red-500 font-medium text-sm text-red-500 hover:text-red-700 focus:outline-none">Continue Shopping</button>
                    </div>
                    <!-- End action buttons -->

                    <!-- Begin modal body -->
                    <div class="relative px-5 pb-5 mt-4 flex-auto">
                        <div class="border-t font-bold">
                            <div class="py-3">Recommended for you</div>

                            <div class="2xl:block xl:hidden lg:hidden">
                                <div class="flex grid gap-5 grid-cols-6">
                                    <div v-for="item in recommendations.items.slice( 0, 6 )" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden">
                                        <router-link class="text-center" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                                            <img v-bind:src="item.attributes.image" :alt="item.attributes.name" class="object-cover text-center border mx-auto rounded">
                                        </router-link>
                                        <div class="m-3 text-center">
                                            <p class="font-bold block text-xs"><router-link class="w-full object-cover hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}"> {{ item.attributes.sales_price }}</router-link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="2xl:hidden xl:block lg:hidden">
                                <div class="flex grid gap-5 grid-cols-5">
                                    <div v-for="item in recommendations.items.slice( 0, 5 )" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden">
                                        <router-link class="w-full object-cover" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                                            <img class="object-fill h-38 w-full border rounded" v-bind:src="item.attributes.image" :alt="item.attributes.name">
                                        </router-link>
                                        <div class="m-3 text-center">
                                            <p class="font-bold block text-xs"><router-link class="w-full object-cover hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}"> {{ item.attributes.sales_price }}</router-link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="2xl:hidden xl:hidden lg:block">
                                <div class="flex grid gap-5 grid-cols-4">
                                    <div v-for="item in recommendations.items.slice( 0, 4 )" :key="item.attributes.resource_id" class="card bg-white rounded overflow-hidden">
                                        <router-link class="text-center object-cover h-48 w-full" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}">
                                            <img v-bind:src="item.attributes.image" :alt="item.attributes.name" class="object-cover text-center border mx-auto rounded">
                                        </router-link>
                                        <div class="m-3 text-center">
                                            <p class="font-bold block text-xs"><router-link class="w-full object-cover hover:text-red-500" :to="{ name: 'Item', params: { item: item.attributes.resource_id }}"> {{ item.attributes.sales_price }}</router-link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End modal body -->

                </div>
            </div>
            <!-- End modal -->

        </div>
        <div v-if="modal.showAddToCartModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
    <!-- End addToCart modal -->

    <!-- Begin deliverOptions modal -->
    <div class="">
        <div v-if="modal.showDeliveryOptionsModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex animated fadeIn faster">

            <!-- Begin modal -->
            <div class="relative w-auto my-6 mx-auto 2xl:w-2/4 xl:w-3/5">
                <div class="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    <!-- Begin modal header -->
                    <div class="flex p-2 rounded-t">
                        <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleDeliveryOptionsModal()">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <!-- End modal header -->

                    <!-- Begin modal body -->
                    <div class="relative px-4 mt-4 flex-auto">
                        <div class="">
                            <h2 class="font-bold mb-3 border-b pb-3">Delivery Options</h2>

                            <table class="table ps-table text-sm my-5">
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td class="py-3">Delivery Time</td>
                                        <td>Fee</td>
                                        <td>Carrier</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(option, index) in deliveryFees.fees" :key="option.resource_id">
                                        <td class="w-5"><input @click="selectDeliveryOption( index )" class="cursor-pointer" name="new1" type="radio"></td>
                                        <td class="">{{ option.attributes.delivery_time }}</td>
                                        <td class="">{{ option.attributes.fee }}</td>
                                        <td class="">{{ option.attributes.carrier }}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <!-- End modal body -->

                    <!-- Begin action buttons -->
                    <div class="flex m-4 justify-end">
                        <button v-on:click="toggleDeliveryOptionsModal()" class="inline-flex justify-center rounded shadow-sm px-10 py-1 bg-red-600 font-medium text-sm text-white hover:bg-red-700 focus:outline-none">Apply</button>
                    </div>
                    <!-- End action buttons -->

                </div>
            </div>
            <!-- End modal -->

        </div>
        <div v-if="modal.showDeliveryOptionsModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
    <!-- End deliverOptions modal -->

</template>

<script>
    import { inject, onBeforeMount, reactive } from "vue";

    import router from "../../../router";
    import axios from "axios";
    import { useRoute } from 'vue-router'

    import { Notyf } from "notyf";
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import SwiperCore, { Autoplay, Navigation } from "swiper";
    import 'swiper/swiper.scss';
    SwiperCore.use( [ Autoplay, Navigation ] );

    export default
    {
        name: "MainContents",
        components: { Swiper, SwiperSlide },

        setup()
        {
            const notification = new Notyf();
            const authentication = inject( 'authentication' );
            const route = useRoute()

            const modal = reactive({ showSignInModal: false, showAddToCartModal: false, showDeliveryOptionsModal: false, message: "" })
            const tabs = reactive({ openTab: 1 })

            const product = reactive({ item: [], currentImage: null })
            const pricing = reactive({ priced: '', data: [], selected: [] })
            const rating = reactive({ stats: 0, rating: [], rating_percentage: [] })
            const store = reactive({ store: [], categories: [], stats: [], rating: [] })
            const brand = reactive({ brand: [] })
            const specifications = reactive({ specifications: [] })
            const images = reactive({ images: [] })
            const colors = reactive({ colors: [] })
            const sizes = reactive({ sizes: [] })
            const bundles = reactive({ bundles: [] })
            const overviews = reactive({ overviews: [] })
            const reviews = reactive({ reviews: [] })
            const faqs = reactive({ faqs: [] })
            const promotions = reactive({ promotions: [] })

            const wishlist = reactive({ resource: "", wishlist_count: 0, status: false, isLoading: false })
            const follows = reactive({ status: 'Follow', isLoading: false })
            const deliveryFees = reactive({ fees: [], current: [] })
            const storeItems = reactive({ items: [] })
            const storeRecommendations = reactive({ items: [] })
            const recommendations = reactive({ items: [] })

            const orderData = reactive({ quantity: 1, product_id: "", color_id: "", size_id: "", bundle_id: "", delivery_method_id: null, colorValue: null, sizeValue: null, bundleValue: null, colorActive: null, sizeActive: null, bundleActive: null, orderLoading: false, cartLoading: false })
            const loginData = reactive({ email: "", password: "", afterLoginAction: null, isLoading: false })

            const makeOrder = () =>
            {
                orderData.orderLoading = true
                if ( validateQuantity() && validateColor() && validateSize() && validateBundle() )
                {
                    if ( authentication.isAuthenticated() )
                    {
                        axios({ method: 'POST', url: 'customers/' + authentication.state.user.resource_id + '/orders', headers: { 'Authorization': 'Bearer ' + authentication.state.token }, data: { data: { type: 'Order', attributes: { product_id: product.item.resource_id, quantity: orderData.quantity, color_id: orderData.color_id, size_id: orderData.size_id, bundle_id: orderData.bundle_id, delivery_method_id: deliveryFees.current.resource_id }}}})
                        .then( response =>
                        {
                            if ( response.data.code === 201 )
                            {
                                orderData.orderLoading = false
                                router.push({ name: 'OrderConfirmation', params: { order_id: response.data.data.attributes.resource_id }});
                            }
                            else
                            {
                                orderData.orderLoading = false
                                console.log( response.data );
                            }
                        })
                        .catch( error =>
                        {
                            console.log( error.response )
                            orderData.orderLoading = false
                        })
                    }
                    else
                    {
                        toggleSignInModal()
                        loginData.afterLoginAction = makeOrder
                    }
                }
                else
                {
                    orderData.orderLoading = false
                    notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Please provide the missing information first</p>', duration: 5000, ripple: false, dismissible: true })
                }
            }
            const addToCart = () =>
            {
                orderData.cartLoading = true
                if ( validateQuantity() && validateColor() && validateSize() && validateBundle() )
                {
                    if ( authentication.isAuthenticated() )
                    {
                        axios({ method: 'POST', url: 'customers/' + authentication.state.user.resource_id + '/carts', headers: { 'Authorization': 'Bearer ' + authentication.state.token }, data: { data: { type: 'Cart', attributes: { product_id: product.item.resource_id, quantity: orderData.quantity, color_id: orderData.color_id, size_id: orderData.size_id, bundle_id: orderData.bundle_id }}}})
                        .then( response =>
                        {
                            if ( response.data.code === 201 )
                            {
                                orderData.cartLoading = false
                                modal.message = "A new item has been added to your Shopping Cart";
                                toggleAddToCartModal()
                            }
                            else if ( response.data.code === 401 )
                            {
                                orderData.cartLoading = false
                                toggleSignInModal()
                                loginData.afterLoginAction = addToCart
                            }
                            else
                            {
                                orderData.cartLoading = false
                            }
                        })
                        .catch( error => { error.response })
                    }
                    else
                    {
                        toggleSignInModal()
                        loginData.afterLoginAction = addToCart
                    }
                }
                else
                {
                    orderData.cartLoading = false
                    notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Please provide the missing information first</p>', duration: 5000, ripple: false, dismissible: true })
                }
            }
            const addToWishlist = () =>
            {
                wishlist.isLoading = true
                if ( authentication.isAuthenticated() )
                {
                    if ( wishlist.status === false )
                    {
                        axios({ method: 'POST', url: 'customers/' + authentication.state.user.resource_id + '/wishlists', headers: { 'Authorization': 'Bearer ' + authentication.state.token }, data: { data: { type: 'Wishlist', attributes: { product_id: product.item.resource_id }}}})
                            .then( response => { if ( response.data.code === 201 ) { wishlist.resource = response.data.data.attributes.resource_id; wishlist.status = true; wishlist.wishlist_count = wishlist.wishlist_count + 1; wishlist.isLoading = false; modal.message = "A new item has been added to your Wish List"; toggleAddToCartModal() } else { wishlist.isLoading = false } })
                    }
                    else
                    {
                        axios({ method: 'DELETE', url: 'customers/' + authentication.state.user.resource_id + '/wishlists/' + wishlist.resource, headers: { 'Authorization': 'Bearer ' + authentication.state.token }})
                            .then( response => { if ( response.data.code === 204 ) { wishlist.resource = ""; wishlist.status = false; wishlist.wishlist_count = wishlist.wishlist_count - 1; wishlist.isLoading = false } else { wishlist.isLoading = false }})
                    }
                }
                else { wishlist.isLoading = false; toggleSignInModal(); loginData.afterLoginAction = addToWishlist }
            }
            const followAction = () =>
            {
                follows.isLoading = true
                if ( authentication.isAuthenticated() )
                {
                    if ( follows.status === "Follow" )
                    {
                        axios({ method: 'POST', url: 'customers/' + authentication.state.user.resource_id + '/stores/' + store.store.resource_id + '/follow', headers: { 'Authorization': 'Bearer ' + authentication.state.token }})
                            .then( response => { if ( response.data.status === 'Success' ) { follows.isLoading = false; follows.status = "Following" } else { follows.isLoading = false; console.log( response.data ); }})
                    }
                    else
                    {
                        axios({ method: 'POST', url: 'customers/' + authentication.state.user.resource_id + '/stores/' + store.store.resource_id + '/unfollow', headers: { 'Authorization': 'Bearer ' + authentication.state.token }})
                            .then( response => { if ( response.data.status === 'Success' ) { follows.isLoading = false; follows.status = "Follow" } else { follows.isLoading = false; }})
                    }
                }
                else
                {
                    follows.isLoading = false
                    toggleSignInModal()
                    loginData.afterLoginAction = followAction
                }
            }

            const validateQuantity = () =>
            {
                return orderData.quantity > 0
            }
            const validateColor = () =>
            {
                if ( colors.colors.length <= 0 ){ return true }
                else if ( colors.colors.length > 0 && orderData.color_id !== "" ){ return true }
            }
            const validateSize = () =>
            {
                if ( sizes.sizes.length <= 0 ){ return true }
                else if ( sizes.sizes.length > 0 && orderData.size_id !== "" ){ return true }
            }
            const validateBundle = () =>
            {
                if ( bundles.bundles.length <= 0 ){ return true }
                else if ( bundles.bundles.length > 0 && orderData.bundle_id !== "" ){ return true }
            }

            const signIn = () =>
            {
                loginData.isLoading = true
                authentication.loginUser( loginData )
                .then(() =>
                {
                    toggleSignInModal()
                    loginData.afterLoginAction()
                })
                .catch(() =>
                {
                    loginData.isLoading = false;
                    notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Email or password is incorrect</p>', duration: 8000, ripple: false, dismissible: true })
                })
            }

            const chooseColor = ( color, id, resource_id ) =>
            {
                orderData.colorValue = color;
                orderData.colorActive = id;
                orderData.color_id = resource_id;

                if ( pricing.priced === 'Color' ){ pricing.selected = colors.colors[id]['attributes']}
            }
            const chooseSize = ( size, id, resource_id ) =>
            {
                orderData.sizeValue = size;
                orderData.sizeActive = id;
                orderData.size_id = resource_id;

                if ( pricing.priced === 'Size' ){ pricing.selected = sizes.sizes[id]['attributes']}
            }
            const chooseBundle = ( bundle, id, resource_id ) =>
            {
                orderData.bundleValue = bundle;
                orderData.bundleActive = id;
                orderData.bundle_id = resource_id;

                if ( pricing.priced === 'Bundle' ){ pricing.selected = bundles.bundles[id]['attributes'] }
            }
            const quantityCounter = ( operator ) =>
            {
                if ( operator === '+' ){ orderData.quantity = orderData.quantity +1 }
                else { orderData.quantity = orderData.quantity -1 }
            }
            const changeImage = ( image ) =>
            {
                product.currentImage = image
            }

            const toggleTabs = ( tabNumber ) =>
            {
                tabs.openTab = tabNumber
            }
            const toggleSignInModal = () =>
            {
                modal.showSignInModal = !modal.showSignInModal;
            }
            const toggleAddToCartModal = () =>
            {
                modal.showAddToCartModal = !modal.showAddToCartModal;
            }
            const toggleDeliveryOptionsModal = () =>
            {
                modal.showDeliveryOptionsModal = !modal.showDeliveryOptionsModal;
            }
            const selectDeliveryOption = ( option ) =>
            {
                deliveryFees.current = deliveryFees.fees[option]['attributes'];
            }

            onBeforeMount(() =>
            {
                axios({ method: 'GET', url: 'business/products/' + route.params.item + '?include=store.categories.subcategories,brand,specifications,images,overviews,colors,bundles,sizes,reviews,promotions,faqs&ratings=ratings', headers: {} })
                .then( response =>
                {
                    if ( response.data.code === 200 )
                    {
                        product.item = response.data.data.attributes;
                        store.store = response.data.data.include.store.attributes;
                        brand.brand = response.data.data.include.brand.attributes;
                        store.categories = response.data.data.include.store.include.categories;
                        specifications.specifications = response.data.data.include.specifications;
                        images.images = response.data.data.include.images;
                        colors.colors = response.data.data.include.colors;
                        sizes.sizes = response.data.data.include.sizes;
                        bundles.bundles = response.data.data.include.bundles;
                        overviews.overviews = response.data.data.include.overviews;
                        reviews.reviews = response.data.data.include.reviews;
                        promotions.promotions = response.data.data.include.promotions;
                        faqs.faqs = response.data.data.include.faqs;

                        wishlist.wishlist_count = response.data.data.wishlist;
                        product.currentImage = response.data.data.attributes.image;
                        pricing.priced = response.data.data.pricing.priced;
                        pricing.data = response.data.data.pricing.price_data[0];
                        if ( response.data.data.ratings.length > 0 )
                        {
                            rating.stats = response.data.data.ratings[0];
                            rating.rating = response.data.data.ratings[1].rating;
                            rating.rating_percentage = response.data.data.ratings[2].rating_percentage;
                        }
                        else
                        {
                            rating.stats = { average_rating: 0, total_rating: 0 }
                        }

                        // Get store stats
                        axios({ method: 'GET', url: 'business/stores/' + response.data.data.include.store.attributes.resource_id + '/stats' })
                            .then( response => { store.stats = response.data.data.attributes[0]; store.rating = response.data.data.ratings[0]; })
                            .catch( error => { console.log(error.response) })

                        // Get store items
                        axios({ method: 'GET', url: 'business/stores/' + response.data.data.include.store.attributes.resource_id + '/products' })
                            .then( response => { storeItems.items = response.data.data })
                            .catch( error => { console.log(error.response) })

                        // Get store recommendations
                        axios({ method: 'GET', url: 'business/stores/' + response.data.data.include.store.attributes.resource_id + '/products/' + response.data.data.attributes.resource_id  + '/recommendations' })
                            .then( response => { storeRecommendations.items = response.data.data })
                            .catch( error => { console.log( error.response ) })

                        // Get general recommendations
                        axios({ method: 'GET', url: 'business/products/' + response.data.data.attributes.resource_id  + '/recommendations', data: { type: "Product", attributes: { name: response.data.data.attributes.name } } })
                            .then( response => { recommendations.items = response.data.data })
                            .catch( error => { console.log(error.response) })

                        // Get delivery fees
                        axios({ method: 'GET', url: 'juaso/delivery-methods', headers: {}})
                            .then( response => { deliveryFees.fees = response.data.data; deliveryFees.current = response.data.data[0]['attributes'] })
                            .catch( error => { console.log(error.response) })

                        // Check follow
                        if ( authentication.isAuthenticated() )
                        {
                            axios({ method: 'GET', url: 'customers/' + authentication.state.user.resource_id + '/stores/' + response.data.data.include.store.attributes.resource_id, headers: { 'Authorization': 'Bearer ' + authentication.state.token }})
                                .then( response => { if ( response.data.code === 200 ) { follows.status = "Following" } else { follows.status = "Follow" }})
                                .catch( error => { console.log( error.response ); follows.loading = false })
                        }

                        // Check wishlist
                        if ( authentication.isAuthenticated() )
                        {
                            axios({ method: 'GET', url: 'customers/' + authentication.state.user.resource_id + '/wishlists/' + response.data.data.attributes.resource_id, headers: { 'Authorization': 'Bearer ' + authentication.state.token }})
                                .then( response => { if ( response.data.code === 200 ) { wishlist.resource = response.data.data.resource_id; wishlist.status = true }})
                        }
                    }
                    else
                    {
                        router.replace('/404')
                    }

                })
            })

            return { authentication, modal, tabs, product, wishlist, pricing, rating, brand, store, specifications, images, colors, sizes, bundles, overviews, reviews, promotions, faqs, storeRecommendations, recommendations, follows, deliveryFees, storeItems, orderData, loginData, toggleSignInModal, toggleAddToCartModal, toggleDeliveryOptionsModal, selectDeliveryOption, toggleTabs, changeImage, makeOrder, addToCart, addToWishlist, followAction, quantityCounter, chooseColor, chooseBundle, chooseSize, signIn }
        }
    }
</script>

<style lang="scss" scoped>
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }

    .custom-number-input input:focus { outline: none !important; }
    .custom-number-input button:focus { outline: none !important; }

    input[type=file]::file-selector-button { display: none; }
    input[type=file]::file-selector-button:hover { display: none; }

    .table-responsive>.table-bordered { border: 0; }
    .table-bordered { border: 1px solid #e5e7eb; }
    .table { width: 100%; background-color: transparent; }
    table { border-collapse: collapse; }
    table { display: table; box-sizing: border-box; text-indent: initial; border-spacing: 2px; border-color: #e5e7eb; }
    .ps-table thead > tr > th { font-family: "Work Sans", sans-serif; font-weight: 700; color: #515356; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
    .ps-table tbody > tr > td { vertical-align: middle; padding: 10px; border: 1px solid #e5e7eb; color: #666; }
    .ps-table--specification tbody tr td:first-child { background-color: #f4f4f4; font-weight: 500; color: #000; width: 200px; }

    .animated { -webkit-animation-duration: 1s; animation-duration: 1s; -webkit-animation-fill-mode: both; animation-fill-mode: both; }
    .animated.faster { -webkit-animation-duration: 500ms; animation-duration: 500ms; }
    .fadeIn { -webkit-animation-name: fadeIn; animation-name: fadeIn; }
    .fadeOut { -webkit-animation-name: fadeOut; animation-name: fadeOut; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; }}
    @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; }}
</style>