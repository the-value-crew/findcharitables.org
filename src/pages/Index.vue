<template>
  <Layout>
    <!-- hero -->
    <div class="p-4 xl:p-0">
      <HomeHeroSectionVue />

      <div class="xl:hidden">
        <g-image src="~/assets/images/2-circle.png" />
      </div>
    </div>

    <!-- stats -->
    <div
      class="
        xl:bg-green-background
        text-green-background text-center
        xl:text-white
      "
    >
      <div class="container xl:flex justify-between items-center md:py-25 py-6">
        <div class="xl:w-1/3">
          <p class="heading font-bold text-28px xl:text-40px">3+</p>
          <p class="heading xl:text-lg">Charitables listed</p>
        </div>
        <div class="xl:w-1/3 my-4 xl:mx-0">
          <p class="heading font-bold text-28px xl:text-40px">0+</p>
          <p class="heading xl:text-lg">Donated made</p>
        </div>
        <div class="xl:w-1/3">
          <p class="heading font-bold text-28px xl:text-40px">0+</p>
          <p class="heading xl:text-lg">Donations last year</p>
        </div>
        <g-image
          src="~/assets/images/2-circle.png"
          class="float-right xl:hidden"
        />
      </div>
    </div>

    <!-- Quick form -->
    <div class="bg-white">
      <div class="container relative xl:py-25 py-10">
        <p class="heading font-bold text-28px xl:text-54px">
          Add your charity to the list
        </p>
        <div class="flex flex-wrap">
          <div class="xl:mr-16 xl:w-1/2">
            <QuickForm />
          </div>
        </div>
        <div class="xl:hidden absolute left-2/4 mt-5">
          <g-image src="~/assets/images/2-circle-flipped.png" />
        </div>
      </div>
    </div>

    <!-- How it works -->
    <div class="bg-white mt-7 xl:py-25 py-6">
      <div class="container">
        <p class="heading text-28px xl:text-54px font-bold mb-16 xl:mb-24">
          How it works
        </p>

        <CharityProcess />
      </div>
    </div>

    <!-- FAQs -->
    <div
      class="mt-7 mx-auto w-11/12 bg-white xl:py-25 py-6 xl:px-30 rounded-lg"
      id="faqs"
    >
      <div class="xl:hidden container h-14">
        <g-image src="~/assets/images/2-circle.png" class="float-right" />
      </div>
      <div class="xl:flex xl:justify-between xl:items-top">
        <div class="xl:w-2/5 w-full mb-16 xl:mb-0">
          <p class="heading font-bold text-28px xl:text-54px">FAQs</p>
          <p class="text-text-primary my-8 text-lg">
            Everything you need to know about our endeavour. Can't find the
            answer you're looking for? Please send us your queries!
          </p>
          <a
            class="
              btn-primary
              text-white
              rounded-lg
              xl:py-4.5
              py-3
              px-7.5
              block
              xl:inline
              w-full
              text-center
              xl:w-auto
            "
            href="mailto:thevaluecrew@gmail.com"
          >
            Ask a question
          </a>
        </div>
        <div class="xl:w-2/5 xl:px-4">
          <FaqList />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import FaqList from "../components/FaqList.vue";
import CharityProcess from "../components/CharityProcess.vue";
import QuickForm from "../components/QuickForm.vue";
import HomeHeroSectionVue from "../components/HomeHeroSection.vue";

export default {
  metaInfo: {
    title: "Find Charitables",
  },

  components: { FaqList, CharityProcess, QuickForm, HomeHeroSectionVue },

  methods: {
    toggleCollaspe(e) {
      console.log(e);
      //toggle content
      var _parentElement = e.target.parentElement.parentElement;
      var _contentSection = _parentElement.children[1];

      var contentClassList = _contentSection.classList;
      contentClassList.toggle("hidden");

      // change icon
      var iconchildNodes = _parentElement.children[0].childNodes;
      for (var i = 1; i < iconchildNodes.length; i++) {
        var classList = iconchildNodes[i].classList;
        var classArray = Array.from(classList);
        if (classArray.includes("hidden")) {
          classList.remove("hidden");
        } else {
          classList.add("hidden");
        }
      }
    },
  },
};
</script>