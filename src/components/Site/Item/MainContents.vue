<template>

    <!-- Begin contents -->
    <main class="2xl:container xl:container lg:container 2xl:my-4 xl:my-4 lg:my-4 mx-auto">

        <!-- Begin contents for large screens -->
        <div class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">

            <!-- Begin item contents -->
            <section class="bg-white rounded">
                <div class="flex grid grid-cols-12">

                    <!-- Begin item images -->
                    <div class="col-span-4 p-4">
                        <div class="justify-center items-center border border-gray-100 rounded mb-2">
                            <img :src="product.currentImage" alt="" class="rounded">
                        </div>
                        <div class="flex justify-center items-center">
                            <a v-for="image in product.images" :key="image.attributes.resource_id" href="#" class="">
                                <img :src="image.attributes.image" alt="" class="rounded w-12 h-12 mx-2">
                            </a>
                        </div>
                    </div>
                    <!-- End item images -->

                    <!-- Begin item info -->
                    <div class="col-span-6 p-4">

                        <!-- Begin item name -->
                        <div class="text-xl text-gray-600 pb-3">
                            <h2 class="text-lg font-light leading-6 mb-3">{{ product.item.name }}</h2>
                            <div class="text-xs font-light mt-1">
                                <span class="mr-3 hover:text-red-500">
                                    <router-link :to="{ name: 'Store', params: { store: product.store.resource_id }}" class="inline-flex py-0.5 px-5 font-bold items-center border rounded text-xxxs text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">All Product {{ product.store.name }}</router-link>
                                </span>
                                <span class="mr-3 font-bold border-r pr-3">Brand: <a href="#" class="hover:text-red-500">{{ product.brand.name }}</a></span>
                                <span class="mr-3 hover:text-red-500"><a href="#">200 Reviews</a></span>
                                <span class="mr-3 hover:text-red-500"><a href="#">({{ product.item.total_sold }} Orders)</a></span>
                            </div>
                        </div>
                        <!-- End item name -->

                        <!-- Begin item price -->
                        <div class="flex text-center  text-gray-600 border-b border-t py-4 border-gray-100">
                            <span class="font-bold text-xl">
                                GHS {{ product.item.sales_price }}
                            </span>
                            <span class="text-gray-600 mx-3 text-xs py-1.5">
                                <del>GHS {{ product.item.price }}</del>
                            </span>
                            <span class="">
                                <p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">- {{ product.item.percentage_charge }}%</p>
                            </span>
                        </div>
                        <!-- End item price -->

                        <!-- Begin buying options -->
                        <div class="">

                            <!-- Begin color -->
                            <div class="mt-5">
                                <label class="w-full text-gray-700 text-xs font-semibold">Color:</label>
                                <div class="flex gap-2">
                                    <div v-for="color in product.colors" :key="color.attributes.resource_id" class="flex cursor-pointer">
                                        <img :alt="color.attributes.resource_id" class="w-12 rounded-md border border-gray-300 p-0.5 hover:border-red-500 active:shadow-md" :src="color.attributes.image" />
                                    </div>
                                </div>
                            </div>
                            <!-- End color -->

                            <!-- Begin size -->
                            <div class="mt-5">
                                <label class="w-full text-gray-700 text-xs font-semibold">Size:</label>
                                <div class="flex gap-2">
                                    <div v-for="size in product.sizes" :key="size.attributes.resource_id" class="flex cursor-pointer">
                                        <div class="w-10 text-center rounded-md border border-gray-300 py-1.5 hover:border-red-500 active:shadow-md">{{ size.attributes.size }}</div>
                                    </div>
                                </div>
                            </div>
                            <!-- End size -->

                            <!-- Begin quantity -->
                            <div class="mt-5">
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
                                        <span class="text-gray-400 text-xs">{{ product.item.quantity }} pieces available</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End quantity -->

                            <!-- Begin delivery info -->
                            <div class="mt-5">
                                <p class="font-bold text-sm">Shipping: GHS 130.21</p>
                                <p class="text-sm text-gray-400">nationwide Delivery via Juasoonline Delivery</p>
                                <p class="text-xs mt-0.5 text-gray-400">Estimated Delivery: 7-15 days</p>
                            </div>
                            <!-- End delivery info -->

                        </div>
                        <!-- End buying options -->

                        <!-- Begin action button -->
                        <div class="flex inline-block mt-5">
                            <button type="button" class="inline-flex focus:outline-none items-center px-16 py-2 border border-transparent rounded shadow-sm text-sm 2xl:font-bold text-white bg-red-500 hover:bg-red-400">Buy Now</button>
                            <button type="button" class="inline-flex focus:outline-none items-center px-16 py-2 border border-transparent rounded shadow-sm text-sm 2xl:font-bold text-white bg-yellow-400 hover:bg-yellow-300 mx-3">Add to Cart</button>
                            <button type="button" class="inline-flex focus:outline-none items-center px-5 py-2 border border rounded text-sm font-medium text-gray-500 bg-white-600">
                                <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                12.10K
                            </button>
                        </div>
                        <!-- End action button -->

                    </div>
                    <!-- End item info -->

                    <!-- Begin buy info -->
                    <div class="col-span-2 p-4 justify-center">

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
            </section>
            <!-- End item contents -->

            <!-- Begin store banner -->
            <section class="my-4">
                <div class="rounded"><router-link to="/store/1234567890" class="focus:outline-none"><img :src="items.storeBanner" alt="" class="rounded"></router-link></div>
            </section>
            <!-- End store banner -->

            <!-- Begin item review and specifications -->
            <section class="flex grid grid-cols-6 gap-5 my-4">

                <!-- Begin left contents -->
                <aside class="rounded col-span-1">

                    <!-- Begin store category -->
                    <div class="bg-white rounded px-4 py-4 mb-5">
                        <div class="flex justify-start">
                            <svg class="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                            <span class="text-sm font-bold">Store Categories</span>
                        </div>
                        <div class="py-3 text-xs">
                            Details coming soon
                        </div>
                    </div>
                    <!-- End store category -->

                    <!-- Begin recommended for you -->
                    <div class="bg-white rounded px-4 py-4 mb-5">
                        <div class="flex justify-start">
                            <span class="text-sm font-bold">Recommended For You</span>
                        </div>
                        <div class="py-3">
                            <div v-for="image in 3" :key="image" class="max-w-xs mb-5">
                                <img class="w-full rounded border" src="https://ae04.alicdn.com/kf/Haa44037b656241c3b639917f9aa82f34Z.jpg_480x480q90.jpg_.webp" alt="Sunset in the mountains">
                                <div class="font-bold text-sm mt-1.5">GHS 234.00</div>
                                <div class="flex text-xs justify-between text-gray-400">
                                    <p class="inline-block text-grey-darker">Photography</p>
                                    <p class="inline-block text-grey-darker">234 Sold</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End recommended for you -->

                </aside>
                <!-- End left contents -->

                <!-- Begin right contents -->
                <div class="col-span-5">

                    <!-- Begin item detailed info -->
                    <div class="bg-white rounded mb-5">
                        <div class="flex flex-wrap">
                            <div class="w-full">

                                <!-- Begin tab menu -->
                                <div class="rounded">
                                    <ul class="flex mb-0 list-none flex-wrap flex-row">
                                        <li class="-mb-px last:mr-0 cursor-pointer"><a class="text-sm px-5 py-2 block leading-normal font-bold border-b" @click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white rounded-tl': tabs.openTab !== 1, 'text-gray-500 bg-gray-200 rounded-tl': tabs.openTab === 1}">Product Overview</a></li>
                                        <li class="-mb-px last:mr-0 cursor-pointer"><a class="text-sm px-5 py-2 block leading-normal font-bold border-b" @click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 2, 'text-gray-500 bg-gray-200': tabs.openTab === 2}">Customer(s) Reviews</a></li>
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
                                                <div v-for="overview in product.overviews" :key="overview.attributes.resource_id" class="flex items-center justify-center py-5">
                                                    <div class="flex flex-col bg-white items-center">
                                                        <h3 class="font-serif font-bold text-gray-900 text-2xl">{{ overview.attributes.title }}</h3>
                                                        <p class="text-center leading-relaxed py-4">{{ overview.attributes.description }}</p>
                                                        <img class="rounded w-full" :src="overview.attributes.image" alt="motivation" />
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End overview -->

                                            <!-- Begin customers review -->
                                            <div v-bind:class="{ 'hidden': tabs.openTab !== 2, 'block': tabs.openTab === 2 }">
                                                <div v-for="review in product.reviews" :key="review" class="flex mb-3">
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
                                                        <tr v-for="specification in product.specifications" :key="specification.attributes.resource_id">
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

                    <!-- Begin related items -->
                    <div class="rounded mb-5">

                        <!-- Begin title -->
                        <div class="flex items-center justify-between">
                            <h3 class="font-bold text-lg text-gray-600">Related Items</h3>
                            <router-link to="">
                                <p class="flex items-center text-xs text-gray-600 hover:text-juaso-primary">View More <span><svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span></p>
                            </router-link>
                        </div>
                        <!-- End title -->

                        <!-- Begin items -->
                        <div class="grid grid-cols-6 gap-4">
                            <div v-for="item in items.items" :key="item.resource_id" class="card bg-white rounded overflow-hidden shadow-md mt-2 hover:shadow-2xl">
                                <router-link class="w-full object-cover" to="/item/975858275"><img v-bind:src="item.image" :alt="item.name"></router-link>
                                <div class="m-5">
                                    <span class="text-gray-500 text-xs hover:text-red-500"><router-link class="w-full object-cover" to="/item/975858275">{{ item.name }}...</router-link></span>
                                    <p class="font-bold block text-xs my-0.5"><router-link class="w-full object-cover hover:text-red-500" to="/item/975858275">GHS {{ item.sales_price }} <span class="ml-2 text-xs font-light text-gray-500">{{ item.total_sold }} Sold</span></router-link></p>
                                    <span class="block text-gray-500 text-xxs"></span>
                                </div>
                            </div>
                        </div>
                        <!-- End items -->

                    </div>
                    <!-- Begin related items -->
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
                    <swiper-slide v-for="image in product.images" :key="image.attributes.resource_id">
                        <div class="swiper-container"><img :src="image.attributes.image" :alt="image.attributes.description"></div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- Begin image slider -->

            <!-- Begin product name and price -->
            <div class="bg-white p-2">
                <div class="border-b pb-2.5">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-2xl">GHS {{ product.item.sales_price }}</span>
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>
                    <p class="text-sm mt-2">{{ product.item.name }}</p>
                    <span class="block text-gray-500 text-xs flex items-center mt-2">
                        <svg class="w-3.5 h-3.5 text-red-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                        4.9 | {{ product.item.total_sold }} Sold
                    </span>
                </div>
            </div>
            <!-- End product name and price -->

            <!-- Begin delivery info -->
            <div class="bg-white p-2 mb-3">
                <p class="font-bold text-sm">Shipping: GHS 30.21</p>
                <p class="text-sm text-gray-400">Nationwide Delivery via Juasoonline Delivery</p>
                <p class="text-xs mt-0.5 text-gray-400">Estimated Delivery: 7-15 days</p>
            </div>
            <!-- End delivery info -->

            <!-- Begin color -->
            <div class="bg-white px-2 pt-1 pb-3 mb-3">
                <label class="w-full text-gray-700 text-sm">Color:</label>
                <div class="flex gap-2 grid grid-cols-6">
                    <div v-for="color in product.colors" :key="color.attributes.resource_id" class="flex cursor-pointer">
                        <img :src="color.attributes.image" alt="mountain" class="w-12 rounded-md border border-gray-300 p-0.5 hover:border-red-500 active:shadow-md" />
                    </div>
                </div>
            </div>
            <!-- End color -->

            <!-- Begin size -->
            <div class="bg-white px-2 pt-1 pb-3 mb-3">
                <label class="w-full text-gray-700 text-xs font-semibold">Size:</label>
                <div class="flex gap-2 grid grid-cols-6">
                    <div v-for="size in product.sizes" :key="size.attributes.resource_id" class="flex cursor-pointer">
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
                                      <div v-for="overview in product.overviews" :key="overview.attributes.resource_id" class="flex items-center justify-center py-2">
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
                                              <tr v-for="specification in product.specifications" :key="specification.attributes.resource_id">
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
                    <span class="text-lg font-bold"><router-link :to="{ name: 'Store', params: { store: product.store.resource_id }}">{{ product.store.name }}</router-link></span>
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
                    <router-link :to="{ name: 'Store', params: { store: product.store.resource_id }}" class="bg-red-600 text-white mr-3 text-xs py-1 px-4 border rounded-full border-red-600">Go to store</router-link>
                    <button class="text-red-600 text-xs py-1 px-4 border rounded-full border-red-600">Follow</button>
                </div>
                <!-- End call to action -->

                <!-- Begin recommendations header -->
                <div class="flex justify-between items-center mb-3">
                    <h3 class="font-bold text-sm mb-1.5">Seller Recommendations</h3>
                    <p class="text-xxs text-juaso-secondary"><router-link :to="{ name: 'Store', params: { store: product.store.resource_id }}">View All Product</router-link></p>
                </div>
                <!-- End recommendations header -->

                <!-- Begin items list -->
                <div class="grid 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-2 sm:gap-2 xs:gap-1 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3">
                    <div v-for="item in items.items" :key="item.resource_id" class="card bg-white rounded overflow-hidden">
                        <router-link class="text-center" :to="{ name: 'Item', params: { item: item.resource_id }}">
                            <img v-bind:src="item.image" :alt="item.name" class="object-cover h-16 w-16 text-center mx-auto">
                        </router-link>
                        <div class="m-3 text-center">
                            <p class="font-bold block text-xxs my-0.5">
                                <router-link class="w-full object-cover hover:text-red-500" :to="{ name: 'Item', params: { item: item.resource_id }}">GHS {{ item.sales_price }}</router-link>
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
                <div class="grid 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-2 sm:gap-2 xs:gap-1 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
                    <div v-for="item in items.items" :key="item.resource_id" class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                        <router-link class="w-full object-cover" to="/item/975858275"><img v-bind:src="item.image" :alt="item.name"></router-link>
                        <div class="m-5">
                            <p class="text-gray-500 text-xs hover:text-red-500"><router-link class="w-full object-cover" to="/item/975858275">{{ item.name }}</router-link></p>
                            <p class="font-bold block text-xs my-0.5"><router-link class="w-full object-cover hover:text-red-500" to="/item/975858275">GHS {{ item.sales_price }}</router-link></p>
                            <span class="block text-gray-500 text-xxs flex items-center">
                                <svg class="w-3 h-3 text-red-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                4.9 | {{ item.total_sold }} Sold
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

    </main>
    <!-- End contents -->

</template>

<script>
    import { onBeforeMount, reactive} from "vue";

    import axios from "axios";
    import { useRoute } from 'vue-router'

    import { Swiper, SwiperSlide } from 'swiper/vue'
    import SwiperCore, { Autoplay, Navigation } from "swiper";
    SwiperCore.use( [ Autoplay, Navigation ] );
    import 'swiper/swiper.scss';


    export default
    {
        name: "MainContents",
        components: { Swiper, SwiperSlide },

        setup()
        {
            const route = useRoute()
            const tabs = reactive({ openTab: 1 } )
            const toggleTabs = ( tabNumber ) => { tabs.openTab = tabNumber }

            const product = reactive({ item: [], store: [], brand: [], specifications: [], images: [], overviews: [], colors: [], sizes: [], reviews: [], promotions: [], currentImage: null })
            const sellerRecommendation = reactive({ items: [{ resource_id: 10000000, image: "../assets/images/products/details/1.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "230",  }, { resource_id: 20000000, image: "../assets/images/products/details/2.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  }, { resource_id: 30000000, image: "../assets/images/products/details/3.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  }, { resource_id: 40000000, image: "../assets/images/products/details/4.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  }, { resource_id: 50000000, image: "../assets/images/products/details/5.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  }, { resource_id: 60000000, image: "../assets/images/products/details/6.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230" }], storeBanner: "../assets/images/ads/store/banner1.jpg",});
            const items = reactive({ items: [{ resource_id: 10000000, image: "../assets/images/products/details/1.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "230",  }, { resource_id: 20000000, image: "../assets/images/products/details/2.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  }, { resource_id: 30000000, image: "../assets/images/products/details/3.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  }, { resource_id: 40000000, image: "../assets/images/products/details/4.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  }, { resource_id: 50000000, image: "../assets/images/products/details/5.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  }, { resource_id: 60000000, image: "../assets/images/products/details/6.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230" }], storeBanner: "../assets/images/ads/store/banner1.jpg",});

            onBeforeMount(() =>
            {
                axios({ method: 'GET', url: 'product/' + route.params.item + '?include=store,brand,charge,specifications,images,overviews,colors,sizes,reviews,promotions', headers: {} })
                    .then( response =>
                    {
                        product.item = response.data.data.attributes;
                        product.store = response.data.data.include.store.attributes;
                        product.brand = response.data.data.include.brand.attributes;
                        product.colors = response.data.data.include.colors;
                        product.sizes = response.data.data.include.sizes;
                        product.images = response.data.data.include.images;
                        product.overviews = response.data.data.include.overviews;
                        product.specifications = response.data.data.include.specifications;
                        product.reviews = response.data.data.include.reviews;

                        product.currentImage = response.data.data.include.images[2].attributes.image;
                    })
                    .catch( error => { error.response })
            })

            return { tabs, toggleTabs, product, items, sellerRecommendation }
        },
    }
</script>

<style lang="scss" scoped>

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }

    .custom-number-input input:focus { outline: none !important; }
    .custom-number-input button:focus { outline: none !important; }

    input[type=file]::file-selector-button { display: none; }
    input[type=file]::file-selector-button:hover { display: none; }

    // Table Styles
    .table-responsive>.table-bordered { border: 0; }
    .table-bordered { border: 1px solid #e5e7eb; }
    .table { width: 100%; background-color: transparent; }
    table { border-collapse: collapse; }
    table { display: table; box-sizing: border-box; text-indent: initial; border-spacing: 2px; border-color: #e5e7eb; }
    .ps-table thead > tr > th { font-family: "Work Sans", sans-serif; font-weight: 700; color: #515356; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
    .ps-table tbody > tr > td { vertical-align: middle; padding: 10px; border: 1px solid #e5e7eb; color: #666; }
    .ps-table--specification tbody tr td:first-child { background-color: #f4f4f4; font-weight: 500; color: #000; width: 200px; }
</style>