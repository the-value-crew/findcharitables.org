<template>
  <div class="xl:bg-backgroud min-h-screen relative">
    <!-- Initial data collection form -->
    <div
      v-show="showDialog"
      @click.self="showDialog = false"
      class="
        fixed
        bg-black bg-opacity-50
        h-screen
        w-screen
        top-0
        left-0
        z-top
        grid
        place-items-center
      "
    >
      <div class="mx-4 p-4 xl:w-1/2 xl:max-w-xl xl:p-8 bg-white rounded z-50">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-semibold text-text-primary">
            Initial data collection
          </h1>

          <font-awesome
            :icon="['fa', 'times-circle']"
            class="cursor-pointer text-text-secondary text-2xl"
            @click="showDialog = false"
          />
        </div>

        <p class="my-8 text-lg">
          We are collecting data for initial phase. If you are a suitale
          organization to fit our list, or you know someone who may be a fit,
          please fill up the form and become a part of us.
        </p>

        <div class="flex justify-center">
          <a
            href="https://forms.gle/H2kesvxmwGrXePpJ8"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary text-white rounded px-7.5 py-3 mx-auto"
            >Fill up the form</a
          >
        </div>
      </div>
    </div>

    <!-- navbar -->
    <div
      class="bg-white z-top shadow-md fixed w-full xl:relative xl:shadow-none"
    >
      <header
        class="container flex items-center justify-between xl:h-24 py-2 xl:py-0"
      >
        <!-- nav logo -->
        <g-link to="/">
          <g-image
            alt="The Value Crew"
            src="~/assets/images/findcharitables.png"
            class="h-16 w-auto hidden xl:block select-none"
          />
          <g-image
            alt="The Value Crew"
            src="~/assets/images/logo-sm.png"
            class="h-10 w-10 xl:hidden select-none"
          />
        </g-link>

        <!-- Desktop search -->
        <div class="hidden xl:block xl:w-1/3">
          <SearchInput />
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center">
          <g-link class="text-text-secondary ml-8 xl:ml-0" to="/" exact>Home</g-link>
          <g-link class="text-text-secondary ml-8 xl:ml-12" to="/charitables">
            Charitables
          </g-link>
          <g-link class="text-text-secondary ml-8 xl:ml-12" to="/about" exact>About</g-link>

          <button
            class="
              btn-primary
              text-white
              rounded-lg
              py-2
              px-4
              xl:py-4
              xl:px-7
              ml-12
              flex
              items-center
            "
            @click="showDialog = true"
          >
            <span
              class="
                rounded-full
                w-5
                h-5
                bg-white
                mr-2
                place-items-center
                relative
                hidden
                xl:grid
              "
            >
              <div
                class="
                  absolute
                  w-5
                  h-5
                  -z-10
                  rounded-full
                  bg-green-secondary
                  animate-ping
                "
              ></div>

              <font-awesome
                :icon="['fa', 'check-circle']"
                class="text-green-primary w-4 h-4 z-top"
              />
            </span>

            Get listed
          </button>
        </nav>

        <!-- mobile search -->
        <div class="xl:hidden flex-grow mx-4">
          <SearchInput />
        </div>

        <!-- mobile nav toggle -->
        <button class="xl:hidden" @click="mobileNav = true">
          <font-awesome
            :icon="['fa', 'bars']"
            class="text-text-secondary text-2xl"
          />
        </button>
      </header>
    </div>

    <!-- route content goes here -->
    <div class="pt-24 md:w-4/6 md:mx-auto xl:w-full">
      <slot />
    </div>

    <!-- footer -->
    <HomeFooter />

    <div
      class="
        fixed
        top-0
        left-0
        z-top
        h-screen
        w-screen
        bg-gray-100 bg-opacity-95
        grid
        items-center
      "
      v-show="mobileNav"
    >
      <div class="flex flex-col justify-center">
        <button class="mb-16">
          <font-awesome
            :icon="['fa', 'times']"
            class="text-text-secondary text-5xl"
            @click="mobileNav = false"
          />
        </button>

        <div class="flex flex-col text-3xl items-center font-semibold">
          <g-link
            class="text-text-secondary my-4"
            to="/"
            @click="mobileNav = false"
            >Home</g-link
          >
          <g-link
            class="text-text-secondary my-4"
            to="/charitables/"
            @click="mobileNav = false"
            >Charities</g-link
          >
          <g-link
            class="text-text-secondary my-4"
            to="/about/"
            @click="mobileNav = false"
            >About</g-link
          >

          <a
            href="https://forms.gle/H2kesvxmwGrXePpJ8"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-secondary mt-16"
            @click="mobileNav = false"
          >
            Get listed
            <font-awesome :icon="['fa', 'external-link']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput.vue";
import HomeFooter from "../components/HomeFooter.vue";

export default {
  name: "defaultLayout",
  components: { SearchInput, HomeFooter },
  data() {
    return {
      showDialog: false,
      mobileNav: false,
    };
  },
  methods: {},
};
</script>

<style>
em {
  background-color: #f4f7fb;
  font-style: normal;
}
</style>