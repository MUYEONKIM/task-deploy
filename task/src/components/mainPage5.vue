<template>
  <div
    class="w-full h-[1080px] mt-[225px] bg-black flex flex-col justify-center items-center text-center"
  >
    <p
      class="w-[809.69px] bg-gradient-to-r from-[#B6B7F7] to-[#7FB2FE] text-[64px] font-PretendBold leading-[85px] text-transparent bg-clip-text"
    >
      비지니스 광고의 시작,<br />
      이제 샌드고와 함께 하세요
    </p>
    <button
      class="h-[65px] w-[206px] mt-[66px] bg-[#6250FF] rounded-[44px] text-[21px] text-white"
      @click="moveToPage('/message')"
    >
      메시지 바로가기
    </button>
  </div>
</template>
<script>
import { useMoveToPage } from "../utils/moveToPage";

export default {
  setup() {
    const { moveToPage } = useMoveToPage();

    return { moveToPage };
  },
};
</script>
