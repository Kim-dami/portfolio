$(document).ready(function() {
	var enterCount5 = 1;


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
			// #sectoin7에 왔을 때 step 애니메이션 실행
			if(index == 7){
                setTimeout(function() {
					$("#section7").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section7").addClass("step2");
				}, 200);
                setTimeout(function() {
					$("#section7").addClass("step3");
				}, 400);
                setTimeout(function() {
					$("#section7").addClass("step4");
				}, 600);
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
			// #sectoin16에 왔을 때 step 애니메이션 실행
			if(index == 16){
				//배경동영상 교체
				$(".background li").addClass("hidden");
				$(".background li").eq(3).removeClass("hidden");
			}
			// #sectoin21에 왔을 때 step 애니메이션 실행
			if(index == 21){
                setTimeout(function() {
					$("#section21").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section21").addClass("step2");
				}, 300);
			}
			// #sectoin21에 왔을 때 step 애니메이션 실행
			if(index == 25){
                setTimeout(function() {
					$("#section25").addClass("step1");
				}, 0);
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
				$('#section4').removeClass("step1 step2 step3 step4 step5 step6 step7 step8 step9 step10 step11 step12");
				enterCount4 = 0;
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

	
	$(document).on('keydown', function(e){
		if(e.key === 'Enter'){
			e.preventDefault();
			if(e.repeat) return;
			var idx = $('#fullpage .section.active').index() + 1;
			// #section4일때 엔터 애니메이션 실행
			if(idx === 4){
				$("#section4").toggleClass("step12");
			}
			//#section5일때 엔터 애니메이션 실행
			if(idx === 5){
				var items = $("#section5 .liRole");
				var total = items.length;
				items.removeClass("active");
				items.eq(enterCount5).addClass("active");
				enterCount5++;
				if(enterCount5 >= total){
					enterCount5 = 0; // total 이상이면 다시 처음으로
				}
			}
			//#section6일때 엔터 애니메이션 실행
			if(idx === 6){
				$("#section6 .liProcess").eq(1).toggleClass("active");
			}
			//#section7일때 엔터 애니메이션 실행
			if(idx === 7){
				$("#section7").toggleClass("step5");
			}
			// #sectoin9일때 엔터 애니메이션 실행
			if(idx === 9){
				$("#section9").toggleClass("step1");
			}
			// #sectoin12일때 엔터 애니메이션 실행
			if(idx === 12){
				$("#section12").toggleClass("step1");
			}
			// #sectoin13일때 엔터 애니메이션 실행
			if(idx === 13){
				$("#section13").toggleClass("step1");
			}
			// #sectoin14일때 엔터 애니메이션 실행
			if(idx === 14){
				$("#section14").toggleClass("step1");
			}
			// #sectoin15일때 엔터 애니메이션 실행
			if(idx === 15){
				$("#section15 .liProcess").eq(2).toggleClass("active");
			}
			// #sectoin16일때 엔터 애니메이션 실행
			if(idx === 16){
				$("#section16").toggleClass("step1");
			}
			// #sectoin17일때 엔터 애니메이션 실행
			if(idx === 17){
				var $ul  = $('#section17 .ulNecessity');
				var $lis = $ul.find('li');
				if(!$lis.length) return;

				var $active = $lis.filter('.active');
				if(!$active.length){
				// 안전장치: active가 없다면 첫번째를 활성화만 하고 종료
				$lis.removeClass('active').eq(0).addClass('active');
				return;
				}

				// 현재 active의 "보이는 전체 폭"(margin 포함)만큼 이동
				var shift = $active.outerWidth(true);

				// 다음 타깃 결정 (마지막이면 처음으로 루프)
				var activeIdx = $active.index();
				var nextIdx = (activeIdx + 1) % $lis.length;

				// 애니메이션으로 왼쪽으로 밀어 다음 li를 190px 위치로 가져옴
				// (ul의 left을 현재 값에서 -shift 만큼 감소)
				$ul.stop(true).animate(
					{ left: '-=' + shift },     // 현재 left에서 감소
					600,                        // 속도
					'swing',                    // 이징
					function(){
						// 애니메이션 끝나면 active 교체
						$lis.removeClass('active').eq(nextIdx).addClass('active');

						// 루프 완료 후(마지막에서 처음으로 넘어갈 때) 점프 복원 처리
						// 전체를 한 바퀴 밀었다면 left가 190px - 총폭이 되므로
						// 처음으로 돌아갈 때 부드럽게 리셋하고 싶으면 아래 주석 해제:
				
					}
				);
			}
			// #sectoin20일때 엔터 애니메이션 실행
			if(idx === 20){
				$("#section20").toggleClass("step1");
			}
		}
	});


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