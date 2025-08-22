$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionSelector: '.vertical-scrolling',
		navigation: true,
		controlArrows: false,
		css3: true,
		scrollingSpeed: 700,
		afterLoad: function(anchorLink, index){
			// #sectoin1에 왔을 때 step 애니메이션 실행
			if (index == 1){
				$("#section1").addClass("step1");
			}
			// #sectoin2에 왔을 때 step 애니메이션 실행
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
			}
			// #sectoin3에 왔을 때 step 애니메이션 실행
			if(index == 3){
                setTimeout(function() {
					$("#section3").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section3").addClass("step2");
				}, 400);
                setTimeout(function() {
					$("#section3").addClass("step3");
				}, 800);
                setTimeout(function() {
					$("#section3").addClass("step4");
				}, 1200);
			}
		},
		onLeave: function(index, nextIndex, direction){
			// #section1를 떠날 때 step 애니메이션 클래스를 제거
			if (index === 2) {
				$("#section1").removeClass("step1");
			}
			// #section2를 떠날 때 step 애니메이션 클래스를 제거
			if (index === 3) {
				$('#section2').removeClass('step1 step2 step3 step4 step5');
			}
			// #section3를 떠날 때 step 애니메이션 클래스를 제거
			if (index === 4) {
				$('#section3').removeClass('step1 step2 step3 step4');
			} 
		}
		
	});

	$.fn.fullpage.setAllowScrolling(true);

});