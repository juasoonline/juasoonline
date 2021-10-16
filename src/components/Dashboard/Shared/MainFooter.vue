<template>

    <!-- Begin lower footer contents -->
    <footer class="2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden bg-juaso-primary">

        <!-- Begin company and site info -->
        <div class="container py-20 m-auto text-gray-800 flex flex-wrap flex-col grid gap-6 grid-cols-2">

            <!-- Begin policies contents -->
            <div class="text-gray-100">
                <h1 class="font-bold mb-2">Company / Users Policies</h1>
                <p class="text-sm text-gray-300">
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/user-agreement">User Agreement,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/privacy-policy">Privacy Policy,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/terms-and-conditions">Terms and Conditions,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/disputes-and-reports">Disputes and Reports,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/orders-returns">Orders and Returns,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/shipping">Shipping,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/payment-policies">Payment Policies,</router-link>
                </p>
            </div>
            <!-- End policies contents -->

            <!-- Begin about us -->
            <div class="text-gray-300">
                <h1 class="font-bold mb-2">About Juasoonline</h1>
                <p class="text-sm text-gray-300">Juasoonline offers its millions of registered users a comprehensive selection of the latest consumer electronics, entertainment, fashion, Jewel / Watches and many more products. Juasoonline is consistently ranked... <router-link to="/about-juasoonline" class="hover:text-gray-400 font-bold">Read more</router-link></p>
<!--                <p class="text-sm text-gray-500">Juasoonline offers its millions of registered users a comprehensive selection of the latest consumer electronics, entertainment, fashion, Jewel / Watches and many more products. Juasoonline is consistently ranked as one of the best online shopping destinations, and the company regularly earns industry-leading customer service ratings. Newegg is headquartered in City of Industry, California, with North American distribution facilities located throughout the United States and Canada.</p>-->
            </div>
            <!-- End about us -->

            <!-- Begin category -->
            <div class="text-gray-300">
                <h1 class="font-bold mb-2">Category</h1>
                <p class="text-sm text-gray-300">
                    <router-link v-for="Group in Groups" :key="Group.attributes.resource_id" class="hover:text-juaso-secondary mr-1.5" to="">{{ Group.attributes.name }},</router-link>
                </p>
            </div>
            <!-- End category -->

            <!-- Begin quick links -->
            <div class="text-gray-300">
                <h1 class="font-bold mb-2">Quick Links</h1>
                <p class="text-sm text-gray-300">
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/about-juasoonline">About Us,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/mission-and-vision">Mission and Vision,</router-link>
                    <router-link class="hover:text-juaso-secondary mr-1.5" to="/contacts">Contact Us</router-link>
                </p>
            </div>
            <!-- End quick links -->

        </div>
        <!-- End company and site info -->

        <!-- Begin copyright -->
        <div class="container m-auto">
            <div class="flex m-auto sm:border-t border-gray-400 text-gray-400 text-sm flex-col">
                <div class="my-5">© Copyright. All Rights Reserved.</div>
            </div>
        </div>
        <!-- End copyright -->

    </footer>
    <!-- End lower footer contents -->

</template>

<script>
    export default
    {
        name: "MainFooter",
        data()
        {
            return {
                PlayStoreLogo: '../assets/images/icons/icon-googleplay.png',
                AppStoreLogo: '../assets/images/icons/icon-appstore.png',
                Groups: [
                {
                  "id": 1,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078337869",
                    "name": "Weddings & Events",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 2,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078338749",
                    "name": "Women's Underwear",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 3,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078340520",
                    "name": "Accessories",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 4,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078349274",
                    "name": "Women's Fashion",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 5,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078350232",
                    "name": "Bottoms",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 6,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078358489",
                    "name": "Swimwear",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 7,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078359748",
                    "name": "Hot Sale",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 8,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078369064",
                    "name": "Bottoms",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 9,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078370092",
                    "name": "Underwear & Loungewear",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 10,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078378205",
                    "name": "Outerwear & Jackets",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 11,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078379174",
                    "name": "Accessories",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 12,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078387459",
                    "name": "Novelty & Special Use",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 13,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078388619",
                    "name": "Mobile Phones",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 14,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078402132",
                    "name": "Hot Brands",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 15,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078403786",
                    "name": "Mobile Phone Accessories",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 16,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078413915",
                    "name": "Hot Cases & Covers",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 17,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078422045",
                    "name": "Featured Accessories",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 18,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078430683",
                    "name": "Mobile Phone Parts",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 19,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078431503",
                    "name": "Communication Equipments",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                },
                {
                  "id": 20,
                  "type": "Category",
                  "attributes": {
                    "resource_id": "1689528078441724",
                    "name": "Components & Peripherals",
                    "slug": "",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2021-01-21 20:05:35",
                    "updated_at": "2021-01-21 20:05:35"
                  }
                }
              ]
            }
        }
    }
</script>

<style scoped>
</style>