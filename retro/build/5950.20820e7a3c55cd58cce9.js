"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5950],{45950:(e,t,a)=>{a.r(t),a.d(t,{MIME_TYPE:()=>f,RenderedJSON:()=>j,default:()=>g,rendererFactory:()=>T});var n=a(78241),r=a(95187),s=a(18151),i=a(96927),l=a(54819),o=a(27891),d=a(93315),c=a(78805),m=a.n(c),u=a(58170),h=a.n(u);class p extends i.Component{constructor(){super(...arguments),this.state={filter:"",value:""},this.timer=0,this.handleChange=e=>{const{value:t}=e.target;this.setState({value:t}),window.clearTimeout(this.timer),this.timer=window.setTimeout((()=>{this.setState({filter:t})}),300)}}render(){const e=(this.props.translator||r.nullTranslator).load("jupyterlab"),{data:t,metadata:a}=this.props,n=a&&a.root?a.root:"root",s=this.state.filter?v(t,this.state.filter,[n]):[n];return i.createElement("div",{className:"container"},i.createElement(o.InputGroup,{className:"filter",type:"text",placeholder:e.__("Filter…"),onChange:this.handleChange,value:this.state.value,rightIcon:"ui-components:search"}),i.createElement(h(),{data:t,collectionLimit:100,theme:{extend:y,valueLabel:"cm-variable",valueText:"cm-string",nestedNodeItemString:"cm-comment"},invertTheme:!1,keyPath:[n],getItemString:(e,t,a,n)=>Array.isArray(t)?i.createElement("span",null,a," ",n):0===Object.keys(t).length?i.createElement("span",null,a):null,labelRenderer:([e,t])=>i.createElement("span",{className:"cm-keyword"},i.createElement(m(),{search:this.state.filter,matchStyle:{backgroundColor:"yellow"}},`${e}: `)),valueRenderer:e=>{let t="cm-string";return"number"==typeof e&&(t="cm-number"),"true"!==e&&"false"!==e||(t="cm-keyword"),i.createElement("span",{className:t},i.createElement(m(),{search:this.state.filter,matchStyle:{backgroundColor:"yellow"}},`${e}`))},shouldExpandNode:(e,t,n)=>!(!a||!a.expanded)||s.join(",").includes(e.join(","))}))}}const y={scheme:"jupyter",base00:"invalid",base01:"invalid",base02:"invalid",base03:"invalid",base04:"invalid",base05:"invalid",base06:"invalid",base07:"invalid",base08:"invalid",base09:"invalid",base0A:"invalid",base0B:"invalid",base0C:"invalid",base0D:"invalid",base0E:"invalid",base0F:"invalid",author:"invalid"};function b(e,t){return JSON.stringify(e).includes(t)}function v(e,t,a=["root"]){return d.JSONExt.isArray(e)?e.reduce(((e,n,r)=>n&&"object"==typeof n&&b(n,t)?[...e,[r,...a].join(","),...v(n,t,[r,...a])]:e),[]):d.JSONExt.isObject(e)?Object.keys(e).reduce(((n,r)=>{const s=e[r];return s&&"object"==typeof s&&(r.includes(t)||b(s,t))?[...n,[r,...a].join(","),...v(s,t,[r,...a])]:n}),[]):[]}const f="application/json";class j extends s.Widget{constructor(e){super(),this.addClass("jp-RenderedJSON"),this.addClass("CodeMirror"),this.addClass("cm-s-jupyter"),this._mimeType=e.mimeType,this.translator=e.translator||r.nullTranslator}[n.Printing.symbol](){return()=>n.Printing.printWidget(this)}renderModel(e){const t=e.data[this._mimeType]||{},a=e.metadata[this._mimeType]||{};return new Promise(((e,n)=>{l.render(i.createElement(p,{data:t,metadata:a,translator:this.translator}),this.node,(()=>{e()}))}))}onBeforeDetach(e){l.unmountComponentAtNode(this.node)}}const T={safe:!0,mimeTypes:[f],createRenderer:e=>new j(e)},g=[{id:"@jupyterlab/json-extension:factory",rendererFactory:T,rank:0,dataType:"json",documentWidgetFactoryOptions:{name:"JSON",primaryFileType:"json",fileTypes:["json","notebook","geojson"],defaultFor:["json"]}}]}}]);
//# sourceMappingURL=5950.20820e7a3c55cd58cce9.js.map