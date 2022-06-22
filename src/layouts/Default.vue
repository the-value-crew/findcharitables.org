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
          <span class="p-1"><font-awesome :icon="['fa', 'search']"/></span>
          <input type="search" name="search" placeholder="Search" class="focus:outline-none w-full p-1">
        </div>
        <nav class="flex items-center">
          <g-link class="text-text-secondary" to="/">Home</g-link>
          <g-link class="text-text-secondary ml-12" to="/about/">About Us</g-link>
          <g-link class="text-text-secondary ml-12" to="/search/">Charities</g-link>
          <g-link class="text-text-secondary ml-12" to="/search/">Contact Us</g-link>
          <g-link class="text-white bg-green-600 rounded py-4 px-7 ml-12" to="/search/">Get listed</g-link>
        </nav>
      </header>
    </div>
    <slot/>
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
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
</style>
