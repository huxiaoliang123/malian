(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1731:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"default",function(){return VideoModal});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_HotspotModal__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1739),react_redux__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(15),reselect__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(19),reselect__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_8__),_VideoController__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1815),dxc_flex__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(12),dxc_flex__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(dxc_flex__WEBPACK_IMPORTED_MODULE_10__),constants__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(14),constants__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(constants__WEBPACK_IMPORTED_MODULE_11__),_dec,_class,_class2,_temp;!function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule;_&&_(module)}();var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},selector=Object(reselect__WEBPACK_IMPORTED_MODULE_8__.createSelector)(function(_){return _.sound.isPlay},function(_){return _.voice.isPlay},function(_){return _.hotspot},function(_,e,t){return{sound:_,voice:e,audioURL:t.audioURL,subData:t.subData}}),dispatchFn=function(_){return{temporaryPause:function(e){var t=e.shutDownBgOnPlay,a=void 0===t?"1":t,r=e.shutDownVoiceOnPlay,o=void 0===r?"1":r;"1"==a&&_({type:"sound/temporaryPause"}),"1"==o&&_({type:"voice/temporaryPause"}),_({type:"audioModal/temporaryPause"})},recovery:function(e){var t=e.shutDownBgOnPlay,a=void 0===t?"1":t,r=e.shutDownVoiceOnPlay,o=void 0===r?"1":r;"1"==a&&_({type:"sound/recovery"}),"1"==o&&_({type:"voice/recovery"}),_({type:"audioModal/recovery"})}}},VideoModal=(_dec=Object(react_redux__WEBPACK_IMPORTED_MODULE_7__.b)(selector,dispatchFn),_dec((_temp=_class2=function(_React$Component){function VideoModal(){var _,e;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,VideoModal);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(_=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(VideoModal)).call.apply(_,[this].concat(a)))).onClick=function(_){alert(1),_.preventDefault(),_.stopPropagation()},e.renderVideo=function(){var _=e.props.data.subData,t=_.coverUrl,a=_.videoUrl;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_VideoController__WEBPACK_IMPORTED_MODULE_9__.a,{src:"".concat(constants__WEBPACK_IMPORTED_MODULE_11__.MEDIA_DOMAIN).concat(a),poster:"".concat(constants__WEBPACK_IMPORTED_MODULE_11__.MEDIA_DOMAIN).concat(t)})},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(VideoModal,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VideoModal,[{key:"componentDidMount",value:function(){var _=this.props,e=_.temporaryPause,t=_.data.subData;e(void 0===t?{}:t)}},{key:"componentWillUnmount",value:function(){var _=this.props,e=_.recovery,t=_.data.subData;e(void 0===t?{}:t)}},{key:"render",value:function(){var _=this.props.data,e=_.data,t=_.title,a=_.url,r=_.blank,o=_.linkTitle;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_HotspotModal__WEBPACK_IMPORTED_MODULE_6__.a,{title:t,link:a,linkTitle:o,openInNewWindow:"1"==r,handleClose:this.props.handleClose},e?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:" translate(-50%, -50%)"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"VideoModal",dangerouslySetInnerHTML:{__html:unescape(unescape(e))}})):react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(dxc_flex__WEBPACK_IMPORTED_MODULE_10___default.a,{horizontal:"center",vertical:"center",style:{height:"100%"}},this.renderVideo()))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),VideoModal}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_class2.propTypes={},_class=_temp))||_class);!function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default;_&&(_.register(selector,"selector","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/VideoModal.js"),_.register(dispatchFn,"dispatchFn","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/VideoModal.js"),_.register(VideoModal,"VideoModal","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/VideoModal.js"))}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule;_&&_(module)}()}.call(this,__webpack_require__(5)(module))},1738:function(_,e){_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M2.804 7.84l-.167.167a3.793 3.793 0 0 0-.006 5.365 3.796 3.796 0 0 0 5.365-.006l2.37-2.37a3.793 3.793 0 0 0-.44-5.748L8.707 6.465a2.109 2.109 0 0 1 .469 3.339l-2.373 2.373a2.103 2.103 0 0 1-2.982.004A2.107 2.107 0 0 1 3.826 9.2l.17-.17-1.192-1.19zm10.391.32l.167-.167a3.793 3.793 0 0 0 .007-5.365 3.798 3.798 0 0 0-5.366.006l-2.369 2.37a3.792 3.792 0 0 0 .441 5.748l1.217-1.217a2.106 2.106 0 0 1-.469-3.338l2.373-2.374A2.104 2.104 0 1 1 12.173 6.8l-.168.169 1.19 1.19z"/></svg>'},1739:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(81),core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(23),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),classnames_bind__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(21),classnames_bind__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_9__),_HotspotModal_css__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1740),_HotspotModal_css__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_HotspotModal_css__WEBPACK_IMPORTED_MODULE_10__),is_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(20),is_js__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(is_js__WEBPACK_IMPORTED_MODULE_11__),react_svg_inline__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(300),react_svg_inline__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react_svg_inline__WEBPACK_IMPORTED_MODULE_12__),svgs_link_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1738),svgs_link_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(svgs_link_svg__WEBPACK_IMPORTED_MODULE_13__),_utils_getClientType__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(105),_constants__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(16),utils_getPanoLang__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(13),_dec,_class,_temp;!function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule;_&&_(module)}();var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},cx=classnames_bind__WEBPACK_IMPORTED_MODULE_9___default.a.bind(_HotspotModal_css__WEBPACK_IMPORTED_MODULE_10___default.a),HotspotModal=(_dec=Object(utils_getPanoLang__WEBPACK_IMPORTED_MODULE_16__.a)({More:["更多内容","More Information"]}),_dec((_temp=function(_React$Component){function HotspotModal(_){var e;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this,HotspotModal),(e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(HotspotModal).call(this,_))).stopPropagation=function(_){_.preventDefault(),_.stopPropagation()},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(HotspotModal,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(HotspotModal,[{key:"componentDidMount",value:function(){if(document&&document.body){var _,e=document.body.className;document.body.className=cx((_={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_,e,e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_,"modal-open",!0),_))}}},{key:"componentWillUnmount",value:function(){document&&document.body&&(document.body.className=document.body.className.replace(/ ?modal-open/,""))}},{key:"renderLink",value:function(){var _=this.props,e=_.link,t=_.linkTitle,a=_.openInNewWindow,r=_.lang;if(e){var o=a?"_blank":void 0;return is_js__WEBPACK_IMPORTED_MODULE_11___default.a.mobile()?react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a",{href:e,target:o,className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_10___default.a.link},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg_inline__WEBPACK_IMPORTED_MODULE_12___default.a,{svg:svgs_link_svg__WEBPACK_IMPORTED_MODULE_13___default.a,className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_10___default.a.linkIcon,width:"16px"})):react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a",{href:e,target:o,className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_10___default.a.link},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg_inline__WEBPACK_IMPORTED_MODULE_12___default.a,{svg:svgs_link_svg__WEBPACK_IMPORTED_MODULE_13___default.a,className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_10___default.a.linkIcon,width:"16px"}),t||r.More)}}},{key:"renderCount",value:function(){var _=this.props,e=_.count,t=_.title;if(e)return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p",{className:cx({count:e,onlyTitle:!t})},e)}},{key:"render",value:function(){var _=this.props,e=_.handleClose,t=_.children,a=_.className,r=_.title,o=_.count;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:cx(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({modal:!0},a,a))},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_10___default.a.header},this.renderLink(),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p",{className:cx({title:o,onlyTitle:!o}),style:{marginTop:_utils_getClientType__WEBPACK_IMPORTED_MODULE_14__.a===_constants__WEBPACK_IMPORTED_MODULE_15__.a.APP?28:0}},r),this.renderCount(),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a",{href:"javascript: void 0",className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_10___default.a.close,onClick:e})),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_10___default.a.body},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{onClick:e,style:{position:"absolute",top:0,left:0,right:0,bottom:0}}),t))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),HotspotModal}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component),_class=_temp))||_class);HotspotModal.defaultProps={openInNewWindow:!1};var _default=HotspotModal;__webpack_exports__.a=_default,function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default;_&&(_.register(cx,"cx","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/HotspotModal.js"),_.register(HotspotModal,"HotspotModal","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/HotspotModal.js"),_.register(_default,"default","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/HotspotModal.js"))}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule;_&&_(module)}()}).call(this,__webpack_require__(5)(module))},1740:function(_,e,t){_.exports={modal:"HotspotModal_modal_4jLYkI",header:"HotspotModal_header_1insoO",title:"HotspotModal_title_1htNRM",count:"HotspotModal_count_2YSBYn",onlyTitle:"HotspotModal_onlyTitle_aG8TNG",link:"HotspotModal_link_12FuU1",linkIcon:"HotspotModal_linkIcon_114mze",close:"HotspotModal_close_7afvjD",body:"HotspotModal_body_13A48g"}},1815:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return Simple});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),pano_video_ui__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1849),is_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20),is_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(is_js__WEBPACK_IMPORTED_MODULE_7__);!function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule;_&&_(module)}();var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Simple=function(_React$PureComponent){function Simple(){var _,e;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Simple);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(_=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Simple)).call.apply(_,[this].concat(a)))).state={isPlay:!1,time:0,totalTime:0,volume:1,video:null,loading:!1,hideController:!1,videoWidth:"100vw",videoHeight:350,fullScreen:!1},e.onChangeFullScreen=function(_){var t=_.fullScreen;e.setState({fullScreen:t})},e.onWaiting=function(){e.setState({loading:!0})},e.onPlaying=function(){e.setState({isPlay:!0,loading:!1})},e.onTimeUpdate=function(){var _=e.video.currentTime,t=e.video.duration;e.setState({time:_,totalTime:t})},e.onPause=function(){e.setState({isPlay:!1})},e.handlePlay=function(){e.video.play()},e.handlePause=function(){e.video.pause()},e.onChangeTime=function(_){e.video.currentTime=_},e.onChangeVolume=function(_){e.video.volume=_,e.setState({volume:_})},e.onClickVideo=function(){if(is_js__WEBPACK_IMPORTED_MODULE_7___default.a.mobile()){var _=e.state.hideController;e.setState({hideController:!_})}},e.onLoad=function(){var _=e.video.offsetWidth,t=e.video.offsetHeight;e.setState({videoWidth:_,videoHeight:t})},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Simple,_React$PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Simple,[{key:"componentWillUnmount",value:function(){this.handlePause()}},{key:"render",value:function(){var _=this,e=this.props,t=e.src,a=e.poster,r=this.state,o=r.isPlay,l=r.time,n=r.totalTime,s=r.volume,i=r.video,u=r.loading,E=r.hideController,c=r.fullScreen,d={display:is_js__WEBPACK_IMPORTED_MODULE_7___default.a.android()?"block":"inline-block",width:"auto",height:"auto"},P={minWidth:320,width:"auto",height:"auto",verticalAlign:"top",display:"inline-block"};if(c||(P.maxWidth=is_js__WEBPACK_IMPORTED_MODULE_7___default.a.mobile()?"100%":1e3,P.maxHeight=is_js__WEBPACK_IMPORTED_MODULE_7___default.a.mobile()?"100%":600),is_js__WEBPACK_IMPORTED_MODULE_7___default.a.mobile){var M=this.state,p=M.videoWidth,O=M.videoHeight;d.width=c?"100vw":p,d.height=c?"100vh":O,P.position="absolute"}return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(pano_video_ui__WEBPACK_IMPORTED_MODULE_6__.a,{style:d,src:t,video:i,loading:u,isPlay:o,time:l,volume:s,totalTime:n,handlePlay:this.handlePlay,handlePause:this.handlePause,onChangeTime:this.onChangeTime,onChangeVolume:this.onChangeVolume,hideController:E,onChangeFullScreen:this.onChangeFullScreen},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video",{onLoadedData:this.onLoad,autoPlay:!is_js__WEBPACK_IMPORTED_MODULE_7___default.a.mobile(),preload:"auto",style:P,poster:is_js__WEBPACK_IMPORTED_MODULE_7___default.a.mobile()?a:null,onClick:this.onClickVideo,"x5-video-player-type":"h5",playsinline:"","webkit-playsinline":"",onTimeUpdate:this.onTimeUpdate,onPlaying:this.onPlaying,onPause:this.onPause,onWaiting:this.onWaiting,ref:function(e){_.video=e,_.setState({video:e})},src:t})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Simple}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);!function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default;_&&_.register(Simple,"Simple","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/VideoController.js")}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule;_&&_(module)}()}).call(this,__webpack_require__(5)(module))},1821:function(_,e,t){var a={"./zh-cn":1764,"./zh-cn.js":1764};function r(_){var e=o(_);return t(e)}function o(_){if(!t.o(a,_)){var e=new Error("Cannot find module '"+_+"'");throw e.code="MODULE_NOT_FOUND",e}return a[_]}r.keys=function(){return Object.keys(a)},r.resolve=o,_.exports=r,r.id=1821}}]);