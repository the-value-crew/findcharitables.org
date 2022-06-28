<template>
  <Layout>
    
    <div class="w-4/5 mx-auto my-17">
        <div class="flex">
            <div class="w-1/4 p-4">
                <div class="flex p-3 justify-between items-center rounded-lg bg-white my-1 cursor-pointer">
                    <p class="text-text-primary text-base">Child Care</p>
                    <p class="text-text-muted text-xs">(72)</p>
                </div>
                <div class="flex p-3 justify-between items-center rounded-lg my-1 cursor-pointer">
                    <p class="text-text-primary text-base">Education</p>
                    <p class="text-text-muted text-xs">(72)</p>
                </div>
                <div class="flex p-3 justify-between items-center rounded-lg my-1 cursor-pointer">
                    <p class="text-text-primary text-base">Environment</p>
                    <p class="text-text-muted text-xs">(72)</p>
                </div>
                <div class="flex p-3 justify-between items-center rounded-lg my-1 cursor-pointer">
                    <p class="text-text-primary text-base">Human Services</p>
                    <p class="text-text-muted text-xs">(72)</p>
                </div>
                <div class="flex p-3 justify-between items-center rounded-lg my-1 cursor-pointer">
                    <p class="text-text-primary text-base">International</p>
                    <p class="text-text-muted text-xs">(72)</p>
                </div>
                <div class="flex p-3 justify-between items-center rounded-lg my-1 cursor-pointer">
                    <p class="text-text-primary text-base">Animals</p>
                    <p class="text-text-muted text-xs">(72)</p>
                </div>
                <div class="flex p-3 justify-between items-center rounded-lg my-1 cursor-pointer">
                    <p class="text-text-primary text-base">Zoo and Aquariums</p>
                    <p class="text-text-muted text-xs">(72)</p>
                </div>
                <div class="flex p-3 justify-between items-center rounded-lg my-1 cursor-pointer">
                    <p class="text-text-primary text-base">Arts and Culture</p>
                    <p class="text-text-muted text-xs">(72)</p>
                </div>
                <div class="flex p-3 justify-between items-center rounded-lg my-1 cursor-pointer">
                    <p class="text-text-primary text-base">Community Development</p>
                    <p class="text-text-muted text-xs">(72)</p>
                </div>
            </div>
            <div class="w-3/4 p-4 min-h-screen">
                <p class="font-bold text-54px heading">23 child care related charities</p>
                <div class="my-4 grid grid-cols-2 gap-2">
                    <div class="bg-white rounded-lg shadow p-5">
                        <g-image alt="Chimalaya Charity Foundation cover" src="~/assets/images/chimalaya-charity-foundation-cover.png" class="w-full h-50.75"/>
                        <div class="flex justify-between mt-7">
                            <div class="w-20">
                                <g-image alt="Chimalaya Charity Foundation logo" src="~/assets/images/chimalaya-charity-foundation-logo.png" class="h-20 w-20 rounded-full"/>
                            </div>
                            <div class="w-4/5">
                                <a href="/charity-page/" class="font-bold text-28px heading">Chimalaya Charity Foundation</a>
                                <div class="flex items-center justify-between">
                                    <p class="text-text-secondary mt-2 leading-6 h-18 text-ellipsis overflow-hidden">
                                        We have been working for 100 years. Education, typewriting, child care, we do everything. 
                                        There is  nothing we dont do.nothing we dont do. If you have money to donate
                                    </p>
                                    <div class="p-2">
                                        <button class="bg-transparent rounded border border-green-primary capitalize text-green-primary p-2">donate</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow p-5">
                        <g-image alt="Save the children cover" src="~/assets/images/save-the-children-cover.png" class="w-full h-50.75"/>
                        <div class="flex justify-between mt-7">
                            <div class="w-20">
                                <g-image alt="Save the children logo" src="~/assets/images/save-the-children-logo.png" class="h-20 w-20 rounded-full"/>
                            </div>
                            <div class="w-4/5">
                                <a href="/charity-page/" class="font-bold text-28px heading">Save the children</a>
                                <div class="flex items-center justify-between">
                                    <p class="text-text-secondary mt-2 leading-6 h-18 text-ellipsis overflow-hidden">
                                        We have been working for 100 years. Education, typewriting, child care, we do everything. 
                                        There is nothing we dont do.nothing we dont do. If you have money to donate
                                    </p>
                                    <div class="p-2">
                                        <button class="bg-transparent rounded border border-green-primary capitalize text-green-primary p-2">donate</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Search'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
