var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={save:(e,t)=>{try{let r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{return localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},o={},n="Expected a function",i=0/0,a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,d=c||m||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return i;if(b(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=b(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var o=l.test(e);return o||u.test(e)?s(e.slice(2),o?2:8):f.test(e)?i:+e}o=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(n);return b(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),function(e,t,r){var o,i,a,f,l,u,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw TypeError(n);function v(t){var r=o,n=i;return o=i=void 0,s=t,f=e.apply(n,r)}function j(e){var r=e-u,o=e-s;return void 0===u||r>=t||r<0||m&&o>=a}function O(){var e,r,o,n=y();if(j(n))return S(n);l=setTimeout(O,(e=n-u,r=n-s,o=t-e,m?p(o,a-r):o))}function S(e){return(l=void 0,d&&o)?v(e):(o=i=void 0,f)}function T(){var e,r=y(),n=j(r);if(o=arguments,i=this,u=r,n){if(void 0===l)return s=e=u,l=setTimeout(O,t),c?v(e):f;if(m)return l=setTimeout(O,t),v(u)}return void 0===l&&(l=setTimeout(O,t)),f}return t=h(t)||0,b(r)&&(c=!!r.leading,a=(m="maxWait"in r)?g(h(r.maxWait)||0,t):a,d="trailing"in r?!!r.trailing:d),T.cancel=function(){void 0!==l&&clearTimeout(l),s=0,o=u=i=l=void 0},T.flush=function(){return void 0===l?f:S(y())},T}(e,t,{leading:o,maxWait:t,trailing:i})};const j="feedback-form-state",O={form:document.querySelector(".feedback-form")};O.form.addEventListener("input",((e=o)&&e.__esModule?e.default:e)(function(e){S[e.target.name]=e.target.value,r.save(j,S)},500)),O.form.addEventListener("submit",function(e){if(e.preventDefault(),!S.message||!S.email)return alert("Не-не, заповніть всі поля");console.log(S),S={},r.remove(j),e.target.reset()});let S={};S=r.load(j)||{},O.form.elements.email.value=S?.email||"",O.form.elements.message.value=S?.message||"";
//# sourceMappingURL=03-feedback.5f43978e.js.map
