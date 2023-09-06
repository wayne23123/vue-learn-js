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
          <div @click="locate('threeprototype001')" class="leftNavText">
            物件導向
          </div>
          <div @click="locate('threeprototype002')" class="leftNavText">
            構造函數
          </div>
          <div @click="locate('threeprototype003')" class="leftNavText">
            constructor
          </div>
          <div @click="locate('threeprototype004')" class="leftNavText">
            對象原型
          </div>
          <div @click="locate('threeprototype005')" class="leftNavText">
            原型繼承
          </div>
          <div @click="locate('threeprototype006')" class="leftNavText">
            原型鏈
          </div>
          <div @click="locate('threeprototype007')" class="leftNavText">
            class
          </div>
          <div @click="locate('threeprototype008')" class="leftNavText">
            繼承總結
          </div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
        <div class="mainLayout">
          <!-- 這裡 -->
          <br />
          <br />
          <p class="fz28">總分總</p>
          <p class="fz28">1.要講哪個知識點</p>
          <p class="fz28">2.細講</p>
          <p class="fz28">3.總結</p>
          <br />
          <br />
          <div id="threeprototype001" class="articleCardTitle cor36 fz34">
            6.1 編程思想
          </div>
          <p class="fz28">
            <span class="cor36"> 面相過程 </span>
            <span class="cor17"> . . . </span>
            <span class="cor36"> 函數導向 </span>
            <span class="cor17"> . . . </span>
            <span class="cor36">functional programming </span>
          </p>
          <p class="fz28">
            分析解決問題所需要的步驟, 然後用函數把這些步驟一步一步實現,
            使用時再一個一個的依次調用
          </p>
          <br />
          <br />
          <br />
          <p class="fz28">
            <span class="cor36"> 面相對象 </span>
            <span class="cor17"> . . . </span>
            <span class="cor36"> 物件導向 OOP </span>
            <span class="cor17"> . . . </span>
            <span class="cor36">Object-oriented programming </span>
          </p>

          <p class="fz28">每一個物件都是功能中心, 有明確分工</p>

          <p class="fz28"></p>
          <br />
          <br />
          <p class="fz28 cor36"># 3 特性</p>
          <p class="fz28">
            封裝 <span class="cor17"> . . . . . . </span> 我一點開關 就 掃地
          </p>
          <p class="fz28"></p>
          <br />
          <p class="fz28">
            繼承 <span class="cor17"> . . . . . . </span> 掃地機 繼承 拖拉機
            接口
          </p>
          <p class="fz28"></p>
          <br />
          <p class="fz28">
            多態 <span class="cor17"> . . . . . . </span> 多功能 平時掃地
            天熱變風扇
          </p>
          <p class="fz28"></p>
          <br />
          <p class="fz28">
            重用 <span class="cor17"> . . . . . . </span> 沒用額外動力,
            重複用發動機
          </p>
          <p class="fz28">
            低耦合 <span class="cor17"> . . . . . . </span> 掃把壞了拿下來換新的
            不影響別的
          </p>
          <br />
          <br />
          <div class="dis spaAro">
            <div>
              <p class="fz28 cor36">函數導向編程</p>
              <p class="fz28 cor36"># 優</p>
              <p class="fz28">性能比 物件導向高 , 適合跟硬件聯繫很緊密的東西</p>
              <br />
              <p class="fz28 cor36"># 缺</p>
              <p class="fz28">沒有物件導向易維護 , 易復用 , 易擴展</p>
            </div>
            <div>
              <p class="fz28 cor36">物件導向編程</p>
              <p class="fz28 cor36"># 優</p>
              <p class="fz28">易維護 , 易復用 , 易擴展</p>

              <p class="fz28">
                有封裝 , 繼承 , 多態 , 可設計出 低耦合 的系統 ,
                系統更靈活、易維護
              </p>
              <br />
              <p class="fz28 cor36"># 缺</p>

              <p class="fz28">性能比 物件導向低</p>
            </div>
          </div>
          <br />
          <div id="threeprototype002" class="articleCardTitle cor36 fz34">
            6.2 構造函數
          </div>

          <div>
            <span class="cor36 fz28">封裝 </span>
            <span class="cor17"> . . . . . </span>
            <span class="fz28">JS 透過 構造函數 實現 封裝</span>
          </div>
          <br />
          <p class="fz28">構造函數很好用 , 但是 存在 浪費 內存 問題</p>
          <div class="bgcVS">
            <p>創建 構造函數</p>
            <br />

            <div class="disCen">
              <img style="width: 100%" src="../../assets/jsimg/object001.jpg" />
            </div>
            <br />
            <p class="fz28">如果我創建 200 個物件</p>
            <p class="fz28">堆 放了 200 個 function</p>
            <p class="fz28">浪費 內存</p>
          </div>

          <div class="articleCardTitle cor36 fz34">6. 原型</div>

          <p class="fz28">解決構造函數 浪費內存問題</p>
          <br />
          <p class="fz28">
            1. 構造函數 通過原型 分配的函數 是 所有對象 所共享的
          </p>
          <br />
          <p class="fz28">
            2. JS 規定 每個 構造函數 都有一個 prototype 屬性, 指向另一個對象,
            也稱為原型對象
          </p>
          <br />
          <p class="fz28">
            3. 這個對象 可以 掛載函數, 對象 實例化 不會 多次創建原型上函數,
            節約內存
          </p>
          <br />
          <p class="fz28">
            4. 可以把 不變的方法 直接定義在 prototype 對象上 , 這樣所有對象
            的實例 就可以共享這些方法
          </p>
          <br />
          <p class="fz28">5. 構造函數和原型對象中的 this 都指向 實例化的對象</p>
          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">Person</span> <span class="brackets">(</span>
              <span class="word">uname,number</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo VSL">
              <span class="comment">// this.name=uname</span>
            </div>
            <div class="pTwo VSL">
              <span class="then">this</span>

              <span class="word">.uname</span> <span class="then">=</span>
              <span class="word">uname</span>
            </div>
            <div class="pTwo VSL">
              <span class="comment">//物件的屬性 . . . 形參</span>
            </div>
            <div class="pTwo VSL">
              <span class="then">this</span> <span class="word">.number</span>
              <span class="then">=</span> <span class="word">number</span>
            </div>
            <div class="pTwo VSL">
              <span class="then">this.</span> <span class="word">sayHi</span>
              <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="pFou VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="src">"hi"</span> <span class="brackets">)</span>
            </div>
            <div class="pTwo VSL"><span class="brackets">}</span></div>

            <div class="brackets">}</div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">new </span> <span class="word">Person</span>
              <span class="brackets">(</span>
              <span class="src">"wayne",</span> <span class="number">123</span>
              <span class="brackets">))</span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">p</span>
              <span class="then">= new </span>
              <span class="word">Person</span> <span class="brackets">(</span>
              <span class="src">"wayne",</span> <span class="number">6</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">j</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="word">Person</span> <span class="brackets">(</span>
              <span class="src">"jack",</span> <span class="number">9</span>
              <span class="brackets">)</span>
            </div>
            <br />

            <span class="comment">//dir 打印對象形式</span>
            <div>
              <span class="word">console.</span>
              <span class="variable">dir</span> <span class="brackets">(</span>
              <span class="brackets">Person</span> <span class="then">.</span>
              <span class="word">prototype</span>
              <span class="brackets">) </span>
              <span class="comment">//寫法是屬性 返回是物件</span>
            </div>
            <br />
            <br />
            <div><span class="comment">公共屬性寫到 構造函數</span></div>
            <div>
              <span class="function">function </span>
              <span class="word">Person</span> <span class="brackets">(</span>
              <span class="word">uname,number</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo VSL">
              <span class="then">this</span>

              <span class="word">.uname</span> <span class="then">=</span>
              <span class="word">uname</span>
            </div>
            <div class="pTwo VSL">
              <span class="then">this</span> <span class="word">.number</span>
              <span class="then">=</span> <span class="word">number</span>
            </div>
            <div class="brackets">}</div>
            <br />
            <div><span class="comment">公共方法寫到 原型object</span></div>

            <div>
              <span class="brackets">Person</span>
              <span class="word">.prototype.sayHi</span>
              <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="src">"hi"</span> <span class="brackets">)</span>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">p</span>
              <span class="then">= new </span>
              <span class="word">Person</span> <span class="brackets">(</span>
              <span class="src">"wayne",</span> <span class="number">6</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">j</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="word">Person</span> <span class="brackets">(</span>
              <span class="src">"jack",</span> <span class="number">9</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="word">p.sayHi</span> <span class="brackets">()</span>
            </div>
            <br />
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p.sayHi</span> <span class="then">===</span>
              <span class="word">j.sayHi</span> <span class="brackets">)</span>
              <span class="comment">//true</span>
            </div>
          </div>
          <p class="fz28 cor36"># 原型是什麼?</p>

          <p class="fz28">一個對象, 也稱 原型對象</p>
          <br />
          <p class="fz28 cor36"># 原型做什麼?</p>
          <p class="fz28">共享方法</p>
          <br />
          <p class="fz28 cor36"># 構造函數 & 原型 this 指向誰?</p>
          <p class="fz28">實例化的對象</p>
          <div class="bgcVS">
            <p class="fz28">
              我只要一調用 函數 觸發 this 把這個 this 保存下來 賦值給 let
            </p>
            <div>
              <span class="function">let </span> <span class="word">that</span>
            </div>
            <div>
              <span class="function">function </span>
              <span class="word">Person</span> <span class="brackets">(</span>
              <span class="word">uname</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//Person看不出來this指向誰</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">that</span> <span class="then">=</span>
              <span class="then">this</span>
            </div>
            <div class="pTwo VSL">
              <span class="then">this</span>

              <span class="word">.uname</span> <span class="then">=</span>
              <span class="word">uname</span>
            </div>
            <div class="brackets">}</div>
            <br />
            <div><span class="comment">1.實例對象是 p</span></div>
            <div>
              <span class="function">const </span> <span class="word">p</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="word">Person</span> <span class="brackets">(</span>
              <span class="src">"wayne"</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">that</span> <span class="then">===</span>
              <span class="word">p</span> <span class="brackets">)</span>
            </div>
            <div class="comment">如果相等 那this 就是 p</div>
            <div class="comment">// true // 構造函數 this 指向 p</div>
            <br />
            <div>
              <span class="function">let </span> <span class="word">that2</span>
            </div>
            <span class="comment"
              >// 原型對象裡面的函數this指向的是實例對象 p</span
            >
            <div>
              <span class="brackets">Person</span>
              <span class="word">.prototype.sayHi</span>
              <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">that2</span> <span class="then">=</span>
              <span class="then">this</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="src">"hi"</span> <span class="brackets">)</span>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">p.</span> <span class="variable">sing</span>
              <span class="brackets">()</span>
            </div>
            <div class="comment">this 指向 函數的 調用者 就是 p</div>
            <br />
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">that</span> <span class="then">===</span>
              <span class="word">p</span> <span class="brackets">)</span>
              <span class="comment">// true</span>
            </div>
          </div>

          <p class="fz28">結論</p>
          <p class="fz28">構造函數 和 原型對象中的 this 都指向 實例化的對象</p>
          <br />
          <br />
          <p class="fz34 cor36"># 給數組擴展方法</p>
          <p class="fz28">reduce 是累計器</p>
          <p class="fz28">定義一個 arr.sum() 返回累加結果</p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="brackets">[</span> <span class="number">1,2,3</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="brackets">Array</span>
              <span class="word">.prototype.</span>
              <span class="variable">max</span> <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="pTwo">
              <span class="then">return </span>
              <span class="brackets">Math</span><span class="word">.</span>
              <span class="variable">max</span> <span class="brackets">(</span>
              <span class="word">...</span><span class="then">this</span>
              <span class="brackets">)</span>
            </div>
            <div class="pTwo">
              <span class="comment"
                >// 原型對象裡面的函數this指向的是實例對象 arr</span
              >
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arr.</span> <span class="word">max</span>
              <span class="brackets">())</span>
            </div>
            <br />
            <div>
              <span class="brackets">Array</span>
              <span class="word">.prototype.</span>
              <span class="variable">sum</span> <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="pTwo VSL">
              <span class="then">return </span> <span class="then">this</span>
              <span class="variable">.reduce</span>
              <span class="brackets">((</span>
              <span class="word">prev,item</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="word">prev</span> <span class="then">+</span>
              <span class="word">item,</span> <span class="number">0</span>
              <span class="brackets">)</span>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span>
              <span class="brackets">([</span> <span class="word">1,2,3</span>
              <span class="brackets">]</span>
              <span class="variable">.sum</span>
              <span class="brackets">())</span>
            </div>
          </div>
          <div id="threeprototype003" class="articleCardTitle cor36 fz34">
            6.3 constructor
          </div>
          <p class="fz28">在哪裡?</p>
          <p class="fz28">每個 原型對象 裡面都有 constructor 屬性</p>
          <br />
          <p class="fz28">做什麼?</p>

          <p class="fz28">該屬性 指向 該原型對象的 構造函數</p>

          <br />
          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">Person</span> <span class="brackets">(){</span>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="function">const </span> <span class="word">p</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="word">Person</span> <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="brackets">Person</span>
              <span class="word">.prototype</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="comment">// 得到構造函數裡面的原型對象</span>
            </div>
            <div>
              <span class="comment">// F12 展開這個對象看到 constructor</span>
            </div>
            <div>
              <span class="comment"
                >// 只要是原型對象 裡面 默認都有 constructor 屬性</span
              >
            </div>
            <div>
              <span class="comment">// 做什麼?</span>
            </div>
            <div>
              <span class="comment">// 發現 指向 Person</span>
            </div>
            <div>
              <span class="comment">// 指向 構造函數</span>
            </div>
            <br />
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">Person.prototype.constructor</span>
              <span class="then">===</span> <span class="word">Person</span>
              <span class="brackets">)</span>
              <span class="comment">//true</span>
            </div>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">Person</span> <span class="brackets">(){</span>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="comment">// Person.prototype.say = function(){</span>
            </div>
            <div class="pTwo">
              <span class="comment">// console.log("hi")</span>
            </div>
            <div><span class="comment">}</span></div>
            <div>
              <span class="comment"
                >// Person.prototype.walk = function(){</span
              >
            </div>
            <div class="pTwo">
              <span class="comment">// console.log("walk")</span>
            </div>
            <div><span class="comment">}</span></div>
            <br />
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="brackets">Person</span>
              <span class="word">.prototype</span>
              <span class="brackets">) </span>
              <span class="comment">// 有 constructor</span>
            </div>

            <div>
              <span class="brackets">Person</span>
              <span class="word">.prototype</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <div>
                <span class="word">sing:</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="src">"hi"</span>
                <span class="brackets">)</span>
              </div>
              <div><span class="brackets">},</span></div>
              <div>
                <span class="word">walk:</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <div></div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span>
                <span class="word">"walk"</span> <span class="brackets">)</span>
              </div>
              <div><span class="brackets">},</span></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="brackets">Person</span>
              <span class="word">.prototype</span>
              <span class="brackets">) </span>
              <span class="comment">// constructor 不見了</span>
            </div>
            <br />
            <p>我一定要 constructor 指向父親</p>
            <br />
            <div>
              <span class="brackets">Person</span>
              <span class="word">.prototype</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <div>
                <span class="comment">// 重新指回創造這個原型對象的 </span>
              </div>
              <div>
                <span class="word">constructor:</span>
                <span class="brackets">Person,</span>
              </div>
              <div>
                <span class="word">sing:</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="src">"hi"</span>
                <span class="brackets">)</span>
              </div>
              <div><span class="brackets">},</span></div>
              <div>
                <span class="word">walk:</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <div></div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span>
                <span class="word">"walk"</span> <span class="brackets">)</span>
              </div>
              <div><span class="brackets">},</span></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
          </div>
          <p class="fz28">思考</p>
          <br />
          <div class="fz28">
            <span class="bor pad204">構造函數</span> →
            <span class="bor pad204"> 原型 prototype 共享屬性方法 </span>
          </div>
          <br />
          <div class="fz28"><span class="cor17"> . . . </span> ↓</div>
          <br />
          <div class="fz28">
            <span class="bor pad204">實例對象 new Person()</span>
          </div>
          <br />
          <br />
          <br />
          <p class="fz28">為什麼 實例對象 可以訪問 原型的 方法?</p>
          <div id="threeprototype004" class="articleCardTitle cor36 fz34">
            6.4 對象原型
          </div>

          <p class="fz28">
            對象都會有一個屬性 __proto__ 指向 構造函數的 prototype 原型對象
          </p>
          <br />
          <br />
          <br />
          <div class="fz28">
            <span class="bor pad204">構造函數</span> →
            <span class="bor pad204"> 原型 prototype 共享屬性方法 </span>
          </div>
          <br />
          <div class="fz28">
            <span class="cor17"> . . . </span> ↓
            <span class="cor17"> . . . . . . . . . . . . . . . . </span> ↗
            __proto__
          </div>
          <br />
          <div class="fz28">
            <span class="bor pad204">實例對象 new Person()</span>
          </div>
          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">Person</span>
              <span class="brackets">(){}</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">p</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="word">Person</span> <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p</span> <span class="brackets">)</span>
            </div>
            <div class="comment">// person 物件裡面展開有一個 __proto__</div>
            <br />
            <span class="comment"
              >//對象原型__proto__指向 該構造函數的原型對象</span
            >
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p.__proto__</span>
              <span class="then">===</span>
              <span class="word">p.prototype</span>
              <span class="brackets">) </span>
              <span class="comment">// true</span>
            </div>
            <br />
            <div>
              <span class="comment"
                >// 對象原型裡面有 constructor 指向 構造函數 Person</span
              >
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p.__proto__</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p.__proto__.constructor</span>
              <span class="then">===</span> <span class="word">Person</span>
              <span class="brackets">) </span>
              <span class="comment">// true</span>
            </div>
          </div>

          <p class="fz28">注意</p>
          <p class="fz28">__proto__ 是 js 非標準屬性</p>
          <p class="fz28">[[Prototype]] 和 __proto__ 意義相同</p>
          <p class="fz28">用來表明當前實例對象指向哪個原型對象 prototype</p>
          <p class="fz28">
            __proto__ 對象原型裡面也有一個 constructor 屬性,
            指向創建該實例對象的構造函數
          </p>
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
          <p class="fz40">對象原型 指向 原型對象</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div class="fz28">
            <span class="bor pad204">. . . 構造函數</span> → ← constructor
            <span class="bor pad204"> 原型 prototype 共享屬性方法 </span>
          </div>
          <br />
          <div class="fz28">
            <span class="cor17"> . . . . . . . . . </span> ↓
            <!-- <span class="cor17"> . . . . . . . . . . . . . . . . </span> ↗ -->
          </div>
          <br />
          <div class="fz28">
            constructor ↑
            <span class="cor17"> . . . . . . . . . . . </span> ↗ __proto__ 也是
            [[Prototype]]
          </div>
          <br />
          <div class="fz28">
            <span class="bor pad204">實例對象 new Person()</span>
          </div>
          <br />
          <br />
          <br />
          <p class="fz28 cor36"># 結論</p>
          <p class="fz28 cor36">prototype 是什麼?</p>
          <p class="fz28">原型</p>
          <br />
          <p class="fz28 cor36">哪裡來?</p>
          <p class="fz28">構造函數 都自動有</p>
          <br />
          <p class="fz28 cor36">constructor 在哪裡?</p>
          <p class="fz28">prototype 原型 和 對象原型 __proto__ 都有</p>
          <br />

          <p class="fz28 cor36">做什麼?</p>

          <p class="fz28">指向 創建 實例對象的 構造函數</p>
          <br />
          <p class="fz28">指向 創建 原型的 構造函數</p>
          <br />
          <br />
          <p class="fz28 cor36">__proto__在哪裡?</p>
          <p class="fz28">實例對象裡面</p>
          <br />
          <p class="fz28 cor36">指向誰?</p>
          <p class="fz28">對象原型 指向 原型對象</p>
          <br />
          <div id="threeprototype005" class="articleCardTitle cor36 fz34">
            6.5 原型繼承
          </div>
          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">Man</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this</span> <span class="word">.eyes</span>
              <span class="then">=</span> <span class="number">2</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="function">function </span>
              <span class="word">Woman</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this</span> <span class="word">.eyes</span>
              <span class="then">=</span> <span class="number">2</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="comment"
                >// 想要繼承 Person , 公共的部分放到原型上 , 就是原型繼承</span
              >
            </div>
            <br />
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">Person</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">eyes:</span> <span class="number">2,</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="function">function </span>
              <span class="word">Man</span> <span class="brackets">(){}</span>
            </div>
            <br />
            <div class="comment">// Man 通過原型來繼承 Person</div>
            <div>
              <span class="word">Man.prototype</span>
              <span class="then">=</span> <span class="brackets">Person</span>
            </div>
            <br />
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">Man.prototype</span>
              <span class="brackets">)</span>
              <span class="comment">//看有沒有constructor</span>
            </div>
            <div class="comment">// 沒有 , 因為 Person 是 物件 形式</div>
            <div class="comment">// 直接進行覆蓋 , 覆蓋完後指不回來了</div>
            <br />
            <br />
            <div class="comment">// Man 通過原型來繼承 Person</div>
            <div>
              <span class="word">Man.prototype</span>
              <span class="then">=</span> <span class="brackets">Person</span>
            </div>
            <br />
            <div>
              <span class="number">!指回原來的構造函數! . . . constructor</span>
            </div>
            <br />
            <div>
              <span class="word">Man.prototype.</span>
              <span class="function">constructor</span>
              <span class="then">=</span> <span class="word">Man</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">Man.prototype</span>
              <span class="brackets">)</span>
              <span class="comment">//有constructor</span>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">Woman</span> <span class="brackets">(){}</span>
            </div>
            <div>
              <span class="word">Woman.prototype</span>
              <span class="then">=</span> <span class="brackets">Person</span>
            </div>
            <div>
              <span class="word">Woman.prototype.</span>
              <span class="function">constructor</span>
              <span class="then">=</span> <span class="word">Woman</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">p</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="word">Woman</span> <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p</span> <span class="brackets">)</span>
              <span class="comment">//看到constructor指回Person</span>
            </div>

            <br />
            <br />
            <br />
            <br />
            <p># 我除了繼承 父 的屬性 還想添加方法</p>
            <br />
            <div>
              <span class="word">Woman.prototype.</span>
              <span class="variable">baby</span> <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">"baby"</span> <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">red</span> <span class="then">=</span>
              <span class="then">new </span>
              <span class="brackets">Woman</span>
              <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">red</span> <span class="brackets">)</span>
              <span class="comment">//看[[Prototype]]看到有baby方法</span>
            </div>
            <br />
            <div>
              <span class="comment">// 我想 Man 沒有添加 baby 方法</span>
            </div>

            <div>
              <span class="function">const </span>
              <span class="word">wayne</span> <span class="then">=</span>
              <span class="then">new </span> <span class="brackets">Man</span>
              <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">wayne</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="comment">// 看 [[Prototype]] 也有 baby 方法</span>
            </div>
            <br />
            <p># 為什麼?</p>
            <p>因為他們 2 個的 原型 都是 繼承 Person</p>
            <br />
            <br />
            <div class="dis">
              <div>
                <br />
                <div>
                  <span class="word">Woman.prototype</span>
                  <span class="then">=</span>
                  <span class="brackets">Person</span>
                </div>
                <br />
                <div>
                  <span class="word">Man.prototype</span>
                  <span class="then">=</span>
                  <span class="brackets">Person</span>
                </div>
              </div>
              <div class="padL20">
                棧
                <div>→0x1111→</div>
                <br />
                <div>→0x2222↗</div>
              </div>
              <div class="padL20">
                堆
                <div>
                  <span class="function">const </span>
                  <span class="word">Person</span> <span class="then">=</span>
                  <span class="brackets">{</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">eyes:</span> <span class="number">2,</span>
                  <div></div>
                </div>
                <div class="padTwo VSL">
                  <span class="word">baby:</span>
                  <span class="function">function </span>
                  <span class="brackets">(){}</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
                <br />
                <br />
                <br />
              </div>
            </div>
            <p># 我要 Woman & Man 不互相影響 . . . > 給他們不同的對象</p>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">Person1</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">eyes:</span> <span class="number">2,</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="function">const </span>
              <span class="word">Person2</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">eyes:</span> <span class="number">2,</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="word">Woman.prototype</span>
              <span class="then">=</span>
              <span class="brackets">Person1</span>
            </div>

            <div>
              <span class="word">Man.prototype</span>
              <span class="then">=</span>
              <span class="brackets">Person2</span>
            </div>
            <br />
            <br />
            <p># 我要 內容一樣 但是 物件 結構不一樣 . . . > 構造函數</p>
            <p># 構造函數 new 出來的對象 結構一樣 , 但是 對象 不一樣</p>
            <br />
            <div class="comment">//const Person1 = { eyes:2 }</div>
            <div class="comment">//const Person2 = { eyes:2 }</div>
            <div>
              <span class="function">function </span>
              <span class="brackets">Person</span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this.</span> <span class="word">eyes</span>
              <span class="then">=</span> <span class="number">2</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">Woman.prototype</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="brackets">Person</span>
              <span class="brackets">()</span>
            </div>
            <div class="comment">// new Person 新增一個物件</div>
            <div class="comment">// 這個物件就是 我們寫的 結構 eyes:2</div>
            <div>
              <span class="word">Man.prototype</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="brackets">Person</span>
              <span class="brackets">()</span>
            </div>
            <div class="comment">// new Person 又 新增一個物件</div>
            <div class="comment">
              // 這個物件 結構一樣 內容一樣 這 2 個 物件 不一樣
            </div>
            <br />
            <div>
              <span class="word">Woman.prototype.</span>
              <span class="variable">baby</span> <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="src">"baby"</span> <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <p># 以上 原型繼承</p>
            <p>
              需求: Man Woman 不要用同一個物件, 但不同物件裡面包含相同屬性和方法
            </p>
            <p>用: 構造函數</p>
            <p>new 每次都會創建一個新物件</p>
            <br />
            <br />
            <br />
            <br />
            <p>1. 換成 構造函數</p>
            <p>2. prototype 不再是物件名了, 用 new Person 的方法</p>
            <br />
            <br />
            <br />
            <br />

            <p>父構造函數 (父類) . . . 子構造函數 (子類)</p>
            <p>function Person(){} 父構造函數</p>
            <p>Woman 子構造函數</p>
            <br />
            <p>子類的原型 = new 父類</p>
            <div>
              <span class="word">Woman.prototype</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="brackets">Person</span>
              <span class="brackets">()</span>
            </div>
            <br />
            <br />
            <p>JS 繼承很多方法</p>
            <p>Java 用 class 類</p>
            <p>後面 JS 引入 class</p>
          </div>
          <div id="threeprototype006" class="articleCardTitle cor36 fz34">
            6.6 原型鏈
          </div>

          <p class="fz28">作用域鏈 一層一層 查找 變量在哪個作用域</p>
          <p class="fz28">原型鏈 查找 原型</p>

          <div class="bgcVS">
            <div class="fz28">
              <span class="cor29">. . . </span>
              <span class="bor pad204"> 構造函數</span> → ← constructor
              <span class="bor pad204"> 原型 prototype 共享屬性方法 </span>
            </div>

            <div class="fz28">
              <span class="cor29"> . . . . . . . . . </span> ↓
              <!-- <span class="cor29"> . . . . . . . . . . . . . . . . </span> ↗ -->
            </div>

            <div class="fz28">
              constructor ↑
              <span class="cor29"> . . . . . . . . . . . </span> ↗ __proto__
              也是 [[Prototype]]
            </div>

            <div class="fz28 pad20 disInl bor">
              <span class="">實例對象 new Person()</span>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="fz28">
              <span class="cor29">. . . </span>
              <span class="bor pad204"> Person</span> → ← constructor
              <span class="bor pad204"> Person.prototype </span>
            </div>

            <div class="fz28">
              <span class="cor29"> . . . . . . . . . </span> ↓
              <!-- <span class="cor29"> . . . . . . . . . . . . . . . . </span> ↗ -->
            </div>

            <div class="fz28">
              constructor ↑
              <span class="cor29"> . . . . . . . . . . . </span> ↗ __proto__
            </div>

            <div class="fz28">
              <div class="disInl bor pad20">
                <span>實例對象 new Person()</span>
                <br />
                <span>p</span>
                <br />
                <span>p.__proto__</span>
              </div>
            </div>
            <br />

            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p.__proto__</span>
              <span class="then">===</span>
              <span class="word">Person.prototype</span>
              <span class="brackets">)</span>
              <span class="comment">//true</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">Person.prototype</span>
              <span class="brackets">) </span>
              <span class="comment">// 發現裡面也有[[Prototype]]</span>
            </div>
            <div>
              <span class="comment"
                >//原型對象也是對象, 只要是對象 都有 __proto__</span
              >
            </div>
            <div><span class="comment">// 他指向誰?</span></div>
            <div><span class="comment">// 指向 object</span></div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">Person.prototype.__proto__</span>
              <span class="brackets">)</span>
            </div>
            <div><span class="comment">// 這個 __proto__ 指向誰?</span></div>
            <div><span class="comment">// 對象原型 指向 原型對象</span></div>
            <br />
            <div>
              <span class="comment">// 而 Person.prototype 屬於原型對象</span>
            </div>
            <div>
              <span class="comment">// 原型對象裡面有一個對象原型</span>
            </div>
            <div>
              <span class="comment">// 這個 對象原型 指向 原型對象</span>
            </div>
            <br />
            <div><span class="comment">// 那他 指向 誰的 原型對象?</span></div>
            <br />
            <br />
            <p>構造函數 Object</p>
            <div>
              <span class="function">function </span>
              <span class="brackets">Object</span>
              <span class="brackets">(){}</span>
            </div>
            <p>構造函數 就有 原型對象</p>
            <br />
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">object</span> <span class="brackets">)</span>
              <span class="comment">//是Object(){[native code]}</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">object.prototype</span>
              <span class="brackets">)</span>
              <span class="comment">//</span>
            </div>
            <br />
            <p>原型鏈</p>
            <div class="fz28">
              <span class="cor29">
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . .
              </span>
              <div class="disInl bor pad20">
                <span>null</span>
              </div>
            </div>

            <div class="fz28">
              <span class="cor29">
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . .</span
              >
              ↗ __proto__
            </div>
            <br />

            <div class="fz28">
              <span class="cor29">. . . . . . . . . . . </span>
              <span class="bor pad204"> Object</span> → ← Object.constructor
              <div class="disInl bor pad20">
                <span>Object.prototype</span>
                <br />
                <span>Object.prototype.__proto__</span>
              </div>
            </div>
            <br />
            <div class="fz28">
              <span class="cor29">
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                . . . .</span
              >
              ↗ __proto__
            </div>
            <br />
            <div class="fz28">
              <span class="cor29">. . . </span>
              <span class="bor pad204"> Person</span> → ← constructor
              <div class="disInl bor pad20">
                <span> Person.prototype </span>
                <br />
                <span>Person.prototype.__proto__</span>
              </div>
            </div>

            <div class="fz28">
              <span class="cor29"> . . . . . . . . . </span> ↓
              <!-- <span class="cor29"> . . . . . . . . . . . . . . . . </span> ↗ -->
            </div>

            <div class="fz28">
              constructor ↑
              <span class="cor29"> . . . . . . . . . . . </span> ↗ __proto__
            </div>

            <div class="fz28">
              <div class="disInl bor pad20">
                <span>實例對象 new Person()</span>
                <br />
                <span>p</span>
                <br />
                <span>p.__proto__</span>
              </div>
            </div>
            <br />
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">Person.prototype.__proto__</span>
              <span class="then">===</span>
              <span class="brackets">Object</span>
              <span class="word">.prototype</span>
              <span class="brackets">) </span>
              <span class="comment">// true</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="brackets">Object</span>
              <span class="word">.prototype.__proto__</span>
              <span class="brackets">) </span>
              <span class="comment">// null</span>
            </div>
          </div>

          <p class="fz28 cor36">原型鏈</p>
          <p class="fz28">
            基於 原型對象 的 繼承 使得不同 構造函數的 原型對象 關聯在一起,
            並且這種關聯的關係是一種 鏈狀的結構
          </p>
          <p class="fz28">1. 只要是 物件 就有 __proto__</p>
          <p class="fz28">
            2. 只要是 原型對象 裡面就有 constructor 指向 創造我的 構造函數
          </p>
          <br />
          <br />
          <p class="fz28 cor36">原型鏈 查找規則</p>
          <p class="fz28">
            1. 當訪問一個物件的屬性&方法 , 先找 物件自身 有沒有 該屬性
          </p>
          <p class="fz28">
            2. 沒有 . . > 找 它的 原型 ( __proto__ 指向的 prototype 原型對象 )
          </p>

          <p class="fz28">
            3. 沒有 . . > 找 原型對象的原型 ( Object 的原型對象 )
          </p>
          <p class="fz28">4. 依此類推 一直找到 Object 為止 ( null )</p>

          <br />
          <br />
          <p class="fz28">
            : 首先任何物件都會有屬於它的隱藏屬性下滑線proto屬性,
            這個隱藏屬性就會指向它的構造函數的prototype,
            這時我們就可以說這個物件的原型就是它的構造函數的prototype,
            這就是原型, 然後原型鏈就是比如A的原型是B, B的原型是C,
            這樣一條像鏈式的就稱為原型鏈
          </p>
          <br />
          <p class="fz28">
            :定義一個物件A,它的原型的地址對應著object.prototype,object.prototype它的原型又會到了null
            這樣一條像鏈式的就稱為原型鏈
          </p>
          <br />
          <p class="fz28 cor36">instanceof</p>
          <p class="fz28">
            可用 instanceof 檢測構造函數的 prototype
            屬性是否出現在某個實例對象的原型鏈上
          </p>

          <p class="fz28">他 屬不屬於 另外一個 構造函數</p>
          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">Person</span>
              <span class="brackets">(){}</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">p</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="word">Person</span> <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p</span> <span class="word">instanceof </span>
              <span class="brackets">Person</span>
              <span class="brackets">) </span>
              <span class="comment">// true</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p</span> <span class="word">instanceof </span>
              <span class="brackets">Object</span>
              <span class="brackets">) </span>
              <span class="comment">// true</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p </span> <span class="word">instanceof </span>
              <span class="brackets">Array</span>
              <span class="brackets">) </span>
              <span class="comment">// false</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="brackets">Array </span>
              <span class="word">instanceof </span>
              <span class="brackets">Object</span>
              <span class="brackets">)</span>
              <span class="comment">//true</span>
            </div>
            <br />
            <p>萬物皆物件</p>
          </div>
          <div id="threeprototype007" class="articleCardTitle cor36 fz34">
            6.7 class
          </div>

          <div class="bgcVS">
            <p>過去, 函數有兩種調用方法</p>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">A</span> <span class="brackets">(){}</span>
            </div>
            <div>
              <span class="word">A</span> <span class="brackets">()</span>
              <span class="comment">//直接調用</span>
            </div>
            <div>
              <span class="then">new </span> <span class="word">A</span>
              <span class="brackets">()</span>
              <span class="comment">//做為構造函數調用</span>
            </div>
            <br />
            <p>這種做法無法從定義上明確函數用途 , ES6 構造函數</p>
            <br />
            <div><span class="comment">//舊的寫法</span></div>
            <div>
              <span class="function">function </span>
              <span class="word">User</span> <span class="brackets">(</span>
              <span class="word">firstName,lastName</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this</span>
              <span class="word">.firstName</span> <span class="then">=</span>
              <span class="word">firstName;</span>

              <div>
                <span class="then">this</span>
                <span class="word">.lastName</span> <span class="then">=</span>
                <span class="word">lastName;</span>
              </div>
              <div>
                <span class="then">this</span>
                <span class="word">.fullName</span> <span class="then">=</span>
                <span class="src">`${</span>
                <span class="word">firstName</span>
                <span class="src">} ${</span>
                <span class="word">lastName</span> <span class="src">}`</span>
              </div>

              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div><span class="comment">//靜態方法</span></div>
            <div>
              <span class="word">User.isUser</span> <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(</span> <span class="word">u</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">return !! </span> <span class="word">u </span>
              <span class="then">&& !! </span>
              <span class="word">u.fullName</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div><span class="comment">//調用靜態方法</span></div>
            <div>
              <span class="word">User.isUser</span>
              <span class="brackets">(</span> <span class="word">xxx</span>
              <span class="brackets">)</span>
            </div>
            <div><span class="comment">//原型方法 (也叫 實例方法)</span></div>
            <div>
              <span class="word">User.prototype.sayHi</span>
              <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="src">`Hi, </span>
              <span class="then">${</span> <span class="then">this</span>
              <span class="word">.fullName</span> <span class="src">}`</span>
              <span class="word"></span> <span class="brackets">)</span>
              <div></div>
            </div>

            <div><span class="brackets">}</span></div>
            <div><span class="comment">//調用原型方法 (實例方法)</span></div>
            <div>
              <span class="function">const </span> <span class="word">u</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="word">User</span> <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">u.sayHi</span> <span class="brackets">()</span>
            </div>

            <br />
            <br />
            <p>es6 之後建議寫法 class 效果一樣</p>
            <br />
            <div>
              <span class="function">class </span>
              <span class="word">User</span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <div>
                <span class="comment">//constructor表示他的構造器</span>
              </div>

              <span class="function">constructor</span>
              <span class="brackets">(</span>
              <span class="word">firstName,lastName</span>
              <span class="brackets">){</span>
              <div></div>
              <div class="padTwo VSL">
                <span class="then">this</span>
                <span class="word">.firstName</span>
                <span class="then">=</span> <span class="word">firstName;</span>
                <div>
                  <span class="then">this</span>
                  <span class="word">.lastName</span>
                  <span class="then">=</span>
                  <span class="word">lastName;</span>
                </div>
                <div>
                  <span class="then">this</span>
                  <span class="word">.fullName</span>
                  <span class="then">=</span> <span class="src">`${ </span>
                  <span class="word">firstName </span>
                  <span class="src">} ${</span>
                  <span class="word">lastName </span>
                  <span class="src">}`;</span>
                </div>

                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <div>
                <span class="comment">//通過關鍵字static表示靜態方法</span>
              </div>
              <div>
                <span class="word">static</span>
                <span class="word">isUser</span>
                <span class="brackets">(</span> <span class="word">u</span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">return !!</span>
                <span class="word">u </span> <span class="then">&& !!</span>
                <span class="word">u.fullName</span>
                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <div>
                <span class="word">sayHi</span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="src">`Hi, </span>
                <span class="then">${</span> <span class="then">this</span>
                <span class="word">.fullName</span> <span class="src">}`</span>
                <span class="word"></span> <span class="brackets">)</span>
                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <br />
            <p>範例2 繼承</p>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">Animal</span> <span class="brackets">(</span>
              <span class="word">type,name</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this</span> <span class="word">.type</span>
              <span class="then">=</span> <span class="word">type;</span>

              <div>
                <span class="then">this</span> <span class="word">.name</span>
                <span class="then">=</span> <span class="word">name;</span>
              </div>

              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="word">Animal.prototype.intro</span>
              <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="src">`I am ${</span>
              <span class="then">this</span> <span class="word">.type</span>
              <span class="src">},name: ${</span>
              <span class="then">this</span> <span class="word">.name</span>
              <span class="src">)`</span> <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">Human</span> <span class="brackets">(</span>
              <span class="word">name</span> <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">Animal</span>
              <span class="variable">.call</span>
              <span class="brackets">(</span> <span class="then">this</span>
              <span class="then">,</span> <span class="word">"人",</span>
              <span class="word">name</span> <span class="brackets">);</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div><span class="comment">//設置繼承關係</span></div>
            <div>
              <span class="word">Human.prototype</span>
              <span class="then">=</span> <span class="brackets">Object</span>
              <span class="word">.create</span> <span class="brackets">(</span>
              <span class="word">Animal.prototype</span>
              <span class="brackets">);</span>
            </div>
            <br />
            <div>
              <span class="comment"
                >//新的方式 //繼承 子構造函數 & 父構造函數</span
              >
            </div>
            <div>
              <span class="function">class </span>
              <span class="word">Animal</span> <span class="brackets">{ </span
              ><span class="comment">//父類</span>
            </div>
            <div class="padTwo VSL">
              <span class="function">constructor</span>
              <span class="brackets">(</span>
              <span class="word">type,name</span>
              <span class="brackets">){</span>
              <div></div>
              <div class="padTwo VSL">
                <span class="then">this</span> <span class="word">.type</span>
                <span class="then">=</span> <span class="word">type;</span>
                <div>
                  <span class="then">this</span>
                  <span class="word">.name</span> <span class="then">=</span>
                  <span class="word">name;</span>
                </div>

                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <br />
              <div>
                <span class="word">intro</span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span>
                <span class="src">`I am ${</span>
                <span class="then">this</span> <span class="word">.type</span>
                <span class="src">},name: ${</span>
                <span class="then">this</span> <span class="word">.name</span>
                <span class="src">)`</span> <span class="brackets">)</span>
                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="function">class </span>
              <span class="word">Human </span>
              <span class="function">extends </span>
              <span class="word">Animal</span> <span class="brackets">{ </span
              ><span class="comment">//extends 子類 去繼承 父類</span>
            </div>
            <div class="padTwo VSL">
              <span class="function">constructor</span>
              <span class="brackets">(</span> <span class="word">name</span>
              <span class="brackets">){</span>
              <div></div>
              <div class="padTwo VSL">
                <span class="function">super </span>
                <span class="brackets">(</span> <span class="src">"人"</span>
                <span class="then">,</span> <span class="word">name</span>
                <span class="brackets">);</span>
                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">}</span></div>
          </div>

          <div id="threeprototype008" class="articleCardTitle cor36 fz34">
            6.8 繼承總結
          </div>

          <p class="fz28">原型鏈繼承</p>
          <p class="fz28">構造函數繼承</p>
          <p class="fz28">組合繼承</p>
          <p class="fz28">寄生組合繼承</p>
          <br />
          <br />
          <div class="bgcVS">
            <p class="cor36">原型鏈</p>
            <div>
              <span class="function">function </span>
              <span class="word">Person</span> <span class="brackets">(</span>
              <span class="word">name</span> <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this</span> <span class="word">.name</span>
              <span class="then">=</span> <span class="word">name</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="word">Person</span>
              <span class="variable">.prototype.sayHi</span>
              <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">"Hi,</span>
              <span class="word">my</span> <span class="word">name</span>
              <span class="word">is "</span> <span class="then">+</span>
              <span class="then">this</span> <span class="word">.name</span>
              <span class="brackets">)</span>
              <div></div>
            </div>

            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="function">let </span>
              <span class="word">person1</span>
              <span class="then">= new </span> <span class="word">Person</span>
              <span class="brackets">(</span> <span class="src">"wayne"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="function">let </span>
              <span class="word">person2</span>
              <span class="then">= new </span> <span class="word">Person</span>
              <span class="brackets">(</span> <span class="src">"jack"</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="word">person1</span>
              <span class="word">.sayHi</span> <span class="brackets">()</span>
              <span class="comment">//"Hi,my name is wayne"</span>
            </div>
            <div>
              <span class="word">person2</span>
              <span class="word">.sayHi</span> <span class="brackets">()</span>
              <span class="comment">//"Hi,my name is jack"</span>
            </div>
            <p>有一個構造函數 Person</p>
            <p>這 構造函數上 有 prototype 屬性</p>
            <p>屬性上 添加 sayHi 方法</p>
            <p>通過 Person() 這個構造函數 new 出來 兩個 實例</p>
            <p>在 構造函數 Person() 內部 沒定義 方法</p>
            <p>但 可以調用 person1 的 satHi 方法</p>
            <p>這就是原型鏈作用</p>
            <p>當我們 通過 new 創建 person1 物件時</p>
            <p>persno1 物件本身 沒 sayHi() 方法</p>
            <p>當調用他的 sayHi() 方法時</p>
            <p>他會先在 物件本身 找</p>
            <p>
              沒有的話 會在 person1 的 構造函數 Person() 的 prototype 上尋找
              sayHi() 方法
            </p>
            <p>小結:</p>
            <p>構造函數的 prototype 屬性的作用</p>
            <p>是當 實例對象 調用某個 方法or屬性時</p>
            <p>如果在 實例對象本身上 找不到</p>
            <p>就會去 他的 構造函數的 prototype 身上找</p>
            <p>總結:</p>
            <p>每個構造函數都有一個原型對象 prototype</p>
            <p>每個實例對象 包含一個 指向 原型對象的指針 __proto__</p>
            <p>每當代碼讀取 實例的 某屬性時</p>
            <p>會先在 實例上搜索這個屬性</p>
            <p>沒找到則 搜索 原型對象</p>
            <br />
            <br />

            <p class="cor36">原型鏈繼承</p>
            <div><span class="comment">//定義父類</span></div>
            <div>
              <span class="function">function </span>
              <span class="word">Parent</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this</span> <span class="word">.name</span>
              <span class="then">=</span> <span class="src">"parent"</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />

            <div><span class="comment">//在父類的原型上定義方法</span></div>
            <div>
              <span class="word">Parent</span>
              <span class="variable">.prototype.getName</span>
              <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">return </span> <span class="then">this</span>
              <span class="word">.name</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />

            <div><span class="comment">//定義子類</span></div>
            <div>
              <span class="function">function </span>
              <span class="word">Cild</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this</span> <span class="word">.name</span>
              <span class="then">=</span> <span class="src">"child"</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="comment">//關鍵->子類繼承父類,實現原型鏈繼承</span>
            </div>
            <div>
              <span class="word">Child</span>
              <span class="variable">.prototype</span>
              <span class="then">= new </span> <span class="word">Parent</span>
              <span class="brackets">()</span>
            </div>
            <br />
            <div><span class="comment">//實例化子類</span></div>
            <div>
              <span class="function">let </span>
              <span class="word">child</span> <span class="then">= new </span>
              <span class="word">Child</span> <span class="brackets">()</span>
            </div>
            <br />
            <div><span class="comment">//測試</span></div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">child1</span>
              <span class="variable">.getName</span>
              <span class="brackets">())</span>
            </div>

            <p>child1 是透過 Child 構造函數 實例化 對象</p>
            <p>當調用 child1 getName() 方法</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>

          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>

          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>

          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>

          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>

          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
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
  right: 0;
  top: 150px;
  /* width: 19vw; */
  /* height: 100%; */
  /* background-color: #040404; */
  background-color: rgba(0, 0, 0, 0.1);
  /* color: #36c1cb; */
  color: #a1b6cb4b;
  display: flex;
  justify-content: center;
  overflow: auto;
}

.leftNav:hover {
  background-color: rgba(0, 0, 0, 0.5);
  /* color: #36c1cb; */
  color: #a1b6cb;
  transition: all 0.2s ease;
}

.leftNavContainer {
  /* padding: 25px 5px 0 5px; */
  padding: 25px;
}

.leftNavText:hover {
  color: #36c1cb;
  background-color: #1c1c1c;
  cursor: pointer;
}

.Main {
  /* position: relative; */
  /* background-color: #c4c4c4; */
  /* color: #36c1cb; */
  color: #a1b6cb;
  /* width: 80vw; */
  /* left: 20vw; */
}

.mainContainer {
  padding: 0 50px;
}

.articleCardTitle {
  padding: 30px 5px 30px 5px;
}

.cor36 {
  color: #36c1cb;
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
</style>
