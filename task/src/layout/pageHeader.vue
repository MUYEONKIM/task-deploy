<template>
  <div
    :class="[
      'flex items-center h-20 text-[20px] font-PretendSemiBold w-full text-black',
      {
        ' bg-black text-white': routePath === '/',
      },
    ]"
  >
    <logoIcon
      @click="moveToPage('/')"
      class="ml-[13.02vw] cursor-pointer"
      v-if="$route.path === '/'"
      :logoColor="`#EDEDED`"
      :ftdotColor="`#EDEDED`"
      :sqaureColor="`#BCBCBC`"
      :messageColor="`#E8E8E8`"
      :dotColor="`#F9FBFF`"
    />
    <logoIcon
      @click="moveToPage('/')"
      class="ml-[13.02vw] cursor-pointer"
      v-else
    />
    <div class="ml-[201px] flex h-full">
      <router-link
        :class="[
          'w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]',
          {
            'border-[#4E43ED] border-b-2 text-[#4E43ED]':
              routePath === '/message',
          },
        ]"
        to="/message"
        >메시지</router-link
      >
      <router-link
        :class="[
          'w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]',
          {
            'border-[#4E43ED] border-b-2 text-[#4E43ED]':
              routePath === '/credit',
          },
        ]"
        to="/credit"
        >크레딧</router-link
      >
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import logoIcon from "../assets/svg/logo.vue";
import { useMoveToPage } from "../utils/moveToPage";
import { computed } from "vue";

export default {
  components: {
    logoIcon,
  },
  setup() {
    const route = useRoute();

    const { moveToPage } = useMoveToPage();
    const routePath = computed(() => {
      return route.path;
    });

    return {
      routePath,
      moveToPage,
    };
  },
};
</script>
