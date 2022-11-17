<template>
  <div class="relative">
    <!-- Search input -->
    <div
      class="
        border-2
        bg-gray-50
        rounded-lg
        p-0
        xl:p-1
        flex
        items-center
        w-full
        focus-within:border-green-primary focus-within:bg-white
        transition
      "
      :class="{ 'rounded-b-none': searchFocus }"
    >
      <span class="p-2">
        <font-awesome :icon="['fa', 'search']" class="text-gray-400" />
      </span>
      <input
        ref="searchInput"
        type="search"
        name="search"
        placeholder="Find charitables"
        class="focus:outline-none w-full p-1 bg-transparent"
        @input="search"
        @focus="handleFocus"
        @blur="handleBlur"
        autocomplete="off"
      />
    </div>

  
    <div>
      <!-- search results -->
      <div
        v-show="
          !searchLoading &&
          searchKeyword &&
          searchKeyword.length &&
          searchResult &&
          searchResult.length
        "
        class="absolute bg-white w-full py-4 rounded-b-lg shadow z-top"
      >
        <g-link
          class="
            flex
            items-center
            p-2
            hover:bg-backgroud
            cursor-pointer
            capitalize
          "
          v-for="(result, index) in searchResult"
          :key="index"
          :to="'/' + result.slug"
        >
          <g-image :src="result.logo" class="w-12 h-12 rounded-full" />

          <div class="ml-4">{{ result.name }}</div>
        </g-link>
      </div>

      <!-- no search results found -->
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
          z-30
        "
      >
        No charitables found
      </div>

      <!-- loading -->
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
          z-20
        "
      >
        <font-awesome
          :icon="['fa', 'circle-notch']"
          class="text-text-secondary animate-spin mr-2"
        />
        Searching..
      </div>

      <!-- search focus -->
      <div
        v-show="searchFocus && !searchLoading"
        class="
          absolute
          bg-white
          w-full
          py-8
          px-4
          rounded-b-lg
          shadow-lg
          text-text-secondary
          z-10
        "
      >
        <font-awesome
          :icon="['fa', 'keyboard']"
          class="text-text-secondary mr-2"
        />
        Charitable name or type
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
      searchFocus: false,
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

    handleFocus() {
      this.searchFocus = true;
    },

    handleBlur() {
      this.searchFocus = false;

      // prevent <g-link> to disappear before click
      setTimeout(() => {
        this.searchResult = null;
        this.searchKeyword = null;
        this.$refs.searchInput.value = null;
      }, 100);
    },
  },
};
</script>

<style>
</style>