(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{651:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAALZJREFUKBW9kT0OgkAQhdffC2hpYzwCWukdPJQnsNVOO48gN6Cj14pSLmDi3/dglhAhZisn+Xi82Z0ZdnGuGUNSG8hN5X9GxGoKjxryyjfCd7+zUi/w78prejW1rbvf/K3F1A7Va5hAD95wg5H5F6qzjaEL8hkUseWprqfSup35o/mD+b28qhVxKZWezbeqL7I9YfL/oqV92CpEdeVzY4Dqyi8whT7oiq8wAx3lCYmKFqD/EBr5B1LnNAJMXAHSAAAAAElFTkSuQmCC"},744:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(44),n(23),n(36),n(41),{name:"VenueMap",data:function(){return{venueButtonUrl:n(651),currentCenter:[25.040997,121.611417],options:{zoomControl:!1,scrollWheelZoom:!1,minZoom:10},tileProviders:[{name:"Stamen",visible:!1,attribution:'Tiles by <a href="https://stamen.com">Stamen Design</a>. Data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors.',url:"http://{s}.sm.mapstack.stamen.com/((toner-background,$fff[@20],$000[hsl-color])[@90],(toner-lines,$fff[@80],$fff[hsl-saturation@20],$502526[hsl-color]),(toner-labels,$fff[@30]))/{z}/{x}/{y}.png"},{name:"Transport",visible:!0,attribution:'Maps &copy; <a href="https://www.thunderforest.com" target="_blank" rel="noopener">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap </a> contributors.',url:"https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6170aad10dfd42a38d4d8c709a536f38"}],url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:16,icon:null,center:[25.040997,121.611417],markerLatLng:[25.040997,121.611417]}},mounted:function(){this.getLeaflet()},methods:{centerMap:function(){var t=this;this.$nextTick((function(){t.$refs.leafletMap.mapObject.panTo([25.040997,121.611417])}))},getLeaflet:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(null,1,7));case 2:t.L=e.sent,t.icon=t.L.icon({iconUrl:"/snake.png",shadowUrl:"/snake-bg.png",iconSize:[42,42],iconAnchor:[21,21],shadowSize:[45,55],shadowAnchor:[25,30]});case 4:case"end":return e.stop()}}),e)})))()}}}),l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("l-map",{ref:"leafletMap",staticStyle:{height:"500px"},attrs:{zoom:t.zoom,center:t.center,options:t.options}},[t._l(t.tileProviders,(function(t){return n("l-tile-layer",{key:t.name,attrs:{name:t.name,visible:t.visible,url:t.url,attribution:t.attribution,"layer-type":"base"}})})),t._v(" "),n("l-control-layers",{attrs:{position:"bottomright"}}),t._v(" "),n("l-control-zoom",{attrs:{position:"topright"}}),t._v(" "),n("l-control",{staticClass:"leaflet-bar custom-control rounded-sm",attrs:{position:"topright"}},[n("button",{staticClass:"h-[30px] w-[30px] bg-white leading-[30px]",on:{click:t.centerMap}},[n("img",{staticClass:"m-auto",attrs:{src:t.venueButtonUrl,alt:"venue-center-btn"}})])]),t._v(" "),n("l-marker",{attrs:{"lat-lng":t.markerLatLng,icon:t.icon}},[n("l-tooltip",{attrs:{options:{offset:[-4,20],direction:"bottom"}}},[t._v("中央研究院 人文社會科學館")])],1)],2)}),[],!1,null,"3e0f396b",null);e.default=component.exports}}]);