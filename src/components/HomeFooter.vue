<template>
  <div id="footer" class="mt-8 py-6 bg-white xl:py-25">
    <!-- Desktop -->
    <div class="hidden xl:block container">
      <div class="flex justify-between">
        <div id="logo">
          <g-image
            src="~/assets/images/findcharitables.png"
            class="h-16 w-auto"
          />
          <p class="text-xs text-center">
            &copy;
            <span class="pl-1">
              The value crew {{ new Date().getFullYear() }}
            </span>
          </p>
        </div>

        <div id="quick-link">
          <p class="uppercase">quick link</p>
          <ol class="mt-5">
            <li>
              <g-link to="/">Home</g-link>
            </li>
            <li>
              <g-link to="/charitables">Search</g-link>
            </li>
            <li>
              <g-link to="/about">About</g-link>
            </li>
          </ol>
        </div>

        <div id="support">
          <p class="uppercase">support</p>
          <ol class="mt-5">
            <li>
              <g-link to="/privacy-policy">Privacy policy</g-link>
            </li>
            <li>
              <g-link to="/#faqs">FAQs</g-link>
            </li>
            <li>
              <g-link to="/about#contribute">Contribute</g-link>
            </li>
          </ol>
        </div>

        <div id="social-media">
          <a href="https://www.buymeacoffee.com/findcharitable" target="_blank"
            ><img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
              alt="Buy Me A Coffee"
              style="height: 60px !important; width: 217px !important"
          /></a>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="flex justify-between items-center px-4 xl:hidden">
      <p class="text-xs text-center">
        &copy;
        <span class="pl-1">The value crew {{ new Date().getFullYear() }}</span>
      </p>
      <g-image src="~/assets/images/findcharitables.png" class="h-10 w-auto" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFooter",
};
</script>