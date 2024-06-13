/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

console.log('hello webpack');
var btn = document.getElementById('btn');
var num = document.getElementById('num');
btn.addEventListener('click', function () {
  var n = parseInt(num.innerText, 10);
  num.innerText = n + 1;
});
/******/ })()
;