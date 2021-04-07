define(["require","exports","OK/EventBus"],(function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var i=this;this.onHide=function(){i.el.classList.add("__hide")},this.onShow=function(){i.el.classList.remove("__hide")},this.changeVisibility=function(t){t.hide?i.onHide():i.onShow()},this.loading=function(t){var e,n,a,o,l;t.loading?(null===(e=i.buttonSearch)||void 0===e||e.classList.add("invisible"),null===(n=i.loaderIcon)||void 0===n||n.classList.remove("invisible")):(null===(a=i.buttonSearch)||void 0===a||a.classList.remove("invisible"),null===(o=i.loaderIcon)||void 0===o||o.classList.add("invisible"),null===(l=i.inputSearch)||void 0===l||l.removeEventListener("blur",i.skipLoading))},this.skipLoading=function(){var t;i.visibilityToolbarNavEventBus.emit({hide:!1},null),i.loadingReactToolbarSearchEventBus.emit({loading:!1},null),null===(t=i.inputSearch)||void 0===t||t.removeEventListener("blur",i.skipLoading)}};n.prototype.activate=function(i){var t;this.el=i,this.visibilityToolbarNavEventBus=e.create({prefix:"toolbarManager",name:"visibilityToolbarNavigation"}),this.loadingReactToolbarSearchEventBus=e.create({prefix:"toolbarManager",name:"indicateLoadingReactToolbarSearch"}),this.visibilityToolbarNavEventBus.on(this.changeVisibility,this),this.loadingReactToolbarSearchEventBus.on(this.loading,this),this.buttonSearch=i.getElementsByClassName("js-toolbar-search-btn")[0],this.loaderIcon=i.getElementsByClassName("toolbar_search__loading")[0],this.inputSearch=i.querySelector('input[name="st.query"]'),null===(t=this.inputSearch)||void 0===t||t.addEventListener("blur",this.skipLoading)},n.prototype.deactivate=function(){this.visibilityToolbarNavEventBus.off(this.changeVisibility),this.visibilityToolbarNavEventBus=null,this.loadingReactToolbarSearchEventBus.off(this.loading),this.loadingReactToolbarSearchEventBus=null,this.buttonSearch=null,this.inputSearch=null,this.loaderIcon=null,this.el=null,OK.util.clean(this)},t.default=n}));