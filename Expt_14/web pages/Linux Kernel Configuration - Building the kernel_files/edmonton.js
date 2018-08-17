function ez_attachEvent(element, evt, func) {
    if (element.addEventListener) {
        element.addEventListener(evt, func, false);
    } else {
        element.attachEvent("on" + evt, func);
    }
}
function ez_attachEventWithCapture(element, evt, func, useCapture) {
    if (element.addEventListener) {
        element.addEventListener(evt, func, useCapture);
    } else {
        element.attachEvent("on" + evt, func);
    }
}
function ez_detachEvent(element, evt, func) {
    if(element.removeEventListener) {
        element.removeEventListener(evt, func);
    } else {
        element.detachEvent("on"+evt, func);
    }
}
function ez_getQueryString(field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
}(function(root,factory){if(typeof define==='function'&&define.amd){define([],factory)}else if(typeof module==='object'&&module.exports){module.exports=factory()}else{root.riveted=factory()}}(this,function(){var riveted=(function(){var started=false,stopped=false,turnedOff=false,clockTime=0,startTime=new Date(),clockTimer=null,idleTimer=null,sendEvent,sendUserTiming,reportInterval,scrollDepth=0,idleTimeout,scrollTimer=0;function init(options){options=options||{};reportInterval=parseInt(options.reportInterval,10)||5;idleTimeout=parseInt(options.idleTimeout,10)||30;if(typeof options.eventHandler=='function'){sendEvent=options.eventHandler}if(typeof options.userTimingHandler=='function'){sendUserTiming=options.userTimingHandler}addListener(document,'keydown',trigger);addListener(document,'click',trigger);addListener(document,'touchstart',trigger);addListener(window,'mousemove',throttle(trigger,500));addListener(window,'scroll',triggerScroll);addListener(document,'visibilitychange',visibilityChange);addListener(document,'webkitvisibilitychange',visibilityChange)}function triggerScroll(){if(scrollTimer>0){clearTimeout(scrollTimer)}setIdle();scrollTimer=setTimeout(function(){stopScroll()},50)}function stopScroll(){clearTimeout(scrollTimer);trigger();setScrollDepth()}function setScrollDepth(){var h=document.documentElement,b=document.body,st='scrollTop',sh='scrollHeight';var percent=(h[st]||b[st])/((h[sh]||b[sh])-h.clientHeight)*100;if(percent>scrollDepth){scrollDepth=percent}}function throttle(func,wait){var context,args,result;var timeout=null;var previous=0;var later=function(){previous=new Date;timeout=null;result=func.apply(context,args)};return function(){var now=new Date;if(!previous)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0){clearTimeout(timeout);timeout=null;previous=now;result=func.apply(context,args)}else if(!timeout){timeout=setTimeout(later,remaining)}return result}}function addListener(element,eventName,handler){if(element.addEventListener){element.addEventListener(eventName,handler,false)}else if(element.attachEvent){element.attachEvent('on'+eventName,handler)}else{element['on'+eventName]=handler}}sendUserTiming=function(timingValue){};sendEvent=function(time){};function setIdle(){clearTimeout(idleTimer);stopClock()}function visibilityChange(){if(document.hidden||document.webkitHidden){setIdle()}}function clock(){clockTime+=0.1;clockTime=Math.round(clockTime*100)/100;if(clockTime>0&&(clockTime%reportInterval===0)){sendEvent(clockTime)}}function stopClock(){stopped=true;clearInterval(clockTimer)}function turnOff(){setIdle();turnedOff=true}function turnOn(){turnedOff=false}function restartClock(){stopped=false;clearInterval(clockTimer);clockTimer=setInterval(clock,100)}function getEngagedTime(){return Math.round(clockTime)}function getScrollDepth(){return Math.round(scrollDepth)}function startRiveted(){var currentTime=new Date();var diff=currentTime-startTime;started=true;sendUserTiming(diff);clockTimer=setInterval(clock,1000)}function resetRiveted(){startTime=new Date();clockTime=0;started=false;stopped=false;clearInterval(clockTimer);clearTimeout(idleTimer)}function trigger(){if(turnedOff){return}if(!started){startRiveted()}if(stopped){restartClock()}clearTimeout(idleTimer);idleTimer=setTimeout(setIdle,idleTimeout*1000+100)}return{init:init,trigger:trigger,setIdle:setIdle,on:turnOn,off:turnOff,reset:resetRiveted,getTime:getEngagedTime,getScrollDepth:getScrollDepth}})();return riveted}));
// minified ux.js using https://jscompress.com/
var ezux=function(){function p(){o.addDeviceSizes(),o.addLocalTime(),x(),r(),A(),B()}function q(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}function r(){if(q(document,"blur",n.unload),q(document,"copy",n.copyPaste),q(document,"cut",n.copyPaste),q(document,"mouseout",n.mouseOut),q(document,"paste",n.copyPaste),q(window,"beforeunload",n.unload),q(window,"blur",n.unload),q(window,"pagehide",n.unload),q(window,"unload",n.unload),q(window,"load",n.load),q(window,"pageshow",n.pageshow),s(),document.addEventListener){var a,b;void 0!==document.hidden?(a="hidden",b="visibilitychange"):void 0!==document.msHidden?(a="msHidden",b="msvisibilitychange"):void 0!==document.webkitHidden&&(a="webkitHidden",b="webkitvisibilitychange"),document.addEventListener(b,function(b){document[a]?n.unload(b):n.pageshow(b)},!1)}else document.attachEvent("onvisibilitychange",n.unload)}function s(){var a=[];if(a.push.apply(a,document.querySelectorAll('a[href*="facebook.com/sharer/sharer.php"]')),a.push.apply(a,document.querySelectorAll('a[href*="facebook.com/sharer.php"]')),a.push.apply(a,document.querySelectorAll('a[href*="facebook.com/share.php"]')),a.push.apply(a,document.querySelectorAll('div[class*="fb-share-button"]')),a.push.apply(a,document.querySelectorAll('a[href*="twitter.com/share"]')),a.push.apply(a,document.querySelectorAll('a[href*="twitter.com/intent/tweet"]')),a.push.apply(a,document.querySelectorAll('iframe[class*="twitter-share-button"]')),a.push.apply(a,document.querySelectorAll('a[href*="plus.google.com/share"]')),a.push.apply(a,document.querySelectorAll('iframe[src*="apis.google.com/u/0/se/0/_/+1/sharebutton"]')),a.push.apply(a,document.querySelectorAll('a[href*="linkedin.com/cws/share"]')),a.push.apply(a,document.querySelectorAll('a[href*="linkedin.com/shareArticle"]')),a.push.apply(a,document.querySelectorAll('a[href*="pinterest.com/pin/create/button"]')),a.push.apply(a,document.querySelectorAll('a[href*="pinterest.com/pin/create/bookmarklet"]')),a.push.apply(a,document.querySelectorAll('a[href*="tumblr.com/share/link"]')),a.push.apply(a,document.querySelectorAll('a[href*="reddit.com/submit"]')),d){var b=a.map(function(a){return a.href});void 0!==b&&z("[Page Share] "+b.join(", "))}for(var c=0;c<a.length;c++)q(a[c],"click",n.pageshare)}function t(a){z("Deleting "+a),document.cookie=a+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"}function u(a){for(var b=a+"=",c=decodeURIComponent(document.cookie),d=c.split(";"),e=0;e<d.length;e++){for(var f=d[e];" "==f.charAt(0);)f=f.substring(1);if(0==f.indexOf(b))return f.substring(b.length,f.length)}return""}function v(a){return a+"_"+did}function w(){return(new Date-j)/1e3}function x(){__ez.bit.Fire(),__ez.pel.Fire()}function y(a){return a>=i}function z(a){d&&console.info("[UX] "+a)}function A(){k=riveted,k.init({reportInterval:5,idleTimeout:30,eventHandler:function(a){z("Event: "+parseInt(a)+" --- Engaged Time: "+parseInt(k.getTime())),k.getTime()>=g&&(z("Turning off timer"),n.unload({type:"max"}),k.off())}})}function B(){b=setInterval(function(){n.unload({type:"auto"}),w()>g&&(z("Turning off auto"),clearInterval(b))},c)}function C(){if(z("[Performance] Store performance"),1!=a&&window.performance&&window.performance.timing){var b=performance.timing.navigationStart,c=performance.timing.connectEnd,d=performance.timing.responseStart,e=performance.timing.responseEnd,f=performance.timing.domInteractive,g=performance.timing.domContentLoadedEventEnd,i=performance.timing.domComplete;if(b>0&&i>0){if(window.performance.navigation){var j=performance.navigation.type,k=performance.navigation.redirectCount;__ez.bit.Add(h,[new __ezDotData("navigation_type",j),new __ezDotData("redirect_count",k)])}perf_vals={};var l=c-b,m=d-c,n=e-d,o=f-e,p=g-e,q=i-e;__ez.bit.Add(h,[new __ezDotData("perf_is_tracked",1),new __ezDotData("perf_nav_to_connect",l),new __ezDotData("perf_connect_to_resp_start",m),new __ezDotData("perf_resp_time",n),new __ezDotData("perf_interactive",o),new __ezDotData("perf_contentloaded",p),new __ezDotData("perf_complete",q)]),z("[Performance] perf_nav_to_connect: "+l),z("[Performance] perf_connect_to_resp_start: "+m),z("[Performance] perf_resp_time: "+n),z("[Performance] perf_interactive: "+o),z("[Performance] perf_contentloaded: "+p),z("[Performance] perf_complete: "+q),a=!0,x()}}}function D(){var a=v("ezux_et"),b=v("ezux_tos"),c=k.getTime()-l.engagedAdded,d=w()-l.tosAdded,e=u(a),g=u(b);c==f.engagedTime&&(c=0);var h=parseInt(c)+parseInt(""==e?0:e),i=parseInt(d)+parseInt(""==g?0:g);z("[Times] Total Engaged: "+h+" (+"+c+")"),z("[Times] Total TOS: "+i+" (+"+d+")"),document.cookie=a+"="+h,document.cookie=b+"="+i,l.engagedAdded+=c,l.tosAdded+=d}function E(a){var b=a.split(" ");2!==b.length&&z("Invalid ezoawesome cookie value");var c=b[0],d=b[1];if(!isNaN(d)){var e=Math.floor((Date.now()-d)/1e3);__ez.pel.AddById(c,[new __ezDotData("click_bounce_time",e)]),z("[Bounce] impId: "+c),z("[Bounce] bounceTime: "+e)}}if("undefined"!=typeof _ezaq&&_ezaq.hasOwnProperty("page_view_id")){var k,a=!1,b=0,c=15e3,d="1"==ez_getQueryString("ezux_debug"),e={copyPaste:0,shares:0},f={copyPasteCount:0,engagedTime:0,isEngagedPage:0,scrollDepth:0,unloadTime:0,shareCount:0},g=1800,h=_ezaq.page_view_id,i=10,j=new Date,l={engagedAdded:0,tosAdded:0},m=3e3,n={copyPaste:function(){e.copyPaste++},mouseOut:function(a){if(a=a||window.event,"input"!=a.target.tagName.toLowerCase()){var b=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if(!(a.clientX>=b-50||a.clientY>=50)){a.relatedTarget||a.toElement||n.unload(a)}}},load:function(a){C()},unload:function(a){var b=(new Date).getTime();(0===f.unloadTime||b>f.unloadTime+m)&&(D(),C(),o.unloadAll(a),f.unloadTime=b)},pageshow:function(a){var b=v("ezoawesome"),c=u(b);c.length>0&&(z("Bounce ("+b+") detected with val "+c),E(c),t(b))},pageshare:function(a){e.shares++,o.addPageShares()}},o={addCopyPaste:function(){e.copyPaste>0&&e.copyPaste!=f.copyPasteCount&&(__ez.bit.Add(h,[new __ezDotData("copy_paste_count",e.copyPaste)]),f.copyPasteCount=e.copyPaste)},addDeviceSizes:function(){z("Storing device sizes"),__ez.bit.Add(h,[new __ezDotData("device_width",screen.width),new __ezDotData("device_height",screen.height)])},addEngagedTimes:function(a){a!=f.engagedTime&&(__ez.bit.Add(h,[new __ezDotData("engaged_time",a)]),f.engagedTime=a)},addIsEngagedPage:function(a){0==f.isEngagedPage&&y(a)&&(__ez.bit.Add(h,[new __ezDotData("is_engaged_page",1)]),f.isEngagedPage=1)},addIsFirstEngagedPage:function(a){var b=v("ezux_ifep");0==u(b).length&&y(a)&&(z("Adding first engaged cookie"),document.cookie=b+"=true",__ez.bit.Add(h,[new __ezDotData("is_first_engaged_page",1)]))},addLocalTime:function(){z("Storing local time");var a=new Date,b=a.getTimezoneOffset();if(!(b<-840||b>720)){var c=new Date(a-6e4*b);if(!(Math.abs(c-a)/36e5>14)){Date.prototype.toISOString||function(){function a(a){return a<10?"0"+a:a}Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"."+(this.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"}}();var d=c.toISOString().slice(0,19).replace("T"," ").split(" ")[0];if(!(d.length<1||"0"==d[0])){var e=a.getHours(),f=a.getDay();__ez.bit.Add(h,[new __ezDotData("t_local_date",d),new __ezDotData("t_local_hour",e),new __ezDotData("t_local_day_of_week",f),new __ezDotData("t_local_timezone",b)])}}}},addScrollDepth:function(){var a=k.getScrollDepth();a!=f.scrollDepth&&(__ez.bit.Add(h,[new __ezDotData("scroll_percent_vertical",a)]),f.scrollDepth=a)},addPageShares:function(){e.shares>0&&e.shares!=f.shareCount&&(z("[Page Share] Store page shares: "+e.shares),__ez.bit.Add(h,[new __ezDotData("share",e.shares)]),f.shareCount=e.shares)},unloadAll:function(a){var b=k.getTime();o.addEngagedTimes(b),o.addCopyPaste(),o.addScrollDepth(),o.addIsEngagedPage(b),o.addIsFirstEngagedPage(b),o.addPageShares(),z("Unload ("+a.type+")"),x()}};p()}}();