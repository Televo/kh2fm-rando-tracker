"use strict";function handlePrimary(a){var c,d,b=Math.min,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,f=a.currentTarget;if(!f.classList.contains("disabled")){var g=f.querySelector(".nobody"),h=+(null!==(c=f.dataset.total)&&void 0!==c?c:1)+!!g,i=h+1,j=+(null!==(d=f.dataset.level)&&void 0!==d?d:0);(0===j||f.querySelector(".icon").classList.contains("opaque"))&&(j=(j+(i+e)%i)%i),f.dataset.level=j,g&&j===h&&g.classList.add("opaque");var k=b(j,h-!!g),l=f.dataset.group,m=l?document.querySelectorAll("[data-group=\"".concat(l,"\"]")):[f];m.forEach(function(a){var b,c,d;a.dataset.level=j;var e=a.querySelector(".icon"),g=a.querySelector(".number"),h=a.querySelector(".nobody");switch(e=f===a?e:null,1<k&&(null===g||void 0===g?void 0:g.setAttribute("src","img/numbers/".concat(k,".png"))),j){case 0:null===(b=e)||void 0===b?void 0:b.classList.remove("opaque"),null===g||void 0===g?void 0:g.classList.remove("opaque"),null===h||void 0===h?void 0:h.classList.remove("opaque");break;case 1:null===(c=e)||void 0===c?void 0:c.classList.add("opaque"),null===g||void 0===g?void 0:g.classList.remove("opaque");break;default:null===(d=e)||void 0===d?void 0:d.classList.add("opaque"),null===g||void 0===g?void 0:g.classList.add("opaque");}})}}function handleSecondary(a){var b,c=a.currentTarget;if(!c.classList.contains("disabled")){var d=c.querySelector(".secondary");if(d){var e=d.dataset.files;if(!e)return d.classList.toggle("opaque");e=JSON.parse(d.dataset.files);var f=+(null!==(b=d.dataset.index)&&void 0!==b?b:0)+1;0==f%(e.length+1)?f=0:d.setAttribute("src","img/secondary/".concat(e[f-1],".png")),2>f&&d.classList.toggle("opaque"),d.dataset.index=f}}}function handleDisable(a){a.currentTarget.classList.toggle("disabled")}document.querySelectorAll(".grid > div").forEach(function(a){a.onmousedown=function(a){switch(a.button){case 0:handlePrimary(a);break;case 2:handleSecondary(a);break;case 1:handleDisable(a);}},a.oncontextmenu=function(a){return a.preventDefault()},a.onwheel=function(a){if(scrollElem.checked){a.preventDefault();var b=0>a.deltaY?1:-1;handlePrimary(a,b)}}}),document.body.onmousedown=function(a){if(1===a.button)return!1};
