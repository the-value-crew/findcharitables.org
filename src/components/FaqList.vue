<template>
  <div class="flex flex-col">
    <div
      v-for="(faq, index) in faqs"
      :key="index"
      class="my-4 py-4 px-4 rounded transition-all hover:bg-gray-100"
    >
      <div
        class="flex justify-between cursor-pointer"
        @click="toggle(index)"
      >
        <!-- question -->
        <p class="font-semibold text-text-primary text-lg flex-grow">
          {{ faq.q }}
        </p>

        <!-- control buttons -->
        <div>
          <font-awesome
            v-show="!activeIndexes.includes(index)"
            :icon="['fa', 'circle-plus']"
            class="text-green-primary"
          />

          <font-awesome
            v-show="activeIndexes.includes(index)"
            :icon="['fa', 'circle-minus']"
            class="text-text-secondary"
          />
        </div>
      </div>

      <!-- answer -->
      <p
        class="
          text-text-primary
          transition-all
          duration-500
          ease-in-out
          h-0
          overflow-hidden
        "
        :class="{ 'h-auto mt-4': activeIndexes.includes(index) }"
      >
        {{ faq.a }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqList",
  data() {
    return {
      faqs: [
        {
          q: "Who am I donating to?",
          a: "You are directly donating to the organization of your choice. We do not keep anything for ourselves and are not a middleman. However, if you like the platform, consider donating to us. We have many ideas to improve the platform. Your support will help us to bring these ideas to life.",
        },
        {
          q: "How do I know my donations are making an impact?",
          a: "As a donor, you are responsible for choosing the organization you want to help, the one that aligns with your values. We even recommend contacting them to inquire how the donations will be used.",
        },
        {
          q: "I cannot find the charity I am searching for!",
          a: "We are continuously looking to add organizations to our database. If you know one help to instill the culture of giving by adding the organization to our platform here.",
        },
        {
          q: "What can I donate?",
          a: "The type of donations an organization recieves can be found out in their respective pages. We encourage the organizations to not only deal in money but also clothes, food, other goods and even volunteers.",
        },
      ],
      activeIndexes: [],
    };
  },

  methods: {
    toggle(faqIndex) {
      if (this.activeIndexes.includes(faqIndex)) {
        let i = this.activeIndexes.indexOf(faqIndex);
        this.activeIndexes.splice(i, 1);
      } else this.activeIndexes.push(faqIndex);
    },
  },
};
</script>

<style>
</style>