<template>
  <div class="flex flex-col xl:grid xl:grid-cols-3 xl:gap-16">
    <!-- search -->
    <div class="flex flex-col mb-20 mx-4 xl:m-0">
      <div
        class="
          bg-white
          border-4
          rounded-full
          border-green-primary
          w-24
          h-24
          xl:w-36 xl:h-36
          grid
          place-items-center
          self-center
        "
      >
        <g-image
          src="~/assets/images/charity_process/search.png"
          class="h-1/2 w-auto"
        />
      </div>
      <p
        class="
          heading
          text-2xl
          font-semibold
          text-green-primary text-center
          my-4
        "
      >
        Search
      </p>
      <p class="text-text-secondary text-justify text-lg">
        Head on to
        <g-link to="/charitables" class="app-link">charitables</g-link>
        list and choose the type of organization you want to donate to i.e. an orphanage,
        schools etc. Study them in detail regarding what they accept in donation.
      </p>
    </div>

    <!-- select -->
    <div class="flex flex-col mb-20 mx-4 xl:m-0">
      <div
        class="
          bg-white
          border-4
          rounded-full
          border-green-primary
          w-24
          h-24
          xl:w-36 xl:h-36
          grid
          place-items-center
          self-center
        "
      >
        <g-image
          src="~/assets/images/charity_process/select.png"
          class="h-1/2 w-auto"
        />
      </div>
      <p
        class="
          heading
          text-2xl
          font-semibold
          text-green-primary text-center
          my-4
        "
      >
        Select
      </p>
      <p class="text-text-secondary text-justify text-lg">
        Select organization that aligns with your values by going through
        their details to scale the credibility. We recommend contacting
        them to inquire how your aid will be used.
      </p>
    </div>

    <!-- donate -->
    <div class="flex flex-col mb-20 mx-4 xl:m-0">
      <div
        class="
          bg-white
          border-4
          rounded-full
          border-green-primary
          w-24
          h-24
          xl:w-36 xl:h-36
          grid
          place-items-center
          self-center
        "
      >
        <g-image
          src="~/assets/images/charity_process/donate.png"
          class="h-1/2 w-auto"
        />
      </div>
      <p
        class="
          heading
          text-2xl
          font-semibold
          text-green-primary text-center
          my-4
        "
      >
        Donate
      </p>
      <p class="text-text-secondary text-justify text-lg">
        We are just the bridge between you and the charitables. You need to
        donate directly to the organization. You can donate in form of money,
        goods or service as per their needs.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharityProcess",
};
</script>

<style>
</style>