<template>
  <div class="h-auto font-PretendRegular">
    <pageHeader class="relative z-50" />
    <router-view></router-view>
    <pageFooter v-if="footerVisible" />
  </div>
</template>
<script>
import pageHeader from "./layout/pageHeader.vue";
import pageFooter from "./layout/pageFooter.vue";

export default {
  name: "app",
  components: {
    pageHeader,
    pageFooter,
  },
  data() {
    return {
      hiddenPage: ["/login", "/register"],
    };
  },
  computed: {
    footerVisible() {
      return !this.hiddenPage.includes(this.$route.path);
    },
  },
};
</script>
