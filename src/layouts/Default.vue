<template>
  <div class="layout xl:bg-backgroud min-h-screen">
    <div id="nav" class="bg-white z-top relative">
      <header class="container xl:flex items-center xl:justify-between h-25 pt-4 xl:pt-0">
        <strong>
          <g-link to="/">
            <g-image alt="The Value Crew" src="~/assets/images/findcharitables.png" class="h-16 w-auto"/>
          </g-link>
        </strong>
        <div class="w-1/3 relative hidden xl:block">
          <div class="border rounded-lg p-3 flex items-center w-full">
            <span class="p-1"><font-awesome :icon="['fa', 'search']" class="text-text-secondary"/></span>
            <input type="search" name="search" placeholder="Search" class="focus:outline-none w-full p-1" v-on:input="search">
          </div>
          <div id="search-dropdown" class="bg-white absolute w-full py-4 px-2 rounded-b-lg hidden">
            <a class="flex items-center px-4 py-2 hover:bg-backgroud cursor-pointer border-b" :href="'/'+result.slug" v-for="result in searchResult" :key="result.slug">
              <div id="logo">
                <g-image :src="result.logo" class="w-12 h-12 rounded-full"/>
              </div>
              <div class="ml-4" v-html="result['_highlightResult'].name.value">
              </div>
            </a>
          </div>
        </div>
        <nav class="flex items-center hidden xl:block">
          <g-link class="text-text-secondary" to="/">Home</g-link>
          <g-link class="text-text-secondary ml-12" to="/about/">About Us</g-link>
          <g-link class="text-text-secondary ml-12" to="/search/">Charities</g-link>
          <g-link class="text-text-secondary ml-12" to="/search/">Contact Us</g-link>
          <g-link class="text-white bg-green-primary rounded py-4 px-7 ml-12" to="/">Get listed</g-link>
        </nav>
      </header>
    </div>
    <slot/>
    <div id="footer" class="mt-7 bg-white xl:py-25">
      <div class="container hidden xl:block">
        <div class="flex justify-between">
          <div id="quick-link">
            <p class="uppercase">quick link</p>
            <ol class="mt-5">
              <li><a href="#">Search</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Sign up</a></li>
            </ol>
          </div>
          <div id="support">
            <p class="uppercase">support</p>
            <ol class="mt-5">
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Legal page</a></li>
              <li><a href="#">FAQ</a></li>
            </ol>
          </div>
          <div id="logo">
            <g-image src="~/assets/images/findcharitables.png" class="h-16 w-auto"/>
            <p class="text-xs text-center">&copy;	<span class="pl-1">The value crew 2022</span></p>
          </div>
          <div id="social-media">
            <a href="#"><font-awesome :icon="['fab', 'facebook-square']" class="text-facebook px-3.5" size="2xl"/></a>
            <a href="#"><font-awesome :icon="['fab', 'twitter-square']" class="text-twitter px-3.5" size="2xl"/></a>
            <a href="#"><font-awesome :icon="['fab', 'youtube-square']" class="text-youtube px-3.5" size="2xl"/></a>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center px-4 xl:hidden">
        <p class="text-xs text-center">&copy;	<span class="pl-1">The value crew 2022</span></p>
        <g-image src="~/assets/images/findcharitables.png" class="h-10 w-auto"/>
      </div>
    </div>
  </div>
</template>

<script>
  import algoliasearch from 'algoliasearch';
  export default {
    data() {
      return {
        searchResult: []
      }
    },
    methods: {
      search(e) {
        this.searchResult = []
        const client = algoliasearch('IXZ8C9YQFK', '179bfd07cb33f063b95025dc745a9648');
        const index = client.initIndex('tvc-csr');
        const query = e.target.value

        index.search(query).then(({ hits }) => {
          var dropdown = document.getElementById('search-dropdown')
          if(hits.length != 0)
          {
            dropdown.classList.remove("hidden");
          }
          else
          {
            dropdown.classList.add("hidden");
          }
          hits.forEach(element => {
            console.log(element)
            this.searchResult.push(element)
          });
        });
      }
    }
  }
</script>

<style>
  em {
    background-color: #F4F7FB;
    font-style: normal;
  }
</style>