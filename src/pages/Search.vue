<template>
  <Layout>
    
    <div class="container my-17">
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
                    <div class="bg-white rounded-lg shadow p-5" v-for="edge in $static.charities.edges" :key="edge.node.id">
                        <g-image :alt="edge.node.name + ' cover'" :src="edge.node.featured_media_medium" class="w-full h-50.75 rounded-lg"/>
                        <div class="flex justify-between mt-7">
                            <div class="w-20">
                                <g-image :alt="edge.node.name + ' logo'" :src="edge.node.logo" class="h-20 w-20 rounded-full"/>
                            </div>
                            <div class="w-4/5">
                                <div class="overflow-hidden text-ellipsis font-bold text-28px heading h-17">
                                    <a :href="'/' + edge.node.slug" >{{ edge.node.name }}</a>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-text-secondary mt-2 leading-6 h-18 text-ellipsis overflow-hidden w-73%">
                                        We have been working for 100 years. Education, typewriting, child care, we do everything. 
                                        There is  nothing we dont do.nothing we dont do. If you have money to donate
                                    </p>
                                    <div class="p-2">
                                        <a :href="'/' + edge.node.slug" class="bg-transparent rounded border border-green-primary capitalize text-green-primary p-2">donate</a>
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

<static-query>
query {
  charities: allCharity {
    edges {
      node {
        id
        name
        slug
        featured_media_large
        featured_media_medium
        featured_media_thumbnail
        logo
      }
    }
  }
}
</static-query>

<script>
export default {
    metaInfo: {
        title: 'Charity List'
    }
}
</script>