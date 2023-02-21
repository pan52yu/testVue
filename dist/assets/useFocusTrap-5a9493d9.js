import{j as O,y as pe,z as he,A as ge,a as ye,r as me,b as Y,c as z,f as N,e as we,w as Te,i as Fe,t as W,g as Ne,B as Se,p as Ee,h as De,_ as Oe}from"./index-481c03ca.js";/*!
* tabbable 6.0.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var re=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],k=re.join(","),ne=typeof Element=="undefined",S=ne?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,I=!ne&&Element.prototype.getRootNode?function(r){return r.getRootNode()}:function(r){return r.ownerDocument},ie=function(e,t,a){var o=Array.prototype.slice.apply(e.querySelectorAll(k));return t&&S.call(e,k)&&o.unshift(e),o=o.filter(a),o},oe=function r(e,t,a){for(var o=[],s=Array.from(e);s.length;){var n=s.shift();if(n.tagName==="SLOT"){var l=n.assignedElements(),f=l.length?l:n.children,b=r(f,!0,a);a.flatten?o.push.apply(o,b):o.push({scopeParent:n,candidates:b})}else{var w=S.call(n,k);w&&a.filter(n)&&(t||!e.includes(n))&&o.push(n);var y=n.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(n),h=!a.shadowRootFilter||a.shadowRootFilter(n);if(y&&h){var T=r(y===!0?n.children:y.children,!0,a);a.flatten?o.push.apply(o,T):o.push({scopeParent:n,candidates:T})}else s.unshift.apply(s,n.children)}}return o},ue=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},Ce=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},se=function(e){return e.tagName==="INPUT"},_e=function(e){return se(e)&&e.type==="hidden"},Pe=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},Re=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},ke=function(e){if(!e.name)return!0;var t=e.form||I(e),a=function(l){return t.querySelectorAll('input[type="radio"][name="'+l+'"]')},o;if(typeof window!="undefined"&&typeof window.CSS!="undefined"&&typeof window.CSS.escape=="function")o=a(window.CSS.escape(e.name));else try{o=a(e.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var s=Re(o,e.form);return!s||s===e},Ie=function(e){return se(e)&&e.type==="radio"},Ae=function(e){return Ie(e)&&!ke(e)},xe=function(e){for(var t,a=I(e).host,o=!!((t=a)!==null&&t!==void 0&&t.ownerDocument.contains(a)||e.ownerDocument.contains(e));!o&&a;){var s;a=I(a).host,o=!!((s=a)!==null&&s!==void 0&&s.ownerDocument.contains(a))}return o},Z=function(e){var t=e.getBoundingClientRect(),a=t.width,o=t.height;return a===0&&o===0},Le=function(e,t){var a=t.displayCheck,o=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=S.call(e,"details>summary:first-of-type"),n=s?e.parentElement:e;if(S.call(n,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof o=="function"){for(var l=e;e;){var f=e.parentElement,b=I(e);if(f&&!f.shadowRoot&&o(f)===!0)return Z(e);e.assignedSlot?e=e.assignedSlot:!f&&b!==e.ownerDocument?e=b.host:e=f}e=l}if(xe(e))return!e.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return Z(e);return!1},Be=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var o=t.children.item(a);if(o.tagName==="LEGEND")return S.call(t,"fieldset[disabled] *")?!0:!o.contains(e)}return!0}t=t.parentElement}return!1},A=function(e,t){return!(t.disabled||_e(t)||Le(t,e)||Pe(t)||Be(t))},K=function(e,t){return!(Ae(t)||ue(t)<0||!A(e,t))},je=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Ke=function r(e){var t=[],a=[];return e.forEach(function(o,s){var n=!!o.scopeParent,l=n?o.scopeParent:o,f=ue(l,n),b=n?r(o.candidates):l;f===0?n?t.push.apply(t,b):t.push(l):a.push({documentOrder:s,tabIndex:f,item:o,isScope:n,content:b})}),a.sort(Ce).reduce(function(o,s){return s.isScope?o.push.apply(o,s.content):o.push(s.content),o},[]).concat(t)},Ve=function(e,t){t=t||{};var a;return t.getShadowRoot?a=oe([e],t.includeContainer,{filter:K.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:je}):a=ie(e,t.includeContainer,K.bind(null,t)),Ke(a)},Me=function(e,t){t=t||{};var a;return t.getShadowRoot?a=oe([e],t.includeContainer,{filter:A.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a=ie(e,t.includeContainer,A.bind(null,t)),a},P=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return S.call(e,k)===!1?!1:K(t,e)},Ue=re.concat("iframe").join(","),j=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return S.call(e,Ue)===!1?!1:A(t,e)};/*!
* focus-trap 7.2.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function X(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,a)}return t}function J(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?X(Object(t),!0).forEach(function(a){qe(r,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(t,a))})}return r}function qe(r,e,t){return e=He(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Ge(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var a=t.call(r,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function He(r){var e=Ge(r,"string");return typeof e=="symbol"?e:String(e)}var Q={activateTrap:function(e,t){if(e.length>0){var a=e[e.length-1];a!==t&&a.pause()}var o=e.indexOf(t);o===-1||e.splice(o,1),e.push(t)},deactivateTrap:function(e,t){var a=e.indexOf(t);a!==-1&&e.splice(a,1),e.length>0&&e[e.length-1].unpause()}},$e=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},Ye=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},C=function(e){return e.key==="Tab"||e.keyCode===9},ze=function(e){return C(e)&&!e.shiftKey},We=function(e){return C(e)&&e.shiftKey},ee=function(e){return setTimeout(e,0)},te=function(e,t){var a=-1;return e.every(function(o,s){return t(o)?(a=s,!1):!0}),a},D=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];return typeof e=="function"?e.apply(void 0,a):e},R=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Ze=[],Xe=function(e,t){var a=(t==null?void 0:t.document)||document,o=(t==null?void 0:t.trapStack)||Ze,s=J({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:ze,isKeyBackward:We},t),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},l,f=function(i,u,c){return i&&i[u]!==void 0?i[u]:s[c||u]},b=function(i){return n.containerGroups.findIndex(function(u){var c=u.container,d=u.tabbableNodes;return c.contains(i)||d.find(function(v){return v===i})})},w=function(i){var u=s[i];if(typeof u=="function"){for(var c=arguments.length,d=new Array(c>1?c-1:0),v=1;v<c;v++)d[v-1]=arguments[v];u=u.apply(void 0,d)}if(u===!0&&(u=void 0),!u){if(u===void 0||u===!1)return u;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var g=u;if(typeof u=="string"&&(g=a.querySelector(u),!g))throw new Error("`".concat(i,"` as selector refers to no known node"));return g},y=function(){var i=w("initialFocus");if(i===!1)return!1;if(i===void 0)if(b(a.activeElement)>=0)i=a.activeElement;else{var u=n.tabbableGroups[0],c=u&&u.firstTabbableNode;i=c||w("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},h=function(){if(n.containerGroups=n.containers.map(function(i){var u=Ve(i,s.tabbableOptions),c=Me(i,s.tabbableOptions);return{container:i,tabbableNodes:u,focusableNodes:c,firstTabbableNode:u.length>0?u[0]:null,lastTabbableNode:u.length>0?u[u.length-1]:null,nextTabbableNode:function(v){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,m=c.findIndex(function(F){return F===v});if(!(m<0))return g?c.slice(m+1).find(function(F){return P(F,s.tabbableOptions)}):c.slice(0,m).reverse().find(function(F){return P(F,s.tabbableOptions)})}}}),n.tabbableGroups=n.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!w("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},T=function p(i){if(i!==!1&&i!==a.activeElement){if(!i||!i.focus){p(y());return}i.focus({preventScroll:!!s.preventScroll}),n.mostRecentlyFocusedNode=i,$e(i)&&i.select()}},M=function(i){var u=w("setReturnFocus",i);return u||(u===!1?!1:i)},_=function(i){var u=R(i);if(!(b(u)>=0)){if(D(s.clickOutsideDeactivates,i)){l.deactivate({returnFocus:s.returnFocusOnDeactivate&&!j(u,s.tabbableOptions)});return}D(s.allowOutsideClick,i)||i.preventDefault()}},U=function(i){var u=R(i),c=b(u)>=0;c||u instanceof Document?c&&(n.mostRecentlyFocusedNode=u):(i.stopImmediatePropagation(),T(n.mostRecentlyFocusedNode||y()))},fe=function(i){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=R(i);h();var d=null;if(n.tabbableGroups.length>0){var v=b(c),g=v>=0?n.containerGroups[v]:void 0;if(v<0)u?d=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:d=n.tabbableGroups[0].firstTabbableNode;else if(u){var m=te(n.tabbableGroups,function(L){var B=L.firstTabbableNode;return c===B});if(m<0&&(g.container===c||j(c,s.tabbableOptions)&&!P(c,s.tabbableOptions)&&!g.nextTabbableNode(c,!1))&&(m=v),m>=0){var F=m===0?n.tabbableGroups.length-1:m-1,de=n.tabbableGroups[F];d=de.lastTabbableNode}else C(i)||(d=g.nextTabbableNode(c,!1))}else{var E=te(n.tabbableGroups,function(L){var B=L.lastTabbableNode;return c===B});if(E<0&&(g.container===c||j(c,s.tabbableOptions)&&!P(c,s.tabbableOptions)&&!g.nextTabbableNode(c))&&(E=v),E>=0){var ve=E===n.tabbableGroups.length-1?0:E+1,be=n.tabbableGroups[ve];d=be.firstTabbableNode}else C(i)||(d=g.nextTabbableNode(c))}}else d=w("fallbackFocus");d&&(C(i)&&i.preventDefault(),T(d))},q=function(i){if(Ye(i)&&D(s.escapeDeactivates,i)!==!1){i.preventDefault(),l.deactivate();return}(s.isKeyForward(i)||s.isKeyBackward(i))&&fe(i,s.isKeyBackward(i))},G=function(i){var u=R(i);b(u)>=0||D(s.clickOutsideDeactivates,i)||D(s.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},H=function(){if(n.active)return Q.activateTrap(o,l),n.delayInitialFocusTimer=s.delayInitialFocus?ee(function(){T(y())}):T(y()),a.addEventListener("focusin",U,!0),a.addEventListener("mousedown",_,{capture:!0,passive:!1}),a.addEventListener("touchstart",_,{capture:!0,passive:!1}),a.addEventListener("click",G,{capture:!0,passive:!1}),a.addEventListener("keydown",q,{capture:!0,passive:!1}),l},$=function(){if(n.active)return a.removeEventListener("focusin",U,!0),a.removeEventListener("mousedown",_,!0),a.removeEventListener("touchstart",_,!0),a.removeEventListener("click",G,!0),a.removeEventListener("keydown",q,!0),l};return l={get active(){return n.active},get paused(){return n.paused},activate:function(i){if(n.active)return this;var u=f(i,"onActivate"),c=f(i,"onPostActivate"),d=f(i,"checkCanFocusTrap");d||h(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=a.activeElement,u&&u();var v=function(){d&&h(),H(),c&&c()};return d?(d(n.containers.concat()).then(v,v),this):(v(),this)},deactivate:function(i){if(!n.active)return this;var u=J({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},i);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,$(),n.active=!1,n.paused=!1,Q.deactivateTrap(o,l);var c=f(u,"onDeactivate"),d=f(u,"onPostDeactivate"),v=f(u,"checkCanReturnFocus"),g=f(u,"returnFocus","returnFocusOnDeactivate");c&&c();var m=function(){ee(function(){g&&T(M(n.nodeFocusedBeforeActivation)),d&&d()})};return g&&v?(v(M(n.nodeFocusedBeforeActivation)).then(m,m),this):(m(),this)},pause:function(){return n.paused||!n.active?this:(n.paused=!0,$(),this)},unpause:function(){return!n.paused||!n.active?this:(n.paused=!1,h(),H(),this)},updateContainerElements:function(i){var u=[].concat(i).filter(Boolean);return n.containers=u.map(function(c){return typeof c=="string"?a.querySelector(c):c}),n.active&&h(),this}},l.updateContainerElements(e),l},Je=Object.defineProperty,Qe=Object.defineProperties,et=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,ae=(r,e,t)=>e in r?Je(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,tt=(r,e)=>{for(var t in e||(e={}))ce.call(e,t)&&ae(r,t,e[t]);if(x)for(var t of x(e))le.call(e,t)&&ae(r,t,e[t]);return r},at=(r,e)=>Qe(r,et(e)),rt=(r,e)=>{var t={};for(var a in r)ce.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(r!=null&&x)for(var a of x(r))e.indexOf(a)<0&&le.call(r,a)&&(t[a]=r[a]);return t};function nt(r,e={}){let t;const a=e,{immediate:o}=a,s=rt(a,["immediate"]),n=O(!1),l=O(!1),f=h=>t&&t.activate(h),b=h=>t&&t.deactivate(h),w=()=>{t&&(t.pause(),l.value=!0)},y=()=>{t&&(t.unpause(),l.value=!1)};return pe(()=>ge(r),h=>{h&&(t=Xe(h,at(tt({},s),{onActivate(){n.value=!0,e.onActivate&&e.onActivate()},onDeactivate(){n.value=!1,e.onDeactivate&&e.onDeactivate()}})),o&&f())},{flush:"post"}),he(()=>b()),{hasFocus:n,isPaused:l,activate:f,deactivate:b,pause:w,unpause:y}}const V=r=>(Ee("data-v-30feaaef"),r=r(),De(),r),it={style:{"max-width":"1000px"}},ot=V(()=>N("div",{class:"describe"},[N("p",null,"将键盘焦点锁定在一个特定的DOM元素上")],-1)),ut=V(()=>N("button",{"tab-index":"-1"},"你被困在这里了 ~ > 你只能点击灰色边框盒子中的内容",-1)),st=V(()=>N("br",null,null,-1)),ct={key:0},lt=ye({__name:"useFocusTrap",setup(r){const e=O(null),{hasFocus:t,activate:a,deactivate:o}=nt(e),s=O(),n=O(""),l=()=>{n.value+="biu"},f=()=>{n.value="",o()},b=()=>{n.value="你被禁用了！",a()};return(w,y)=>{const h=me("el-input");return Y(),z("div",it,[ot,N("button",{onClick:b},"禁用"),N("div",{class:"container",ref_key:"container",ref:e},[ut,we(h,{modelValue:s.value,"onUpdate:modelValue":y[0]||(y[0]=T=>s.value=T),placeholder:"放心的填写吧 ~ "},{default:Te(()=>[Fe("22")]),_:1},8,["modelValue"]),N("button",{style:{background:"pink"},onClick:f},"解除禁用")],512),N("button",{onClick:l,"tab-index":"-1"},W(Ne(t)?"你现在点击不了我了 ~":"你现在可以点击我 ~"),1),st,n.value!==""?(Y(),z("button",ct,W(n.value),1)):Se("",!0)])}}});const dt=Oe(lt,[["__scopeId","data-v-30feaaef"]]);export{dt as default};