<template>
  <Layout>
    <div class="flex justify-between h-166 overflow-hidden">
      <div class="w-1/2 bg-no-repeat bg-image pl-1/10">
        <p class="heading font-bold text-54px mt-52">“It’s not how much we give but how much love we put into giving”</p>
        <p class="heading font-bold text-28px mt-5">-Mother Teresa</p>

        <div class="rounded-lg border w-3/4 mt-4 bg-white flex items-center justify-between">
          <div class="w-3/4 flex">
            <div class="py-4 pl-7 pr-3">
            <font-awesome :icon="['fa', 'search']" class="text-text-secondary"/>
          </div>
          <input type="text" name="search" class="focus:outline-none w-4/5" placeholder="Charity name or type">
          </div>
          <button class="bg-green-primary p-4 rounded-lg text-white">Donate Now</button>
        </div>
      </div>
      <div class="w-2/5 bg-no-repeat bg-image bg-right-bottom-5 pr-1/10">
        <g-image src="~/assets/images/mother-teresa.png" class="w-full rounded" alt="Mother Teresa"/>
      </div>
    </div>
    <div class="bg-green-background text-white">
      <div class="w-4/5 m-auto flex justify-between items-center py-25">
        <div class="w-1/3">
          <p class="heading font-bold text-40px">985+</p>
          <p class="heading text-lg">Donations recieved</p>
        </div>
        <div class="w-1/3">
          <p class="heading font-bold text-40px">Rs.10 lakh+</p>
          <p class="heading text-lg">Money donated</p>
        </div>
        <div class="w-1/3">
          <p class="heading font-bold text-40px">Rs.5 lakh+</p>
          <p class="heading text-lg">Donated Last Year</p>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="w-4/5 m-auto py-25">
        <p class="heading font-bold text-54px">Add your charity to the list</p>
        <input type="text" class="mt-9 border rounded-lg p-3 px-4 focus:outline-none w-1/4" placeholder="Organization name">
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style scoped>
  .bg-image {
    background-image: url('../assets/images/rectangle-background.png');
  }
</style>