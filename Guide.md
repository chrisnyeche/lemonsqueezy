## Challenges

**NUMBER ONE: How to Import Google fonts in Chakra UI**
USING FONT SOURCE
I. Install the font you want, if it exist in [FontSource](https://fontsource.org/fonts)
npm install @fontsource/inter

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

**********************************************************

**NUMBER TWO: How to make balls float**
.floating {
  animation-name: floating;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}


