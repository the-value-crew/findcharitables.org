<template>
  <Layout>
    <g-image
      :alt="$context.name + ' cover'"
      :src="$context.featured_media_large"
      class="w-full h-132.25"
    />

    <div class="w-full bg-white py-4">
      <div class="container flex flex-wrap justify-center xl:justify-between items-start">
        <!-- logo+ title -->
        <div class="flex flex-wrap justify-center xl:justify-start items-start mt-4">
          <div
            class="
              rounded-full
              h-36
              w-36
              shadow
              bg-white
              transform
              -translate-y-1/2
            "
          >
            <g-image
              :alt="$context.name + ' logo'"
              :src="$context.logo"
              class="h-36 w-36 rounded-full"
            />
          </div>
          <h1 class="font-semibold text-4xl -mt-10 md:mt-0 xl:mt-0 xl:text-6xl xl:pl-8 text-text-primary">{{ $context.name }}</h1>
        </div>

        <button
          class="
            btn-primary
            rounded
            border border-green-primary
            text-white
            mt-2
            py-4
            px-7
          "
        >
          <font-awesome
            :icon="['fa', 'hand-holding-heart']"
            class="text-white mr-2"
          />
          Donate
        </button>
      </div>
    </div>

    <div class="my-8 w-full py-12 bg-white">
      <div
        class="m-auto container charity-content"
        v-html="$context.content"
      ></div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "CharityPageTemplate",
  metaInfo() {
    return {
      title: this.$context.name,
      meta: [
        { name: "robots", content: this.$context.robots },
        { name: "canonical", content: this.$context.canonical },
        { name: "og:locale", content: this.$context.og_locale },
        { name: "og:type", content: this.$context.og_type },
        { name: "og:title", content: this.$context.og_title },
        { name: "og:description", content: this.$context.og_description },
        { name: "og:url", content: this.$context.og_url },
        { name: "og:site_name", content: this.$context.og_site_name },
        { name: "article_publisher", content: this.$context.article_publisher },
        {
          name: "article_modified_time",
          content: this.$context.article_modified_time,
        },
        { name: "author", content: this.$context.author },
        { name: "twitter_card", content: this.$context.twitter_card },
        { name: "reading_time", content: this.$context.reading_time },
      ],
    };
  },
};
</script>

<style lang="css">
.charity-content {
  @apply text-text-primary;
}

.charity-content h2 {
  @apply text-2xl font-semibold mt-8 mb-4;
}

.charity-content p {
  @apply text-lg;
}
</style>