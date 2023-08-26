<script setup>
import { ref } from "vue";

const toTopRef = ref(false);
window.addEventListener("scroll", function () {
  // 當 scrollY大於0 則 showRef 為 true
  toTopRef.value = window.scrollY > 0;
});
// 當點擊返回頂部時，滾動到頁面頂部
function toTopFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
function toBotFunction() {
  window.scrollTo({
    top: 999999,
    left: 0,
    behavior: "smooth",
  });
}
function locate(idPound) {
  window.scrollTo({
    top: document.getElementById(`${idPound}`).offsetTop,
    behavior: "smooth",
  });
}
</script>

<template>
  <section>
    <!-- <div class="sectionHolderNav"></div> -->
    <!-- 左邊導航條 -->
    <div class="leftNav">
      <div class="leftNavContainer">
        <div class="leftNavLayout">
          <br />
          <br />
          <div class="leftNavText"></div>
          <div class="leftNavText"></div>
          <div class="leftNavText"></div>
          <div class="leftNavText"></div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
        <div class="mainLayout">
          <!-- <div class="articleCardTitle cor36">[ ] ≫</div> -->
          <br />
          <br />
          <div class="cardTitle cor36">9.輸出結果:</div>
          <div>alert (true + 1); . . . // 2</div>
          <div>alert ("name" + true); . . . // nametrue</div>
          <div>alert (undefined + 1); . . . // NaN</div>
          <div>alert (typeof null); . . . // object</div>
          <div>alert (typeof NaN); . . . // number</div>
          <div>alert (typeof undefined); . . . // undefined</div>
          <br />
          <div>1.隱式轉換 true 是 1 false 是 0</div>
          <div>2.字符串和任何相加, 其他都變字符串, 變成連接</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>for ( var i=0 ; i＜3 ; i++ ) {</div>
          <div>. setTimeout(function(){</div>
          <div>. . console.log(i)</div>
          <div>. },1000*i)</div>
          <div>}</div>
          <div>console.log(222)</div>
          <br />
          <div>setTimeout 進入事件循環, 而for循環是同步的</div>
          <div>第一次 i=0 , 0＜3 , 1000*0 的 setTime 進入事件循環列隊</div>
          <div>第二次 i=1 , 1＜3 , 1000*1 的 setTime 進入事件循環列隊</div>
          <div>第三次 i=2 , 2＜3 , 1000*2 的 setTime 進入事件循環列隊</div>
          <div>等for執行完才執行 事件循環裡的 setTimeout</div>
          <div>i=3 跳出循環</div>
          <div>結果</div>
          <div>222</div>
          <div>3</div>
          <div>隔1秒再打印3</div>
          <div>隔1秒再打印3</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>setTimeout(function(){</div>
          <div>. console.log("1");</div>
          <div>})</div>
          <div>new Promise((resolve)=>{</div>
          <div>. console.log( "1 promise 1");</div>
          <div>. resolve();</div>
          <div>}).then(()=>{</div>
          <div>. console.log("微1")</div>
          <div>}).then(()=>{</div>
          <div>. console.log("微2")</div>
          <div>})</div>
          <div>console.log(2);</div>
          <br />
          <div>同步 > 微(事件循環) > 宏 > 微 ...</div>
          <div>console 同步 , promise.them 才是微</div>
          <div>第一個打印: 1 promise 1</div>
          <div>第二個打印: 2</div>
          <div>微任務 .then</div>
          <div>第三個打印: 微1</div>
          <div>第四個打印: 微2</div>
          <div>宏任務 setTimeout</div>
          <div>第五個打印: 1</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>Promise.resolve("333").then(res=>{</div>
          <div>. console.log( res );</div>
          <div>. setTimeout(()=>{</div>
          <div>. . console.log("Promise setTimeout")</div>
          <div>. },0)</div>
          <div>})</div>
          <div>setTimeout(()=>{</div>
          <div>. console.log(111);</div>
          <div>. Promise.resolve("setTimeout Promise").then(res=>{</div>
          <div>. . console.log( res );</div>
          <div>. })</div>
          <div>},0)</div>
          <div>console.log( 222 );</div>
          <br />
          <div>同步 > 微(事件循環) > 宏 > 微 > 宏 ...</div>
          <div>1.分同步異步 > 先執行同步 > 打印222</div>
          <div>2.先推微再推宏 > 執行棧順序 > 微Promise.then 宏setTimeout</div>
          <div>3.執行微 打印333</div>
          <div>
            4.遇到promise推了一個setTimeout > 目前2個宏 > 誰先 > WEBapi先推先出
            > 111先
          </div>
          <div>5.執行宏 打印111</div>
          <div>
            6.這個宏任務推了一個微任務Promise.then.setTimeout > 微任務插隊宏任務
          </div>
          <div>7.打印setTimeoutPromise</div>
          <div>8.最後執行宏任務打印Promise setTimeout</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>(function(){</div>
          <div>. var a = b = 10;</div>
          <div>})()</div>
          <div>console.log(a) . . . // a is not defined</div>
          <div>
            console.log(b) . . . // 10 b=10 沒寫默認window.b=10, 相當於全局var
            b=10
          </div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>function c(){</div>
          <div>. var b = 1</div>
          <div>. function a(){</div>
          <div>. . console.log(b)</div>
          <div>. . var b = 2;</div>
          <div>. . console.log(b)</div>
          <div>. }</div>
          <div>. a()</div>
          <div>. console.log(b)</div>
          <div>}</div>
          <div>c()</div>
          <br />
          <div>先看本層作用域有沒有此變量 (注意變量提升)</div>
          <div>a()裡面有var b提升, 第一個console.log(b) . . . // undefined</div>
          <div>第二個console.log(b) . . . // 2 因為上面有</div>
          <div>第三個console.log(b)本層有是 1</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>var name = "a";</div>
          <div>(function(){</div>
          <div>. if( typeof name == "undefined" ){</div>
          <div>. . var name = "b";</div>
          <div>. . console.log("111"+name);</div>
          <div>. } else {</div>
          <div>. . console.log("222"+name);</div>
          <div>. }</div>
          <div>})()</div>
          <br />
          <div>先看本層作用域有沒有此變量 (注意變量提升)</div>
          <div>注意JS除了函數外, JS沒有塊級作用域</div>
          <div>var先變量提升到function, 就算if( false )也是提升</div>
          <div>所以 var name, 所以name == undefined, 所以打印 111b</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>var bar = 1;</div>
          <div>function test(){</div>
          <div>. console.log( bar )</div>
          <div>. var bar = 2;</div>
          <div>. console.log( bar )</div>
          <div>}</div>
          <div>test();</div>
          <br />
          <div>先看本層作用域有沒有此變量 (注意變量提升)</div>
          <div>第一個bar undefined</div>
          <div>第二個bar 2</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>function fun(){</div>
          <div>. a = 10;</div>
          <div>. console.log( a );</div>
          <div>. var a = 20;</div>
          <div>. console.log( a );</div>
          <div>}</div>
          <div>fun(); . . . // 第一個打印 10 , 第二個打印 20</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>var obj1 = {</div>
          <div>. a:"hellow"</div>
          <div>}</div>
          <div>var obj2 = obj1;</div>
          <div>obj2.a= "world";</div>
          <div>console.log(obj1);</div>
          <div>(function(){</div>
          <div>. console.log( a );</div>
          <div>. var a = 1;</div>
          <div>})();</div>
          <div>第一個打印 {a:world}</div>
          <div>第二個打印 undefined</div>

          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>var a = {}</div>
          <div>var b = {</div>
          <div>. key: "a"</div>
          <div>}</div>
          <div>var c = {</div>
          <div>. key: "c"</div>
          <div>}</div>
          <div>a[b] = "123";</div>
          <div>a[c] = "456";</div>
          <div>console.log( a[b] )</div>
          <br />
          <div>這相當於 let m = {}</div>
          <div>m.a = 1;</div>
          <div>m.a = 2;</div>
          <div>往物件裡面加內容,物件的key為字串</div>
          <div>結果為 456</div>
          <div>for(var k in a){</div>
          <div>. console.log( typeof k )</div>
          <div>}</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>function Foo(){</div>
          <div>. getName = function(){console.log(1)}</div>
          <div>. return this;</div>
          <div>}</div>
          <div>Foo.getName = function(){console.log(2)}</div>
          <div>Foo.prototype.getName = function(){console.log(3)}</div>
          <div>var getName = function(){console.log(4)}</div>
          <div>function getName(){</div>
          <div>. console.log(5)</div>
          <div>}</div>
          <br />
          <div>Foo.getName(); . . . // 2</div>
          <div>getName(); . . . // 4</div>
          <div>Foo().getName();</div>
          <div>getName();</div>
          <div>new Foo().getName();</div>
          <br />
          <div>1.getName=function...是全局的window.getName=...</div>
          <br />
          <div>2.Foo.getName() 先找函數本身 打印出 2</div>
          <br />
          <div>3.Foo.getName() 的 Foo 沒有加括號代表他沒有執行</div>
          <br />
          <div>
            4.getName() 找到變量 var getName =.. 和函數 function getName(){..
          </div>
          <div>(因作用域) 普通變量 > 函數 . . . 所以打印出 4</div>
          <br />
          <div>5.Foo().getName();</div>
          <div>Foo() 先執行 做 //getName = function(){console.log(1)}</div>
          <div>然後 return this . . . return 出 window</div>
          <div>所以是 window.getName() . . . 因上上行 所以打印出 1</div>
          <br />
          <div>6.getName(); . . . 因上上上行覆蓋, 所以打印出 1</div>
          <br />
          <div>7.new Foo().getName(); 物件找方法</div>
          <div>
            先在物件本身找 > 構造函數中找 > 物件原型中找 > 構造函數原型中找 >
            物件上一層原型查找
          </div>
          <div>本身沒有</div>
          <div>構造函數 function Foo(){ 本身裡不是 this. getName是 window.</div>
          <div>物件原型中找 __proto__ 沒有</div>
          <div>物件原型和構造函數原型他們是一個原型</div>
          <div>所以看構造函數原型 , 打印出 3</div>
          <div>Foo.prototype.getName = function(){console.log(3)}</div>

          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>var o = {</div>
          <div>. a:10,</div>
          <div>. b:{</div>
          <div>. . fn:function(){</div>
          <div>. . . console.log( this.a );</div>
          <div>. . . console.log( this );</div>
          <div>. . }</div>
          <div>. }</div>
          <div>}</div>
          <div>o.b.fn()</div>
          <br />
          <div>重點看誰執行 fn, 所以 fn 裡面的 this 指向 b</div>
          <div>console.log( this.a ); . . . 打印 undefined</div>
          <div>console.log( this ); . . . 打印 fn</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>window.name = "ByteDance";</div>
          <div>function A(){</div>
          <div>. this.name = 123;</div>
          <div>}</div>
          <div>A.prototype.getA = function(){</div>
          <div>. console.log( this );</div>
          <div>. return this.name + 1;</div>
          <div>}</div>
          <div>let a = new A();</div>
          <div>let funcA = a.getA;</div>
          <div>funcA();</div>
          <div>console.log( funcA() )</div>
          <br />
          <div>先注意 let funcA = a.getA 的 a.getA 有沒有括號,差很大</div>
          <div>a.getA 沒括號 裡面代碼不執行 返回函數體</div>
          <div>
            a.getA 沒執行, 相當於把這個 A.prototype.getA = function(){
            函數賦給了 funcA
          </div>
          <div>
            funcA() 執行了 A.prototype.getA = function(){ 裡面的
            console.log(this) 打印 window
          </div>
          <div>console.log( funcA() ) 要打印 return this.name + 1;</div>
          <div>而 this 代表 window, this.name 找到 "ByteDance"</div>
          <div>console.log( funcA() ) 打印出 "ByteDance1"</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>window.name = "ByteDance";</div>
          <div>function A(){</div>
          <div>. this.name = 123;</div>
          <div>}</div>
          <div>A.prototype.getA = function(){</div>
          <div>. console.log( this );</div>
          <div>. return this.name + 1;</div>
          <div>}</div>
          <div>let a = new A();</div>
          <div>let funcA = a.getA();</div>
          <div>funcA;</div>
          <br />
          <div>let funcA = a.getA() 調用直接執行</div>
          <div>執行 A.prototype.getA = function(){</div>
          <div>裡面的 console.log( this ) this 指 A</div>
          <div>打印出 A{name: 123}</div>
          <div>funcA沒加括號 裡面代碼不執行 有return則返回函數體</div>
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>var length = 10;</div>
          <div>function fn(){</div>
          <div>. return this.length</div>
          <div>}</div>
          <div>var obj = {</div>
          <div>. length: 5,</div>
          <div>. test1: function(){</div>
          <div>. . return fn();</div>
          <div>. }</div>
          <div>}</div>
          <div>obj.test2 = fn;</div>
          <div>console.log( obj.test1() );</div>
          <div>console.log( fn()===obj.test2() );</div>
          <div>console.log( obj.test1() == obj.test2() );</div>
          <br />
          <div>注意 obj.test2 = fn 沒加掛號 相當於 把這個函數賦給了</div>
          <div>沒加掛號 裡面代碼不執行 有return則返回函數體</div>
          <div>相當於 把這個 function fn(){ 函數賦給了 obj.test2</div>
          <div>所以 obj 多了一個 test2: function</div>
          <br />
          <div>console.log( obj.test1() )</div>
          <div>test1 return fn() , fn帶括號要執行</div>
          <div>fn return this.length, 這個this 指向 window</div>
          <div>return 10, return 10+1</div>
          <div>console.log( obj.test1() ) 打印出 11</div>
          <br />
          <div>console.log( fn()===obj.test2() )</div>
          <div>obj.test2() 裡面 return this.length,</div>
          <div>this 指向 obj , this.length 是 5</div>
          <div>而 fn() 的 this 指向 window , window.length 是 10</div>
          <div>console.log( fn()===obj.test2() ) 是 false</div>
          <br />
          <div>console.log( obj.test1() == obj.test2() )</div>
          <div>obj.test2() 上面討論 5</div>
          <div>obj.test1() 上面討論 11</div>
          <br />
          <br />
          <br />
          <br />
          <div class="cor36">如何用 indexOf 數組去重?</div>
          <div>
            indexOf()
            方法會回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳
            -1
          </div>
          <br />
          <div>var arr2 = [ 1,2,3,2,4,1 ];</div>
          <div>function unique( arr ){</div>
          <div>. var brr = [];</div>
          <div>. for( var i = 0 ; i ＜ arr.length ; i++ ){</div>
          <div>. . if( brr.indexOf( arr[i] ) == -1 ){</div>
          <div>. . . brr.push( arr[i] );</div>
          <div>. . }</div>
          <div>. }</div>
          <div>. return brr;</div>
          <div>}</div>
          <div>console.log( unique( arr2 ) );</div>
          <br />
          <div>目標, 遍歷陣列, 看有沒有在 brr 陣列, 沒有就添加</div>
          <div>brr去找indexOf(arr[i])</div>
          <div>第一次去找brr肯定是空的(不存在)就回傳-1就把他推進brr裡面</div>
          <div>不是-1就不動作 完成。</div>
          <br />
          <br />
          <br />
          <br />
          <div class="cor36">找出多维数组最大值?</div>
          <div>
            大陣列中包含 4 個小陣列, 分別找到每個小陣列中的最大值,
            然後串起來成新陣列
          </div>
          <div>輸入:[</div>
          <div>. [ 4, 5, 1, 3, ],</div>
          <div>. [ 13, 27, 18, 26, ],</div>
          <div>. [ 32, 35, 37, 39, ],</div>
          <div>. [ 1000, 1001, 857, 1 ],</div>
          <div>]</div>
          <div>輸出: [ 5, 27, 39, 1001 ]</div>
          <br />
          <br />
          <div>function fnArr( arr ){</div>
          <div>. var newArr = [];</div>
          <div>. arr.forEach(( item, index )=>{</div>
          <div>. . newArr.push( Math.max( ...item ) )</div>
          <div>. })</div>
          <div>. return newArr;</div>
          <div>}</div>
          <div>console.log( fnArr([</div>
          <div>. [ 4, 5, 1, 3, ],</div>
          <div>. [ 13, 27, 18, 26, ],</div>
          <div>. [ 32, 35, 37, 39, ],</div>
          <div>. [ 1000, 1001, 857, 1 ],</div>
          <div>]));</div>
          <br />
          <div>首先 遍歷 item 是每一項 [ 4, 5, 1, 3, ]</div>
          <div>取裡面最大值 Math.max(...item)</div>
          <br />
          <br />
          <br />
          <div class="cor36">
            給字串物件定義一個addPrefix函數, 當傳入一個字串時,
            他會返回新的帶有指定前綴的字串, 例如:
          </div>
          <div>console.log( "world".addPrefix("hello") )</div>
          <div>控制台輸出: "helloworld"</div>
          <br />
          <div>var str = "你好";</div>
          <div>String.prototype.addTest = function(){</div>
          <div>. return 111;</div>
          <div>}</div>
          <div>console.log( str.addPrefix() ) . . . // 打印 111</div>
          <br />
          <br />
          <div>String.prototype.addTest = function(){</div>
          <div>. return this;</div>
          <div>}</div>
          <div>console.log( str.addPrefix() ) . . . // 打印 你好</div>
          <br />
          <br />
          <div>String.prototype.addTest = function(){</div>
          <div>. return str + this;</div>
          <div>}</div>
          <div>
            console.log( "world".addPrefix("hello") ) . . . // 打印 worldhello
          </div>
          <br />
          <br />
          <br />
          <br />
          <div class="cor36">判斷一個字串中出現次數最多的字符, 並統計次數</div>
          <div>
            charAt() 方法返回一个由给定索引处的单个 UTF-16 码元构成的新字符串。
          </div>
          <div>var john = { . . . //forin複習</div>
          <div>. firstName: 'John',</div>
          <div>. lastName: 'Doe'</div>
          <div>};</div>
          <div>for (var prop in john) {</div>
          <div>. console.log(prop + ':' + john[prop]);</div>
          <div>}</div>
          <br />
          <div>var str = "aaabbbbbbbbbccccccc"</div>
          <div>var obj = {};</div>
          <div>for( var i = 0 ; i ＜ str.length ; i++ ){</div>
          <div>. var char = str.charAt(i);</div>
          <div>. if( obj[ char ] ){</div>
          <div>. . obj[ char ]++</div>
          <div>. } else {</div>
          <div>. . obj[ char ] = 1;</div>
          <div>. }</div>
          <div>}</div>
          <div>console.log( obj ); . . . 每個字符和次數都統計出來了</div>
          <br />
          <div>目標 弄一個對象 把值放進去 { a:3, b:10, c:15 }</div>
          <div>遍歷字串, 如果 obj 沒有則 obj[ char ] = 1</div>
          <div>如果 obj 有則 value值++</div>
          <br />
          <div>var max = 0;</div>
          <div>for( var key in obj ){</div>
          <div>. if( max ＜ obj[ key ] ){</div>
          <div>. . max = obj[ key ];</div>
          <div>. }</div>
          <div>}</div>
          <div>console.log( max );</div>
          <br />
          <div>目標 到物件的值找最大值 { a:3, b:10, c:15 } 最大值 15</div>
          <div>遍歷物件 for in</div>
          <div>如果 max變數 小於 obj[key]</div>
          <div>key 是物件中每一項 a b c</div>
          <div>obj[key] 是統計值 3 10 15</div>
          <div>如果 max變數 小於 obj[key] 就賦值 就找到最大值 15</div>
          <br />
          <div>for( var key in obj ){</div>
          <div>. if( obj[key] == max ){</div>
          <div>. . console.log( "最多字符是" + key );</div>
          <div>. . console.log( "出現次數" + max );</div>
          <div>. }</div>
          <div>}</div>
          <br />
          <div>目標 找到最大值 15 對應的 key</div>
          <div>如果 obj[key] == max 就找到了</div>
          <br />
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>function demo(){</div>
          <div>. var n = 2;</div>
          <div>. if( true ){</div>
          <div>. . var n = 1;</div>
          <div>. }</div>
          <div>. console.log( n );</div>
          <div>}</div>
          <div>demo(); . . . // 打印 1</div>
          <br />
          <br />
          <br />
          <br />
          <div class="cor36">輸出多少?</div>
          <div>function demo(){</div>
          <div>. let n = 2;</div>
          <div>. if( true ){</div>
          <div>. . let n = 1;</div>
          <div>. }</div>
          <div>. console.log( n );</div>
          <div>}</div>
          <div>demo(); . . . // 打印 2</div>
          <br />
          <br />
          <br />
          <br />
          <div class="cor36">合併</div>
          <div>const a = { a:1, b:4 }</div>
          <div>const b = { b:2, c:3 }</div>
          <div>let obj1 = Object.assign( a, b );</div>
          <div>console.log( obj1 ); . . . // { a:1, b:2, c:3 }</div>
          <br />
          <br />
          <br />
          <br />
          <div class="cor36">合併</div>
          <div>const a = { a:1, b:4 }</div>
          <div>const b = { b:2, c:3 }</div>
          <div>let obj2 = {...a, ...b}</div>
          <div>console.log( obj1 ); . . . // { a:1, b:2, c:3 }</div>

          <br />
          <br />
        </div>
      </div>
    </div>
  </section>
  <div>
    <transition name="fade" tag="div" v-show="toTopRef">
      <div @click="toTopFunction" class="toTop">
        <div class="toTopButton">
          <div class="disCen">___</div>
          <div class="disCen">▲</div>
        </div>
      </div>
    </transition>
    <transition name="fade" tag="div" v-show="toTopRef">
      <div @click="toBotFunction" class="toBot">
        <div class="toBotButton">
          <div class="disCen">▼</div>
          <div class="disCen">￣</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.sectionHolderNav {
  width: 100vw;
  max-width: 100%;
  height: 70px;
  background-color: #171717;
}

section {
  width: 100vw;
  max-width: 100%;
  background-color: #171717;
  color: #000;
  overflow: hidden;
}

.leftNav {
  font-size: 20px;
  position: fixed;
  width: 19vw;
  height: 100%;
  background-color: #040404;
  /* color: #36c1cb; */
  color: #a1b6cb;
  display: flex;
  justify-content: center;
  overflow: auto;
}

.leftNavContainer {
  padding: 25px 5px 0 5px;
}

.leftNavText:hover {
  color: #36c1cb;
  background-color: #1c1c1c;
  cursor: pointer;
}

.Main {
  position: relative;
  /* background-color: #c4c4c4; */
  /* color: #36c1cb; */
  color: #a1b6cb;
  width: 80vw;
  left: 20vw;
  font-size: 30px;
}

.mainContainer {
  padding: 0 50px;
}

p {
  font-size: 30px;
}

.articleCardTitle {
  font-size: 1.75em;
  padding: 30px 5px 30px 5px;
}

.cor36 {
  color: #36c1cb;
  font-size: 1.25em;
}

a {
  display: inline-block;
  /* 沒互動顏色 */
  color: #c4c4c4;
  padding: 5px 0;
  margin: 0 1;
  border: 3px solid transparent;
}

a:hover {
  /* 滑進時顏色 */
  color: #3ddbe7;
}

/* top按鈕的css -------------------------------------------------------*/
.toTop {
  bottom: 170px;
  right: 50px;
  position: fixed;
  z-index: 200;
  background-color: #7f010190;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
}

.toTopButton {
  position: relative;
  font-size: 20px;
  bottom: 7px;
  padding-left: 0;
  color: #999;
  pointer-events: none;
}

.toTop:hover {
  background-color: #6f020250;
}

.toBot {
  bottom: 100px;
  right: 50px;
  position: fixed;
  z-index: 200;
  background-color: #7f010190;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  cursor: pointer;
}
.toBot:hover {
  background-color: #6f020250;
}

.toBotButton {
  position: relative;
  font-size: 20px;
  bottom: 0;
  padding-left: 0;
  color: #999;
  pointer-events: none;
}
</style>
