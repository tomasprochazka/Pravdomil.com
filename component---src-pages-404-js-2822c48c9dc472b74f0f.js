webpackJsonp([0x9427c64ab85d],{4:function(e,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,u,l=r(e),i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var f in n)a.call(n,f)&&(l[f]=n[f]);if(o){u=o(n);for(var s=0;s<u.length;s++)c.call(n,u[s])&&(l[u[s]]=n[u[s]])}}return l}},198:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){return c.default.createElement("div",null,c.default.createElement("h1",null,"Not found"),c.default.createElement("p",null,"Sorry."))}t.__esModule=!0,t.default=o;var a=r(5),c=n(a);e.exports=t.default}});
//# sourceMappingURL=component---src-pages-404-js-2822c48c9dc472b74f0f.js.map