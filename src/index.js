import bar from './bar';
import $ from 'jquery';
import html from './include.html';
import Vue from 'vue';
import App from './App.vue';
let styles = require('./index.css');
// import styles from "./index.css";

bar();

// console.log(styles)

$('.nav').addClass(styles.nav)

$(function() {
  $('#btn').on('click', function() {
    alert('click me')
    $('body').append(html);
  })
})

new Vue({
  render: h => h(App)
}).$mount('#app')