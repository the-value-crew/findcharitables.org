<template>
  <Layout>
        <g-image :alt="$context.name + ' cover'" :src="$context.featured_media_large" class="w-full h-132.25"/>   
        <div class="h-40 w-full bg-white py-4">
            <div class="container flex justify-between items-start">
                <div id="logo" class="flex items-start">
                    <div class="h-37.5 w-37.5 relative">
                        <div class="rounded-full h-37.5 w-37.5 shadow bg-white absolute top-neg-70">
                            <g-image :alt="$context.name + ' logo'" :src="$context.logo" class="h-37.5 w-37.5 rounded-full"/>
                        </div>
                    </div>
                    <p class="font-bold text-54px pl-8 heading">{{ $context.name }}</p>
                </div>
                <button class="rounded border border-green-primary text-green-primary py-4 px-7">
                    Donate <font-awesome class="ml-2" :icon="['fa', 'plus-circle']"/>
                </button>
            </div>
        </div>
        <div class="my-7 w-full py-10 bg-white">
            <div class="m-auto w-4/5" v-html="$context.content">
            </div>
        </div>
  </Layout>
</template>

<script>
export default {
    name: "Charity Page Template",
    metaInfo() {
        return {
            name: this.$context.name,
            meta: [
                { name: 'robots', content: this.$context.robots },
                { name: 'canonical', content: this.$context.canonical },
                { name: 'og:locale', content: this.$context.og_locale },
                { name: 'og:type', content: this.$context.og_type },
                { name: 'og:title', content: this.$context.og_title },
                { name: 'og:description', content: this.$context.og_description },
                { name: 'og:url', content: this.$context.og_url },
                { name: 'og:site_name', content: this.$context.og_site_name },
                { name: 'article_publisher', content: this.$context.article_publisher },
                { name: 'article_modified_time', content: this.$context.article_modified_time },
                { name: 'author', content: this.$context.author },
                { name: 'twitter_card', content: this.$context.twitter_card },
                { name: 'reading_time', content: this.$context.reading_time },
            ]
        }
    }
}
</script>