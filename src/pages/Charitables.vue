<template>
  <Layout>
    <div class="container">
      <div class="flex flex-col xl:flex-row">
        <!-- categories -->
        <div
          class="
            flex flex-wrap
            xl:block xl:w-1/4 xl:p-4
            mb-8
            xl:mb-0 xl:bg-white xl:rounded-lg xl:shadow
          "
        >
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
              shadow
              xl:shadow-none
              my-2
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

        <div class="w-full xl:w-3/4 xl:ml-12 min-h-screen">
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-12">
            <div
              class="bg-white border xl:border-0 rounded-lg shadow max-w-md "
              v-for="edge in $static.charities.edges"
              :key="edge.node.id"
            >
              <!-- cover image -->
              <g-image
                :alt="edge.node.name + ' cover'"
                :src="edge.node.featured_media_medium"
                class="w-full h-52 rounded-t-lg"
              />

              <!-- profile image -->
              <div
                class="
                  h-20
                  w-20
                  bg-white
                  rounded-full
                  mx-4
                  transform
                  -translate-y-1/2
                "
              >
                <g-image
                  :alt="edge.node.name + ' logo'"
                  :src="edge.node.logo"
                  :fit="'cover'"
                  class="h-20 w-20 rounded-full"
                />
              </div>

              <div class="py-4 px-4 -mt-10">
                <a
                  :href="'/' + edge.node.slug"
                  class="
                    overflow-hidden
                    text-ellipsis
                    font-semibold
                    text-28px text-text-primary
                  "
                  >{{ edge.node.name }}</a
                >

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
                    block
                    btn-primary
                    text-white
                    w-full
                    py-4
                    rounded
                    text-center text:xl
                  "
                >
                  <font-awesome
                    :icon="['fa', 'hand-holding-heart']"
                    class="text-white mr-2"
                  />
                  Donate
                </a>
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