define((function(){"use strict";var q="data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",n=OK.cnst.staticUrl+"res/default/sound/videochat/ring.mp3",t=OK.cnst.staticUrl+"res/default/sound/videochat/olga.mp3",c=OK.cnst.staticUrl+"res/default/sound/videochat/busy.mp3",e=OK.cnst.staticUrl+"res/default/sound/videochat/connecting.mp3",o=OK.cnst.staticUrl+"res/default/sound/videochat/beep.mp3",a=OK.cnst.staticUrl+"res/default/sound/videochat/drop.mp3",i=null,u=!0,l=null;function r(q,n,t){if(s(),u){Array.isArray(q)||(q=[q]),t=t||0;var c=0,e=q.length;!i.src||i.readyState>i.HAVE_FUTURE_DATA?o():i.oncanplay=o}function o(){i.onended=function(){c=(c+1)%e,n||c?l=setTimeout((function(){l=null,i.src=q[c],i.play()}),t):s()},i.oncanplay=null,i.src=q[c],i.play()}}function s(){i&&i.src&&(i.onended=null,i.oncanplay=null,i.pause(),i.removeAttribute("src")),l&&(clearTimeout(l),l=null)}return(function(){try{(i=new Audio).preload="auto",i.autoplay=!1,i.loop=!1,i.src=q;var n=i.play();if(!n)return void(u=!1);n.catch((function(q){"NotAllowedError"===q.name&&(window.addEventListener("click",(function q(){u=!0,window.removeEventListener("click",q)})),u=!1)}))}catch(q){u=!1}}(),{incoming:function(q){r(q||[n,t],!0)},busy:function(){r(c)},connecting:function(){r(e,!0,2e3)},calling:function(q){r(q||o,!0)},drop:function(){r(a)},stop:s})}));