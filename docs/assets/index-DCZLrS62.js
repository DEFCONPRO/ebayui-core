import{t as j,r as z,b as G,e as J,p as K,f as c,d as Q}from"./registry-DcejNBCz.js";/* empty css               */import{_ as r}from"./dynamic-tag-CH7Ufq3Q.js";import{_ as V}from"./index-DJ8iNkD3.js";import{_ as C}from"./render-tag-BBOJ9dEX.js";import{i as W,r as X}from"./attr-tag-DphMQldM.js";import{C as Y}from"./index-JpC-2l-B.js";import{s as Z}from"./index-D7B88Psz.js";import{a as D}from"./index-eGtaP7gF.js";class ee extends Marko.Component{handleExpand(){this.getComponent("options").elementScroll(),this.emit("expand")}handleCollapse(){this.getEl("button").focus(),this.emit("collapse")}handleListboxChange(e){this.input.collapseOnSelect&&(this._expander.expanded=!1);const t=e.index;this.state.selectedIndex=t,this.emit("change",e)}handleListboxEscape(){this._expander.expanded=!1}onCreate(){this.state={selectedIndex:-1}}onInput(e){const{state:t}=this;e.options=e.options||[],t.selectedIndex=Math.max(-1,e.options.findIndex(a=>a.selected)),e.collapseOnSelect=e.collapseOnSelect!==!1}onMount(){this._setupMakeup()}onUpdate(){this._setupMakeup()}onRender(){typeof window<"u"&&this._cleanupMakeup()}onDestroy(){this._cleanupMakeup()}_setupMakeup(){const{input:e}=this;if(e.options.length&&!e.disabled){const t=this.getEl("container");this._expander=new Z(t,{alwaysDoFocusManagement:!0,autoCollapse:!0,expandOnClick:!0,simulateSpacebarClick:!0,contentSelector:".listbox-button__listbox",hostSelector:".listbox-button__control",expandedClass:"listbox-button--expanded",focusManagement:"content"}),D(this.getEl("button"))}}_cleanupMakeup(){this._expander&&(this._expander.destroy(),this._expander=void 0)}}const x="M/qwFgIl",n=j(x),ce=n;z.r(x,()=>n);const I=ee;n._=G(function(u,e,t,a,v,te){const{name:M,class:S,borderless:E,disabled:L,fluid:_,invalid:w,buttonName:T,options:m,truncate:f,prefixLabel:h,prefixId:g,unselectedText:$="-",floatingLabel:d,collapseOnSelect:ae,listSelection:O,variant:F,hasError:B,split:y="none",a11yIconPrefixText:N,ariaDescribedby:q,...A}=u;var s=m[v.selectedIndex],i=s&&s.text,b=s&&s.icon,k=b&&s&&s.text,o=g&&a.getElId("label"),H=i||$,P=F==="form";function p(l,{alwaysDisplay:U}){b?(l.be("span",{id:o,class:"btn__text"},"1",a,null,1),r(l,b,null,null,null,null,t,"2"),l.ee()):(i||U)&&(l.be("span",{id:o,class:"btn__text"},"3",a,null,1),l.t(H,a),l.ee())}const R=f&&!_?"div":"span";e.be(R,J(K(A),{class:c(["listbox-button",S,_&&"listbox-button--fluid",P&&"listbox-button--form",B&&"listbox-button--error"])}),"@container",a,null,4,{"onexpander-expand":t.d("expander-expand","handleExpand",!1),"onexpander-collapse":t.d("expander-collapse","handleCollapse",!1)}),e.be("button",{class:c(["listbox-button__control","btn",y!=="none"&&`btn--split-${y}`,E?"btn--borderless":"btn--form",f&&"btn--truncated",d&&"btn--floating-label"]),"aria-label":k&&`${N}: ${k}`,value:i,type:"button",disabled:L,name:T,"aria-haspopup":"listbox","aria-describedby":q,"aria-labelledby":o&&`${g} ${o}`,"aria-invalid":w&&"true"},"@button",a,null,0),e.be("span",{class:"btn__cell"},"4",a,null,1),d?(e.be("span",{class:c(["btn__floating-label","btn__floating-label--animate",!i&&"btn__floating-label--inline"])},"5",a,null,1),e.t(d,a),e.ee(),r(e,p,null,null,null,null,t,"6")):h?(e.be("span",{class:"btn__label"},"7",a,null,1),e.t(h,a),e.ee(),r(e,p,()=>({"always-display":!0}),null,null,null,t,"8")):r(e,p,()=>({"always-display":!0}),null,null,null,t,"9"),C(V,{},e,t,"10"),e.ee(),e.ee(),C(Y,W(()=>{for(const l of m||[])X("options",{...l,selected:s===l})},{class:"listbox-button__listbox",name:M,tabindex:-1,listSelection:O}),e,t,"@options",[["change","handleListboxChange",!1],["escape","handleListboxEscape",!1]]),e.ee()},{t:x},I);n.Component=Q(I,n._);export{ce as _};