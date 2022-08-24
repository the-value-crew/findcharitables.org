<template>
  <Layout>
    <div class="md:flex md:justify-between md:h-166 overflow-hidden mb-12 md:mb-0">
      <div class="md:w-1/2 bg-no-repeat md:bg-image pl-1/10">
        <p class="heading font-bold text-40px md:text-54px mt-4 md:mt-52">“It’s not how much we give but how much love we put into giving”</p>
        <p class="heading font-normal md:font-bold text-base md:text-28px mt-2 md:mt-5">-Mother Teresa</p>

        <div class="rounded-lg border w-3/4 mt-4 bg-white flex items-center justify-between hidden md:inline-flex">
          <div class="w-3/4 flex">
            <div class="py-4 pl-7 pr-3">
            <font-awesome :icon="['fa', 'search']" class="text-text-secondary"/>
          </div>
          <input type="text" name="search" class="focus:outline-none w-4/5" placeholder="Charity name or type">
          </div>
          <button class="bg-green-primary p-4 rounded-lg text-white">Donate Now</button>
        </div>
      </div>
      <div class="md:w-2/5 bg-no-repeat md:bg-image md:bg-right-bottom-5 md:pr-1/10 -mt-14 md:mt-0">
        <g-image src="~/assets/images/mother-teresa.png" class="w-45.5 md:rounded-lg rounded-t-full rounded-br-full md:w-full float-right" alt="Mother Teresa"/>
      </div>
    </div>
    <div class="md:bg-green-background text-green-background text-center md:text-white">
      <div class="container md:flex justify-between items-center py-25">
        <div class="md:w-1/3">
          <p class="heading font-bold text-28px md:text-40px">985+</p>
          <p class="heading md:text-lg">Donations recieved</p>
        </div>
        <div class="md:w-1/3 my-4 md:mx-0">
          <p class="heading font-bold text-28px md:text-40px">Rs 10 lakh+</p>
          <p class="heading md:text-lg">Money donated</p>
        </div>
        <div class="md:w-1/3">
          <p class="heading font-bold text-28px md:text-40px">Rs 5 lakh+</p>
          <p class="heading md:text-lg">Donated Last Year</p>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="container py-25">
        <p class="heading font-bold text-28px md:text-54px">Add your charity to the list</p>
        <input type="text" class="mt-9 border rounded-lg p-3 px-4 focus:outline-none md:w-1/3 w-full" 
          placeholder="Organization name">
        
        <fieldset class="rounded-lg border md:w-1/3 mt-7 p-3 flex items-center">
          <legend class="text-text-muted text-xs">Phone</legend>
          <div class="border-r px-4">
            <g-image src="~/assets/images/nepal.png" class="h-5 w-5"/>
          </div>
          <input type="number" name="number" id="number" placeholder="Contact Number" 
            class="w-full px-4 focus:outline-none" onwheel="return false;">
        </fieldset>

        <button class="bg-green-primary text-white rounded-md px-7.5 py-4.5 mt-4.5 w-full md:w-auto">
          List my charity
        </button>
      </div>
    </div>

    <div class="bg-white mt-7 py-25">
      <div class="container md:flex">
        <div class="md:w-1/2">
          <p class="heading text-28px md:text-54px font-bold">How it works</p>
          <ol class="mt-10 list-decimal pl-7">
            <li>
              <p class="heading text-lg font-medium text-text-primary">
                Search for charities.
              </p>
              <p class="text-text-secondary">
                Go into the search bar and type in the type of charity you'd like to donate to.
              </p>
            </li>
            <li class="my-10">
              <p class="heading text-lg font-medium text-text-primary">
                Select a charity.
              </p>
              <p class="text-text-secondary">
                Find the perfect charity with values that aligns with yours
              </p>
            </li>
            <li>
              <p class="heading text-lg font-medium text-text-primary">
                Donate
              </p>
              <p class="text-text-secondary">
                Donate any amount as you desire
              </p>
            </li>
          </ol>
          
        </div>
        <div class="md:w-1/2 mt-5 md:mt-0 pl-4">
          <g-image src="~/assets/images/how-it-works.png" class="h-auto w-full"/>
        </div>
      </div>
    </div>

    <div class="mt-7 mx-auto w-11/12 bg-white md:py-25 p-4 md:px-30 rounded-lg">
      <div class="md:flex md:justify-between md:items-center">
        <div class="md:w-2/5 w-full">
          <p class="heading font-bold text-28px md:text-54px">FAQ</p>
          <p class="text-text-primary mt-8">
            Everything you need to know about the product 
            and billing. Can't find the answer you're looking for? Please send us your queries!
          </p>
          <button class="mt-5 bg-green-primary text-white rounded-lg py-4.5 px-7.5 w-full md:w-auto">
            Ask a question
          </button>
        </div>
        <div class="md:w-2/5 md:px-4">
          <div class="">
            <div class="flex justify-between my-9">
              <div class="w-4/5">
                <p class="heading font-medium text-lg cursor-pointer" @click="toggleCollaspe">
                  Where am i donating?
                </p>
                <p class="text-text-primary mt-5 content transition-all 
                  duration-500 ease-in-out">
                  Everything you need to know about the product and billing. Can't find the 
                  answer you're looking for? Please send us your queries. We will answer them.
                </p>
              </div>
              <div>
                <div class="minus">
                  <font-awesome :icon="['fa', 'circle-minus']" class="text-text-secondary"/>
                </div>
                <div class="plus hidden">
                  <font-awesome :icon="['fa', 'circle-plus']" class="text-text-secondary"/>
                </div>
              </div>
            </div>

            <div class="flex justify-between my-9">
              <div class="w-4/5">
                <p class="heading font-medium text-lg cursor-pointer" @click="toggleCollaspe">
                  Can I undo my donation?
                </p>
                <p class="text-text-primary mt-5 content transition-all 
                  duration-500 ease-in-out hidden">
                  Everything you need to know about the product and billing. Can't find the 
                  answer you're looking for? Please send us your queries. We will answer them.
                </p>
              </div>
              <div>
                <div class="minus hidden">
                  <font-awesome :icon="['fa', 'circle-minus']" class="text-text-secondary"/>
                </div>
                <div class="plus">
                  <font-awesome :icon="['fa', 'circle-plus']" class="text-text-secondary"/>
                </div>
              </div>
            </div>

            <div class="flex justify-between my-9">
              <div class="w-4/5">
                <p class="heading font-medium text-lg cursor-pointer" @click="toggleCollaspe">
                  How many charities have you listed?
                </p>
                <p class="text-text-primary mt-5 content transition-all 
                  duration-500 ease-in-out hidden">
                  Everything you need to know about the product and billing. Can't find the 
                  answer you're looking for? Please send us your queries. We will answer them.
                </p>
              </div>
              <div>
                <div class="minus hidden">
                  <font-awesome :icon="['fa', 'circle-minus']" class="text-text-secondary"/>
                </div>
                <div class="plus">
                  <font-awesome :icon="['fa', 'circle-plus']" class="text-text-secondary"/>
                </div>
              </div>
            </div>

            <div class="flex justify-between my-9">
              <div class="w-4/5">
                <p class="heading font-medium text-lg cursor-pointer" @click="toggleCollaspe">
                  Is this legit?
                </p>
                <p class="text-text-primary mt-5 content transition-all 
                  duration-500 ease-in-out hidden">
                  Everything you need to know about the product and billing. Can't find the 
                  answer you're looking for? Please send us your queries. We will answer them.
                </p>
              </div>
              <div>
                <div class="minus hidden">
                  <font-awesome :icon="['fa', 'circle-minus']" class="text-text-secondary"/>
                </div>
                <div class="plus">
                  <font-awesome :icon="['fa', 'circle-plus']" class="text-text-secondary"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Find Charitables'
  },
  methods: {
    toggleCollaspe(e) {
      
      //toggle content
      var _parentElement = e.target.parentElement.parentElement
      var _contentSection = _parentElement.children[0].children[1]
      
      var contentClassList = _contentSection.classList
      contentClassList.toggle('hidden')

      //change icon
      var iconchildNodes = _parentElement.children[1].childNodes
      for(var i=0;i<iconchildNodes.length;i++)
      {
        var classList = iconchildNodes[i].classList
        var classArray = Array.from(classList)
        if(classArray.includes('hidden'))
        {
          classList.remove('hidden')
        }
        else
        {
          classList.add('hidden')
        }
      }
    }
  }
}
</script>

<style scoped>
  .bg-image {
    background-image: url('../assets/images/rectangle-background.png');
  }
</style>
