/* Author: 
	Gilles Manzato
*/



$(function(){
	// Set up local scroll plugin
	$.localScroll();
	// Ajax for Tumblr
	$.getJSON('http://blog.gillesmanzato.com/api/read/json?num=1&callback=?', function(data) {
		var posts = data.posts[0];
		if (posts.type == "video"){
			var content = posts['video-player-500'];	
		}
		else if(posts.type == "link") {
			var content = '<a class="massive" href="'+posts['link-url']+'">'+posts['link-text']+'</a>';
		}
		else {
			console.log(data.posts[0]);
			var content = '<a href="'+posts.url+'"><img src="'+posts["photo-url-500"]+'" /></a>';
		}
		$('#lastPict').html(content);
	});
	// Ajax request for twitter
	$.getJSON('http://twitter.com/statuses/user_timeline/gillesm.json?callback=?', function(data) {
				var html = "<b><a href='http://twitter.com/gillesm/status/" + data[0].id_str + "'>" + relative_time(data[0].created_at) + "</a></b> " + linkify(data[0].text);
				$("#lastTweet").html(html);
			});

});



















