<template>
  <hr class="border-[1px] w-full border-[#707070] relative z-20" />
  <div class="h-[999px] w-full bg-black font-PretendMedium relative">
    <div
      class="h-full text-white min-[1774px]:ml-[13.02vw] flex min-[1774px]:items-start flex-col items-center"
    >
      <p class="mt-[303px] text-[24px] text-[#FCFCFC]">
        인터넷 문자 메시지 전송의 모든 것
      </p>
      <p
        class="w-[520px] inline-block mt-[3vh] bg-gradient-to-r from-[#9FBAFD] to-[#4E81FF] text-[56px] leading-[80px] font-PretendBold text-transparent bg-clip-text"
      >
        가장 빠르고 안정적인 문자 서비스 SENDGO
      </p>
      <div class="mt-[6.31vh]">
        <button
          class="h-[65px] w-[206px] bg-[#6250FF] rounded-[44px]"
          @click="goRegister"
        >
          회원가입
        </button>
        <button
          class="h-[65px] w-[206px] bg-[#242424] rounded-[44px] text-[#E0E0E0] ml-[21px]"
          @click="goLogin"
        >
          로그인
        </button>
      </div>
    </div>
    <div class="hidden min-[1774px]:block">
      <div class="absolute top-[140px] right-[34.7vw]">
        <div class="bg-[#6250FF] rounded-[24px]">
          <img src="../assets/mainPageImage/main1.png" />
        </div>
        <div class="bg-[#37383E] rounded-[24px] mt-[24px]">
          <img src="../assets/mainPageImage/main2.png" />
        </div>
      </div>
      <div class="absolute top-[-48px] right-[19.8vw]">
        <div class="bg-[#37383E] rounded-[24px]">
          <img src="../assets/mainPageImage/main3.png" />
        </div>
        <div class="bg-[#6250FF] rounded-[24px] mt-[24px]">
          <img src="../assets/mainPageImage/main4.png" />
        </div>
      </div>
      <div class="absolute top-[-302px] right-[4.9vw]">
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
  </div>
  <div class="w-full flex flex-col items-center">
    <div class="w-[73.96vw] flex flex-col items-center">
      <img src="../assets/icon/icon1.png" class="mt-[212px] object-none" />
      <p
        class="w-[620px] inline-block font-PretendBold text-[56px] leading-[80px] mt-[44px] text-center"
      >
        복잡한 인터넷 문자 서비스를 간편하게 만나보세요.
      </p>
      <p class="mt-[24px] text-[#5C5C5C] text-[26px]">
        모든 종류의 인터넷 SMS를 편리하게.
      </p>
      <div
        class="w-full min-w-[1420px] mt-[96px] flex flex-col h-[1100px] items-center justify-between min-[1500px]:h-full min-[1500px]:justify-between min-[1500px]:flex-row"
      >
        <div
          class="w-[23.12vw] min-w-[444px] h-[349px] flex flex-col items-center justify-center text-center bg-[#F0F0FA] rounded-[28px]"
        >
          <img src="../assets/icon/icon2.png" class="object-none" />
          <p
            class="mt-[24px] font-PretendSemiBold text-[26px] leading-[40px] inline-block"
          >
            메시지 용량에<br />
            제한 받지 않고 전송
          </p>
          <p
            class="mt-[20px] text-[#6E7583] text-[20px] leading-[30px] w-[332px]"
          >
            메시지 용량 걱정없이 단문 메시지는 <br />물론 장문, 사진까지 전송이
            가능합니다.
          </p>
        </div>
        <div
          class="w-[23.12vw] min-w-[444px] h-[349px] flex flex-col items-center justify-center text-center bg-[#F0F0FA] rounded-[28px]"
        >
          <img src="../assets/icon/icon3.png" class="object-none" />
          <p
            class="mt-[24px] font-PretendSemiBold text-[26px] leading-[40px] inline-block"
          >
            모든 종류의 <br />문자 메시지를 한번에
          </p>
          <p
            class="mt-[20px] text-[#6E7583] text-[20px] leading-[30px] w-[332px]"
          >
            메시지 용량 걱정없이 단문 메시지는 <br />물론 장문, 사진까지 전송이
            가능합니다.
          </p>
        </div>
        <div
          class="w-[23.12vw] min-w-[444px] h-[349px] flex flex-col items-center justify-center text-center bg-[#F0F0FA] rounded-[28px]"
        >
          <img src="../assets/icon/icon4.png" class="object-none" />
          <p
            class="mt-[24px] font-PretendSemiBold text-[26px] leading-[40px] inline-block"
          >
            간편한 광고<br />문자 메시지 설정
          </p>
          <p
            class="mt-[20px] text-[#6E7583] text-[20px] leading-[30px] w-[332px]"
          >
            광고 설정 버튼 클릭 한번으로 <br />080 수신 거부 번호가 적용됩니다.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="w-[73.96vw] flex flex-col items-center">
        <img src="../assets/icon/icon5.png" class="mt-[249px] object-none" />
        <p
          class="w-[620px] inline-block font-PretendBold text-[56px] leading-[80px] mt-[50px] text-center"
        >
          샌드고의 다양한<br />
          기능들을 살펴보세요
        </p>
        <p class="mt-[24px] text-[#5C5C5C] text-[26px]">
          고객님들의 입장에서 고민하였습니다.
        </p>
        <div
          class="w-full mt-[96px] min-[1500px]:h-full h-[1242px] flex flex-col min-[1500px]:flex-row items-center min-[1500px]:justify-between"
        >
          <div
            class="min-[1500px]:w-[32.6vw] w-[44.53vw] h-[597px] flex flex-col justify-between bg-[#F8F9FA] rounded-[25px] pl-[2.81vw] pt-[72px] min-[1500px]:mr-[5vw]"
          >
            <div>
              <p class="font-PretendBold text-[34px]">
                자주 전송하는 내용이 있나요?
              </p>
              <p
                class="font-PretendBold text-[#727B88] text-[34px] leading-[48px]"
              >
                템플릿으로 메시지 내용을<br />저장하여 간편하게 전송하세요.
              </p>
            </div>
            <div>
              <img src="../assets/mainPageImage/main7.png" class="ml-auto" />
            </div>
          </div>
          <div
            class="w-[44.54vw] min-[1500px]:w-[39.06vw] h-[597px] flex flex-col justify-between bg-[#E9EBFD] rounded-[25px] pl-[2.81vw] pt-[72px] mt-[3vh] min-[1500px]:0"
          >
            <div>
              <p
                class="font-PretendBold text-[34px] bg-gradient-to-r from-[#7F3ADD] to-[#6264F6] text-transparent bg-clip-text"
              >
                크레딧 구매 시, 보너스 크레딧 증정
              </p>
              <p class="font-PretendBold text-[#7079CB] text-[34px]">
                크레딧 상품을 구매하면 상품 별<br />보너스 크레딧을 증정합니다
              </p>
            </div>
            <div>
              <img src="../assets/mainPageImage/main8.png" />
            </div>
          </div>
        </div>
        <div
          class="w-full mt-[40px] flex justify-between min-[1500px]:h-full h-[1242px] flex-col min-[1500px]:flex-row items-center"
        >
          <div
            class="w-[44.54vw] min-[1500px]:w-[44.53vw] h-[720px] flex flex-col justify-between bg-[#DBE5FF] rounded-[25px] pl-[2.81vw] pt-[72px] min-[1500px]:mr-[5vw]"
          >
            <div>
              <p class="font-PretendBold text-[34px] text-[#375984]">
                전송 후 바로 발송확인 기능
              </p>
              <p
                class="font-PretendBold text-[#698AB1] text-[34px] leading-[48px]"
              >
                메시지 전송 후 바로 발송현황 창에서<br />현재 메시지 전송 현황을
                알려드립니다
              </p>
            </div>
            <div>
              <img src="../assets/mainPageImage/main9.png" class="ml-auto" />
            </div>
          </div>
          <div
            class="mt-[3vh] min-[1500px]:0 w-[44.54vw] min-[1500px]:w-[27.08vw] h-[720px] flex flex-col justify-between bg-[#FAFAEE] rounded-[25px] pl-[2.81vw] pt-[72px]"
          >
            <div>
              <p class="font-PretendBold text-[34px] text-[#6C3111]">
                누르면 바로 전송완료
              </p>
              <p
                class="font-PretendBold text-[#6F6F6F] text-[34px] leading-[48px]"
              >
                누르자마자 수신인에게<br />
                바로 전달됩니다
              </p>
            </div>
            <div>
              <img src="../assets/mainPageImage/main10.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="w-[73.96vw] flex flex-col items-center">
        <img src="../assets/icon/icon6.png" class="mt-[354px]" />
        <p
          class="w-[620px] inline-block font-PretendBold text-[56px] leading-[80px] mt-[50px] text-center"
        >
          정확도와 다양함은 물론<br />
          신뢰할 수 있는 보안까지
        </p>
        <p class="mt-[24px] text-[#5C5C5C] text-[26px]">
          고객님들의 간편함을 고민하였습니다
        </p>
        <div class="w-full mt-[96px] flex justify-between">
          <div
            class="w-[35.83vw] h-[597px] flex flex-col bg-[#DCEFF4] rounded-[25px] pt-[72px]"
          >
            <div class="w-full pl-[2.81vw]">
              <p class="font-PretendBold text-[34px] text-[#0F1F4B]">
                일반 SMS는 기본, 카카오톡까지
              </p>
              <p
                class="font-PretendBold text-[#516B71] text-[34px] leading-[48px]"
              >
                종류와 상관없이 모두 전송해 드립니다
              </p>
            </div>
            <br />
            <div class="w-full flex justify-center">
              <img
                src="../assets/mainPageImage/main11.png"
                class="min-[1500px]:object-none"
              />
            </div>
          </div>
          <div
            class="w-[35.83vw] h-[597px] flex flex-col bg-[#FBFBEF] rounded-[25px] pl-[2.81vw] pt-[72px]"
          >
            <p class="font-PretendBold text-[34px] text-[#431B06]">
              강력한 보안을 제공합니다.
            </p>
            <p class="font-PretendBold text-[#696156] text-[34px]">
              신뢰할 수 있는 최신의 보안 시스템을<br />
              적용하여 개인정보를 보호합니다
            </p>
            <br />
            <div>
              <img
                src="../assets/mainPageImage/main12.png"
                class="min-[1500px]:object-none ml-auto"
              />
            </div>
          </div>
        </div>
        <div
          class="w-full mt-[40px] h-[495px] bg-[#F8F9FA] rounded-[25px] pl-[2.81vw] pt-[72px] flex flex-col items-center"
        >
          <p class="font-PretendBold text-[34px]">
            놀라운 수신율을 경험해 보세요
          </p>
          <p class="font-PretendBold text-[#727B88] text-[34px] leading-[48px]">
            샌드고의 정확한 수신율은 99.8%에 달합니다
          </p>
          <div class="mt-auto">
            <img src="../assets/mainPageImage/main13.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
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
      @click="goMessage"
    >
      메시지 바로가기
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    goRegister() {
      this.$router.push("/register");
    },
    goMessage() {
      this.$router.push("/message");
    },
  },
};
</script>
