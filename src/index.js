import bar from './bar';
import $ from 'jquery';
import html from './include.html';
import Vue from 'vue';
import App from './App.vue';
let styles = require('./index.css');
// import styles from "./index.css";
let avatar = require('./assets/avatar.jpg')

bar();

// console.log(styles)

$('.nav').addClass(styles.nav)

$(function() {
  $('#btn').on('click', function() {
    alert('click me')
    $('body').append(html);
  })
 console.log(avatar)
  // $('body').append('<img src="'+avatar.default+'">') //  如果esModule = true，使用对象default✍️
  $('body').append('<img src="'+avatar+'">') 
})

new Vue({
  render: h => h(App)
}).$mount('#app')