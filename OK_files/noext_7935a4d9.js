/** @license
 * RequireJS plugin for loading files without adding the JS extension, useful for
 * JSONP services and any other kind of resource that already contain a file
 * extension or that shouldn't have one (like dynamic scripts).
 * Author: Miller Medeiros
 * Version: 0.3.1 (2011/12/07)
 * Released under the MIT license
 */
define((function(){return{load:function(n,o,t,e){o([o.toUrl(n)],(function(n){t(n)}))},normalize:function(n,o){return(n+=n.indexOf("?")<0?"?":"&")+"noext=1"}}}));