define(["OK/react-loader","OK/EventBus"],(function(e,t){"use strict";var a,n=!1,i=!1,r=["focus","mousedown","keydown","click"],o=new e,c=t.create({prefix:"toolbarManager",name:"visibilityToolbarNavigation"}),l=t.create({prefix:"toolbarManager",name:"indicateLoadingReactToolbarSearch"});return{activate:function(e){function t(u){if(!n&&(n=!0,o.activate(e),r.forEach((function(a){e.removeEventListener(a,t)})),i)){var s=u&&u.target?u.target:void 0;a&&!a.contains(s)&&(c.emit({hide:!0},null),l.emit({loading:!0},null))}}if("true"===e.getAttribute("data-lazy-loading")){i=!0,r.forEach((function(a){e.addEventListener(a,t)}));var u=document.activeElement.getAttribute("class");a=e.querySelector(".js-toolbar-search-btn"),e.getElementsByClassName(u).length&&t()}else t()},deactivate:function(){n&&o.deactivate(),n=!1,i=!1}}}));