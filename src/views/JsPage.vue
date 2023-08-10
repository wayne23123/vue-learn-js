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
const PageOneRef = ref(true);
// const PageTwoRef = ref(false);
function PageOneRefF() {
  PageOneRef.value = true;
  // PageTwoRef.value = false;
}
function PageTwoRefF() {
  PageOneRef.value = false;
  // PageTwoRef.value = true;
}
</script>

<template>
  <section>
    <div class="sectionHolderNav"></div>
    <!-- 左邊導航條 -->
    <div class="leftNav">
      <div class="leftNavContainer">
        <div class="leftNavLayout">
          <div class="dis spa">
            <div class="leftNavText" @click="PageOneRefF">主文章</div>
            <div class="leftNavText" @click="PageTwoRefF">練習題</div>
          </div>
          <div v-if="PageOneRef">
            <div class="leftNavText">1</div>
            <div class="leftNavText">1</div>
            <div class="leftNavText">1</div>
            <div class="leftNavText"></div>
            <div class="leftNavText"></div>
            <div class="leftNavText"></div>
            <div class="leftNavText"></div>
          </div>
          <div v-else>
            <div class="leftNavText">1</div>
            <div class="leftNavText">1</div>
            <div class="leftNavText">1</div>
            <div class="leftNavText"></div>
            <div class="leftNavText"></div>
            <div class="leftNavText"></div>
            <div class="leftNavText"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer" v-if="PageOneRef">
        <div class="mainLayout">
          <div class="articleCardTitle cor36">[ JS ] ≫ 延遲加載JS方式?</div>
          <p>正常: 解析HTML > 遇到JS > 下載 > 執行 > 繼續解析HTML</p>
          <br />
          <p class="cor36">defer 属性</p>
          <p>解析HTML > 遇到JS > 下載 > 等到 HTML 解析完 > 再執行JS defer</p>
          <p>順次執行 > a.js > b.js</p>
          <br />
          <p class="cor36">async 属性</p>
          <p>
            解析HTML > 遇到async > 下載並同時解析 HTML > async加載完 HTML暫停
            直接執行JS > 再繼續解析 HTML
          </p>
          <p>和HTML解析同步</p>
          <p>不是順次執行 誰先加載完 誰執行</p>
          <br />
          <br />
          <div id="" class="articleCardTitle cor36">[ JS ] ≫ JS數據類型?</div>
          <p>幾本類型:</p>
          <p class="pFou">string number 布林 null undefined symbol bigInt</p>
          <br />
          <p>引用類型:</p>
          <p class="pFou">object</p>
          <br />
          <br />
          <p class="cor36"># 陣列,函數,日期屬於數據類型嗎?</p>
          <p>不屬於, 他們屬於構造函數</p>
          <br />
          <br />
          <p>函數屬於哪個? _ object</p>
          <p>陣列屬於哪個? _ object</p>
          <p>正則屬於哪個? _ object</p>
          <br />
          <br />
          <p class="cor36"># 為什麼不用大寫STRING?</p>
          <p>
            因為小寫string上面有大寫STRING的方法,
            大寫STRING是小寫string的封裝類型
            在小寫屬性.方法會自動封裝成大寫STRING, 然後用完之後自動銷毀
          </p>
          <br />
          <br />
          <p class="cor36"># 值和地址區別?</p>
          <p>string nember 布林都是值, 如果存一個object對象到一個變量是地址</p>
          <br />
          <br />
          <p class="cor36"># 哪我存一個函數到一個變量?</p>
          <p>存到地址</p>
          <br />
          <br />
          <p class="cor36">
            # 存一個變量怎麼知道他存在值還是地址,根據他麼什麼的能區分?
          </p>
          <p>用typeof看一下, typeof object & function 是地址</p>
          <br />
          <br />
          <div id="" class="articleCardTitle cor36">
            [ JS ] ≫ null undefined區別?
          </div>
          <p>1.undefined是聲明之後的默認值, 但null不是</p>
          <p>
            2.undefined一般給基本類型做未賦值,
            null一般給物件(物件,陣列,函數為空)做未賦值
          </p>
          <p>3.undefined不是關鍵字, null是關鍵字, 所以不能聲明一個變量叫null</p>
          <br />
          <br />
          <p class="cor36"># 如果我聲明一個變量它的值?</p>
          <p>undefined</p>
          <br />
          <br />
          <p class="cor36"># NaN類型?</p>
          <p>Number</p>
          <br />
          <p>因為 NaN 表示一個不能表示的數字</p>
          <br />
          <br />
          <p class="cor36"># typeof null?</p>
          <p>object</p>
          <br />
          <br />
          <div id="" class="articleCardTitle cor36">
            [ JS ] ≫ ==和===有什麼不同?
          </div>
          <p class="cor36">寬鬆相等 ==</p>
          <p>
            當等號兩邊的值為相同類型時比較值是否相同，類型不同時會發生類型的自動轉換，轉換為相同的類型後再做比較。
          </p>
          <br />
          <p class="cor36">嚴格相等 ===</p>
          <p>
            當等號兩邊的值為相同類型時，直接比較等號兩邊的值，相同返回
            true；若等號兩邊值的類型不同時直接返回 false。
          </p>
          <br />
          <br />
          <p>1. NaN 和其他任何類型比較永遠返回 false。</p>
          <br />
          <p>
            2. Boolean 和其他任何類型比較，Boolean 首先被轉換為 Number 類型。
          </p>
          <br />
          <p>3. String 和 Number 比較，先將 String 轉換為 Number 類型。</p>
          <br />
          <p>
            4. null == undefined 比較結果是 true，除此之外，null、undefined
            和其他任何結果的比較值都為 false。
          </p>
          <br />
          <p>
            5. 原始類型和引用類型做比較時，引用類型會依照 ToPrimitive
            規則轉換為原始類型。
          </p>
          <br />
          <p>6. 兩個都為引用類型，則比較它們是否指向同一個物件。</p>
          <br />
          <br />
          <p>1 == "1" . . . // true</p>
          <br />
          <p>1 === "1" . . . // false</p>
          <br />
          <p>NaN == NaN . . . // false</p>
          <br />
          <p>true == 1 . . . // true</p>
          <br />
          <p>true == '2' . . . // false, 先把 true 變 1，再參考規則 3</p>
          <br />
          <p>
            true == ['1'] . . . // true, 先把 true 變 1， ['1']拆箱成 '1',
            再參考規則 3
          </p>
          <br />
          <p>true == ['2'] . . . // false, 同上</p>
          <br />
          <p>
            undefined == false . . . // false ，首先 false 變 0，然後參考規則 4
          </p>
          <br />
          <p>null == false . . . // false，同上</p>
          <br />
          <p>null == undefined . . . //true</p>
          <br />
          <p>[1,2] == "1,2" . . . //true</p>
          <br />
          <p>123 == '123' . . . // true, '123' 先變 123</p>
          <br />
          <p>"" == 0 . . . // true, "" 先變 0</p>
          <br />
          <p>+0 == -0 . . . // true</p>
          <br />
          <p>null == undefined . . . // true</p>
          <br />
          <p>null == "" . . . // false</p>
          <br />
          <p>null == 0 . . . // false</p>
          <br />
          <p>null == false . . . // false</p>
          <br />
          <p>undefined == "" . . . // false</p>
          <br />
          <p>undefined == 0 . . . // false</p>
          <br />
          <p>undefined == false . . . // false</p>
          <br />
          <br />
          <div id="" class="articleCardTitle cor36">
            [ JS ] ≫ 0.1+0.2為什麼不等於0.3?
          </div>
          <p>
            浮點數的精度問題, 0.1在內存裡不一定等於0.1,
            0.2在內存裡不一定等於0.2, 結果約等於0.3
          </p>
          <br />
          <br />

          <p class="cor36">怎麼對比兩個小數大小是否相等?</p>
          <p>
            假如a是一個小數, b是一個小數, a去減b的絕對值, 如果減出來的值小於
            0.0001 就說明a和b幾乎相等
          </p>
          <br />
          <br />
          <div id="" class="articleCardTitle cor36">
            [ JS ] ≫ let var const區別?
          </div>
          <p>var是ES5 let是ES6</p>
          <p>var是函數作用域 let支持塊級作用域</p>
          <p>var有變量提升 let沒有變量提升</p>
          <p>var可以重複聲明, let不能重複</p>
          <p>let和const的區別在於let可以重新賦值, const不行, 其他幾乎一樣</p>
          <br />
          <br />

          <p class="cor36">聲明1個var變數之後還能在聲明同名var變數嗎?</p>
          <p>可以 不會報錯</p>
          <br />
          <br />
          <p class="cor36">聲明1個let變數之後還能在聲明同名let變數嗎?</p>
          <p>不行 會報錯</p>
          <br />
          <br />
          <p class="cor36">聲明1個const變數之後還能在聲明同名const變數嗎?</p>
          <p>不行 會報錯</p>
          <br />
          <br />
          <div id="" class="articleCardTitle cor36">[ JS ] ≫ 展開運算符</div>
          <p>
            展開運算符
            是把一個陣列展開成個別值，這個運算符後面必定接著一個陣列。
          </p>
          <p>最常見的是用來組合陣列，對應的陣列方法是concat</p>
          <br />
          <p>
            : 比如const a 等於, 然後一個陣列, 然後a點點點b, 這個b是一個舊陣列,
            然後它會把a和b合成形成新陣列, 然後返回給變量
          </p>
          <br />
          <div class="bgcVS">
            <br />
            <div>
              <span class="function">const </span> <span class="word">a</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="number">1, 2, 3</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">b</span>
              <span class="then">=</span> <span class="brackets">[</span>

              <span class="number">4, 5, 6 </span>
              <span class="brackets">]</span>
            </div>
            <br />
            <div class="comment">用於拼接陣列</div>
            <div>
              <span class="function">const </span> <span class="word">c</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="word">...a,...b</span>
              <span class="brackets">] </span>
              <span class="comment">// [1,2,3,4,5,6]</span>
            </div>
            <br />
            <div class="comment">也可以</div>
            <div>
              <span class="function">const </span> <span class="word">d</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="word">...a,</span>
              <span class="number">4, 5, 6</span>
              <span class="brackets">] </span>
              <span class="comment">// [1,2,3,4,5,6]</span>
            </div>
            <br />
            <div class="comment">也可以</div>
            <div>
              <span class="word">a.push</span> <span class="brackets">(</span>
              <span class="word">...b</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">a</span>
              <span class="brackets">)</span>
            </div>
            <br />

            <div class="comment">可以做陣列淺拷貝</div>
            <div>
              <span class="function">const </span> <span class="word">e</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="word">...a</span> <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">e.push</span> <span class="brackets">(</span>
              <span class="number">4</span> <span class="brackets">)</span>

              <span class="comment">// 不會影響 a</span>
            </div>
            <br />
            <div class="comment">
              淺拷貝是指複製值時，原本的變數和新的變數會指向同一個址 (reference)
            </div>
            <div class="comment">
              深拷貝是指在拷貝時不共享相同的址 (reference)
            </div>
            <br />
          </div>
          <br />
          <br />
          <p>a={...b} 可以嗎?</p>
          <br />
          <div class="bgcVS">
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">obj1</span> <span class="then">=</span>
              <span class="brackets">{</span> <span class="word">a:</span>
              <span class="number">1,</span> <span class="word">b:</span>
              <span class="number">2</span> <span class="brackets">};</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">obj2</span> <span class="then">=</span>
              <span class="brackets">{</span> <span class="word">c:</span>
              <span class="number">3,</span> <span class="word">d:</span>
              <span class="number">4</span> <span class="brackets">};</span>
            </div>
            <br />
            <span class="comment">// 可以 拷貝 物件</span>
            <div>
              <span class="function">const </span>
              <span class="word">newObj</span> <span class="then">=</span>
              <span class="brackets">{</span> <span class="word">...obj1</span>
              <span class="brackets">}</span>
              <span class="word"></span>
            </div>
            <br />
            <span class="comment">// 可以 merged 2 個物件</span>
            <div>
              <span class="function">const </span>
              <span class="word">merged</span> <span class="then">=</span>
              <span class="brackets">{</span>
              <span class="word">...obj1,obj2</span>
              <span class="brackets">};</span>
            </div>

            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">merged</span>
              <span class="brackets">); </span>
              <span class="comment">// {a: 1, b: 2, c: 3, d: 4 }</span>
            </div>
            <br />
          </div>
          <br />
          <br />
          <p class="cor36">這三個點除了把一個東西展開,它在函數參數有什麼用?</p>
          <p>可以不去命名那個函數的參數, 直接用函數參數對象裡面的某一個東西</p>
          <br />
          <p class="cor36">參數裡面可不可以用三個點?</p>
          <p>可以</p>
          <br />
          <p class="cor36">在賦值可以用三個點嗎?</p>
          <p>可以</p>
          <br />
          <p class="cor36">
            我有一個陣列長度為10,我想把前面第一個元素命名為a,後面9個元素命名為新的數組叫b怎麼做?
          </p>
          <p>
            方括號a然後點,然後逗號,然後點點點rest,然後方括號,然後等於array1,那就是a,那個a就是array裡的第一個
          </p>
          <br />
          <br />
          <div class="bgcVS">
            <br />
            <div class="comment">// 用於函數傳參</div>
            <br />
            <div class="comment">// 實參的用法</div>
            <div>
              <span class="function">const </span> <span class="word">a</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="number">1, 2, 3</span>
              <span class="brackets">]</span>
            </div>
            <dir>
              <span class="function">function </span>
              <span class="word">test</span> <span class="brackets">(</span>
              <span class="word">p1,p2,p3</span>
              <span class="brackets">){</span>
            </dir>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p1</span> <span class="brackets">);</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p2</span> <span class="brackets">);</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p3</span> <span class="brackets">);</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">test</span><span class="brackets">(</span>
              <span class="word">...a</span> <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">sum</span> <span class="brackets">(</span>
              <span class="word">a,b,c</span> <span class="brackets">){</span>
            </div>
            <div class="pTwo">
              <span class="then">return </span> <span class="word">a+b+c</span>
            </div>
            <span class="brackets">}</span>

            <div>
              <span class="function">const </span>
              <span class="word">sum</span> <span class="then">=</span>
              <span class="brackets">(</span> <span class="word">a,b,c</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="word">a+b+c</span>
            </div>
            <div>
              <span class="word">sum</span> <span class="brackets">(</span>
              <span class="word">...a</span> <span class="brackets">) </span>
              <span class="comment">// 6</span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">sum</span> <span class="then">=</span>
              <span class="word">sum</span> <span class="brackets">(</span>
              <span class="word">...a</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div class="comment">// 形參的用法</div>
            <div>
              <span class="function">const </span> <span class="word">a</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="number">1, 2, 3</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">b</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="number">4, 5, 6</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">let </span> <span class="word">max</span>
              <span class="then">=</span> <span class="word">Math</span>
              <span class="variable">.max</span> <span class="brackets">(</span>
              <span class="word">...a,...b</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">max</span> <span class="brackets">)</span>
            </div>

            <br />
            <div class="comment">// 形參 & 實參</div>
            <div>
              <span class="function">function </span>
              <span class="word">test</span> <span class="brackets">(</span>
              <span class="word">形參1,形參2</span>
              <span class="brackets">){ </span>
              <span class="comment">// 函數聲明的小括號裡是 形參 </span>
            </div>
            <div class="comment pTwo">// 代碼</div>
            <div class="brackets">}</div>
            <div>
              <span class="word">test</span> <span class="brackets">(</span>
              <span class="word">形參1,形參2</span>
              <span class="brackets">) </span>
              <span class="comment">// 函數調用的小括號裡是 實參</span>
            </div>
            <br />
          </div>

          <br />

          <br />
          <br />

          <p class="cor36"></p>
          <p></p>
          <br />
          <br />

          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />

          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />

          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />

          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />

          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />
          <p class="cor36"></p>
          <p></p>
          <br />
          <br />

          <p class="cor36"></p>
          <p></p>
          <br />
          <br />

          <div id="" class="articleCardTitle cor36">[ JS ] ≫</div>
          <p></p>
          <br />
          <br />
        </div>
      </div>
      <div class="mainContainer" v-else>
        <div class="mainLayout">
          <div class="articleCardTitle cor36">[ JS ] ≫</div>

          <p class="cor36"></p>
          <p></p>
          <br />
          <br />

          <div id="" class="articleCardTitle cor36">[ JS ] ≫</div>
          <p></p>
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
  background-color: 171717;
}

section {
  width: 100vw;
  max-width: 100%;
  background-color: #171717;
  color: #000;
  overflow: hidden;
}

.leftNav {
  font-size: 12px;
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
}

.mainContainer {
  padding: 0 50px;
}

.articleCardTitle {
  font-size: 1.25rem;
  padding: 30px 5px 30px 5px;
}

.cor36 {
  color: #36c1cb;
}

/* top按鈕的css -------------------------------------------------------*/
.toTop {
  /* bottom: 50px; */
  bottom: 20vh;
  /* right: 200px; */
  right: 10px;
  position: fixed;
  z-index: 100;
  background-color: #6f020290;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.toTop:hover {
  background-color: #6f020250;
}
.toTopButton {
  position: relative;
  bottom: 7px;
  padding-left: 0;
  color: #999;
  pointer-events: none;
}
.toBot {
  /* bottom: 50px; */
  bottom: 10vh;
  /* right: 200px; */
  right: 10px;
  position: fixed;
  z-index: 100;
  background-color: #6f020290;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.toBot:hover {
  background-color: #6f020250;
}
</style>
