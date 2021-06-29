(window.webpackJsonp=window.webpackJsonp||[]).push([[133,67],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),b=(a(0),a(293)),c=a(87),i={id:"tab",title:"Tabs",slug:"/tab"},l={unversionedId:"main/tab",id:"main/tab",isDocsHomePage:!1,title:"Tabs",description:"Tabs organize content across different screens, data sets, and other interactions.",source:"@site/docs/main/tab.md",slug:"/tab",permalink:"/docs/next/tab",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/tab.md",version:"current",sidebar:"docs",previous:{title:"Switch",permalink:"/docs/next/switch"},next:{title:"Text",permalink:"/docs/next/text"}},o=[{value:"Usage",id:"usage",children:[]}],d={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Tabs organize content across different screens, data sets, and other interactions."),Object(b.b)("div",{className:"component-preview component-preview--grid component-preview--grid-10"},Object(b.b)("figure",null,Object(b.b)("img",{src:"/img/tab.jpg",alt:"Floating Action Button"}))),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("div",{className:"snack-player","data-snack-name":"RNE Tabs","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tab%2C%20TabView%2C%20Text%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bindex%2C%20setIndex%5D%20%3D%20React.useState(0)%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CTab%20value%3D%7Bindex%7D%20onChange%3D%7BsetIndex%7D%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%20title%3D%22recent%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%20title%3D%22favorite%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%20title%3D%22cart%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTab%3E%0A%0A%20%20%20%20%20%20%3CTabView%20value%3D%7Bindex%7D%20onChange%3D%7BsetIndex%7D%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'red'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3ERecent%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'blue'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3EFavorite%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'green'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3ECart%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%3C%2FTabView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(b.b)("hr",null),Object(b.b)(c.default,{mdxType:"Props"}),Object(b.b)("hr",null))}p.isMDXComponent=!0},293:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,j=p["".concat(c,".").concat(m)]||p[m]||O[m]||b;return a?r.a.createElement(j,i(i({ref:t},o),{},{components:a})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),b=(a(0),a(293)),c={},i={unversionedId:"main/props/tab",id:"main/props/tab",isDocsHomePage:!1,title:"tab",description:"Props",source:"@site/docs/main/props/tab.md",slug:"/main/props/tab",permalink:"/docs/next/main/props/tab",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/props/tab.md",version:"current"},l=[{value:"Child Component",id:"child-component",children:[{value:"Tab.Item",id:"tabitem",children:[]},{value:"TabView",id:"tabview",children:[]},{value:"TabViewItem",id:"tabviewitem",children:[]}]},{value:"Reference",id:"reference",children:[{value:"<code>value</code>",id:"value",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>disableIndicator</code>",id:"disableindicator",children:[]},{value:"<code>indicatorStyle</code>",id:"indicatorstyle",children:[]},{value:"<code>variant</code>",id:"variant",children:[]},{value:"<code>animationtype</code>",id:"animationtype",children:[]},{value:"<code>animationconfig</code>",id:"animationconfig",children:[]}]}],o={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h4",{id:"props"},"Props"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#value"}),Object(b.b)("inlineCode",{parentName:"a"},"value"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#onchange"}),Object(b.b)("inlineCode",{parentName:"a"},"onChange"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#disableindicator"}),Object(b.b)("inlineCode",{parentName:"a"},"disableIndicator"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#indicatorstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"indicatorStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#variant"}),Object(b.b)("inlineCode",{parentName:"a"},"variant")))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Also receives all ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view#props"}),"View")," props")),Object(b.b)("h2",{id:"child-component"},"Child Component"),Object(b.b)("h3",{id:"tabitem"},"Tab.Item"),Object(b.b)("h4",{id:"props-1"},"Props"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Receives all ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnativeelements.com/docs/button#props"}),"Button")," props")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tabview"},"TabView"),Object(b.b)("h4",{id:"props-2"},"Props"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#value"}),Object(b.b)("inlineCode",{parentName:"a"},"value"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#onchange"}),Object(b.b)("inlineCode",{parentName:"a"},"onChange"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#animationtype"}),Object(b.b)("inlineCode",{parentName:"a"},"animationType"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#animationconfig"}),Object(b.b)("inlineCode",{parentName:"a"},"animationConfig")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tabviewitem"},"TabViewItem"),Object(b.b)("h4",{id:"props-3"},"Props"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Receives all ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view#props"}),"View")," props")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"reference"},"Reference"),Object(b.b)("h3",{id:"value"},Object(b.b)("inlineCode",{parentName:"h3"},"value")),Object(b.b)("p",null,"Child position index value."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"0"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onchange"},Object(b.b)("inlineCode",{parentName:"h3"},"onChange")),Object(b.b)("p",null,"On Index Change Callback"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"function")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"none"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"disableindicator"},Object(b.b)("inlineCode",{parentName:"h3"},"disableIndicator")),Object(b.b)("p",null,"Disable the indicator below"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"indicatorstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"indicatorStyle")),Object(b.b)("p",null,"Additional styling for tab indicator (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"variant"},Object(b.b)("inlineCode",{parentName:"h3"},"variant")),Object(b.b)("p",null,"Background Variant"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'primary' or 'default'"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"default"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"animationtype"},Object(b.b)("inlineCode",{parentName:"h3"},"animationtype")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'spring' or 'timing'"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"spring"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"animationconfig"},Object(b.b)("inlineCode",{parentName:"h3"},"animationconfig")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"'Object'"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"none"))))),Object(b.b)("hr",null))}d.isMDXComponent=!0}}]);