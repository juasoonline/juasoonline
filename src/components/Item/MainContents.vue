<template>

    <!-- Begin contents -->
    <main class="container mx-auto my-4">

        <!-- Begin item contents -->
        <section class="bg-white rounded">
            <div class="flex grid grid-cols-12">

                <!-- Begin item images -->
                <div class="col-span-4 p-4">
                    <div class="justify-center items-center border border-gray-100 rounded mb-2">
                        <img :src="items[1].image" alt="" class="rounded">
                    </div>
                    <div class="flex justify-center items-center rounded border border-gray-100">
                        <a v-for="image in items" :key="image.resource_id" href="#" class=""><img :src="image.image" alt="" class="rounded"></a>
                    </div>
                </div>
                <!-- End item images -->

                <!-- Begin item info -->
                <div class="col-span-6 p-4">

                    <!-- Begin item name -->
                    <div class="text-xl font-bold text-gray-600 pb-3">
                        <h2 class="text-2xl">Marshall Kilburn Portable Wireless Speaker</h2>
                        <div class="text-xs font-light mt-1">
                            <span class="mr-3 hover:text-red-500"><router-link to="/store/1234567890" class="inline-flex py-0.5 px-5 font-bold items-center border rounded text-xxxs text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">All Product KABFARMS</router-link></span>
                            <span class="mr-3 font-bold border-r pr-3">Brand: <a href="#" class="hover:text-red-500">Kodak</a></span>
                            <span class="mr-3 hover:text-red-500"><a href="#">200 Reviews</a></span>
                            <span class="mr-3 hover:text-red-500"><a href="#">(120 Orders)</a></span>
                        </div>
                    </div>
                    <!-- End item name -->

                    <!-- Begin item price -->
                    <div class="flex text-center  text-gray-600 border-b border-t py-4 border-gray-100">
                        <span class="font-bold text-xl">GHS 23,000</span>
                        <span class="text-gray-600 mx-3 text-xs py-1.5"><del>GHS 23,000</del></span>
                        <span class=""><p class="inline-flex py-0.5 px-3 font-bold items-center rounded text-xxxs bg-red-200 text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-15%</p></span>
                    </div>
                    <!-- End item price -->

                    <!-- Begin buying options -->
                    <div class="h-80"></div>
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
            <div class="rounded"><router-link to="/store/1234567890" class="focus:outline-none"><img :src="storeBanner" alt="" class="rounded"></router-link></div>
        </section>
        <!-- End store banner -->

        <!-- Begin item review and specifications -->
        <section class="flex grid grid-cols-6 gap-5 my-4">

            <!-- Begin left contents -->
            <aside class="bg-white rounded col-span-1">

                <!-- Begin category -->
                <div class="px-1 py-1">
                    <div class="flex justify-start p-2">
                        <svg class="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                        <span class="text-sm font-bold">Store Categories</span>
                    </div>
                </div>
                <!-- End category -->

            </aside>
            <!-- End left contents -->

            <!-- Begin right contents -->
            <div class="bg-white rounded col-span-5">
                <div class="pc-tab">

                    <!-- Begin table headers -->
                    <input checked="checked" id="tab1" type="radio" name="pct" />
                    <input id="tab2" type="radio" name="pct" />
                    <input id="tab3" type="radio" name="pct" />
                    <nav>
                        <ul>
                            <li class="tab1"><label for="tab1">Item Overview</label></li>
                            <li class="tab2"><label for="tab2">Customer Reviews (200)</label></li>
                            <li class="tab3"><label for="tab3">Specifications</label></li>
                        </ul>
                    </nav>
                    <!-- End table headers -->

                    <!-- Begin tab contents -->
                    <section class="">

                        <!-- Begin overview contents -->
                        <div class="tab1 rounded-b">
                            <div class="">
                                <p class="text-sm mb-3.5">The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed specifically for the creative professional, this display provides more space for easier access to all the tools and palettes needed to edit, format and composite your work. Combine this display with a Mac Pro, MacBook Pro, or PowerMac G5 and there's no limit to what you can achieve.</p>
                                <p class="text-sm mb-3.5">The Cinema HD features an active-matrix liquid crystal display that produces flicker-free images that deliver twice the brightness, twice the sharpness and twice the contrast ratio of a typical CRT display. Unlike other flat panels, it's designed with a pure digital interface to deliver distortion-free images that never need adjusting. With over 4 million digital pixels, the display is uniquely suited for scientific and technical applications such as visualizing molecular structures or analyzing geological data.</p>
                                <p class="text-sm mb-3.5">Offering accurate, brilliant color performance, the Cinema HD delivers up to 16.7 million colors across a wide gamut allowing you to see subtle nuances between colors from soft pastels to rich jewel tones. A wide viewing angle ensures uniform color from edge to edge. Apple's ColorSync technology allows you to create custom profiles to maintain consistent color onscreen and in print. The result: You can confidently use this display in all your color-critical applications.</p>
                                <p class="text-sm mb-3.5">Housed in a new aluminum design, the display has a very thin bezel that enhances visual accuracy. Each display features two FireWire 400 ports and two USB 2.0 ports, making attachment of desktop peripherals, such as iSight, iPod, digital and still cameras, hard drives, printers and scanners, even more accessible and convenient. Taking advantage of the much thinner and lighter footprint of an LCD, the new displays support the VESA (Video Electronics Standards Association) mounting interface standard. Customers with the optional Cinema Display VESA Mount Adapter kit gain the flexibility to mount their display in locations most appropriate for their work environment</p>
                                <p class="text-sm mb-3.5">The Cinema HD features a single cable design with elegant breakout for the USB 2.0, FireWire 400 and a pure digital connection using the industry standard Digital Video Interface (DVI) interface. The DVI connection allows for a direct pure-digital connection.</p>
                            </div>
                        </div>
                        <!-- End overview contents -->

                        <!-- Begin reviews contents -->
                        <div class="tab2 rounded-b">
                            <div class="">
                                <p class="text-sm mb-3.5">The Cinema HD features a single cable design with elegant breakout for the USB 2.0, FireWire 400 and a pure digital connection using the industry standard Digital Video Interface (DVI) interface. The DVI connection allows for a direct pure-digital connection.</p>
                            </div>
                        </div>
                        <!-- End reviews contents -->

                        <!-- Begin Specification contents -->
                        <div class="tab3 rounded-b">
                            <table class="table table-bordered ps-table ps-table--specification text-sm">
                                <tbody>
                                    <tr><td>Color</td><td>Black, Gray</td></tr>
                                    <tr><td>Style</td><td>Ear Hook</td></tr>
                                    <tr><td>Wireless</td><td>Yes</td></tr>
                                    <tr><td>Dimensions</td><td>5.5 x 5.5 x 9.5 inches</td></tr>
                                    <tr><td>Weight</td><td>6.61 pounds</td></tr>
                                    <tr><td>Battery Life</td><td>20 hours</td></tr>
                                    <tr><td>Bluetooth</td><td>Yes</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- Begin Specification contents -->

                    </section>
                    <!-- End tab contents -->

                </div>
            </div>
            <!-- End right contents -->

        </section>
        <!-- End item review and specifications -->

    </main>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "MainContents",
        data()
        {
            return {
                items: [
                    { resource_id: 10000000, image: "../assets/images/products/details/1.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "230",  },
                    { resource_id: 20000000, image: "../assets/images/products/details/2.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 30000000, image: "../assets/images/products/details/3.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 40000000, image: "../assets/images/products/details/4.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 50000000, image: "../assets/images/products/details/5.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                    { resource_id: 60000000, image: "../assets/images/products/details/6.jpg", sales_price: "23,000", product_price: "24,000", name: "CP4 Cannon 350 camera...", total_sold: "1,230",  },
                ],
                storeBanner: "../assets/images/adbanners/topads/banner-top.jpg",
            }
        }
    }
</script>

<style lang="scss" scoped>
    // Tabs styles
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
    .pc-tab > input, .pc-tab section > div { display: none; border-top: 1px solid #E3E3E3 }
    #tab1:checked ~ section .tab1, #tab2:checked ~ section .tab2, #tab3:checked ~ section .tab3 { display: block; }
    #tab1:checked ~ nav .tab1, #tab2:checked ~ nav .tab2, #tab3:checked ~ nav .tab3 { color: red; }
    *, *:after, *:before { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
    .pc-tab { width: 100%; margin: 0 auto; ul { list-style: none; margin: 0; padding: 0; li { label { font-family: "Nunito"; text-transform: uppercase; float: left; padding: 10px 20px; color: #444; font-size: 12px; font-weight: bolder;
    &:hover { cursor: pointer; color: red; }
    &:active { font-weight: bolder; color: red; border-bottom: #444444 solid 3px } }
    &:not(:last-child) label { border-right-width: 0; } } }
    section { font-family: "Nunito"; clear: both; div { padding: 10px; width: 100%; background: #fff; line-height: 1.5em; letter-spacing: 0.3px; color: #444; h2 { margin: 0; font-family: "Nunito"; letter-spacing: 1px; color: #34495e; } } } }
    #tab1:checked ~ nav .tab1, #tab2:checked ~ nav .tab2, #tab3:checked ~ nav .tab3 { label { background: white; color: #111; position: relative; &:after { content: ''; display: block; position: absolute; height: 2px; width: 100%; left: 0; bottom: -1px; } } }

    // Table Styles
    .table-responsive>.table-bordered { border: 0; }
    .table-bordered { border: 1px solid #e5e7eb; }
    .table { width: 98.5%; margin: 10px; background-color: transparent; }
    table { border-collapse: collapse; }
    table { display: table; box-sizing: border-box; text-indent: initial; border-spacing: 2px; border-color: #e5e7eb; }
    .ps-table thead > tr > th { font-family: "Work Sans", sans-serif; font-weight: 700; color: #515356; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
    .ps-table tbody > tr > td { vertical-align: middle; padding: 10px; border: 1px solid #e5e7eb; color: #666; }
    .ps-table--specification tbody tr td:first-child { background-color: #f4f4f4; font-weight: 500; color: #000; width: 200px; }

    // Review comments styles

</style>