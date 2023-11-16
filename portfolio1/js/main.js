// JavaScript Document
$(document).ready(function(){
	/* fullpage */
	$('#fullpage').fullpage({
		anchors: ['firstSection', 'secondSection', 'thirdSection'],
		sectionsColor: ['#101010', '#fff', '#fff'],
		sectionSelector: '.vertical-scrolling',
		navigation: true,
		controlArrows: false,
		css3: true,
		menu: 'nav ul li',
		scrollingSpeed: 700,
		onLeave: function(index, nextIndex, direction){
			if (index == 1 && direction == 'down'){
				$("header h1").removeClass("bg_black");
				$("header h1").addClass("bg_white");

				$("nav ul").removeClass("bg_black");
				$("nav ul").addClass("bg_white");

				$("#fp-nav ul").removeClass("bg_black");
				$("#fp-nav ul").addClass("bg_white");
			} else if (index == 2 && direction == 'up'){
				$("header h1").removeClass("bg_white");
				$("header h1").addClass("bg_black");

				$("nav ul").removeClass("bg_white");
				$("nav ul").addClass("bg_black");
				
				$("#fp-nav ul").removeClass("bg_white");
				$("#fp-nav ul").addClass("bg_black");
			}
		},
		afterLoad: function(anchorLink, index){
			if (index == 1){ 
				$("#Home").addClass("ani");
				$("#About .about_wrap .skill .skill_graph").removeClass("skill_fill");
			}
			if (index == 2){ 
				$("#Home").removeClass("ani");
				$("#About .about_wrap .skill .skill_graph").addClass("skill_fill");
			}
			if (index == 3){
				$("#Home").removeClass("ani");
				$("#About .about_wrap .skill .skill_graph").removeClass("skill_fill");
			}
		}
	});

	$.fn.fullpage.setAllowScrolling(true);

});