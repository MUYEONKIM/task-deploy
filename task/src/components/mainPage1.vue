<template>
  <section class="h-[999px] w-full bg-black font-PretendMedium relative">
    <div
      class="h-full text-white min-[1700px]:ml-[13.02vw] flex min-[1700px]:items-start text-center min-[1700px]:text-start flex-col items-center"
    >
      <p class="mt-[303px] text-[24px] text-[#FCFCFC]">
        인터넷 문자 메시지 전송의 모든 것
      </p>
      <p
        class="w-[520px] inline-block mt-[3vh] bg-gradient-to-r from-[#9FBAFD] to-[#4E81FF] text-[56px] leading-[80px] font-PretendBold text-transparent bg-clip-text"
      >
        가장 빠르고 안정적인 문자 서비스
      </p>
      <div class="mt-[6.31vh]">
        <button
          class="h-[65px] w-[206px] bg-[#6250FF] rounded-[44px]"
          @click="moveToPage('/register')"
        >
          회원가입
        </button>
        <button
          class="h-[65px] w-[206px] bg-[#242424] rounded-[44px] text-[#E0E0E0] ml-[21px]"
          @click="moveToPage('/login')"
        >
          로그인
        </button>
      </div>
    </div>
    <div class="hidden min-[1700px]:block">
      <div class="absolute top-[140px] right-[666px]">
        <div class="bg-[#6250FF] rounded-[24px]">
          <img src="../assets/mainPageImage/main1.png" />
        </div>
        <div class="bg-[#37383E] rounded-[24px] mt-[24px]">
          <img src="../assets/mainPageImage/main2.png" />
        </div>
      </div>
      <div class="absolute top-[-48px] right-[380px]">
        <div class="bg-[#37383E] rounded-[24px]">
          <img src="../assets/mainPageImage/main3.png" />
        </div>
        <div class="bg-[#6250FF] rounded-[24px] mt-[24px]">
          <img src="../assets/mainPageImage/main4.png" />
        </div>
      </div>
      <div class="absolute top-[-302px] right-[96px]">
        <div class="bg-[#6250FF] rounded-[24px]">
          <img src="../assets/mainPageImage/main5.png" />
        </div>
        <div
          class="bg-[#37383E] rounded-[24px] mt-[24px] w-[254px] h-[609px]"
        ></div>
      </div>
      <img
        src="../assets/mainPageImage/main6.png"
        class="absolute top-[248px] right-1.5"
      />
    </div>
  </section>
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
