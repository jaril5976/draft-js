/*! For license information please see d249d4f2.cfbe742b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),a=(n(181),n(180)),c={id:"v0-10-api-migration",title:"v0.10 API Migration"},i={id:"v0-10-api-migration",title:"v0.10 API Migration",description:"The Draft.js v0.10 release includes a change to the API for managing",source:"@site/../docs/APIReference-APIMigration.md",permalink:"/docs/v0-10-api-migration",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-APIMigration.md",lastUpdatedBy:"Claudio Procida",lastUpdatedAt:1588169786,sidebar:"docs",previous:{title:"Entities",permalink:"/docs/advanced-topics-entities"},next:{title:"Decorators",permalink:"/docs/advanced-topics-decorators"}},l=[{value:"Quick Overview",id:"quick-overview",children:[{value:"Creating an entity",id:"creating-an-entity",children:[]},{value:"Getting an Entity",id:"getting-an-entity",children:[]},{value:"Decorator Strategy arguments change",id:"decorator-strategy-arguments-change",children:[]},{value:"Decorator Strategies that find Entities",id:"decorator-strategies-that-find-entities",children:[]}]},{value:"More Information",id:"more-information",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Draft.js v0.10 release includes a change to the API for managing\n",Object(a.b)("inlineCode",{parentName:"p"},"DraftEntity")," data; the global 'DraftEntity' module is being deprecated and\n",Object(a.b)("inlineCode",{parentName:"p"},"DraftEntity")," instances will be managed as part of ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState"),". This means\nthat the methods which were previously accessed on ",Object(a.b)("inlineCode",{parentName:"p"},"DraftEntity")," are now moved\nto the ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," record."),Object(a.b)("p",null,"This API improvement unlocks the path for many benefits that will be available in v0.11:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"DraftEntity instances and storage will be immutable."),Object(a.b)("li",{parentName:"ul"},"DraftEntity will no longer be globally accessible."),Object(a.b)("li",{parentName:"ul"},"Any changes to entity data will trigger a re-render.")),Object(a.b)("h2",{id:"quick-overview"},"Quick Overview"),Object(a.b)("p",null,"Here is a quick list of what has been changed and how to update your application:"),Object(a.b)("h3",{id:"creating-an-entity"},"Creating an entity"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Old Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const entityKey = Entity.create(urlType, 'IMMUTABLE', {src: urlValue});\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"New Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', {\n  src: urlValue,\n});\nconst entityKey = contentStateWithEntity.getLastCreatedEntityKey();\n")),Object(a.b)("h3",{id:"getting-an-entity"},"Getting an Entity"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Old Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const entityInstance = Entity.get(entityKey);\n// entityKey is a string key associated with that entity when it was created\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"New Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const entityInstance = contentState.getEntity(entityKey);\n// entityKey is a string key associated with that entity when it was created\n")),Object(a.b)("h3",{id:"decorator-strategy-arguments-change"},"Decorator Strategy arguments change"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Old Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const compositeDecorator = new CompositeDecorator([\n  {\n    strategy: (contentBlock, callback) =>\n      exampleFindTextRange(contentBlock, callback),\n    component: ExampleTokenComponent,\n  },\n]);\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"New Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const compositeDecorator = new CompositeDecorator([\n  {\n    strategy: (contentBlock, callback, contentState) => (\n      contentBlock, callback, contentState\n    ),\n    component: ExampleTokenComponent,\n  },\n]);\n")),Object(a.b)("p",null,"Note that ExampleTokenComponent will receive contentState as a prop."),Object(a.b)("p",null,"Why does the 'contentState' get passed into the decorator strategy now? Because we may need it if our strategy is to find certain entities in the contentBlock:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const mutableEntityStrategy = function(contentBlock, callback, contentState) {\n  contentBlock.findEntityRanges(character => {\n    const entityKey = character.getEntity();\n    if (entityKey === null) {\n      return false;\n    }\n    // To look for certain types of entities,\n    // or entities with a certain mutability,\n    // you may need to get the entity from contentState.\n    // In this example we get only mutable entities.\n    return contentState.getEntity(entityKey).getMutability() === 'MUTABLE';\n  }, callback);\n};\n")),Object(a.b)("h3",{id:"decorator-strategies-that-find-entities"},"Decorator Strategies that find Entities"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Old Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function findLinkEntities(contentBlock, callback) {\n  contentBlock.findEntityRanges(character => {\n    const entityKey = character.getEntity();\n    return entityKey !== null && Entity.get(entityKey).getType() === 'LINK';\n  }, callback);\n}\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"New Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function findLinkEntities(contentBlock, callback, contentState) {\n  contentBlock.findEntityRanges(character => {\n    const entityKey = character.getEntity();\n    return (\n      entityKey !== null &&\n      contentState.getEntity(entityKey).getType() === 'LINK'\n    );\n  }, callback);\n}\n")),Object(a.b)("h2",{id:"more-information"},"More Information"),Object(a.b)("p",null,"For more information see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0"}),"updated examples"),"."))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),y=r,b=p["".concat(c,".").concat(y)]||p[y]||f[y]||a;return n?o.a.createElement(b,i(i({ref:t},u),{},{components:n})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||h}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var k=w.prototype=new v;k.constructor=w,r(k,j.prototype),k.isPureReactComponent=!0;var E={current:null},S=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,r)&&!N.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:E.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,_=[];function T(e,t,n,r){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function I(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case c:l=!0}}if(l)return r(o,t,""===n?"."+R(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+R(i=t[u],u);l+=e(i,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,s=n+R(i,u++),r,o);else if("object"===i)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(P,"$&/")+"/"),I(e,$,t=T(t,a,r,o)),D(t)}var B={current:null};function K(){var e=B.current;if(null===e)throw Error(g(321));return e}var L={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,A,t=T(null,null,t,n)),D(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(g(143));return e}},t.Component=j,t.Fragment=i,t.Profiler=u,t.PureComponent=w,t.StrictMode=l,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var o=r({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=E.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)S.call(t,s)&&!N.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return K().useCallback(e,t)},t.useContext=function(e,t){return K().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return K().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return K().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return K().useLayoutEffect(e,t)},t.useMemo=function(e,t){return K().useMemo(e,t)},t.useReducer=function(e,t,n){return K().useReducer(e,t,n)},t.useRef=function(e){return K().useRef(e)},t.useState=function(e){return K().useState(e)},t.version="16.13.1"},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)a.call(n,i[p])&&(l[i[p]]=n[i[p]])}}return l}}}]);