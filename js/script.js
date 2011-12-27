/* Author: 

*/



$(function(){
	
	 /*$('#container nav').localScroll({hash:true,});
	
	 $(window).scroll(function () { 
	 	if(offset.top < bodyEl.scrollTop()+20)
		 	$('#container nav#main').css('top',bodyEl.scrollTop()+20);
		else 
			$('#container nav#main').css('top',offset.top);
	 });
*/
	$.localScroll();
	
	$.getJSON('http://twitter.com/statuses/user_timeline/gillesm.json?callback=?', function(data) {
				var html = "<b><a href='http://twitter.com/gillesm/status/" + data[0].id_str + "'>" + relative_time(data[0].created_at) + "</a></b> " + linkify(data[0].text);
				$("#lastTweet").html(html);
			});

	twitpic.users.show({'username':'gillesm','page':'1'}, function(user) {
		$('#lastPict').html('<img src="'+'http://twitpic.com/show/thumb/'+user.images[0].short_id+'" />');
	});
});



















