var t=document.querySelector(".wall"),e=document.querySelector(".spider");document.addEventListener("click",function(i){if(i.target.classList.contains("wall")){var n=t.getBoundingClientRect(),c=e.getBoundingClientRect(),d=parseInt(window.getComputedStyle(t).borderWidth),h=i.clientY-n.y-c.height/2-d,l=i.clientX-n.x-c.width/2-d;h<0&&(h=0),h>n.height-c.height-2*d&&(h=n.height-c.height-2*d),l<0&&(l=0),l>n.width-c.width-2*d&&(l=n.width-c.width-2*d),e.style.top="".concat(h,"px"),e.style.left="".concat(l,"px")}});
//# sourceMappingURL=index.e22cf608.js.map