<template>
  <div>
    <input
      type="text"
      class="
        mt-9
        border
        rounded-lg
        p-3
        px-4
        outline-none
        focus:border-green-primary
        transition-all
        xl:w-1/3
        w-full
      "
      v-model="form.name"
      @input="genFormLink"
      placeholder="Organization name"
    />

    <fieldset
      class="
        rounded-lg
        border
        xl:w-1/3
        mt-7
        p-3
        flex
        items-center
        mb-12
        focus-within:border-green-primary
        transition-all
      "
    >
      <legend class="text-text-muted text-xs">Phone</legend>
      <div class="border-r px-4">
        <g-image src="~/assets/images/nepal.png" class="h-5 w-5" />
      </div>
      <input
        type="number"
        name="number"
        id="number"
        placeholder="Contact Number"
        class="w-full px-4 outline-none"
        onwheel="return false;"
        v-model="form.phone"
        @input="genFormLink"
      />
    </fieldset>

    <a
      class="
        btn-primary
        text-white
        rounded-lg
        px-7.5
        py-4.5
        w-full
        xl:w-auto
      "
      target="_blank"
      :href="formLink"
    >
      List my charity
    </a>
  </div>
</template>

<script>
export default {
  name: "QuickForm",
  data() {
    return {
      form: {
        name: null,
        phone: null,
      },
      formLink: "",
    };
  },

  methods: {
    genFormLink() {
      this.formLink = `https://docs.google.com/forms/d/e/1FAIpQLSfX4YbQONGMQ2jzI3qxwsxwZMAiN1HR0ZHWtdVKkQ_V2AfA8g/viewform?usp=pp_url&entry.822845676=${this.form.name}&entry.909413554=${this.form.phone}`;
    },
  },
};
</script>

<style>
</style>