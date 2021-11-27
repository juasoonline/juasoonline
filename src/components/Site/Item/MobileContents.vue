<template>

    <!-- Begin contents -->
    <div class="">

        <!-- Begin image slider -->
        <div class="">
            <swiper :slides-per-view="1" :speed="1000" :loop="true" :autoplay="{ autoplay: true, delay: 5000 }" :pagination="{ clickable: true }">
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
                    <div class="sticky top-3 z-30 border-t">
                        <ul class="flex mb-0 list-none flex-wrap flex-row -mt-4">
                            <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer"><a class="text-sm font-bold px-3 py-4 block leading-normal border-b" @click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 1, 'text-gray-500 bg-gray-200': tabs.openTab === 1}">Overview</a></li>
                            <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer"><a class="text-sm font-bold px-3 py-4 block leading-normal border-b" @click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 2, 'text-gray-500 bg-gray-200': tabs.openTab === 2}">Reviews</a></li>
                            <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer"><a class="text-sm font-bold px-3 py-4 block leading-normal border-b" @click="toggleTabs(3)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 3, 'text-gray-500 bg-gray-200': tabs.openTab === 3}">Specifications</a></li>
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
                <span class="text-lg font-bold"><router-link :to="{ name: 'Store', params: { slug: store.store.resource_id }}">{{ store.store.name }}</router-link></span>
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
                <router-link :to="{ name: 'Store', params: { slug: store.store.resource_id }}" class="bg-red-600 text-white mr-3 text-xs py-1 px-4 border rounded-full border-red-600">Visit Store</router-link>
                <button class="text-red-600 text-xs py-1 px-4 border rounded-full border-red-600">Follow</button>
            </div>
            <!-- End call to action -->

            <!-- Begin recommendations header -->
            <div class="flex justify-between items-center mb-3">
                <h3 class="font-bold text-sm mb-1.5">Seller Recommendations</h3>
                <p class="text-xxs text-juaso-secondary"><router-link :to="{ name: 'Store', params: { slug: store.store.resource_id }}">View All Product</router-link></p>
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

        <!-- Begin bottom nav bar -->
        <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-40 bg-white shadow">
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
        <!-- End bottom nav bar -->

    </div>
    <!-- End contents -->

</template>

<script>
    import { inject, onBeforeMount, reactive } from "vue";

    import router from "../../../router";
    import axios from "axios";
    import { useRoute } from 'vue-router'

    import { Notyf } from "notyf";

    import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use( [ Navigation, Pagination, Autoplay ] );

    export default
    {
        name: "MobileContents",
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
                axios({ method: 'GET', url: 'business/products/' + route.params.item + '?include=store.categories.subcategories,brand,specifications,images,overviews,colors,bundles,sizes,reviews,faqs&ratings=ratings', headers: {} })
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

<style scoped>

</style>