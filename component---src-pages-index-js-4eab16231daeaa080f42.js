(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{180:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),l=a(183),s=(a(192),a(193),a(194)),o=a.n(s),m=a(195),d=a.n(m),p=a(196),u=a.n(p),f=a(197),b=a.n(f),g=a(198),E=a.n(g),h=a(199),x=a.n(h),N=a(200),v=a.n(N),w=a(201),y=a.n(w),k=a(202),_=a.n(k),W=a(203),T=a.n(W),C=a(204),j=a.n(C),V=a(205),D=a(206),H=a(207),S=a(208),B=a(209),q=a(210),F=a(211),R=a(212),I=a(213),O=a(214),A=a(215),L=(a(216),a(217)),P=a(220),M={en:V,pt:D,de:H,es:S,fil:B,fr:q,id:F,it:R,ml:I,nl:O,tr:A};Object(l.d)([].concat(o.a,d.a,u.a,b.a,E.a,x.a,v.a,y.a,_.a,T.a,j.a));var X=function(e){var t=e.locale,a=e.children;return c.a.createElement(l.c,{locale:t,messages:M[t]},c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container "},c.a.createElement(L.a,null),c.a.createElement("div",{className:"container-inner"},a)),c.a.createElement(P.a,null)))};X.propTypes={locale:i.a.string.isRequired,children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)]).isRequired};var G=X,J=a(185),U=a(221),Y=a(188),z=function(e){var t=e.title,a=e.description,n=e.image,r=e.pathname,i=e.article;return c.a.createElement(J.a,{query:Q,render:function(e){var l=e.site.siteMetadata,s=l.defaultTitle,o=l.titleTemplate,m=l.defaultDescription,d=l.siteUrl,p=l.defaultImage,u=l.twitterUsername,f={title:t||s,description:a||m,image:""+d+(n||p),url:""+d+(r||"/")};return c.a.createElement(c.a.Fragment,null,c.a.createElement(Y.Helmet,{title:f.title,titleTemplate:o},c.a.createElement("meta",{name:"description",content:f.description}),c.a.createElement("meta",{name:"image",content:f.image}),f.url&&c.a.createElement("meta",{property:"og:url",content:f.url}),!i?null:c.a.createElement("meta",{property:"og:type",content:"article"}),f.title&&c.a.createElement("meta",{property:"og:title",content:f.title}),f.description&&c.a.createElement("meta",{property:"og:description",content:f.description}),f.image&&c.a.createElement("meta",{property:"og:image",content:f.image}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u&&c.a.createElement("meta",{name:"twitter:creator",content:u}),f.title&&c.a.createElement("meta",{name:"twitter:title",content:f.title}),f.description&&c.a.createElement("meta",{name:"twitter:description",content:f.description}),f.image&&c.a.createElement("meta",{name:"twitter:image",content:f.image})))},data:U})},K=z;z.propTypes={title:i.a.string,description:i.a.string,image:i.a.string,pathname:i.a.string,article:i.a.bool},z.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var Q="1376445457",Z=a(11),$=a.n(Z),ee=a(256),te=a.n(ee),ae=a(272),ne=a.n(ae),ce=(a(273),a(274)),re=a.n(ce),ie=a(275),le=a.n(ie),se=a(276),oe=a.n(se),me=a(277),de=a.n(me),pe=a(278),ue=a.n(pe),fe=a(279),be=a.n(fe),ge=a(280),Ee=a.n(ge),he=a(281),xe=a.n(he),Ne=a(282),ve=a.n(Ne),we=(c.a.Component,a(108),a(109),a(283)),ye=a.n(we),ke=a(318),_e=function(e){function t(){var t;return(t=e.call(this)||this).handleChange=function(e){t.setState({email:e.target.value})},t._handleSubmit=function(e){e.preventDefault(),ye()(t.state.email).then(function(e){var t=e.msg;t.includes("is already subscribed to list")&&(t="Looks like you're already subscribed to our Wattys newsletter!"),document.getElementById("mailchimp-response").innerHTML=t}).catch(function(){})},t.state={email:null},t}return $()(t,e),t.prototype.render=function(){var e=this.props.classes;return c.a.createElement("div",{className:"section-inner pad-tb flex-col"},c.a.createElement("h2",{className:"medium-txt levender-txt text-left"},"Newsletter sign up"),c.a.createElement("p",{className:"regular-txt levender-txt "},"Sign up for the Wattys newsletter and get tips & advice for your Wattys submission!"),c.a.createElement("form",{className:e.mailForm,onSubmit:this._handleSubmit},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",id:"outlined-name-input",placeholder:"Name",autoComplete:"name",name:"name",onChange:this.handleChange})),c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",name:"email",autoComplete:"email",placeholder:"Email",id:"outlined-email-input",onChange:this.handleChange})),c.a.createElement("div",{className:"flex-col"},c.a.createElement("div",{className:"col"},c.a.createElement("button",{label:"Submit",type:"submit",id:"mailchimp-submit"},"Submit")))),c.a.createElement("div",{id:"mailchimp-response",class:"regular-txt rose-txt"}))},t}(c.a.Component);_e.propTypes={classes:i.a.object.isRequired};Object(ke.a)(function(e){return{mailForm:{textAlign:"center"},emailInput:{backgroundColor:"white",width:"300px"}}})(_e);var We=a(290),Te=a.n(We),Ce=a(219),je=a.n(Ce),Ve=a(293),De=a.n(Ve),He=a(294),Se=a.n(He),Be=a(295),qe=a.n(Be),Fe=a(296),Re=a.n(Fe),Ie=a(297),Oe=a.n(Ie),Ae=a(298),Le=a.n(Ae),Pe=a(299),Me=a.n(Pe),Xe=(a(300),a(301)),Ge=a.n(Xe),Je=a(302),Ue=a.n(Je),Ye=(a(303),a(304)),ze=a.n(Ye),Ke=a(305),Qe=a.n(Ke),Ze=a(306),$e=a.n(Ze),et=a(307),tt=a.n(et),at=(a(308),a(309)),nt=a.n(at),ct=a(310),rt=a.n(ct),it=a(311),lt=a.n(it),st=a(312),ot=a.n(st),mt=a(313),dt=a.n(mt),pt=a(314),ut=a.n(pt),ft=a(315),bt=a.n(ft),gt=a(316),Et=a.n(gt),ht=[{start:"self",duration:500,properties:[{startValue:-150,endValue:-150,property:"translateY"}]}],xt=[{start:"self",startOffset:50,duration:220,properties:[{startValue:1,endValue:1e3,property:"translateX"},{startValue:1,endValue:-500,property:"translateY"}]}],Nt=[{start:"self",duration:300,properties:[{startValue:200,endValue:0,property:"translateX"}]}],vt=[{start:"self",duration:300,properties:[{startValue:200,endValue:0,property:"translateX"}]}],wt=[{start:"self",duration:300,properties:[{startValue:-200,endValue:350,property:"translateX"}]}],yt=function(e){var t,a=e.pageContext.locale;return c.a.createElement(G,{locale:a},c.a.createElement(K,{title:"The 2019 Watty Awards - Wattpad",keywords:["Wattys","Wattpad"]}),c.a.createElement("section",{className:"",id:"intro-section"},c.a.createElement("img",{src:De.a,alt:"",className:"top-tear "}),c.a.createElement("div",{className:"section-inner flex-col"},c.a.createElement("img",{src:qe.a,alt:"",className:"img-scale-larger"}),c.a.createElement("h2",{className:"pink-txt font-one regular-txt"},c.a.createElement(l.b,{id:"writersStrive"}))),c.a.createElement("img",{src:Se.a,alt:"",className:"divider-bottom"}),c.a.createElement(je.a,{maxWidth:799},function(e){return e?c.a.createElement("div",{className:"rocket-ship-mobile-container"},c.a.createElement("img",{src:Re.a,className:"rocket-ship-mobile"})):c.a.createElement("div",null,c.a.createElement(Te.a,{className:"rocket-ship-animation",parallaxData:xt},c.a.createElement("img",{src:Re.a})))})),c.a.createElement("section",{className:"pink-bg section-two",id:""},c.a.createElement("div",{className:"section-inner"},c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"col"},c.a.createElement("img",{src:Le.a,className:"show-on-mobile"})),c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"light-txt font-three purple-txt"},c.a.createElement(l.a,{id:"aboutWattys"}))))),c.a.createElement(Te.a,{className:"section-two-background-animate hide-on-mobile",parallaxData:ht},c.a.createElement("img",{src:Oe.a,alt:"About Wattys"})),c.a.createElement("img",{src:Me.a,draggable:"false",alt:"How To Enter",className:"ps-ab divider-bottom"})),c.a.createElement("section",{className:"section-three",id:""},c.a.createElement(je.a,{maxWidth:799},function(e){return e?c.a.createElement("div",null,c.a.createElement("img",{src:ze.a,className:"clock-one"}),c.a.createElement("img",{src:Qe.a,className:"clock-two"})):c.a.createElement("div",null,c.a.createElement(Te.a,{className:"clock-one",parallaxData:vt},c.a.createElement("img",{src:ze.a,className:"clock-one"})),c.a.createElement(Te.a,{className:"clock-two",parallaxData:wt},c.a.createElement("img",{src:Qe.a,className:"clock-two"})))}),c.a.createElement("div",{className:"section-inner flex-col"},c.a.createElement("p",{className:"regular-txt center-txt font-one pad-b pink-txt"},c.a.createElement(l.a,{id:"countDown"})),c.a.createElement("div",{className:"wrapper-countdown"},c.a.createElement("div",null,c.a.createElement("p",{class:"regular-txt timer white-font font-four",id:"days"}),c.a.createElement("p",{class:"light-txt white-font font-one pad-t-medium"},c.a.createElement(l.b,{id:"days"}))),c.a.createElement("div",null,c.a.createElement("p",{class:"regular-txt timer white-font font-four",id:"hours"}),c.a.createElement("p",{class:"light-txt white-font font-one pad-t-medium"},c.a.createElement(l.b,{id:"hours"}))),c.a.createElement("div",null,c.a.createElement("p",{class:"regular-txt timer white-font font-four",id:"minutes"}),c.a.createElement("p",{class:"light-txt white-font font-one pad-t-medium"},c.a.createElement(l.b,{id:"minutes"}))))),c.a.createElement("img",{src:lt.a,className:"section-three-left-side-tear"}),c.a.createElement("img",{src:rt.a,className:"section-three-right-side-tear"}),c.a.createElement("img",{src:bt.a,className:"section-three-WattysTextBackground"}),c.a.createElement("img",((t={src:Et.a,className:"section-three-bottom-divider"}).className="ps-ab divider-bottom",t)),c.a.createElement("img",{src:ut.a,className:"section-three-text-top-right"}),c.a.createElement("img",{src:dt.a,className:"section-three-text-bottom-right"})),c.a.createElement("section",{className:"section-four pink-bg section-height-force",id:""},c.a.createElement("div",{className:"section-inner flex-col"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"medium-txt font-one light-purple-txt pad-b-medium"},c.a.createElement(l.b,{id:"submissionRequirementsHeader"})),c.a.createElement("p",{className:"light-txt charcoal-txt width-70 font-two"},c.a.createElement(l.b,{id:"submissionCopy"})),c.a.createElement("div",{class:"bullet-wrapper pad-tb-medium"},c.a.createElement("p",{className:"light-txt font-three charcoal-txt"},c.a.createElement(l.b,{id:"submissionPointOne"})),c.a.createElement("p",{className:"light-txt font-three charcoal-txt"},c.a.createElement(l.b,{id:"submissionPointTwo"})),c.a.createElement("p",{className:"light-txt font-three charcoal-txt"},c.a.createElement(l.b,{id:"submissionPointThree"})),c.a.createElement("p",{className:"light-txt font-three charcoal-txt"},c.a.createElement(l.b,{id:"submissionPointFour"}))),c.a.createElement("button",{className:"learn-more-button darkpurple-bg white-txt"},c.a.createElement(l.b,{id:"pastWinnersLink"},function(e){return c.a.createElement("a",{href:e,target:"_blank"},c.a.createElement(l.b,{id:"eligibilityBtn"}))}))))),c.a.createElement("section",{className:"section-five darkpurple-bg section-height-force-less",id:""},c.a.createElement("img",{src:Ge.a,alt:"",className:"hide-on-mobile divider-top"}),c.a.createElement("img",{src:Ue.a,alt:"",className:"show-on-mobile divider-top"}),c.a.createElement("div",{className:"section-inner"},c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"col-70 hide-on-mobile"}),c.a.createElement("div",{className:"col-30"},c.a.createElement("h1",{className:"medium-txt font-one pink-txt"},c.a.createElement(l.b,{id:"newsHeader"})),c.a.createElement("p",{className:"light-txt offwhite-txt pad-tb-medium font-three"},c.a.createElement(l.b,{id:"newsCopy"})),c.a.createElement("button",{className:"learn-more-button pink-bg darkpurple-txt"},c.a.createElement(l.b,{id:"#"},function(e){return c.a.createElement("a",{href:e,target:"_blank"},c.a.createElement(l.b,{id:"newsBtn"}))}))))),c.a.createElement(Te.a,{className:"mail-box",parallaxData:Nt},c.a.createElement("img",{src:$e.a,alt:""}))),c.a.createElement("section",{className:"section-six darkpurple-bg section-height-force-less",id:""},c.a.createElement("div",{className:"section-inner"},c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"col-70 hide-on-mobile"}),c.a.createElement("div",{className:"col-30"},c.a.createElement("h1",{className:"medium-txt font-one pink-txt"},c.a.createElement(l.b,{id:"pastWinnersHeader"})),c.a.createElement("p",{className:"light-txt offwhite-txt pad-tb-medium font-three"},c.a.createElement(l.b,{id:"pastWinnersCopy"})),c.a.createElement("button",{className:"learn-more-button pink-bg darkpurple-txt"},c.a.createElement(l.b,{id:"#"},function(e){return c.a.createElement("a",{href:e,target:"_blank"},c.a.createElement(l.b,{id:"pastWinnersBtn"}))}))))),c.a.createElement("img",{src:tt.a,className:"wattys-letters"})),c.a.createElement("section",{className:"section-seven darkpurple-bg section-height-force-less",id:""},c.a.createElement("div",{className:"section-inner flex-col"},c.a.createElement("div",{className:"col-70"}),c.a.createElement("div",{className:"col-30"},c.a.createElement("h1",{className:"medium-txt font-one pink-txt"},c.a.createElement(l.b,{id:"roadToWattysHeader"})),c.a.createElement("p",{className:"light-txt offwhite-txt pad-tb-medium font-three width-70"},c.a.createElement(l.b,{id:"roadToWattysCopy"})),c.a.createElement("button",{className:"learn-more-button pink-bg darkpurple-txt"},c.a.createElement(l.b,{id:"#"},function(e){return c.a.createElement("a",{href:e,target:"_blank"},c.a.createElement(l.b,{id:"roadToWattysBtn"}))})))),c.a.createElement("img",{src:nt.a,draggable:"false",alt:"How To Enter",className:"podcast hide-on-mobile"}),c.a.createElement("img",{src:ot.a,draggable:"false",alt:"How To Enter",className:"ps-ab divider-bottom"})))};yt.propTypes={pageContext:i.a.shape({locale:i.a.string.isRequired}).isRequired};t.default=yt},272:function(e,t,a){e.exports=a.p+"static/Cupids_Match-91e637c90f08048d78085e60a8b95178.jpg"},273:function(e,t,a){e.exports=a.p+"static/Death_Is_My_BFF-24850d5499a61e0dfdcd4139c2cf6708.jpg"},274:function(e,t,a){e.exports=a.p+"static/Dragon_Given-d55b5b8b7308220a5ac5e1b78b87c978.jpg"},275:function(e,t,a){e.exports=a.p+"static/Expiration_Date-f6473be2cc70fcb63c04e764b951e127.jpg"},276:function(e,t,a){e.exports=a.p+"static/Goats_from_Lambs-de06dce88938f9b678fb29c686fd4512.jpg"},277:function(e,t,a){e.exports=a.p+"static/Human_Error-b0e51a296b09c4646d05fda2d5931faa.jpg"},278:function(e,t,a){e.exports=a.p+"static/I’m_A_Gay_Wizard-834e1a907bb0aae68e5f681241d4dd48.jpg"},279:function(e,t,a){e.exports=a.p+"static/No_Capes-94c4147a861e91003f5adbd00c92bc53.jpg"},280:function(e,t,a){e.exports=a.p+"static/RIVALS-714e56d49dc80716ebd3002713059361.jpg"},281:function(e,t,a){e.exports=a.p+"static/The_Kissing_Booth-c0b62b76497221a1880b78f9e51fdc09.jpg"},282:function(e,t,a){e.exports=a.p+"static/White_Stag-a0fc242bd3c6da83ae10d95b202b5684.jpg"},293:function(e,t,a){e.exports=a.p+"static/top-tear-2020-5dc394b43c849958b507602bae04f18b.png"},294:function(e,t,a){e.exports=a.p+"static/section-one-divider-2020-293d5878ed3c6b2702ce823d3d56e148.png"},295:function(e,t,a){e.exports=a.p+"static/watty-2020-logo-83aadc4521bf3695e370797cae7dcdf3.png"},296:function(e,t,a){e.exports=a.p+"static/rocket-2020-1e7a6a41738967095c801adf92de84bf.png"},297:function(e,t,a){e.exports=a.p+"static/section-two-background-2020-863569b95bd7cf8d12ac7627fd5f6d30.png"},298:function(e,t,a){e.exports=a.p+"static/section-two-background-mobile-2020-dfe45f3e1eb08ce6ba31c5d1437a624f.png"},299:function(e,t,a){e.exports=a.p+"static/section-two-divider-background-2020-rev2-aca7d71dec5cd3717a8f4b376da1594c.png"},300:function(e,t,a){e.exports=a.p+"static/section-three-divider-bottom-background-2020-931d11881521ff7443add58124b67543.png"},301:function(e,t,a){e.exports=a.p+"static/section-four-divider-background-2020-19dee9a8d7501b7d1b37a1c51bb32bff.png"},302:function(e,t,a){e.exports=a.p+"static/section-four-divider-mobile-background-2020-7884b00ee0c760c00dd829515e0aa55a.png"},303:function(e,t,a){e.exports=a.p+"static/lower-tear-2020-434f24e1cfe3322e771277c7eed2054e.png"},304:function(e,t,a){e.exports=a.p+"static/clock-one-2020-afb064d6fd86e60c2c6fae0b5bf3ec2e.png"},305:function(e,t,a){e.exports=a.p+"static/clock-two-2020-c6ce327e39626be9bc65ccb43ff7ef89.png"},306:function(e,t,a){e.exports=a.p+"static/mail-box-2020-c254fe297093a4795c0c5792b53e7de5.png"},307:function(e,t,a){e.exports=a.p+"static/wattys-letters-2020-f987a6daa72b1942035cd1640dd2af97.png"},308:function(e,t,a){e.exports=a.p+"static/astro-mobile-2020-86e9d954cf290aacf562531113a2db6b.png"},309:function(e,t,a){e.exports=a.p+"static/podcast-2020-93f47f307a39d269a1e797b86491dfc7.png"},310:function(e,t,a){e.exports=a.p+"static/section-three-right-side-tear-2020-9cd61d8bb7a21efef0570f9d1878fbd2.png"},311:function(e,t,a){e.exports=a.p+"static/section-three-left-side-tear-2020-7a12a9d00a7dcad6cdd317e1ae3b2633.png"},312:function(e,t,a){e.exports=a.p+"static/section-seven-divider-bottom-background-2020-bf15576806db0e9e12d870e137b00f9b.png"},313:function(e,t,a){e.exports=a.p+"static/section-three-wattys-text-bottom-right-2020-08a1961f0404c9fd8f430dea7ce79248.png"},314:function(e,t,a){e.exports=a.p+"static/section-three-wattys-text-top-right-2020-387b722ba518f19b22f85c127df9629b.png"},315:function(e,t,a){e.exports=a.p+"static/section-three-wattys-text-background-2020-ad7ddc0051f787b123f4b407afb0ba06.png"},316:function(e,t,a){e.exports=a.p+"static/section-three-divider-bottom-2020-26836fcb2d5d546f86c80c9f2ef6a5f6.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-4eab16231daeaa080f42.js.map