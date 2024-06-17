(window.webpackJsonp=window.webpackJsonp||[]).push([[68,9,10,11,12,14,15,21,22,23],{1008:function(t,e,n){"use strict";n.r(e);n(30),n(35),n(34),n(58),n(28),n(59);var r=n(17),o=n(6),c=(n(44),n(52),n(49),n(83),n(33),n(522)),d=n(81),l=Object(d.a)({"en-us":{title:"Keynote Speech",intro:"PyCon TW 2024 invites two speakers to give keynote speeches during the two-day conference. Each keynote speaker is considered one of the most important figures in their respective fields. They will share their professional experience and the image of their domain’s future.",terms:{bio:"Bio",talk:"Talk",note:"Note"}},"zh-hant":{title:"主題演講",intro:"為期兩天的議程中，每天各有一場主題演講（Keynote）。{br}主題演講講者都是在全球而言各領域非常頂尖的人士；{br}他們將帶來對自己的領域、專案的經驗分享，或者對於未來數年發展的方向與想像。",terms:{bio:"講者介紹",talk:"演講",note:"共筆"}}}),f=n(541),m=n.n(f),h=n(538),_=n(519),v=n(642),x=n(643),y=n(82),k=n(588),C=n(644),w=n(645),j=n(646);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var z={i18n:l,name:"PageConferenceKeynotes",components:{I18nPageWrapper:c.default,CoreH1:_.default,Tab:v.default,Tabs:x.default,ExtLink:y.default,Youtube:k.default,Banner:h.default,FacebookIcon:C.default,GithubIcon:w.default,TwitterIcon:j.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.store,r=t.app,!(o=t.payload)){e.next=3;break}return e.abrupt("return",{keynotesData:o});case 3:return e.next=5,n.dispatch("$getKeynotesData");case 5:return c=n.state.keynotesData.map((function(t){return $($({},t),{},{id:r.$makeId()})})),e.abrupt("return",{keynotesData:c});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{aboutBanner:m.a}},computed:{locale:function(){return{"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]},bannerStyle:function(){return{"background-image":"url(".concat(this.aboutBanner,")"),"background-repeat":"no-repeat","background-position":"center"}}},methods:{getKeynoteId:function(t){if(t.speaker.name_en_us)return t.speaker.name_en_us.replace(/[' ']/g,"_").replace(/['.']/g,"")},getAttributeByLocale:function(data,t){return data["".concat(t,"_").concat({"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale])]}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("intro")},{hid:"description",name:"description",content:this.$i18n.t("intro")}]}}},I=(n(925),n(8)),component=Object(I.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("banner",[n("core-h1",{attrs:{title:t.$t("title")}}),t._v(" "),n("i18n",{staticClass:"intro",attrs:{path:"intro",tag:"p"},scopedSlots:t._u([{key:"br",fn:function(){return[n("br")]},proxy:!0}])})],1),t._v(" "),n("i18n-page-wrapper",t._l(t.keynotesData,(function(e){return n("article",{key:e.id,staticClass:"keynote",attrs:{id:t.getKeynoteId(e)}},[n("div",{staticClass:"keynote__photo"},[n("img",{attrs:{src:e.speaker.photo,alt:e.speaker[t.$makeKey(t.locale,"name")]}})]),t._v(" "),n("div",{staticClass:"keynote__name"},[t._v("\n                "+t._s(e.speaker[t.$makeKey(t.locale,"name")])+"\n            ")]),t._v(" "),n("div",{staticClass:"keynote__links"},[e.social_item.facebook&&e.social_item.facebook.length?n("div",{staticClass:"keynote__extLink"},[n("ext-link",{attrs:{href:e.social_item.facebook}},[n("facebook-icon")],1)],1):t._e(),t._v(" "),e.social_item.github&&e.social_item.github.length?n("div",{staticClass:"keynote__extLink"},[n("ext-link",{attrs:{href:e.social_item.github}},[n("github-icon")],1)],1):t._e(),t._v(" "),e.social_item.twitter&&e.social_item.twitter.length?n("div",{staticClass:"keynote__extLink"},[n("ext-link",{attrs:{href:e.social_item.twitter}},[n("twitter-icon")],1)],1):t._e()]),t._v(" "),n("h2",{staticClass:"keynote__title"},[t._v("\n                "+t._s(e.session[t.$makeKey(t.locale,"title")])+"\n            ")]),t._v(" "),n("tabs",{staticClass:"keynote__tabs"},[n("tab",{attrs:{title:t.$t("terms.bio")}},[n("div",{staticClass:"keynote_tab"},[t._v("\n                        "+t._s(e.speaker[t.$makeKey(t.locale,"bio")])+"\n                    ")])]),t._v(" "),n("tab",{attrs:{title:t.$t("terms.talk")}},[n("div",{staticClass:"keynote_tab"},[t._v("\n                        "+t._s(e.session[t.$makeKey(t.locale,"description")])+"\n                        "),e.session.slides.length?n("div",{staticClass:"pt-4"},[n("ext-link",{attrs:{href:e.session.slides}},[n("fa",{staticClass:"mr-2",attrs:{icon:["fa","link"],"aria-hidden":"true"}}),t._v("Slides\n                            ")],1)],1):t._e()]),t._v(" "),e.youtube_id.length?n("youtube",{attrs:{"video-id":e.youtube_id}}):t._e()],1),t._v(" "),e.slido.length?n("tab",{attrs:{title:"Slido"}},[n("iframe",{staticClass:"keynote__slido",attrs:{src:e.slido}})]):t._e(),t._v(" "),e.hackmd_embed_link.length?n("tab",{attrs:{title:t.$t("terms.note")}},[n("iframe",{staticClass:"keynote__hackmd",attrs:{src:e.hackmd_embed_link}})]):t._e()],1)],1)})),0)],1)}),[],!1,null,"3461cdf0",null);e.default=component.exports},515:function(t,e,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("3cda5dc8",content,!0,{sourceMap:!1})},516:function(t,e,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("042ecdbe",content,!0,{sourceMap:!1})},517:function(t,e,n){"use strict";n(515)},518:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,"h1[data-v-feb57f82]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 768px){h1[data-v-feb57f82]{margin-bottom:2.25rem}h1[data-v-feb57f82]{font-size:1.5rem;line-height:2rem}}h1[data-v-feb57f82]{text-shadow:#3643b5 2px 1px 0}",""]),r.locals={},t.exports=r},519:function(t,e,n){"use strict";n.r(e);var r={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},o=(n(517),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center font-serif"},[n("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"feb57f82",null);e.default=component.exports},520:function(t,e,n){"use strict";n(516)},521:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,"h1[data-v-9ddb4acc]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-9ddb4acc]{margin-bottom:1.5rem;margin-top:5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:2.5rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-9ddb4acc], p[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:0.25rem;width:100%;text-align:justify}span.text-2s[data-v-9ddb4acc]{font-size:.625rem}ul[data-v-9ddb4acc]{margin-bottom:1.5rem}ul.list-disc[data-v-9ddb4acc]{padding-left:3rem}li[data-v-9ddb4acc]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-9ddb4acc]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),r.locals={},t.exports=r},522:function(t,e,n){"use strict";n.r(e);var r={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},o=(n(520),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.pageWrapperClass},[n("div",{class:t.classObject},[t._t("default")],2)])}),[],!1,null,"9ddb4acc",null);e.default=component.exports},525:function(t,e,n){var content=n(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b0f4efe6",content,!0,{sourceMap:!1})},536:function(t,e,n){"use strict";n(525)},537:function(t,e,n){var r=n(19),o=n(182),c=n(285),d=n(286),l=n(287),f=n(288),m=r((function(i){return i[1]})),h=o(c),_=o(d),v=o(l),x=o(f);m.push([t.i,".banner[data-v-acd58fb0]{display:flex;width:100%;align-items:center;justify-content:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:600;background-image:url("+h+"),url("+_+"),url("+v+"),url("+x+");background-repeat:no-repeat;background-position:5% 135px, 50% 50%, 94% 99px, 85% 70%}@media (min-width: 768px){.banner[data-v-acd58fb0]{background-position:16% 37%, 50% 50%, 77% 30%, 72% 490px}}@media (min-width: 1194px){.banner[data-v-acd58fb0]{background-position:16% 37%, 50% 100%, 77% 30%, 72% 490px}}.banner[data-v-acd58fb0]{background-size:11%,72%,22%,7%}@media (min-width: 768px){.banner[data-v-acd58fb0]{background-size:6%,36%,9%,4%}}.banner[data-v-acd58fb0]{height:calc(100vh - 320px);min-height:560px}.banner-texts[data-v-acd58fb0]{margin-left:0.375rem;margin-right:0.375rem;text-align:center}@media (min-width: 768px){.banner-texts[data-v-acd58fb0]{margin-left:3.5rem;margin-right:3.5rem}}.banner-texts[data-v-acd58fb0]{max-width:930px}",""]),m.locals={},t.exports=m},538:function(t,e,n){"use strict";n.r(e);var r={name:"Banner"},o=(n(536),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"banner-texts"},[t._t("default")],2)])}),[],!1,null,"acd58fb0",null);e.default=component.exports},541:function(t,e,n){t.exports=n.p+"img/Banner.62ce754.svg"},576:function(t,e,n){var content=n(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("6272cb6d",content,!0,{sourceMap:!1})},588:function(t,e,n){"use strict";n.r(e);var r={props:{videoId:{type:String,required:!0}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aspect-w-16 aspect-h-9"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/"+t.videoId,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);e.default=component.exports},615:function(t,e,n){"use strict";n(576)},616:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".tabs__headers[data-v-1585dfdd]{font-family:Noto Serif TC, -apple-system, serif}.tabs__headers>.header[data-v-1585dfdd]{display:inline-block;padding-left:22px;padding-right:22px;padding-top:13px;padding-bottom:13px;border-color:transparent;text-align:center;font-weight:900;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));cursor:pointer;border-top-left-radius:0.375rem;border-top-right-radius:0.375rem;border-width:1px;background-color:transparent;font-size:18px;min-width:20%}@media (min-width:767px){.tabs__headers>.header[data-v-1585dfdd]{min-width:110px}}.tabs__headers>.header.-selected[data-v-1585dfdd]{--tw-bg-opacity:1;background-color:rgba(218, 139, 220, var(--tw-bg-opacity));color:#262626}.tab[data-v-1585dfdd]{display:inline-block;width:100%;--tw-bg-opacity:0;padding:1rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}@media (min-width: 768px){.tab[data-v-1585dfdd]{font-size:0.875rem;line-height:1.25rem}}.tab[data-v-1585dfdd]{border-top-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgba(218, 139, 220, var(--tw-border-opacity));line-height:29px;font-size:16px}@media (min-width:768px){.tab[data-v-1585dfdd]{font-size:18px}}",""]),r.locals={},t.exports=r},642:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!0}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"tab"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},643:function(t,e,n){"use strict";n.r(e);n(28);var r={data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){var t=this;this.selectTab(0),this.$root.$on("initTabs",(function(){t.selectTab(0)}))},methods:{selectTab:function(i){this.selectedIndex=i,this.tabs.forEach((function(t,e){t.isActive=e===i}))},isSelectedIndex:function(i){return i===this.selectedIndex}}},o=(n(615),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"tabs__headers"},t._l(t.tabs,(function(e,r){return n("li",{key:e.title,class:{header:!0,"-selected":t.isSelectedIndex(r)},on:{click:function(e){return t.selectTab(r)}}},[t._v("\n            "+t._s(e.title)+"\n        ")])})),0),t._v(" "),t._t("default")],2)}),[],!1,null,"1585dfdd",null);e.default=component.exports},644:function(t,e,n){"use strict";n.r(e);var r={name:"FacebookIcon"},o=n(8),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9298 24.9191C20.16 24.2097 25 18.9201 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.7366 4.56727 23.9064 10.5395 24.8471V16.2256H7.69306V12.8122H10.5395V10.2881C10.5395 7.36745 12.252 5.76889 14.7744 5.76889C15.9778 5.76889 17.0076 5.86505 17.3084 5.90111V8.96601H15.5612C14.1959 8.96601 13.9298 9.63909 13.9298 10.6247V12.8122H17.1927L16.7646 16.2256H13.9298V24.9191ZM12.5923 24.9997H12.4077C12.4384 24.9999 12.4692 25 12.5 25C12.5308 25 12.5616 24.9999 12.5923 24.9997Z"}})])}),[],!1,null,"29721df6",null);e.default=component.exports},645:function(t,e,n){"use strict";n.r(e);var r={name:"GithubIcon"},o=n(8),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.5128 24.6345C20.961 23.2863 25 18.3648 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.5322 4.27279 23.5664 9.95691 24.7411C10.0445 24.6217 10.0883 24.4565 10.0883 24.244L10.0814 23.1729C10.0762 22.4902 10.0745 21.9479 10.0745 21.5499L9.75103 21.6133C9.49218 21.6589 9.23006 21.6769 8.96817 21.6672C8.63913 21.6606 8.31112 21.624 7.98744 21.5575C7.64395 21.486 7.3207 21.3238 7.04457 21.0845C6.7551 20.8397 6.53908 20.5024 6.42516 20.1172L6.28407 19.7538C6.1654 19.4676 6.01636 19.1983 5.84017 18.9519C5.68197 18.6992 5.47117 18.4933 5.22592 18.3519L5.12785 18.275C5.06031 18.2194 4.99907 18.1548 4.94547 18.0827C4.89345 18.0172 4.85053 17.9433 4.81815 17.8635C4.79062 17.7904 4.81298 17.7289 4.88697 17.6827C5.01682 17.6244 5.1569 17.6 5.29647 17.6116L5.57864 17.6596C5.7679 17.7 6.00018 17.8269 6.27719 18.0365C6.55248 18.2481 6.78132 18.5192 6.96026 18.8557C7.17705 19.2865 7.43686 19.6153 7.74312 19.8403C8.01345 20.0534 8.33462 20.1712 8.66535 20.1788C8.97505 20.1788 9.24346 20.1538 9.46885 20.1018C9.68825 20.051 9.9014 19.9709 10.1037 19.8634C10.1881 19.1615 10.4169 18.6192 10.792 18.2423C10.305 18.1885 9.82245 18.0933 9.34841 17.9577C8.88557 17.8151 8.4405 17.6084 8.02357 17.3423C7.58695 17.0776 7.20111 16.7195 6.888 16.2885C6.58862 15.8674 6.34257 15.3174 6.14815 14.6348C5.94543 13.8679 5.84854 13.0709 5.86081 12.2714C5.86081 11.0022 6.23246 9.91959 6.97402 9.02732C6.62647 8.07159 6.65916 7.00049 7.0721 5.814C7.34567 5.71785 7.75 5.789 8.2851 6.02553C8.8202 6.26206 9.21421 6.46397 9.46197 6.63319C9.71146 6.8005 9.90932 6.94087 10.0607 7.05625C10.942 6.78272 11.8526 6.64555 12.7672 6.64858C13.6963 6.64858 14.5996 6.78319 15.4737 7.05818L16.007 6.67935C16.3752 6.42936 16.8071 6.19668 17.3043 5.98707C17.8033 5.77554 18.1836 5.71785 18.4468 5.814C18.8701 7.00049 18.9079 8.07159 18.5586 9.0254C19.3019 9.91959 19.6736 11.0003 19.6736 12.2714C19.6736 13.1637 19.5772 13.954 19.3845 14.6425C19.1918 15.3309 18.9423 15.8809 18.6378 16.2962C18.3195 16.723 17.9319 17.0786 17.4953 17.3443C17.0784 17.6104 16.6334 17.8171 16.1705 17.9596C15.6958 18.0947 15.2127 18.1892 14.7252 18.2423C15.2138 18.7134 15.4582 19.4596 15.4582 20.4787V24.242C15.4582 24.3991 15.4768 24.5295 15.5128 24.6345ZM12.5874 24.9997H12.4126C12.4417 24.9999 12.4708 25 12.5 25C12.5292 25 12.5583 24.9999 12.5874 24.9997Z"}})])}),[],!1,null,"01ac161b",null);e.default=component.exports},646:function(t,e,n){"use strict";n.r(e);var r={name:"TwitterIcon"},o=n(8),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM18.6599 8.63694C19.304 8.56746 19.9294 8.38905 20.5041 8.14115C20.0684 8.77592 19.5219 9.3412 18.8984 9.79755C18.9078 9.93652 18.9078 10.0755 18.9078 10.2145C18.9078 14.4494 15.6851 19.3284 9.79567 19.3284C7.98152 19.3284 6.29695 18.8026 4.87718 17.8918C5.13447 17.9218 5.38236 17.9312 5.65092 17.9312C7.14769 17.9312 8.52614 17.4241 9.62665 16.5621C8.22003 16.5321 7.03876 15.61 6.63311 14.3404C6.83218 14.3686 7.02937 14.3893 7.23783 14.3893C7.52236 14.3885 7.80566 14.3519 8.08105 14.2803C6.61433 13.9836 5.51382 12.6934 5.51382 11.1366V11.0971C5.95767 11.345 6.45377 11.4847 6.96176 11.5047C6.09976 10.9281 5.53448 9.94779 5.53448 8.83601C5.53263 8.26778 5.68308 7.70943 5.97018 7.21905C7.54582 9.16279 9.91587 10.4323 12.5732 10.5713C12.5244 10.3328 12.4944 10.0849 12.4944 9.83699C12.4944 8.07166 13.9216 6.63311 15.6964 6.63311C16.135 6.63214 16.5691 6.72152 16.9717 6.89567C17.3743 7.06982 17.7367 7.32502 18.0364 7.64536C18.7533 7.50673 19.4408 7.24495 20.0684 6.87162C19.8295 7.61193 19.3286 8.23963 18.6599 8.63694Z"}})])}),[],!1,null,"a6e275cc",null);e.default=component.exports},724:function(t,e,n){var content=n(926);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("5825f43a",content,!0,{sourceMap:!1})},925:function(t,e,n){"use strict";n(724)},926:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".keynote[data-v-3461cdf0]{margin-bottom:5rem}@media (min-width: 768px){.keynote[data-v-3461cdf0]{margin-bottom:7rem}}.keynote__photo[data-v-3461cdf0]{margin-left:auto;margin-right:auto;margin-top:0.5rem;margin-bottom:0.5rem;display:flex;height:6rem;width:6rem;justify-content:center}@media (min-width: 768px){.keynote__photo[data-v-3461cdf0]{height:7rem}.keynote__photo[data-v-3461cdf0]{width:7rem}}.keynote__photo img[data-v-3461cdf0]{border-radius:9999px;-o-object-fit:cover;object-fit:cover;height:100%}.keynote__name[data-v-3461cdf0], .keynote__title[data-v-3461cdf0]{text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:900}.keynote__name[data-v-3461cdf0],.keynote__title[data-v-3461cdf0]{font-size:22px}.keynote__name[data-v-3461cdf0]{padding-top:0.5rem;padding-bottom:0.5rem;--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity))}.keynote__title[data-v-3461cdf0]{margin-top:0px;margin-bottom:0px;padding-top:0.5rem;padding-bottom:0.5rem;line-height:inherit;background:linear-gradient(302.44deg,#8be1c2 .18%,#5b69e2 43.9%,#a764c9 53.21%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.keynote__tabs[data-v-3461cdf0]{margin-bottom:0.75rem;margin-top:1.5rem}.keynote_tab[data-v-3461cdf0]{white-space:pre-line;padding-bottom:1rem}.keynote__hackmd[data-v-3461cdf0], .keynote__slido[data-v-3461cdf0]{width:100%}.keynote__hackmd[data-v-3461cdf0],.keynote__slido[data-v-3461cdf0]{height:800px}.keynote__links[data-v-3461cdf0]{display:flex;justify-content:center;padding-top:0.5rem;padding-bottom:0.5rem}.keynote__extLink[data-v-3461cdf0]{margin-left:0.5rem;margin-right:0.5rem}.keynote__extLink svg[data-v-3461cdf0]{fill:#afaee6}@media (min-width:768px){.keynote__name[data-v-3461cdf0],.keynote__title[data-v-3461cdf0]{font-size:20px}.keynote__photo[data-v-3461cdf0]{margin-top:0.75rem;margin-bottom:0.75rem}.keynote__links[data-v-3461cdf0], .keynote__name[data-v-3461cdf0], .keynote__title[data-v-3461cdf0]{padding-top:0.75rem;padding-bottom:0.75rem}}",""]),r.locals={},t.exports=r}}]);