<template>
  <hr class="border-[1px] w-full border-[#707070] relative z-20" />
  <mainPage1 />
  <div class="w-full flex flex-col items-center">
    <mainPage2 />
    <mainPage3 />
    <mainPage4 />
  </div>
  <mainPage5 />
</template>
<script>
import mainPage1 from "../components/mainPage1.vue";
import mainPage2 from "../components/mainPage2.vue";
import mainPage3 from "../components/mainPage3.vue";
import mainPage4 from "../components/mainPage4.vue";
import mainPage5 from "../components/mainPage5.vue";

export default {
  components: {
    mainPage1,
    mainPage2,
    mainPage3,
    mainPage4,
    mainPage5,
  },
};
</script>
