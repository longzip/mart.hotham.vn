if(!self.define){let e,n={};const i=(i,c)=>(i=new URL(i+".js",c).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let l={};const r=e=>i(e,s),a={module:{uri:s},exports:l,require:r};n[s]=Promise.all(c.map((e=>a[e]||r(e)))).then((e=>(o(...e),l)))}}define(["./workbox-49d4ab5b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"amycos"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"CNAME",revision:"1082d47a500990cddf8ce313d40fe262"},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.e92fdd62.css",revision:null},{url:"favicon.ico",revision:"57ae302fe02eae12e344a9e21c56cb1d"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d130207c4fec5aa1e7013746452218ad"},{url:"icons/apple-icon-152x152.png",revision:"c6d78ce231e836f3a398b349e90f6923"},{url:"icons/apple-icon-167x167.png",revision:"a3b0622bd2d7e35e0f8a2cd56823b972"},{url:"icons/apple-icon-180x180.png",revision:"851bd6c50312fbdbcc0945cfecad4657"},{url:"icons/apple-launch-1080x2340.png",revision:"b8a05fd907de98a31b1e2702366cf6e7"},{url:"icons/apple-launch-1125x2436.png",revision:"33d1bd59ee653416072366d02a4abc65"},{url:"icons/apple-launch-1170x2532.png",revision:"7d1fd67b074d19901ffec8a8e6468b05"},{url:"icons/apple-launch-1179x2556.png",revision:"0d840902ec7ce0bf45fe12c199ab48d2"},{url:"icons/apple-launch-1242x2208.png",revision:"2031864159a94169586bae44f1639fb3"},{url:"icons/apple-launch-1242x2688.png",revision:"adb370f01a073988fad3e89daa7c2b35"},{url:"icons/apple-launch-1284x2778.png",revision:"a692064ccc4c7ccaacc06bd251f2ee91"},{url:"icons/apple-launch-1290x2796.png",revision:"84a0df4f1071db2365a20fc06915b189"},{url:"icons/apple-launch-1536x2048.png",revision:"e27d185790cb2b5300ed716787e21d87"},{url:"icons/apple-launch-1620x2160.png",revision:"4e355d20575f364b904ca67cea9c2ec2"},{url:"icons/apple-launch-1668x2224.png",revision:"7cf246ba1c0e18e044e9b4e5dceae21d"},{url:"icons/apple-launch-1668x2388.png",revision:"6b35f373e71bd8d5ca6f18f9fdf76822"},{url:"icons/apple-launch-2048x2732.png",revision:"b2e0f3aa76e20c0bbecd48f7f213dd18"},{url:"icons/apple-launch-750x1334.png",revision:"3abb528b83ba574a7435c7a04900a2a4"},{url:"icons/apple-launch-828x1792.png",revision:"e8ad55fa9c0f0928404278ad42bf0183"},{url:"icons/favicon-128x128.png",revision:"1577b134c4962f6ba4f7ad90e603898c"},{url:"icons/favicon-16x16.png",revision:"914170aff26ac39b16e44718699cf6f4"},{url:"icons/favicon-32x32.png",revision:"16036ee008808cee41393c691e298d37"},{url:"icons/favicon-96x96.png",revision:"8ee17067d3d7e474ab47ec8c7ea32eaf"},{url:"icons/icon-128x128.png",revision:"1577b134c4962f6ba4f7ad90e603898c"},{url:"icons/icon-192x192.png",revision:"3428b8b1089491d9beb39e5221b30067"},{url:"icons/icon-256x256.png",revision:"d36566115c379ffa6a946158417d1e8c"},{url:"icons/icon-384x384.png",revision:"530c3f8f75afb637a5b4828562d093e5"},{url:"icons/icon-512x512.png",revision:"309f0da172b049982543c985ac127aee"},{url:"icons/ms-icon-144x144.png",revision:"a2cf51e6a0b8214512531ec9f5b2d8b1"},{url:"icons/safari-pinned-tab.svg",revision:"4fd26085242d6df0a6715d495a542b1e"},{url:"index.html",revision:"6e22497e3e0fb83a74d21eaca245a854"},{url:"js/134.bd4261ca.js",revision:null},{url:"js/337.7e596810.js",revision:null},{url:"js/968.2fbc55aa.js",revision:null},{url:"js/app.a07f1ebf.js",revision:null},{url:"js/vendor.cc58746b.js",revision:null},{url:"manifest.json",revision:"a06e58cc59dac2cc900774f651d01b1a"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
