/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero_image':
        "url('/Home Page Images/Hero Section Images/hero_image.jpg')",
        'hero_image2':
        "url('/Home Page Images/Hero Section Images/iPhone-image.svg')",
        'Comp3_bg_Image':
        "url('/Home Page Images/Comp_3 Images/MacBook.png')",
        'Comp3_bg1_Image':
        "url('/Home Page Images/Comp_3 Images/OnePlus.png')",
        'Comp8_bg_Image':
        "url('/Home Page Images/Comp_8 Images/TechLand_Smartphone.png')",
        'Comp5_bg_Image':
        "url('/Home Page Images/Comp_5 Images/background_image.png')",
        'Comp13_bg_Image':
        "url('/Home Page Images/Comp_13 Images/Ellipse 2.png')",
        'tlt_icon':
        "url('/portfolioimages/tlticon.png')",
        'Frame 3':
        "url('/portfolioimages/Frame 3.png')",
        'Vector':
        "url('/portfolioimages/Vector.png')",
        'Mobile':
        "url('/investNowImages/Mobile.png')",
        'Ellipse_14':
        "url('/investNowImages/Ellipse 14.png')",
        'Blockchain':
        "url('/Home Page Images/Comp_15 Images/comp15.png')",
        'ellipse':
        "url('/explorepageimages/Ellipse.png')",
        'dots':
        "url('/explorepageimages/dots.png')",
        'Praveen':
        "url('/aboutPageImages/praveen.png')",
        'nitish':
        "url('/aboutPageImages/nitish.png')",
        'vaibhav':
        "url('/aboutPageImages/employee images/vaibhav.png')",
        'gary':
        "url('/aboutPageImages/gary-beasley.png')",
        'web':
        "url('/aboutPageImages/web.png')",
        'popUp_img':
        "url('/Home Page Images/NavBar Images/popUp_img.png')",
        'profile_Comp4':
        "url('/Vector.png')",
        'profile_Comp1':
        "url('/profile.png')",
        'hero-background': "url('/Home Page Images/Hero Section Images/Visual.svg')",
        'notification':
        "url('/Transaction.png')",
        'abhay.png':
        "url('/viewMoreImages/Abhay.png')",
        'ashish.png':
        "url('/viewMoreImages/Ashish.png')",
        'kartike.png':
        "url('/viewMoreImages/Kartike.png')",
        'pravinKumar.png':
        "url('/viewMoreImages/PravinKumar.png')",
        'shivangi.png':
        "url('/viewMoreImages/Shivangi.png')",
      },
   
      boxShadow: {
        'custom': '0px 3px 28px 0px rgba(0, 0, 0, 0.06)',
      },
      screens: {
        'xxs' : '360',
        'xsm': '410px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
// https://dev.to/laurilllll/how-to-create-responsive-typography-using-css-three-different-methods-explained-50f8#:~:text=Example%20declaration%20for%20responsive%20text,desktop)%20and%20the%20preferred%20value.