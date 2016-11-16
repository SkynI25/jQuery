
    function myFunc() {
        // 현재 html안에 있는 모든 element를 다 선택해서 글자색을 red로 변경
        // $(" * ").css("color", "red");  // jQuery가 모든 색깔을 바꾼다
        //$("h1, input").css("color", "red");
        //$("#Gj").remove(); // # : id
        //$(".myclass").css("background-color","pink");
        //$("[type=button]").css("color", "red");   // [] 표시 : 속성
        //$("div > ul > li[id]").css("color", "yellow"); // > 표시 : 자식이라는 뜻 div의 자식으로 있는 ui, ui의 자식으로 있는 li 찾음
        //$("div li[id=Gj]").css("color","red"); // 후손은 " "(공백)으로 표시
        //alert($("#Gj + li").text()); // + 기호는 자기형제 바로다음에 나오는 어떤 것을 찾을 때 사용
        console.log($("#apple").text()); // text(호호호호) 에 인자가 없으면 태그 상에 있는 값을 알아오는 것이고 있으면 그것으로 바꿈
        console.log($("#pineapple").text());
        console.log($("ul > li.myList").text());
        console.log($("#uId").val());  // 입력상자에 있는 값을 알아오려면 val()을 쓰면 됨, val(으하하하하) 같이 값이 있으면 그 값으로 바뀜
        //console.log($("form > input").attr("id")); // attr : 속성을 제어하기 위해 씀 attr("id","lll")이면 id 속성을 lll로 바꿔줌 매개변수수에 따라 기능이 달라진다!
        console.log($("ol > li:first").text()); // ol 에 자식으로 있는 li 중 첫번째를 고른다!!! : -> 내가 선택한 것 중에 첫번째
        console.log($("ol > li:nth-child(1)").text()); // nth-child : 두번째에 있는 자식을 표현
        console.log($("ol > li:last").text()); // 마지막

    }
