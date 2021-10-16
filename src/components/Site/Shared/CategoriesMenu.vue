<template>

    <!-- Begin contents -->
    <div class="w-full">

        <!-- Begin cat header -->
        <div class="bg-juaso-primary rounded-t">
          <router-link to="/categories">
              <div class="flex justify-start p-2.5 hover:bg-juaso-secondary rounded-t">
                  <svg class="w-6 h-6 mr-1.5 text-gray-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                  <span class="text-gray-50">Categories</span>
              </div>
          </router-link>
        </div>
        <!-- End cat header -->

        <!-- Begin cat menu -->
        <div class="flex w-full bg-white rounded-b py-2">
            <nav class="text-sm w-full h-full">
                <ul class="menu">
                    <li v-for="group in groups.categories" :key="group.attributes.resource_id" class="2xl:text-ct xl:text-xs lg:text-xs text-gray-500">
                        <router-link :to="{ name: 'Category', params: { category: group.attributes.resource_id, slug: group.attributes.slug }}" class="flex justify-between items-center py-1.5 2xl:mb-0.5 px-3 hover:shadow-lg hover:text-juaso-primary">
                            <span>{{ group.attributes.name }}</span>
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </router-link>
                        <div class="megadrop rounded-r border shadow-sm grid gap-6 grid-cols-3">
                          <div class="col" v-for="category in group.include.categories" :key="category.attributes.resource_id">
                              <router-link :to="{ name: 'Category', params: { category: category.attributes.resource_id, slug: category.attributes.slug }}">
                                  <div class="border-b pb-1 mb-1">
                                      <h3 class="text-gray-500 text-sm font-bold hover:text-juaso-primary">{{ category.attributes.name }}</h3>
                                  </div>
                              </router-link>
                              <ul class="">
                                  <li v-for="subcategory in category.include.subcategories" :key="subcategory.attributes.resource_id" class="text-gray-500 font-light text-xs hover:text-juaso-primary py-0.5">
                                      <router-link :to="{ name: 'Category', params: { category: subcategory.attributes.resource_id, slug: subcategory.attributes.slug }}">{{ subcategory.attributes.name }}</router-link>
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
    import { onBeforeMount, reactive } from "vue";
    import axios from "axios";

    export default
    {
        name: "CategoriesMenu",
        setup()
        {
            const groups = reactive({ categories: [] });

            onBeforeMount(() =>
            {
              axios({ method: 'GET', url: 'juaso/groups?include=categories.subcategories', headers: {} })
                  .then( response => { groups.categories = response.data.data })
                  .catch( error => { error.response })
            })

            return { groups }
        }
    }
</script>

<style scoped>
    .menu { position: relative; }
    /*.menu > li { display: block; }*/
    /*.menu > li > a { display: block; }*/
    /*.menu > li > a:hover { font-weight: bold }*/
    .menu > li > .megadrop { visibility: hidden; position: absolute; list-style: none; top: 0px; left: 100%; width: 700px; min-height: 100%; text-align: left; margin-top:30px; padding: 15px; z-index: 99; overflow: hidden; background-color: #ffffff; }
    .menu > li:hover .megadrop { opacity: 1; visibility: visible; margin-top: -8px; }
    .menu ul li:hover:after { color: #227087; }
    .menu .col { float: left; color: white; }
    .menu .col ul { padding: 0; margin: 0; }
    .menu .col ul li { list-style: none; }
    .menu .col ul li a { display: block; }
    .menu > li > ul li ul, .menu li >ul li, .menu > li > .megadrop, .menu > li > ul, .menu > li { transition: all 0.2s ease-in-out; -moz-transition: all 0.2s ease-in-out; -webkit-transition: all 0.2s ease-in-out; -ms-transition: all 0.2s ease-in-out; -o-transition: all 0.2s ease-in-outs; }
</style>