(this.webpackJsonptypinggame=this.webpackJsonptypinggame||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a(4),r=a.n(s),u=(a(10),a(2)),i=(a(11),function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(0),o=Object(u.a)(i,2),j=o[0],l=o[1],b=Object(n.useState)(0),d=Object(u.a)(b,2),m=d[0],O=d[1],h=Object(n.useState)(0),f=Object(u.a)(h,2),_=f[0],g=f[1],p=Object(n.useState)(!0),v=Object(u.a)(p,2),x=v[0],N=v[1],S=Object(n.useState)("start"),w=Object(u.a)(S,2),y=w[0],C=w[1],E=Object(n.useState)(!1),k=Object(u.a)(E,2),B=k[0],M=k[1],I=Object(n.useState)(!1),J=Object(u.a)(I,2),W=J[0],A=J[1],F=Object(n.useState)(!1),R=Object(u.a)(F,2),T=R[0],Y=R[1],q=Object(n.useState)(["objective","browser","towel","operator","democracy","effect","route","experience","respect","foundation","machine","feather","javascript","reacthook","bonus"]),z=Object(u.a)(q,1)[0];!function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){!0===B&&(r(s-1),1===s&&(N(!0),M(!1),C("restart"),g(m),O(0),A(!1),Y(!1)))}),1e3);return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"addWord",children:[Object(c.jsx)("input",{className:"word__input",disabled:W}),Object(c.jsx)("button",{className:"word__button",disabled:T,onClick:function(){return z.push(document.getElementsByClassName("word__input")[0].value),void(document.getElementsByClassName("word__input")[0].value="")},children:"Add Words"})]}),Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)("p",{className:"game__timertitle",children:"Your Time"}),Object(c.jsx)("h1",{className:"game__timer",children:s}),Object(c.jsx)("h3",{className:"game__word no-drag",children:z[j]}),Object(c.jsx)("input",{className:"game__input",disabled:x,onChange:function(e){return function(e){e.target.value===z[j]&&(O(m+1),l(Math.floor(Math.random()*z.length)),r(s+3),e.target.value="")}(e)}}),Object(c.jsxs)("p",{className:"game__score",children:["Current Score : ",Object(c.jsx)("span",{children:m})]}),Object(c.jsxs)("p",{className:"game__final_score",children:["Final Score : ",Object(c.jsx)("span",{children:_})]}),Object(c.jsx)("button",{className:"game__button",disabled:B,onClick:function(){return Y(!0),A(!0),M(!0),C("starting ..."),N(!1),r(10),l(Math.floor(Math.random()*z.length)),void(document.getElementsByClassName("game__input")[0].value="")},children:y})]})]})});r.a.render(Object(c.jsx)(i,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1405b8b5.chunk.js.map