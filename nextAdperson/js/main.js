$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstSection', 'secondSection', 'thirdSection','fourthSection'],
		sectionsColor: ['transparent', 'transparent', '#101010'],
		sectionSelector: '.vertical-scrolling',
		navigation: true,
		controlArrows: false,
		css3: true,
		scrollingSpeed: 700,
		afterLoad: function(origin, destination, direction, trigger){
			if (destination == 1){
				$("#Main .areaTitle .firstTitle").addClass("up");
				$("#Main .areaTitle .secondTitle").addClass("up");
			} else{
				$("#Main .areaTitle .firstTitle").removeClass("up");
				$("#Main .areaTitle .secondTitle").removeClass("up");
			}

			
			if (destination == 2){ 
				$("#Opening .areaOpening").addClass("up");
			} else{
				$("#Opening .areaOpening").removeClass("up");
			}
		}
	});

	$.fn.fullpage.setAllowScrolling(true);

});