<template>

    <!-- Begin contents -->
    <main class="container mx-auto my-4">

        <!-- Begin contents for large screens -->
        <section class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">
            <div class="container mx-auto">
                <div class="flex grid grid-cols-12 gap-4">

                    <!-- Begin left contents -->
                    <div class="col-span-2">
                        <div class="sticky inset-x-0 top-20 left-0">

                            <!-- Begin nav bar -->
                            <div class="bg-white border">
                                <div class="p-2 text-xs font-bold bg-gray-100">Account Settings</div>
                                <ul class="list-reset">
                                    <li><router-link to="edit-profile" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Edit Member Profile</router-link></li>
                                    <li><router-link to="change-email" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Change Email</router-link></li>
                                    <li><router-link to="change-password" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Change Password</router-link></li>
                                    <li><router-link to="edit-address" class="block p-2.5 text-xs text-grey-darker hover:bg-juaso-extra hover:text-white">Edit Addresses</router-link></li>
                                </ul>
                            </div>
                            <!-- End nav bar -->

                        </div>
                    </div>
                    <!-- End left contents -->

                    <!-- Begin right contents -->
                    <div class="col-span-10 border bg-white">
                        <div class="">

                            <!-- Begin page title -->
                            <div class="p-4 border-b text-lg font-semibold">Wishlist</div>
                            <!-- End page title -->

                            <!-- Begin main contents -->
                            <div class="p-4">

                                <!-- Begin wishlists -->
                                <div class="flex justify-between mb-6 border-b pb-6">
                                    <div class="w-2/12">
                                        <div class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                                            <router-link class="w-full object-cover" to="">
                                                <img class="object-cover w-full" src="https://juasoonline.nyc3.digitaloceanspaces.com/test/images/products/product19_1.jpg">
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="w-full mx-6">
                                        <div class="">
                                            <p class="text-sm">World Premiere In Stock realme GT Master Edition Snapdragon 778G Smartphone 120Hz AMOLED 65W SuperDart Charge Russian Version</p>
                                        </div>
                                        <div class="">
                                            <h3 class="text-lg text-red-400 font-bold my-1">GHS 1,936.40 - GHS 2,391.66</h3>
                                        </div>
                                        <div class="">
                                            <p class="text-sm text-gray-400 my-1"><del>GHS 3,227.35 - GHS 3,986.12</del></p>
                                        </div>
                                        <div class="">
                                            <p class="text-xs text-gray-400 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
                                            </svg>
                                            Buy now and save GHS 5,469.26
                                        </p>
                                        </div>
                                        <div class="text-xs text-gray-400 flex items-center mt-2">
                                            <p class="flex inline-block text-grey-darker items-center mr-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                                <span>4.4</span>
                                            </p>
                                            <span>Orders (3661)</span>
                                        </div>
                                        <div class="flex mt-3">
                                            <p class="flex items-center mt-1 mr-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                                <span class="text-sm">Realme Official Store</span>
                                            </p>
                                            <p class="flex items-center mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                                <span class="text-sm">Contact Seller</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-2/5 text-right">
                                        <div><p class="text-gray-600 text-xs mb-2">Added 24 September 2021</p></div>
                                        <div><p class="text-blue-600 text-xs mb-2">Delete</p></div>
                                        <div><p class="text-blue-600 text-xs mb-2">Find similar products</p></div>
                                    </div>
                                </div>
                                <div class="flex justify-between mb-6 border-b pb-6">
                                    <div class="w-2/12">
                                        <div class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                                            <router-link class="w-full object-cover" to="">
                                                <img class="object-cover w-full" src="https://juasoonline.nyc3.digitaloceanspaces.com/test/images/products/product19_1.jpg">
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="w-full mx-6">
                                        <div class="">
                                            <p class="text-sm">World Premiere In Stock realme GT Master Edition Snapdragon 778G Smartphone 120Hz AMOLED 65W SuperDart Charge Russian Version</p>
                                        </div>
                                        <div class="">
                                            <h3 class="text-lg text-red-400 font-bold my-1">GHS 1,936.40 - GHS 2,391.66</h3>
                                        </div>
                                        <div class="">
                                            <p class="text-sm text-gray-400 my-1"><del>GHS 3,227.35 - GHS 3,986.12</del></p>
                                        </div>
                                        <div class="">
                                            <p class="text-xs text-gray-400 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
                                            </svg>
                                            Buy now and save GHS 5,469.26
                                        </p>
                                        </div>
                                        <div class="text-xs text-gray-400 flex items-center mt-2">
                                            <p class="flex inline-block text-grey-darker items-center mr-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                                <span>4.4</span>
                                            </p>
                                            <span>Orders (3661)</span>
                                        </div>
                                        <div class="flex mt-3">
                                            <p class="flex items-center mt-1 mr-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                                <span class="text-sm">Realme Official Store</span>
                                            </p>
                                            <p class="flex items-center mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                                <span class="text-sm">Contact Seller</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-2/5 text-right">
                                        <div><p class="text-gray-600 text-xs mb-2">Added 24 September 2021</p></div>
                                        <div><p class="text-blue-600 text-xs mb-2">Delete</p></div>
                                        <div><p class="text-blue-600 text-xs mb-2">Find similar products</p></div>
                                    </div>
                                </div>
                                <div class="flex justify-between mb-6 border-b pb-6">
                                    <div class="w-2/12">
                                        <div class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                                            <router-link class="w-full object-cover" to="">
                                                <img class="object-cover w-full" src="https://juasoonline.nyc3.digitaloceanspaces.com/test/images/products/product19_1.jpg">
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="w-full mx-6">
                                        <div class="">
                                            <p class="text-sm">World Premiere In Stock realme GT Master Edition Snapdragon 778G Smartphone 120Hz AMOLED 65W SuperDart Charge Russian Version</p>
                                        </div>
                                        <div class="">
                                            <h3 class="text-lg text-red-400 font-bold my-1">GHS 1,936.40 - GHS 2,391.66</h3>
                                        </div>
                                        <div class="">
                                            <p class="text-sm text-gray-400 my-1"><del>GHS 3,227.35 - GHS 3,986.12</del></p>
                                        </div>
                                        <div class="">
                                            <p class="text-xs text-gray-400 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
                                            </svg>
                                            Buy now and save GHS 5,469.26
                                        </p>
                                        </div>
                                        <div class="text-xs text-gray-400 flex items-center mt-2">
                                            <p class="flex inline-block text-grey-darker items-center mr-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                                <span>4.4</span>
                                            </p>
                                            <span>Orders (3661)</span>
                                        </div>
                                        <div class="flex mt-3">
                                            <p class="flex items-center mt-1 mr-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                                <span class="text-sm">Realme Official Store</span>
                                            </p>
                                            <p class="flex items-center mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                                <span class="text-sm">Contact Seller</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-2/5 text-right">
                                        <div><p class="text-gray-600 text-xs mb-2">Added 24 September 2021</p></div>
                                        <div><p class="text-blue-600 text-xs mb-2">Delete</p></div>
                                        <div><p class="text-blue-600 text-xs mb-2">Find similar products</p></div>
                                    </div>
                                </div>
                                <div class="flex justify-between mb-6 border-b pb-6">
                                    <div class="w-2/12">
                                        <div class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                                            <router-link class="w-full object-cover" to="">
                                                <img class="object-cover w-full" src="https://juasoonline.nyc3.digitaloceanspaces.com/test/images/products/product19_1.jpg">
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="w-full mx-6">
                                        <div class="">
                                            <p class="text-sm">World Premiere In Stock realme GT Master Edition Snapdragon 778G Smartphone 120Hz AMOLED 65W SuperDart Charge Russian Version</p>
                                        </div>
                                        <div class="">
                                            <h3 class="text-lg text-red-400 font-bold my-1">GHS 1,936.40 - GHS 2,391.66</h3>
                                        </div>
                                        <div class="">
                                            <p class="text-sm text-gray-400 my-1"><del>GHS 3,227.35 - GHS 3,986.12</del></p>
                                        </div>
                                        <div class="">
                                            <p class="text-xs text-gray-400 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
                                            </svg>
                                            Buy now and save GHS 5,469.26
                                        </p>
                                        </div>
                                        <div class="text-xs text-gray-400 flex items-center mt-2">
                                            <p class="flex inline-block text-grey-darker items-center mr-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                                <span>4.4</span>
                                            </p>
                                            <span>Orders (3661)</span>
                                        </div>
                                        <div class="flex mt-3">
                                            <p class="flex items-center mt-1 mr-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                                <span class="text-sm">Realme Official Store</span>
                                            </p>
                                            <p class="flex items-center mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                                <span class="text-sm">Contact Seller</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-2/5 text-right">
                                        <div><p class="text-gray-600 text-xs mb-2">Added 24 September 2021</p></div>
                                        <div><p class="text-blue-600 text-xs mb-2">Delete</p></div>
                                        <div><p class="text-blue-600 text-xs mb-2">Find similar products</p></div>
                                    </div>
                                </div>
                                <div class="flex justify-between mb-6 border-b pb-6">
                                    <div class="w-2/12">
                                        <div class="card bg-white rounded overflow-hidden shadow-md hover:shadow-2xl">
                                            <router-link class="w-full object-cover" to="">
                                                <img class="object-cover w-full" src="https://juasoonline.nyc3.digitaloceanspaces.com/test/images/products/product19_1.jpg">
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="w-full mx-6">
                                        <div class="">
                                            <p class="text-sm">World Premiere In Stock realme GT Master Edition Snapdragon 778G Smartphone 120Hz AMOLED 65W SuperDart Charge Russian Version</p>
                                        </div>
                                        <div class="">
                                            <h3 class="text-lg text-red-400 font-bold my-1">GHS 1,936.40 - GHS 2,391.66</h3>
                                        </div>
                                        <div class="">
                                            <p class="text-sm text-gray-400 my-1"><del>GHS 3,227.35 - GHS 3,986.12</del></p>
                                        </div>
                                        <div class="">
                                            <p class="text-xs text-gray-400 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
                                            </svg>
                                            Buy now and save GHS 5,469.26
                                        </p>
                                        </div>
                                        <div class="text-xs text-gray-400 flex items-center mt-2">
                                            <p class="flex inline-block text-grey-darker items-center mr-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                                <span>4.4</span>
                                            </p>
                                            <span>Orders (3661)</span>
                                        </div>
                                        <div class="flex mt-3">
                                            <p class="flex items-center mt-1 mr-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                                <span class="text-sm">Realme Official Store</span>
                                            </p>
                                            <p class="flex items-center mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                                <span class="text-sm">Contact Seller</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="w-2/5 text-right">
                                        <div><p class="text-gray-600 text-xs mb-2">Added 24 September 2021</p></div>
                                        <div><p class="text-blue-600 text-xs mb-2">Delete</p></div>
                                        <div><p class="text-blue-600 text-xs mb-2">Find similar products</p></div>
                                    </div>
                                </div>
                                <!-- End wishlists -->

                            </div>
                            <!-- End main contents -->

                        </div>
                    </div>
                    <!-- End right contents -->

                </div>
            </div>
        </section>
        <!-- End contents for large screens -->

    </main>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "MainContents"
    }
</script>

<style scoped>

</style>