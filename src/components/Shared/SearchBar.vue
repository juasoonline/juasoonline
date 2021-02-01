<template>

    <!-- Begin contents -->
    <div class="sticky top-0 z-40 flex bg-white shadow">
        <div class="container mx-auto hidden lg:block">
            <div class="flex flex-col grid gap-5 grid-cols-10 py-6">

                <!-- Begin logo --->
                <div class="flex col-span-2 justify-start">
                    <router-link to="/" class="p-0 flex">
                        <img src="@/assets/images/logo.png" alt="" class="w-8 py-1.5">
                        <span class="text-2xl font-bold ml-2.5 pt-1 text-gray-500">Juasoonline</span>
                    </router-link>
                </div>
                <!-- End logo --->

                <!-- Begin search form -->
                <div class="flex col-span-6 justify-center">
                    <div class="border rounded flex w-full items-center catSelect">
                        <label>
                            <select class="border-r text-xs minimal">
                                <option value="0">All Categories</option><option value="100003109">Women's Clothing</option><option value="100003070">Men's Clothing</option><option value="509">Cellphones &amp; Telecommunications</option><option value="7">Computer &amp; Office</option><option value="44">Consumer Electronics</option><option value="1509">Jewelry &amp; Accessories</option><option value="15">Home &amp; Garden</option><option value="1524">Luggage &amp; Bags</option><option value="322">Shoes</option><option value="1501">Mother &amp; Kids</option><option value="18">Sports &amp; Entertainment</option><option value="66">Beauty &amp; Health</option><option value="1511">Watches</option><option value="26">Toys &amp; Hobbies</option><option value="100003235">Weddings &amp; Events</option><option value="200000875">Novelty &amp; Special Use</option><option value="34">Automobiles &amp; Motorcycles</option><option value="39">Lights &amp; Lighting</option><option value="1503">Furniture</option><option value="502" data-spm-anchor-id="a2g0o.best.1000002.i4.530b2c25CzRtOV">Electronic Components &amp; Supplies</option><option value="21">Education &amp; Office Supplies</option><option value="6" data-spm-anchor-id="a2g0o.best.1000002.i3.530b2c25CzRtOV">Home Appliances</option><option value="13">Home Improvement</option><option value="2">Food</option><option value="30">Security &amp; Protection</option><option value="1420">Tools</option><option value="200002489">Hair Extensions &amp; Wigs</option><option value="205776616">Apparel Accessories</option><option value="205779615">Underwear &amp; Sleepwears</option><option value="205965401">Virtual Goods</option>
                            </select>
                        </label>
                        <label class="w-full"><input class="text-xs px-5 py-3 w-full" placeholder="What are you looking for?..."></label>
                        <button class="w-8 h-8 mx-1.5 block focus:outline-none">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- End search form -->

                <!-- Begin user shopping -->
                <div class="flex col-span-2 justify-end">
                    <ul class="userNav">
                        <li class="userLink">
                            <router-link to="/wishlist">
                                <svg class="w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </router-link>
                        </li>
                        <li class="userLink">
                            <router-link to="/cart">
                                <svg class="w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- Begin user shopping -->

            </div>
        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "SearchBar",
    }
</script>

<style scoped>
    select { display: inline-block; line-height: 1.5em; padding: 0.5em 3.5em 0.5em 1em; margin: 0; -webkit-appearance: none; -moz-appearance: none; }
    select.minimal { background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%); background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em; background-size: 5px 5px, 5px 5px, 1px 1.5em; background-repeat: no-repeat; }
    select.minimal:focus { background-image: linear-gradient(45deg, gray 50%, transparent 50%), linear-gradient(135deg, transparent 50%, gray 50%); background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em; background-size: 5px 5px, 5px 5px, 1px 1.5em; background-repeat: no-repeat; outline: 0; }
    select:-moz-focusring { color: transparent; text-shadow: 0 0 0 #000; }
    input:focus { background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em; background-size: 5px 5px, 5px 5px, 1px 1.5em; background-repeat: no-repeat; outline: 0; }
</style>