(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{10:function(e,n,c){},11:function(e,n,c){},12:function(e,n,c){"use strict";c.r(n);var r=c(0),a=c(1),s=c.n(a),t=c(4),m=c.n(t),o=(c(10),c(2));c(11);var p=function(e){return Object(r.jsxs)("div",{className:"Header",children:[Object(r.jsx)("h1",{children:"Memory Card Game"}),Object(r.jsxs)("div",{className:"Score",children:["Score: ",e.score]}),Object(r.jsxs)("div",{className:"Score",children:["High Score: ",e.highscore]})]})};var i=function(e){return Object(r.jsxs)("div",{className:"Card",onClick:e.onClick,children:[Object(r.jsx)("img",{src:e.src,alt:""}),Object(r.jsx)("p",{children:e.name})]})},g=[{name:"apple",src:"1f34e.png"},{name:"grapes",src:"1f347.png"},{name:"mango",src:"1f96d.png"},{name:"banana",src:"1f34c.png"},{name:"melon",src:"1f348.png"},{name:"watermelon",src:"1f349.png"},{name:"orange",src:"1f34a.png"},{name:"lemon",src:"1f34b.png"},{name:"pineapple",src:"1f34d.png"},{name:"pear",src:"1f350.png"},{name:"peach",src:"1f351.png"},{name:"cherries",src:"1f352.png"},{name:"strawberry",src:"1f353.png"},{name:"blueberries",src:"1fad0.png"},{name:"kiwi",src:"1f95d.png"},{name:"tomato",src:"1f345.png"},{name:"olive",src:"1fad2.png"},{name:"coconut",src:"1f965.png"},{name:"avocado",src:"1f951.png"},{name:"eggplant",src:"1f346.png"},{name:"potato",src:"1f954.png"},{name:"carrot",src:"1f955.png"},{name:"corn",src:"1f33d.png"},{name:"hot pepper",src:"1f336.png"},{name:"bell pepper",src:"1fad1.png"},{name:"lettuce",src:"1f96c.png"},{name:"broccoli",src:"1f966.png"},{name:"garlic",src:"1f9c4.png"},{name:"onion",src:"1f9c5.png"},{name:"cucumber",src:"1f952.png"},{name:"peanut",src:"1f95c.png"},{name:"chestnut",src:"1f330.png"}],j="https://twemoji.maxcdn.com/v/latest/72x72/",f=[];var l=function(){var e=Object(a.useState)(g.slice(0,5)),n=Object(o.a)(e,2),c=n[0],s=n[1],t=Object(a.useState)(0),m=Object(o.a)(t,2),l=m[0],d=m[1],b=Object(a.useState)(0),u=Object(o.a)(b,2),h=u[0],O=u[1];function x(e){var n=e.target.textContent;f.includes(n)?(d(0),f=[]):(g.sort((function(){return.5-Math.random()})),s(g.slice(0,5)),d(l+1),h<=l&&O(l+1),f.push(n))}return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(p,{score:l,highscore:h}),Object(r.jsxs)("div",{id:"cardContainer",children:[Object(r.jsx)(i,{name:c[0].name,src:j+c[0].src,onClick:x}),Object(r.jsx)(i,{name:c[1].name,src:j+c[1].src,onClick:x}),Object(r.jsx)(i,{name:c[2].name,src:j+c[2].src,onClick:x}),Object(r.jsx)(i,{name:c[3].name,src:j+c[3].src,onClick:x}),Object(r.jsx)(i,{name:c[4].name,src:j+c[4].src,onClick:x})]})]})};m.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4c7635ee.chunk.js.map