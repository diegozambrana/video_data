define(["require","exports","OK/AbstractNativeHook","OK/utils/dom","OK/StickyBlock","OK/utils/debounce","OK/Smokescreen","OK/FriendStream"],(function(e,t,i,o,s,n,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FriendsStream=void 0;var c=function(e){function t(){var t=this;e.apply(this,arguments),this.forceCollapsed=!1,this.doModernResize=function(){t.checkCollapsedView();var e=document.getElementsByClassName("online-fr_i"),o=document.getElementById("hook_Block_FrOln4thCol"),s=document.getElementById("mainContent");window.OK.isStateRedesign()&&(s=document.querySelector(".layout-container"));var n,r=document.getElementById("footer");if(window.OK.isStateRedesign()){var l=s.clientHeight+r.clientHeight,c=document.getElementById("hook_Block_AdditionalColumn"),h=c.querySelector("#hook_Block_ProLinkPortlet"),a=c.querySelector("#hook_Block_FriendshipPYMKReactPortlet"),d=h?h.clientHeight:0,k=a?a.clientHeight:0;n=t.originalList.clientHeight+d+k>l?l-d-k-80:t.originalList.clientHeight}else if(OK.util.is4ColumnActive()){var g=s.clientHeight+r.clientHeight,u=o?o.clientHeight:0;n=t.originalList.clientHeight+u>g?g-u-80:t.originalList.clientHeight}else n=i.getViewportHeightWithoutToolbar()-60;for(var y=0,p=0;y<n&&p<e.length;)y+=e[p].clientHeight,p++;y&&(y>n&&(y-=e[p-1].clientHeight),t.list.style.maxHeight=y+"px"),t.stickyBlock.onResize()}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.activate=function(){var e=this;if(this.forceCollapsed="1"===this.hookEl.getAttribute("data-force-collapsed"),this.setLogAttribute(),this.sinkEvents(["bannerState","toggle4Col","resize","scroll"],this.gwtEventsWrapper,this),this.hookEl){this.stickyBlock=s.activate(this.hookEl),this.stickyFooter=o.firstByClass(this.hookEl,"online-fr_footer"),this.list=document.getElementById("online-fr_cards"),this.originalList=document.getElementById("FriendStreamContent"),void 0!==window.OK.showOnlineUsers&&(window.OK.showOnlineUsers.doResize=this.doModernResize);var t=r.getById("hook_Block_FrOln4thCol");t&&"function"==typeof MutationObserver&&(this.bannerObserver=new MutationObserver(n(200,(function(){e.stickyBlock.init(!1),e.doModernResize(),e.renderSticky()}))),this.bannerObserver.observe(t,{attributes:!0,subtree:!0})),this.hookEl.addEventListener("animationend",OK.showOnlineUsers.doResize),this.hookEl.classList.remove("__loading"),this.doModernResize()}},t.prototype.deactivate=function(){this.bannerObserver&&this.bannerObserver.disconnect(),this.hookEl.removeEventListener("animationend",OK.showOnlineUsers.doResize),s.deactivate(this.hookEl),window.OK.showOnlineUsers&&window.OK.showOnlineUsers.doResize===this.doModernResize&&(window.OK.showOnlineUsers.doResize=OK.fn.empty)},t.prototype.gwtEventsWrapper=function(e){if(this.stickyBlock)switch(e){case"bannerState":this.stickyBlock.init(!1),this.doModernResize(),this.renderSticky();break;case"toggle4Col":this.stickyBlock.init(!1),this.doModernResize(),this.renderSticky(),this.setLogAttribute(),l.toggleState();break;case"resize":this.doModernResize(),this.renderSticky();break;case"scroll":this.renderSticky()}},t.prototype.renderSticky=function(){if(!this.stickyFooter)return!1;if(OK.util.is4ColumnActive()){var e=this.stickyBlock.stickyContainer.getBoundingClientRect();e.height>i.getViewportHeightWithoutToolbar()?this.stickyFooter.classList.toggle("__sticky",window.innerHeight-e.top>120):this.stickyFooter.classList.remove("__sticky")}else this.stickyFooter.classList.remove("__sticky")},t.prototype.checkCollapsedView=function(){var e=window.innerWidth>=1274;this.hookEl.classList.toggle("__expanded",e&&!this.forceCollapsed||window.OK.isStateRedesign())},t.prototype.setLogAttribute=function(){var e={collapsed:!OK.util.is4ColumnActive()||this.forceCollapsed,target:"friendStream"};this.forceCollapsed&&(e.force=!0),this.hookEl.setAttribute("data-l",JSON.stringify(e))},t}(i.AbstractNativeHook);t.FriendsStream=c}));