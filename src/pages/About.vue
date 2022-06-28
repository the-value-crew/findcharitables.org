<template>
  <Layout>
    <div class="relative h-160 -mt-15">
      <div id="background" class="flex justify-between items-end -z-50">
        <div class="bg-green-secondary h-191 w-1/2 rounded-150px"></div>
        <div class="bg-green-secondary h-160 rounded-l-full w-60.5"></div>
      </div>
      <div class="absolute w-full inset-0 py-10">
        <div class="flex mt-14 items-center">
          <div class="w-2/5 pt-15 pl-1/10">
            <p class="heading font-vold text-54px">Who are we?</p>
            <p class="mt-7">
              People want to donate but they don't know where or who to donate. We have listed different types of charities where you can donate 
              according to your preferences and values.
              <br> <br>
              People want to donate but they don't know where or who to donate. We have listed different types of charities where you can donate 
              according to your preferences and values.
            </p>
            <button class="mt-7 border border-green-primary text-green-primary bg-white rounded-lg px-6.5 py-4.5">
              Donate Now
            </button>
          </div>
          <div class="w-3/5">
            <g-image src="~/assets/images/who-are-we.png" class="w-full h-auto rounded-150px"/>
          </div>
        </div>
      </div>
    </div>

    <div class="container bg-white py-25 z-50 relative rounded-lg">
      <p class="uppercase font-bold text-54px text-center">OUR TEAM</p>
      <div class="grid grid-cols-2 gap-20 mx-49.25 mt-20">
        <div class="flex items-center">
          <div class="h-37.5 w-37.5 rounded-full bg-red-200">
            <g-image src="~/assets/images/our-team.png" class="w-auto h-auto"/>
          </div>
          <div class="pl-8">
            <p class="heading text-28px font-bold">Nabin Gaire</p>
            <p class="text-text-muted text-lg">CEO, The value crew</p>
          </div>
        </div>
        
        <div class="flex items-center">
          <div class="h-37.5 w-37.5 rounded-full bg-red-200">
            <g-image src="~/assets/images/our-team.png" class="w-auto h-auto"/>
          </div>
          <div class="pl-8">
            <p class="heading text-28px font-bold">Nabin Gaire</p>
            <p class="text-text-muted text-lg">CEO, The value crew</p>
          </div>
        </div>

        <div class="flex items-center">
          <div class="h-37.5 w-37.5 rounded-full bg-red-200">
            <g-image src="~/assets/images/our-team.png" class="w-auto h-auto"/>
          </div>
          <div class="pl-8">
            <p class="heading text-28px font-bold">Nabin Gaire</p>
            <p class="text-text-muted text-lg">CEO, The value crew</p>
          </div>
        </div>

        <div class="flex items-center">
          <div class="h-37.5 w-37.5 rounded-full bg-red-200">
            <g-image src="~/assets/images/our-team.png" class="w-auto h-auto"/>
          </div>
          <div class="pl-8">
            <p class="heading text-28px font-bold">Nabin Gaire</p>
            <p class="text-text-muted text-lg">CEO, The value crew</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white mt-7 py-25">
      <div class="container flex">
        <div class="w-1/2">
          <g-image src="~/assets/images/about-us.png" class="h-auto w-full"/>
        </div>
        <div class="w-1/2 pl-8">
          <p class="font-bold text-54px heading">About Us</p>
          <p class="mt-10">
            People want to donate but they don't know where or who to donate. We have listed different types of charities where you can donate according 
            to your preferences and values.People want to donate but they don't know where or who to donate. We have listed different types of charities 
            where you can donate according to your preferences and values.People want to donate but they don't know where or who to donate. We have listed 
            different types of charities where you can donate according to your preferences and values.People want to donate but they don't know where or 
            who to donate. We have listed different types of charities where you can donate according to your preferences and values.People want to donate 
            but they don't know where or who to donate. We have listed different types of charities where you can donate according to your preferences and values.
            <br> <br>
            People want to donate but they don't know where or who to donate. We have listed different types of charities where you can donate according to 
            your preferences and values.People want to donate but they don't know where or who to donate. We have listed different types of charities where 
            you can donate according to your preferences and values.People want to donate but they don't know where or who to donate. We have listed different 
            types of charities where you can donate according to your preferences and values.People want to donate but they don't know where or who to donate. 
            We have listed different types of charities where you can donate according to your preferences and values.People want to donate but they don't know 
            where or who to donate. We have listed different types of charities where you can donate according to your preferences and values.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-white mt-7 py-25">
      <div class="container flex">
        <div class="w-1/2">
          <p class="heading text-54px font-bold">How it works</p>
          <ol class="mt-10 list-decimal pl-7">
            <li>
              <p class="heading text-lg font-medium text-text-primary">
                Search for charities.
              </p>
              <p class="text-text-secondary">
                Go into the search bar and type in the type of charity you'd like to donate to.
              </p>
            </li>
            <li class="my-10">
              <p class="heading text-lg font-medium text-text-primary">
                Select a charity.
              </p>
              <p class="text-text-secondary">
                Find the perfect charity with values that aligns with yours
              </p>
            </li>
            <li>
              <p class="heading text-lg font-medium text-text-primary">
                Donate
              </p>
              <p class="text-text-secondary">
                Donate any amount as you desire
              </p>
            </li>
          </ol>
          
        </div>
        <div class="w-1/2 pl-4">
          <g-image src="~/assets/images/how-it-works.png" class="h-auto w-full"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
