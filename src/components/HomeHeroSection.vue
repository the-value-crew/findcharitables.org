<template>
  <ClientOnly>
    <carousel
      :perPage="1"
      :autoplay="true"
      :autoplayHoverPause="true"
      :paginationActiveColor="'#01B279'"
      :paginationColor="'#B3FFE6'"
    >
      <slide v-for="(quote, index) in quotes" :key="index">
        <div
          class="
            xl:flex xl:justify-between
            h-80
            xl:h-166
            overflow-hidden
            relative
          "
        >
          <div
            class="
              xl:w-1/2
              bg-no-repeat
              xl:bg-rectangle xl:pl-1/10 xl:flex xl:flex-col
            "
          >
            <p class="heading font-bold text-4xl xl:text-6xl mt-4 xl:mt-52">
              “{{ quote.text }}”
            </p>
            <p
              class="
                heading
                font-normal
                xl:font-bold
                text-base
                xl:text-28px
                mt-2
                xl:mt-5
              "
            >
              -{{ quote.author }}
            </p>

            <!-- cta desktop -->
            <g-link
              class="
                hidden
                xl:block
                btn-primary
                text-white
                rounded-lg
                px-8
                py-4
                mt-10
                self-start
              "
              :to="quote.ctaLink"
            >
              <font-awesome :icon="['fa', quote.ctaIcon]" class="mr-2" />
              {{ quote.ctaText }}
            </g-link>
          </div>

          <div
            class="
              xl:w-2/5
              bg-no-repeat
              xl:bg-rectangle xl:bg-right-bottom-5 xl:pr-1/10
              -mt-10
              xl:mt-0
            "
          >
            <!-- cta mobile -->
            <g-link
              class="
                xl:hidden
                absolute
                bottom-0
                left-0
                btn-primary
                text-white
                rounded-lg
                px-4
                py-2
                mt-4
              "
              :to="quote.ctaLink"
            >
              <font-awesome :icon="['fa', quote.ctaIcon]" class="mr-2" />
              {{ quote.ctaText }}
            </g-link>

            <g-image
              src="~/assets/images/circle.png"
              class="absolute xl:hidden bottom-0 right-0 w-40 -z-1 xl:w-auto"
            />
            <g-image
              :src="
                require(`!!assets-loader!@images/home_hero_section/${quote.authorImg}`)
              "
              class="
                absolute
                bottom-0
                right-3
                xl:static
                w-36
                -z-1
                xl:rounded-lg
                rounded-t-full rounded-br-full
                xl:w-full
              "
              :alt="quote.author"
            />
          </div>
        </div>
      </slide>
    </carousel>
  </ClientOnly>
</template>

<script>
export default {
  name: "HomeHeroSection",
  components: {
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },

  data() {
    return {
      quotes: [
        {
          text: "Give what you have to give, it will come back to you, but do not think of that now.",
          author: "Swami Vivekananda",
          authorImg: "vivekananda.jpg",
          ctaIcon: "hand-holding-heart",
          ctaText: "Donate now",
          ctaLink: "/charitables",
        },

        {
          text: "It's not how much we give but how much love we put into giving.",
          author: "Mother Teresa",
          authorImg: "mother-teresa.png",
          ctaIcon: "lightbulb",
          ctaText: "Know more",
          ctaLink: "/#faqs",
        },

        {
          text: "If you light a lamp for somebody, it will also brighten your path.",
          author: "Gautam Buddha",
          authorImg: "buddha.jpg",
          ctaIcon: "hand-fist",
          ctaText: "Contribute us",
          ctaLink: "/about#contribute",
        },
      ],
    };
  },
};
</script>

<style>
</style>