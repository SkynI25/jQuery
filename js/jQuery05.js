
    function myFunc() {
        /*$("ul > li").each(function(idx,item) { // for ~ loop를 쓰는 것과 비슷
            // idx : index번호
            // item : 현재 선택된 문서객체를 지침, 각각의 li가 가지고 있는 값을 말함
            console.log($(item).text() + "입니다."); // $("") ""에 selector가 들어갈수도 있고 문서객체가 들어갈수도 있다.
        }); // each : 각각에 대해 function 처리를 해준다*/

        $("ul > li").addClass("myStyle");
    }

    function inStyle() {
        // 현재 선택된 li에 대해서 Style을 적용해 주면되요!!
        $(this).addClass("inStyle"); // this : 선택된 li
        $(this).removeClass("outStyle");
    }

    function outStyle() {
        // 현재 선택된 li에 대해서 Style을 적용해 주면되요!!
        $(this).addClass("outStyle"); // this : 선택된 li
        $(this).removeClass("inStyle");
    }