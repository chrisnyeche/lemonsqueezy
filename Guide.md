## Challenges

** How to Import Google fonts in Chakra UI **

STEP ONE: USING FONT SOURCE
I. Install the font you want, if it exist in [FontSource](https://fontsource.org/fonts)
npm install @fontsource/open-sans

II. Use Chakra Theme to style and import font package
const theme = extendTheme({
fonts: {
heading: `'Inter', sans-serif`,
body: `'Inter', sans-serif`,
},
})
export default theme;

III. import the compont to chakra provider in your index.js
<ChakraProvider theme={theme}>
<App />
</ChakraProvider>

IV. Import font and weight to App.js 


STEP TWO: USING EMOTION REACT
I. 