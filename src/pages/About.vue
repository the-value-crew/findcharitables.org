<template>
  <Layout>
    <!-- hero -->
    <div class="relative h-160 -mt-15">
      <div
        class="hidden xl:flex justify-between items-end -z-50"
      >
        <div class="bg-green-secondary h-191 w-1/2 rounded-150px"></div>
        <div class="bg-green-secondary h-160 rounded-l-full w-60.5"></div>
      </div>
      <div class="xl:absolute w-full px-4 xl:px-0 inset-0 py-10">
        <div class="flex mt-14 items-center">
          <div class="xl:w-2/5 xl:pt-15 xl:pl-1/10">
            <p class="heading font-bold text-5xl xl:text-54px text-center xl:text-left">
              Why this project?
            </p>
            <p class="mt-7 text-xl text-justify xl:text-left">
              People want to donate but they don't know where or who to donate.
              We have listed different types of charities where you can donate
              according to your preferences and values.
            </p>
            <p class="text-xl mt-8 text-justify xl:text-left">
              It's a part of our CSR(Corporate Social Responsibility) program at
              The Value Crew.
            </p>

            <div class="mt-8 flex justify-center xl:mt-16 xl:justify-start">
              <a href="#contribute" class="btn-primary-light px-6.5 py-4.5">
                Contribute to our endeavour
              </a>
            </div>
          </div>
          <div class="hidden xl:block w-3/5 pl-16">
            <g-image
              src="~/assets/images/who-are-we.jpg"
              class="w-full h-auto rounded-150px"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Our team -->
    <div
      class="
        container
        mt-16
        xl:mt-24 xl:py-24
        bg-white
        z-50
        relative
        rounded-lg
      "
    >
      <p class="uppercase font-bold text-5xl xl:text-54px text-center">OUR TEAM</p>
      <div
        class="
          flex flex-col
          gap-16
          xl:grid xl:grid-cols-2 xl:gap-20 xl:mx-49.25
          mt-20
        "
      >
        <div class="flex flex-col xl:flex-row items-center">
          <div class="h-37.5 w-37.5 rounded-full bg-red-200">
            <g-image
              src="~/assets/images/team/bibhuti.jpeg"
              class="w-auto h-auto rounded-full"
            />
          </div>
          <div class="xl:pl-8 text-center xl:text-left mt-6 xl:mt-0">
            <p class="heading text-28px font-bold">Bibhuti Poudyal</p>
            <p class="text-text-muted text-lg">Technical contributor</p>
          </div>
        </div>

        <div class="flex flex-col xl:flex-row items-center">
          <div class="h-37.5 w-37.5 rounded-full bg-red-200">
            <g-image
              src="~/assets/images/team/kishor.png"
              class="w-auto h-auto rounded-full"
            />
          </div>
          <div class="xl:pl-8 text-center xl:text-left mt-6 xl:mt-0">
            <p class="heading text-28px font-bold">Kishor K. Khadka</p>
            <p class="text-text-muted text-lg">Designer</p>
          </div>
        </div>

        <div class="flex flex-col xl:flex-row items-center">
          <div class="h-37.5 w-37.5 rounded-full bg-red-200">
            <g-image
              src="~/assets/images/team/roshan.jpeg"
              class="w-auto h-auto rounded-full"
            />
          </div>
          <div class="xl:pl-8 text-center xl:text-left mt-6 xl:mt-0">
            <p class="heading text-28px font-bold">Roshan Chapagain</p>
            <p class="text-text-muted text-lg">Technical contributor</p>
          </div>
        </div>

        <div class="flex flex-col xl:flex-row items-center">
          <div class="h-37.5 w-37.5 rounded-full bg-red-200">
            <g-image
              src="~/assets/images/team/shrijal.jpeg"
              class="w-auto h-auto rounded-full"
            />
          </div>
          <div class="xl:pl-8 text-center xl:text-left mt-6 xl:mt-0">
            <p class="heading text-28px font-bold">Shrijal Kaphle</p>
            <p class="text-text-muted text-lg">Technical contributor</p>
          </div>
        </div>
      </div>
    </div>

    <!-- About us -->
    <div class="bg-white mt-6 py-16 xl:py-25">
      <div class="container flex">
        <div class="hidden xl:block w-1/2">
          <g-image src="~/assets/images/about_us.svg" class="h-auto w-full" />
        </div>
        <div class="xl:w-1/2 xl:pl-8 text-justify xl:text-left">
          <p class="font-bold text-5xl xl:text-54px mb-8 heading text-center xl:text-left">
            About Us
          </p>
          <p class="text-xl">
            We are a group of people with varied skillset but common mindset of
            contributing to society. We are the members of
            <a
              href="http://thevaluecrew.com"
              target="_blank"
              rel="noopener noreferrer"
              class="app-link"
              >The Value Crew</a
            >
            .
          </p>
          <p class="mt-8 text-xl">
            The Value Crew is a tech company from Kathmandu, Nepal established
            in 2019. It's not just a service provider but a value giver; who
            will help you to help yourself.
          </p>
          <p class="mt-8 text-xl">
            People want to donate but they don't know where or who to donate. We
            have listed different types of charities where you can donate
            according to your preferences and values.
          </p>
        </div>
      </div>
    </div>

    <!-- How it works -->
    <div class="bg-white mt-6 pt-16 xl:py-25">
      <div class="container">
        <p
          class="
            heading
            text-5xl xl:text-54px
            font-bold
            mb-16
            xl:mb-24
            text-center
            xl:text-left
          "
        >
          How it works
        </p>
        <CharityProcess />
      </div>
    </div>

    <!-- Contribute -->
    <div class="bg-white mt-6 py-16 xl:py-25">
      <div class="container" id="contribute">
        <p
          class="
            heading
            text-54px
            font-bold
            mb-16
            text-center
            xl:text-left
          "
        >
          Contribute
        </p>

        <p class="text-lg">
          It's a CSR project from the members of The Value Crew. The company
          handles the technical, managerial and financial aspects of the
          project. However, we really appreciate your help to grow bigger.
        </p>

        <p class="text-lg mt-4">
          These are some of the areas you can contribute to.
        </p>

        <p class="text-lg mt-4">
          <span class="font-bold">Technical</span>
          : The code for this project is Open Source at
          <a
            href="https://github.com/the-value-crew/findcharitables.org"
            target="_blank"
            rel="noopener noreferrer"
            class="app-link"
            >Github</a
          >
          . Feel free to improve codebase and submit a PR.
        </p>
        <p class="text-lg mt-4">
          <span class="font-bold">Financial</span>
          : This projects requires a domain and a server to run. We are paying
          the cost annually. You can support us by paying the bills. Moreover,
          to motivate the team, you can
          <a
            href="https://www.buymeacoffee.com/findcharitable"
            class="app-link"
            target="_blank"
            rel="noopener noreferrer"
            >buy them a coffee.</a
          >
        </p>

        <p class="text-lg mt-4">
          If you want to contribute in any other way, please
          <a href="mailto:thevaluecrew@gmail.com" class="app-link"
            >send us an email.</a
          >
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
import CharityProcess from "../components/CharityProcess.vue";
export default {
  metaInfo: {
    title: "About us",
  },
  components: { CharityProcess },
};
</script>
