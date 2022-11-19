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

        <div id="quick-link" class="text-text-primary">
          <p class="uppercase font-bold">quick link</p>
          <ol class="mt-5">
            <li class="my-2">
              <g-link to="/">Home</g-link>
            </li>
            <li class="my-2">
              <g-link to="/charitables">Search</g-link>
            </li>
            <li class="my-2">
              <g-link to="/about">About</g-link>
            </li>
          </ol>
        </div>

        <div id="support" class="text-text-primary">
          <p class="uppercase font-bold text-text-primary">support</p>
          <ol class="mt-5">
            <li class="my-2">
              <g-link to="/privacy-policy">Privacy policy</g-link>
            </li>
            <li class="my-2">
              <g-link to="/#faqs">FAQs</g-link>
            </li>
            <li class="my-2">
              <g-link to="/about#contribute">Contribute</g-link>
            </li>
          </ol>
        </div>

        <div id="social-media" class="flex flex-col items-end">
          <a href="https://www.buymeacoffee.com/findcharitable" target="_blank"
            ><img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
              alt="Buy Me A Coffee"
              style="height: 60px !important; width: 218px !important"
          /></a>
          <div class="flex justify-end mt-2">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=the-value-crew&repo=findcharitables.org&type=star&count=true"
              frameborder="0"
              scrolling="0"
              width="109"
              height="20"
              title="GitHub"
            ></iframe>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=the-value-crew&repo=findcharitables.org&type=fork&count=true"
              frameborder="0"
              scrolling="0"
              width="109"
              height="20"
              title="GitHub"
            ></iframe>
          </div>

          <div class="flex flex-col mt-2">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=the-value-crew&type=follow&count=true"
              frameborder="0"
              scrolling="0"
              width="218"
              height="20"
              title="GitHub"
            ></iframe>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=the-value-crew&type=sponsor"
              frameborder="0"
              scrolling="0"
              width="218"
              height="20"
              title="GitHub"
              class="mt-2"
            ></iframe>
          </div>
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