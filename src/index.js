import bar from './bar';
import $ from 'jquery';
import html from './include.html';
import Vue from 'vue';
import App from './App.vue';
require('./index.css');

bar();

$(function() {
  $('#btn').on('click', function() {
    alert('click me')
    $('body').append(html);
  })
})

new Vue({
  render: h => h(App)
}).$mount('#app')