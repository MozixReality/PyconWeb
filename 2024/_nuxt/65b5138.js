(window.webpackJsonp=window.webpackJsonp||[]).push([[66,9,10,11,12,14,18,21,22,23,28,29],{1028:function(e,t,r){"use strict";r.r(t);r(35),r(58),r(28),r(59);var o=r(17),n=r(6),l=(r(44),r(30),r(34),r(33),r(47),r(53),r(108)),c=r(585),d=r(522),h=r(519),f=r(751),m=r(642),_=r(643),v=r(82),w=r(588),C=r(644),y=r(645),x=r(646),k=r(752);function E(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S={i18n:c.a,name:"PageConferenceTalksDetail",components:{I18nPageWrapper:d.default,CoreH1:h.default,Tab:m.default,Tabs:_.default,ExtLink:v.default,FacebookIcon:C.default,GithubIcon:y.default,TwitterIcon:x.default,Youtube:w.default,MarkdownRenderer:f.default,RelatedCardCollection:k.default},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,o,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,o=e.params,!(n=e.payload)||0===Object.keys(n).length){t.next=3;break}return t.abrupt("return",{speechData:n});case 3:return t.next=5,r.dispatch("$getSpeechData",{eventType:o.eventType,eventId:o.id});case 5:return l=r.state.speechData,t.abrupt("return",{speechData:l});case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{eventType:"",data:{title:"",detailed_description:"",language:"ENEN",python_level:"NOVICE",category:"WEB",eventTimeString:""},locationMapping:{"4-r0":"R0","5-r1":"R1","6-r2":"R2","1-r3":"R3"}}},computed:T({},Object(l.b)(["speechData"])),created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.processData();case 2:return e.$root.$emit("initTabs"),t.next=5,e.$store.dispatch("$getRelatedData",e.data.category);case 5:case"end":return t.stop()}}),t)})))()},methods:{fetchRelatedSpeeches:function(){var e=this;return this.$store.state.relatedData.filter((function(t){return t.id!==e.speechData.id}))},processData:function(){var e=this.speechData.begin_time,t=this.speechData.end_time,r=e&&this.$parseDate(e),o=t&&this.$parseDate(t);this.data=T(T({},this.speechData),{},{eventTimeString:this.getEventTimeString(r,o)})},getDateTag:function(e){return e<this.$parseDate("".concat(this.$store.state.configs.conferenceDate,"T16:00:00Z"))?"day1":"day2"},getEventTimeString:function(e,t){var r=this.getDateTag(e),o=this.$datetimeToString(e,{outputFormat:"HH:mm"}),n=this.$datetimeToString(t,{outputFormat:"HH:mm"});return o&&n?"".concat(this.$i18n.t("terms.".concat(r))," • ")+"".concat(o,"-").concat(n," ")+"(".concat(this.$datetimeToString(e,{outputFormat:"z"}),")"):null},isValidLocation:function(e){return Object.keys(this.locationMapping).includes(e)},metaInfo:function(){return{title:this.data.title,meta:[{hid:"og:title",property:"og:title",content:this.data.title},{hid:"og:description",property:"og:description",content:this.data.abstract},{hid:"description",name:"description",content:this.data.abstract}]}}}},P=(r(990),r(8)),component=Object(P.a)(S,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("i18n-page-wrapper",{staticClass:"px-4 py-20 sm:px-8 md:px-16 lg:px-32",attrs:{"custom-x":""}},[r("core-h1",{staticClass:"font-black",attrs:{title:e.data.title,center:""}}),e._v(" "),r("div",{staticClass:"speech__speakers"},e._l(e.data.speakers,(function(t,o){return r("div",{key:"speech_details_speaker_"+o,staticClass:"speech__speakerContainer"},[r("div",{staticClass:"speech__speaker"},[r("div",{staticClass:"speech__speakerThumbnail"},[r("img",{attrs:{src:t.thumbnail_url,alt:t.name}})]),e._v(" "),r("p",{staticClass:"speech__speakerName"},[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"speech__profile"},[t.facebook_profile_url?r("div",{staticClass:"speech__extLink"},[r("ext-link",{attrs:{href:t.facebook_profile_url}},[r("facebook-icon")],1)],1):e._e(),e._v(" "),t.github_profile_url?r("div",{staticClass:"speech__extLink"},[r("ext-link",{attrs:{href:t.github_profile_url}},[r("github-icon")],1)],1):e._e(),e._v(" "),t.twitter_profile_url?r("div",{staticClass:"speech__extLink"},[r("ext-link",{attrs:{href:t.twitter_profile_url}},[r("twitter-icon")],1)],1):e._e()])]),e._v(" "),r("p",{staticClass:"speech__intro"},[e._v("\n                "+e._s(t.bio)+"\n            ")])])})),0),e._v(" "),r("tabs",{staticClass:"speech__tabs"},[r("tab",{attrs:{title:e.$t("terms.intro")}},[r("div",{staticClass:"speech__tabBox"},[r("p",{staticClass:"speech__tabParagraphTitle"},[e._v("\n                    "+e._s(e.$t("terms.abstract"))+"\n                ")]),e._v(" "),r("p",{staticClass:"speech__tabParagraph"},[e._v("\n                    "+e._s(e.data.abstract)+"\n                ")])]),e._v(" "),r("div",{staticClass:"speech__tabBox"},[r("p",{staticClass:"speech__tabParagraphTitle"},[e._v("\n                    "+e._s(e.$t("terms.description"))+"\n                ")]),e._v(" "),r("markdown-renderer",{attrs:{markdown:e.data.detailed_description}})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!!e.data.slide_link,expression:"!!data.slide_link"}],staticClass:"speech__extLink mt-4"},[r("ext-link",{attrs:{href:e.data.slide_link}},[r("fa",{staticClass:"mr-2",attrs:{icon:["fa","link"],"aria-hidden":"true"}}),e._v("Slides\n                ")],1)],1),e._v(" "),e.data.youtube_id?r("div",{staticClass:"mt-4"},[r("p",{staticClass:"speech__tabParagraphTitle"},[e._v("\n                    "+e._s(e.$t("terms.video"))+"\n                ")]),e._v(" "),r("youtube",{attrs:{"video-id":e.data.youtube_id}})],1):e._e()]),e._v(" "),r("tab",{attrs:{title:e.$t("terms.else")}},[r("div",{staticClass:"speech__info"},[r("p",{staticClass:"speech__tabParagraphTitle"},[e._v("\n                    "+e._s(e.$t("terms.location"))+"\n                ")]),e._v(" "),e.isValidLocation(e.data.location)?r("p",{staticClass:"speech__tabParagraph"},[e._v("\n                    "+e._s(e.locationMapping[e.data.location])+"\n                ")]):r("p",{staticClass:"speech__tabParagraph"},[e._v("\n                    "+e._s(e.$t("terms.TBA"))+"\n                ")])]),e._v(" "),r("div",{staticClass:"speech__info"},[r("p",{staticClass:"speech__tabParagraphTitle"},[e._v("\n                    "+e._s(e.$t("terms.date"))+"\n                ")]),e._v(" "),e.data.eventTimeString?r("p",{staticClass:"speech__tabParagraph"},[e._v("\n                    "+e._s(e.data.eventTimeString)+"\n                ")]):r("p",{staticClass:"speech__tabParagraph"},[e._v("\n                    "+e._s(e.$t("terms.TBA"))+"\n                ")])]),e._v(" "),r("div",{staticClass:"speech__info"},[r("p",{staticClass:"speech__tabParagraphTitle"},[e._v("\n                    "+e._s(e.$t("terms.language"))+"\n                ")]),e._v(" "),r("p",{staticClass:"speech__tabParagraph"},[e._v("\n                    "+e._s(e.$t("languages."+e.data.language))+"\n                ")])]),e._v(" "),r("div",{staticClass:"speech__info"},[r("p",{staticClass:"speech__tabParagraphTitle"},[e._v("\n                    "+e._s(e.$t("terms.level"))+"\n                ")]),e._v(" "),r("p",{staticClass:"speech__tabParagraph"},[e._v("\n                    "+e._s(e.$t("levels."+e.data.python_level))+"\n                ")])]),e._v(" "),r("div",{staticClass:"speech__info"},[r("p",{staticClass:"speech__tabParagraphTitle"},[e._v("\n                    "+e._s(e.$t("terms.category"))+"\n                ")]),e._v(" "),r("p",{staticClass:"speech__tabParagraph"},[e._v("\n                    "+e._s(e.$t("categories."+e.data.category))+"\n                ")])])]),e._v(" "),e.data.slido_embed_link?r("tab",{attrs:{title:"Slido"}},[r("iframe",{staticClass:"speech__slido",attrs:{src:e.data.slido_embed_link}})]):e._e(),e._v(" "),e.data.hackmd_embed_link?r("tab",{attrs:{title:e.$t("terms.note")}},[r("iframe",{staticClass:"speech__hackmd",attrs:{src:e.data.hackmd_embed_link}})]):e._e()],1),e._v(" "),r("related-card-collection",{attrs:{related:e.fetchRelatedSpeeches()}})],1)}),[],!1,null,"b991fae0",null);t.default=component.exports},515:function(e,t,r){var content=r(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("3cda5dc8",content,!0,{sourceMap:!1})},516:function(e,t,r){var content=r(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("042ecdbe",content,!0,{sourceMap:!1})},517:function(e,t,r){"use strict";r(515)},518:function(e,t,r){var o=r(19)((function(i){return i[1]}));o.push([e.i,"h1[data-v-feb57f82]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 768px){h1[data-v-feb57f82]{margin-bottom:2.25rem}h1[data-v-feb57f82]{font-size:1.5rem;line-height:2rem}}h1[data-v-feb57f82]{text-shadow:#3643b5 2px 1px 0}",""]),o.locals={},e.exports=o},519:function(e,t,r){"use strict";r.r(t);var o={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},n=(r(517),r(8)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center font-serif"},[r("h1",{class:e.classObject},[e._v(e._s(e.title))])])}),[],!1,null,"feb57f82",null);t.default=component.exports},520:function(e,t,r){"use strict";r(516)},521:function(e,t,r){var o=r(19)((function(i){return i[1]}));o.push([e.i,"h1[data-v-9ddb4acc]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-9ddb4acc]{margin-bottom:1.5rem;margin-top:5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:2.5rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-9ddb4acc], p[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:0.25rem;width:100%;text-align:justify}span.text-2s[data-v-9ddb4acc]{font-size:.625rem}ul[data-v-9ddb4acc]{margin-bottom:1.5rem}ul.list-disc[data-v-9ddb4acc]{padding-left:3rem}li[data-v-9ddb4acc]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-9ddb4acc]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),o.locals={},e.exports=o},522:function(e,t,r){"use strict";r.r(t);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},n=(r(520),r(8)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.pageWrapperClass},[r("div",{class:e.classObject},[e._t("default")],2)])}),[],!1,null,"9ddb4acc",null);t.default=component.exports},546:function(e,t,r){e.exports=r.p+"img/ZHZH.38617ef.svg"},552:function(e,t,r){e.exports=r.p+"img/ENEN.5a408d1.svg"},553:function(e,t,r){e.exports=r.p+"img/ZHEN.371966e.svg"},554:function(e,t,r){e.exports=r.p+"img/JPEN.638520e.svg"},555:function(e,t,r){var content=r(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("48cd3259",content,!0,{sourceMap:!1})},576:function(e,t,r){var content=r(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("6272cb6d",content,!0,{sourceMap:!1})},583:function(e,t,r){"use strict";r(555)},584:function(e,t,r){var o=r(19)((function(i){return i[1]}));o.push([e.i,'.speechCard[data-v-082f0eea]{position:relative;border-radius:12px;--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-bottom:1rem;padding-top:12px;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border-width:1px;border-style:solid;border-color:transparent;overflow:hidden;overflow-wrap:anywhere}.speechCard[data-v-082f0eea]:hover{--tw-bg-opacity:1;background-color:rgba(53, 45, 102, var(--tw-bg-opacity));border-color:#746bb8;box-shadow:0 0 10px 7px #403778}.speechCard:hover .speechCard__title[data-v-082f0eea]{--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity))}.speechCard__levelTriangle[data-v-082f0eea]{position:absolute;left:0px;top:0px;height:3.5rem;width:4rem;content:"";-webkit-clip-path:polygon(0 0,0 100%,100% 0);clip-path:polygon(0 0,0 100%,100% 0);border-top-left-radius:12px}.speechCard__level[data-v-082f0eea]{position:absolute;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;--tw-text-opacity:1;color:rgba(31, 28, 59, var(--tw-text-opacity))}.speechCard__date[data-v-082f0eea], .speechCard__location[data-v-082f0eea]{height:1.25rem;font-size:16px;font-weight:600;--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}.speechCard__location[data-v-082f0eea]{text-align:right}.speechCard__title[data-v-082f0eea]{margin-bottom:1rem;font-size:27px;font-weight:700;font-family:"Noto Serif TC",serif;line-height:46px;letter-spacing:1px;color:#cecbff}.speechCard__title-overflow[data-v-082f0eea]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;height:138px}.speechCard__speakerThumbnails[data-v-082f0eea]{overflow:hidden;display:grid;grid-auto-flow:column;grid-template-columns:repeat(auto-fill,32px);width:70%;mask-image:linear-gradient(90deg,#000 90%,transparent);-webkit-mask-image:linear-gradient(90deg,#000 90%,transparent)}.speechCard__speakerThumbnail[data-v-082f0eea]{height:2rem;width:2rem;overflow:hidden;border-radius:9999px}.speechCard__speakerThumbnail img[data-v-082f0eea]{min-height:100%;-o-object-fit:cover;object-fit:cover}.speechCard__lang[data-v-082f0eea]{height:1.25rem;width:3rem;--tw-bg-opacity:1;background-color:rgba(205, 210, 226, var(--tw-bg-opacity));-webkit-mask-position:right;mask-position:right;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.speechCard__speakerNames[data-v-082f0eea]{margin-bottom:36px;margin-top:7px;font-size:18px;color:#bb75bc;line-height:24px;letter-spacing:.1px}.speechCard__category[data-v-082f0eea]{display:inline-block;padding-left:1rem;padding-right:1rem;padding-top:7px;padding-bottom:7px;font-size:12px;font-weight:600;--tw-text-opacity:1;color:rgba(31, 28, 59, var(--tw-text-opacity));border-radius:8px;border-width:1px;border-style:solid;border-color:#000;background-color:#bb75bc}',""]),o.locals={},e.exports=o},585:function(e,t,r){"use strict";var o=r(81);t.a=Object(o.a)({"en-us":{talks:{title:"Talks",intro:"The two conference days are packed with talks about Python by speakers from Taiwan and around the world. The talks will be either 15, 30, or 45 minutes long. Three tracks of talks will be delivered simultaneously, all with different topics and difficulties. We suggest you make a schedule beforehand, and choose what you want to listen based on your interests. Many people take notes on the program schedule before the meeting so they don’t run to the wrong places.",categoryFilter:"Category"},tutorials:{title:"Tutorials",intro:"Tutorials are events held as part of the main conference. They are 1.5 hours events held to help participants better understand talks during the conference, or get their hands on more Python applications."},related:{title:"Related Speeches"},languages:{ENEN:"English talk",ZHEN:"Chinese talk w. English slides",JPEN:"Japanese talk w. English slides",ZHZH:"Chinese talk w. Chinese slides",TAI:"Taiwanese Hokkien"},levels:{EXPERIENCED:"Experienced",INTERMEDIATE:"Intermediate",NOVICE:"Novice"},categories:{APPL:"Application",PRAC:"Best Practices & Patterns",COM:"Community",DB:"Databases",DATA:"Data Analysis",EDU:"Education",EMBED:"Embedded Systems",FIN:"FinTech",IOT:"Internet of Things",GAME:"Gaming",GRAPH:"Graphics",ML:"Machine Learning",NLP:"Natural Language Processing",CORE:"Python Core",TOOL:"Project Tooling",SCI:"Science",SEC:"Security",ADMIN:"Systems Administration",TEST:"Testing",WEB:"Web Frameworks",OTHER:"Other",ALL:"All"},terms:{day1:"Day 1",day2:"Day 2",bio:"Bio",note:"Note",intro:"Intro",abstract:"Abstract",description:"Description",video:"Video",else:"More Info",location:"Location",language:"Language",date:"Date",level:"Level",category:"Category",TBA:"TBA"}},"zh-hant":{talks:{title:"一般演講",intro:"演講為會期兩天最主要的活動，屆時將會有來自台灣各地與全球的講者分享他們在 Python 相關的發現。演講有 15、30、45 分鐘三種長度，每天都將有三軌議程同步進行，配合各個演講的難易度與類型，選擇自己有興趣的主題聆聽。許多人都會事先筆記想聽的議程，才不會跑錯地點。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。",categoryFilter:"演講類別"},tutorials:{title:"專業課程",intro:"專業課程（Tutorial）是 PyCon Taiwan 的一部分，只要有購票都有資格參與；專業課程的時間為 90 分鐘。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。"},related:{title:"相關的演講"},languages:{ENEN:"英文演講",ZHEN:"中文演講/英文投影片",JPEN:"日文演講/英文投影片",ZHZH:"中文演講/中文投影片",TAI:"臺灣閩南語"},levels:{EXPERIENCED:"進階",INTERMEDIATE:"中階",NOVICE:"入門"},categories:{APPL:"應用",PRAC:"最佳實踐與慣例",COM:"社群",DB:"資料庫",DATA:"資料分析",EDU:"教育",EMBED:"嵌入式系統",FIN:"金融科技",IOT:"物聯網",GAME:"遊戲",GRAPH:"圖像處理",ML:"機器學習",NLP:"自然語言處理",CORE:"Python 核心",TOOL:"專案建置工具",SCI:"科學",SEC:"資訊安全",ADMIN:"系統管理",TEST:"測試",WEB:"網站框架",OTHER:"其他",ALL:"全選"},terms:{day1:"第一天",day2:"第二天",bio:"講者",note:"共筆",intro:"介紹",abstract:"摘要",description:"說明",video:"影片",else:"其他資訊",location:"地點",language:"語言",date:"時間",level:"層級",category:"分類",TBA:"待公布"}}})},586:function(e,t,r){"use strict";r.r(t);r(183),r(48),r(33);var o=r(81),n={i18n:Object(o.a)({"en-us":{levels:{EXPERIENCED:"Expert",INTERMEDIATE:"Medium",NOVICE:"Novice"},levelStyle:{fontSize:"10px",left:"5px"},category:{APPL:"Application",PRAC:"Best Practices & Patterns",COM:"Community",DB:"Databases",DATA:"Data Analysis",EDU:"Education",EMBED:"Embedded Systems",FIN:"FinTech",IOT:"Internet of Things",GAME:"Gaming",GRAPH:"Graphics",ML:"Machine Learning",NLP:"Natural Language Processing",CORE:"Python Core",TOOL:"Project Tooling",SCI:"Science",SEC:"Security",ADMIN:"Systems Administration",TEST:"Testing",WEB:"Web Frameworks",OTHER:"Other"}},"zh-hant":{levels:{EXPERIENCED:"高",INTERMEDIATE:"中",NOVICE:"初"},levelStyle:{fontSize:"16px",left:"10px"},category:{APPL:"應用",PRAC:"最佳實踐與慣例",COM:"社群",DB:"資料庫",DATA:"資料分析",EDU:"教育",EMBED:"嵌入式系統",FIN:"金融科技",IOT:"物聯網",GAME:"遊戲",GRAPH:"圖像處理",ML:"機器學習",NLP:"自然語言處理",CORE:"Python 核心",TOOL:"專案建置工具",SCI:"科學",SEC:"資訊安全",ADMIN:"系統管理",TEST:"測試",WEB:"網站框架",OTHER:"其他"}}}),name:"SpeechCard",components:{LocaleLink:r(45).b},props:{id:{type:Number,default:null},level:{type:String,default:null},beginTime:{type:Date,default:null},location:{type:String,default:null},title:{type:String,default:""},speakers:{type:Array,default:function(){return[]}},lang:{type:String,default:null},category:{type:String,default:""},to:{type:String,default:"/"},shouldShow:{type:Boolean,default:!0}},data:function(){return{icon:{lang:{ENEN:r(552),ZHEN:r(553),JPEN:r(554),ZHZH:r(546)}},locationMapping:{"4-r0":"PSF Hall","5-r1":"R1","6-r2":"R2","1-r3":"R3"},levelBgColorMapping:{EXPERIENCED:"#ca7795",INTERMEDIATE:"#6580dc",NOVICE:"#65b1b7"}}},computed:{dayOneMidnight:function(){return new Date("".concat(this.$store.state.configs.conferenceDate,"T16:00:00Z"))}},methods:{getDateTag:function(e){return e?e<this.dayOneMidnight?"Day 1":"Day 2":""},getTime:function(e){if(!e)return"";var t=("0"+e.getHours()).slice(-2),r=("0"+e.getMinutes()).slice(-2);return"".concat(t,":").concat(r)},getLevelTriangleStyle:function(e){return{"background-color":this.levelBgColorMapping[e]}},getLevelStyle:function(){return{"font-size":this.$t("levelStyle.fontSize"),left:this.$t("levelStyle.left")}},getMaskImgStyle:function(img){return{"-webkit-mask-image":"url(".concat(img,")"),"mask-image":"url(".concat(img,")")}}}},l=(r(583),r(8)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("locale-link",{directives:[{name:"show",rawName:"v-show",value:e.shouldShow,expression:"shouldShow"}],staticClass:"speechCard flex flex-col",attrs:{to:e.to}},[r("div",[r("figure",{staticClass:"speechCard__levelTriangle",style:e.getLevelTriangleStyle(e.level)}),e._v(" "),r("div",{staticClass:"speechCard__level",style:e.getLevelStyle()},[e._v("\n            "+e._s(e.$t("levels."+e.level))+"\n        ")]),e._v(" "),r("div",{staticClass:"text-right"},[r("div",{staticClass:"speechCard__date"},[e._v("\n                "+e._s(e.getDateTag(e.beginTime)+" "+e.getTime(e.beginTime))+"\n            ")]),e._v(" "),r("div",{staticClass:"speechCard__location"},[e._v("\n                "+e._s(e.locationMapping[e.location])+"\n            ")])])]),e._v(" "),r("div",{staticClass:"speechCard__title speechCard__title-overflow"},[e._v("\n        "+e._s(e.title)+"\n    ")]),e._v(" "),r("div",{staticClass:"flex items-center justify-between"},[r("div",{staticClass:"speechCard__speakerThumbnails"},e._l(e.speakers,(function(e,i){return r("div",{key:"speech_card_speaker_thumbnail_"+i,staticClass:"speechCard__speakerThumbnail"},[r("img",{attrs:{src:e.thumbnail_url,alt:e.name}})])})),0),e._v(" "),r("div",{staticClass:"speechCard__lang",style:e.getMaskImgStyle(e.icon.lang[e.lang])})]),e._v(" "),r("div",{staticClass:"speechCard__speakerNames flex-1"},[e._v("\n        "+e._s(e.speakers.map((function(e){return e.name})).join(", "))+"\n    ")]),e._v(" "),r("div",{staticClass:"speechCard__category self-start"},[e._v("\n        "+e._s(e.$t("category."+e.category))+"\n    ")])])}),[],!1,null,"082f0eea",null);t.default=component.exports},588:function(e,t,r){"use strict";r.r(t);var o={props:{videoId:{type:String,required:!0}}},n=r(8),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"aspect-w-16 aspect-h-9"},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/"+e.videoId,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);t.default=component.exports},615:function(e,t,r){"use strict";r(576)},616:function(e,t,r){var o=r(19)((function(i){return i[1]}));o.push([e.i,".tabs__headers[data-v-1585dfdd]{font-family:Noto Serif TC, -apple-system, serif}.tabs__headers>.header[data-v-1585dfdd]{display:inline-block;padding-left:22px;padding-right:22px;padding-top:13px;padding-bottom:13px;border-color:transparent;text-align:center;font-weight:900;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));cursor:pointer;border-top-left-radius:0.375rem;border-top-right-radius:0.375rem;border-width:1px;background-color:transparent;font-size:18px;min-width:20%}@media (min-width:767px){.tabs__headers>.header[data-v-1585dfdd]{min-width:110px}}.tabs__headers>.header.-selected[data-v-1585dfdd]{--tw-bg-opacity:1;background-color:rgba(218, 139, 220, var(--tw-bg-opacity));color:#262626}.tab[data-v-1585dfdd]{display:inline-block;width:100%;--tw-bg-opacity:0;padding:1rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}@media (min-width: 768px){.tab[data-v-1585dfdd]{font-size:0.875rem;line-height:1.25rem}}.tab[data-v-1585dfdd]{border-top-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgba(218, 139, 220, var(--tw-border-opacity));line-height:29px;font-size:16px}@media (min-width:768px){.tab[data-v-1585dfdd]{font-size:18px}}",""]),o.locals={},e.exports=o},634:function(e,t,r){var content=r(689);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("7f16a35c",content,!0,{sourceMap:!1})},635:function(e,t,r){var content=r(691);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("182679dc",content,!0,{sourceMap:!1})},642:function(e,t,r){"use strict";r.r(t);var o={props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!0}}},n=r(8),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"tab"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},643:function(e,t,r){"use strict";r.r(t);r(28);var o={data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){var e=this;this.selectTab(0),this.$root.$on("initTabs",(function(){e.selectTab(0)}))},methods:{selectTab:function(i){this.selectedIndex=i,this.tabs.forEach((function(e,t){e.isActive=t===i}))},isSelectedIndex:function(i){return i===this.selectedIndex}}},n=(r(615),r(8)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",{staticClass:"tabs__headers"},e._l(e.tabs,(function(t,o){return r("li",{key:t.title,class:{header:!0,"-selected":e.isSelectedIndex(o)},on:{click:function(t){return e.selectTab(o)}}},[e._v("\n            "+e._s(t.title)+"\n        ")])})),0),e._v(" "),e._t("default")],2)}),[],!1,null,"1585dfdd",null);t.default=component.exports},644:function(e,t,r){"use strict";r.r(t);var o={name:"FacebookIcon"},n=r(8),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9298 24.9191C20.16 24.2097 25 18.9201 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.7366 4.56727 23.9064 10.5395 24.8471V16.2256H7.69306V12.8122H10.5395V10.2881C10.5395 7.36745 12.252 5.76889 14.7744 5.76889C15.9778 5.76889 17.0076 5.86505 17.3084 5.90111V8.96601H15.5612C14.1959 8.96601 13.9298 9.63909 13.9298 10.6247V12.8122H17.1927L16.7646 16.2256H13.9298V24.9191ZM12.5923 24.9997H12.4077C12.4384 24.9999 12.4692 25 12.5 25C12.5308 25 12.5616 24.9999 12.5923 24.9997Z"}})])}),[],!1,null,"29721df6",null);t.default=component.exports},645:function(e,t,r){"use strict";r.r(t);var o={name:"GithubIcon"},n=r(8),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.5128 24.6345C20.961 23.2863 25 18.3648 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 18.5322 4.27279 23.5664 9.95691 24.7411C10.0445 24.6217 10.0883 24.4565 10.0883 24.244L10.0814 23.1729C10.0762 22.4902 10.0745 21.9479 10.0745 21.5499L9.75103 21.6133C9.49218 21.6589 9.23006 21.6769 8.96817 21.6672C8.63913 21.6606 8.31112 21.624 7.98744 21.5575C7.64395 21.486 7.3207 21.3238 7.04457 21.0845C6.7551 20.8397 6.53908 20.5024 6.42516 20.1172L6.28407 19.7538C6.1654 19.4676 6.01636 19.1983 5.84017 18.9519C5.68197 18.6992 5.47117 18.4933 5.22592 18.3519L5.12785 18.275C5.06031 18.2194 4.99907 18.1548 4.94547 18.0827C4.89345 18.0172 4.85053 17.9433 4.81815 17.8635C4.79062 17.7904 4.81298 17.7289 4.88697 17.6827C5.01682 17.6244 5.1569 17.6 5.29647 17.6116L5.57864 17.6596C5.7679 17.7 6.00018 17.8269 6.27719 18.0365C6.55248 18.2481 6.78132 18.5192 6.96026 18.8557C7.17705 19.2865 7.43686 19.6153 7.74312 19.8403C8.01345 20.0534 8.33462 20.1712 8.66535 20.1788C8.97505 20.1788 9.24346 20.1538 9.46885 20.1018C9.68825 20.051 9.9014 19.9709 10.1037 19.8634C10.1881 19.1615 10.4169 18.6192 10.792 18.2423C10.305 18.1885 9.82245 18.0933 9.34841 17.9577C8.88557 17.8151 8.4405 17.6084 8.02357 17.3423C7.58695 17.0776 7.20111 16.7195 6.888 16.2885C6.58862 15.8674 6.34257 15.3174 6.14815 14.6348C5.94543 13.8679 5.84854 13.0709 5.86081 12.2714C5.86081 11.0022 6.23246 9.91959 6.97402 9.02732C6.62647 8.07159 6.65916 7.00049 7.0721 5.814C7.34567 5.71785 7.75 5.789 8.2851 6.02553C8.8202 6.26206 9.21421 6.46397 9.46197 6.63319C9.71146 6.8005 9.90932 6.94087 10.0607 7.05625C10.942 6.78272 11.8526 6.64555 12.7672 6.64858C13.6963 6.64858 14.5996 6.78319 15.4737 7.05818L16.007 6.67935C16.3752 6.42936 16.8071 6.19668 17.3043 5.98707C17.8033 5.77554 18.1836 5.71785 18.4468 5.814C18.8701 7.00049 18.9079 8.07159 18.5586 9.0254C19.3019 9.91959 19.6736 11.0003 19.6736 12.2714C19.6736 13.1637 19.5772 13.954 19.3845 14.6425C19.1918 15.3309 18.9423 15.8809 18.6378 16.2962C18.3195 16.723 17.9319 17.0786 17.4953 17.3443C17.0784 17.6104 16.6334 17.8171 16.1705 17.9596C15.6958 18.0947 15.2127 18.1892 14.7252 18.2423C15.2138 18.7134 15.4582 19.4596 15.4582 20.4787V24.242C15.4582 24.3991 15.4768 24.5295 15.5128 24.6345ZM12.5874 24.9997H12.4126C12.4417 24.9999 12.4708 25 12.5 25C12.5292 25 12.5583 24.9999 12.5874 24.9997Z"}})])}),[],!1,null,"01ac161b",null);t.default=component.exports},646:function(e,t,r){"use strict";r.r(t);var o={name:"TwitterIcon"},n=r(8),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM18.6599 8.63694C19.304 8.56746 19.9294 8.38905 20.5041 8.14115C20.0684 8.77592 19.5219 9.3412 18.8984 9.79755C18.9078 9.93652 18.9078 10.0755 18.9078 10.2145C18.9078 14.4494 15.6851 19.3284 9.79567 19.3284C7.98152 19.3284 6.29695 18.8026 4.87718 17.8918C5.13447 17.9218 5.38236 17.9312 5.65092 17.9312C7.14769 17.9312 8.52614 17.4241 9.62665 16.5621C8.22003 16.5321 7.03876 15.61 6.63311 14.3404C6.83218 14.3686 7.02937 14.3893 7.23783 14.3893C7.52236 14.3885 7.80566 14.3519 8.08105 14.2803C6.61433 13.9836 5.51382 12.6934 5.51382 11.1366V11.0971C5.95767 11.345 6.45377 11.4847 6.96176 11.5047C6.09976 10.9281 5.53448 9.94779 5.53448 8.83601C5.53263 8.26778 5.68308 7.70943 5.97018 7.21905C7.54582 9.16279 9.91587 10.4323 12.5732 10.5713C12.5244 10.3328 12.4944 10.0849 12.4944 9.83699C12.4944 8.07166 13.9216 6.63311 15.6964 6.63311C16.135 6.63214 16.5691 6.72152 16.9717 6.89567C17.3743 7.06982 17.7367 7.32502 18.0364 7.64536C18.7533 7.50673 19.4408 7.24495 20.0684 6.87162C19.8295 7.61193 19.3286 8.23963 18.6599 8.63694Z"}})])}),[],!1,null,"a6e275cc",null);t.default=component.exports},688:function(e,t,r){"use strict";r(634)},689:function(e,t,r){var o=r(19)((function(i){return i[1]}));o.push([e.i,".markdown ul{list-style-type:disc}.markdown ol{list-style-type:decimal}.markdown li{margin-left:1rem}.markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6{margin-top:1rem;font-weight:700}.markdown p{margin-top:0.5rem}.markdown blockquote{margin-bottom:1rem;border-left-width:4px;padding:0.5rem;font-style:italic;background-color:rgba(110,118,129,.4);border-color:#9ca3af}.markdown blockquote>p{margin-top:0px}.markdown code{border-radius:0.375rem;padding-left:0.25rem;padding-right:0.25rem;padding-top:0.125rem;padding-bottom:0.125rem;font-family:Source Sans Pro,-apple-system,Roboto,Helvetica Neue,sans-serif!important;background-color:rgba(110,118,129,.4)}.markdown a{font-weight:700;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity))}.markdown a:hover{--tw-text-opacity:1;color:rgba(147, 135, 255, var(--tw-text-opacity))}",""]),o.locals={},e.exports=o},690:function(e,t,r){"use strict";r(635)},691:function(e,t,r){var o=r(19)((function(i){return i[1]}));o.push([e.i,'.related__title[data-v-ae8fce9e]{position:relative;top:3rem;display:flex}.related__logo[data-v-ae8fce9e]{position:relative;top:-1rem;width:3.5rem;--tw-rotate:-45deg;transform:var(--tw-transform)}.related__text[data-v-ae8fce9e]{height:2rem;font-family:Noto Serif TC, -apple-system, serif;font-size:1.25rem;line-height:1.75rem;font-weight:900;color:transparent;background:linear-gradient(120deg,#9e67c3,#6a67d6,#93cac6);-webkit-background-clip:text;background-clip:text}.related__card[data-v-ae8fce9e]{position:relative;top:4rem;padding-bottom:1rem;padding-left:1rem;padding-right:1.25rem}.related__arrow[data-v-ae8fce9e]{height:1.5rem;width:1.5rem;--tw-bg-opacity:1;background-color:rgba(218, 139, 220, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(18, 16, 35, var(--tw-text-opacity))}.related__arrow[data-v-ae8fce9e]:hover{--tw-bg-opacity:1;background-color:rgba(147, 135, 255, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.related__arrow[data-v-ae8fce9e]{text-align:center;font-size:12px;line-height:30px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:9999px}.related__arrow[data-v-ae8fce9e]::after{content:"";display:none}',""]),o.locals={},e.exports=o},740:function(e,t,r){var content=r(991);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("6ef7316d",content,!0,{sourceMap:!1})},751:function(e,t,r){"use strict";r.r(t);var o={props:{markdown:{type:String,default:""}}},n=(r(688),r(8)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.$md.render(e.markdown),expression:"$md.render(markdown)"}],staticClass:"markdown"})}),[],!1,null,null,null);t.default=component.exports},752:function(e,t,r){"use strict";r.r(t);var o=r(585),n=r(586),l=r(185),c={i18n:o.a,name:"RelatedCardCollection",components:{Swiper:l.Swiper,SwiperSlide:l.SwiperSlide,SpeechCard:n.default},props:{related:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{slidesPerView:1,spaceBetween:10,slidesPerGroup:1,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1194:{slidesPerView:4,spaceBetween:32},834:{slidesPerView:3,spaceBetween:30},600:{slidesPerView:2,spaceBetween:28},360:{slidesPerView:1,spaceBetween:40}}}}}},d=(r(690),r(8)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.$store.state.relatedData.length>1?o("div",{staticClass:"relatedCardCollection"},[o("div",{staticClass:"related__title"},[o("img",{staticClass:"related__logo",attrs:{src:r(290)}}),e._v(" "),o("p",{staticClass:"related__text"},[e._v(e._s(e.$t("related.title")))])]),e._v(" "),o("swiper",{staticClass:"swiper related__card",attrs:{options:e.swiperOption}},[e._l(e.related,(function(e){return o("swiper-slide",{key:e.id},[o("speech-card",{key:"speech_"+e.id,attrs:{id:e.id,title:e.title,category:e.category,speakers:e.speakers,lang:e.language,level:e.python_level,to:"/conference/"+e.event_type+"/"+e.id+"/"}})],1)})),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),e._v(" "),o("div",{staticClass:"swiper-button-prev related__arrow",attrs:{slot:"button-prev"},slot:"button-prev"},[o("fa",{attrs:{icon:["fa","chevron-left"]}})],1),e._v(" "),o("div",{staticClass:"swiper-button-next related__arrow",attrs:{slot:"button-next"},slot:"button-next"},[o("fa",{attrs:{icon:["fa","chevron-right"]}})],1)],2)],1):e._e()}),[],!1,null,"ae8fce9e",null);t.default=component.exports},990:function(e,t,r){"use strict";r(740)},991:function(e,t,r){var o=r(19)((function(i){return i[1]}));o.push([e.i,".icon[data-v-b991fae0]{margin-left:0.5rem;margin-right:2rem}@media (min-width: 768px){.speech__title[data-v-b991fae0]{margin-bottom:5rem}}.speech__speakers[data-v-b991fae0]{margin-bottom:1rem;margin-top:1.5rem;display:flex;flex-direction:column}@media (min-width: 768px){.speech__speakers[data-v-b991fae0]{margin-bottom:2rem}}.speech__speakerContainer[data-v-b991fae0]{margin-bottom:3rem;display:flex;width:100%;flex-direction:column}@media (min-width: 768px){.speech__speakerContainer[data-v-b991fae0]{flex-direction:row}}.speech__speaker[data-v-b991fae0]{margin-left:2.5rem;margin-right:2.5rem;display:flex;flex-direction:column}.speech__speakerThumbnail[data-v-b991fae0]{margin-left:auto;margin-right:auto;height:6rem;width:6rem}@media (min-width: 768px){.speech__speakerThumbnail[data-v-b991fae0]{height:7rem}.speech__speakerThumbnail[data-v-b991fae0]{width:7rem}}.speech__speakerThumbnail img[data-v-b991fae0]{height:100%;border-radius:9999px;-o-object-fit:cover;object-fit:cover}.speech__speakerName[data-v-b991fae0]{margin-top:0.75rem;margin-bottom:0.75rem;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:900}.speech__profile[data-v-b991fae0]{display:flex;justify-content:center}.speech__extLink[data-v-b991fae0]{margin-left:0.5rem;margin-right:0.5rem}.speech__extLink svg[data-v-b991fae0]{fill:#afaee6}.speech__intro[data-v-b991fae0]{margin-top:2.5rem;margin-bottom:2.5rem;display:flex;justify-content:center;--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}@media (min-width: 768px){.speech__intro[data-v-b991fae0]{margin-top:0.5rem;margin-bottom:0.5rem}}.speech__tabs[data-v-b991fae0]{margin-top:2.5rem;margin-bottom:2.5rem;margin-bottom:1rem;width:100%}@media (min-width: 768px){.speech__tabs[data-v-b991fae0]{margin-bottom:2rem}}.speech__tabBox[data-v-b991fae0]{margin-bottom:1.5rem;overflow-wrap:break-word}.speech__tabParagraphTitle[data-v-b991fae0]{margin-top:auto;margin-bottom:auto;margin-right:2rem;white-space:nowrap;font-family:Noto Serif TC, -apple-system, serif;font-weight:700;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));min-width:85px}.speech__tabParagraph[data-v-b991fae0]{margin-top:auto;margin-bottom:auto;font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif}.speech__info[data-v-b991fae0]{margin-bottom:0.5rem;margin-right:0.5rem;display:flex}.speech__extLink[data-v-b991fae0]{font-weight:700;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity))}.speech__extLink[data-v-b991fae0]:hover{--tw-text-opacity:1;color:rgba(147, 135, 255, var(--tw-text-opacity))}.speech__hackmd[data-v-b991fae0], .speech__slido[data-v-b991fae0]{width:100%}.speech__hackmd[data-v-b991fae0],.speech__slido[data-v-b991fae0]{height:800px}",""]),o.locals={},e.exports=o}}]);