// import React from "react";
// import { ReactDOM } from "react";

// const MathUtils = {
//   // map number x from range [a, b] to [c, d]
//   map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
//   // linear interpolation
//   lerp: (a, b, n) => (1 - n) * a + n * b,
// };

// const body = document.body;
// var renderedStyles = null;
// var items = [];
// let docScroll;
// let winsize;
// let props;

// const animTest = () => {
//   // calculate the viewport size
//   let winsize;
//   const calcWinsize = () =>
//     (winsize = {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   console.log("window.innerWidth", window.innerWidth);
//   console.log("window.innerHeight", window.innerHeight);
//   calcWinsize();
//   // and recalculate on resize
//   window.addEventListener("resize", calcWinsize);

//   // scroll position and update function

//   const getPageYScroll = () =>
//     (docScroll = window.pageYOffset || document.documentElement.scrollTop);
//   window.addEventListener("scroll", getPageYScroll);

//   // ------------------------------------------------------------------------
//   //   const preloadImages = () => {
//   //     document.querySelectorAll(".item__img").background = true;

//   // return new Promise((resolve, reject) => {
//   //   document.querySelectorAll(".item__img").background = true;
//   //   resolve;
//   // });
//   //   };

//   //   document.querySelectorAll(".item__img").background = true;
//   getPageYScroll;
//   new SmoothScroll();

//   return (
//     <body class="loading">
//       <main>
//         <div data-scroll>
//           <div class="frame">
//             <div class="frame__title-wrap">
//               <h1 class="frame__title">
//                 Smooth scrolling and inner image animation
//               </h1>
//             </div>
//             <div class="frame__links">
//               <a href="https://tympanus.net/Development/DraggableMenu/">
//                 Previous Demo
//               </a>
//               <a href="https://tympanus.net/codrops/?p=41030">Article</a>
//               <a href="https://github.com/codrops/SmoothScrollAnimations/">
//                 GitHub
//               </a>
//             </div>
//           </div>
//           <div class="content">
//             <div class="item">
//               <div class="item__img-wrap">
//                 <div class="item__img item__img--t1"></div>
//               </div>
//               <div class="item__caption">
//                 <h2 class="item__caption-title">Central view</h2>
//                 <p class="item__caption-copy">
//                   Great turbulent clouds emerged into consciousness citizens.
//                 </p>
//               </div>
//             </div>
//             <div class="item">
//               <div class="item__img-wrap">
//                 <div class="item__img item__img--t2"></div>
//               </div>
//               <div class="item__caption">
//                 <h2 class="item__caption-title">Lost in time</h2>
//                 <p class="item__caption-copy">
//                   Brain is the seed of intelligence the sky calls to us a very
//                   small stage.
//                 </p>
//               </div>
//             </div>
//             <div class="item">
//               <div class="item__img-wrap">
//                 <div class="item__img item__img--t3"></div>
//               </div>
//               <div class="item__caption">
//                 <h2 class="item__caption-title">Ready to land</h2>
//                 <p class="item__caption-copy">
//                   Cosmos encyclopaedia galactica a billion trillion culture
//                   cosmic ocean.
//                 </p>
//               </div>
//             </div>
//             <div class="item">
//               <div class="item__img-wrap">
//                 <div class="item__img item__img--t1"></div>
//               </div>
//               <div class="item__caption">
//                 <h2 class="item__caption-title">All equal</h2>
//                 <p class="item__caption-copy">
//                   Network of wormholes dream of the mind's eye finite but
//                   unbounded concept.
//                 </p>
//               </div>
//             </div>
//             <div class="item">
//               <div class="item__img-wrap">
//                 <div class="item__img item__img--t2"></div>
//               </div>
//               <div class="item__caption">
//                 <h2 class="item__caption-title">Connections</h2>
//                 <p class="item__caption-copy">
//                   Two ghostly white figures in coveralls and helmets are softly
//                   dancing vastness.
//                 </p>
//               </div>
//             </div>
//             <div class="item">
//               <div class="item__img-wrap">
//                 <div class="item__img item__img--t3"></div>
//               </div>
//               <div class="item__caption">
//                 <h2 class="item__caption-title">The state of divergence</h2>
//                 <p class="item__caption-copy">
//                   Vastness is bearable only through love invent the universe
//                   vanquish.
//                 </p>
//               </div>
//             </div>
//             <div class="item">
//               <div class="item__img-wrap">
//                 <div class="item__img item__img--t1"></div>
//               </div>
//               <div class="item__caption">
//                 <h2 class="item__caption-title">Open perspective</h2>
//                 <p class="item__caption-copy">
//                   The only home we've ever known concept of the number one.
//                 </p>
//               </div>
//             </div>
//             <div class="item">
//               <div class="item__img-wrap">
//                 <div class="item__img item__img--t3"></div>
//               </div>
//               <div class="item__caption">
//                 <h2 class="item__caption-title">Discovery of shapes</h2>
//                 <p class="item__caption-copy">
//                   Decipherment explorations tesseract as a patch of light.
//                 </p>
//               </div>
//             </div>
//             <div class="item">
//               <div class="item__img-wrap">
//                 <div class="item__img item__img--t2"></div>
//               </div>
//               <div class="item__caption">
//                 <h2 class="item__caption-title">The Observer</h2>
//                 <p class="item__caption-copy">
//                   Astonishment muse about dispassionate extraterrestrial
//                   observer.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </body>
//   );
// };

// export default animTest;

// const Item = ({ el }) => {
//   ReactDOM = { el: el };
//   // the inner image
//   ReactDOM.image = ReactDOM.el.querySelector(".item__img");
//   renderedStyles = {
//     innerTranslationY: {
//       previous: 0,
//       current: 0,
//       ease: 0.1,
//       // the maximum value to translate the image is set in a CSS variable (--overflow)
//       maxValue: parseInt(
//         getComputedStyle(ReactDOM.image).getPropertyValue("--overflow"),
//         10
//       ),
//       setValue: () => {
//         const maxValue = renderedStyles.innerTranslationY.maxValue;
//         const minValue = -1 * maxValue;
//         return Math.max(
//           Math.min(
//             MathUtils.map(
//               props.top - docScroll,
//               winsize.height,
//               -1 * props.height,
//               minValue,
//               maxValue
//             ),
//             maxValue
//           ),
//           minValue
//         );
//       },
//     },
//   };

//   function update() {
//     getSize();
//     for (const key in renderedStyles) {
//       renderedStyles[key].current = renderedStyles[key].previous =
//         renderedStyles[key].setValue();
//     }
//     layout();
//   }

//   function getSize() {
//     const rect = ReactDOM.el.getBoundingClientRect();
//     props = {
//       height: rect.height,
//       top: docScroll + rect.top,
//     };
//   }
//   function initEvents() {
//     window.addEventListener("resize", () => resize());
//   }
//   function resize() {
//     // on resize rest sizes and update the translation value
//     update();
//   }
//   function render() {
//     for (const key in renderedStyles) {
//       renderedStyles[key].current = renderedStyles[key].setValue();
//       renderedStyles[key].previous = MathUtils.lerp(
//         renderedStyles[key].previous,
//         renderedStyles[key].current,
//         renderedStyles[key].ease
//       );
//     }
//     layout();
//   }
//   function layout() {
//     // translates the image
//     ReactDOM.image.style.transform = `translate3d(0,${renderedStyles.innerTranslationY.previous}px,0)`;
//   }
//   return <div></div>;
// };

// const SmoothScroll = () => {
//   ReactDOM = { main: document.querySelector("main") };
//   ReactDOM.scrollable = ReactDOM.main.querySelector("div[data-scroll]");

//   [...ReactDOM.main.querySelectorAll(".content > .item")].forEach((item) =>
//     items.push(new Item(item))
//   );
//   renderedStyles = {
//     translationY: {
//       previous: 0,
//       current: 0,
//       ease: 0.1,
//       setValue: () => docScroll,
//     },
//   };
//   setSize();
//   update();
//   style();
//   initEvents();
//   // start the render loop
//   requestAnimationFrame(() => render());

//   function update() {
//     // sets the initial value (no interpolation) - translate the scroll value
//     for (const key in renderedStyles) {
//       renderedStyles[key].current = renderedStyles[key].previous =
//         renderedStyles[key].setValue();
//     }
//     // translate the scrollable element
//     layout();
//   }
//   function layout() {
//     // translates the scrollable element
//     ReactDOM.scrollable.style.transform = `translate3d(0,${
//       -1 * renderedStyles.translationY.previous
//     }px,0)`;
//   }
//   function setSize() {
//     // set the heigh of the body in order to keep the scrollbar on the page
//     body.style.height = `${ReactDOM.scrollable.scrollHeight}px`;
//   }
//   function style() {
//     ReactDOM.main.style.position = "fixed";
//     ReactDOM.main.style.width = ReactDOM.main.style.height = "100%";
//     ReactDOM.main.style.top = ReactDOM.main.style.left = 0;
//     ReactDOM.main.style.overflow = "hidden";
//   }
//   function initEvents() {
//     // on resize reset the body's height
//     window.addEventListener("resize", () => setSize());
//   }
//   function render() {
//     for (const key in renderedStyles) {
//       renderedStyles[key].current = renderedStyles[key].setValue();
//       renderedStyles[key].previous = MathUtils.lerp(
//         renderedStyles[key].previous,
//         renderedStyles[key].current,
//         renderedStyles[key].ease
//       );
//     }
//     // and translate the scrollable element
//     layout();
//     for (const item of items) {
//       if (item.isVisible) {
//         item.render();
//       }
//     }

//     // loop..
//     requestAnimationFrame(() => render());
//   }

//   return <div></div>;
// };
