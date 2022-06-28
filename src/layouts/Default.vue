<template>
  <div class="layout bg-backgroud min-h-screen">
    <div id="nav" class="bg-white">
      <header class="w-4/5 mx-auto flex items-center justify-between h-25">
        <strong>
          <g-link to="/">
            <g-image alt="The Value Crew" src="~/assets/images/site-logo.png" class="h-16"/>
          </g-link>
        </strong>
        <div class="border rounded-lg p-3 w-1/3 flex items-center">
          <span class="p-1"><font-awesome :icon="['fa', 'search']" class="text-text-secondary"/></span>
          <input type="search" name="search" placeholder="Search" class="focus:outline-none w-full p-1">
        </div>
        <nav class="flex items-center">
          <g-link class="text-text-secondary" to="/">Home</g-link>
          <g-link class="text-text-secondary ml-12" to="/about/">About Us</g-link>
          <g-link class="text-text-secondary ml-12" to="/search/">Charities</g-link>
          <g-link class="text-text-secondary ml-12" to="/search/">Contact Us</g-link>
          <g-link class="text-white bg-green-primary rounded py-4 px-7 ml-12" to="/search/">Get listed</g-link>
        </nav>
      </header>
    </div>
    <slot/>
    <div id="footer" class="mt-7 bg-white py-25">
      <div class="w-4/5 m-auto flex justify-between">
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
          <g-image src="~/assets/images/site-logo.png" />
        </div>
        <div id="social-media">
          <a href="#"><font-awesome :icon="['fab', 'facebook-square']" class="text-facebook px-3.5" size="2xl"/></a>
          <a href="#"><font-awesome :icon="['fab', 'twitter-square']" class="text-twitter px-3.5" size="2xl"/></a>
          <a href="#"><font-awesome :icon="['fab', 'youtube-square']" class="text-youtube px-3.5" size="2xl"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@font-face {
    font-family: 'Georgia Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Georgia Regular'), url('../assets/fonts/georgia.woff') format('woff');
}

@font-face {
    font-family: 'Gilroy Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Gilroy'), url('../assets/fonts/gilroy-bold.woff') format('woff');
}

body {
  font-family: 'Georgia Regular';
  margin:0;
  padding:0;
  line-height: 1.5;
}
.heading {
  font-family: 'Gilroy Regular';
}
</style>
