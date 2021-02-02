<template>

    <!-- Begin contents -->
    <carousel class="carousel">
        <slide v-for="banner in AdBanners" :key="banner.resource_id" class="carousel__slide">
            <router-link to="/"><img v-bind:src="banner.image" :alt="banner.desc" class="rounded border-none"></router-link>
        </slide>

        <template #addons>
            <navigation class="carousel__next carousel__prev"></navigation>
        </template>
    </carousel>
    <!-- End contents -->

</template>

<script>
    // import  'vue3-carousel/dist/carousel.css'
    import { Carousel, Navigation, Slide } from "vue3-carousel";

    export default
    {
        name: "AdSliders",
        components: { Carousel, Slide, Navigation },
        data()
        {
            return {
                AdBanners:
                [
                    { resource_id: 10000000, image: "./assets/images/sliders/1.jpg", desc: "Something" },
                    { resource_id: 20000000, image: "./assets/images/sliders/2.jpg", desc: "Something" },
                    { resource_id: 30000000, image: "./assets/images/sliders/3.jpg", desc: "Something" },
                ],
            }
        }
    }
</script>

<style scoped>
  .carousel {
    position: relative;
    text-align: center;
    box-sizing: border-box;
  }

  .carousel * {
    box-sizing: border-box;
  }

  .carousel__track {
    display: flex;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .carousel__viewport {
    overflow: hidden;
  }
  .carousel__prev,
  .carousel__next {
    background-color: #000;
    opacity: 0.3;
    width: 20px;
    height: 50px;
    text-align: center;
    font-size: 20px;
    padding: 0;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: 0;
    cursor: pointer;
  }

  .carousel__prev {
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
  }

  .carousel__next {
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
  }
  .carousel__icon {
    width: 1.2em;
    height: 1.2em;
    fill: currentColor;
  }
  .carousel__slide {
    scroll-snap-stop: auto;
    flex-shrink: 0;
    margin: 0;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__pagination {
    display: flex;
    justify-content: center;
    list-style: none;
  }
  .carousel__pagination-button {
    margin: 5px;
    width: 10px;
    height: 5px;
    border: 0;
    cursor: pointer;
    background-color: #8e98f3;
  }

  .carousel__pagination-button--active {
    background-color: #642afb;
  }

</style>