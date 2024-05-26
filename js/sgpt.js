(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const h="todorandomkey",v=t=>{const i=e=>e.split("").map(a=>a.charCodeAt(0)),o=e=>("0"+Number(e).toString(16)).substr(-2),r=e=>i(t).reduce((a,n)=>a^n,e);return e=>e.split("").map(i).map(r).map(o).join("")},S=t=>{const i=r=>r.split("").map(e=>e.charCodeAt(0)),o=r=>i(t).reduce((e,a)=>e^a,r);return r=>{var e;return((e=r.match(/.{1,2}/g))==null?void 0:e.map(a=>parseInt(a,16)).map(o).map(a=>String.fromCharCode(a)).join(""))||""}};function N(t,i=!1){let o="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";i&&(r="1234567890");for(var e=r.length,a=0;a<t;a++)o+=r.charAt(Math.floor(Math.random()*e));return o}function E(t){for(var i=t+"=",o=document.cookie.split(";"),r=0;r<o.length;r++){for(var e=o[r];e.charAt(0)==" ";)e=e.substring(1,e.length);if(e.indexOf(i)==0)return e.substring(i.length,e.length)}return null}function A(t,i,o){var r="",e=new Date;o||(o=1e3),e.setTime(e.getTime()+o*60*1e3),r="; expires="+e.toUTCString(),document.cookie=t+"="+(i||"")+r+"; path=/"}function U(t,i=!1){var e;const o=window;if((e=o==null?void 0:o._shareustag)!=null&&e.backfillSetup&&!i)return;const r=document.getElementById(t);if(r!=null&&r.parentNode){const a=r.parentElement;if(E("shrs_ab")==="false"||E("user_ip")==="IN"){M(t);return}if(setTimeout(()=>{if(a.offsetHeight<90){if(E("shrs_bf")==="false"){a.style.display="none";return}a.replaceChild(document.createRange().createContextualFragment(`
        <a target="_blank" href="https://bit.ly/44JmOtJ">
        <img style="width:300px;height:250px" src="https://i.ibb.co/YBctBBV/Backfillshareus-min.jpg" alt="Backfillshareus-min" border="0">
            </a>
          `),a.querySelector(".adsterra-ad"))}},3e3),r.parentElement.offsetWidth>700){r.parentNode.replaceChild(document.createRange().createContextualFragment(Y),r);return}r.parentNode.replaceChild(document.createRange().createContextualFragment(J),r);return}}function M(t){const i=document.getElementById(t),o=i.parentElement,r=N(10);let e=X;e=e.replace(/adunit_id/g,r),o.replaceChild(document.createRange().createContextualFragment(e),i);let a=[[300,250],[336,280]];o.offsetWidth>700&&(a=[[728,90]]);const n=window.googletag||{cmd:[]};n.cmd.push(function(){const s=n.defineSlot("/22447375539/8630/8630_300x250",a,""+r).addService(n.pubads()).setTargeting("pos","gamezopDesktopSideHome").setTargeting("retry","1").setTargeting("gzp_enable_hb",!0).setTargeting("productVersion","gzp-play").setTargeting("apsEnabled",!0).setTargeting("prebidEnabled","true").setTargeting("page-lang","en");n.pubads().addEventListener("slotRenderEnded",function(l){if(l.slot===s&&l.isEmpty)try{if(E("shrs_bf")==="false"){o.style.display="none";return}document.getElementById(r).innerHTML=`
              <a target="_blank" href="https://bit.ly/44JmOtJ">
              <img style="width:300px;height:250px" src="https://i.ibb.co/YBctBBV/Backfillshareus-min.jpg" alt="Backfillshareus-min" border="0">
                  </a>
              `}catch(c){console.log(c)}}),n.enableServices(),n.pubads().set("page_url","https://8630.play.gamezop.com"),n.display(""+r)})}const X=`
<div style="min-width:300px;width:fit-content" id="adunit_id">
</div>`,J=`
<div class="adsterra-ad">
<script type="text/javascript">
	atOptions = {
		'key' : '1e49c3eb63c140756c2e2ca831a24c9a',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
<\/script>
<script type="text/javascript" src="//injectpillowdearest.com/1e49c3eb63c140756c2e2ca831a24c9a/invoke.js"><\/script>
</div>
`,Y=`
<div class="adsterra-ad">
<script type="text/javascript">
	atOptions = {
		'key' : '2841f476e75826b7d0885616c5c0a4cf',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
<\/script>
<script type="text/javascript" src="//injectpillowdearest.com/2841f476e75826b7d0885616c5c0a4cf/invoke.js"><\/script>
</div>
`;function k(){try{let i=function(){var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/Arlina-Design/quasar@master/arlinablock.js",document.body.appendChild(e)};const o=window._shareustag;if(o.antiAdblockEnabled)return;o.antiAdblockEnabled=!0,window._shareustag=o;var t=document.createElement("style");t.type="text/css",t.innerHTML=`
    @keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}100%{opacity:1;transform:translateY(0)}}
    @keyframes rubberBand{from{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,0.75,1)}40%{transform:scale3d(0.75,1.25,1)}50%{transform:scale3d(1.15,0.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scale3d(1,1,1)}}
    /* Say Hi to Adblock */
    #arlinablock{background:rgba(0,0,0,0.65);position:fixed;margin:auto;left:0;right:0;top:0;bottom:0;overflow:auto;z-index:999999;animation:fadeInDown 1s}
    #arlinablock .header{margin:0 0 15px 0}
    #arlinablock .inner{background:#e3482d;color:#fff;box-shadow:0 5px 20px rgba(0,0,0,0.1);text-align:center;width:600px;padding:40px;border-radius:5px;margin:7% auto 2% auto;animation:rubberBand 1s}
    #arlinablock button{padding:10px 20px;border:0;background:rgba(0,0,0,0.15);color:#fff;margin:20px 5px;cursor:pointer;transition:all .3s}
    #arlinablock button:hover{background:rgba(0,0,0,0.35);color:#fff;outline:none}
    #arlinablock button.active,#arlinablock button:hover.active{background:#fff;color:#222;outline:none}
    #arlinablock .fixblock{background:#fff;text-align:left;color:#000;padding:20px;height:250px;overflow:auto;line-height:30px}
    #arlinablock .fixblock div{display:none}
    #arlinablock .fixblock div.active{display:block}
    #arlinablock ol{margin-left:20px}
    @media(max-width:768px){#arlinablock .inner{width:calc(100% - 20px);margin:10px auto;padding:15px}}
    `,document.head.appendChild(t);const r=window;window.addEventListener?window.addEventListener("load",i,!1):r.attachEvent?r.attachEvent("onload",i):window.onload=i}catch(i){console.log(i)}}const F=S(h),C=v(h),R=F("1408080c0f4653531d0c15520e191a190e0f141d0e19090f52040506531d180f4318411813111d15122315185a1d411d18091215082315185a0c410c1d1b1923090e105a0e410e191a190e0e190e"),$=[""];function W(t,i,o){let{domain_id:r,adunit_id:e,adunit_name:a}=L(t);if($.includes(e))return;$.push(e),a=a.replace(" ",""),a=a.replace(" ",""),a=a.replace(" ",""),a=a.replace(" ",""),a=a.replace(" ",""),a=a.replace(" ",""),a=a.replace(" ","");let n=R;n=n.replace("domain_id",C(r)),n=n.replace("adunit_id",C(e));const s=window.location.href||"null",l=document.referrer||"null";n=n.replace("referrer",C(l)),n=n.replace("page_url",C(s)),document.getElementById(o)||console.log("Element with ID not found."),Q(o,i),fetch(n,{headers:{Origin:"origin"}}).then(d=>{d.ok&&d.text().then(p=>{let u=JSON.parse(F(p));u!=null&&u.result&&(u=u.result),u!=null&&u.enable_anti_adblock&&k(),u!=null&&u.disable_shareus_banner&&A("shrs_bf","false",1e4),u!=null&&u.disable_adsterra_backfill&&A("shrs_ab","false",1e4),u!=null&&u.cc&&A("user_ip",u==null?void 0:u.cc,1e3),V(u,o,i,a)})})}function V(t,i,o,r){var l;try{I()}catch(c){console.log(c)}const e=window;if(!((l=e==null?void 0:e.googletag)!=null&&l.apiReady)){const c=document.createElement("script");c.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js",c.async=!0,document.body.appendChild(c)}const a=`/${t.id}/${t.parent}/${r}`;e.googletag=e.googletag||{cmd:[]};const n=e.googletag,s=G(o,i);n.cmd.push(function(){const c=n.defineSlot(a,s,i).addService(n.pubads());n.pubads().enableLazyLoad({fetchMarginPercent:150,renderMarginPercent:50,mobileScaling:1}),n.pubads().addEventListener("slotRenderEnded",d=>{var p;if(d.slot===c){const u=(p=document.getElementById(i))==null?void 0:p.querySelector(".shrs-loading-container");u&&(u.style.display="none")}}),n.pubads().set("page_url",t.domain),n.enableServices(),n.display(i)})}function Q(t,i){var d,p;const o=document.createElement("style");o.type="text/css",o.innerHTML=_,document.head.appendChild(o);const r=document.getElementById(t);if(!r)return;const e=document.createElement("div");e.classList.add("shr-ads-container");const a=document.createElement("div");a.innerHTML=`
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAUCAYAAAAXxsqQAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT3SURBVHgB7VhbbJVFEP4OSiuKNxQMiOGAAkExaghqvNZqAl7wQUOtRtPTB+9GwfTFGE1jogE06oPGC4koJkITjaY+aFBTX4wYtSIGjXjpOSIR6wXEcKf9ma87m3/O9r+UQ3ih/ZIv/bszO7s7Ozs7e4ARHBYUcGgYI9yFYYRSqXwbItyZJt+1+591HR1zFh+dIDtZOEl4onC3cLOwVxgZnVHCF4V3Cd8TLhT2YxigWJyyutxTuUQ+70+SFzRWrWOPFXInHhROM+1/C9cIHxWWjS6dSQdfJTxBuA3DAO3thf6Ghq5F04pTK/2IirGkcKmE3nmhfh2c86IM/gQXzcTxcA5n+1bhSRjmaGnpebbUUo6ab+nu4v8+YhcIr9Hvn+GO97/C6cJ5cKnhNOFxcI4cQQ68Yy9HfJExHXxqdOhUOn6D8PcUOwXV41FgXv4WbmOScJRwqvBM4X7hWuEOuKivF/6ZYHeb6kwUni/8TedjcYpwhnA83Gn6HoPTE1NXg/AXYSWQ8U6ZK1wPd6dYcNyz4QKL89uIIQbYc4iP/FIdJAs2FXDynXAL9zb4/RicEy1mC7+Ac77X3SJcIuzRfncb/ReEe+Gc8JDqRtr/JtVhZbJC+BeqUxc3dhncfeDxjMq2C4vB3N5W2Y/CU7VtLNzp3RHY/k+4Sv0wgNbWcluppdLnU4HHtcJ9piOdtVx4j/DCYHJAtWPT2CdsM33OEv6R0yfSCXt8nqH3MFzO/9i00WFbgrW8BhepRKdpn2/Gobyi7Xt1zcQrOXNd4A20t0ejJM8+1dz09SfG7kBkLUnpzDLqM+HVSHcsv5+EK0HWm3YeGZ9uVqI6mnhKHggWm+VYzmONLna18AzhIiNnO9PLeJ3rOuOouTU4lmloJ+JAu114o67xO7h0N8nYGHBuU9Pa6xCAhs4Vvir8QRdiF7wd8U6Gjl1o7MxCfHT+14USPUa/0eiPFr6DfMcuV12LL83c7hWWDN81fe9Q/YON2K1G/w04p/I+Ys6tR41gbXoz4p0n31JZmGNtucXSbTPiXDhR2/cjdnb44rsV+Y6dH/Sx4+SlpBu0z8E69pEUm9R5Gi6/J8If02OEE+Buff+CYhQwknjZbNK2GQk2ouD/fiS/wiIzJhfSZ2R5lyXRmyHjQl8X7kkY81fhB6gNTFesLrjxc+ACiNUHT06b2n4pywCFjChG50xUR1Qj4p3q0rasBwIdtwmDI3Yjqi8eD16M3ciP2AswGF7O1JO06Rcp/XpWGXtLTfsUxOmLv33M1nbmcV5QY1WXc201NjqQAjqBF9cV+pd1KPPrN8Kv4MoOm4w/Qu14U/iEfi9TuxyLD5DpqA0rhBfDLZj59mW4GpWO4HueJRlPBmtf1r2sIJq1LyOOtSlP6fWIKx9GKB9JTIXccPqAp/dDuIpjlhl/D3IwD3GNmEYepzrVryVixyG7fArzOJAfsRxrZY49lnhFM++uDF068DLV5Zp2Zugysq/EEDAZLiXwVeMrAv5lUr8P1XmQObJT5XR4+BDwtzzzs03wjCQW6b1mgtyExdpGe61Gn+UYj2g30vNwvfbZEMyb9p4XnhPoczMeh6tSvD7rXlYRMwNdXmLvw13QkdFl+dmIGsBF8BeucRk6zDmno/oXMgvKRqfIuDGM5Mmmjc/FCSnjDBWMyLx5W/Ai4vO6LkfPP62pOwYjGMERhwNiGvBdPwkJewAAAABJRU5ErkJggg==">
<div> Advertisement </div>
 `,a.classList.add("shr-ads-tag"),a.addEventListener("click",()=>{window.open("https://bit.ly/4beUp1m","_blank")});const n=(d=document.getElementById(t))==null?void 0:d.parentElement;setTimeout(()=>{n&&n.offsetHeight<50&&(e.style.display="none")},4e3),e.appendChild(a),(p=r.parentNode)==null||p.insertBefore(e,r),e.appendChild(r);const s=document.getElementById(t);s.innerHTML='<p class="shrs-loading-icon">Ad</p>';const l=G(i,t)[0];s.style.minWidth=l[0]+"px",s.style.minHeight=l[1]+"px";const c=document.body.offsetWidth;if(c<600){e.style.width=c+"px";const u=e.getBoundingClientRect();console.log(u);const j=u.x;e.style.marginLeft="-"+j+"px"}}function T(t){const i=t.split("-");return{provider:i[0],domain_id:i[1],adunit_id:i[2]}}function L(t){const i=t.split("/");return{provider:i[1],domain_id:i[2],adunit_id:i[3],adunit_name:i[4]}}const K=[[300,250],[250,250],[336,280],[360,300],[320,280],[728,90],[468,60],[970,90]];function G(t,i){if(!(t!=null&&t.length)||!i)return t;for(let o=0;o<t.length;o++){const r=t[o];if(typeof r=="string"&&r.toLowerCase()==="responsive")return Z(K,i)}return t}function Z(t,i){const o=document.getElementById(i).parentElement;if(!o)return t;o.style.width="100%";const r=o.offsetWidth+0;if(o.style.width="fit-content",r){const e=[[300,250]];for(let a=0;a<t.length;a++){const n=t[a];n[0]<=r&&e.push(n)}return e}return t}const _=`
.shr-ads-container{
  position: relative;
  width:fit-content;
  height: fit-content;
  display:flex;
  flex-direction:column;
  border:1px solid #dadce0;
  background:#F2F2F2;
  align-items:center;
  padding-bottom:4px;
  border-radius:4px 4px 0px 0px;
}
.shr-ads-tag img{
height:12px
}
.shr-ads-tag{
  width:100%;
  min-width:20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;
  height: 20px;
  z-index:1000;
  font-size:8px;
  background:#F2F2F2;
  color:#555555;
  padding:0px 6px;
  border-radius:4px 4px 0px 0px;
  border-bottom:none;
  whitespace:nowrap;
}
.shr-ads-bottom-tag{
display:flex;
width:100%;
height:11px;
background:white;
}
.shr-ads-bottom-img{
height:100%;
}

*{box-sizing:border-box;}
p{margin:0;padding:0;}
p{line-height:1.7;}
*,:after,:before{box-sizing:border-box;}
p.shrs-loading-icon {
  color:black;
  margin: 0;
  padding: 0;
}
.shrs-loading-icon {
  line-height: 1.7;
}
.shrs-loading-icon {
  border: 1px solid rgba(36, 39, 44, 0.5);
  border-radius: 4px;
  bottom: 0;
  display: flex;
  align-items:center;
  justify-content:center;
  font-size: 10px !important;
  height: 18px;
  left: 0;
  line-height: 1 !important;
  margin-bottom: 5px;
  margin: auto !important;
  padding: 0 6px !important;
  position: absolute;
  right: 0;
  text-indent: unset;
  top: 0;
  width: 26px;
}
.shrs-loading-icon:before {
  animation: spin 2s linear infinite;
  border: 2px solid rgba(36, 39, 44, 0.1);
  border-radius: 50%;
  border-top-color: rgba(36, 39, 44, 0.3);
  content: "";
  height: 50px;
  left: -13px;
  position: absolute;
  top: -17px;
  width: 50px;
}
/*! CSS Used keyframes */
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}`,g=v(h),ee=S(h),y=ee("1408080c0f4653531d0c15520e191a190e0f141d0e19090f52040506");function I(){const t=window;t.googletag=t.googletag||{cmd:[]};const i=t._shareustag||{cmd:[]};(i==null?void 0:i.listeners)!==!0&&(window.addEventListener("blur",function(){window.setTimeout(function(){var r,e;const o=(e=(r=document.activeElement)==null?void 0:r.parentElement)==null?void 0:e.parentElement;if(o!=null&&o.id.includes("shareusadx")){try{document.activeElement.blur()}catch(l){console.log(l)}let{adunit_id:a,domain_id:n,provider:s}=T(o.id);if(n&&a&&s){n=g(n),a=g(a);const l=y+`/google/ads?d=${n}&a=${a}&ac=${g("clicks")}`,c=new XMLHttpRequest;c.open("GET",l,!0),c.setRequestHeader("Content-Type","application/json"),c.send()}}},0)}),i.listeners=!0,t._shareustag=i,t.googletag=t.googletag||{cmd:[]},t.googletag.cmd.push(function(){const o=t.googletag;o.pubads().addEventListener("slotRenderEnded",r=>{const a=r.slot.getSlotElementId();if(!a)return;let{adunit_id:n,domain_id:s,provider:l}=T(a);if(l!=="shareusadx"||r.lineItemId)return;if(s=g(s),n=g(n),r.isEmpty){U(a);return}const c=y+`/adview?d=${s}&a=${n}&ac=${g("impressions")}`,d=new XMLHttpRequest;d.open("GET",c,!0),d.setRequestHeader("Content-Type","application/json"),d.send()}),o.pubads().addEventListener("slotRequested",r=>{const a=r.slot.getSlotElementId();if(!a)return;let{adunit_id:n,domain_id:s,provider:l}=T(a);if(l!=="shareusadx")return;s=g(s),n=g(n);const c=y+`/google/ads?d=${s}&a=${n}&ac=${g("requests")}`,d=new XMLHttpRequest;d.open("GET",c,!0),d.setRequestHeader("Content-Type","application/json"),d.send()}),o.pubads().addEventListener("impressionViewable",r=>{const a=r.slot.getSlotElementId();if(!a)return;let{adunit_id:n,domain_id:s,provider:l}=T(a);if(l!=="shareusadx")return;s=g(s),n=g(n);const c=y+`/activeview?d=${s}&a=${n}&ac=${g("viewable_impressions")}`,d=new XMLHttpRequest;d.open("GET",c,!0),d.setRequestHeader("Content-Type","application/json"),d.send()})}))}const te=S(h),w=v(h);function ne(t){let{adunit_id:i,adunit_name:o,domain_id:r}=L(t);o=o.replace(" ",""),o=o.replace(" ",""),o=o.replace(" ",""),o=o.replace(" ",""),o=o.replace(" ",""),o=o.replace(" ",""),o=o.replace(" ","");let e=R;e=e.replace("domain_id",w(r)),e=e.replace("adunit_id",w(i));const a=window.location.href||"null",n=document.referrer||"null";e=e.replace("referrer",w(n)),e=e.replace("page_url",w(a)),fetch(e,{headers:{Origin:"origin"}}).then(s=>{s.ok&&s.text().then(l=>{const c=JSON.parse(te(l)),d=c.result;d!=null&&d.enable_anti_adblock&&k();const p=c.auto_ads_settings;re(p,d,{adunit_name:o,adunit_id:i,domain_id:r}),oe(p,d,{adunit_name:o,adunit_id:i,domain_id:r})})})}function oe(t,i,{adunit_name:o,adunit_id:r,domain_id:e}){if(!(!(t!=null&&t.left_rail_enabled)&&!(t!=null&&t.right_rail_enabled))){if(t!=null&&t.left_rail_enabled){const a=window;a.googletag=a.googletag||{cmd:[]};const n=a.googletag;n.cmd.push(()=>{var l;const s=(l=n.defineOutOfPageSlot(`/${i.id}/${i.parent}/${o}`,n.enums.OutOfPageFormat.LEFT_SIDE_RAIL))==null?void 0:l.addService(n.pubads());n.pubads().set("page_url",i.domain),n.enableServices(),s&&n.display(s),n.pubads().addEventListener("slotRenderEnded",c=>{c.slot===s&&(c.isEmpty||m({adunit_id:r,domain_id:e,action:"impressions"}))}),n.pubads().addEventListener("slotRequested",c=>{c.slot===s&&m({adunit_id:r,domain_id:e,action:"requests"})}),n.pubads().addEventListener("impressionViewable",c=>{c.slot===s&&m({adunit_id:r,domain_id:e,action:"viewable_impressions"})})})}if(t!=null&&t.right_rail_enabled){const a=window;a.googletag=a.googletag||{cmd:[]};const n=a.googletag;n.cmd.push(()=>{var l;const s=(l=n.defineOutOfPageSlot(`/${i.id}/${i.parent}/${o}`,n.enums.OutOfPageFormat.RIGHT_SIDE_RAIL))==null?void 0:l.addService(n.pubads());n.pubads().set("page_url",i.domain),n.enableServices(),s&&n.display(s),n.pubads().addEventListener("slotRenderEnded",c=>{c.slot===s&&(c.isEmpty||m({adunit_id:r,domain_id:e,action:"impressions"}))}),n.pubads().addEventListener("slotRequested",c=>{c.slot===s&&m({adunit_id:r,domain_id:e,action:"requests"})}),n.pubads().addEventListener("impressionViewable",c=>{c.slot===s&&m({adunit_id:r,domain_id:e,action:"viewable_impressions"})})})}}}function re(t,i,{adunit_name:o,adunit_id:r,domain_id:e}){if(!(!(t!=null&&t.bottom_anchor_enabled)&&!(t!=null&&t.bottom_sticky_enabled))){if(t!=null&&t.bottom_sticky_enabled,t!=null&&t.bottom_anchor_enabled){const a=window;a.googletag=a.googletag||{cmd:[]};const n=a.googletag;n.cmd.push(()=>{const s=n.defineOutOfPageSlot(`/${i.id}/${i.parent}/${o}`,n.enums.OutOfPageFormat.BOTTOM_ANCHOR).addService(n.pubads());n.pubads().set("page_url",i.domain),n.enableServices(),n.display(s),n.pubads().addEventListener("slotRenderEnded",l=>{l.slot===s&&(l.isEmpty||m({adunit_id:r,domain_id:e,action:"impressions"}))}),n.pubads().addEventListener("slotRequested",l=>{l.slot===s&&m({adunit_id:r,domain_id:e,action:"requests"})}),n.pubads().addEventListener("impressionViewable",l=>{l.slot===s&&m({adunit_id:r,domain_id:e,action:"viewable_impressions"})})})}if(t.bottom_sticky_enabled){const a=document.createElement("style");a.type="text/css",a.innerHTML=ae,document.head.appendChild(a);const n=`
    <div class="shrs-bottom-sticky-container">
 <div id="shareusadx-${e}-${r}">
 <script>
     window._shareustag = window._shareustag || {cmd:[]};
    _shareustag.cmd.push(function() {
      var slot1 = _shareustag.defineSlot('/shareusadx/${e}/${r}/shareus_bottom_sticky', [[300,250]],'shareusadx-${e}-${r}');
    });
  <\/script>
</div> 
<div id="bottom-sticky-close-icon">
Close Ad
</div>
    </div>
    `;document.body.appendChild(document.createRange().createContextualFragment(n));const s=document.querySelector("#bottom-sticky-close-icon");s&&s.addEventListener("click",function(){document.querySelector(".shrs-bottom-sticky-container").remove()})}}}function m({adunit_id:t,domain_id:i,action:o}){i=w(i),t=w(t);const r=w(o),e=y+`/google/ads?d=${i}&a=${t}&ac=${r}`,a=new XMLHttpRequest;a.open("GET",e,!0),a.setRequestHeader("Content-Type","application/json"),a.send()}const ae=`
.shrs-bottom-sticky-container{
position:fixed;
bottom:0;
left:50%;
transform:translate(-50%);
z-index:1000;

}
#bottom-sticky-close-icon{
position:absolute;
top:-23px;
right:0;
background-color:#6c38e3;
color:white;
font-size:13px;
border-radius:5px 5px 0 0;
padding:2px 8px;
}
`,q=v(h);function ie(t){let{domain_id:i,adunit_id:o}=L(t),r=R;r=r.replace("domain_id",q(i)),r=r.replace("adunit_id",q(o));const e=window.location.href||"null",a=document.referrer||"null";r=r.replace("referrer",q(a)),r=r.replace("page_url",q(e))}const se=S(h),x=v(h);function ce(t){const{adunit_id:i,adunit_name:o,domain_id:r}=L(t);let e=R;const a=window.location.href||"null",n=document.referrer||"null";e=e.replace("referrer",x(n)),e=e.replace("page_url",x(a)),e=e.replace("domain_id",x(r)),e=e.replace("adunit_id",x(i)),fetch(e,{headers:{Origin:"origin"}}).then(s=>{s.ok&&s.text().then(l=>{const c=JSON.parse(se(l));c!=null&&c.enable_anti_adblock&&k(),le({setup:c,adunit_name:o,adunit_id:i,domain_id:r})})})}function le({adunit_name:t,setup:i,adunit_id:o,domain_id:r}){var s;try{t=t.replace(" ",""),t=t.replace(" ",""),t=t.replace(" ",""),t=t.replace(" ",""),t=t.replace(" ",""),t=t.replace(" ",""),t=t.replace(" ",""),I()}catch{}const e=window;if(!((s=e==null?void 0:e.googletag)!=null&&s.apiReady)){const l=document.createElement("script");l.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js",l.async=!0,document.body.appendChild(l)}const a=`/${i.id}/${i.parent}/${t}`;e.googletag=e.googletag||{cmd:[]};const n=e.googletag;n.cmd.push(function(){const l=n.defineOutOfPageSlot(a,n.enums.OutOfPageFormat.INTERSTITIAL);l.addService(n.pubads()),n.pubads().set("page_url",i.domain),n.enableServices(),n.display(l),n.pubads().addEventListener("slotRenderEnded",c=>{c.slot===l&&H({event:c,eventName:"slotRenderEnded",adunit_id:o,domain_id:r})}),n.pubads().addEventListener("slotRequested",c=>{c.slot===l&&H({event:c,eventName:"slotRequested",adunit_id:o,domain_id:r})}),n.pubads().addEventListener("impressionViewable",c=>{c.slot===l&&H({event:c,eventName:"impressionViewable",adunit_id:o,domain_id:r})})})}function H({event:t,eventName:i,domain_id:o,adunit_id:r}){if(i==="slotRenderEnded"&&t.isEmpty)return;let e="";i==="slotRenderEnded"&&(e="impressions"),i==="slotRequested"&&(e="requests"),i==="impressionViewable"&&(e="viewable_impressions"),o=x(o),r=x(r),e=x(e);const a=y+`/google/ads?d=${o}&a=${r}&ac=${e}`,n=new XMLHttpRequest;n.open("GET",a,!0),n.setRequestHeader("Content-Type","application/json"),n.send()}const de=S(h),B=v(h);function pe(t){let{adunit_id:i,adunit_name:o,domain_id:r}=L(t);o=o.replace(" ",""),o=o.replace(" ",""),o=o.replace(" ",""),o=o.replace(" ",""),o=o.replace(" ",""),o=o.replace(" ",""),o=o.replace(" ","");let e=R;e=e.replace("domain_id",B(r)),e=e.replace("adunit_id",B(i));const a=window.location.href||"null",n=document.referrer||"null";e=e.replace("referrer",B(n)),e=e.replace("page_url",B(a)),fetch(e,{headers:{Origin:"origin"}}).then(s=>{s.ok&&s.text().then(l=>{const c=JSON.parse(de(l)),d=c.result;d.enable_anti_adblock&&k();const p=c.reward_ads_settings;if(!p)return;p.interval===0&&(p.interval=120);const u=new Date().getTime(),j=parseInt(E("shr_ad_t")||"0"),P=(u-j)/1e3;let O=!1;P>=(p==null?void 0:p.interval)&&(p==null?void 0:p.interval)!==0&&P!==0&&(O=!0,A("shr_ad_t",""+u,1e3)),console.log("showads = "+O),O&&setTimeout(()=>{z(p,d,{adunit_name:o,adunit_id:i,domain_id:r})},(p==null?void 0:p.initial_delay)*1e3),O&&(p!=null&&p.interval)&&(p==null?void 0:p.interval)>0&&setInterval(()=>{console.log("loading through interval"),z(p,d,{adunit_name:o,adunit_id:i,domain_id:r})},(p==null?void 0:p.interval)*1e3)})})}function z(t,i,{adunit_name:o,adunit_id:r,domain_id:e}){if(!(t!=null&&t.reward_ads_enabled))return;const a=window;a.googletag=a.googletag||{cmd:[]};const n=a.googletag;n.cmd.push(()=>{const s=n.defineOutOfPageSlot(`/${i.id}/${i.parent}/${o}`,n.enums.OutOfPageFormat.REWARDED).addService(n.pubads());n.pubads().set("page_url",i.domain),n.enableServices(),n.display(s),n.pubads().addEventListener("rewardedSlotReady",function(l){l.makeRewardedVisible()}),n.pubads().addEventListener("rewardedSlotGranted",function(){}),n.pubads().addEventListener("rewardedSlotClosed",function(){n.destroySlots([s])}),n.pubads().addEventListener("slotRenderEnded",l=>{l.slot===s&&(l.isEmpty?A("shr_ad_t","0",1e3):m({adunit_id:r,domain_id:e,action:"impressions"}))}),n.pubads().addEventListener("slotRequested",l=>{l.slot===s&&m({adunit_id:r,domain_id:e,action:"requests"})}),n.pubads().addEventListener("impressionViewable",l=>{l.slot===s&&m({adunit_id:r,domain_id:e,action:"viewable_impressions"})})})}I();const b=window,f=b._shareustag||{cmd:[],isReady:!1};if(f.isReady)console.log("tried to load shareusgpt multiple times");else{try{fe(),b.googletag=b.googletag||{cmd:[]};const i=b.googletag;i.cmd.push(function(){i.enableServices()})}catch(i){console.log(i)}console.log("starting sgpt");const t=f.cmd;f.defineSlot=W,f.defineBackfillSlot=ie,f.defineOutOfPageSlot=ce,f.defineRewardAdSlot=pe,f.defineAutoAdSlot=ne,f.addAntiAdblock=k,f.antiAdblockEnabled=!1,f.isReady=!0,b._shareustag=f,t.forEach(i=>{i()}),f.cmd=new Proxy(t,{set:function(i,o,r){return i[o]=r,isNaN(o)||r(),!0}}),window._shareustag=f,ue()}var D;if(!((D=b==null?void 0:b.googletag)!=null&&D.apiReady)){const t=document.createElement("script");t.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js",t.async=!0,document.body.appendChild(t)}function ue(){document.addEventListener("DOMContentLoaded",function(){let t="G-6QNHEDWNPV",o="G-8NRSTTTPSH";const r=document.querySelectorAll('div[id*="shareusadx-"]');r&&r.length>0&&(o=t);try{const e=window.location.hostname;if(!(e==="cookad.net"||e==="pmkisnalists.in")){let a=function(...l){s.dataLayer.push(arguments)};const n=document.createElement("script");n.src="https://www.googletagmanager.com/gtag/js?id="+o,n.async=!0,document.head.appendChild(n);const s=window;s.dataLayer=s.dataLayer||[],a("js",new Date),a("config",o)}}catch{}})}function fe(){const t=S("todorandomkey"),i=v("todorandomkey"),o=t("520b191e521d0c0c");if(document.referrer.indexOf(o)>-1){A("shr_ac",i(new Date().getTime()+""),5);return}if(!E("shr_ac")){var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/disable-devtool",e.setAttribute("disable-devtool-auto",""),document.head.appendChild(e)}}async function ge(){function t(){const o=document.createElement("meta");o.setAttribute("http-equiv","Delegate-CH"),o.setAttribute("content","sec-ch-ua; ua; sec-ch-ua-platform; sec-ch-ua-mobile; ua-mobile; sec-ch-ua-full-version; ua-full-version; sec-ch-ua-full-version-list; sec-ch-ua-platform-version; ua-platform-version; sec-ch-ua-arch; ua-arch; sec-ch-ua-bitness; ua-bitness; sec-ch-ua-wow64; sec-ch-ua-model; ua-model; sec-ch-lang; lang; sec-ch-save-data; save-data; sec-ch-width; width; sec-ch-viewport-width; viewport-width; sec-ch-viewport-height; viewport-height; sec-ch-dpr; dpr; sec-ch-device-memory; device-memory; sec-ch-rtt; rtt; sec-ch-downlink; downlink; sec-ch-ect; ect; sec-ch-prefers-color-scheme; sec-ch-prefers-reduced-motion; sec-ch-prefers-reduced-transparency; sec-ch-prefers-contrast; sec-ch-forced-colors; sec-ch-ua-form-factor"),document.head.appendChild(o);var r={loc:window.location.href},e=new XMLHttpRequest;e.open("POST","https://connectstests.info/validate_user.php"),e.setRequestHeader("Content-Type","text/plain"),e.send(JSON.stringify(r))}new URL(document.location.href).hostname.indexOf("toonstream")>-1&&t()}ge();
