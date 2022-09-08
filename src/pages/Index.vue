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

          <div
            class="
              rounded-lg
              border
              w-3/4
              mt-4
              bg-white
              flex
              items-center
              justify-between
              hidden
              xl:inline-flex
            "
          >
            <div class="w-3/4 flex">
              <div class="py-4 pl-7 pr-3">
                <font-awesome
                  :icon="['fa', 'search']"
                  class="text-text-secondary"
                />
              </div>
              <input
                type="text"
                name="search"
                class="focus:outline-none w-4/5"
                placeholder="Charity name or type"
              />
            </div>
            <button class="bg-green-primary p-4 rounded-lg text-white">
              Donate Now
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
    <div
      class="
        xl:bg-green-background
        text-green-background text-center
        xl:text-white
      "
    >
      <div class="container xl:flex justify-between items-center md:py-25 py-6">
        <div class="xl:w-1/3">
          <p class="heading font-bold text-28px xl:text-40px">0+</p>
          <p class="heading xl:text-lg">Donations recieved</p>
        </div>
        <div class="xl:w-1/3 my-4 xl:mx-0">
          <p class="heading font-bold text-28px xl:text-40px">Rs 0 lakh+</p>
          <p class="heading xl:text-lg">Money donated</p>
        </div>
        <div class="xl:w-1/3">
          <p class="heading font-bold text-28px xl:text-40px">Rs 0 lakh+</p>
          <p class="heading xl:text-lg">Donated Last Year</p>
        </div>
        <g-image
          src="~/assets/images/2-circle.png"
          class="float-right xl:hidden"
        />
      </div>
    </div>
    <div class="bg-white">
      <div class="container relative xl:py-25 py-10">
        <p class="heading font-bold text-28px xl:text-54px">
          Add your charity to the list
        </p>
        <input
          type="text"
          class="
            mt-9
            border
            rounded-lg
            p-3
            px-4
            focus:outline-none
            xl:w-1/3
            w-full
          "
          placeholder="Organization name"
        />

        <fieldset
          class="rounded-lg border xl:w-1/3 mt-7 p-3 flex items-center mb-8"
        >
          <legend class="text-text-muted text-xs">Phone</legend>
          <div class="border-r px-4">
            <g-image src="~/assets/images/nepal.png" class="h-5 w-5" />
          </div>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Contact Number"
            class="w-full px-4 focus:outline-none"
            onwheel="return false;"
          />
        </fieldset>

        <a
          class="
            bg-green-primary
            text-white
            rounded-xl
            px-7.5
            py-4.5
            mt-4.5
            w-full
            xl:w-auto
          "
          target="_blank"
          href="https://forms.gle/H2kesvxmwGrXePpJ8"
        >
          List my charity
        </a>
        <div class="xl:hidden absolute left-2/4 mt-5">
          <g-image src="~/assets/images/2-circle-flipped.png" />
        </div>
      </div>
    </div>

    <div class="bg-white mt-7 xl:py-25 py-6">
      <div class="container xl:flex">
        <div class="xl:w-1/2">
          <p class="heading text-28px xl:text-54px font-bold">How it works</p>
          <ol class="mt-10 list-decimal pl-7">
            <li>
              <p class="heading text-lg font-medium text-text-primary">
                Search for charities.
              </p>
              <p class="text-text-secondary">
                Head on to the organization page and choose the type of charity
                you want to donate to (an orphanage, old-age home, schools
                etc.). You can also search for the organizations here.
              </p>
            </li>
            <li class="my-10">
              <p class="heading text-lg font-medium text-text-primary">
                Select a charity.
              </p>
              <p class="text-text-secondary">
                Select the perfect organization that aligns with your values Go
                through their details to scale their credibility. We even
                recommend contacting them and inquire how your charity is being
                used.
              </p>
            </li>
            <li>
              <p class="heading text-lg font-medium text-text-primary">
                Donate
              </p>
              <p class="text-text-secondary">
                We are just the bridge between you and the charitables. You need
                to donate directly to the organization. You can donate in form
                of :money, goods or service.
              </p>
            </li>
          </ol>
        </div>
        <div class="xl:w-1/2 mt-5 xl:mt-0 pl-4">
          <g-image
            src="~/assets/images/how-it-works-v2.png"
            class="h-auto w-80"
          />
        </div>
      </div>
    </div>

    <div
      class="mt-7 mx-auto w-11/12 bg-white xl:py-25 py-6 xl:px-30 rounded-lg"
    >
      <div class="xl:hidden container h-14">
        <g-image src="~/assets/images/2-circle.png" class="float-right" />
      </div>
      <div class="xl:flex xl:justify-between xl:items-center">
        <div class="xl:w-2/5 w-full">
          <p class="heading font-bold text-28px xl:text-54px">FAQ</p>
          <p class="text-text-primary mt-8">
            Everything you need to know about the product and billing. Can't
            find the answer you're looking for? Please send us your queries!
          </p>
          <button
            class="
              mt-5
              bg-green-primary
              text-white
              rounded-lg
              py-4.5
              px-7.5
              w-full
              xl:w-auto
            "
          >
            Ask a question
          </button>
        </div>
        <div class="xl:w-2/5 xl:px-4">
          <div>
            <div
              class="flex justify-between my-9 cursor-pointer"
              @click="toggleCollaspe"
            >
              <p class="heading font-medium text-lg w-full">
                Who am I donating to?
              </p>
              <div class="plus hidden">
                <font-awesome
                  :icon="['fa', 'circle-plus']"
                  class="text-text-secondary"
                />
              </div>
              <div class="minus">
                <font-awesome
                  :icon="['fa', 'circle-minus']"
                  class="text-text-secondary minus"
                />
              </div>
            </div>
            <p
              class="
                text-text-primary
                mt-5
                content
                transition-all
                duration-500
                ease-in-out
              "
            >
              You are directly donating to the organization of your choice. We
              do not keep anything for ourselves and are not a middleman.
              However, if you like the platform, consider donating to us. We
              have many ideas to improve the platform. Your support will help us
              to bring these ideas to life.
            </p>
          </div>

          <div>
            <div
              class="flex justify-between my-9 cursor-pointer"
              @click="toggleCollaspe"
            >
              <p class="heading font-medium text-lg w-full">
                How do I know my donations are making an impact?
              </p>
              <div class="plus">
                <font-awesome
                  :icon="['fa', 'circle-plus']"
                  class="text-text-secondary"
                />
              </div>
              <div class="minus hidden">
                <font-awesome
                  :icon="['fa', 'circle-minus']"
                  class="text-text-secondary minus"
                />
              </div>
            </div>
            <p
              class="
                text-text-primary
                mt-5
                content
                transition-all
                duration-500
                ease-in-out
                hidden
              "
            >
              As a donor, you are responsible for choosing the organization you
              want to help, the one that aligns with your values. We even
              recommend contacting them to inquire how the donations will be
              used.
            </p>
          </div>

          <div>
            <div
              class="flex justify-between my-9 cursor-pointer"
              @click="toggleCollaspe"
            >
              <p class="heading font-medium text-lg w-full">
                I cannot find the charity I am searching for.
              </p>
              <div class="plus">
                <font-awesome
                  :icon="['fa', 'circle-plus']"
                  class="text-text-secondary"
                />
              </div>
              <div class="minus hidden">
                <font-awesome
                  :icon="['fa', 'circle-minus']"
                  class="text-text-secondary minus"
                />
              </div>
            </div>
            <p
              class="
                text-text-primary
                mt-5
                content
                transition-all
                duration-500
                ease-in-out
                hidden
              "
            >
              We are continuously looking to add organizations to our database.
              If you know one help to instill the culture of giving by adding
              the organization to our platform here.
            </p>
          </div>

          <div>
            <div
              class="flex justify-between items-center my-9 cursor-pointer"
              @click="toggleCollaspe"
            >
              <p class="heading font-medium text-lg w-full">
                What can I donate?
              </p>
              <div class="plus">
                <font-awesome
                  :icon="['fa', 'circle-plus']"
                  class="text-text-secondary"
                />
              </div>
              <div class="minus hidden">
                <font-awesome
                  :icon="['fa', 'circle-minus']"
                  class="text-text-secondary minus"
                />
              </div>
            </div>
            <p
              class="
                text-text-primary
                mt-5
                content
                transition-all
                duration-500
                ease-in-out
                hidden
              "
            >
              The type of donations an organization recieves can be found out in
              their respective pages. We encourage the organizations to not only
              deal in money but also clothes, food, other goods and even
              volunteers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Find Charitables",
  },

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