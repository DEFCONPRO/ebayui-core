import{r as H,b as J,p as K,g as d,i as L,d as M,t as N}from"./registry-BhN9Jjhp.js";import{_ as Q,a as q,b as z,c as E}from"./index-p8cSE8Jf.js";import{_ as o}from"./render-tag-_0PNNh6Y.js";import{_ as e}from"./dynamic-tag-hjM4Clfs.js";import{_ as F}from"./index-Wb8BxOUF.js";class G extends Marko.Component{}const x="xQ56JjaK",u=N(x);H.r(x,()=>u);const f=G;u._=J(function(k,p,l,r,O,P){const{status:t,a11yText:_,a11yIconText:c,icon:T,iconClass:m,class:g,root:C,headerRoot:v,a11yRoleDescription:I,prefixClass:s,title:n,footer:y,type:h,mainRoot:R,noA11yLabel:V,a11yDismissText:b,educationIcon:w,prominent:A,cta:$,...B}=k;e(p,C||"section",()=>({"aria-labelledby":!V&&r.elId("status"),"aria-roledescription":I,class:[s,g,t==="education"&&A&&`${s}--education`],...K(B)}),a=>{T!=="none"&&e(a,v||"div",()=>({class:`${s}__header`,id:l.elId("status")}),i=>{t==="confirmation"||t==="celebration"?o(Q,{a11yText:c||_,a11yVariant:"label",class:m},i,l,"2"):t==="attention"?o(q,{a11yVariant:"label",a11yText:c||_,class:m},i,l,"3"):t==="information"?o(z,{a11yVariant:"label",a11yText:c||_,class:m},i,l,"4"):t==="education"&&h==="section"&&e(i,w||E,()=>({"a11y-variant":"label","a11y-text":c||_,class:m}),null,null,null,l,"5")},null,null,l,"1"),e(a,R||"div",()=>({class:`${s}__main`}),i=>{n&&e(i,n.as||"h2",()=>({...n,class:[`${s}__title`,n.class]}),j=>{e(j,n,null,null,null,null,l,"8")},null,null,l,"7"),e(i,k.renderBody,null,null,null,null,l,"9")},null,null,l,"6"),$&&(a.be("p",{class:d(`${s}__cta`)},"10",r,null,1),a.be("a",L($),"11",r,null,4),e(a,$,null,null,null,null,l,"12"),a.ee(),a.ee()),y&&!b&&(a.be("div",{class:d(`${s}__footer`)},"13",r,null,1),e(a,y,null,null,null,null,l,"14"),a.ee()),!y&&b&&(a.be("div",{class:d(`${s}__footer`)},"15",r,null,1),a.be("button",{"aria-label":`${b}`,class:d(["fake-link",`${s}__dismiss`])},"16",r,null,0,{onclick:l.d("click","emit",!1,["dismiss"]),onkeydown:l.d("keydown","emit",!1,["dismiss"])}),o(F,{class:"icon icon--close-16"},a,l,"17"),a.ee(),a.ee())},null,null,l,"0")},{t:x},f);u.Component=M(f,u._);export{u as _};