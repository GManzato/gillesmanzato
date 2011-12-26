
// remap jQuery to $
(function($){



})(window.jQuery);



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