import $ from 'jquery';
import Vue from 'vue';

import html from './include.html';
import App from './App';
// import symbolData from './assets/svg/warning.svg';

// import bar from './bar';

// console.log(typeof bar); // function
// 会单独打包，异步import要放在其他import的最后，返回值是一个Promise对象
import('./bar').then((bar) => {
  // console.log(bar)
  // eslint-disable-next-line
  bar.default() // bar是一个模块对象
}).catch(() => {
  console.log('加载失败...')
});

const styles = require('./index.css');
require('./style.css');
// import styles from "./index.css";
const avatar = require('./assets/avatar.jpg');
// console.log(symbolData);
// bar();
// console.log(styles)

$('.nav').addClass(styles.nav);

$(() => {
  $('#btn').on('click', () => {
    // alert('click me');
    $('body').append(html);
  });
  console.log(avatar)
  // $('body').append('<img src="'+avatar.default+'">') //  如果esModule = true，使用对象default✍️
  $('body').append(`<img src="${avatar}">`);
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')

// requires and returns all modules that match
const requireAll = (requireContext) => requireContext.keys().map(requireContext);

// import all svg
const req = require.context('./assets/svg', true, /\.svg$/);
requireAll(req);

// 添加svg extract: true
// window.addEventListener('DOMContentLoaded', () => {
//   const image = `<img width="${symbolData.width}" height="${symbolData.height}" src="${symbolData.url}">`;
//   const usage = `<svg viewBox="${symbolData.viewBox}"><use xlink:href="${symbolData.url}"></use></svg>`;
//   document.getElementById('svg-container').innerHTML = `${image} ${usage}`;
// });

// console.log(symbolData)
console.log(module)
if (module.hot) {
  module.hot.accept('./bar', () => {
    console.log('hello..')
  })
}
