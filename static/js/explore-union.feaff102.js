(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./docs/explore/union.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function c(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;c(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"union-types"}},"Union types"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Considering such query:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-graphql"}},'{\n  search(keyword: "car") {\n    ... on Product {\n      name\n      price\n    }\n    ... on Category {\n      name\n      itemsCount\n      avgProductPrice\n    }\n  }\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Search field return union of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Product")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Category"),". To define such union we need to use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@Union")," decorator"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { ObjectType, Field, Union } from 'decapi'\n\n@ObjectType()\nclass Product {\n  @Field()\n  name: string\n  @Field()\n  price: number\n}\n\n@ObjectType()\nclass Category {\n  @Field()\n  name: string\n  @Field()\n  itemsCount: number\n  @Field()\n  avgProductPrice: number\n}\n\n@Union({ types: [Product, Category] })\nclass SearchResult {}\n")))}}}]);