import bar from './bar';
import $ from 'jquery';
// import html from './include.html';
import Vue from 'vue';
import App from './App.vue';
let styles = require('./index.css');
// import styles from "./index.css";
let avatar = require('./assets/avatar.jpg')

import symbolData from './assets/svg/warning.svg';

console.log(symbolData)
bar();

// console.log(styles)

$('.nav').addClass(styles.nav)

$(function() {
  $('#btn').on('click', function() {
    alert('click me')
    // $('body').append(html);
  })
//  console.log(avatar)
  // $('body').append('<img src="'+avatar.default+'">') //  如果esModule = true，使用对象default✍️
  $('body').append('<img src="'+avatar+'">') 
})

new Vue({
  render: h => h(App)
}).$mount('#app')


// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
 
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


