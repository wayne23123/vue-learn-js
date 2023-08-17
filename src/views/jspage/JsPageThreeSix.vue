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
          <div @click="locate('')" class="leftNavText">函數導向&物件導向</div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
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
          <div class="articleCardTitle cor36 fz34">6.1 編程思想</div>
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
          <div class="articleCardTitle cor36 fz34">6.2 構造函數</div>

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
          <div class="articleCardTitle cor36 fz34">6.3 constructor</div>
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
          <div class="articleCardTitle cor36 fz34">6.4 對象原型</div>

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
          <p class="fz28">[[prototype]] 和 __proto__ 意義相同</p>
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
            <span class="cor17"> . . . . . . . . . . . . . . . . </span> ↗
          </div>
          <br />
          <div class="fz28">
            constructor ↑
            <span class="cor17"> . . . . . . . . . . . </span> ↗ __proto__
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
  right: 80px;
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
