$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionSelector: '.vertical-scrolling',
		navigation: true,
		controlArrows: false,
		css3: true,
		scrollingSpeed: 700,
		afterLoad: function(anchorLink, index){
			if (index == 1){
				$("#section1").addClass("step1");
			} else{
				$("#section1").removeClass("step1");
			}

			if(index == 2){
                setTimeout(function() {
					$("#section2").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section2").addClass("step2");
				}, 150);
                setTimeout(function() {
					$("#section2").addClass("step3");
				}, 300);
                setTimeout(function() {
					$("#section2").addClass("step4");
				}, 1200);
                setTimeout(function() {
					$("#section2").addClass("step5");
				}, 1500);
			} else{
				$("#section2").removeClass("step1");
				$("#section2").removeClass("step2");
				$("#section2").removeClass("step3");
				$("#section2").removeClass("step4");
				$("#section2").removeClass("step5");

			}
		}
	});

	$.fn.fullpage.setAllowScrolling(true);

});