!function(n){var e={};function a(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,a){"use strict";a.r(e);var t=()=>'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1 />\n                    <a href="/">\n                    100tifi.co\n                    </a>  \n                </h1>\n            </div>\n\n            <div class="Header-nav">\n                <a href="#/about">\n                    About\n                </a>\n\n            </div>\n        </div>\n    ';const r="https://api.spacexdata.com/v5/launches/";var i=async n=>{const e=n?`${r}${n}`:r;try{const n=await fetch(e),a=await n.json();return console.log(a),a}catch(n){console.log("Fetch Error..!!",n)}};var s=()=>location.hash.slice(1).toLowerCase().split("/")[1]||"/";var c=()=>'\n        <div class="Error404">\n            <h2> Error 404 </>\n         </div>   \n    ';var o=n=>"/"===n?"/":24===n.length?"/:id":"/"+n;const l={"/":async()=>`\n        <div class="Characters">\n        ${(await i()).map(n=>`\n            <article class="Character-item">\n                <a href="#/${n.id}">\n                    <img src="${n.links.patch.small}" alt="${n.name}">\n                    <h2>${n.name}</h2>\n                </a>\n            </article>\n        `).join("")}\n       `,"/:id":async()=>{const n=s(),e=await i(n);if(!e)return'<div class="Error404">Launch not found</div>';return`\n        <div class="Characters-inner">\n            <article class="Character-card">\n                <img src="${e.links.patch.small}" alt="${e.name}">\n                <h2>${e.name}</h2>\n            </article>\n\n            <article class="Characters-card">\n                <h3>Failures: <span>${e.failures?e.failures.length:"None"}</span></h3>\n                <h3>Details: <span>${e.details||"No details available"}</span></h3>\n                <h3>Flight number: <span>${e.flight_number||"N/A"}</span></h3>\n                <h3>Date: <span>${e.date_utc||"N/A"}</span></h3>\n            </article>\n        </div> \n    `}};var d=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await t();let a=s(),r=await o(a),i=l[r]?l[r]:c;e.innerHTML=await i()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);