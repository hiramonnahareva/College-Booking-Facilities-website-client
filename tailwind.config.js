/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner' : "url('./src/asset/banner.png')"
      } 
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#0426c6",
        
          "secondary": "#1939cdb3",
                   
          "accent": "#1939cdb3",
                   
          "neutral": "#1939cdb3",
                   
          "base-100": "#FFFFFF",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

