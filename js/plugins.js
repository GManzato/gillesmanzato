
// remap jQuery to $
(function($){



})(window.jQuery);

//ScrollTo
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
//LocalScroll
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);

// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};

function linkify(txt) {
	var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
	return txt.replace(regexp, '<a href="$1">$1</a>');
}
/* time left function for twitter widget*/
function relative_time(time_value) {
	var values = time_value.split(" ");
	time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
	var parsed_date = Date.parse(time_value);
	var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
	var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
	delta = delta + (relative_to.getTimezoneOffset() * 60);
	var r = '';
	if (delta < 60) {
		r = 'a minute ago';
	} else if (delta < 120) {
		r = 'couple of minutes ago';
	} else if (delta < (45 * 60)) {
		r = (parseInt(delta / 60)).toString() + ' minutes ago';
	} else if (delta < (90 * 60)) {
		r = 'an hour ago';
	} else if (delta < (24 * 60 * 60)) {
		r = '' + (parseInt(delta / 3600)).toString() + ' hours ago';
	} else if (delta < (48 * 60 * 60)) {
		r = '1 day ago';
	} else {
		r = (parseInt(delta / 86400)).toString() + ' days ago';
	}
	return r;
}


// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);


twitpic=window.twitpic||{};
(function(g){function i(){j&&jQuery.noConflict();n(twitpic,jQuery)}function n(d,k){var c={base_url:"http://api.twitpic.com/",validate:function(a,b){k.each(b,function(l,e){if(!(e in a))throw"Missing argument "+e+" in TwitPic API call";})},query:function(a,b,l){k.ajax({type:"GET",url:this.base_url+a+".jsonp?callback=?",data:b,dataType:"jsonp",success:function(e){l(e)}})}};d.media={show:function(a,b){c.validate(a,["id"]);c.query("2/media/show",a,b)}};d.users={show:function(a,b){c.validate(a,["username"]);
c.query("2/users/show",a,b)}};d.comments={show:function(a,b){c.validate(a,["media_id","page"]);c.query("2/comments/show",a,b)}};d.place={show:function(a,b){c.validate(a,["id"]);c.query("2/place/show",a,b)}};d.places={show:function(a,b){c.validate(a,["user"]);c.query("2/places/show",a,b)}};d.events={show:function(a,b){c.validate(a,["user"]);c.query("2/events/show",a,b)}};d.event={show:function(a,b){c.validate(a,["id"]);c.query("2/event/show",a,b)}};d.tags={show:function(a,b){c.validate(a,["tag"]);
c.query("2/tags/show",a,b)}};m=true;h&&h()}var m,h;twitpic.ready=function(d){if(m)d();else h=d};var j=false;if("jQuery"in g)i();else{j=true;g=document.getElementsByTagName("head")[0];var f=document.createElement("script");f.type="text/javascript";f.src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js";f.onload=i;g.appendChild(f)}})(window);