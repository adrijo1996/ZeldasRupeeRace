parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"7//3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){return e.x<585&&e.x>15&&e.y<350&&e.y>130},t=e;exports.default=t;
},{}],"F/BX":[function(require,module,exports) {
module.exports="/ZeldasRupeeRace/ZeldaSprites.1a071faa.png";
},{}],"qvDw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Zelda=void 0;var i=t(require("../utils/checklimits"));function t(i){return i&&i.__esModule?i:{default:i}}function e(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function r(i,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function o(i,t,e){return t&&r(i.prototype,t),e&&r(i,e),i}var s=require("../../assets/ZeldaSprites.png"),n=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:290,y:275},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#0d9263";e(this,t),this.color=r,this.pos=i,this.speed=1,this.directionX=0,this.directionY=0,this.image=new Image,this.image.src=s}return o(t,[{key:"draw",value:function(t,e){t.fillStyle=this.color;var r={x:this.pos.x+this.directionX*this.speed,y:this.pos.y+this.directionY*this.speed};(0,i.default)(r)&&(this.pos=r),t.fillRect(this.pos.x,this.pos.y,5,5),t.drawImage(this.image,90,140,40,50,this.pos.x-10,this.pos.y-27,30,40)}},{key:"keyboardEventDown",value:function(i){"ArrowRight"===i?(this.directionX=1,this.directionY=0):"ArrowLeft"===i?(this.directionX=-1,this.directionY=0):"ArrowDown"===i?(this.directionY=1,this.directionX=0):"ArrowUp"===i&&(this.directionY=-1,this.directionX=0)}},{key:"keyboardEventUp",value:function(i){"ArrowRight"===i?this.directionX=0:"ArrowLeft"===i?this.directionX=0:"ArrowDown"===i?this.directionY=0:"ArrowUp"===i&&(this.directionY=0)}}]),t}();exports.Zelda=n;
},{"../utils/checklimits":"7//3","../../assets/ZeldaSprites.png":"F/BX"}]},{},["qvDw"], null)
//# sourceMappingURL=/ZeldasRupeeRace/zelda.bc02b5cd.js.map