import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        blink: {
          '0%, 100%': {
          opacity:'1'
          },
          '50%': {
            opacity:'0'
          },
        },
      },
      animation: {
        bounce: 'bounce 3s infinite',
        blink: 'blink 1s linear infinite',
      
      },
      height: {
        'screen-62': 'calc(100vh - 62px)',
      },
    },
  },
  plugins: [
    function ({addUtilities}:any){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar":{
          display:'none'
        },
        ".no-scrollbar":{
          '-ms-overflow-style':"none",
          "scrollbar-width":'none'
        },
        '.scrollbar-thin':{
          scrollbarWidth:'thin',
          scrollbarColor:'rgb(31,29,29) white'
        },
        '.scrollbar-webkit':{
          '&::-webkit-scrollbar':{
            width:'6px',
            overflow:'visible'
          
          },
          "&::-webkit-scrollbar-track":{
            background:'#707070',
            borderRadius:'46px',

          },
          "&::-webkit-scrollbar-thumb":{
            backgroundColor:'#C4C4C4',
            borderRadius:'100px',
            height:'10px',
            width:'100px',
          },

        }
      };
      addUtilities(newUtilities);
    },
  ],
}
export default config
