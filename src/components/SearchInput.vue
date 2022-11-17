<template>
  <div class="relative">
    <!-- Search input -->
    <div class="border rounded-lg p-0 xl:p-1 flex items-center w-full">
      <span class="p-2">
        <font-awesome :icon="['fa', 'search']" class="text-text-secondary" />
      </span>
      <input
        ref="searchInput"
        type="search"
        name="search"
        placeholder="Charity name or type"
        class="focus:outline-none w-full p-1 bg-transparent"
        @input="search"
        autocomplete="off"
      />
    </div>

    <!-- search results -->
    <div v-click-outside="handleLinkClick">
      <div
        v-show="
          !searchLoading &&
          searchKeyword &&
          searchKeyword.length &&
          searchResult &&
          searchResult.length
        "
        class="absolute bg-white w-full py-4 px-2 rounded-b-lg shadow z-top"
      >
        <g-link
          class="flex items-center px-4 py-4 hover:bg-backgroud cursor-pointer"
          @click="handleLinkClick"
          v-for="(result, index) in searchResult"
          :key="index"
          :to="'/' + result.slug"
        >
          <div id="logo">
            <g-image :src="result.logo" class="w-12 h-12 rounded-full" />
          </div>
          <div class="ml-4">{{ result.name }}</div>
        </g-link>
      </div>

      <div
        v-show="!searchLoading && searchResult && searchResult.length == 0"
        class="
          absolute
          bg-white
          w-full
          py-8
          px-4
          rounded-b-lg
          shadow
          text-text-secondary
        "
      >
        No charitables found
      </div>

      <div
        v-show="searchLoading"
        class="
          absolute
          bg-white
          w-full
          py-8
          px-4
          rounded-b-lg
          shadow
          text-text-secondary
        "
      >
        Searching..
      </div>
    </div>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch";

export default {
  name: "SearchInput",
  data() {
    return {
      searchLoading: false,
      searchKeyword: null,
      searchResult: null,
      searchTimer: null,
    };
  },

  methods: {
    search(e) {
      this.searchKeyword = e.target.value;

      if (!(this.searchKeyword && this.searchKeyword.length)) {
        this.searchResult = null;
        return;
      }

      // prevent repeated API calls
      clearTimeout(this.searchTimer);
      this.searchLoading = true;
      this.searchTimer = setTimeout(() => {
        this.searchResult = [];
        const client = algoliasearch(
          "IXZ8C9YQFK",
          "179bfd07cb33f063b95025dc745a9648"
        );
        const index = client.initIndex("tvc-csr");
        const query = this.searchKeyword.toLowerCase();

        index.search(query).then(({ hits }) => {
          this.searchLoading = false;
          hits.forEach((item) =>
            this.searchResult.push({
              name: item.name,
              logo: item.logo,
              slug: item.slug,
            })
          );
        });
      }, 500);
    },

    handleLinkClick() {
      this.searchResult = null;
      this.searchKeyword = null;
      this.$refs.searchInput.value = null;
    },
  },
};
</script>

<style>
</style>