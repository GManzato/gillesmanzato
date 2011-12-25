/* Author: 

*/



$(function(){
	
	 $('#container nav').localScroll({hash:true,});
	
	offset = $('#container nav#main').offset()
	bodyEl = $('body');
	 $(window).scroll(function () { 
	 	if(offset.top < bodyEl.scrollTop()+20)
		 	$('#container nav#main').css('top',bodyEl.scrollTop()+20);
		else 
			$('#container nav#main').css('top',offset.top);
	 });
	 
	skills = {
	 "Code": {
		"HTML5":1,
		"jQuery":0.8,
		"CSS3": 1,
		"PHP": 0.5,
		"SEO": 0.5,
		"Mail": 0.5,
   		},
	"Design": {
		"photoshop":0.8,
		"illustrator":0.6,
		},
	"CMS":{
		"Wordpress":0.8,
		"Magento":0.4,
		"Sitecore":0.2
		}
 	}
	
	var slist = $('.slist');
	
	$.each(skills,function(index){
		slist.append('<a data-skill="'+index+'" href="#skills">'+index+'</a');
	});
	function htmlSkills(){
		var div = '<div class="skill">';
		div +='   <span class="skillName">Javascript</span>';
		div +='   <div class="skillContainer">';
		div +='  	<div class="skillContent"></div>';
		div +='	  </div>';
		div +='</div>';
		return div
	}
	function renderSkills(skill){
		$('.slist a').removeClass("selected");
		$('.slist a[data-skill="'+skill+'"]').addClass('selected');
		skillsContainer = $('.skillsContainer');
		$('.skillName').animate({opacity:0},500);
		$('.skillContent').animate({width:'0%'},500,function(){
			$('.skillsContainer').empty();
			$.each(skills[skill],function(name,size){
				var div = htmlSkills();
				result = $('.skillsContainer').append(div);
				$('.skillName:last',result).html(name).hide().fadeIn();
				$('.skillContent:last',result).animate({width:(size*100)+"%",opacity:size},2000,'easeOutElastic');			
			});			
		});
	};
	
	$('#contact .form form').submit(function(e){
		e.preventDefault();
		$('#response').html('En cours <img src="img/ajax-loader.gif" />');
		$.post("send.php" , $("#contact .form form").serialize(),function(data){
			if(data.success)
				{
					$('#response').html(data.text);
					$("#contact .form form").slideUp('slow');
				}
			else {
					$('#response').html(data.text);
				}
			},'json');
	});
	
	renderSkills($('.slist a:first').attr("data-skill"));
	
	$('.slist a').live('click',function(e){
		e.preventDefault();
		renderSkills($(this).attr("data-skill"));	
	});
	$.getJSON("http://api.twitter.com/1/statuses/user_timeline.json?screen_name=gillesm&count=1&callback=?",function(data){
		$('#lastTweet').html(data[0].text);
	});
	//
	twitpic.users.show({'username':'gillesm','page':'1'}, function(user) {
		$('#lastPict').html('<img src="'+'http://twitpic.com/show/thumb/'+user.images[0].short_id+'" />');
	});
});



















