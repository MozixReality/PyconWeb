(window.webpackJsonp=window.webpackJsonp||[]).push([[69,6,10,19,23],{1009:function(t,e,o){"use strict";o.r(e);o(31),o(35),o(61);var n=o(81),r=Object(n.a)({"en-us":{title:"Panel Discussion",intro:"Panel Discussion is the new event planned for PyCon Taiwan 2023, aiming to facilitate adeeper and more professional exchange of technical knowledge between the attendees andspeakers. Through this activity, speakers will share their own experiences, providing theattendees with opportunities to cultivate diverse thinking, broaden horizons, and enhancetheir expertise while fostering information exchange between different generations. PyConTaiwan 2023 intends to expand the scope of this event and invite renowned professionalsfrom Taiwan to engage in mutual discussions. The goal is to promote the exchange oftechnical knowledge between speakers and attendees through the sharing and passing onof valuable experiences.",formTitle:"Event This Year",form:"The Panel Discussion event will be facilitated by one moderator and will feature threespeakers. During the activity, the moderator will ask questions, and the speakers will engagein a discussion on a specific topic, exploring relevant issues together with the audience.Additionally, there will be a 10-minute Q&amp;A session at the end where the speakers willinteract with the audience, answering their questions and exchanging ideas.",hostHeaderTitle:"Host",participantHeaderTitle:"Participants",speechTitle:"The Impact of Generative AI to Python Developer",speechDescription:"With the rise of generative artificial intelligence, this exciting technology has not only set off an upsurge in the field of art. It will also bring unprecedented impact to workers in various fields, and a change of the times has quietly arrived.We have invited top academic/industrial/political experts to discuss with you the infinite possibilities of generative artificial intelligence and how it can change our future.In addition to gaining insight into the enormous impact of this technology, we will also explore possible issues and challenges, such as ethics and data privacy issues. Let's explore this exciting field together!",terms:{note:"Speech Note",slido:"Slido Link"}},"zh-hant":{title:"Panel Discussion",intro:"Panel Discussion 是在 PyCon Taiwan 2023 首次規劃的新活動，旨在於讓聽眾與講者們對於技術與知識有更深入、更專業的交流。讓講者們透過這個活動去分享自身經歷，提供聽眾培養多元思考、開拓眼界、增進專業知識的機會，交流不同世代間的資訊。在 PyCon Taiwan 2023 我們將擴大舉辦並邀請台灣知名專業的講者來相互討論，期望透過學習經驗的交流與傳承，促進講者與聽眾的技術交流。",formTitle:"活動形式",form:"Panel Discussion 整個活動將由一位主持人引導，並有三名講者參與。在活動中，主持人會提問，講者們將針對一個主題進行討論，並與聽眾一起共同探索相關議題。最後會保留 10 分鐘講者與觀眾互動的 Q&A 時段。",hostHeaderTitle:"主持人",participantHeaderTitle:"與會人",speechTitle:"生成式 AI 對 Python 開發者的影響",speechDescription:"隨著生成式人工智慧的崛起，這項令人興奮的技術不僅在藝術領域掀起熱潮；也將為各領域工作者帶來前所未有的影響，一場時代的變革已經悄然來臨。我們邀請了學/業/政界頂尖的專家們，將與您共同探討生成式人工智慧的無限可能性，以及它如何改變我們的未來。除了洞察這項技術帶來的巨大影響，我們也將探討可能出現的問題與挑戰，例如倫理和數據隱私問題。讓我們一起在這個激動人心的領域探索前行吧！",terms:{note:"前往共筆",slido:"前往 Slido"}}}),d=o(522),l=o(519),c=o(530),h=o(556),m={i18n:r,name:"PageConferenceTalksDetail",components:{I18nPageWrapper:d.default,CoreH1:l.default,TextButton:c.default,Modal:h.default},data:function(){return{isOpened:!1,selectedItem:{},tagToLangIcon:{speech1:o(546)},hosts:[{name:"Yung-Yu Chen",avatar:o(927)}],participants:[{avatar:o(928),name:"蔡炎龍",description:["蔡炎龍教授為美國爾灣加州大學的數學博士，現任國立政治大學應用數學系副教授兼任學務處學務長。蔡教授長期致力於Python的推廣教育，並於2020年與2022年分別出版《少年Py的大冒險：成為Python數據分析達人的第一門課》與《少年Py的大冒險－成為Python AI深度學習達人的第一門課》兩本書，在推廣Python教育方面取得了卓越成果。此外，蔡教授亦擔任擔任政治大學數理資訊學程的召集人和政大 PyDay 的創辦人。"]},{avatar:o(929),name:"柯維然",description:["努力在政府部門中點燃數位與技術的火苗；曾是熱愛用數據與程式解決問題的資料戰警，目前服務於數位發展部部長室，負責協助各單位專案與部內資訊架構服務建置，導入與改善政府數位服務流程，同時於交通大學資訊工程研究所攻讀博士班，主要研究方向為深度生成模型、電腦視覺。",""]},{avatar:o(930),name:"Peter Wolf",description:["語言科學專家、卓騰語言科技創辦人及核心開發工程師。探究人類語言與認知之間的關係，主張自然語言處理需考慮語言的本質，而非直接套用現成的工具處理表面現象。正在執行的任務是透過打造自然語言理解的基礎建設，促成「具人類思維方式」的機器心智。"]}],speechInfos:[{date:"3",month:"Sep",speeches:[{tag:"speech1",speechtime:"15:40-16:40 (GMT+8)",title:this.$t("speechTitle"),full_description:[this.$t("speechDescription")],note_link:"https://hackmd.io/@pycontw/H1PtLsmph",slido_link:"https://app.sli.do/event/eXMeazdzUYv1pv2LePFnfc"}]}]}},methods:{showModal:function(t){this.isOpened=!0,this.selectedItem=t},getSpeakerPhoto:function(t){return t.avatar},getSpeakerName:function(t){return t.name},getSpeakerDescription:function(t){return[t.description]}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("intro")},{hid:"description",name:"description",content:this.$i18n.t("intro")}]}}},f=(o(931),o(8)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("i18n-page-wrapper",{attrs:{"use-bg-decoration":!1}},[o("div",{staticClass:"w-full"},[o("core-h1",{attrs:{title:t.$t("title"),center:""}}),t._v(" "),o("i18n",{staticClass:"intro",attrs:{path:"intro",tag:"p"},scopedSlots:t._u([{key:"br",fn:function(){return[o("br")]},proxy:!0}])}),t._v(" "),o("div",{staticClass:"tableRow"},[o("span",{staticClass:"tableRow__header"},[t._v(t._s(t.$t("formTitle")))]),t._v(" "),o("p",{staticClass:"tableRow__content"},[t._v(t._s(t.$t("form")))])]),t._v(" "),o("div",{staticClass:"tableRow"},[o("span",{staticClass:"tableRow__header"},[t._v(t._s(t.$t("hostHeaderTitle")))]),t._v(" "),o("div",{staticClass:"hostGroup"},t._l(t.hosts,(function(e,n){return o("div",{key:"host-"+n,staticClass:"host"},[o("img",{staticClass:"host__avatar",attrs:{src:e.avatar}}),t._v(" "),o("span",{staticClass:"host__name"},[t._v(t._s(e.name))])])})),0)]),t._v(" "),o("div",{staticClass:"tableRow"},[o("span",{staticClass:"tableRow__header"},[t._v(t._s(t.$t("participantHeaderTitle")))]),t._v(" "),o("div",{staticClass:"participantGroup"},t._l(t.participants,(function(e,n){return o("div",{key:"participant-"+n,staticClass:"participant",on:{click:function(o){return t.showModal(e)}}},[o("img",{staticClass:"participant__avatar",attrs:{src:e.avatar}}),t._v(" "),o("span",{staticClass:"participant__name"},[t._v(t._s(e.name))])])})),0)])],1),t._v(" "),o("div",{staticClass:"agenda"},t._l(t.speechInfos,(function(e,n){return o("div",{key:"speech_info_"+n,staticClass:"speechDayList"},[o("div",{staticClass:"day"},[o("p",{staticClass:"day__date"},[t._v("\n                    "+t._s(e.date)+"\n                ")]),t._v(" "),o("p",{staticClass:"day__month"},[t._v("\n                    "+t._s(e.month)+"\n                ")])]),t._v(" "),o("div",{staticClass:"speechListWrapper"},[t._l(e.speeches,(function(e,n){return o("div",{key:"speech_"+n,staticClass:"speechBoxWrapper"},[o("div",{staticClass:"speechBox"},[o("div",[o("p",{staticClass:"speechBox__time"},[t._v("\n                                "+t._s(e.speechtime)+"\n                                "),o("img",{staticClass:"speechBox__langIcon",attrs:{src:t.tagToLangIcon[e.tag]}})]),t._v(" "),o("p",{staticClass:"speechBox__title"},[t._v("\n                                "+t._s(e.title)+"\n                            ")]),t._v(" "),o("div",{staticClass:"speechBox__description"},t._l(e.full_description,(function(desc,e){return o("p",{key:"speech_info_"+n+"_desc_"+e},[t._v("\n                                    "+t._s(desc)+"\n                                ")])})),0),t._v(" "),o("text-button",{staticClass:"linkButton",attrs:{href:e.note_link,secondary:!0}},[t._v("\n                                "+t._s(t.$t("terms.note"))+"\n                            ")]),t._v(" "),o("text-button",{staticClass:"linkButton",attrs:{href:e.slido_link,secondary:!0}},[t._v("\n                                "+t._s(t.$t("terms.slido"))+"\n                            ")])],1)])])})),t._v(" "),o("transition",{attrs:{name:"fade"}},[t.isOpened?o("modal",{attrs:{"img-urls":t.getSpeakerPhoto(t.selectedItem),name:t.getSpeakerName(t.selectedItem),description:t.getSpeakerDescription(t.selectedItem)},model:{value:t.isOpened,callback:function(e){t.isOpened=e},expression:"isOpened"}}):t._e()],1)],2)])})),0)])}),[],!1,null,"d2eb4056",null);e.default=component.exports},515:function(t,e,o){var content=o(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("3cda5dc8",content,!0,{sourceMap:!1})},516:function(t,e,o){var content=o(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("042ecdbe",content,!0,{sourceMap:!1})},517:function(t,e,o){"use strict";o(515)},518:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,"h1[data-v-feb57f82]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 768px){h1[data-v-feb57f82]{margin-bottom:2.25rem}h1[data-v-feb57f82]{font-size:1.5rem;line-height:2rem}}h1[data-v-feb57f82]{text-shadow:#3643b5 2px 1px 0}",""]),n.locals={},t.exports=n},519:function(t,e,o){"use strict";o.r(e);var n={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},r=(o(517),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex justify-center font-serif"},[o("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"feb57f82",null);e.default=component.exports},520:function(t,e,o){"use strict";o(516)},521:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,"h1[data-v-9ddb4acc]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-9ddb4acc]{margin-bottom:1.5rem;margin-top:5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:2.5rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-9ddb4acc], p[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:0.25rem;width:100%;text-align:justify}span.text-2s[data-v-9ddb4acc]{font-size:.625rem}ul[data-v-9ddb4acc]{margin-bottom:1.5rem}ul.list-disc[data-v-9ddb4acc]{padding-left:3rem}li[data-v-9ddb4acc]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-9ddb4acc]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),n.locals={},t.exports=n},522:function(t,e,o){"use strict";o.r(e);var n={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},r=(o(520),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.pageWrapperClass},[o("div",{class:t.classObject},[t._t("default")],2)])}),[],!1,null,"9ddb4acc",null);e.default=component.exports},523:function(t,e,o){var content=o(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("7b369a60",content,!0,{sourceMap:!1})},526:function(t,e,o){var n=o(51),r=o(26),d=/"/g;t.exports=function(t,e,o,l){var c=r(n(t)),h="<"+e;return""!==o&&(h+=" "+o+'="'+r(l).replace(d,"&quot;")+'"'),h+">"+c+"</"+e+">"}},527:function(t,e,o){var n=o(9);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},528:function(t,e,o){"use strict";var n=o(7),r=o(526);n({target:"String",proto:!0,forced:o(527)("small")},{small:function(){return r(this,"small","","")}})},529:function(t,e,o){"use strict";var n=o(81);e.a=Object(n.a)({"en-us":{pyconWelcome:"Welcome to PyCon TW 2024",pyconIntro:"PyCon Taiwan",achieveFirstStatLine:"Hold",achieveFirstEndLine:"years",achieveSecondStatLine:"Every Year",achieveSecondEndLine:"Speeches",achieveThirdStatLine:"Audience",achieveThirdEndLine:"People",sponsor:"Sponsor Us",sponsorList:"Sponsors",sponsorUs:"Be a Sponsor",bulletinList:"Latest Announcement",joinUs:"Join Us",callForProposals:"Call for Proposals",checkEvents:"Event Schedule",buyTickets:"Buy Tickets Now",typhoonInfoTitle:"Typhoon Preparedness Measures",typhoonInfo:"The event on September 2nd-3rd, 2023, depends on Taipei City Government's Closure Announcement. Stay updated via PyCon Taiwan official website and social media.{br}The organizer reserves the right to make final revisions, changes, interpretations of the event, and cancellations of “PyCon TW 2023”.{br}Let's say it:\"PyCon TW 2023 will definitely be held successfully!\""},"zh-hant":{pyconWelcome:"歡迎來到 PyCon TW 2024",pyconIntro:"PyCon Taiwan",achieveFirstStatLine:"持續舉辦",achieveFirstEndLine:"年",achieveSecondStatLine:"每年議程",achieveSecondEndLine:"場以上",achieveThirdStatLine:"參與會眾",achieveThirdEndLine:"人以上",sponsor:"贊助我們",sponsorList:"贊助夥伴",sponsorUs:"成為贊助夥伴",bulletinList:"最新公告",joinUs:"成為志工",callForProposals:"投稿募集",checkEvents:"查看議程",buyTickets:"立即購票",typhoonInfoTitle:"颱風因應措施",typhoonInfo:"本次活動期間 (2023 年 09 月 02 日至 03 日) 將依照「臺北市政府之停班公告」決定是否舉行，最新消息請關注「PyCon Taiwan 官網與社群媒體」之公告。{br}主辦單位保有對「PyCon TW 2023」的最終修改、變更、活動解釋及取消本活動之權利。{br}請跟我一起唸：PyCon TW 2023 一定可以順利舉行！"}})},530:function(t,e,o){"use strict";o.r(e);o(528);var n=o(529),r=o(45),d={i18n:n.a,name:"CoreTextButton",components:{ExtLink:r.a,LocaleLink:r.b},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},large:{type:Boolean,default:!1},small:{type:Boolean,default:!1},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0},uppercase:{type:Boolean,default:!1},bulletin:{type:Boolean,default:!1}},computed:{getLocale:function(){return this.$i18n.locale},coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--bordered":this.bordered,"--large":this.large,"--medium":this.medium,"--small":this.small,"--block":this.block,"--is-link":this.isLink,"--uppercase":this.uppercase,"--bulletin":this.bulletin,"--largeEn":"en-us"===this.getLocale}},medium:function(){return!this.large&&!this.small},isLink:function(){return this.href||this.to}}},l=(o(531),o(8)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.coreButtonClasses},[t.href?o("ext-link",{attrs:{href:t.href}},[o("span",[t._t("default")],2)]):t.to?o("locale-link",{attrs:{to:t.to,customized:""}},[o("span",[t._t("default")],2)]):t._t("default")],2)}),[],!1,null,"7bd0f299",null);e.default=component.exports},531:function(t,e,o){"use strict";o(523)},532:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,'.core-button[data-v-7bd0f299]{position:relative}.core-button>a[data-v-7bd0f299]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;outline:2px solid transparent;outline-offset:2px}.core-button.--is-link>a[data-v-7bd0f299], .core-button[data-v-7bd0f299]:not(.--is-link){display:inline-flex;align-items:center;justify-content:center;outline:2px solid transparent;outline-offset:2px}.core-button.--is-link>a[data-v-7bd0f299],.core-button[data-v-7bd0f299]:not(.--is-link){line-height:1.25rem;border-radius:40px}.core-button[data-v-7bd0f299]:not(.--is-link){cursor:default;--tw-border-opacity:1;border-color:rgba(168, 180, 202, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(168, 180, 202, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}.core-button.--uppercase>a[data-v-7bd0f299]{text-transform:uppercase}.core-button.--primary>a[data-v-7bd0f299]{z-index:10;border-width:0;--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity));background-image:linear-gradient(276.15deg,#61c8a4 .74%,#548fcb 32.18%,#3849de 53.25%,#be3692 93.14%)}.core-button.--primary>a span[data-v-7bd0f299]{position:relative;z-index:30}.core-button.--primary>a[data-v-7bd0f299]:hover:after{opacity:1}.core-button.--primary.--large[data-v-7bd0f299]:not(.--is-link), .core-button.--primary.--large>a[data-v-7bd0f299]{font-weight:700}.core-button.--primary.--large[data-v-7bd0f299]:not(.--is-link),.core-button.--primary.--large>a[data-v-7bd0f299]{height:86px;font-size:28px;padding:24px 48px;min-width:128px}.core-button.--primary.--largeEn>a[data-v-7bd0f299]{min-width:323px}.core-button.--primary.--medium[data-v-7bd0f299]:not(.--is-link), .core-button.--primary.--medium>a[data-v-7bd0f299]{font-weight:600}.core-button.--primary.--medium[data-v-7bd0f299]:not(.--is-link),.core-button.--primary.--medium>a[data-v-7bd0f299]{height:68px;font-size:24px;padding:16px 48px;min-width:108px}.core-button.--primary.--small[data-v-7bd0f299]:not(.--is-link), .core-button.--primary.--small>a[data-v-7bd0f299]{height:3rem;font-size:1rem;line-height:1.5rem;font-weight:600}.core-button.--primary.--small[data-v-7bd0f299]:not(.--is-link),.core-button.--primary.--small>a[data-v-7bd0f299]{padding:10px 22px;min-width:80px;height:60px;font-size:20px}.core-button.--primary>a[data-v-7bd0f299]:after{position:absolute;left:0px;top:0px;height:100%;width:100%;z-index:20;opacity:0;border-radius:inherit;content:"";background-image:linear-gradient(96.26deg,#5fbeab 5.5%,#66b4e2 31.92%,#4454df 53.53%,#be3692 82.35%);transition:opacity .5s ease-out}.core-button.--bordered>a[data-v-7bd0f299]{z-index:10;--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity));background:linear-gradient(#121023,#121023) padding-box,linear-gradient(276.15deg,#61c8a4 .74%,#548fcb 32.18%,#3849de 53.25%,#be3692 93.14%) border-box;border:5px solid transparent;border-radius:40px}.core-button.--bordered>a span[data-v-7bd0f299]{position:relative;z-index:30}.core-button.--bordered>a[data-v-7bd0f299]:hover:after{opacity:1}.core-button.--bordered.--large[data-v-7bd0f299]:not(.--is-link), .core-button.--bordered.--large>a[data-v-7bd0f299]{font-weight:700}.core-button.--bordered.--large[data-v-7bd0f299]:not(.--is-link),.core-button.--bordered.--large>a[data-v-7bd0f299]{height:86px;font-size:28px;padding:24px 48px;min-width:128px}.core-button.--bordered.--largeEn>a[data-v-7bd0f299]{min-width:323px}.core-button.--bordered.--medium[data-v-7bd0f299]:not(.--is-link), .core-button.--bordered.--medium>a[data-v-7bd0f299]{font-weight:600}.core-button.--bordered.--medium[data-v-7bd0f299]:not(.--is-link),.core-button.--bordered.--medium>a[data-v-7bd0f299]{height:68px;font-size:24px;padding:16px 48px;min-width:108px}.core-button.--bordered.--small[data-v-7bd0f299]:not(.--is-link), .core-button.--bordered.--small>a[data-v-7bd0f299]{height:3rem;font-size:1rem;line-height:1.5rem;font-weight:600}.core-button.--bordered.--small[data-v-7bd0f299]:not(.--is-link),.core-button.--bordered.--small>a[data-v-7bd0f299]{padding:10px 22px;min-width:80px;height:60px;font-size:20px}.core-button.--bordered>a[data-v-7bd0f299]:after{position:absolute;left:0px;top:0px;height:100%;width:100%;z-index:20;opacity:0;border-radius:inherit;content:"";background:linear-gradient(#121023,#121023) padding-box,linear-gradient(96.26deg,#5fbeab 5.5%,#66b4e2 31.92%,#4454df 53.53%,#be3692 82.35%) border-box;border:5px solid transparent;transition:opacity .5s ease-out}.core-button.--secondary>a[data-v-7bd0f299]{z-index:10;--tw-bg-opacity:1;background-color:rgba(218, 139, 220, var(--tw-bg-opacity));background-image:none}.core-button.--secondary>a span[data-v-7bd0f299]{position:relative;z-index:30;--tw-text-opacity:1;color:rgba(26, 26, 48, var(--tw-text-opacity))}.core-button.--secondary>a:hover span[data-v-7bd0f299]{--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity))}.core-button.--secondary>a[data-v-7bd0f299]:hover:after{opacity:1}.core-button.--secondary.--large[data-v-7bd0f299]:not(.--is-link), .core-button.--secondary.--large>a[data-v-7bd0f299]{font-weight:700}.core-button.--secondary.--large[data-v-7bd0f299]:not(.--is-link),.core-button.--secondary.--large>a[data-v-7bd0f299]{height:57px;font-size:18px;padding:16px 36px}.core-button.--secondary.--medium[data-v-7bd0f299]:not(.--is-link), .core-button.--secondary.--medium>a[data-v-7bd0f299], .core-button.--secondary.--small[data-v-7bd0f299]:not(.--is-link), .core-button.--secondary.--small>a[data-v-7bd0f299]{font-weight:700}.core-button.--secondary.--medium[data-v-7bd0f299]:not(.--is-link),.core-button.--secondary.--medium>a[data-v-7bd0f299],.core-button.--secondary.--small[data-v-7bd0f299]:not(.--is-link),.core-button.--secondary.--small>a[data-v-7bd0f299]{height:42px;font-size:20px;padding:10px 22px}.core-button.--secondary>a[data-v-7bd0f299]:after{position:absolute;left:0px;top:0px;height:100%;width:100%;--tw-border-opacity:1;border-color:rgba(218, 139, 220, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(26, 26, 48, var(--tw-bg-opacity));z-index:20;opacity:0;content:"";background-image:none;border-radius:inherit;transition:opacity .5s ease-out}.core-button.--secondary.--medium>a[data-v-7bd0f299]:after,.core-button.--secondary.--small>a[data-v-7bd0f299]:after{border-width:3px}.core-button.--secondary.--large>a[data-v-7bd0f299]:after{border-width:2px}.core-button.--medium.--bulletin.--is-link>a[data-v-7bd0f299],.core-button.--medium.--bulletin[data-v-7bd0f299]:not(.--is-link){border-width:3px}',""]),n.locals={},t.exports=n},540:function(t,e,o){var content=o(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("2a5de48c",content,!0,{sourceMap:!1})},546:function(t,e,o){t.exports=o.p+"img/ZHZH.38617ef.svg"},548:function(t,e,o){"use strict";o(540)},549:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,".modal[data-v-3706d566]{position:fixed;left:0px;top:0px;z-index:9998;display:flex;height:100vh;width:100%;align-items:center;justify-content:center;background-color:rgba(18,16,35,.6);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.closingArea[data-v-3706d566]{position:absolute;z-index:9999;height:100%;width:100%}.lightBox[data-v-3706d566]{position:relative;display:flex;width:91.666667%;flex-direction:column;border-radius:1.5rem;border-width:3px;--tw-border-opacity:1;border-color:rgba(195, 134, 174, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(18, 16, 35, var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:1.25rem;padding-bottom:1.25rem;z-index:10000}@media (min-width: 768px){.lightBox[data-v-3706d566]{width:80%}.lightBox[data-v-3706d566]{max-width:42rem}.lightBox[data-v-3706d566]{border-width:2px}.lightBox[data-v-3706d566]{padding-left:3rem;padding-right:3rem}.lightBox[data-v-3706d566]{padding-bottom:1.5rem}.lightBox[data-v-3706d566]{padding-top:3.5rem}}.lightBox__closeButtonContainer[data-v-3706d566]{position:absolute;right:17px;top:17px;margin-left:auto;display:flex;cursor:pointer;--tw-text-opacity:1;color:rgba(195, 134, 174, var(--tw-text-opacity))}@media (min-width:768px){.lightBox__closeButtonContainer[data-v-3706d566]{right:38.5px}.lightBox__closeButtonContainer[data-v-3706d566]{top:39.25px}}.lightBox__closeButton[data-v-3706d566]{height:1.25rem;width:1.25rem}.lightBox__photo__box[data-v-3706d566]{position:relative;margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:0px;display:flex}.lightBox__photo[data-v-3706d566]{height:4rem;width:4rem}@media (min-width: 768px){.lightBox__photo[data-v-3706d566]{height:6rem}.lightBox__photo[data-v-3706d566]{width:6rem}}.lightBox__photo[data-v-3706d566]{position:relative;margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:0px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:1rem;transform:translateX(-20px)}.lightBox__photo[data-v-3706d566]:first-of-type{transform:translateX(0)}.lightBox__photo>img[data-v-3706d566]{position:absolute;-o-object-fit:contain;object-fit:contain;width:calc(100% - 10px)}.img__bg[data-v-3706d566]{--tw-bg-opacity:1;background-color:rgba(247, 246, 254, var(--tw-bg-opacity))}.lightBox__header[data-v-3706d566]{display:flex;flex-direction:column;align-items:center}.lightBox__title[data-v-3706d566]{margin-top:0.75rem;font-family:Noto Serif TC, -apple-system, serif;font-size:1.125rem;line-height:1.75rem;font-weight:600}@media (min-width: 768px){.lightBox__title[data-v-3706d566]{margin-top:1.5rem}.lightBox__title[data-v-3706d566]{font-size:1.25rem;line-height:1.75rem}}.lightBox__intro[data-v-3706d566]{margin-top:0.875rem;display:flex;flex-direction:column;overflow-y:auto;font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-size:1rem;line-height:1.5rem;font-weight:400;max-height:10rem;white-space:pre-line}@media (min-width: 768px){.lightBox__intro[data-v-3706d566]{margin-top:1rem}.lightBox__intro[data-v-3706d566]{font-size:1.125rem;line-height:1.75rem}}.lightBox__buttons[data-v-3706d566]{margin-left:auto;margin-right:auto;margin-top:1.5rem}@media (min-width: 768px){.lightBox__buttons[data-v-3706d566]{margin-top:1.5rem;margin-bottom:1.5rem}}",""]),n.locals={},t.exports=n},556:function(t,e,o){"use strict";o.r(e);var n=o(81),r={i18n:Object(n.a)({"en-us":{website:"Website"},"zh-hant":{website:"官方網站"}}),name:"Modal",components:{TextButton:o(530).default},props:{value:{type:Boolean,default:!1},imgUrls:{type:[Array,String],default:""},imgBg:{type:Boolean,default:!1},name:{type:String,default:""},intro:{type:String,default:""},websiteUrl:{type:String,default:""},description:{type:Array,default:function(){return[]}}},data:function(){return{shouldShowModal:this.value}},watch:{value:function(t){this.shouldShowModal=t}},methods:{close:function(){this.shouldShowModal=!1,this.$emit("input",!1)},getImgUrlArr:function(){var t=[];return!0===Array.isArray(this.imgUrls)?t=this.imgUrls:t.push(this.imgUrls),t}}},d=(o(548),o(8)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowModal,expression:"shouldShowModal"}],staticClass:"modal"},[o("div",{staticClass:"closingArea",on:{click:t.close}}),t._v(" "),o("div",{staticClass:"lightBox"},[o("div",{staticClass:"lightBox__closeButtonContainer",on:{click:t.close}},[o("fa",{staticClass:"lightBox__closeButton",attrs:{icon:"times"}})],1),t._v(" "),o("div",{staticClass:"lightBox__photo__box"},t._l(t.getImgUrlArr(),(function(e){return o("div",{key:e,staticClass:"lightBox__photo",class:{img__bg:t.imgBg}},[o("img",{attrs:{src:e,alt:"photo"}})])})),0),t._v(" "),o("div",{staticClass:"lightBox__header"},[o("h1",{staticClass:"lightBox__title"},[t._v("\n                "+t._s(t.name)+"\n            ")])]),t._v(" "),o("div",{staticClass:"lightBox__intro"},[o("p",{staticClass:"text-sm"},[t._v(t._s(t.intro))]),t._v(" "),t._l(t.description,(function(e){return o("div",{key:e.id},t._l(e,(function(line){return o("p",{key:line.id,staticClass:"text-sm"},[t._v("\n                    "+t._s(line)+"\n                ")])})),0)}))],2),t._v(" "),t.websiteUrl?o("div",{staticClass:"lightBox__buttons"},[o("text-button",{attrs:{href:t.websiteUrl,secondary:!0,primary:!1}},[t._v(t._s(t.$t("website")))])],1):t._e()])])}),[],!1,null,"3706d566",null);e.default=component.exports},725:function(t,e,o){var content=o(932);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("43e0d64a",content,!0,{sourceMap:!1})},927:function(t,e,o){t.exports=o.p+"img/YungYuChen.c44b0b8.jpeg"},928:function(t,e,o){t.exports=o.p+"img/蔡炎龍.9f4c9ce.jpeg"},929:function(t,e,o){t.exports=o.p+"img/柯維然.ba4d384.jpeg"},930:function(t,e,o){t.exports=o.p+"img/PeterWolf.2f517fa.jpeg"},931:function(t,e,o){"use strict";o(725)},932:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,".intro[data-v-d2eb4056]{margin-bottom:2rem;font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-size:0.875rem;line-height:1.25rem;line-height:1.25rem}@media (min-width: 768px){.intro[data-v-d2eb4056]{font-size:0.875rem;line-height:1.25rem}.intro[data-v-d2eb4056]{line-height:2rem}}.intro[data-v-d2eb4056]{line-height:30px}.tableRow[data-v-d2eb4056]{margin-left:0px;margin-right:0px}@media (min-width: 768px){.tableRow[data-v-d2eb4056]{margin-bottom:2rem}}.tableRow[data-v-d2eb4056]{display:flex;flex-direction:column;justify-content:space-around}@media (min-width: 768px){.tableRow[data-v-d2eb4056]{flex-direction:row}}.tableRow[data-v-d2eb4056]{text-align:center}.tableRow__header[data-v-d2eb4056]{margin-top:0px;margin-bottom:0px;width:100%}@media (min-width: 768px){.tableRow__header[data-v-d2eb4056]{width:20%}}.tableRow__header[data-v-d2eb4056]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-weight:400;--tw-text-opacity:1;color:rgba(147, 135, 255, var(--tw-text-opacity));font-size:1rem;line-height:1.5rem}@media (min-width: 768px){.tableRow__header[data-v-d2eb4056]{font-size:1.125rem;line-height:1.75rem}}.tableRow__header[data-v-d2eb4056]{text-align:left}.tableRow__content[data-v-d2eb4056]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-weight:400;font-size:0.875rem;line-height:1.25rem}.agenda[data-v-d2eb4056]{margin-left:auto;margin-right:auto;width:100%}.speechDayList[data-v-d2eb4056]{display:flex;flex-direction:column}@media (min-width: 768px){.speechDayList[data-v-d2eb4056]{flex-direction:row}}.speechDayList[data-v-d2eb4056]{margin-bottom:0px}@media (min-width: 768px){.speechDayList[data-v-d2eb4056]{margin-bottom:2.5rem}}.day[data-v-d2eb4056]{display:flex;flex-direction:column;margin-bottom:1.25rem;margin-top:2.25rem}@media (min-width: 768px){.day[data-v-d2eb4056]{margin-bottom:0px}.day[data-v-d2eb4056]{margin-top:0px}}.day__date[data-v-d2eb4056]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-size:2.25rem;line-height:2.5rem;font-weight:400}@media (min-width: 768px){.day__date[data-v-d2eb4056]{font-size:3rem;line-height:1}}.day__date[data-v-d2eb4056]{margin-top:0px;margin-bottom:0px}.day__month[data-v-d2eb4056]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-size:1rem;line-height:1.5rem;font-weight:400;margin-top:0px;margin-bottom:0px;line-height:1.5}.speechListWrapper[data-v-d2eb4056]{display:flex;flex-direction:column;margin-left:0px;margin-right:0px}@media (min-width: 768px){.speechListWrapper[data-v-d2eb4056]{margin-left:5rem}}.speechBoxWrapper[data-v-d2eb4056]{display:flex;flex-direction:column}.speechBox[data-v-d2eb4056]{margin-top:1.25rem;padding-left:1.25rem;padding-right:1.25rem;padding-top:1rem}@media (min-width: 768px){.speechBox[data-v-d2eb4056]{padding-left:2.5rem;padding-right:2.5rem}}.speechBox[data-v-d2eb4056]{display:flex;flex-direction:column}@media (min-width: 768px){.speechBox[data-v-d2eb4056]{flex-direction:row}}.speechBox[data-v-d2eb4056]{border-width:1px;--tw-border-opacity:1;border-color:rgba(31, 28, 59, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity));position:relative;border-radius:24px}.speechBoxWrapper:first-of-type .speechBox[data-v-d2eb4056]{margin-top:0px}.speechBox__time[data-v-d2eb4056]{margin-top:0px;margin-bottom:0px}.speechBox__langIcon[data-v-d2eb4056]{display:inline-block}.speechBox__title[data-v-d2eb4056]{display:flex;flex-direction:row;font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-weight:400;font-size:1.125rem;line-height:1.75rem;margin-bottom:0.5rem;margin-top:0.25rem;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity))}.speechBox__speaker[data-v-d2eb4056]{text-decoration:underline;font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:400;margin-top:0px;margin-bottom:0px;display:inline-block}.speechBox__description[data-v-d2eb4056]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:400;--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity));margin-bottom:0px;margin-top:0.5rem;overflow:hidden}.linkButton[data-v-d2eb4056]{margin-top:1.5rem;margin-bottom:1.5rem}.speechModal__closingArea[data-v-d2eb4056]{position:absolute;height:100%;width:100%;z-index:9999}.hostGroup[data-v-d2eb4056], .participantGroup[data-v-d2eb4056]{display:flex;width:100%;flex-wrap:wrap;padding-top:1rem}@media (min-width: 768px){.hostGroup[data-v-d2eb4056], .participantGroup[data-v-d2eb4056]{padding:0px}}.host[data-v-d2eb4056], .participant[data-v-d2eb4056]{margin-right:1.25rem;display:flex;flex-direction:column}@media (min-width: 768px){.host[data-v-d2eb4056], .participant[data-v-d2eb4056]{margin-right:3.5rem}}.participant[data-v-d2eb4056]:hover{cursor:pointer;--tw-text-opacity:1;color:rgba(147, 135, 255, var(--tw-text-opacity))}.host__avatar[data-v-d2eb4056], .participant__avatar[data-v-d2eb4056]{height:4rem;width:4rem;border-radius:9999px;-o-object-fit:cover;object-fit:cover}@media (min-width: 768px){.host__avatar[data-v-d2eb4056], .participant__avatar[data-v-d2eb4056]{height:5rem}.host__avatar[data-v-d2eb4056], .participant__avatar[data-v-d2eb4056]{width:5rem}}.host__name[data-v-d2eb4056], .participant__name[data-v-d2eb4056]{font-family:Noto Serif TC, -apple-system, serif;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}@media (min-width: 768px){.host__name[data-v-d2eb4056], .participant__name[data-v-d2eb4056]{font-size:0.875rem;line-height:1.25rem}}.host__name[data-v-d2eb4056], .participant__name[data-v-d2eb4056]{max-width:4.5rem;padding:0.25rem;text-align:center}.fade-enter-active[data-v-d2eb4056],.fade-leave-active[data-v-d2eb4056]{transition:opacity .3s}.fade-enter[data-v-d2eb4056], .fade-leave-to[data-v-d2eb4056]{opacity:0}",""]),n.locals={},t.exports=n}}]);