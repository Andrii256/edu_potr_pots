parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".summary__buy-button"),t=["a","b","c","d","e","f"],o=function(e,t){"formUp"===t?document.querySelector(".summary__photo-card--".concat(e)).classList.add("summary__photo-card--".concat(e,"-linedUp")):document.querySelector(".summary__photo-card--".concat(e)).classList.remove("summary__photo-card--".concat(e,"-linedUp"))};e.addEventListener("mouseover",function(){t.forEach(function(e){return o(e,"formUp")})}),e.addEventListener("mouseleave",function(){t.forEach(function(e){return o(e,"")})});var r=document.querySelector(".header"),c=0,n=function(e){window.scrollY>r.offsetHeight/2&&(r.style.top="-".concat(r.offsetHeight,"px")),c>window.scrollY&&(r.style.top="0"),"0px"===r.style.top&&window.scrollY>r.offsetHeight?r.classList.add("header--filled"):r.classList.remove("header--filled"),c=window.scrollY};document.addEventListener("scroll",n),document.querySelector(".message-us__form").addEventListener("submit",function(e){e.preventDefault(),document.querySelector("#popupToggler").checked=!0});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.41750c81.js.map