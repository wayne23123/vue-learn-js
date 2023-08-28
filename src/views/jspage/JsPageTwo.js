//1.1字串拼接

const result_1 = 10 + 1; //11

const result_2 = 10 + "1"; //字串 101

const result_3 = true + "1"; //字串 true1

const result_4 = 10 + parseInt("1"); //11

//1.2 ==
console.log(10 == "10"); // true //數字轉字串

console.log(0 == ""); //true //0轉成false //空字串轉成false

console.log(null == undefined); //true

const obj = { a: 10 };
if (obj.b == null) {
  //obj.b 可以是 undefined 也可以 null
  console.log("存在");
}

//1.3 if 語句
if ("0") {
  console.log("true");
}

// https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy
// 記 falsey

!!0; //false

!!"0"; //true

console.log(10 && 1);
//10 是 true 往下 打印 1

console.log("abc" || 0);
// "abc" 是 true 打印 "abc"

console.log(0 || "abc");
//0 是 false 往後走

console.log(person.hi); //undefined

console.log(!person.hi); //true
