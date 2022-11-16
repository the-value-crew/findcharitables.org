<template>
  <Layout>
    <div class="container my-0 xl:my-16">
      <div class="flex flex-col xl:flex-row">

        <!-- categories -->
        <div class="flex flex-wrap xl:block xl:w-1/4 xl:p-4 mb-8 xl:mb-0">
          <div
            class="
              flex
              px-2
              py-1
              m-1
              xl:m-0 xl:p-3 xl:justify-between
              items-center
              rounded-lg
              bg-green-primary
              xl:bg-white
              my-1
              cursor-pointer
            "
            v-for="edge in $static.categories.edges"
            :key="edge.node.id"
          >
            <p
              class="text-white xl:text-text-primary xl:text-base"
              v-html="edge.node.name"
            ></p>
            <p
              class="text-white xl:text-text-muted xl:text-sm"
              v-html="'(' + edge.node.count + ')'"
            ></p>
          </div>
        </div>

        <div class="w-full xl:w-3/4 xl:p-4 min-h-screen">
          <p class="font-bold text-xl xl:text-54px heading">
            23 child care related charities
          </p>
          <div class="my-4 grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div
              class="bg-white border xl:border-0 rounded-lg shadow p-5"
              v-for="edge in $static.charities.edges"
              :key="edge.node.id"
            >
              <g-image
                :alt="edge.node.name + ' cover'"
                :src="edge.node.featured_media_medium"
                class="w-full h-50.75 rounded-lg"
              />
              <div class="flex items-center mt-7">
                <g-image
                  :alt="edge.node.name + ' logo'"
                  :src="edge.node.logo"
                  :fit="'cover'"
                  class="h-20 w-20 rounded-full mr-2 xl:mr-4"
                />

                <div
                  class="
                    overflow-hidden
                    text-ellipsis
                    font-bold
                    text-28px
                    heading
                  "
                >
                  <a :href="'/' + edge.node.slug">{{ edge.node.name }}</a>
                </div>
              </div>
              <div class="p-2 w-full">
                <p
                  class="
                    hidden
                    text-justify
                    mb-4
                    xl:block
                    text-text-secondary
                    mt-2
                    leading-6
                    h-18
                    text-ellipsis
                    overflow-hidden
                  "
                >
                  We have been working for 100 years. Education, typewriting,
                  child care, we do everything. There is nothing we dont
                  do.nothing we dont do. If you have money to donate
                </p>
                <a
                  :href="'/' + edge.node.slug"
                  class="
                    w-full
                    block
                    text-center
                    xl:w-auto
                    bg-transparent
                    rounded
                    border border-green-primary
                    capitalize
                    text-green-primary
                    p-2
                  "
                  >donate</a
                >
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
    categories: allCategory {
        edges {
            node {
                id
                name
                count
            }
        }
    }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Charity List",
  },
};
</script>