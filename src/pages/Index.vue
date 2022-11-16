<template>
  <Layout>
    <div class="p-4 xl:p-0">
      <div
        class="
          xl:flex xl:justify-between
          h-96
          xl:h-166
          overflow-hidden
          relative
        "
      >
        <div class="xl:w-1/2 bg-no-repeat xl:bg-rectangle xl:pl-1/10">
          <p class="heading font-bold text-40px xl:text-54px mt-4 xl:mt-52">
            “It’s not how much we give but how much love we put into giving”
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
            -Mother Teresa
          </p>

          <!-- search -->
          <div
            class="
              rounded-lg
              border
              w-3/4
              mt-16
              bg-white
              items-center
              justify-between
              hidden
              md:flex
              xl:inline-flex
            "
          >
            <div class="flex-grow flex items-center">
              <div class="pl-4 pr-2">
                <font-awesome
                  :icon="['fa', 'search']"
                  class="text-text-secondary text-lg"
                />
              </div>
              <input
                type="text"
                name="search"
                class="focus:outline-none px-2 text-lg flex-grow"
                placeholder="Charity name or type"
              />
            </div>
            <button class="btn-primary p-4 rounded-r-lg text-white">
              Donate now
            </button>
          </div>
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
          <g-image
            src="~/assets/images/circle.png"
            class="absolute xl:hidden bottom-3 right-0"
          />
          <g-image
            src="~/assets/images/mother-teresa.png"
            class="
              absolute
              bottom-0
              right-3
              xl:static
              w-45.5
              xl:rounded-lg
              rounded-t-full rounded-br-full
              xl:w-full
            "
            alt="Mother Teresa"
          />
        </div>
      </div>
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
        <QuickForm />
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
        <div class="xl:w-2/5 w-full">
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
              py-4.5
              px-7.5
              w-full
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

export default {
  metaInfo: {
    title: "Find Charitables",
  },

  components: { FaqList, CharityProcess, QuickForm },

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