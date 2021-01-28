<template>

    <!-- Begin contents -->
    <div class="w-full">

        <!-- Begin cat header -->
        <div class="bg-gray-200 rounded-t">
          <router-link to="/categories">
              <div class="flex justify-start p-2.5 hover:bg-gray-300 rounded-t">
                  <svg class="w-6 h-6 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                  <span class="font-bold">Categories</span>
              </div>
          </router-link>
        </div>
        <!-- End cat header -->

        <!-- Begin cat menu -->
        <div class="flex w-full bg-white rounded-b py-2">
            <nav class="text-sm w-full">
                <ul class="menu">
                    <li v-for="Group in Groups" :key="Group.attributes.resource_id" class="text-ct text-gray-500">
                        <router-link to="/category/1234567890" class="flex justify-between py-1.5 px-3 hover:shadow-lg hover:text-red-500">
                            <span>{{ Group.attributes.name }}</span>
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </router-link>

                        <div class="megadrop rounded-r border shadow-sm grid gap-6 grid-cols-3">
                          <div class="col" v-for="Category in Group.include.category" :key="Category.attributes.resource_id">
                              <router-link to="/category/1234567890">
                                  <div class="border-b pb-1 mb-1">
                                      <h3 class="text-gray-500 text-sm font-bold hover:text-red-500">{{ Category.attributes.name }}</h3>
                                  </div>
                              </router-link>
                              <ul class="">
                                  <li v-for="Subcategory in Category.include.subcategory" :key="Subcategory.attributes.resource_id" class="text-gray-500 font-light text-xs hover:text-red-500 py-0.5">
                                      <router-link to="/category/1234567890">{{ Subcategory.attributes.name }}</router-link>
                                  </li>
                              </ul>
                          </div>
                        </div>
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
            Groups: [
              {
                "id": 1,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078327834",
                  "name": "Women's Fashion",
                  "slug": "womens-fashion",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 1,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078597987",
                              "name": "Wedding Dresses",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 2,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078600637",
                              "name": "Prom Dresses",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 3,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078601940",
                              "name": "Evening Dresses",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 4,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078610140",
                              "name": "Africa Clothing",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 5,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078611844",
                              "name": "Cosplay Costumes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 6,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078620902",
                              "name": "Pajama Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 7,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078629950",
                              "name": "Bras",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 8,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078638547",
                              "name": "Panties",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 9,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078662928",
                              "name": "Women's Socks",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 10,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078664033",
                              "name": "Bra & Brief Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 11,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078664749",
                              "name": "Shapewear",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 12,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078665409",
                              "name": "Hair Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 13,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078666092",
                              "name": "Sunglasses",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 14,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078666538",
                              "name": "Blue Light Blocking Glasses",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 15,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078666986",
                              "name": "Baseball Caps",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 16,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078667454",
                              "name": "Bucket Hats",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 17,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078667908",
                              "name": "Belts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 18,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078668756",
                              "name": "Dresses",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 19,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078677523",
                              "name": "Tees",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 20,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078678923",
                              "name": "Blouses & Shirts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 21,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078687644",
                              "name": "Hoodies & Sweatshirts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 22,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078689002",
                              "name": "Women's Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 23,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078689943",
                              "name": "Suits & Blazers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 24,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078699186",
                              "name": "Bodysuits",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 25,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078700644",
                              "name": "Tanks & Camis",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 26,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078710536",
                              "name": "Coats & Jackets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 27,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078719093",
                              "name": "Sweaters",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 28,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078720238",
                              "name": "Leggings",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 29,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078730040",
                              "name": "Skirts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 30,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078731820",
                              "name": "Shorts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 31,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078740904",
                              "name": "Jeans",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 32,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078742193",
                              "name": "Pants & Capris",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 33,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078742768",
                              "name": "Bikini Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 34,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078743232",
                              "name": "Cover-Ups",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 2,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078329110",
                  "name": "Men's Fashion",
                  "slug": "mens-fashion",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 35,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078743705",
                              "name": "Hoodies & Sweatshirts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 36,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078744578",
                              "name": "T-Shirts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 37,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078753470",
                              "name": "Shirts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 38,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078755212",
                              "name": "Casual Shorts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 39,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078763378",
                              "name": "Men's Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 40,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078764265",
                              "name": "Jackets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 41,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078764826",
                              "name": "Casual Pants",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 42,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078765317",
                              "name": "Sweatpants",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 43,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078765779",
                              "name": "Cargo Pants",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 44,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078766313",
                              "name": "Jeans",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 45,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078766743",
                              "name": "Harem Pants",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 46,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078767177",
                              "name": "Shorts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 47,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078767613",
                              "name": "Boxers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 48,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078768309",
                              "name": "Briefs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 49,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078777772",
                              "name": "Long Johns",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 50,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078780038",
                              "name": "Men's Sleep & Lounge",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 55,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078791786",
                              "name": "Genuine Leather",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 51,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078788620",
                              "name": "Pajama Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 52,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078789971",
                              "name": "Jackets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 53,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078790547",
                              "name": "Sweaters",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 54,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078791253",
                              "name": "Casual Faux Leather",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 56,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078792736",
                              "name": "Parkas",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 57,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078801803",
                              "name": "Down Jackets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 58,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078803719",
                              "name": "Suits & Blazer",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 59,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078805055",
                              "name": "Scarves",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 60,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078813478",
                              "name": "Skullies & Beanies",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 61,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078815595",
                              "name": "Prescription Glasses",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 62,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078857212",
                              "name": "Gloves & Mittens",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 63,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078858583",
                              "name": "Belts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 64,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078859197",
                              "name": "Bomber Hats",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 65,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078859773",
                              "name": "Fedoras",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 66,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078860745",
                              "name": "Berets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 67,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078869617",
                              "name": "Baseball Caps",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 68,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078870880",
                              "name": "Cosplay Costumes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 69,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078871439",
                              "name": "Stage & Dance Wear",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 70,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078871846",
                              "name": "Exotic Apparel",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 3,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078329570",
                  "name": "Phones & Telecommunications",
                  "slug": "phones-telecommunications",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 71,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078872259",
                              "name": "Android Phones",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 72,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078872687",
                              "name": "iPhones",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 73,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078873130",
                              "name": "Feature Phones",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 74,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078873612",
                              "name": "Refurbished Phones",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 75,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078874102",
                              "name": "8GB RAM",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 76,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078874525",
                              "name": "5G Phones",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 77,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078874919",
                              "name": "lenovo",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 78,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078875333",
                              "name": "OnePlus",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 79,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078875755",
                              "name": "Huawai",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 80,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078876502",
                              "name": "Galaxy",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 81,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078885060",
                              "name": "Meizu",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 82,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078886589",
                              "name": "Umidifi",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 83,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078887289",
                              "name": "Cases & Covers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 84,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078887919",
                              "name": "Cables",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 85,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078888668",
                              "name": "Chargers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 86,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078896809",
                              "name": "Power Bank",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 87,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078899276",
                              "name": "Holders & Stands",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 88,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078907701",
                              "name": "Screen Protectors",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 89,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078909415",
                              "name": "Cases For iPhone",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 90,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078910126",
                              "name": "Cases For Samsung",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 91,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078910842",
                              "name": "Cases For Huawei",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 92,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078911477",
                              "name": "Cases For Xiaomi",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 93,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078912016",
                              "name": "Cases For Meizu",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 94,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078912880",
                              "name": "Cases For OPPO",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 95,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078923035",
                              "name": "Wireless Chargers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 96,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078925188",
                              "name": "Car Chargers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 97,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078926159",
                              "name": "Lenses",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 98,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078926925",
                              "name": "Adapters & Converters",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 99,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078927543",
                              "name": "Phone LCDs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 100,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078928458",
                              "name": "Phone Batteries",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 101,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078937231",
                              "name": "Housings & Frames",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 102,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078938739",
                              "name": "Walkie Talkie",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 103,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078958092",
                              "name": "Fiber Optic Equipment",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 104,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078960282",
                              "name": "Communications Antennas",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 4,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078329978",
                  "name": "Computer, Office & Security",
                  "slug": "computer-office-security",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
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
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 105,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078960757",
                              "name": "CPUs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 106,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078961170",
                              "name": "Motherboards",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 107,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078961603",
                              "name": "Graphics Cards",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 108,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078962041",
                              "name": "Mice",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 109,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078962453",
                              "name": "Keyboards",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 21,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078443400",
                        "name": "Storage Devices",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 123,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079006873",
                              "name": "USB Flash Drives",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 124,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079008319",
                              "name": "Memory Cards",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 125,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079009272",
                              "name": "External Hard Drives",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 126,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079018199",
                              "name": "HDD Box Enclosures",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 127,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079019335",
                              "name": "SSDs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 22,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078452640",
                        "name": "Computer Networking",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 136,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079070294",
                              "name": "Wireless Routers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 137,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079070772",
                              "name": "Network Cards",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 138,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079071461",
                              "name": "3G Modems",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 139,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079071991",
                              "name": "Modem-Router Combos",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 140,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079072824",
                              "name": "Networking Tools",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 23,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078454301",
                        "name": "Laptops",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 110,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078962851",
                              "name": "Gaming Laptops",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 111,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078963245",
                              "name": "Ultraslim Laptops",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 112,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078963635",
                              "name": "Tablets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 113,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078964266",
                              "name": "Laptop Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 114,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078973061",
                              "name": "Tablet Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 115,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078974824",
                              "name": "Laptop Bags & Cases",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 116,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078983894",
                              "name": "Laptop Bags & Cases",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 24,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078454934",
                        "name": "Office Electronics",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 128,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079037797",
                              "name": "3D Printers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 129,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079038659",
                              "name": "3D Printer Parts & Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 130,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079047230",
                              "name": "3D Printers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 131,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079048646",
                              "name": "Printers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 132,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079058199",
                              "name": "Printer Parts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 133,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079059386",
                              "name": "Scanners",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 134,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079068287",
                              "name": "Ink Cartridges",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 135,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079069728",
                              "name": "3D Printing Materials",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 25,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078455420",
                        "name": "Security & Protection",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 117,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078985729",
                              "name": "Surveillance Items",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 118,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078986563",
                              "name": "Access Control Systems",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 119,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078987329",
                              "name": "Smoke Detectors",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 120,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078988421",
                              "name": "Safety Equipment",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 121,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078996694",
                              "name": "Alarms & Sensors",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 122,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528078997625",
                              "name": "Door Intercom Systems",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 5,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078330372",
                  "name": "Consumer Electronics",
                  "slug": "consumer-electronics",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
                    {
                      "id": 26,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078456210",
                        "name": "Accessories & Parts",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 141,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079081345",
                              "name": "Cables & Adapters",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 142,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079082254",
                              "name": "Electronic Cigarettes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 143,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079090859",
                              "name": "Batteries",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 144,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079091877",
                              "name": "Chargers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 145,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079092620",
                              "name": "Home Electronic Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 146,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079100975",
                              "name": "Bags & Cases",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 27,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078465573",
                        "name": "Home Audio & Video",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 147,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079101987",
                              "name": "Televisions",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 148,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079110978",
                              "name": "TV Receivers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 149,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079112221",
                              "name": "Projectors",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 150,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079121574",
                              "name": "Audio Amplifier Boards",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 151,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079122812",
                              "name": "TV Sticks",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 28,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078467270",
                        "name": "Camera & Photo",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 152,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079131890",
                              "name": "Digital Cameras",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 153,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079133098",
                              "name": "Camcorders",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 154,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079142128",
                              "name": "Camera Drones",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 155,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079143562",
                              "name": "Action Cameras",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 156,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079152718",
                              "name": "Photo Studio Supplies",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 157,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079154207",
                              "name": "Camera & Photo Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 29,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078475919",
                        "name": "Portable Audio & Video",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 158,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079154921",
                              "name": "Earphones & Headphones",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 159,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079155466",
                              "name": "Speakers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 160,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079155998",
                              "name": "MP3 Players",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 161,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079156739",
                              "name": "Microphones",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 162,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079165701",
                              "name": "VR/AR Devices",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 30,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078477706",
                        "name": "Smart Electronics",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 163,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079166626",
                              "name": "Wearable Devices",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:35",
                              "updated_at": "2021-01-21 20:05:35"
                            }
                          },
                          {
                            "id": 164,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079224104",
                              "name": "Smart Home Appliances",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 165,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079225402",
                              "name": "Smart Wearable Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 166,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079226069",
                              "name": "Smart Remote Controls",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 167,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079226585",
                              "name": "Smart Watches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 168,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079227048",
                              "name": "Smart Wristbands",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 31,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078478462",
                        "name": "Video Games",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 169,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079227493",
                              "name": "Handheld Game Players",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 170,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079227924",
                              "name": "Game Controllers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 171,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079228371",
                              "name": "Joysticks",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 172,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079229037",
                              "name": "Stickers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 6,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078330754",
                  "name": "Jewelry & Watches",
                  "slug": "jewelry-watches",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
                    {
                      "id": 32,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078479140",
                        "name": "Women's Watches",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 189,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079274735",
                              "name": "Women's Bracelet Watches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 190,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079275263",
                              "name": "Elegant Watches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 191,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079275865",
                              "name": "Romantic Watches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 192,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079276423",
                              "name": "Sports Watches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 193,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079277498",
                              "name": "Innovative Watches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 33,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078479632",
                        "name": "Wedding & Engagement",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 181,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079261307",
                              "name": "Bridal Jewelry Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 182,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079270084",
                              "name": "Engagement Rings",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 183,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079271225",
                              "name": "Wedding Hair Jewelry",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 34,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078480454",
                        "name": "Men's Watches",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 184,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079271892",
                              "name": "Mechanical Watches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 185,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079272596",
                              "name": "Quartz Watches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 186,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079273176",
                              "name": "Digital Watches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 187,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079273686",
                              "name": "Dual Display Watches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 188,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079274250",
                              "name": "Sports Watches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 35,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078488431",
                        "name": "Fine Jewelry",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 173,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079237937",
                              "name": "925 Silver Jewelry",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 174,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079239409",
                              "name": "Diamond Jewelry",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 175,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079239961",
                              "name": "Pearl Jewelry",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 176,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079240475",
                              "name": "Gemstones",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 177,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079241180",
                              "name": "K-Gold Jewelry",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 178,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079249871",
                              "name": "Fine Earrings",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 179,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079251135",
                              "name": "Fine Jewelry Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 180,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079260211",
                              "name": "Men's Fine Jewelry",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 36,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078489364",
                        "name": "Fashion Jewelry",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 194,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079286143",
                              "name": "Necklaces & Pendants",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 195,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079287088",
                              "name": "Trendy Rings",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 196,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079287769",
                              "name": "Trendy Earrings",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 197,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079288319",
                              "name": "Bracelets & Bangles",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 198,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079288983",
                              "name": "Men's Cuff Links",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 199,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079289445",
                              "name": "Fashion Jewelry Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 200,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079289904",
                              "name": "Charms",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 201,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079290318",
                              "name": "Body Jewelry",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 37,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078497376",
                        "name": "Beads & DIY Jewelry",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 202,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079290751",
                              "name": "Beads",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 203,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079291193",
                              "name": "Jewelry Findings & Components",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 204,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079291624",
                              "name": "Jewelry Packaging & Displays",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 7,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078331174",
                  "name": "Home, Pet & Appliances",
                  "slug": "home-pet-appliances",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
                    {
                      "id": 38,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078498196",
                        "name": "Art",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 205,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079292063",
                              "name": "Scrapbook & Stamping",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 206,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079292518",
                              "name": "Fabric & Sewing Supplies",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 207,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079293166",
                              "name": "Needle Arts & Craft",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 208,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079302087",
                              "name": "5D DIY Diamond Painting",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 39,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078508522",
                        "name": "Garden Supplies",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 235,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079378236",
                              "name": "Watering & Irrigation Kits",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 236,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079379094",
                              "name": "Flower Pots & Planters",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 237,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079388526",
                              "name": "Repellents",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 238,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079389835",
                              "name": "Outdoor Furniture",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 40,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078509794",
                        "name": "Home Textiles",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 212,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079314580",
                              "name": "Cushion",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 213,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079323878",
                              "name": "Curtains",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 214,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079325543",
                              "name": "Bedding Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 215,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079326225",
                              "name": "Beach Towels",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 41,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078510288",
                        "name": "Celebrations",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 216,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079326897",
                              "name": "Events & Parties",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 217,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079327357",
                              "name": "Artificial & Dried Flowers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 218,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079327814",
                              "name": "Gift Bags & Boxes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 42,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078510738",
                        "name": "Household Items",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 219,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079328284",
                              "name": "Umbrellas",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 220,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079328972",
                              "name": "Bathroom Scales",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 221,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079341884",
                              "name": "Sweepers & Mops",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 43,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078511194",
                        "name": "Home Storage",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 222,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079343955",
                              "name": "Storage Boxes & Bins",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 223,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079344746",
                              "name": "Laundry Baskets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 224,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079346165",
                              "name": "Makeup Organizers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 44,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078511671",
                        "name": "Pet Products",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 209,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079303381",
                              "name": "Dog Collars & Leads",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 210,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079304210",
                              "name": "Toys",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 211,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079313394",
                              "name": "Fish & Aquatic",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 45,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078512482",
                        "name": "Kitchen",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 227,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079364742",
                              "name": "Bakeware",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 228,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079366038",
                              "name": "Drinkware",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 229,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079366580",
                              "name": "Kitchen Tools & Gadgets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 230,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079367055",
                              "name": "Kitchen Knives & Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 46,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078521170",
                        "name": "Home Decor",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 231,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079367511",
                              "name": "Painting & Calligraphy",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 232,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079368069",
                              "name": "Wall Stickers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 233,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079368551",
                              "name": "Figurines & Miniatures",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 234,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079369197",
                              "name": "Wall Clocks",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 47,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078523458",
                        "name": "Furniture",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 225,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079354522",
                              "name": "Office Furniture",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 226,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079355811",
                              "name": "Home Furniture",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 8,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078331593",
                  "name": "Bags & Shoes",
                  "slug": "bags-shoes",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
                    {
                      "id": 48,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078524594",
                        "name": "Women's Luggage & Bags",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 239,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079390421",
                              "name": "Stylish Backpacks",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 240,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079390954",
                              "name": "Totes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 241,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079391464",
                              "name": "Shoulder Bags",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 242,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079391903",
                              "name": "Wallets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 243,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079392321",
                              "name": "Evening Bags",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 244,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079393071",
                              "name": "Clutches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 49,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078525188",
                        "name": "Women's Shoes",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 245,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079401669",
                              "name": "Women's Sandals",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 246,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079402971",
                              "name": "Flats",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 247,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079412139",
                              "name": "High Heels",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 248,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079414214",
                              "name": "Vulcanized Sneakers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 249,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079415032",
                              "name": "House Slippers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 250,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079415898",
                              "name": "Boots",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 50,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078525862",
                        "name": "Men's Luggage & Bags",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 251,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079416501",
                              "name": "Men's Backpacks",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 252,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079417316",
                              "name": "Crossbody Bags",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 253,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079426163",
                              "name": "Briefcases",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 254,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079427169",
                              "name": "Luggage & Travel Bags",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 255,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079427667",
                              "name": "Wallets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 51,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078526475",
                        "name": "Men's Shoes",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 256,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079428140",
                              "name": "Casual Shoes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 257,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079428630",
                              "name": "Vulcanized Sneakers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 258,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079429042",
                              "name": "Men's Sandals",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 259,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079429458",
                              "name": "Loafers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 260,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079429870",
                              "name": "Flip Flops",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 261,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079430282",
                              "name": "Boots",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 52,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078527029",
                        "name": "Other Bags & Accessories",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 262,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079430744",
                              "name": "Kids & Baby Bags",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 263,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079431324",
                              "name": "Cosmetic Bags & Cases",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 264,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079431910",
                              "name": "Wallets & Card Holders",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 265,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079432408",
                              "name": "Luggage Covers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 266,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079433437",
                              "name": "Passport Covers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 267,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079445000",
                              "name": "Bag Parts & Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 53,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078527617",
                        "name": "Bestselling Shoes",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 268,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079446179",
                              "name": "Wedge Sandals",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 269,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079446693",
                              "name": "Classic Heels",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 270,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079447162",
                              "name": "Large-Sized Flats",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 271,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079447699",
                              "name": "Indoor Slippers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 272,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079448225",
                              "name": "Trendy Sneakers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 273,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079448876",
                              "name": "Comfortable Sandals",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 9,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078332488",
                  "name": "Toys, Kids & Babies",
                  "slug": "toys-kids-babies",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
                    {
                      "id": 54,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078528565",
                        "name": "Boys Clothing",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 294,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079514996",
                              "name": "Clothing Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 295,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079515721",
                              "name": "T-Shirts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 296,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079516232",
                              "name": "Outerwear & Coats",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 297,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079516987",
                              "name": "Jeans",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 55,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078538020",
                        "name": "Baby Clothing & Shoes",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 283,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079481393",
                              "name": "Baby Rompers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 284,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079482052",
                              "name": "Clothing Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 285,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079482607",
                              "name": "Outerwear & Coats",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 286,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079483128",
                              "name": "Baby’s First Walkers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 287,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079483623",
                              "name": "Sandals & Clogs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 56,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078540250",
                        "name": "Shoes & Bags",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 299,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079526170",
                              "name": "Sneakers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 300,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079535265",
                              "name": "Sandals",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 301,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079537013",
                              "name": "Boots",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 57,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078541029",
                        "name": "Mother & Baby Items",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 274,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079457642",
                              "name": "Thermometers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 275,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079458653",
                              "name": "Diaper Bags and Cloth Diapers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 276,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079459188",
                              "name": "Baby Teething Items",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 277,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079459630",
                              "name": "Baby Strollers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 278,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079460032",
                              "name": "Blankets & Swaddling",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 279,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079460701",
                              "name": "Backpacks & Carriers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 280,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079469583",
                              "name": "Maternity Clothing",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 281,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079471214",
                              "name": "Highchairs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 282,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079480037",
                              "name": "Baby Cribs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 298,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079525348",
                              "name": "Hoodies & Sweatshirts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 58,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078541661",
                        "name": "Girls Clothing",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 288,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079484085",
                              "name": "Dresses",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 289,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079484640",
                              "name": "Clothing Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 290,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079485458",
                              "name": "Tops & Tees",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 291,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079494721",
                              "name": "Outerwear & Coats",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 292,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079495890",
                              "name": "Family Matching Outfits",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 293,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079510497",
                              "name": "Sleepwear & Robes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 59,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078542137",
                        "name": "Toys & Hobbies",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 302,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079537589",
                              "name": "Remote Control",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 303,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079538095",
                              "name": "Outdoor Activities",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 304,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079538626",
                              "name": "Action & Toy Figures",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 305,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079539132",
                              "name": "Blocks",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 306,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079539570",
                              "name": "Toys & Dolls",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 307,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079540000",
                              "name": "Stuffed & Plush Animals",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 308,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079540459",
                              "name": "Building & Construction Toys",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 309,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079541109",
                              "name": "Model Building Toys",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 310,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079549320",
                              "name": "Movies & TV",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 311,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079550560",
                              "name": "Playmats",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 312,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079559160",
                              "name": "Baby Rattles",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 60,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078542549",
                        "name": "Accessories",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 313,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079560005",
                              "name": "Hats & Caps",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 314,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079560497",
                              "name": "Bibs & Burp Cloths",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 315,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079560969",
                              "name": "Headwear",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 10,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078332910",
                  "name": "Outdoor Fun & Sports",
                  "slug": "outdoor-fun-sports",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
                    {
                      "id": 61,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078542964",
                        "name": "Swimming",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 316,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079561438",
                              "name": "Bikini Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 317,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079561882",
                              "name": "One-Piece Suits",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 318,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079562296",
                              "name": "Two-Piece Suits",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 319,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079562734",
                              "name": "Cover-Ups",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 320,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079563162",
                              "name": "Men's Swimwear",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 321,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079563580",
                              "name": "Children's Swimwear",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 62,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078543361",
                        "name": "Cycling",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 322,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079564025",
                              "name": "Bicycles",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 323,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079573613",
                              "name": "Bicycle Frames",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 324,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079618439",
                              "name": "Bicycle Lights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 325,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079620005",
                              "name": "Bicycle Helmets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 326,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079620702",
                              "name": "Cycling Jerseys",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 327,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079621550",
                              "name": "Cycling Eyewear",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 63,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078543806",
                        "name": "Sneakers",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 328,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079630599",
                              "name": "Running Shoes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 329,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079632347",
                              "name": "Hiking Shoes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 330,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079640866",
                              "name": "Soccer Shoes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 331,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079641855",
                              "name": "Skateboarding Shoes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 332,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079651573",
                              "name": "Dance Shoes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 333,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079653937",
                              "name": "Basketball Shoes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 64,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078544573",
                        "name": "Fishing",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 334,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079655655",
                              "name": "Fishing Reels",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 335,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079664079",
                              "name": "Fishing Lures",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 336,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079666254",
                              "name": "Fishing Lines",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 337,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079674611",
                              "name": "Fishing Rods",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 338,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079676163",
                              "name": "Rod Combos",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 339,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079685639",
                              "name": "Fishing Tackle Boxes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 65,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078553617",
                        "name": "Sportswear",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 340,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079687305",
                              "name": "Jerseys",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 341,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079712714",
                              "name": "Hiking Jackets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 342,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079714301",
                              "name": "Pants",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 343,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079714808",
                              "name": "Shorts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 344,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079715236",
                              "name": "Sports Bags",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 345,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079715686",
                              "name": "Sports Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 66,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078554976",
                        "name": "Other Sports Equipment",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 346,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079716101",
                              "name": "Camping & Hiking",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 347,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079716539",
                              "name": "Hunting",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 348,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079717152",
                              "name": "Golf",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 349,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079717561",
                              "name": "Fitness & Bodybuilding",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 350,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079717957",
                              "name": "Skiing & Snowboarding",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 351,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079718365",
                              "name": "Musical Instruments",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 11,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078333432",
                  "name": "Beauty, Health & Hair",
                  "slug": "beauty-health-hair",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
                    {
                      "id": 67,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078555602",
                        "name": "Hair Weaves",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 352,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079718761",
                              "name": "Bundles With Closure",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 353,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079719166",
                              "name": "3/4 Bundles",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 354,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079719560",
                              "name": "Pre-Colored Weaves",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 355,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079719952",
                              "name": "Closures",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 68,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078556112",
                        "name": "Lace Wigs",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 356,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079720595",
                              "name": "Lace Front Wigs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 357,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079721249",
                              "name": "Full Lace Wigs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 358,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079730496",
                              "name": "360 Lace Wigs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 359,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079732485",
                              "name": "250% Density Lace Wigs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 69,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078556818",
                        "name": "Synthetic Hair",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 360,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079733422",
                              "name": "Synthetic Lace Wigs",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 361,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079734158",
                              "name": "Synthetic Weaves",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 362,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079734995",
                              "name": "Hair Braids",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 363,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079735491",
                              "name": "Synthetic Extensions",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 70,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078557312",
                        "name": "Makeup",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 364,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079735954",
                              "name": "Eyes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 365,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079736406",
                              "name": "Lips",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 366,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079737055",
                              "name": "Face",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 367,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079746284",
                              "name": "Makeup Tools",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 71,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078557774",
                        "name": "Health Care",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 368,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079747656",
                              "name": "Massage & Relaxation",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 369,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079748315",
                              "name": "Household Health Monitors",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 370,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079749252",
                              "name": "Chinese Medicine",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 371,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079782822",
                              "name": "Personal Health Care",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 72,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078558184",
                        "name": "Skin Care",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 372,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079784580",
                              "name": "Face",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 373,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079785346",
                              "name": "Eyes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 374,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079786204",
                              "name": "Body",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 375,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079786695",
                              "name": "Skin Care Tools",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 73,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078558595",
                        "name": "Nail Art & Tools",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 376,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079787187",
                              "name": "Gel Nail Polish",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 377,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079787686",
                              "name": "Nail Drills",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 378,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079797655",
                              "name": "Nail Dryers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 379,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079799062",
                              "name": "Nail Glitter",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 74,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078559003",
                        "name": "Personal Care",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 380,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079807192",
                              "name": "Hair Care & Styling",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 381,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079808141",
                              "name": "Shaving & Hair Removal",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 382,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079817065",
                              "name": "Oral Hygiene",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 75,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078559394",
                        "name": "Tattoos & Body Art",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 383,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079818542",
                              "name": "Tattoo Kits",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 76,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078559785",
                        "name": "Adult Items",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 384,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079828087",
                              "name": "Condoms",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 385,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079829937",
                              "name": "Lubricants",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 386,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079830802",
                              "name": "Vibrators",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 12,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078333851",
                  "name": "Automobiles & Motorcycles",
                  "slug": "automobiles-motorcycles",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
                    {
                      "id": 77,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078560964",
                        "name": "Auto Replacement Parts",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 387,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079831609",
                              "name": "Car Lights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 388,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079832405",
                              "name": "Interior Parts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 389,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079833319",
                              "name": "Exterior Parts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 390,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079842058",
                              "name": "Spark Plugs & Ignition Systems",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 391,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079843628",
                              "name": "Vehicle Sensors",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 392,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079844367",
                              "name": "Brake Systems",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 393,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079845237",
                              "name": "Windshield Wipers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 394,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079854412",
                              "name": "Other Replacement Parts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 78,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078569031",
                        "name": "Tools, Maintenance & Care",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 395,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079856270",
                              "name": "Code Readers & Scanning Tools",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 396,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079865656",
                              "name": "Diagnostic Tools",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 397,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079875257",
                              "name": "Car Washing Tools",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 398,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079876708",
                              "name": "Paint Care & Polishes",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 399,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079885614",
                              "name": "Other Maintenance Products",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 79,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078570030",
                        "name": "Car Electronics",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 400,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079887014",
                              "name": "Car Multimedia Players",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 401,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079895384",
                              "name": "DVR/Dash Cameras",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 402,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079896844",
                              "name": "Alarm Systems & Security",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 403,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079906170",
                              "name": "GPS Trackers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 404,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079907612",
                              "name": "Car Radios & Car Monitors",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 405,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079908203",
                              "name": "Vehicle Cameras",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 406,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079908747",
                              "name": "Vehicle GPS Systems",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 407,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079909420",
                              "name": "Jump Starters",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 80,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078570629",
                        "name": "Exterior Accessories",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 408,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079910020",
                              "name": "Car Stickers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 409,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079910504",
                              "name": "Car Covers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 410,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079910943",
                              "name": "Other Exterior Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 81,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078571065",
                        "name": "Motorcycle Accessories & Parts",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 411,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079911451",
                              "name": "Body & Frame Parts",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 412,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079911880",
                              "name": "Helmets & Protective Gear",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 413,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079912308",
                              "name": "Lighting",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 414,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079912976",
                              "name": "Braking Systems",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 415,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079913398",
                              "name": "Exhaust Systems",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 416,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079913846",
                              "name": "Helmets & Headsets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 417,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079914269",
                              "name": "Motorcycle Seat Covers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 418,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079914676",
                              "name": "Other Motorcycle Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 82,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078571503",
                        "name": "Interior Accessories",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 419,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079915140",
                              "name": "Seat Covers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 420,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079915543",
                              "name": "Storage Solutions",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 421,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079915973",
                              "name": "Car Key Cases",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 422,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079916429",
                              "name": "Steering Wheel Covers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 423,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079917527",
                              "name": "Floor Mats",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              {
                "id": 13,
                "type": "Group",
                "attributes": {
                  "resource_id": "1689528078334245",
                  "name": "Home Improvement & Tools",
                  "slug": "home-improvement-tools",
                  "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                  "created_at": "2021-01-21 20:05:35",
                  "updated_at": "2021-01-21 20:05:35"
                },
                "include": {
                  "category": [
                    {
                      "id": 83,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078571922",
                        "name": "Home Improvement",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 445,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079976179",
                              "name": "Electrical Equipment & Supplies",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 446,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079976667",
                              "name": "Wall Switches",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 447,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079977406",
                              "name": "Hardware",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 448,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079978011",
                              "name": "Kitchen Fixtures",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 449,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079978488",
                              "name": "Paint Tools",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 450,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079978962",
                              "name": "Pumps",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 84,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078572738",
                        "name": "Indoor Lighting",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 434,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079949597",
                              "name": "Ceiling Lights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 435,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079951096",
                              "name": "Pendant Lights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 436,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079959850",
                              "name": "Downlights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 437,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079962218",
                              "name": "Chandeliers",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 438,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079962754",
                              "name": "Wall Lamps",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 439,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079963200",
                              "name": "Night Lights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 85,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078581265",
                        "name": "LED Lighting",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 440,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079963618",
                              "name": "LED Strips",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 441,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079964030",
                              "name": "LED Downlights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 442,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079964473",
                              "name": "LED Panel Lights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 443,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079965294",
                              "name": "LED Spotlights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 444,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079974797",
                              "name": "LED Bar Lights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 86,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078582624",
                        "name": "Tools",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 424,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079926464",
                              "name": "Measurement & Analysis Tools",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 425,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079927872",
                              "name": "Hand Tools",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 426,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079936149",
                              "name": "Power Tools",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 427,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079937297",
                              "name": "Garden Tools",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 428,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079937810",
                              "name": "Tool Sets",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 429,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079938671",
                              "name": "Welding Equipment",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 430,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079939294",
                              "name": "Welding & Soldering Supplies",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 431,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079939777",
                              "name": "Machine Tools & Accessories",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 432,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079940308",
                              "name": "Woodworking Machinery",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 433,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079941003",
                              "name": "Tool Storage Items",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "id": 87,
                      "type": "Category",
                      "attributes": {
                        "resource_id": "1689528078590888",
                        "name": "Outdoor Lighting",
                        "slug": "",
                        "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                        "created_at": "2021-01-21 20:05:35",
                        "updated_at": "2021-01-21 20:05:35"
                      },
                      "include": {
                        "subcategory": [
                          {
                            "id": 451,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079979379",
                              "name": "Flashlights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 452,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079979790",
                              "name": "Solar Lamps",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 453,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079980195",
                              "name": "Floodlights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 454,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079980878",
                              "name": "String Lights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          },
                          {
                            "id": 455,
                            "type": "Subcategory",
                            "attributes": {
                              "resource_id": "1689528079989693",
                              "name": "Underwater Lights",
                              "slug": "",
                              "description": "This is youtube channel which helps new web developer learn and upgrade their skills",
                              "created_at": "2021-01-21 20:05:36",
                              "updated_at": "2021-01-21 20:05:36"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
    }
</script>

<style scoped>
    .menu { position: relative; }
    /*.menu > li { display: block; }*/
    /*.menu > li > a { display: block; }*/
    .menu > li > a:hover { font-weight: bold }
    .menu > li > .megadrop { visibility: hidden; position: absolute; list-style: none; top: 0px; left: 100%; width: 700px; min-height: 100%; text-align: left; margin-top:30px; padding: 15px; z-index: 99; overflow: hidden; background-color: #ffffff; }
    .menu > li:hover .megadrop { opacity: 1; visibility: visible; margin-top: -9px; }
    .menu ul li:hover:after { color: #227087; }
    .menu .col { float: left; color: white; }
    .menu .col ul { padding: 0; margin: 0; }
    .menu .col ul li { list-style: none; }
    .menu .col ul li a { display: block; }
    .menu > li > ul li ul, .menu li >ul li, .menu > li > .megadrop, .menu > li > ul, .menu > li { transition: all 0.2s ease-in-out; -moz-transition: all 0.2s ease-in-out; -webkit-transition: all 0.2s ease-in-out; -ms-transition: all 0.2s ease-in-out; -o-transition: all 0.2s ease-in-outs; }
</style>