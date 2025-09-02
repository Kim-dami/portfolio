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
				}, 1300);
                setTimeout(function() {
					$("#section4").addClass("step11");
				}, 1500);
				//배경동영상 교체
				$(".background li").addClass("hidden");
				$(".background li").eq(1).removeClass("hidden");
			}
			// #sectoin5에 왔을 때 step 애니메이션 실행
			if(index == 5){
				var enterCount5 = 1;
				$(document).on("keydown", function(e){
					if(e.key === "Enter"){
						var items = $("#section5 .liRole");
						var total = items.length;
						items.removeClass("active");
						items.eq(enterCount5).addClass("active");
						enterCount5++;
						if(enterCount5 >= total){
							enterCount5 = 0; // total 이상이면 다시 처음으로
						}
						console.log("enterCount5:", enterCount5);
					}
				});
			}
			// #sectoin11에 왔을 때 step 애니메이션 실행
			if(index == 11){
                setTimeout(function() {
					$("#section11").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section11").addClass("step2");
				}, 300);
                setTimeout(function() {
					$("#section11").addClass("step3");
				}, 800);
				//배경동영상 교체
				$(".background li").addClass("hidden");
				$(".background li").eq(2).removeClass("hidden");
			}
			// #sectoin12에 왔을 때 step 애니메이션 실행
			if(index == 12){
				var enterCount12 = 0;
				$(document).on("keydown", function(e){
					if(e.key === "Enter"){
						enterCount12++;
						if(enterCount12 % 2 === 1){
							$("#section12").addClass("step1");
						} else {
							$("#section12").removeClass("step1");
						}
						console.log("enterCount12:", enterCount12);
						e.preventDefault();
					}
				});
			}
			// #sectoin13에 왔을 때 step 애니메이션 실행
			if(index == 13){
				var enterCount13 = 0;
				$(document).on("keydown", function(e){
					if(e.key === "Enter"){
						enterCount13++;
						if(enterCount13 % 2 === 1){
							$("#section13").addClass("step1");
						} else {
							$("#section13").removeClass("step1");
						}
						console.log("enterCount13:", enterCount13);
						e.preventDefault();
					}
				});
			}
			
			// #sectoin14에 왔을 때 step 애니메이션 실행
			if(index == 14){
				var enterCount14 = 0;
				$(document).on("keydown", function(e){
					if(e.key === "Enter"){
						enterCount14++;
						if(enterCount14 % 2 === 1){
							$("#section14").addClass("step1");
						} else {
							$("#section14").removeClass("step1");
						}
						console.log("enterCount14:", enterCount14);
						e.preventDefault();
					}
				});
			}
			// #sectoin16에 왔을 때 step 애니메이션 실행
			if(index == 16){
				//배경동영상 교체
				$(".background li").addClass("hidden");
				$(".background li").eq(3).removeClass("hidden");
			}
		},
		onLeave: function(index, nextIndex, direction){
			// #section2를 떠날 때 #section1 애니메이션 클래스를 제거
			if (index === 2) {
				$("#section1").removeClass("step1");
			}
			// #section3를 떠날 때 #section2 애니메이션 클래스를 제거
			if (index === 3) {
				$('#section2').removeClass("step1 step2 step3 step4 step5");
			}
			// #section4를 떠날 때 #section3 애니메이션 클래스를 제거
			if (index === 4) {
				$('#section3').removeClass("step1 step2 step3 step4");
			}
			// #section4에서 #section3로 올라갈때
			if (index === 4 && direction == 'up'){
				//배경동영상 교체
				$(".background li").addClass("hidden");
				$(".background li").eq(0).removeClass("hidden");
				
			}
			// #section5를 떠날 때 #section4 애니메이션 클래스를 제거
			if (index === 5) {
				$('#section4').removeClass("step1 step2 step3 step4 step5 step6 step7 step8 step9 step10 step11");
			}
			// #section6를 떠날 때 #section5 애니메이션 클래스를 제거
			if (index === 6) {
				$("#section5 .liRole").removeClass("active");
				$("#section5 .liRole").eq(0).addClass("active");
				enterCount5 = 1;
			}
			// #section8에서 #section9로 떠날때 타이틀 없어짐
			if (index === 8 && direction == 'down'){
				$(".background li:nth-of-type(2) h3").css("opacity","0");
			}
			// #section9에서 #section8로 떠날때 타이틀 생김
			if (index === 9 && direction == 'up'){
				$(".background li:nth-of-type(2) h3").css("opacity","1");
			}
			// #section12를 떠날 때 #section11 애니메이션 클래스를 제거
			if (index === 12) {
				$("#section11").removeClass("step1 step2 step3");
			}
			if (index === 11 && direction == 'up'){
				//배경동영상 교체
				$(".background li").addClass("hidden");
				$(".background li").eq(1).removeClass("hidden");
			}
			// #section13를 떠날 때 #section12 애니메이션 클래스를 제거
			if (index === 13) {
				$("#section12").removeClass("step1");
				enterCount12 = 0;
			}
			// #section14를 떠날 때 #section13 애니메이션 클래스를 제거
			if (index === 14) {
				$("#section13").removeClass("step1");
				enterCount13 = 0;
			}
			// #section15를 떠날 때 #section14 애니메이션 클래스를 제거
			if (index === 15) {
				$("#section14").removeClass("step1");
				enterCount14 = 0;
			}
		}
		
	});

	$.fn.fullpage.setAllowScrolling(true);


	$(function(){
		var rolling = $("#section5 .ulMember");
		var speed = 1.5; // px per frame (속도 조절)

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