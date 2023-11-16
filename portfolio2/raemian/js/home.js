// 메뉴 json
let type = [
    {
        name: 'dinner',
        price: 10000,
        quantity: 0
    },{
        name: 'salad',
        price: 5000,
        quantity: 0
    }
]

// 정기배달 json
let planDay = [
    {
        name: 'Mon',
        check: true
    },
    {
        name: 'Tue',
        check: true
    },
    {
        name: 'Wed',
        check: true
    },
    {
        name: 'Thu',
        check: true
    },
    {
        name: 'Fri',
        check: true
    },
    {
        name: 'Sat',
        check: false
    },
    {
        name: 'Sun',
        check: false
    }
]

// 정기배달 이용방법
function toggleService(){
    document.getElementById('popService').classList.toggle('hidden');
}

// 메뉴소개
function toggleIntro(){
    document.getElementById('popIntro').classList.toggle('hidden');
}

function typeIntro(){
    document.getElementById('popIntro').classList.remove('hidden');
    let typeIntroValue = document.querySelector('input[name="tabType"]:checked').value;
    for (let i = 0; i < type.length; i ++) {
        let typeClass = "."+type[i].name+"Intro"
        if(type[i].name === typeIntroValue){
            document.querySelector(typeClass).classList.remove('hidden');
        } else {
            document.querySelector(typeClass).classList.add('hidden');
        }
    }
}

// 요일 체크박스 이벤트
function planDayCheck(){
    let checkboxElement = document.querySelectorAll('input[name="regularDay"]');
    for(let i = 0; i < planDay.length; i++){
        let thisCheckbox = checkboxElement[i];
        if(thisCheckbox.checked){
            planDay[i].check = true;
        } else {
            planDay[i].check = false;
        }
    }
    amountCount();
}

// 결제예정 합계
let result = 0;
let resultPrice = 0;
function amountCount(typeIndex, count) {
    // 체크된 요일 갯수 확인
    let planDayConut = 0;
    for(let i = 0; i < planDay.length; i++){
        if(planDay[i].check){
            planDayConut = planDayConut + 1;
        }
    }
    console.log("체크된 요일 갯수 : " + planDayConut);

    // 수량 더하기 빼기 버튼이벤트
    if(count === 'plus'){
        type[typeIndex].quantity = type[typeIndex].quantity + 1;
    } else if (count === 'minus'){
        if(type[typeIndex].quantity >= 1) {
            type[typeIndex].quantity = type[typeIndex].quantity -1;
        }
    }
    console.log("도시락 수량 : " + type[0].quantity + "개, 샐러드 수량 : " + type[1].quantity + "개");

    // 수량 표시 및 메뉴별 수량 합 계산
    let totalTypeCount = 0
    for(let x = 0; x < type.length; x++){
        let typeClass = "."+type[x].name+"Quantity";
        if(type[x].quantity !== 0){
            document.querySelector(typeClass).classList.remove('fontDisable');
            document.querySelector(typeClass).classList.add('fontMain');
        } else if (type[x].quantity === 0){
            document.querySelector(typeClass).classList.remove('fontMain');
            document.querySelector(typeClass).classList.add('fontDisable');
        }
        document.querySelector(typeClass).innerText = type[x].quantity;
        let typeCount = type[x].price * type[x].quantity;
        totalTypeCount = totalTypeCount + typeCount;
    }
    console.log("메뉴가격 * 메뉴수량 총 합 : " + totalTypeCount);

    result = planDayConut * totalTypeCount;
    resultPrice = result.toLocaleString('ko-KR');
    document.querySelector(' .resultAmount').innerText = resultPrice+"원";
}

function enterHome(){
    if(result === 0){
        alert("메뉴의 수량을 선택해주세요");
    } else {
        location.href = "../home/home.html";
    }
}

window.onload = function(){
    amountCount();
}
