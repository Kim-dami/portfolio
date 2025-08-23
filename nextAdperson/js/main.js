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
			// #sectoin4에 왔을 때 step 애니메이션 실행
			if(index == 4){
                setTimeout(function() {
					$("#section4").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section4").addClass("step2");
				}, 100);
                setTimeout(function() {
					$("#section4").addClass("step3");
				}, 300);
                setTimeout(function() {
					$("#section4").addClass("step4");
				}, 400);
                setTimeout(function() {
					$("#section4").addClass("step5");
				}, 600);
                setTimeout(function() {
					$("#section4").addClass("step6");
				}, 700);
                setTimeout(function() {
					$("#section4").addClass("step7");
				}, 900);
                setTimeout(function() {
					$("#section4").addClass("step8");
				}, 1000);
                setTimeout(function() {
					$("#section4").addClass("step9");
				}, 1200);
                setTimeout(function() {
					$("#section4").addClass("step10");
				}, 1400);
                setTimeout(function() {
					$("#section4").addClass("step11");
				}, 1500);
			}
			// #sectoin5에 왔을 때 step 애니메이션 실행
			if(index == 5){
				var enterCount = 1;
				$(document).on("keydown", function(e){
					if(e.key === "Enter"){
						var items = $("#section5 .liRole");
						var total = items.length;
						items.removeClass("active");
						items.eq(enterCount).addClass("active");
						enterCount++;
						if(enterCount >= total){
							enterCount = 0; // total 이상이면 다시 처음으로
						}
						console.log(enterCount);
					}
				});
			}
			if(index == 6){

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
			// #section4를 떠날 때 step 애니메이션 클래스를 제거
			if (index === 5) {
				$('#section4').removeClass('step1 step2 step3 step4 step5 step6 step7 step8 step9 step10 step11');
			}
			// #section5를 떠날 때 step 애니메이션 클래스를 제거
			if (index === 6) {
				$("#section5 .liRole").removeClass("active");
				$("#section5 .liRole").eq(0).addClass("active"); 
			} 
		}
		
	});

	$.fn.fullpage.setAllowScrolling(true);


	$(function(){
		var rolling = $("#section5 .ulMember");
		var speed = 2; // px per frame (속도 조절)

		// 리스트 복제 → 무한 롤링 느낌
		rolling.append(rolling.html());

		function tick(){
			var left = parseInt(rolling.css("transform").split(",")[4]) || 0;
			// 왼쪽으로 이동
			rolling.css("transform", "translateX(" + (left - speed) + "px)");

			// 절반 이상 밀렸으면 원위치
			if(Math.abs(left) >= rolling[0].scrollWidth/2){
			rolling.css("transform", "translateX(0px)");
			}

			requestAnimationFrame(tick);
		}
		tick();
	});
});