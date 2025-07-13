/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : 'class', //mengaktifkan dark mode 
  theme: {
    extend: {
      // definisikan warna
      colors: {
        light: {
          background: '#f8f9fa', // Latar belakang utama (putih pudar)
          text: '#212529',       // Teks utama (hitam lembut)
          primary: '#4a90e2',    // Warna aksen utama (biru)
          card: 'rgba(255, 255, 255, 0.6)', // Warna kartu untuk efek glassmorphism
          border: 'rgba(255, 255, 255, 0.8)', // Warna border kartu
        },
        // darkmode
        dark:{
          background: '#121212', // Latar belakang utama (abu-abu sangat gelap)
          text: '#e0e0e0',       // Teks utama (putih keabuan)
          primary: '#58a6ff',    // Warna aksen utama (biru terang)
          card: 'rgba(24, 24, 24, 0.4)',  // Warna kartu untuk efek glassmorphism
          border: 'rgba(255, 255, 255, 0.1)', // Warna border kartu
        },
      },
      // font
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'], // sekarang default sans pakai Poppins dulu
        serif: ['Lora', 'serif'],
      },
      //efek glassmorphism
      backdropBlur: {
        'xs': '2px', // Blur ringan untuk efek glassmorphism
        'sm': '4px', // Blur sedang
        'md': '6px', // Blur lebih kuat
        'lg': '8px', // Blur sangat kuat
        'xl': '24px', // Blur ekstra kuat
      },
      // font size
      fontSize: {
        'xs': '0.75rem', // 12px
        'sm': '0.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
      },
      // breakpoints
      screens:{
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

