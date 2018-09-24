(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./docs/explore/hooks/before-and-after.mdx":function(e,n,o){"use strict";o.r(n);var a=o("./node_modules/react/index.js"),t=o.n(a),r=o("./node_modules/@mdx-js/tag/dist/index.js");function s(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}n.default=function(e){var n=e.components;s(e,["components"]);return t.a.createElement(r.MDXTag,{name:"wrapper",components:n},t.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"before-and-after-hooks"}},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h1"},"@Before")," and ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h1"},"@After")," hooks"),t.a.createElement(r.MDXTag,{name:"p",components:n},"Let's say we want to send informations about useage of some field of our graphql api to analitycs server. We could achieve that with:"),t.a.createElement(r.MDXTag,{name:"pre",components:n},t.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { ObjectType, Field, After } from 'decapi'\n\n@ObjectType()\nclass Person {\n  @Field()\n  id: number\n\n  @Field()\n  @After(() => {\n    loggingService.sendLog(`User was removed`)\n  })\n  remove(): boolean {\n    const isDeleted = userService.removeById(this.id)\n    return isDeleted\n  }\n}\n")),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"using-resolver-informations-inside-hook-function"}},"Using resolver informations inside hook function"),t.a.createElement(r.MDXTag,{name:"p",components:n},"Arguments passed to resolver are exactly the same, as ones passed to native graphql resolver funtion. Signature of hook function is"),t.a.createElement(r.MDXTag,{name:"p",components:n},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"(source, arguments, context, info) => void")),t.a.createElement(r.MDXTag,{name:"p",components:n},"In case, we'd like to add id of removed user to logs, we'd change our code to:"),t.a.createElement(r.MDXTag,{name:"pre",components:n},t.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"@ObjectType()\nclass Person {\n  @Field()\n  id: number\n\n  @Field()\n  @After((user) => {\n    loggingService.sendLog(`User with id ${user.id} was removed`)\n    // note we could as well use `this` keyword like:\n    // loggingService.sendLog(`User with id ${this.id} was removed`);\n  })\n  remove(): boolean {\n    const isDeleted = userService.removeById(this.id)\n    return isDeleted\n  }\n}\n")),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"notes"}},"Notes"),t.a.createElement(r.MDXTag,{name:"ul",components:n},t.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"If one field has many hooks of the same type - they're executed in parallel."),t.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Field resolver is not called until all @Before hooks are resolved")))}}}]);