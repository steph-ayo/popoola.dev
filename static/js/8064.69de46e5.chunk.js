"use strict";(self.webpackChunktesting=self.webpackChunktesting||[]).push([[8064],{8064:(t,e,n)=>{n.d(e,{PolygonDrawer:()=>a});var o=n(7113);class a extends o.L{getCenter(t,e){return{x:-e/(t.sides/3.5),y:-e/.76}}getSidesData(t,e){const n=t.sides;return{count:{denominator:1,numerator:n},length:2.66*e/(n/3)}}}},7113:(t,e,n)=>{n.d(e,{L:()=>r});var o=n(4409);const a=0,s=0;class r{draw(t){const{particle:e,radius:n}=t;!function(t,e,n){const{context:r}=t,i=n.count.numerator*n.count.denominator,u=n.count.numerator/n.count.denominator,c=180*(u-2)/u,d=Math.PI-(0,o.pu)(c);if(r){r.beginPath(),r.translate(e.x,e.y),r.moveTo(a,s);for(let t=0;t<i;t++)r.lineTo(n.length,s),r.translate(n.length,s),r.rotate(d)}}(t,this.getCenter(e,n),this.getSidesData(e,n))}getSidesCount(t){var e;const n=t.shapeData;return Math.round((0,o.VG)(null!==(e=null===n||void 0===n?void 0:n.sides)&&void 0!==e?e:5))}}}}]);
//# sourceMappingURL=8064.69de46e5.chunk.js.map