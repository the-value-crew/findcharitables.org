<template>
  <Layout>
    <div class="container">
      <div class="flex flex-col xl:flex-row">
        <!-- categories -->
        <div
          class="
            flex flex-wrap
            justify-center
            xl:block xl:w-1/4 xl:p-2 xl:h-auto
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
              border-2 border-green-primary
              xl:border-0 xl:bg-white
              shadow
              xl:shadow-none
              my-2
              cursor-pointer
              transition
              select-none
            "
            :class="{
              'bg-green-secondary xl:bg-green-secondary':
                selectedCategory == category.id,
            }"
            v-for="category in categories"
            :key="category.id"
            @click="() => (selectedCategory = category.id)"
          >
            <span class="text-green-primary xl:text-text-primary xl:text-base">
              {{ category.name }}
            </span>

            <span class="text-green-primary xl:text-text-muted xl:text-sm">
              ({{ category.count }})
            </span>
          </div>
        </div>

        <div class="w-full xl:w-3/4 xl:ml-12 min-h-screen">
          <div
            class="grid grid-cols-1 place-items-center xl:grid-cols-2 gap-12"
          >
            <div
              class="bg-white border xl:border-0 rounded-lg shadow max-w-md"
              v-for="charity in filteredCharities"
              :key="charity.id"
            >
              <!-- cover image -->
              <g-image
                :alt="charity.name + ' cover'"
                :src="charity.featured_media_large"
                class="w-full h-36 xl:h-52 rounded-t-lg"
                :quality="'100'"
              />

              <!-- profile image -->
              <div
                class="
                  h-20
                  w-20
                  bg-white
                  rounded-full
                  mx-auto
                  xl:mx-4
                  transform
                  -translate-y-1/2
                "
              >
                <g-image
                  :alt="charity.name + ' logo'"
                  :src="charity.logo"
                  class="h-20 w-20 rounded-full"
                  :quality="'100'"
                />
              </div>

              <div class="py-4 px-4 -mt-10">
                <g-link
                  :to="`/charitables/${charity.slug}`"
                  class="
                    overflow-hidden
                    text-ellipsis
                    font-semibold
                    block
                    mb-4
                    text-2xl text-center
                    xl:text-left xl:text-28px
                    text-text-primary
                  "
                  >{{ charity.name }}</g-link
                >

                <p
                  class="
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
                  {{ charity.excerpt }}
                </p>
                <g-link
                  :to="`/charitables/${charity.slug}`"
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
                </g-link>
              </div>
            </div>
          </div>

          <!-- No match found -->
          <div
            v-show="!filteredCharities.length"
            class="w-full text-center my-16"
          >
            <p class="text-xl text-text-secondary">
              No match found according to your preferences!
            </p>

            <button
              class="
                btn-primary
                rounded
                text-white text-base
                px-8
                py-4
                my-8
                font-normal
              "
              @click="() => (selectedCategory = 'all')"
            >
              Reset filters
            </button>
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
                excerpt
                category
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
  name: "Charitables",
  metaInfo: {
    title: "Charitables - FindCharitables",
  },

  data() {
    return {
      categories: null,
      charities: null,
      selectedCategory: null,
    };
  },

  created() {
    this.categories = this.$static.categories.edges.map((edge) => edge.node);
    this.charities = this.$static.charities.edges.map((edge) => {
      return {
        ...edge.node,
        category: edge.node.category
          ? edge.node.category.map((c) => c.toString())
          : [],
      };
    });

    this.categories.unshift({
      id: "all",
      name: "All",
      count: this.charities.length,
    });
    this.selectedCategory = "all";
  },

  computed: {
    filteredCharities() {
      if (this.selectedCategory == "all") return this.charities;
      return this.charities.filter((charity) =>
        charity.category
          ? charity.category.includes(this.selectedCategory)
          : false
      );
    },
  },
};
</script>