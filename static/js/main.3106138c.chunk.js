(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[0],{121:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),o=(t(81),t(21)),i=t(41),m=t(165),s=t(125),u=t(168),d=t(160),p=t(169),E=t(170),f=t(167),h=t(162),b=t(172),g=t(163),v=t(164),y=t(61),x=t.n(y),j=t(42),w=t.n(j),O=t(166),N=t(43),k=t(158),S=t(171),C=t(12),M=t(18),B=Object(k.a)((function(e){return Object(S.a)({root:{display:"flex"},drawer:Object(i.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),menuButton:Object(i.a)({width:"3.5em",height:"3.5em",marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),buttonMenu:Object(i.a)({},e.breakpoints.down("xs"),{display:"none"}),menuicon:{width:"3.5em",height:"3.5em"},appBar:{width:"100vw",boxSizing:"border-box"},myBar:{backgroundColor:"#282c34",height:"120px"},title:{fontWeight:"bold"},listText:{fontSize:"40px"},toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}})}));var L=function(e){var a=e.window,t=B(),n=Object(C.a)(),r=l.a.useState(!1),c=Object(o.a)(r,2),i=c[0],y=c[1],j=function(){y(!i)},k=l.a.createElement("div",null,l.a.createElement("div",{className:t.toolbar}),l.a.createElement(d.a,null),l.a.createElement(h.a,null,l.a.createElement(M.Link,{activeClass:"active",to:"slider",spy:!0,smooth:!0,offset:-130,duration:800},l.a.createElement(b.a,{button:!0},l.a.createElement(g.a,null,l.a.createElement(w.a,null)),l.a.createElement(v.a,{primary:"Slider"}))),l.a.createElement(M.Link,{activeClass:"active",to:"modal",spy:!0,smooth:!0,offset:-130,duration:800},l.a.createElement(b.a,{button:!0},l.a.createElement(g.a,null,l.a.createElement(w.a,null)),l.a.createElement(v.a,{primary:"Modal"}))),l.a.createElement(M.Link,{activeClass:"active",to:"accordion",spy:!0,smooth:!0,offset:-130,duration:800},l.a.createElement(b.a,{button:!0},l.a.createElement(g.a,null,l.a.createElement(w.a,null)),l.a.createElement(v.a,{primary:"Accordion"})))),l.a.createElement(d.a,null)),S=void 0!==a?function(){return a().document.body}:void 0;return l.a.createElement("div",{className:t.root},l.a.createElement(m.a,{position:"fixed",className:t.appBar},l.a.createElement(O.a,{className:t.myBar},l.a.createElement(f.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:j,className:t.menuButton},l.a.createElement(x.a,{className:t.menuicon})),l.a.createElement(N.a,{variant:"h2",noWrap:!0,className:t.title},"My Task"),l.a.createElement(u.a,{variant:"text",edge:"end",color:"inherit",size:"large",className:t.buttonMenu,"aria-label":"text primary button group"},l.a.createElement(s.a,null," ",l.a.createElement(M.Link,{activeClass:"active",to:"slider",spy:!0,smooth:!0,offset:-130,duration:800},"Slider")," "),l.a.createElement(s.a,null,l.a.createElement(M.Link,{activeClass:"active",to:"modal",spy:!0,smooth:!0,offset:-130,duration:800},"Modal")),l.a.createElement(s.a,null,l.a.createElement(M.Link,{activeClass:"active",to:"accordion",spy:!0,smooth:!0,offset:-130,duration:800},"Accordion"))))),l.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},l.a.createElement(E.a,{smUp:!0,implementation:"css"},l.a.createElement(p.a,{container:S,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:i,onClose:j,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},k))))},q=function(e){return l.a.createElement("footer",{className:"App-footer"},l.a.createElement("p",null,e.text))},z=t(11),A=(t(93),t(62));function K(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({}),i=Object(o.a)(c,2),m=i[0],s=i[1];return l.a.createElement(z.a,{allowZeroExpanded:!0,className:"accordionContainer",onChange:function(e){"no1"===e[0]?function(){var e=new Date,a=e.getFullYear(),t=e.getMonth()+1,n=e.getDate(),l=["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"][e.getDay()];s({year:a,month:t,date:n,day:l})}():"no2"===e[0]?function(){var e=Math.floor(5*Math.random());r(["\u5927\u5409","\u4e2d\u5409","\u5409","\u51f6","\u5927\u51f6"][e])}():console.log("no3")}},l.a.createElement(z.b,{uuid:"no1"},l.a.createElement(z.d,null,l.a.createElement(z.c,null,"\u4eca\u65e5\u306e\u65e5\u4ed8")),l.a.createElement(z.e,null,l.a.createElement("p",null,"\u4eca\u65e5\u306f",m.year,"\u5e74",m.month,"\u6708",m.date,"\u65e5",m.day,"\u66dc\u65e5\u3067\u3059\u3002"))),l.a.createElement(z.b,{uuid:"no2"},l.a.createElement(z.d,null,l.a.createElement(z.c,null,"\u4eca\u65e5\u306e\u904b\u52e2")),l.a.createElement(z.e,{className:"accordion__panel "+("\u5927\u5409"===t?"luckystyle":"")},l.a.createElement("p",null,t))),l.a.createElement(z.b,{uuid:"no3"},l.a.createElement(z.d,null,l.a.createElement(z.c,null,"GoogleMap")),l.a.createElement(z.e,null,l.a.createElement("p",null,l.a.createElement(A.a,{url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.010996507231!2d139.7116861151059!3d35.72594808018392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6b8b0de7dd%3A0xd184e022fc8bf0e6!2z5qCq5byP5Lya56S-44OV44Kh44Km44Oz44OH44O844K344On44Oz44OV44Kn44Oq44KrVEE!5e0!3m2!1sja!2sjp!4v1602127130137!5m2!1sja!2sjp",width:"100%",height:"400",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"})))))}var P=t(63),T=t.n(P),_=(t(109),t(110),t(64)),R=t.n(_),W=t(65),D=t.n(W),V=t(66),G=t.n(V),J=t(67),F=t.n(J),H=function(){return l.a.createElement(T.a,Object.assign({className:"slider"},{dots:!0,fade:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3}),l.a.createElement("div",null,l.a.createElement("img",{src:R.a,alt:""})),l.a.createElement("div",null,l.a.createElement("img",{src:D.a,alt:""})),l.a.createElement("div",null,l.a.createElement("img",{src:G.a,alt:""})),l.a.createElement("div",null,l.a.createElement("img",{src:F.a,alt:""})))},I=t(68),U=(t(120),[{url:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",id:0,alt:"cat1"},{url:"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",id:1,alt:"cat2"},{url:"https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg",id:2,alt:"cat3"},{url:"https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",id:3,alt:"cat4"}]),Y=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(o.a)(c,2),m=i[0],s=i[1];return l.a.createElement("div",{className:"lightbox"},l.a.createElement("ul",{style:{display:"flex",listStyle:"none"}},U.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("img",{style:{maxWidth:"100%"},src:e.url,alt:e.alt,onClick:function(){r(a),s(!0)}}))}))),m&&l.a.createElement(I.a,{mainSrc:U[t].url,nextSrc:U[(t+1)%U.length].url,prevSrc:U[(t+U.length-1)%U.length].url,onCloseRequest:function(){return s(!1)},onMovePrevRequest:function(){return r((t+U.length-1)%U.length)},onMoveNextRequest:function(){return r((t+U.length+1)%U.length)}}))},Z=(t(121),function(){return l.a.createElement("div",{className:"scroll scroll-up"},l.a.createElement("a",{href:"#wrap"},l.a.createElement("i",{onClick:function(){return M.animateScroll.scrollToTop()},className:"fa fa-arrow-up","aria-hidden":"true"})))});function Q(){return l.a.createElement("div",{className:"App"},l.a.createElement(L,null),l.a.createElement("div",{className:"inner-container"},l.a.createElement("div",{className:"layout"},l.a.createElement("h2",{name:"slider"},"\u25a0Slider"),l.a.createElement(H,null)),l.a.createElement("div",{className:"layout"},l.a.createElement("h2",{name:"modal"},"\u25a0Modal Window"),l.a.createElement(Y,null)),l.a.createElement("div",{className:"layout"},l.a.createElement("h2",{name:"accordion"},"\u25a0Accordion Panel"),l.a.createElement(K,null))),l.a.createElement(Z,null),l.a.createElement(q,{text:"KentoNakano"}))}var X=document.getElementById("root");c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null)),X)},64:function(e,a,t){e.exports=t.p+"static/media/01.2950cd12.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/02.23a6ae94.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/03.bd898375.jpg"},67:function(e,a,t){e.exports=t.p+"static/media/04.f797e294.jpg"},76:function(e,a,t){e.exports=t(122)},81:function(e,a,t){},93:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.3106138c.chunk.js.map