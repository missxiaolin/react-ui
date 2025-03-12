"use strict";(self.webpackChunk_l_website=self.webpackChunk_l_website||[]).push([[506],{70506:function(Qn,J,g){g.r(J),g.d(J,{Aside:function(){return Ln},Col:function(){return En},ConfigProvider:function(){return de},Container:function(){return $n},Divider:function(){return on},Flex:function(){return gn},Footer:function(){return Dn},Header:function(){return Mn},Main:function(){return Hn},Row:function(){return In},Space:function(){return jn},createFromIconFontCN:function(){return nn},theme:function(){return un}});var Le=g(73193),l=g.n(Le),De=g(84176),k=g.n(De),x=g(44194),Me=g(10154),P=g.n(Me),He=g(51865),b=g.n(He),Ve=g(23779),Ze=(0,x.createContext)({}),K=Ze,We=g(10780),Ge=g(70716),q=g(6564),Ue=`
.l-icon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.l-icon > * {
  line-height: 1;
}

.l-icon svg {
  display: inline-block;
}

.l-icon::before {
  display: none;
}

.l-icon .l-icon-icon {
  display: block;
}

.l-icon[tabindex] {
  cursor: pointer;
}

.l-icon-spin::before,
.l-icon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,W="l",Ye="l-icon",_={},G=function(n,t){return t||(n?"".concat(W,"-").concat(n):W)},ee=(0,x.createContext)({getPrefixCls:G,iconPrefixCls:Ye});function N(e){var n=x.useContext(ee),t=n.getPrefixCls,r=t===void 0?G:t,a=n.direction,i=n.getPopupContainer,o=n[e];return l()(l()({},o),{},{classNames:_,styles:_,getPrefixCls:r,direction:a,getPopupContainer:i})}function ne(e,n){(0,We.ZP)(e,"[@l-icons] ".concat(n))}var Xe={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},Qe=function(n){var t=(0,x.useContext)(K),r=t.csp,a=t.prefixCls,i=t.layer,o=Ue;a&&(o=o.replace(/l-icon/g,a)),i&&(o="@layer ".concat(i,` {
`).concat(o,`
}`)),(0,x.useEffect)(function(){var f=n.current,s=(0,Ge.Ay)(f);(0,q.hq)(o,"@l-icons",{prepend:!i,csp:r,attachTo:s})},[])};function Jn(e){return typeof e=="number"?"".concat(e,"px"):e}var d=function(n){var t="",r=N("root"),a=r.getPrefixCls,i=a(n,t);return i},Je=function(n){return n.replace(/[A-Z]/g,function(t){return"-".concat(t.toLowerCase())})},O=function(n){return typeof n=="number"};function Kn(e){return e===void 0}function $(e){return typeof e=="string"}var u=g(31549),Ke=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],te=x.forwardRef(function(e,n){var t=e.className,r=e.component,a=e.viewBox,i=e.spin,o=e.rotate,f=e.tabIndex,s=e.onClick,c=e.children,v=k()(e,Ke),h=x.useRef(null),p=(0,Ve.x1)(h,n);ne(!!(r||c),"Should have `component` prop or `children`."),Qe(h);var m=x.useContext(K),C=m.prefixCls,S=C===void 0?"l-icon":C,y=m.rootClassName,E=b()(y,S,P()({},"".concat(S,"-spin"),!!i&&!!r),t),w=b()(P()({},"".concat(S,"-spin"),!!i)),T=o?{msTransform:"rotate(".concat(o,"deg)"),transform:"rotate(".concat(o,"deg)")}:void 0,B=l()(l()({},Xe),{},{className:w,style:T,viewBox:a});a||delete B.viewBox;var U=function(){return r?(0,u.jsx)(r,l()(l()({},B),{},{children:c})):c?(ne(!!a||x.Children.count(c)===1&&x.isValidElement(c)&&x.Children.only(c).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),(0,u.jsx)("svg",l()(l()({},B),{},{viewBox:a,children:c}))):null},I=f;return I===void 0&&s&&(I=-1),(0,u.jsx)("span",l()(l()({role:"img"},v),{},{ref:p,tabIndex:I,onClick:s,className:E,children:U()}))});te.displayName="AntdIcon";var qe=te,_e=["type","children"],re=new Set;function en(e){return!!(typeof e=="string"&&e.length&&!re.has(e))}function L(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=e[n];if(en(t)){var r=document.createElement("script");r.setAttribute("src",t),r.setAttribute("data-namespace",t),e.length>n+1&&(r.onload=function(){L(e,n+1)},r.onerror=function(){L(e,n+1)}),re.add(t),document.body.appendChild(r)}}function nn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.scriptUrl,t=e.extraCommonProps,r=t===void 0?{}:t;n&&typeof document!="undefined"&&typeof window!="undefined"&&typeof document.createElement=="function"&&(Array.isArray(n)?L(n.reverse()):L([n]));var a=x.forwardRef(function(i,o){var f=i.type,s=i.children,c=k()(i,_e),v=null;return i.type&&(v=(0,u.jsx)("use",{xlinkHref:"#".concat(f)})),s&&(v=s),(0,u.jsx)(qe,l()(l()(l()({},r),c),{},{ref:o,children:v}))});return a.displayName="IconFont",a}var tn=g(51598),j=g.n(tn),z=g(38860),ae=function(){return`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    `},ie,rn=z.ZP.div(ie||(ie=j()([`
    `,`;
    position: relative;
    &.`,` {
        display: block;
        height: 1px;
        width: 100%;
        margin: 24px 0;
        border-top: 1px var(--l-border-color-base) var(--l-border-style-base);
    }
    &.`,` {
        display: inline-block;
        width: 1px;
        height: 1em;
        margin: 0 8px;
        vertical-align: middle;
        position: relative;
        border-left: 1px var(--l-border-color-base) var(--l-border-style-base);
    }

    &.`,` {
        border-style: dashed;
    }
    & .`,` {
        position: absolute;
        background-color: var(--l-color-white);
        padding: 0 20px;
        font-weight: 500;
        color: var(--l-text-color-primary);
        font-size: 14px;
    }
    & .`,` {
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .`,` {
        left: 20px;
        transform: translateY(-50%);
    }
    .`,` {
        right: 20px;
        transform: translateY(-50%);
    }
`])),ae(),function(e){return"".concat(d("divider"),"-horizontal")},function(e){return"".concat(d("divider"),"-vertical")},function(e){return"".concat(d("divider"),"-dashed")},function(e){return"".concat(d("divider"),"-inner-text")},function(e){return"".concat(d("divider"),"-inner-text-center")},function(e){return"".concat(d("divider"),"-inner-text-left")},function(e){return"".concat(d("divider"),"-inner-text-right")}),an=["type","orientation","className","rootClassName","children","variant","dashed","style"],oe=function(n){var t=N("divider"),r=t.getPrefixCls,a=t.className,i=t.style,o=n.type,f=o===void 0?"horizontal":o,s=n.orientation,c=s===void 0?"center":s,v=n.className,h=n.rootClassName,p=n.children,m=n.variant,C=m===void 0?"solid":m,S=n.dashed,y=n.style,E=k()(n,an),w=r("divider",""),T=b()(w,a,"".concat(w,"-").concat(f),P()(P()({},"".concat(w,"-").concat(C),C!=="solid"),"".concat(w,"-dashed"),!!S),v,h),B=b()("".concat(w,"-inner-text"),"".concat(w,"-inner-text-").concat(c));return(0,u.jsx)(rn,l()(l()({className:T,style:l()(l()({},i),y)},E),{},{prefix:w,color:"red",role:"separator",children:p&&f!=="vertical"&&(0,u.jsx)("span",{className:B,children:p})}))};oe.displayName="Divider";var on=oe,ln={blue:"#1677FF",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#EB2F96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},cn=l()(l()({},ln),{},{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0}),le=cn,ce=(0,x.createContext)(null),sn=function(){return(0,x.useContext)(ce)||le},qn=function(){var n=useContext(ConfigThemeContext);if(!n)throw new Error("@l/ui: Provider was not found in component tree, make sure you have it in your app");return n},F=function(n,t){var r={};return t.forEach(function(a,i){i===0?r[n]=a:r["".concat(n,"Light-").concat(i)]=a}),r};function dn(){return l()(l()(l()(l()(l()(l()(l()({paddingXxs:"4px",paddingXs:"8px",paddingSm:"12px",padding:"16px",paddingMd:"20px",paddingLg:"24px",paddingXl:"32px",colorWhite:"#fff",colorBlack:"#1c2128",colorFinish:"#409eff",overlayBackgroundColor:"rgba(0, 0, 0, 0.2)",textEllipsisLineHeight:1.6,activeOpacity:.6,textColorPrimary:"#333740",textColorRegular:"#5d626d",textColorSecondary:"#a1a6b2",textColorPlaceholder:"#c0c4cc",borderColorBase:"#e9ecf1",borderColorLight:"#e4e7ed",borderColorLighter:"#ebeef5",borderColorExtraLight:"#f2f6fc",fillColorBase:"#f0f2f5",fillColorLight:"#f5f7fa",fillColorLighter:"#fafafa",fillColorExtraLight:"#fafcff",fillColorDark:"#ebedf0",fillColorDarker:"#e6e8eb",fillColorBlank:"#ffffff",backgroundColorBase:"#f5f6f9",bgColorBase:"#f5f6f9",bgColor:"#f5f7fa",borderWidthBase:"1px",borderStyleBase:"solid",borderColorHover:"#c0c4cc",borderBase:"var(--l-border-width-base) var(--l-border-style-base) var(--l-border-color-base)",borderRadiusBase:"6px",borderRadiusSmall:"3px",borderRadiusRound:"20px",borderRadiusCircle:"100%",boxShadowBase:"0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)",boxShadowLight:"0 2px 12px 0 rgba(0, 0, 0, 0.1)",svgMonochromeGrey:"#dcdde0",fillBase:"var(--l-color-white)",fontSizeExtraLarge:"20px",lineHeightExtraLarge:"28px",fontSizeLarge:"18px",lineHeightLarge:"26px",fontSizeMedium:"16px",lineHeightMedium:"24px",fontSizeBase:"14px",lineHeightBase:"20px",fontSizeSmall:"13px",lineHeightSmall:"19px",fontSizeExtraSmall:"12px",lineHeightExtraSmall:"18px",textUnderline:"underline",fontWeightPrimary:"500",fontLineHeightPrimary:"24px",fontColorDisabledBase:"#bbb",indexNormal:1,indexTop:1e3,indexPopper:2e3,disabledFillBase:"var(--l-background-color-base)",disabledColorBase:"var(--l-text-color-placeholder)",disabledBorderBase:"var(--l-border-color-light)",textColorYellow:"#ffc300",textColorRed:"#ff7329",textColorGreen:"#3edf06",textColorDark:"#1c2128",textColorTips:"#d5dae4",textColorTipsBorder:"#e9ecf1",borderColorPrimary:"#29c1c2",borderColorSuccess:"#21b455",borderColorWarning:"#ff9c00",borderColorDanger:"#f56c6c",borderColorError:"#f56c6c",borderColorInfo:"#b3b5bb",borderColorGary:"#eef0f4",borderColorFinish:"#409eff",borderRadiusMedium:"10px",statusColorPrimary:"#29c1c2",statusColorDanger:"#fb1b1b",statusColorWarning:"#ff9c00",statusColorDefault:"#eef0f4",statusColorFinish:"#a1a6b2",statusColorDark:"#24343b",disabledBgColor:"var(--l-bg-color)",disabledTextColor:"var(--l-text-color-placeholder)",disabledBorderColor:"var(--l-border-color-light)",transitionDuration:"0.3s",transitionDurationFast:"0.2s",transitionFunctionEaseInOutBezier:"cubic-bezier(0.645, 0.045, 0.355, 1)",transitionFunctionFastBezier:"cubic-bezier(0.23, 1, 0.32, 1)",transitionAll:"all var(--l-transition-duration) var(--l-transition-function-ease-in-out-bezier)",transitionFade:"opacity var(--l-transition-duration) var(--l-transition-function-fast-bezier)",transitionMdFade:"transform var(--l-transition-duration) var(--l-transition-function-fast-bezier), opacity var(--l-transition-duration) var(--l-transition-function-fast-bezier)",transitionFadeLinear:"opacity var(--l-transition-duration-fast)linear",transitionBorder:"border-color var(--l-transition-duration-fast) var(--l-transition-function-ease-in-out-bezier)",transitionColor:"color var(--l-transition-duration-fast) var(--l-transition-function-ease-in-out-bezier)"},F("colorPrimary",["#29c1c2","#3ec7c8","#54cdce","#69d4d4","#7fdada","#94e0e1","#a9e6e7","#bfeced","#d4f3f3","#eaf9f9"])),F("success",["#21b455","#64cb88","#90daaa","#bce9cc","#d3f0dd","#e9f8ee"])),F("warning",["#ff9c00","#ffba4d","#ffce80","#ffe1b3","#ffebcc","#fff5e6"])),F("danger",["#f56c6c","#f89898","#fab6b6","#fcd3d3","#fde2e2","#fef0f0"])),F("error",["#f56c6c","#f89898","#fab6b6","#fcd3d3","#fde2e2","#fef0f0"])),F("info",["#b3b5bb","#cacbcf","#d9dadd","#e8e9eb","#f0f0f1","#f7f8f8"])),F("gary",["#eef0f4","#f3f5f7","#f7f8fa","#fafbfc","#fcfcfd","#fdfefe"]))}var _n=`
:root {
}
`,fn=function(n){var t=Object.assign({},n,dn()),r=W,a="";Object.keys(t).forEach(function(i){a+="--".concat(r,"-").concat(Je(i),": ").concat(t[i],`;
`)}),(0,q.hq)(":root{".concat(a,"}"),"@".concat(r,"-root"))};function se(e){var n=e.theme,t=e.children,r=e.inherit,a=r===void 0?!0:r,i=sn(),o=(0,x.useMemo)(function(){return Object.assign(a?i:le,n)},[n,i,a]);return fn(o),(0,u.jsx)(ce.Provider,{value:o,children:t})}se.displayName="@l/ui/ThemeProvider";var de=function(n){var t=n.theme,r=n.children,a=n.tokens;return(0,u.jsx)(ee.Provider,{value:a,children:(0,u.jsx)(se,{theme:t,children:r})})};de.displayName="@l/ui/ConfigProvider";var un={},vn=function(n,t){return{}};function D(e){return["small","middle","large"].includes(e)}var fe,et=null,nt=null,xn=z.ZP.div(fe||(fe=j()([`
    `,`;
    display: flex;
    margin: 0;
    padding: 0;
    &.`,` {
        flex-direction: column;
    }
    &.`,` {
        justify-content: flex-start;
    }
    &.`,` {
        justify-content: center;
    }
    &.`,` {
        justify-content: flex-end;
    }
    &.`,` {
        justify-content: space-between;
    }
    &.`,` {
        justify-content: space-around;
    }
    &.`,` {
        justify-content: space-evenly;
    }
    &.`,` {
        align-items: flex-start;
    }
    &.`,` {
        align-items: center;
    }
    &.`,` {
        align-items: flex-end;
    }
    &.`,` {
        flex-wrap: wrap;
    }
`])),ae(),function(){return"".concat(d("flex"),"-vertical")},function(){return"".concat(d("flex"),"-justify-flex-start")},function(){return"".concat(d("flex"),"-justify-center")},function(){return"".concat(d("flex"),"-justify-flex-end")},function(){return"".concat(d("flex"),"-justify-space-between")},function(){return"".concat(d("flex"),"-justify-space-around")},function(){return"".concat(d("flex"),"-justify-space-evenly")},function(){return"".concat(d("flex"),"-align-flex-start")},function(){return"".concat(d("flex"),"-align-center")},function(){return"".concat(d("flex"),"-align-flex-end")},function(){return"".concat(d("flex"),"-wrap")}),mn=["rootClassName","className","style","flex","gap","children","vertical","component"],ue=x.forwardRef(function(e,n){var t=e.rootClassName,r=e.className,a=e.style,i=e.flex,o=e.gap,f=e.children,s=e.vertical,c=s===void 0?!1:s,v=e.component,h=v===void 0?"div":v,p=k()(e,mn),m=G("flex",""),C=c!=null?c:"",S=b()(r,t,m,vn(m,e),P()(P()(P()(P()(P()({},"".concat(m,"-gap-").concat(o),D(o)),"".concat(m,"-vertical"),C),"".concat(m,"-justify-").concat(p.justify),!!p.justify),"".concat(m,"-align-").concat(p.align),!!p.align),"".concat(m,"-wrap"),!!p.wrap)),y=l()({},a);return i&&(y.flex=i),o&&!D(o)&&(y.gap=o),(0,u.jsx)(xn,{className:S,style:y,children:f})});ue.displayName="Flex";var gn=ue,pn=g(45332),Cn=g.n(pn),hn=g(90741);function tt(e){return["small","middle","large"].includes(e)}function ve(e){return e?typeof e=="number"&&!Number.isNaN(e):!1}var xe=x.createContext({latestIndex:0}),yn=xe.Provider,me,bn=z.ZP.div(me||(me=j()([`
    display: inline-flex;
    &.`,` {
        direction: rtl;
    }
    &.`,` {
        flex-direction: column;
    }
    &.`,` {
        column-gap: var(--l-padding-xs);
    }
    &.`,` {
        column-gap: var(--l-padding-xs);
    }
    &.`,` {
        row-gap: var(--l-padding-xs);
    }
    &.`,` {
        column-gap: var(--l-padding-md);
    }
    &.`,` {
        row-gap: var(--l-padding-md);
    }
    &.`,` {
        column-gap: var(--l-padding-lg);
    }
    &.`,` {
        row-gap: var(--l-padding-lg);
    }
    &.`,` {
        align-items: center;
    }
    &.`,` {
        align-items: flex-start;
    }
    &.`,` {
        align-items: flex-end;
    }
    &.`,` {
        align-items: baseline;
    }
`])),function(){return"".concat(d("space"),"-rtl")},function(){return"".concat(d("space"),"-vertical")},function(){return"".concat(d("space"),"-gap-col-small")},function(){return"".concat(d("space"),"-gap-col-small")},function(){return"".concat(d("space"),"-gap-row-small")},function(){return"".concat(d("space"),"-gap-col-middle")},function(){return"".concat(d("space"),"-gap-row-middle")},function(){return"".concat(d("space"),"-gap-col-large")},function(){return"".concat(d("space"),"-gap-row-large")},function(){return"".concat(d("space"),"-align-center")},function(){return"".concat(d("space"),"-align-start")},function(){return"".concat(d("space"),"-align-end")},function(){return"".concat(d("space"),"-align-baseline")}),Sn=function(n){var t=n.className,r=n.index,a=n.children,i=n.split,o=n.style,f=x.useContext(xe),s=f.latestIndex;return a==null?null:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:t,style:o,children:a}),r<s&&i&&(0,u.jsx)("span",{className:"".concat(t,"-split"),children:i})]})},Pn=Sn,wn=["size","align","className","rootClassName","children","direction","split","style","wrap","classNames","styles"],Nn=x.forwardRef(function(e,n){var t,r=N("space"),a=r.getPrefixCls,i=r.size,o=r.className,f=r.style,s=r.classNames,c=r.styles,v=e.size,h=v===void 0?i!=null?i:"small":v,p=e.align,m=e.className,C=e.rootClassName,S=e.children,y=e.direction,E=y===void 0?"horizontal":y,w=e.split,T=e.style,B=e.wrap,U=B===void 0?!1:B,I=e.classNames,M=e.styles,rt=k()(e,wn),A=a("space"),Vn=Array.isArray(h)?h:[h,h],Ae=Cn()(Vn,2),H=Ae[0],V=Ae[1],Re=p===void 0&&E==="horizontal"?"center":p,ke=D(V),Te=D(H),Zn=ve(H),Wn=ve(V),Oe=(0,hn.Z)(S,{keepEmpty:!0}),Gn=b()(A,o,"".concat(A,"-").concat(E),P()(P()(P()({},"".concat(A,"-align-").concat(Re),Re),"".concat(A,"-gap-row-").concat(V),ke),"".concat(A,"-gap-col-").concat(H),Te),m,C),$e=b()("".concat(A,"-item"),(t=I==null?void 0:I.item)!==null&&t!==void 0?t:s.item),Y=0,Un=Oe.map(function(R,X){var Q;R!=null&&(Y=X);var Xn=(R==null?void 0:R.key)||"".concat($e,"-").concat(X);return(0,u.jsx)(Pn,{className:$e,index:X,split:w,style:(Q=M==null?void 0:M.item)!==null&&Q!==void 0?Q:c.item,children:R},Xn)}),Yn=x.useMemo(function(){return{latestIndex:Y}},[Y]);if(Oe.length===0)return null;var Z={};return U&&(Z.flexWrap="wrap"),!Te&&Zn&&(Z.columnGap=H),!ke&&Wn&&(Z.rowGap=V),(0,u.jsx)(bn,{ref:n,className:Gn,style:l()(l()(l()({},Z),f),T),children:(0,u.jsx)(yn,{value:Yn,children:Un})})}),ge=Nn;ge.displayName="Space";var jn=ge,pe,Ce,zn=z.ZP.div(pe||(pe=j()([`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    width: 100%;
    &.l-flex-1 {
        flex: 1;
    }
    &.is-flex-column {
        flex-direction: column;
    }
    @media screen and (max-width: 768px) {
        width: 100% !important;
        flex-direction: column;
    }
`]))),Bn=z.ZP.div(Ce||(Ce=j()([`
    --l-col-gutter-width: 6px;
    --l-rows-grid: 5;
    --l-col-flex: 1;
    --l-col-label-width: 70px; // TODO: \u52A8\u6001\u8BA1\u7B97
    display: flex;
    position: relative;
    align-items: baseline;
    margin: var(--l-col-gutter-width);
    position: relative;
    width: calc(((100% / var(--l-rows-grid)) * var(--l-col-flex)) - (var(--l-col-gutter-width) * 2));
    @media screen and (max-width: 1024px) {
        width: 50%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 568px) {
        &.is-col-wap-label-column {
            flex-direction: column;
        }
    }
`]))),he=x.createContext({gutter:"",cols:"",grid:!1,vertical:!1}),Fn=he.Provider,ye=function(n){var t=N("row"),r=t.getPrefixCls,a=n.gutter,i=a===void 0?"":a,o=n.grid,f=o===void 0?!1:o,s=n.vertical,c=s===void 0?!1:s,v=n.cols,h=n.children,p=n.style,m=x.useMemo(function(){return{gutter:i,grid:f,vertical:c,cols:v}},[i,f,c,v]),C=r("row"),S=b()(C,{"is-flex-column":c});return(0,u.jsx)(zn,{className:S,style:p,children:(0,u.jsx)(Fn,{value:m,children:h})})};ye.displayName="Row";var In=ye,be=function(n){var t=n.flex,r=t===void 0?"":t,a=n.children,i=n.style,o=N("col"),f=o.getPrefixCls,s=x.useContext(he),c=f("col"),v=s.cols||0,h=b()(c,P()({"flex-1":!v},"".concat(c,"-width-").concat(v),v)),p=s.cols&&Number(s.cols),m=r&&Number(r)||0,C=s.gutter;(O(C)||$(C)&&!C.endsWith("px"))&&(C="".concat(C,"px"));var S=p>=m?m:p-(m-1),y={};return p&&(y["--l-rows-grid"]=p),m&&(y["--l-col-flex"]=m?S<=0?1:S:1),C&&C.length>2&&(y["--l-col-gutter-width"]=C),(0,u.jsx)(Bn,{className:h,style:l()(l()({},i),y),children:a})};be.displayName="Col";var En=be,Se,Pe,we,Ne,je,An=z.ZP.div(Se||(Se=j()([`
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    &.is-vertical {
        flex-direction: column;
    }
`]))),Rn=z.ZP.div(Pe||(Pe=j()([`
    box-sizing: border-box;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
`]))),kn=z.ZP.div(we||(we=j()([`
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
`]))),Tn=z.ZP.div(Ne||(Ne=j()([`
    padding: var(--l-footer-padding);
    box-sizing: border-box;
    flex-shrink: 0;
    height: var(--l-footer-height);
`]))),On=z.ZP.div(je||(je=j()([`
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
`]))),ze=function(n){var t=N("container"),r=t.getPrefixCls,a=n.children,i=n.style,o=n.direction,f=o===void 0?"":o,s=r("container",""),c=function(){return f==="horizontal"?!1:!!(f==="vertical"||a)},v=b()(s,{"is-vertical":c()});return(0,u.jsx)(An,{className:v,style:i,children:a})};ze.displayName="Container";var $n=ze,Be=function(n){var t=N("aside"),r=t.getPrefixCls,a=n.width,i=a===void 0?200:a,o=n.style,f=n.children,s=r("aside"),c=b()(s),v={};return O(i)&&(v.width="".concat(i,"px")),$(i)&&(v.width=i),(0,u.jsx)(On,{className:c,style:l()(l()({},o),v),children:f})};Be.displayName="Aside";var Ln=Be,Fe=function(n){var t=N("footer"),r=t.getPrefixCls,a=n.height,i=n.style,o=n.children,f=r("footer"),s=b()(f),c={};return O(a)&&(c.height="".concat(a,"px")),$(a)&&(c.height=a),(0,u.jsx)(Tn,{className:s,style:l()(l()({},i),c),children:o})};Fe.displayName="Footer";var Dn=Fe,Ie=function(n){var t=N("header"),r=t.getPrefixCls,a=n.height,i=n.style,o=n.children,f=r("header"),s=b()(f),c={};return O(a)&&(c.height="".concat(a,"px")),$(a)&&(c.height=a),(0,u.jsx)(Rn,{className:s,style:l()(l()({},c),i),children:o})};Ie.displayName="Header";var Mn=Ie,Ee=function(n){var t=N("main"),r=t.getPrefixCls,a=n.style,i=n.children,o=r("main"),f=b()(o);return(0,u.jsx)(kn,{className:f,style:a,children:i})};Ee.displayName="Main";var Hn=Ee}}]);
