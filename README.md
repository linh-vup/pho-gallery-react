# Galerie Phở 🍜🇻🇳

A simple photo gallery website with Dall-E generated images of phở, based on different style prompts. The project is based on a code along to SupherHi's [Intro to React.js](https://www.superhi.com/courses/intro-to-react-javascript) Chapter 1 project (Zesty).

Link to deployment: https://linh-vup.github.io/pho-gallery-react/

# Personalisation

- I used [Dall-E](https://openai.com/product/dall-e-2) to create images of phở based on different prompts.
- Instead of a simple array of images, I modified it to be an array of objects and added a 'description'(prompt) key to display the used prompt along with the image.
- Moved Loader function into separate component and imported into App.js
- Optimised for image loading by using a component using the `picture` element that includes a webp source and a png fallback
- Used `display: flex` to organise text elements instead of using `position: fixed` and `bottom: 0` for the h3 project description.
- Used ["Be Vietnam Pro"](https://fonts.google.com/specimen/Be+Vietnam+Pro) font so Vietnamese letters/diacritics are displayed nicely

# New Things Learned/Used

- Dall-E seems to be skewed towards depicting southern style phở (I 1000% believe northern style phở is better)
- Linking google fonts in HTML rather than importing into css (https://sia.codes/posts/making-google-fonts-faster/)
- Using CSS `text-rendering` property
- Using `-webkit-fill-available` for the `height` property of the `<img>` element for a better cover fit
- Using vw for fonts to make it responsive to page size
- Installed extension to easily convert px to rem
- Using the `<progress>` HTML element to display a progress bar when images are still loading
- I tried to code-split and use React.lazy() but wasn't sure it worked (Lighthouse didn't improve the score) so removed it. In the future I'm planning to use Next.js with built in code-splitting support so will look at it again when needed.
