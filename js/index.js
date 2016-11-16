
/*
// 변수를 사용하려면

var test1 = 100; // 데이터타입이 지정되기 않았기 때문에 아무값이나 막 넣을 수 있다.
var test2 = true;
var text3 = "소리없는 아우성";
var test4 = null;
var test5;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof text3);
console.log(typeof test4);
console.log(typeof test5);

// 선언적 함수
function myfunction(temp1, temp2) {
    return temp1 + temp2;
}

var result = myfunction(22,77);

console.log(result)

// 익명함수(람다함수)
var test = function(temp1, temp2) {
    return temp1 + temp2;
};

console.log(test(10,89));*/

// 변수 : properties
// 함수 : method
var obj = {
    myName : "박기태",
    myAge : 30,
    "my Hobby" : "유투브",
    myInfo : function() {

    },
};

console.log(obj["myName"]);
console.log(obj.myAge);
console.log(obj["my Hobby"]);
obj.myInfo();