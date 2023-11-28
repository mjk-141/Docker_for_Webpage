// 7.3장의 배열 및 7.6장의 math 함수 사용
var add1 = document.getElementsByClassName("btn btn-dark btn-social mx-2");

function change() {
    var button_1 = document.getElementById("tell");
    var button = document.getElementsByTagName("button")
    var cart = document.getElementById("cart");
    var laptop = document.getElementById("laptop");
    var lock = document.getElementById("lock");

    for (var i = 0; i < button.length; i++) {
        button[i].style.backgroundColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    }
    button_1.style.backgroundColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    cart.style.color = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    laptop.style.color = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    lock.style.color = "#" + Math.round(Math.random() * 0xffffff).toString(16);
}
//7.4장 Date객체 사용 및 10.3장의 타이머 사용
function realTime() {
    var timer = document.getElementById("timer");
    var now = new Date();
    timer.innerHTML = now.getFullYear() + "년도 " + now.getMonth() + "월 " + now.getDate() + "일 " + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";
}
setInterval(realTime, 1000);

//10.3장의 타이머 사용
var timerID = null;

function openwindow1(time) {
    timerID = setTimeout("load('http://www.naver.com')", time);
}

function openwindow2(time) {
    timerID = setTimeout("load('http://www.daum.net')", time);
}

function openwindow3(time) {
    timerID = setTimeout("load('http://www.google.com')", time);
}

function openwindow4(time) {
    timerID = setTimeout("load('http://www.gachon.ac.kr')", time);
}

function load(URL) {
    var newWin = window.open(URL, "newWin", "left=300,top=300,width=1000,height=900");
}

// 9.6장의 onblur와 onfocus와 7.5장의 String 객체 사용
function checkFilled1(obj1) {
    if (obj1.value == "") {
        var caution = new String("enter name!");
        alert(caution.toUpperCase());
        obj1.focus(); // obj에 다시 포커스
    }
}

function checkFilled2(obj2) {
    if (obj2.value == "") {
        var caution = new String("enter Email!");
        alert(caution.toUpperCase());
        obj2.focus(); // obj에 다시 포커스
    }
}

function checkFilled3(obj3) {
    if (obj3.value == "") {
        var caution = new String("enter Phone!");
        alert(caution.toUpperCase());
        obj3.focus(); // obj에 다시 포커스
    }
}

function checkFilled4(obj4) {
    if (obj4.value == "") {
        var caution = new String("enter Messages!");
        alert(caution.toUpperCase());
        obj4.focus(); // obj에 다시 포커스
    }
}

//10.6장 navigator 객체 사용
function show() {
    var text = "<b><span>코드 이름</span></b>: " + navigator.appCodeName + "<br>";
    text += "<b><span>브라우저 이름</span></b>: " + navigator.appName + "<br>";
    text += "<b><span>브라우저의 플랫폼과 버전</span></b>: " + navigator.appVersion + "<br>";
    text += "<b><span>플랫폼 이름</span></b>: " + navigator.platform + "<br>";
    text += "<b><span>엔진 이름</span></b>: " + navigator.product + "<br>";
    text += "<b><span>userAgent</span></b>: " + navigator.userAgent + "<br>";
    text += "<b><span>회사이름</span></b>: " + navigator.vendor + "<br>";
    text += "<b><span>사용한 언어</span></b>: " + navigator.language + "<br>";
    text += "<b><span>온라인 상태 확인</span></b>: " + navigator.onLine + "<br>";
    text += "<b><span>브라우저에 쿠키를 사용할 수 있는 상태</span></b>: " + navigator.cookieEnabled + "<br>";
    text += "<b><span>자바 애플릿 실행 가능여부</span></b>:" + navigator.javaEnabled() + "<br>";
    text += "<b><span>plugins.length</span></b>: " + navigator.plugins.length + "<br>";
    for (var j = 0; j < navigator.plugins.length; j++) {
        text += "<b>plugins</b>" + j + " : <blockquote>";
        text += navigator.plugins[j].name + "<br>";
        text += "<i>" + navigator.plugins[j].description + "</i><br>";
        text += navigator.plugins[j].filename + "</blockquote>";
    }
    var information = document.getElementById("information");
    information.innerHTML = text;
}


//11장 캔버스 에니메이션 : 디지털 시계
setInterval(clock, 1000);

function clock() {
    var now = new Date();
    var ctx = document.getElementById('myCanvas').getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";

    // 시계판 - 시
    ctx.save();
    for (var i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.restore();

    // 시계판 - 분
    ctx.save();
    ctx.lineWidth = 5;
    for (i = 0; i < 60; i++) {
        if (i % 5 != 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
    }
    ctx.restore();

    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    ctx.fillStyle = "black";

    // 시간 표시 - 시
    ctx.save();
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec)
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // 시간 표시 - 분
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec)
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();

    // 시간 표시 - 초
    ctx.save();
    ctx.rotate(sec * Math.PI / 30);
    ctx.strokeStyle = "#6c757d";
    ctx.fillStyle = "#6c757d";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#6c757d';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.restore();
}
