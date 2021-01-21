<template>

    <!-- Begin contents -->
    <div class="w-full">

        <!-- Begin cat header -->
        <div class="bg-gray-200 rounded-t">
          <router-link to="/categories">
              <div class="flex justify-start p-2 hover:bg-gray-300 rounded-t">
                  <svg class="w-6 h-6 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                  <span class="font-bold">Categories</span>
              </div>
          </router-link>
        </div>
        <!-- End cat header -->

        <!-- Begin cat menu -->
        <div class="flex justify-start bg-white p-3 rounded-b">
            <nav class="text-sm">
                <ul>
                    <li v-for="Group in Groups" :key="Group.attributes.resource_id" class="py-1.5 text-ct hover:from-indigo-900">
                        <router-link to="/category/1234567890" class="">
                            <i class='bx bx-female'></i>
                            {{ Group.attributes.name }}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- End cat menu -->

    </div>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "CategoriesMenu",
        data()
        {
          return {
              Groups:
              [
                {
                  "id": 1,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950168617",
                    "name": "Women's Fashion",
                    "slug": "womens-fashion",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 2,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950171358",
                    "name": "Men's Fashion",
                    "slug": "mens-fashion",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 3,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950172127",
                    "name": "Phones & Telecommunications",
                    "slug": "phones-telecommunications",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 4,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950181383",
                    "name": "Computer, Office & Security",
                    "slug": "computer-office-security",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 5,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950183280",
                    "name": "Consumer Electronics",
                    "slug": "consumer-electronics",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 6,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950193740",
                    "name": "Jewelry & Watches",
                    "slug": "jewelry-watches",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 7,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950195697",
                    "name": "Home, Pet & Appliances",
                    "slug": "home-pet-appliances",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 8,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950196617",
                    "name": "Bags & Shoes",
                    "slug": "bags-shoes",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 9,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950197522",
                    "name": "Toys, Kids & Babies",
                    "slug": "toys-kids-babies",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 10,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950198582",
                    "name": "Outdoor Fun & Sports",
                    "slug": "outdoor-fun-sports",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 11,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950207208",
                    "name": "Beauty, Health & Hair",
                    "slug": "beauty-health-hair",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 12,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950208978",
                    "name": "Automobiles & Motorcycles",
                    "slug": "automobiles-motorcycles",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                },
                {
                  "id": 13,
                  "type": "Group",
                  "attributes": {
                    "resource_id": "1687257950217480",
                    "name": "Home Improvement & Tools",
                    "slug": "home-improvement-tools",
                    "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                    "created_at": "2020-12-27 18:42:52",
                    "updated_at": "2020-12-27 18:42:52"
                  }
                }
              ]
          }
        },
    }
</script>

<style scoped>

</style>