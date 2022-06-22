<template>
  <Layout>
        <g-image alt="Charity Name" src="~/assets/images/save-the-children-cover-2.png" class="w-full h-132.25"/>   
        <div class="h-40 w-full bg-white py-4">
            <div class="w-4/5 mx-auto flex justify-between items-start">
                <div id="logo" class="flex items-start">
                    <div class="">
                        <div class="rounded-full h-37.5 w-37.5 shadow bg-white">
                            <g-image alt="Charity Name" src="~/assets/images/save-the-children-logo.png" class="h-37.5 w-37.5"/>
                        </div>
                    </div>
                    <p class="font-bold text-4xl ">Save The Children</p>
                </div>
                <button class="rounded border border-green-primary text-green-primary py-4 px-7">
                    Donate <font-awesome class="ml-2" :icon="['fa', 'plus-circle']"/>
                </button>
            </div>
        </div>
        <div class="mt-7 w-full p-10 bg-white">
            <div class="m-auto w-4/5 flex">
                <div class="w-1/2">
                    <p class="font-bold text-2xl text-text-primary">
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
                <div class="pl-3">
                    <g-image src="~/assets/images/Rectangle 14.png" style="h-full w-full rounded-lg"/>
                </div>
            </div>
        </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Profile'
  }
}
</script>