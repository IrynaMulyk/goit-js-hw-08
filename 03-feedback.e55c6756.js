!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,o,f,a,u,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function O(e){return c=e,u=setTimeout(h,t),d?p(e):a}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=f}function h(){var e=g();if(T(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-l);return s?b(n,f-(e-c)):n}(e))}function w(e){return u=void 0,v&&r?p(e):(r=o=void 0,a)}function S(){var e=g(),n=T(e);if(r=arguments,o=this,l=e,n){if(void 0===u)return O(l);if(s)return u=setTimeout(h,t),p(l)}return void 0===u&&(u=setTimeout(h,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,f=(s="maxWait"in n)?m(j(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=o=u=void 0},S.flush=function(){return void 0===u?a:w(g())},S}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||u.test(t)?l(t.slice(2),i?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),T={};O.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.email.value||""===O.message.value)return alert("Please fill in all fields");console.log(T),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),O.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500));var h=JSON.parse(localStorage.getItem("feedback-form-state"));!function(){if(h)for(var e in h)T[e]=h[e],O.elements[e].value=h[e]}()}();
//# sourceMappingURL=03-feedback.e55c6756.js.map
