"use strict";function handlePrimary(a){var c,d,b=Math.min,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,f=a.currentTarget;if(!f.classList.contains("disabled")){var g=f.parentElement,h=Array.prototype.indexOf.call(g.children,f);socket&&!g.dataset.userId&&socket.send(JSON.stringify({type:"user_primary",item:h,offset:e}));var i=$(".nobody",f),j=+(null!==(c=f.dataset.total)&&void 0!==c?c:1)+!!i,k=j+1,l=+(null!==(d=f.dataset.level)&&void 0!==d?d:0);(0===l||$(".icon",f).classList.contains("opaque"))&&(l=(l+(k+e)%k)%k),f.dataset.level=l,i&&l===j&&i.classList.add("opaque");var m=b(l,j-!!i),n=f.dataset.group,o=n?$$("[data-group=\"".concat(n,"\"]"),f.parent):[f];o.forEach(function(a){var b,c,d;a.dataset.level=l;var e=$(".icon",a),g=$(".number",a),h=$(".nobody",a);switch(e=f===a?e:null,1<m&&(null===g||void 0===g?void 0:g.setAttribute("src","img/numbers/".concat(m,".png"))),l){case 0:null===(b=e)||void 0===b?void 0:b.classList.remove("opaque"),null===g||void 0===g?void 0:g.classList.remove("opaque"),null===h||void 0===h?void 0:h.classList.remove("opaque");break;case 1:null===(c=e)||void 0===c?void 0:c.classList.add("opaque"),null===g||void 0===g?void 0:g.classList.remove("opaque");break;default:null===(d=e)||void 0===d?void 0:d.classList.add("opaque"),null===g||void 0===g?void 0:g.classList.add("opaque");}})}}function handleSecondary(a){var b,c=a.currentTarget;if(!c.classList.contains("disabled")){var d=$(".secondary",c);if(d){var e=c.parentElement,f=Array.prototype.indexOf.call(e.children,c);socket&&!e.dataset.userId&&socket.send(JSON.stringify({type:"user_secondary",item:f}));var g=d.dataset.files;if(!g)return d.classList.toggle("opaque");g=JSON.parse(d.dataset.files);var h=+(null!==(b=d.dataset.index)&&void 0!==b?b:0)+1;0==h%(g.length+1)?h=0:d.setAttribute("src","img/secondary/".concat(g[h-1],".png")),2>h&&d.classList.toggle("opaque"),d.dataset.index=h}}}function handleDisable(a){var b=a.currentTarget,c=b.parentElement,d=Array.prototype.indexOf.call(c.children,b);socket&&!c.dataset.userId&&socket.send(JSON.stringify({type:"user_secondary",item:d})),b.classList.toggle("disabled")}$$(".grid > div").forEach(function(a){a.onmousedown=function(a){switch(a.button){case 0:handlePrimary(a);break;case 2:handleSecondary(a);break;case 1:handleDisable(a);}},a.oncontextmenu=function(a){return a.preventDefault()},a.onwheel=function(a){if(scrollElem.checked){a.preventDefault();var b=0>a.deltaY?1:-1;handlePrimary(a,b)}}}),document.body.onmousedown=function(a){if(1===a.button)return!1};

//# sourceMappingURL=main.js.map