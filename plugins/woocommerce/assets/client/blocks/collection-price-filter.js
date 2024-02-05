(()=>{var e,t={6844:(e,t,r)=>{"use strict";r.r(t);var n=r(9196);const o=window.wp.blocks;var i=r(2911),a=r(1231);const c=window.wc.wcSettings;var l,s,u,p,m,d,g,_,E,f;const w=(0,c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),y=(w.pluginUrl,w.pluginUrl,w.buildPhase),b=(null===(l=c.STORE_PAGES.shop)||void 0===l||l.permalink,null===(s=c.STORE_PAGES.checkout)||void 0===s||s.id,null===(u=c.STORE_PAGES.checkout)||void 0===u||u.permalink,null===(p=c.STORE_PAGES.privacy)||void 0===p||p.permalink,null===(m=c.STORE_PAGES.privacy)||void 0===m||m.title,null===(d=c.STORE_PAGES.terms)||void 0===d||d.permalink,null===(g=c.STORE_PAGES.terms)||void 0===g||g.title,null===(_=c.STORE_PAGES.cart)||void 0===_||_.id,null===(E=c.STORE_PAGES.cart)||void 0===E||E.permalink,null!==(f=c.STORE_PAGES.myaccount)&&void 0!==f&&f.permalink?c.STORE_PAGES.myaccount.permalink:(0,c.getSetting)("wpLoginUrl","/wp-login.php"),(0,c.getSetting)("localPickupEnabled",!1),(0,c.getSetting)("countries",{})),v=(0,c.getSetting)("countryData",{}),S=(Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowBilling)).map((e=>[e,b[e]||""]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowBilling)).map((e=>[e,v[e].states||[]]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowShipping)).map((e=>[e,b[e]||""]))),Object.fromEntries(Object.keys(v).filter((e=>!0===v[e].allowShipping)).map((e=>[e,v[e].states||[]]))),Object.fromEntries(Object.keys(v).map((e=>[e,v[e].locale||[]]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],additional:[]});(0,c.getSetting)("addressFieldsLocations",S).address,(0,c.getSetting)("addressFieldsLocations",S).contact,(0,c.getSetting)("addressFieldsLocations",S).additional,r(3845);const h=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"woocommerce/collection-price-filter","version":"1.0.0","title":"Collection Price Filter","description":"Enable customers to filter the product collection by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","apiVersion":2,"ancestor":["woocommerce/collection-filters"],"supports":{"interactivity":true},"usesContext":["collectionData"],"attributes":{"queryParam":{"type":"object","default":{"calculate_price_range":"true"}},"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false}}}'),O=window.wp.blockEditor;var x=r(3849),k=r.n(x),P=r(9307),T=r(2600);function C(e,t){return!(e=>null===e)(r=e)&&r instanceof Object&&r.constructor===Object&&t in e;var r}var R=r(4167),j=r(9127),A=r.n(j);function F(e){const t=(0,P.useRef)(e);return A()(e,t.current)||(t.current=e),t.current}const N=window.wc.wcBlocksData,q=window.wp.data,G=(0,P.createContext)("page"),I=()=>(0,P.useContext)(G),M=(G.Provider,e=>{const t=I();e=e||t;const r=(0,q.useSelect)((t=>t(N.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:n}=(0,q.useDispatch)(N.QUERY_STATE_STORE_KEY);return[r,(0,P.useCallback)((t=>{n(e,t)}),[e,n])]}),U=(e,t,r)=>{const n=I();r=r||n;const o=(0,q.useSelect)((n=>n(N.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)),[r,e]),{setQueryValue:i}=(0,q.useDispatch)(N.QUERY_STATE_STORE_KEY);return[o,(0,P.useCallback)((t=>{i(r,e,t)}),[r,e,i])]},Y=({queryAttribute:e,queryPrices:t,queryStock:r,queryRating:n,queryState:o,isEditor:i=!1})=>{let a=I();a=`${a}-collection-data`;const[c]=M(a),[l,s]=U("calculate_attribute_counts",[],a),[u,p]=U("calculate_price_range",null,a),[m,d]=U("calculate_stock_status_counts",null,a),[g,_]=U("calculate_rating_counts",null,a),E=F(e||{}),f=F(t),w=F(r),y=F(n);(0,P.useEffect)((()=>{"object"==typeof E&&Object.keys(E).length&&(l.find((e=>C(E,"taxonomy")&&e.taxonomy===E.taxonomy))||s([...l,E]))}),[E,l,s]),(0,P.useEffect)((()=>{u!==f&&void 0!==f&&p(f)}),[f,p,u]),(0,P.useEffect)((()=>{m!==w&&void 0!==w&&d(w)}),[w,d,m]),(0,P.useEffect)((()=>{g!==y&&void 0!==y&&_(y)}),[y,_,g]);const[b,v]=(0,P.useState)(i),[S]=(0,T.Nr)(b,200);b||v(!0);const h=(0,P.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=(0,R.DY)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(c)),[c]);return(e=>{const{namespace:t,resourceName:r,resourceValues:n=[],query:o={},shouldSelect:i=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const a=(0,P.useRef)({results:[],isLoading:!0}),c=F(o),l=F(n),s=(()=>{const[,e]=(0,P.useState)();return(0,P.useCallback)((t=>{e((()=>{throw t}))}),[])})(),u=(0,q.useSelect)((e=>{if(!i)return null;const n=e(N.COLLECTIONS_STORE_KEY),o=[t,r,c,l],a=n.getCollectionError(...o);if(a){if(!(a instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");s(a)}return{results:n.getCollection(...o),isLoading:!n.hasFinishedResolution("getCollection",o)}}),[t,r,l,c,i]);return null!==u&&(a.current=u),a.current})({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...o,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...h},shouldSelect:S})},B=window.wc.priceFormat,L=e=>"string"==typeof e;function Q(e,t){return("number"==typeof e?e:parseInt(e,10))/10**t.minorUnit}const D=({attributes:e})=>{const{showInputFields:t}=e,{results:r,isLoading:o}=Y({queryPrices:!0,queryState:{},isEditor:!0});if(o)return null;const{minPrice:i,maxPrice:a,formattedMinPrice:c,formattedMaxPrice:l}=function(e){const t=(0,B.getCurrency)({minorUnit:0});if(!C(e,"price_range"))return{minPrice:0,maxPrice:0,minRange:0,maxRange:0,formattedMinPrice:(0,B.formatPrice)(0,t),formattedMaxPrice:(0,B.formatPrice)(0,t)};const r=(0,B.getCurrencyFromPriceResponse)(e.price_range),n=C(e.price_range,"min_price")&&L(e.price_range.min_price)?Q(e.price_range.min_price,r):0,o=C(e.price_range,"max_price")&&L(e.price_range.max_price)?Q(e.price_range.max_price,r):0;return{minPrice:n,maxPrice:o,minRange:n,maxRange:o,formattedMinPrice:(0,B.formatPrice)(n,t),formattedMaxPrice:(0,B.formatPrice)(o,t)}}(r),s=()=>null,u=t?(0,n.createElement)("input",{className:"min",type:"text",value:i,onChange:s}):(0,n.createElement)("span",null,c),p=t?(0,n.createElement)("input",{className:"max",type:"text",value:a,onChange:s}):(0,n.createElement)("span",null,l);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"range"},(0,n.createElement)("div",{className:"range-bar"}),(0,n.createElement)("input",{type:"range",className:"min",min:i,max:a,value:i,onChange:s}),(0,n.createElement)("input",{type:"range",className:"max",min:i,max:a,value:a,onChange:s})),(0,n.createElement)("div",{className:"text"},u,p))};var K=r(5736);const V=window.wp.components,J=({attributes:e,setAttributes:t})=>{const{showInputFields:r,inlineInput:o}=e;return(0,n.createElement)(O.InspectorControls,null,(0,n.createElement)(V.PanelBody,{title:(0,K.__)("Settings","woocommerce")},(0,n.createElement)(V.__experimentalToggleGroupControl,{label:(0,K.__)("Price Slider","woocommerce"),value:r?"editable":"text",onChange:e=>t({showInputFields:"editable"===e}),className:"wc-block-price-filter__price-range-toggle"},(0,n.createElement)(V.__experimentalToggleGroupControlOption,{value:"editable",label:(0,K.__)("Editable","woocommerce")}),(0,n.createElement)(V.__experimentalToggleGroupControlOption,{value:"text",label:(0,K.__)("Text","woocommerce")})),r&&(0,n.createElement)(V.ToggleControl,{label:(0,K.__)("Inline input fields","woocommerce"),checked:o,onChange:()=>t({inlineInput:!o}),help:(0,K.__)("Show input fields inline with the slider.","woocommerce")})))};y>2&&(0,o.registerBlockType)(h,{icon:{src:(0,n.createElement)(i.Z,{icon:a.Z,className:"wc-block-editor-components-block-icon"})},edit:e=>{const{showInputFields:t,inlineInput:r}=e.attributes,o=(0,O.useBlockProps)({className:k()({"inline-input":r&&t})});return(0,n.createElement)("div",{...o},(0,n.createElement)(J,{...e}),(0,n.createElement)(D,{...e}))}})},3845:()=>{},9196:e=>{"use strict";e.exports=window.React},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},444:e=>{"use strict";e.exports=window.wp.primitives}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,o,i]=e[u],c=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=5700,(()=>{var e={5700:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,c,l]=r,s=0;if(a.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var u=l(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[2869],(()=>n(6844)));o=n.O(o),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["collection-price-filter"]=o})();