function startClock() {
    // javaScript 영역인데
    // 현재시간을 구해야함 !! '2016-11-15 20:08:00'
    // html div영역에 출력!!!
    // html div영역을 JavaScript 객체로 들고와요!
    var div = document.getElementById("clockDiv");                    // document : body ~ body 지칭, div는 한줄. element이다
    // div.innerHTML = "바뀌어요!!!!!!!";
    // HTML element를 JavaScript 객체로 변화시킨 것 => document object (문서객체)

    // 1초마다 반복적으로 시간을 구해서 div에 출력
    window.setInterval(function() {
        // 현재 시간을 구해요!
        var today = (new Date()).toLocaleString();
        div.innerHTML = today;
    },1000);
}





