$(document).ready(function() {

	$(function(){
		const waves = document.querySelectorAll(".areaTeam p");

		waves.forEach((wave) => {
			let delayIdx = 0;

			wave.innerHTML = wave.textContent
			.split("")
			.map((letter) => {
				if (letter === " ") {
				return " "; // span 만들지 않고 그냥 공백 반환
				}
				// 공백이 아닌 경우에만 delayIdx를 쓰고 증가
				return `<span style="animation-delay:${delayIdx++ * 20}ms">${letter}</span>`;
			})
			.join("");
		});
	});


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
				}, 300);
                setTimeout(function() {
					$("#section3").addClass("step3");
				}, 600);
                setTimeout(function() {
					$("#section3").addClass("step4");
				}, 900);
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
				$("#section5 .areaTeam p span").addClass("wave");
			}
			// #sectoin6에 왔을 때 step 애니메이션 실행
			if(index == 6){
				$("#section6 .areaTeam p span").addClass("wave");
			}
			// #sectoin7에 왔을 때 step 애니메이션 실행
			if(index == 7){
				$("#section7 .areaTeam p span").addClass("wave");
			}
			// #sectoin8에 왔을 때 step 애니메이션 실행
			if(index == 8){
				$("#section8 .areaTeam p span").addClass("wave");
			}
			// #sectoin9에 왔을 때 step 애니메이션 실행
			if(index == 9){
                setTimeout(function() {
					$("#section9").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section9").addClass("step2");
				}, 300);
                setTimeout(function() {
					$("#section9").addClass("step3");
				}, 600);
                setTimeout(function() {
					$("#section9").addClass("step4");
				}, 900);
			}
			// #sectoin10에 왔을 때 step 애니메이션 실행
			if(index == 10){
                setTimeout(function() {
					$("#section10").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section10").addClass("step2");
				}, 300);
                setTimeout(function() {
					$("#section10").addClass("step3");
				}, 600);
                setTimeout(function() {
					$("#section10").addClass("step4");
				}, 900);
				//배경동영상 교체
				$(".background li").addClass("hidden");
				$(".background li").eq(2).removeClass("hidden");
			}
			// #sectoin14에 왔을 때 step 애니메이션 실행
			if(index == 14){
                setTimeout(function() {
					$("#section14").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section14").addClass("step2");
				}, 300);
                setTimeout(function() {
					$("#section14").addClass("step3");
				}, 800);
				//배경동영상 교체
				$(".background li").addClass("hidden");
				$(".background li").eq(3).removeClass("hidden");
			}
			// #sectoin20에 왔을 때 step 애니메이션 실행
			if(index == 20){
				//배경동영상 교체
				$(".background li").addClass("hidden");
				$(".background li").eq(4).removeClass("hidden");
			}
			// #sectoin25에 왔을 때 step 애니메이션 실행
			if(index == 25){
                setTimeout(function() {
					$("#section25").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section25").addClass("step2");
				}, 300);
			}
			// #sectoin29에 왔을 때 step 애니메이션 실행
			if(index == 29){
                setTimeout(function() {
					$("#section29").addClass("step1");
				}, 0);
			}
			// #sectoin30에 왔을 때 step 애니메이션 실행
			if(index == 30){
                setTimeout(function() {
					$("#section30").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section30").addClass("step2");
				}, 300);
                setTimeout(function() {
					$("#section30").addClass("step3");
				}, 600);
			}
			// #sectoin31에 왔을 때 step 애니메이션 실행
			if(index == 31){
                setTimeout(function() {
					$("#section31").addClass("step1");
				}, 0);
                setTimeout(function() {
					$("#section31").addClass("step2");
				}, 300);
                setTimeout(function() {
					$("#section31").addClass("step3");
				}, 600);
			}
		},
		onLeave: function(index, nextIndex, direction){
			// #section2를 떠날 때 #section1 애니메이션 클래스를 제거
			if(index === 2) {
				$("#section1").removeClass("step1");
			}
			// #section3를 떠날 때 #section2 애니메이션 클래스를 제거
			if(index === 3) {
				$("#section2").removeClass("step1 step2 step3 step4 step5");
			}
			// #section4를 떠날 때 #section3 애니메이션 클래스를 제거
			if(index === 4) {
				$("#section3").removeClass("step1 step2 step3 step4");
			}
			if(index === 4 && direction === "up") {
				console.log("up");
				$(".background li").addClass("hidden");
				$(".background li").eq(0).removeClass("hidden");
			}
			// #section5를 떠날 때 #section4 애니메이션 클래스를 제거
			if(index === 5) {
				$("#section4").removeClass("step1 step2 step3 step4 step5 step6 step7 step8 step9 step10 step11 step12");
			}
			// #section6를 떠날 때 #section5 애니메이션 클래스를 제거
			if(index === 6) {
				$("#section5 .areaTeam p span").removeClass("wave");
			}
			// #section7를 떠날 때 #section6 애니메이션 클래스를 제거
			if(index === 7) {
				$("#section6 .areaTeam p span").removeClass("wave");
			}
			// #section8를 떠날 때 #section7 애니메이션 클래스를 제거
			if(index === 8) {
				$("#section7 .areaTeam p span").removeClass("wave");
			}
			// #section9를 떠날 때 #section8 애니메이션 클래스를 제거
			if(index === 9) {
				$("#section8 .areaTeam p span").removeClass("wave");
			}
			// #section10를 떠날 때 #section9 애니메이션 클래스를 제거
			if(index === 10) {
				$("#section9 .liProcess").eq(1).removeClass("active");
			}
			if(index === 10 && direction === "up") {
				console.log("up");
				$(".background li").addClass("hidden");
				$(".background li").eq(1).removeClass("hidden");
			}
			// #section11를 떠날 때 #section10 애니메이션 클래스를 제거
			if(index === 11) {
				$("#section10").removeClass("step1 step2 step3 step4 step5 step6 step7 step8 step9 step10");
			}
			// #section13를 떠날 때 #section12 애니메이션 클래스를 제거
			if(index === 13) {
				$("#section12").removeClass("step1");
			}
			// #section14를 떠날 때
			if(index === 14 && direction === "up") {
				console.log("up");
				$(".background li").addClass("hidden");
				$(".background li").eq(2).removeClass("hidden");
			}
			// #section15를 떠날 때 #section14 애니메이션 클래스를 제거
			if(index === 15) {
				$("#section14").removeClass("step1 step2 step3");
			}
			// #section16를 떠날 때 #section15 애니메이션 클래스를 제거
			if(index === 16) {
				$("#section15").removeClass("step1");
			}
			// #section17를 떠날 때 #section16 애니메이션 클래스를 제거
			if(index === 17) {
				$("#section16").removeClass("step1");
			}
			// #section18를 떠날 때 #section17 애니메이션 클래스를 제거
			if(index === 18) {
				$("#section17").removeClass("step1");
			}
			if(index === 20 && direction === "up") {
				console.log("up");
				$(".background li").addClass("hidden");
				$(".background li").eq(3).removeClass("hidden");
			}
			// #section20를 떠날 때 #section19 애니메이션 클래스를 제거
			if(index === 20) {
				$("#section19").removeClass("step1");
			}
			// #section21를 떠날 때 #section20 애니메이션 클래스를 제거
			if(index === 21) {
				$("#section20 .ulNecessity .liNecessity").removeClass("active");
				$("#section20 .ulNecessity .liNecessity").eq(0).addClass("active");
				$("#section20 .ulNecessity").css('left', '185px');
			}
			// #section26를 떠날 때 #section25 애니메이션 클래스를 제거
			if(index === 26) {
				$("#section25").removeClass("step1 step2");
			}
			// #section30를 떠날 때 #section29 애니메이션 클래스를 제거
			if(index === 30) {
				$("#section29").removeClass("step1");
			}
			// #section31를 떠날 때 #section30 애니메이션 클래스를 제거
			if(index === 31) {
				$("#section30").removeClass("step1 step2 step3 step4 step5");
			}
			// #section32를 떠날 때 #section31 애니메이션 클래스를 제거
			if(index === 32) {
				$("#section31").removeClass("step1 step2 step3 step4 step5");
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
			//#section8일때 엔터 애니메이션 실행
			if(idx === 8){
				const $ul = $('#section8 .ulMember');
				if ($ul.length === 0) return;

				// 직전 단계 불러와 +1
				const next = (($ul.data('step') || 0) + 1) % 3; // 0→1→2→0...
				$ul.data('step', next);

				// 1회: -1920, 2회: -3840, 3회: 0
				let x;
				if (next === 1) x = -1920;
				else if (next === 2) x = -3840;
				else x = 0;

				$ul.css('transform', `translateX(${x}px)`);
			}
			//#section9일때 엔터 애니메이션 실행
			if(idx === 9){
				$("#section9 .liProcess").eq(1).toggleClass("active");
			}
			//#section10일때 엔터 애니메이션 실행
			if (idx === 10) {
				const $section = $('#section10');
				const classes = ['step5', 'step6', 'step7', 'step8', 'step9', 'step10'];

				// 현재 붙어있는 step 클래스가 뭔지 찾기
				let currentIndex = classes.findIndex(cls => $section.hasClass(cls));

				// 기존 step 클래스 제거
				$section.removeClass(classes.join(' '));

				// 다음 step 클래스 인덱스 계산 (순환)
				let nextIndex = (currentIndex + 1) % classes.length;

				// 다음 step 클래스 추가
				$section.addClass(classes[nextIndex]);
			}
			// #sectoin12일때 엔터 애니메이션 실행
			if(idx === 12){
				$("#section12").toggleClass("step1");
			}
			// #sectoin15일때 엔터 애니메이션 실행
			if(idx === 15){
				$("#section15").toggleClass("step1");
			}
			// #sectoin16일때 엔터 애니메이션 실행
			if(idx === 16){
				$("#section16").toggleClass("step1");
			}
			// #sectoin17일때 엔터 애니메이션 실행
			if(idx === 17){
				$("#section17").toggleClass("step1");
			}
			// #sectoin19일때 엔터 애니메이션 실행
			if(idx === 19){
				$("#section19").toggleClass("step1");
			}
			// #sectoin20일때 엔터 애니메이션 실행
			if(idx === 20){
				var $ul  = $('#section20 .ulNecessity');
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
			// #sectoin30일때 엔터 애니메이션 실행
			if(idx === 30){
				$("#section30").toggleClass("step4");
                setTimeout(function() {
					$("#section30").toggleClass("step5");
				}, 100);
			}
			// #sectoin31일때 엔터 애니메이션 실행
			if(idx === 31){
				$("#section31").toggleClass("step4");
                setTimeout(function() {
					$("#section31").toggleClass("step5");
				}, 100);
			}
		}
	});




	// $(function(){
	// 	var rolling = $("#section5 .ulMember");
	// 	var speed = 1.5; // px per frame (속도 조절)

	// 	// 리스트 복제 → 무한 롤링 느낌
	// 	rolling.append(rolling.html());

	// 	function tick(){
	// 		var left = parseInt(rolling.css("transform").split(",")[4]) || 0;
	// 		// 왼쪽으로 이동
	// 		rolling.css("transform", "translateX(" + (left - speed) + "px)");

	// 		// 절반 이상 밀렸으면 원위치
	// 		if(Math.abs(left) >= rolling[0].scrollWidth/2){
	// 		rolling.css("transform", "translateX(0px)");
	// 		}

	// 		requestAnimationFrame(tick);
	// 	}
	// 	tick();
	// });
});