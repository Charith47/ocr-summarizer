(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"398a":function(t,e){t.exports="data:image/png;base64,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"},"47eb":function(t,e,a){t.exports=a.p+"img/tech-emoij.fd8f119c.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[r("v-container",[r("img",{attrs:{height:"30px",width:"auto",src:a("7543")}})])],1),r("v-main",{staticClass:"grey lighten-3"},[t.noFilesError?r("v-alert",{staticClass:"rounded-0",attrs:{dense:"",type:"error"}},[t._v(t._s(t.noFilesError))]):t._e(),t.apiError?r("v-alert",{staticClass:"rounded-0",attrs:{dense:"",type:"error"}},[t._v(t._s(t.apiError))]):t._e(),t.parseError?r("v-alert",{staticClass:"rounded-0",attrs:{dense:"",type:"error"}},[t._v(t._s(t.parseError))]):t._e(),t.noTextError?r("v-alert",{staticClass:"rounded-0",attrs:{dense:"",type:"error"}},[t._v(t._s(t.noTextError))]):t._e(),t.noContentToDownload?r("v-alert",{staticClass:"rounded-0",attrs:{dense:"",type:"error"}},[t._v(t._s(t.noContentToDownload))]):t._e(),r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"2"}},[r("v-sheet",{attrs:{rounded:"lg","min-height":"268"}},[r("v-container",[r("div",{staticClass:"d-flex align-start"},[r("img",{attrs:{src:a("398a"),height:"25px",width:"auto",alt:"information emoji"}}),r("h3",{staticClass:"mx-2"},[t._v("About")])]),r("p",{staticClass:"body-1"},[t._v(" AccuText is as a text recognizer and a summarizer which can extract and summarize text from uploaded images. Start by uploading your images and clicking the upload button to get the extracted text and click summarize button to get the summarized text. ")])])],1)],1),r("v-col",{attrs:{cols:"12",sm:"8"}},[r("v-sheet",{attrs:{"min-height":"60vh",rounded:"lg"}},[r("v-container",[r("v-container",[r("v-container",{staticClass:"d-flex justify-space-between"},[r("h2",{staticStyle:{display:"inline"}},[t._v("Upload your images")]),r("v-btn",{attrs:{color:"red lighten-1",icon:""},on:{click:t.clearAll}},[r("v-icon",[t._v("mdi-delete")])],1)],1),r("v-container",[r("v-file-input",{ref:"fileupload",attrs:{outlined:"",dense:"",accept:"image/png, image/jpeg",chips:"","show-size":"",counter:"",multiple:"","truncate-length":"15",placeholder:"Select images to upload"},on:{change:t.parseFiles,"click:clear":t.clearFiles}}),r("v-btn",{staticClass:"white--text",attrs:{color:"#6989ff"},on:{click:t.uploadFiles}},[t._v(" Upload ")])],1)],1),r("v-divider"),r("v-container",[r("v-row",[r("v-col",[r("v-container",[r("h2",[t._v("Extracted text")])]),r("span"),r("v-container",[r("v-textarea",{attrs:{height:"250","no-resize":"",outlined:"",placeholder:"Extracted text",label:"Extracted text"},model:{value:t.extractedText,callback:function(e){t.extractedText=e},expression:"extractedText"}}),r("v-btn",{staticClass:"white--text",attrs:{color:"#6989ff"},on:{click:t.getSummary}},[t._v(" Summarize ")])],1)],1),r("v-col",[r("v-container",{staticClass:"px-0"},[r("h2",[t._v("Summarized text")])]),r("v-container",{staticClass:"px-0"},[r("v-textarea",{attrs:{height:"250","no-resize":"",outlined:"",placeholder:"Summarized text",label:"Summarized text"},model:{value:t.summarizedText,callback:function(e){t.summarizedText=e},expression:"summarizedText"}}),r("v-container",{staticClass:"pa-0 ma-0 d-flex justify-space-between"},[r("div",{staticStyle:{display:"inline-block"}}),r("v-btn",{staticClass:"green lighten-1 white--text",on:{click:t.downloadText}},[t._v("download "),r("v-icon",{staticClass:"ml-2"},[t._v(" mdi-cloud-download")])],1)],1)],1)],1)],1),r("span",{staticClass:"px-3"},[r("h5",{staticStyle:{display:"inline"}},[t._v(" Word count • "),r("p",{staticStyle:{display:"inline"}},[t._v(" Extracted "),r("span",{staticClass:"red--text"},[t._v(t._s(t.wordCount(this.extractedText)))]),t._v(" | ")]),r("p",{staticStyle:{display:"inline"}},[t._v(" Summary "),r("span",{staticClass:"blue--text"},[t._v(t._s(t.wordCount(this.summarizedText)))])])])])],1)],1)],1)],1),r("v-col",{attrs:{cols:"12",sm:"2"}},[r("v-sheet",{attrs:{rounded:"lg","min-height":"268"}},[r("v-container",[r("div",{staticClass:"d-flex align-start"},[r("img",{attrs:{src:a("47eb"),height:"25px",width:"auto",alt:"tech emoji"}}),r("h3",{staticClass:"mx-2"},[t._v("Contributors")])]),r("v-list",t._l(t.contributors,(function(e){return r("v-list-item",{key:e.sid,attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",[t._v(" "+t._s(e.name)+" ")]),r("v-list-item-subtitle",[t._v(" "+t._s(e.sid)+" ")])],1)],1)})),1)],1)],1)],1)],1)],1),r("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[r("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",a,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.uploadMessage)+" ")]),r("v-btn",{attrs:{fab:"",href:"https://github.com/Charith47/ocr-summarizer",target:"_blank",color:"secondary",bottom:"",right:"",fixed:""}},[r("v-icon",[t._v(" mdi-github ")])],1)],1)],1)},i=[],o=a("1da1"),s=(a("96cf"),a("d3b7"),a("159b"),a("b0c0"),a("ac1f"),a("1276"),a("498a"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("466d"),a("bc3a")),l=a.n(s),c="http://127.0.0.1:5000/api",d={data:function(){return{parsedFiles:[],extractedText:"",summarizedText:"",contributors:[{name:"C.W Dissanayake",sid:"D/BCE/20/0009"},{name:"T.W.L.A Perera",sid:"D/BCS/20/0010"},{name:"S.P Gayanika",sid:"D/BCE/20/0007"},{name:"R.W.B.M.P Nishadi",sid:"D/BSE/20/0018"},{name:"G.M.T Amarasinghe",sid:"D/BCS/20/00012"}],snackbar:!1,uploadMessage:"Your files are being processed",noFilesError:"",parseError:"",apiError:"",noTextError:"",noContentToDownload:""}},methods:{clearFiles:function(){this.parsedFiles=[]},parseFiles:function(t){var e=this;this.noFilesError="",this.parseError="",t.forEach(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.toBase64(a);case 3:r=t.sent,e.parsedFiles.push({name:a.name,image:r.split(",")[1]}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.parseError="".concat(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())},uploadFiles:function(){var t=this;this.noTextError="",this.apiError="",this.noContentToDownload="",0!==this.parsedFiles.length?(this.snackbar=!0,l.a.post("".concat(c,"/ocr"),this.parsedFiles).then((function(e){e.data.forEach((function(e){t.extractedText+="".concat(e.text,"\n")}))})).catch((function(e){t.apiError="".concat(e.message,". Please try again later")}))):this.noFilesError="No files are selected. Please select some images"},toBase64:function(t){return new Promise((function(e,a){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(t){return a(t)}}))},getSummary:function(){var t=this;""!==this.extractedText.trim()?l.a.post("".concat(c,"/summary"),{text:this.extractedText}).then((function(e){t.summarizedText=e.data.summary})).catch((function(e){t.apiError="".concat(e.message,". Please try again later")})):this.noTextError="Error. No text to summarize"},downloadText:function(){if(""!==this.extractedText.trim()||""!==this.summarizedText.trim()){if(""!=this.extractedText.trim()){var t=new Blob([this.extractedText],{type:"text/plain"}),e=document.createElement("a");e.href=window.URL.createObjectURL(t),e.download="extracted.txt",e.click()}if(""!=this.summarizedText.trim()){var a=new Blob([this.summarizedText],{type:"text/plain"}),r=document.createElement("a");r.href=window.URL.createObjectURL(a),r.download="summarized.txt",r.click()}}else this.noContentToDownload="No text to download. Please upload some files first."},clearAll:function(){this.$refs.fileupload.reset(),this.parsedFiles=[],this.extractedText="",this.summarizedText=""}},computed:{wordCount:function(){return function(t){var e;return(null===(e=t.match(/\s+/g))||void 0===e?void 0:e.length)||0}}}},u=d,m=a("2877"),p=a("6544"),v=a.n(p),g=a("0798"),h=a("7496"),f=a("40dc"),x=a("8336"),C=a("62ad"),A=a("a523"),b=a("ce7e"),w=a("23a7"),y=a("132d"),Z=a("8860"),T=a("da13"),I=a("5d23"),k=a("f6c4"),E=a("0fd9"),V=a("8dd9"),S=a("2db4"),F=a("a844"),B=Object(m["a"])(u,n,i,!1,null,null,null),G=B.exports;v()(B,{VAlert:g["a"],VApp:h["a"],VAppBar:f["a"],VBtn:x["a"],VCol:C["a"],VContainer:A["a"],VDivider:b["a"],VFileInput:w["a"],VIcon:y["a"],VList:Z["a"],VListItem:T["a"],VListItemContent:I["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VMain:k["a"],VRow:E["a"],VSheet:V["a"],VSnackbar:S["a"],VTextarea:F["a"]});var j=a("2f62");r["a"].use(j["a"]);var z=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=a("f309");r["a"].use(O["a"]);var R=new O["a"]({});r["a"].config.productionTip=!1,new r["a"]({store:z,vuetify:R,render:function(t){return t(G)}}).$mount("#app")},7543:function(t,e,a){t.exports=a.p+"img/logo-main.89c83bf8.svg"}});
//# sourceMappingURL=app.0edb12f7.js.map