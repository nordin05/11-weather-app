(()=>{"use strict";var n={767:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([n.id,"",""]);const a=c},948:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([n.id,".weather-container .icon {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    background-color: aqua;\n\n    background-color: var(--container-bg-col);\n    border: 2px solid var(--container-border-col);\n    border-radius: 5px 0px 0px 5px;\n    border-right: none;\n}\n\n.weather-container .icon img {\n    padding: 8px 0px;\n}\n\n.weather-container .icon p {\n    font-size: 18px;\n    color: var(--h-color-text);\n}\n",""]);const a=c},856:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([n.id,".weather-container .info {\n    background-color: aqua;\n    width: 60%;\n    height: 63.5%;\n\n    display: flex;\n    flex-direction: column;\n\n    gap: 10px;\n\n    background-color: var(--container-bg-col);\n    border: 2px solid var(--container-border-col);\n    border-radius: 5px;\n}\n\n.weather-container .info .humidity {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    color: var(--h-color-text);\n}\n\n.weather-container .info .precipitation {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    color: var(--h-color-text);\n}\n\n.weather-container .info .wind {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: -15px;\n    color: var(--h-color-text);\n}\n\n.weather-container .info span {\n    display: flex;\n    align-items: center;\n    color: var(--accent-text-col);\n}\n\n.weather-container .info .wind .direction {\n    font-size: 35px;\n    padding-bottom: 12px;\n}\n",""]);const a=c},192:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([n.id,".weather-container .location {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n\n    background-color: var(--container-bg-col);\n    border-radius: 5px;\n    border: 2px solid var(--container-border-col);\n    padding-top: 5px;\n}\n\n.weather-container .location .country {\n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    justify-self: center;\n    color: var(--h-color-text);\n}\n\n.weather-container .location .region {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n\n    align-self: center;\n    justify-self: end;\n\n    padding-right: 50px;\n    color: var(--h-color-text);\n}\n\n.weather-container .location .datetime {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n\n    align-self: center;\n    justify-self: start;\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    width: 60%;\n}\n\n.weather-container .location .datetime .date {\n    color: var(--accent-text-col);\n}\n\n.weather-container .location .datetime .time {\n    color: var(--accent-text-col);\n}\n",""]);const a=c},405:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([n.id,".weather-container .temprature {\n    display: flex;\n\n    background-color: var(--container-bg-col);\n    border: 2px solid var(--container-border-col);\n    border-radius: 0px 5px 5px 0px;\n    border-left: none;\n}\n\n.weather-container .temprature h1 {\n    color: var(--accent-text-col);\n    padding-right: 10px;\n}\n\n.weather-container .temprature .celcius {\n    color: var(--accent2-text-col);\n    padding-right: 5px;\n    border-right: 2px solid hsl(218.67deg 40.25% 76.52%);\n    height: 15%;\n    font-weight: 600;\n}\n\n.weather-container .temprature .fahrenheit {\n    color: var(--accent2-text-col);\n    padding-left: 5px;\n}\n",""]);const a=c},850:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([n.id,':root {\n    --body-col: hsl(218.92deg 100% 94.83%);\n    --container-bg-col: hsl(218.18deg 42.86% 84.9%);\n    --container-border-col: hsl(219deg 22.73% 65.49%);\n    --h-color-text: hsl(221.54deg 39.03% 57.46%);\n    --accent-text-col: hsl(0deg 100% 74.14%);\n    --accent2-text-col: hsl(0deg 100% 79.09%);\n}\n\nh1,\nh2,\np,\nbutton {\n    margin: 0px;\n    font-family: "Roboto", sans-serif;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    background-color: var(--body-col);\n}\n\n.container {\n    height: 400px;\n    width: 700px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    border-radius: 10px;\n}\n\n.search-container .search {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    background-color: var(--container-bg-col);\n    border-radius: 5px;\n    border: 2px solid var(--container-border-col);\n    padding: 15px 65px;\n}\n\n.search-container .search input {\n    margin-bottom: 5px;\n}\n\n.search-container .search button {\n    width: 100px;\n    height: 30px;\n\n    font-size: 16px;\n    font-weight: 600;\n\n    color: var(--accent-text-col);\n    background-color: hsl(0.95deg 100% 93.32%);\n    border: solid 2px var(--accent2-text-col);\n\n    border-radius: 12px;\n    margin-top: 5px;\n}\n\n.weather-container {\n    background-color: var(--weather-container-bg-col);\n    display: grid;\n    grid-template-columns: 33% 15% 1fr;\n    grid-template-rows: 40% 1fr;\n\n    width: 600px;\n    height: 300px;\n\n    border-top: 2px solid var(--container-bg-col);\n    margin-top: 20px;\n    padding-top: 10px;\n}\n\n.weather-container .location {\n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    width: 500px;\n\n    align-self: center;\n    justify-self: center;\n}\n\n.weather-container .icon {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n\n    align-self: start;\n    justify-self: end;\n\n    width: 75%;\n    height: 80%;\n}\n\n.weather-container .temprature {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n\n    height: 82%;\n    width: 110%;\n    box-sizing: border-box;\n\n    align-self: start;\n    padding-top: 15px;\n}\n\n.weather-container .info {\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n\n    align-self: start;\n    justify-self: center;\n\n    padding: 15px 20px;\n    margin-right: 20px;\n}\n\n.weather-container .error {\n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    align-self: center;\n    justify-self: center;\n\n    color: var(--accent-text-col);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n',""]);const a=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(c[l]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},c=[],a=0;a<n.length;a++){var l=n[a],d=r.base?l[0]+r.base:l[0],s=i[d]||0,u="".concat(d," ").concat(s);i[d]=s+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var a=t(i[c]);e[a].references--}for(var l=r(n,o),d=0;d<i.length;d++){var s=t(i[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),c=t.n(i),a=t(565),l=t.n(a),d=t(216),s=t.n(d),u=t(589),p=t.n(u),m=t(850),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=t(192),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var y=t(948),x={};x.styleTagTransform=p(),x.setAttributes=l(),x.insert=c().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=s(),e()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;var v=t(405),b={};b.styleTagTransform=p(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=s(),e()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;var w=t(856),S={};S.styleTagTransform=p(),S.setAttributes=l(),S.insert=c().bind(null,"head"),S.domAPI=o(),S.insertStyleElement=s(),e()(w.Z,S),w.Z&&w.Z.locals&&w.Z.locals;var T=t(767),Z={};Z.styleTagTransform=p(),Z.setAttributes=l(),Z.insert=c().bind(null,"head"),Z.domAPI=o(),Z.insertStyleElement=s(),e()(T.Z,Z),T.Z&&T.Z.locals&&T.Z.locals;const q=document.querySelector(".location .country"),M=document.querySelector(".location .region"),j=document.querySelector(".location .date"),L=document.querySelector(".location .time"),k=document.querySelector(".icon img"),A=document.querySelector(".icon .description"),_=document.querySelector(".temprature .temp"),E=document.querySelector(".info .humidity span"),H=document.querySelector(".info .precipitation span"),I=document.querySelector(".info .wind .direction"),P=document.querySelector(".info .wind .speed");function C(n,e){var t,r,o,i,c,a;t=n.location.country,r=n.location.name,n.location.region,o=n.location.time,q.innerHTML=t,M.innerHTML=r,o=o.split(" "),j.innerHTML=o[0].replaceAll("-","/"),L.innerHTML=o[1],i=n.condition.icon,c=n.condition.text,k.src=i,A.innerHTML=c,a=n[e].temprature,_.innerHTML=Math.round(a),function(n,e,t,r,o){E.innerHTML=n+" %";const i=t+90;I.style.transform=`rotate(${i}deg)`,"metric"==o?(H.innerHTML=e+" mm",P.innerHTML=r+" km/h"):(H.innerHTML=e+" in",P.innerHTML=r+" mp/h")}(n[e].humidity,n[e].precipitation,n[e].wind_dir,n[e].wind_speed,e)}function z(n,e){"error"==e?N("none","none",n):N("grid","flex","")}function N(n,e,t){const r=document.querySelector(".location"),o=document.querySelector(".icon"),i=document.querySelector(".temprature"),c=document.querySelector(".info"),a=document.querySelector(".error h1");r.style.display=n,o.style.display=e,i.style.display=e,c.style.display=e,a.innerHTML=t}let O;const W=document.querySelector(".search button"),R=document.querySelector(".search input"),F=document.querySelector(".temprature .fahrenheit"),U=document.querySelector(".temprature .celcius");function $(n){""!=n&&(async function(n){try{let e=`https://api.weatherapi.com/v1/current.json?key=f880993075f84db784693020230207&q=${n}`;const t=await fetch(e,{mode:"cors"});return await t.json()}catch{console.error("Error fetching api")}}(n).then((n=>{!function(n,e){n.error?(console.log(n.error.message),z(n.error.message,"error")):(O=function(n){console.log(n);const e={location:{},condition:{},metric:{},imperial:{}};return e.location.country=n.location.country,e.location.name=n.location.name,e.location.region=n.location.region,e.location.time=n.location.localtime,e.condition.icon=n.current.condition.icon,e.condition.text=n.current.condition.text,e.metric.temprature=n.current.temp_c,e.imperial.temprature=n.current.temp_f,e.metric.humidity=n.current.humidity,e.imperial.humidity=n.current.humidity,e.metric.precipitation=n.current.precip_mm,e.imperial.precipitation=n.current.precip_in,e.metric.wind_dir=n.current.wind_degree,e.imperial.wind_dir=n.current.wind_degree,e.metric.wind_speed=n.current.wind_kph,e.imperial.wind_speed=n.current.wind_mph,console.log(e),e}(n),z("","success"),C(O,e))}(n,"metric")})),F.addEventListener("click",(function(){C(O,"imperial"),F.style.fontWeight="600",U.style.fontWeight="500"})),U.addEventListener("click",(function(){C(O,"metric"),F.style.fontWeight="500",U.style.fontWeight="600"})))}W.addEventListener("click",(function(){$(R.value)})),$("amsterdam")})()})();