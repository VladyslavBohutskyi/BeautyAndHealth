"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);e=new(Function.bind.apply(t,n));return r&&_setPrototypeOf(e,r.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function n(o,i,u){function c(e,t){if(!i[e]){if(!o[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(f)return f(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=i[e]={exports:{}},o[e][0].call(r.exports,function(t){return c(o[e][1][t]||t)},r,r.exports,n,o,i,u)}return i[e].exports}for(var f="function"==typeof require&&require,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e,r){customElements.get("s-header")||customElements.define("s-header",function(){_inherits(e,_wrapNativeSuper(HTMLElement));var t=_createSuper(e);function e(){return _classCallCheck(this,e),t.call(this)}return _createClass(e,[{key:"connectedCallback",value:function(){this.mobMenu(),this.stickyHeader()}},{key:"mobMenu",value:function(){var t=this;this.querySelector(".s-header__menu-btn").addEventListener("click",function(){return t.classList.toggle("s-header--menu-active"),document.querySelector("body").classList.toggle("hiden")})}},{key:"stickyHeader",value:function(){console.log(this.getAttribute("data-sticky")),window.addEventListener("scroll",function(t){return console.log(document.documentElement.scrollTop)})}}]),e}())},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVhZGVyLmpzIiwiaGVhZGVyLmpzIl0sIm5hbWVzIjpbInIiLCJlIiwibiIsInQiLCJvIiwiaSIsImYiLCJjIiwicmVxdWlyZSIsInUiLCJhIiwiRXJyb3IiLCJjb2RlIiwicCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsImN1c3RvbUVsZW1lbnRzIiwiZ2V0IiwiZGVmaW5lIiwiX2luaGVyaXRzIiwiU0hlYWRlciIsIl93cmFwTmF0aXZlU3VwZXIiLCJIVE1MRWxlbWVudCIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIm1vYk1lbnUiLCJzdGlja3lIZWFkZXIiLCJfdGhpcyIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZG9jdW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwid2luZG93IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoicTNHQUFBLENBQUEsU0FBQUEsRUFBQUMsRUFBQUMsRUFBQUMsR0FBQSxTQUFBQyxFQUFBQyxFQUFBQyxHQUFBLEdBQUEsQ0FBQUosRUFBQUcsR0FBQSxDQUFBLEdBQUEsQ0FBQUosRUFBQUksR0FBQSxDQUFBLElBQUFFLEVBQUEsWUFBQSxPQUFBQyxTQUFBQSxRQUFBLEdBQUEsQ0FBQUYsR0FBQUMsRUFBQSxPQUFBQSxFQUFBRixFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUFJLEVBQUEsT0FBQUEsRUFBQUosRUFBQSxDQUFBLENBQUEsRUFBQSxNQUFBSyxFQUFBLElBQUFDLE1BQUEsdUJBQUFOLEVBQUEsR0FBQSxHQUFBTyxLQUFBLG1CQUFBRixDQUFBLENBQUFHLEVBQUFYLEVBQUFHLEdBQUEsQ0FBQVMsUUFBQSxFQUFBLEVBQUFiLEVBQUFJLEdBQUEsR0FBQVUsS0FBQUYsRUFBQUMsUUFBQSxTQUFBZCxHQUFBLE9BQUFJLEVBQUFILEVBQUFJLEdBQUEsR0FBQUwsSUFBQUEsQ0FBQSxDQUFBLEVBQUFhLEVBQUFBLEVBQUFDLFFBQUFkLEVBQUFDLEVBQUFDLEVBQUFDLENBQUEsQ0FBQSxDQUFBLE9BQUFELEVBQUFHLEdBQUFTLE9BQUEsQ0FBQSxJQUFBLElBQUFMLEVBQUEsWUFBQSxPQUFBRCxTQUFBQSxRQUFBSCxFQUFBLEVBQUFBLEVBQUFGLEVBQUFhLE9BQUFYLENBQUEsR0FBQUQsRUFBQUQsRUFBQUUsRUFBQSxFQUFBLE9BQUFELENBQUEsRUFBQSxDQUFBYSxFQUFBLENBQUEsU0FBQVQsRUFBQVUsRUFBQUosR0NBQUssZUFBQUMsSUFBQSxVQUFBLEdBQ0FELGVBQUFFLE9BQUEsV0FBQSxXQUFBQyxVQUFBQyxFQXlCQUMsaUJBekJBQyxXQUFBLENBQUEsRUFBQSxJQUFBQyxFQUFBQyxhQUFBSixDQUFBLEVBQ0EsU0FBQUEsSUFBQSxPQUFBSyxnQkFBQUMsS0FBQU4sQ0FBQSxFQUFBRyxFQUFBWCxLQUFBYyxJQUFBLENBRUEsQ0FzQkEsT0F0QkFDLGFBQUFQLEVBQUEsQ0FBQSxDQUFBUSxJQUFBLG9CQUFBQyxNQUVBLFdBQ0FILEtBQUFJLFFBQUEsRUFDQUosS0FBQUssYUFBQSxDQUNBLENBQUEsRUFBQSxDQUFBSCxJQUFBLFVBQUFDLE1BR0EsV0FBQSxJQUFBRyxFQUFBTixLQUNBQSxLQUFBTyxjQUFBLHFCQUFBLEVBQUFDLGlCQUFBLFFBQ0EsV0FBQSxPQUFBRixFQUFBRyxVQUFBQyxPQUFBLHVCQUFBLEVBQ0FDLFNBQUFKLGNBQUEsTUFBQSxFQUFBRSxVQUFBQyxPQUFBLE9BQUEsQ0FBQSxDQUFBLENBQ0EsQ0FBQSxFQUFBLENBQUFSLElBQUEsZUFBQUMsTUFFQSxXQUNBUyxRQUFBQyxJQUFBYixLQUFBYyxhQUFBLGFBQUEsQ0FBQSxFQU1BQyxPQUFBUCxpQkFBQSxTQUFBLFNBQUFwQyxHQUFBLE9BQUF3QyxRQUFBQyxJQUFBRixTQUFBSyxnQkFBQUMsU0FBQSxDQUFBLENBQUEsQ0FDQSxDQUFBLEVBQUEsRUFBQXZCLENBQUEsRUF6QkEsQ0FBQSxDQ3FDQSxFQUFFLEdGdENGLEVBQUEsR0FBQSxDQUFBLEVBQUEiLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdzLWhlYWRlcicpKSB7XHJcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzLWhlYWRlcicsIGNsYXNzIFNIZWFkZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTsgIC8vIGFsbCBhdHIgZnJvbSBodG1sIGVsZW1cclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgdGhpcy5tb2JNZW51KClcclxuICAgICAgdGhpcy5zdGlja3lIZWFkZXIoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtb2JNZW51KCkge1xyXG4gICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5zLWhlYWRlcl9fbWVudS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgICAgKCkgPT4gKHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgncy1oZWFkZXItLW1lbnUtYWN0aXZlJyksXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZW4nKSkpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0aWNreUhlYWRlcigpe1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGlja3knKSk7XHJcbiAgICAgIGZ1bmN0aW9uIGFkZFN0aWNreSgpe1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAyMDApe1xyXG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzdGlja3knKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApKVxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdzLWhlYWRlcicpKSB7XHJcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzLWhlYWRlcicsIGNsYXNzIFNIZWFkZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTsgIC8vIGFsbCBhdHIgZnJvbSBodG1sIGVsZW1cclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgdGhpcy5tb2JNZW51KClcclxuICAgICAgdGhpcy5zdGlja3lIZWFkZXIoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtb2JNZW51KCkge1xyXG4gICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5zLWhlYWRlcl9fbWVudS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXHJcbiAgICAgICAgKCkgPT4gKHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgncy1oZWFkZXItLW1lbnUtYWN0aXZlJyksXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZW4nKSkpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0aWNreUhlYWRlcigpe1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGlja3knKSk7XHJcbiAgICAgIGZ1bmN0aW9uIGFkZFN0aWNreSgpe1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAyMDApe1xyXG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzdGlja3knKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApKVxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cbn0se31dfSx7fSxbMV0pXG5cbiJdfQ==
