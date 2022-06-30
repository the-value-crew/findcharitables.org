<template>
  <Layout>
        <g-image :alt="$context.title + ' cover'" :src="$context.featured_media" class="w-full h-132.25"/>   
        <div class="h-40 w-full bg-white py-4">
            <div class="container flex justify-between items-start">
                <div id="logo" class="flex items-start">
                    <div class="h-37.5 w-37.5 relative">
                        <div class="rounded-full h-37.5 w-37.5 shadow bg-white absolute top-neg-70">
                            <g-image :alt="$context.title + ' logo'" :src="$context.logo" class="h-37.5 w-37.5"/>
                        </div>
                    </div>
                    <p class="font-bold text-54px pl-8 heading">{{ $context.title }}</p>
                </div>
                <button class="rounded border border-green-primary text-green-primary py-4 px-7">
                    Donate <font-awesome class="ml-2" :icon="['fa', 'plus-circle']"/>
                </button>
            </div>
        </div>
        <div class="my-7 w-full py-10 bg-white">
            <div class="m-auto w-4/5 flex justify-between">
                <div class="w-1/2 pr-10">
                    <p class="font-bold text-28px heading text-text-primary">
                        Today, we champion the rights of the world's 2.3 billion children.    
                    </p>
                    <p class="text-text-primary text-lg py-7">
                        Believe it or not, in 1919, when Eglantyne Jebb founded Save the Children, her conviction that children have the right to 
                        grow up healthy, educated and safe was not a mainstream idea. Much has changed since then. The UN Convention on the Rights 
                        of the Child, based on our founder's declaration, is now the most universally accepted human rights treaty in history. And, 
                        through our work in the United States and around the world, we've changed the lives of over 1 billion children. 
                        <br> <br>
                        We work in over 100 countries, doing whatever it takes — every day and in times of crisis — to give children a healthy 
                        start in life, the opportunity to learn and protection from harm. We work in over 100 countries, doing whatever it takes — 
                        every day and in times of crisis — to give children a healthy start in life, the opportunity to learn and protection from 
                        harm.
                        <br> <br>
                        We work in over 100 countries, doing whatever it takes — every day and in times of crisis — to give children a healthy 
                        start in life, the opportunity to learn and protection from harm.
                    </p>
                </div>
                <div class="w-1/2">
                    <g-image src="~/assets/images/boy.png" class="w-full rounded-lg"/>
                </div>
            </div>
        </div>

        <div class="my-7 w-full py-10 bg-white">
            <div class="m-auto w-4/5 flex justify-between">
                <div class="w-2/3 pr-10">
                    <p class="font-bold text-28px heading text-text-primary">
                        We work in the hardest-to-reach places, where it's toughest to be a child.
                    </p>
                    <p class="text-text-primary text-lg py-7">
                        Believe it or not, in 1919, when Eglantyne Jebb founded Save the Children, her conviction that children have the right to 
                        grow up healthy, educated and safe was not a mainstream idea. Much has changed since then. The UN Convention on the Rights 
                        of the Child, based on our founder's declaration, is now the most universally accepted human rights treaty in history. And, 
                        through our work in the United States and around the world, we've changed the lives of over 1 billion children. 
                        <br> <br>
                        We work in over 100 countries, doing whatever it takes — every day and in times of crisis — to give children a healthy 
                        start in life, the opportunity to learn and protection from harm.Thanks to our supporters, we achieve tremendous results 
                        for children. In 2020 alone, we reached more than 197 million children, including 1.1 million here in America. 
                        <br> <br>
                        As the world's leading expert on childhood, we believe that every child deserves a future. This belief is at the heart of 
                        everything we do. We know you share it, too.
                    </p>
                </div>
                <div class="w-1/3">
                    <g-image src="~/assets/images/girl.png" class="w-full rounded-lg"/>
                </div>
            </div>
        </div>

        <div class="my-7 w-full py-10 bg-white">
            <div class="m-auto w-4/5 flex justify-between">
                <div class="w-1/2 pr-10">
                    <p class="font-bold text-28px heading text-text-primary">
                        Donate books instead
                    </p>
                    <p class="text-text-primary text-lg py-7">
                        As the coronavirus pandemic has spread to almost every country in the world, the poorest and most disadvantaged families 
                        are hurt the hardest. Save the Children is working around the clock to ensure that the health and well-being of children 
                        are protected.
                        <br> <br>
                        We work in over 100 countries, doing whatever it takes — every day and in times of crisis — to give children a healthy 
                        start in life, the opportunity to learn and protection from harm.Thanks to our supporters, we achieve tremendous results 
                        for children. In 2020 alone, we reached more than 197 million children, including 1.1 million here in America. 
                    </p>
                </div>
                <div class="w-1/2">
                    <g-image src="~/assets/images/books.png" class="w-full h-auto rounded-lg"/>
                </div>
            </div>
        </div>
  </Layout>
</template>

<script>
export default {
    name: "Charity Page Template",
    metaInfo() {
        return {
            title: this.$context.title
        }
    }
}
</script>