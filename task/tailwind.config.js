/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      PretendBlack: ['Pretendard-Black'],
      PretendBold: ['Pretendard-Bold'],
      PretendExtraBold: ['Pretendard-ExtraBold'],
      PretendExtraLight: ['Pretendard-ExtraLight'],
      PretendLight: ['Pretendard-Light'],
      PretendMedium: ['Pretendard-Medium'],
      PretendRegular: ['Pretendard-Regular'],
      PretendSemiBold: ['Pretendard-SemiBold'],
      PretendThin: ['Pretendard-Thin'],
    }
  },
  plugins: [],
}
