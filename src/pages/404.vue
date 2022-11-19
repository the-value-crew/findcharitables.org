<template>
  <Layout>
    <div class="container flex flex-col items-center h-screen">
      <h1
        class="
          text-9xl
          font-extrabold
          mt-8
          xl:mt-16
          mb-8
          text-center text-green-primary
        "
      >
        404
      </h1>

      <p class="w-full xl:w-72 text-2xl font-semibold mt-4  text-center mx-auto">
        Lost somewhere ? Looks like the page doesn't exist.
      </p>

      <p class="text-xl mt-24 w-full xl:w-96 text-center">
        In case you are trying to make a donation, we
        have listed plenty of charitables.
      </p>

      <g-link
        class="
          btn-primary
          text-white
          rounded-lg
          px-8
          py-4
          mt-10
          mx-auto
        "
        to="/charitables"
      >
        <font-awesome :icon="['fa', 'hand-holding-heart']" class="mr-2" />
        Donate now
      </g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "404 - FindCharitables",
  },
  name: "404",
};
</script>

<style>
</style>