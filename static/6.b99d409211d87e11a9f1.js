/*!
 * 
 *     Name: 6
 *     Generated on: 1534890329317
 *     Package: verdaccio
 *     Version: v3.6.0
 *     License: MIT
 *     
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{948:function(e,n,t){var r=t(760),a=t(949),i=t(950),o="Expected a function",l=Math.max,s=Math.min;e.exports=function(e,n,t){var u,c,f,d,g,v,p=0,h=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function E(n){var t=u,r=c;return u=c=void 0,p=n,d=e.apply(r,t)}function y(e){var t=e-v;return void 0===v||t>=n||t<0||m&&e-p>=f}function N(){var e=a();if(y(e))return _(e);g=setTimeout(N,function(e){var t=n-(e-v);return m?s(t,f-(e-p)):t}(e))}function _(e){return g=void 0,b&&u?E(e):(u=c=void 0,d)}function w(){var e=a(),t=y(e);if(u=arguments,c=this,v=e,t){if(void 0===g)return function(e){return p=e,g=setTimeout(N,n),h?E(e):d}(v);if(m)return g=setTimeout(N,n),E(v)}return void 0===g&&(g=setTimeout(N,n)),d}return n=i(n)||0,r(t)&&(h=!!t.leading,f=(m="maxWait"in t)?l(i(t.maxWait)||0,n):f,b="trailing"in t?!!t.trailing:b),w.cancel=function(){void 0!==g&&clearTimeout(g),p=0,u=v=c=g=void 0},w.flush=function(){return void 0===g?d:_(a())},w}},949:function(e,n,t){var r=t(260);e.exports=function(){return r.Date.now()}},950:function(e,n,t){var r=t(760),a=t(264),i=NaN,o=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return i;if(r(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=r(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var t=s.test(e);return t||u.test(e)?c(e.slice(2),t?2:8):l.test(e)?i:+e}},956:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.registerLanguage=void 0;var r=i(t(957)),a=i(t(959));function i(e){return e&&e.__esModule?e:{default:e}}n.registerLanguage=a.default.registerLanguage;n.default=(0,r.default)(a.default,{})},957:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=l(t(266)),a=l(t(75));n.default=function(e,n){return function(t){var o=t.language,l=t.children,d=t.style,g=void 0===d?n:d,v=t.customStyle,p=void 0===v?{}:v,h=t.codeTagProps,m=void 0===h?{}:h,b=t.useInlineStyles,E=void 0===b||b,y=t.showLineNumbers,N=void 0!==y&&y,_=t.startingLineNumber,w=void 0===_?1:_,x=t.lineNumberContainerStyle,R=t.lineNumberStyle,S=t.wrapLines,M=t.lineStyle,O=void 0===M?{}:M,C=t.renderer,L=t.PreTag,k=void 0===L?"pre":L,I=t.CodeTag,T=void 0===I?"code":I,j=t.code,A=void 0===j?Array.isArray(l)?l[0]:l:j,B=(0,a.default)(t,["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","lineStyle","renderer","PreTag","CodeTag","code"]);S=!(!C||void 0!==S)||S,C=C||f;var D=o&&e.getLanguage(o)?e.highlight(o,A):e.highlightAuto(A);null!==D.language&&"text"!==o||(D.value=[{type:"text",value:A}]);var P=g.hljs||{backgroundColor:"#fff"},U=E?(0,r.default)({},B,{style:(0,r.default)({},P,p)}):(0,r.default)({},B,{className:"hljs"}),K=S?function(e,n){var t=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(var a=0;a<n.length;a++){var i=n[a];if("text"===i.type)r.push(c({children:[i],className:t}));else if(i.children){var o=t.concat(i.properties.className);r=r.concat(e(i.children,o))}}return r}(e.value),r=[],a=-1,i=0,o=function(){var e=t[i],o=e.children[0].value,l=function(e){return e.match(s)}(o);l&&function(){var l=o.split("\n");l.forEach(function(o,s){var u=r.length+1,f={type:"text",value:o+"\n"};if(0===s){var d=t.slice(a+1,i).concat(c({children:[f],className:e.properties.className}));r.push(c({children:d,lineNumber:u,lineStyle:n}))}else if(s===l.length-1){var g=t[i+1]&&t[i+1].children&&t[i+1].children[0];if(g){var v={type:"text",value:""+o},p=c({children:[v],className:e.properties.className});t.splice(i+1,0,p)}else r.push(c({children:[f],lineNumber:u,lineStyle:n}))}else r.push(c({children:[f],lineNumber:u,lineStyle:n}))}),a=i}(),i++};for(;i<t.length;)o();if(a!==t.length-1){var l=t.slice(a+1,t.length);l&&l.length&&r.push(c({children:l,lineNumber:r.length+1,lineStyle:n}))}return r}(D,O):D.value,H=N?i.default.createElement(u,{containerStyle:x,numberStyle:R,startingLineNumber:w,codeString:A}):null;return i.default.createElement(k,U,H,i.default.createElement(T,m,C({rows:K,stylesheet:g,useInlineStyles:E})))}};var i=l(t(0)),o=l(t(958));function l(e){return e&&e.__esModule?e:{default:e}}var s=/\n/g;function u(e){var n=e.codeString,t=e.containerStyle,r=void 0===t?{float:"left",paddingRight:"10px"}:t,a=e.numberStyle,o=void 0===a?{}:a,l=e.startingLineNumber;return i.default.createElement("code",{style:r},function(e){var n=e.lines,t=e.startingLineNumber,r=e.style;return n.map(function(e,n){var a=n+t;return i.default.createElement("span",{key:"line-"+n,className:"react-syntax-highlighter-line-number",style:"function"==typeof r?r(a):r},a+"\n")})}({lines:n.replace(/\n$/,"").split("\n"),style:o,startingLineNumber:l}))}function c(e){var n=e.children,t=e.lineNumber,r=e.lineStyle,a=e.className;return{type:"element",tagName:"span",properties:{className:void 0===a?[]:a,style:"function"==typeof r?r(t):r},children:n}}function f(e){var n=e.rows,t=e.stylesheet,r=e.useInlineStyles;return n.map(function(e,n){return(0,o.default)({node:e,stylesheet:t,useInlineStyles:r,key:"code-segement"+n})})}},958:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o(t(266)),a=o(t(15));n.createStyleObject=l,n.createClassNameString=s,n.createChildren=u,n.default=c;var i=o(t(0));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments[2];return e.reduce(function(e,n){return(0,a.default)({},e,t[n])},n)}function s(e){return e.join(" ")}function u(e,n){var t=0;return function(r){return t+=1,r.map(function(r,a){return c({node:r,stylesheet:e,useInlineStyles:n,key:"code-segment-"+t+"-"+a})})}}function c(e){var n=e.node,t=e.stylesheet,o=e.style,c=void 0===o?{}:o,f=e.useInlineStyles,d=e.key,g=n.properties,v=n.type,p=n.tagName,h=n.value;if("text"===v)return h;if(p){var m=u(t,f),b=f?{style:l(g.className,(0,r.default)({},g.style,c),t)}:{className:s(g.className)},E=m(n.children);return i.default.createElement(p,(0,a.default)({key:d},b),E)}}},959:function(e,n,t){"use strict";var r=t(960),a=t(961);function i(){}i.prototype=r;var o=new i;e.exports=o,o.highlight=function(e,n,t){var r=(t||{}).prefix;null!==r&&void 0!==r||(r=c);return w(_(e,n,!0,r))},o.highlightAuto=N,o.registerLanguage=function(e,n){var t=n(o),r=t.aliases,a=r&&r.length,i=-1;E[e]=t,b.push(e);for(;++i<a;)y[r[i]]=e},o.getLanguage=S;var l=r.inherit,s={}.hasOwnProperty,u=[].concat,c="hljs-",f="case_insensitive",d="cached_variants",g=" ",v="|",p="element",h="text",m="span",b=[],E={},y={};function N(e,n){var t,r,i,o,l=n||{},s=l.subset||b,u=l.prefix,f=s.length,d=-1;if(null!==u&&void 0!==u||(u=c),"string"!=typeof e)throw a("Expected `string` for value, got `%s`",e);for(r=w({}),t=w({});++d<f;)S(o=s[d])&&((i=w(_(o,e,!1,u))).language=o,i.relevance>r.relevance&&(r=i),i.relevance>t.relevance&&(r=t,t=i));return r.language&&(t.secondBest=r),t}function _(e,n,t,r,i){var o,c,b,y,w,M,O,C,L={},k=[],I="",T=0;if("string"!=typeof e)throw a("Expected `string` for name, got `%s`",e);if("string"!=typeof n)throw a("Expected `string` for value, got `%s`",n);if(o=S(e),b=c=i||o,y=C=[],!o)throw a("Unknown language: `%s` is not registered",e);!function(e){function n(n,r){return new RegExp(t(n),"m"+(e[f]?"i":"")+(r?"g":""))}function t(e){return e&&e.source||e}!function r(a,i){var o={};var s;if(a.compiled)return;a.compiled=!0;a.keywords=a.keywords||a.beginKeywords;a.keywords&&("string"==typeof a.keywords?c("keyword",a.keywords):Object.keys(a.keywords).forEach(function(e){c(e,a.keywords[e])}),a.keywords=o);a.lexemesRe=n(a.lexemes||/\w+/,!0);i&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(g).join(v)+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=n(a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=n(a.end)),a.terminatorEnd=t(a.end)||"",a.endsWithParent&&i.terminatorEnd&&(a.terminatorEnd+=(a.end?v:"")+i.terminatorEnd));a.illegal&&(a.illegalRe=n(a.illegal));void 0===a.relevance&&(a.relevance=1);a.contains||(a.contains=[]);a.contains=u.apply([],a.contains.map(function(e){return function(e){var n,t,r,a;if(e.variants&&!e[d]){for(r=e.variants,n=r.length,t=-1,a=[];++t<n;)a[t]=l(e,{variants:null},r[t]);e[d]=a}return e[d]||(e.endsWithParent?[l(e)]:[e])}("self"===e?a:e)}));a.contains.forEach(function(e){r(e,a)});a.starts&&r(a.starts,i);s=a.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([a.terminatorEnd,a.illegal]).map(t).filter(Boolean);a.terminators=s.length?n(s.join(v),!0):{exec:R};function c(n,t){var r,a,i,l;for(e[f]&&(t=t.toLowerCase()),r=t.split(g),l=r.length,i=-1;++i<l;)a=r[i].split(v),o[a[0]]=[n,a[1]?Number(a[1]):1]}}(e)}(o);try{for(c.terminators.lastIndex=0,w=0,O=c.terminators.exec(n);O;)M=j(n.substring(w,O.index),O[0]),w=O.index+M,c.terminators.lastIndex=w,O=c.terminators.exec(n);for(j(n.substr(w)),b=c;b.parent;)b.className&&H(),b=b.parent;return{relevance:T,value:y,language:e,top:c}}catch(e){if(-1===e.message.indexOf("Illegal"))throw e;return{relevance:0,value:P(n,[])}}function j(e,n){var r,i,o;if(I+=e,void 0===n)return D(B(),y),0;if(r=function(e,n){var t=n.contains,r=t.length,a=-1;for(;++a<r;)if(x(t[a].beginRe,e))return t[a]}(n,c))return D(B(),y),A(r,n),r.returnBegin?0:n.length;if(i=function e(n,t){if(x(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(c,n)){(o=c).returnEnd||o.excludeEnd||(I+=n),D(B(),y);do{c.className&&H(),T+=c.relevance,c=c.parent}while(c!==i.parent);return o.excludeEnd&&P(n,y),I="",i.starts&&A(i.starts,""),o.returnEnd?0:n.length}if(function(e,n){return!t&&x(n.illegalRe,e)}(n,c))throw a('Illegal lexeme "%s" for mode "%s"',n,c.className||"<unnamed>");return I+=n,n.length||1}function A(e,n){var t;e.className&&(t=U(e.className,[])),e.returnBegin?I="":e.excludeBegin?(P(n,y),I=""):I=n,t&&(y.push(t),k.push(y),y=t.children),c=Object.create(e,{parent:{value:c}})}function B(){var e=c.subLanguage?function(){var e,n="string"==typeof c.subLanguage;if(n&&!E[c.subLanguage])return P(I,[]);e=n?_(c.subLanguage,I,!0,r,L[c.subLanguage]):N(I,{subset:c.subLanguage.length?c.subLanguage:void 0,prefix:r});c.relevance>0&&(T+=e.relevance);n&&(L[c.subLanguage]=e.top);return[U(e.language,e.value,!0)]}():function(){var e,n,t,r,a=[];if(!c.keywords)return P(I,a);e=0,c.lexemesRe.lastIndex=0,n=c.lexemesRe.exec(I);for(;n;)P(I.substring(e,n.index),a),(r=K(c,n))?(T+=r[1],t=U(r[0],[]),a.push(t),P(n[0],t.children)):P(n[0],a),e=c.lexemesRe.lastIndex,n=c.lexemesRe.exec(I);return P(I.substr(e),a),a}();return I="",e}function D(e,n){for(var t,r=e.length,a=-1;++a<r;)(t=e[a]).type===h?P(t.value,n):n.push(t)}function P(e,n){var t;return e&&((t=n[n.length-1])&&t.type===h?t.value+=e:n.push(function(e){return{type:h,value:e}}(e))),n}function U(e,n,t){return{type:p,tagName:m,properties:{className:[(t?"":r)+e]},children:n}}function K(e,n){var t=n[0];return o[f]&&(t=t.toLowerCase()),s.call(e.keywords,t)&&e.keywords[t]}function H(){y=k.pop()||C}}function w(e){return{relevance:e.relevance||0,language:e.language||null,value:e.value||[]}}function x(e,n){var t=e&&e.exec(n);return t&&0===t.index}function R(){return null}function S(e){return e=e.toLowerCase(),E[e]||E[y[e]]}},960:function(e,n,t){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;(function(e){var n=[],t=Object.keys,r={},a={},i=/^(no-?highlight|plain|text)$/i,o=/\blang(?:uage)?-([\w-]+)\b/i,l=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,s="</span>",u={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f(e){return e.nodeName.toLowerCase()}function d(e,n){var t=e&&e.exec(n);return t&&0===t.index}function g(e){return i.test(e)}function v(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function p(e){var n=[];return function e(t,r){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:r,node:a}),r=e(a,r),f(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:a}));return r}(e,0),n}function h(e){function n(e){return e&&e.source||e}function r(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}!function a(i,o){if(i.compiled)return;i.compiled=!0;i.keywords=i.keywords||i.beginKeywords;if(i.keywords){var l={},s=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");l[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof i.keywords?s("keyword",i.keywords):t(i.keywords).forEach(function(e){s(e,i.keywords[e])}),i.keywords=l}i.lexemesRe=r(i.lexemes||/\w+/,!0);o&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=r(i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=r(i.end)),i.terminator_end=n(i.end)||"",i.endsWithParent&&o.terminator_end&&(i.terminator_end+=(i.end?"|":"")+o.terminator_end));i.illegal&&(i.illegalRe=r(i.illegal));null==i.relevance&&(i.relevance=1);i.contains||(i.contains=[]);i.contains=Array.prototype.concat.apply([],i.contains.map(function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return v(e,{variants:null},n)}));return e.cached_variants||e.endsWithParent&&[v(e)]||[e]}("self"===e?i:e)}));i.contains.forEach(function(e){a(e,i)});i.starts&&a(i.starts,o);var u=i.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([i.terminator_end,i.illegal]).map(n).filter(Boolean);i.terminators=u.length?r(u.join("|"),!0):{exec:function(){return null}}}(e)}function m(e,n,t,a){function i(e,n){var t=v.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function o(e,n,t,r){var a=r?"":u.classPrefix,i='<span class="'+a,o=t?"":s;return(i+=e+'">')+n+o}function l(){N+=null!=E.subLanguage?function(){var e="string"==typeof E.subLanguage;if(e&&!r[E.subLanguage])return c(w);var n=e?m(E.subLanguage,w,!0,y[E.subLanguage]):b(w,E.subLanguage.length?E.subLanguage:void 0);E.relevance>0&&(x+=n.relevance);e&&(y[E.subLanguage]=n.top);return o(n.language,n.value,!1,!0)}():function(){var e,n,t,r;if(!E.keywords)return c(w);r="",n=0,E.lexemesRe.lastIndex=0,t=E.lexemesRe.exec(w);for(;t;)r+=c(w.substring(n,t.index)),(e=i(E,t))?(x+=e[1],r+=o(e[0],c(t[0]))):r+=c(t[0]),n=E.lexemesRe.lastIndex,t=E.lexemesRe.exec(w);return r+c(w.substr(n))}(),w=""}function f(e){N+=e.className?o(e.className,"",!0):"",E=Object.create(e,{parent:{value:E}})}function g(e,n){if(w+=e,null==n)return l(),0;var r=function(e,n){var t,r;for(t=0,r=n.contains.length;t<r;t++)if(d(n.contains[t].beginRe,e))return n.contains[t]}(n,E);if(r)return r.skip?w+=n:(r.excludeBegin&&(w+=n),l(),r.returnBegin||r.excludeBegin||(w=n)),f(r),r.returnBegin?0:n.length;var a=function e(n,t){if(d(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(E,n);if(a){var i=E;i.skip?w+=n:(i.returnEnd||i.excludeEnd||(w+=n),l(),i.excludeEnd&&(w=n));do{E.className&&(N+=s),E.skip||(x+=E.relevance),E=E.parent}while(E!==a.parent);return a.starts&&f(a.starts),i.returnEnd?0:n.length}if(function(e,n){return!t&&d(n.illegalRe,e)}(n,E))throw new Error('Illegal lexeme "'+n+'" for mode "'+(E.className||"<unnamed>")+'"');return w+=n,n.length||1}var v=_(e);if(!v)throw new Error('Unknown language: "'+e+'"');h(v);var p,E=a||v,y={},N="";for(p=E;p!==v;p=p.parent)p.className&&(N=o(p.className,"",!0)+N);var w="",x=0;try{for(var R,S,M=0;E.terminators.lastIndex=M,R=E.terminators.exec(n);)S=g(n.substring(M,R.index),R[0]),M=R.index+S;for(g(n.substr(M)),p=E;p.parent;p=p.parent)p.className&&(N+=s);return{relevance:x,value:N,language:e,top:E}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:c(n)};throw e}}function b(e,n){n=n||u.languages||t(r);var a={relevance:0,value:c(e)},i=a;return n.filter(_).forEach(function(n){var t=m(n,e,!1);t.language=n,t.relevance>i.relevance&&(i=t),t.relevance>a.relevance&&(i=a,a=t)}),i.language&&(a.second_best=i),a}function E(e){return u.tabReplace||u.useBR?e.replace(l,function(e,n){return u.useBR&&"\n"===e?"<br>":u.tabReplace?n.replace(/\t/g,u.tabReplace):""}):e}function y(e){var t,r,i,l,s,d=function(e){var n,t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=o.exec(i))return _(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,r=i.length;n<r;n++)if(g(a=i[n])||_(a))return a}(e);g(d)||(u.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,s=t.textContent,i=d?m(d,s,!0):b(s),(r=p(t)).length&&((l=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=i.value,i.value=function(e,t,r){var a=0,i="",o=[];function l(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function s(e){i+="<"+f(e)+n.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+c(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function u(e){i+="</"+f(e)+">"}function d(e){("start"===e.event?s:u)(e.node)}for(;e.length||t.length;){var g=l();if(i+=c(r.substring(a,g[0].offset)),a=g[0].offset,g===e){o.reverse().forEach(u);do{d(g.splice(0,1)[0]),g=l()}while(g===e&&g.length&&g[0].offset===a);o.reverse().forEach(s)}else"start"===g[0].event?o.push(g[0].node):o.pop(),d(g.splice(0,1)[0])}return i+c(r.substr(a))}(r,p(l),s)),i.value=E(i.value),e.innerHTML=i.value,e.className=function(e,n,t){var r=n?a[n]:t,i=[e.trim()];e.match(/\bhljs\b/)||i.push("hljs");-1===e.indexOf(r)&&i.push(r);return i.join(" ").trim()}(e.className,d,i.language),e.result={language:i.language,re:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance}))}function N(){if(!N.called){N.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,y)}}function _(e){return e=(e||"").toLowerCase(),r[e]||r[a[e]]}e.highlight=m,e.highlightAuto=b,e.fixMarkup=E,e.highlightBlock=y,e.configure=function(e){u=v(u,e)},e.initHighlighting=N,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",N,!1),addEventListener("load",N,!1)},e.registerLanguage=function(n,t){var i=r[n]=t(e);i.aliases&&i.aliases.forEach(function(e){a[e]=n})},e.listLanguages=function(){return t(r)},e.getLanguage=_,e.inherit=v,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,r){var a=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return a.contains.push(e.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0}})(n)}()},961:function(e,n,t){"use strict";var r=t(962),a=i(Error);function i(e){return n.displayName=e.displayName||e.name,n;function n(n){return n&&(n=r.apply(null,arguments)),new e(n)}}e.exports=a,a.eval=i(EvalError),a.range=i(RangeError),a.reference=i(ReferenceError),a.syntax=i(SyntaxError),a.type=i(TypeError),a.uri=i(URIError),a.create=i},962:function(e,n,t){!function(){var n;function t(e){for(var n,t,r,a,i=1,o=[].slice.call(arguments),l=0,s=e.length,u="",c=!1,f=!1,d=function(){return o[i++]},g=function(){for(var t="";/\d/.test(e[l]);)t+=e[l++],n=e[l];return t.length>0?parseInt(t):null};l<s;++l)if(n=e[l],c)switch(c=!1,"."==n?(f=!1,n=e[++l]):"0"==n&&"."==e[l+1]?(f=!0,n=e[l+=2]):f=!0,a=g(),n){case"b":u+=parseInt(d(),10).toString(2);break;case"c":"string"==typeof(t=d())||t instanceof String?u+=t:u+=String.fromCharCode(parseInt(t,10));break;case"d":u+=parseInt(d(),10);break;case"f":r=String(parseFloat(d()).toFixed(a||6)),u+=f?r:r.replace(/^0/,"");break;case"j":u+=JSON.stringify(d());break;case"o":u+="0"+parseInt(d(),10).toString(8);break;case"s":u+=d();break;case"x":u+="0x"+parseInt(d(),10).toString(16);break;case"X":u+="0x"+parseInt(d(),10).toString(16).toUpperCase();break;default:u+=n}else"%"===n?c=!0:u+=n;return u}(n=e.exports=t).format=t,n.vsprintf=function(e,n){return t.apply(null,[e].concat(n))},"undefined"!=typeof console&&"function"==typeof console.log&&(n.printf=function(){console.log(t.apply(null,arguments))})}()},963:function(e,n,t){"use strict";t.r(n),n.default={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#000",color:"#f8f8f8"},"hljs-comment":{color:"#aeaeae",fontStyle:"italic"},"hljs-quote":{color:"#aeaeae",fontStyle:"italic"},"hljs-keyword":{color:"#e28964"},"hljs-selector-tag":{color:"#e28964"},"hljs-type":{color:"#e28964"},"hljs-string":{color:"#65b042"},"hljs-subst":{color:"#daefa3"},"hljs-regexp":{color:"#e9c062"},"hljs-link":{color:"#e9c062"},"hljs-title":{color:"#89bdff"},"hljs-section":{color:"#89bdff"},"hljs-tag":{color:"#89bdff"},"hljs-name":{color:"#89bdff"},"hljs-class .hljs-title":{textDecoration:"underline"},"hljs-doctag":{textDecoration:"underline"},"hljs-symbol":{color:"#3387cc"},"hljs-bullet":{color:"#3387cc"},"hljs-number":{color:"#3387cc"},"hljs-params":{color:"#3e87e3"},"hljs-variable":{color:"#3e87e3"},"hljs-template-variable":{color:"#3e87e3"},"hljs-attribute":{color:"#cda869"},"hljs-meta":{color:"#8996a8"},"hljs-formula":{backgroundColor:"#0e2231",color:"#f8f8f8",fontStyle:"italic"},"hljs-addition":{backgroundColor:"#253b22",color:"#f8f8f8"},"hljs-deletion":{backgroundColor:"#420e09",color:"#f8f8f8"},"hljs-selector-class":{color:"#9b703f"},"hljs-selector-id":{color:"#8b98ab"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}}},964:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(t(965));n.default=r.default},965:function(e,n){e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},a={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,a]};a.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,r,e.REGEXP_MODE];var o=a.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:o}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:o}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}}}]);