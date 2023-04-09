// 회원번호 입장코드 인풋 value 확인
function enterCheck(){
    let userNumber = document.getElementById('userNumber');
    let enterCode = document.getElementById('enterCode');
    let btnEnter = document.getElementById('btnEnter');
    console.log(userNumber.value.length+", " + enterCode.value.length)
    if(userNumber.value.length === 0 || enterCode.value.length === 0){
        btnEnter.classList.remove('bgMain');
        btnEnter.classList.add('bgDisable');
        btnEnter.disabled = true;
    } else {
        btnEnter.classList.add('bgMain');
        btnEnter.classList.remove('bgDisable');
        btnEnter.disabled = false;
    }
}

function enterLink(){
    location.href = "../home/mealPlanInitial.html";
}

window.onload = function(){
    enterCheck();
}