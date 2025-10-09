/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure this points to your source code
    './app/**/*.{js,tsx,ts,jsx}',
    './components/**/*.{js,tsx,ts,jsx}',
    './constants/**/*.{js,tsx,ts,jsx}',
    './hooks/**/*.{js,tsx,ts,jsx}',
    './assets/**/*.{js,tsx,ts,jsx}',
    './styles/**/*.{js,tsx,ts,jsx}',
    // If you use a `src` directory, add: './src/**/*.{js,tsx,ts,jsx}'
    // Do the same with `components`, `hooks`, `styles`, or any other top-level directories
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c3628",
        primaryContent: "#fff",
        secondary: "#8c8b61",
        secondaryContent: "#fff",
        baseContent: "#000",
        base100: "#fff",
        error: "#be0d0d",
        errorContent: "#fff",
        accent: "705d01",
        success: "132c1f",
        warning: "#ffae00",
        info: "00ffbf",
      }
    },
    plugins: [],
  }
}
// PRIMARY: "#1E90FF",
// SECONDARY: "#FFD700",
//  primary: "#2563EB",
//     secondary: "#9333EA"