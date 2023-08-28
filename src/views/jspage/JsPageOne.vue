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
          <div @click="locate('onejs001')" class="leftNavText">JS數據類型</div>
          <div @click="locate('onejs002')" class="leftNavText">
            null undefined
          </div>
          <div @click="locate('onejs003')" class="leftNavText">==&===</div>
          <div @click="locate('onejs004')" class="leftNavText">0.1+0.2</div>
          <div @click="locate('onejs005')" class="leftNavText">
            let var const
          </div>
          <div @click="locate('onejs006')" class="leftNavText">展開運算符</div>
          <div @click="locate('onejs007')" class="leftNavText">
            遍歷數組有幾種方式
          </div>
          <div @click="locate('onejs008')" class="leftNavText">閉包</div>
          <div @click="locate('onejs009')" class="leftNavText">
            立即執行函數
          </div>
          <div @click="locate('onejs010')" class="leftNavText">this指向</div>
          <div @click="locate('onejs011')" class="leftNavText">箭頭函數</div>
          <div @click="locate('onejs012')" class="leftNavText">原型鏈</div>
          <div @click="locate('onejs013')" class="leftNavText">new做了什麼</div>
          <div @click="locate('onejs014')" class="leftNavText">繼承</div>
          <div @click="locate('onejs015')" class="leftNavText">
            call apply bind
          </div>
          <div @click="locate('onejs016')" class="leftNavText">防斗節流</div>
          <div @click="locate('onejs017')" class="leftNavText">DOM</div>
          <div @click="locate('onejs018')" class="leftNavText">
            深拷貝淺拷貝
          </div>
          <div @click="locate('onejs019')" class="leftNavText">RESTful API</div>
          <div @click="locate('onejs020')" class="leftNavText">promise狀態</div>
          <div @click="locate('onejs021')" class="leftNavText">async/await</div>
          <div @click="locate('onejs022')" class="leftNavText">JS事件循環</div>
          <div @click="locate('onejs0')" class="leftNavText"></div>
          <div @click="locate('onejs0')" class="leftNavText"></div>
          <div @click="locate('onejs0')" class="leftNavText"></div>
          <div @click="locate('onejs0')" class="leftNavText"></div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
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
          <div id="" class="articleCardTitle cor36">[ JS ] ≫ ES6 新特性?</div>
          <p>let . const . map . set . 箭頭函數 . 解構復值 . promise</p>
          <br />
          <br />
          <div id="onejs001" class="articleCardTitle cor36">
            [ JS ] ≫ JS數據類型?
          </div>
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
          <div id="onejs002" class="articleCardTitle cor36">
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
          <div id="onejs003" class="articleCardTitle cor36">
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
          <p>" " == 0 . . . // true, " " 先變 0</p>
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
          <p>"false" == false . . . // false // false 轉成 0</p>
          <br />
          <p>NaN == false . . . // false</p>
          <br />
          <p>NaN === false . . . // false</p>
          <br />
          <br />
          <div id="onejs004" class="articleCardTitle cor36">
            [ JS ] ≫ 0.1+0.2為什麼不等於0.3?
          </div>
          <p>浮點數運算可能導致精度丟失，因為計算時使用的是二進制表示</p>
          <br />
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
          <div id="onejs005" class="articleCardTitle cor36">
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
          <div id="onejs006" class="articleCardTitle cor36">
            [ JS ] ≫ 展開運算符
          </div>
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
            <div class="comment">// 形參的用法</div>
            <div>
              <span class="word">conso.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">Math.max</span>
              <span class="brackets">(</span>
              <span class="src"
                >必須是字符的形式,不能直接接陣列,必須逗號隔開
              </span>
              <span class="brackets">)</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">conso.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">Math.max</span>
              <span class="brackets">(</span> <span class="number">1,2,3</span>
              <span class="brackets">)</span> <span class="brackets">)</span>
              <span class="comment">// 裡面要逗號</span>
            </div>

            <div class="comment">// 陣列沒有 求最大值 的方法</div>
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
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">...a</span>
              <span class="brackets">)</span>
              <span class="comment">// 1 2 3</span>
              <span class="comment">// 打印沒逗號,一樣能用在.max</span>
            </div>
            <span class="comment">...a === 1,2,3</span>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="word">Math</span>
              <span class="variable">.max</span> <span class="brackets">(</span>
              <span class="word">...a</span>
              <span class="brackets">)</span> <span class="comment">// 3</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="word">Math</span>
              <span class="variable">.min</span> <span class="brackets">(</span>
              <span class="word">...a</span>
              <span class="brackets">)</span> <span class="comment">// 3</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="word">Math</span>
              <span class="variable">.max</span> <span class="brackets">(</span>
              <span class="word">...a,...b</span>
              <span class="brackets">)</span> <span class="comment">// 6</span>
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
              <span class="word">實參1,實參2</span>
              <span class="brackets">) </span>
              <span class="comment">// 函數調用的小括號裡是 實參</span>
            </div>
            <br />
          </div>

          <div id="" class="articleCardTitle cor36">[ JS ] ≫ 操作陣列?</div>
          <p>push pop unshift shift reduce find include</p>

          <div id="onejs007" class="articleCardTitle cor36">
            [ JS ] ≫ 遍歷數組有幾種方式?
          </div>
          <p>for . forEach</p>
          <br />
          <p>
            map: 返回一個新數組 , 數組中的元素為 原始數組元素 調用函數
            處理後的值
          </p>
          <br />
          <p>
            filter: 創建一個新數組 , 數組中的元素 是通過檢查指定數組中
            符合條件的 所有元素
          </p>
          <br />
          <p>every: 每一個元素都滿足條件 返回 true , 否則 返回 false</p>
          <br />
          <p>
            some: 只要有一個以上的元素滿足條件 就 返回 true , 否則 返回 false ,
            退出循環
          </p>
          <br />
          <p>reduce: 對數組中的 每個元素 執行一個 回掉函數 , 將其結果返回值</p>
          <br />
          <br />

          <p class="cor36"># forEach和map的區別?</p>
          <p>
            map需要有個返回值把它再返回到陣列, 它會接收到那個值, 修改當前元素
          </p>

          <br />
          <br />

          <p class="cor36"># for in,for of,他們用在什麼場景?</p>
          <p>for of 循環獲取到的是一對鍵值對中的值 , 也就是 value</p>
          <br />
          <p>而 for in 獲取的是鍵名 , 也就是 key</p>
          <br />
          <br />
          <p>對數組 for of 返回的是 數組裡面的 元素值</p>
          <br />
          <p>for in 返回 key , 指每個元素的 索引值</p>
          <br />
          <p>
            for of 只能遍歷其底層帶有 iterator 接口的 數據結構 像 set map string
            array
          </p>
          <br />
          <p>物件沒有原生 iterator 接口 , 直接用 for of 會報錯</p>
          <br />
          <p>開發中 遍歷用 for in 更合適</p>
          <br />
          <br />
          <p>for in 返回 數組元素的 索引值 , 而不是 元素</p>
          <br />
          <p>而且 遍歷順序 有可能不是按照 實際數據的 內部順序</p>
          <br />
          <p>所以 通常遍歷數組用 for of</p>
          <br />
          <br />
          <p>總之 for in 適合遍歷 物件</p>
          <p>for of 適合遍歷 數組</p>

          <br />
          <br />

          <p class="cor36"># for循環遍歷跟forEach遍歷,for循環可以中斷嗎?</p>
          <p>for 可以中斷 , forEach 不能中斷</p>
          <br />
          <br />
          <div id="onejs008" class="articleCardTitle cor36">[ JS ] ≫ 閉包?</div>
          <p class="comment">什麼是閉包 , 概念 , 用途 , 優 缺點</p>
          <br />
          <p>閉包 就是 有權訪問 另一個 函數作用域的變量 的函數</p>
          <br />
          <p>優點是 私有化數據 在 私有化數據的基礎上 保持數據</p>
          <br />
          <p>私有化數據是 把一些變量 私有化到函數裡面</p>
          <br />
          <p>為了保持數據</p>
          <br />
          <p>
            例如 節流防斗 -> 當第一次點擊時 , 我們 let time = 接收他的定時器
          </p>
          <br />
          <p>
            如果不用閉包暫存他 , 下次點擊 他是重新創建函數 , 也就重創一個定時器
          </p>
          <br />
          <p>他們 2 個不是互通的 , 沒有引用做連通</p>
          <br />
          <p>也就是 使用閉包 他不會在 內存中消失</p>
          <br />
          <p>所以我們在下次 調用時 能獲取到 上一次定時器的 時間</p>
          <br />
          <br />
          <p>缺點 可能導致內存洩漏</p>
          <br />
          <br />
          <p># 閉包一定會造成內存洩漏嗎?</p>
          <p>不一定 , 看瀏覽器垃圾回收機制</p>
          <br />
          <p>
            閉包造成內存洩漏是瀏覽器問題, 它沒有及時的清裡內存,
            所以是閉包容易造成內存洩漏, 因為實現閉包的拉圾回收比普通變量難一點,
            歷史上發生的有IE6IE7, 但現在已經沒有了
          </p>
          <br />
          <br />
          <p>閉包的目的? 用來封裝一個數據,提供一些API給外部使用</p>
          <br />
          <p>物件的目的? 內部包含一些數據,提供一些方法給外部使用</p>
          <br />
          <p>
            閉包和物件的區別?(閉包是在你不想用物件時來代替物件)
            物件的拆卸數據可以透過屬性暴露出來,
            閉包想要暴露那些數據你得單獨給他寫個函數
          </p>

          <br />
          <br />
          <div id="onejs009" class="articleCardTitle cor36">
            [ JS ] ≫ JS 的立即執行函數是幹嘛用的??
          </div>

          <p>避免汙染全局環境</p>
          <br />

          <p class="cor36"># IIFE立即執行函數它的語法?</p>
          <p>一個匿名函數, 外面包一層括號, 後面再加一個小括號</p>
          <br />
          <p class="cor36"># 為什麼要包一層括號,後面再加一個小括號?</p>
          <p>
            把函數看成一個整體, 首先你匿名函數可以以傳參的形式存在,
            也可以以一些其他形式存在, 但是你不行就直接寫在一段JS的外部,
            這樣他語法就通過不了, 因為它不是一個整體,
            你function後面直接跟一個括號, 他不知道是甚麼東西
          </p>
          <br />
          <div id="onejs010" class="articleCardTitle cor36">
            [ JS ] ≫ this 指向
          </div>
          <table>
            <tr>
              <th><div class="pad20">調用方式</div></th>
              <th><div class="pad20">示例</div></th>
              <th><div class="pad20">函數中this指向</div></th>
            </tr>
            <tr>
              <td><div class="pad20">通過new調用</div></td>
              <td><div class="pad20">mew method()</div></td>
              <td><div class="pad20">新物件</div></td>
            </tr>
            <tr>
              <td><div class="pad20">直接調用</div></td>
              <td><div class="pad20">method()</div></td>
              <td><div class="pad20">全局對象window</div></td>
            </tr>
            <tr>
              <td><div class="pad20">通過物件調用</div></td>
              <td><div class="pad20">obj.method()</div></td>
              <td><div class="pad20">前面的物件</div></td>
            </tr>
            <tr>
              <td><div class="pad20">call.apply.bind</div></td>
              <td><div class="pad20">method.call(ctx)</div></td>
              <td><div class="pad20">第一個參數</div></td>
            </tr>
          </table>

          <div id="onejs011" class="articleCardTitle cor36">
            [ JS ] ≫ 箭頭函數和普通function有甚麼區別?
          </div>

          <p>在執行過程中不會初始化 this</p>
          <br />

          <p>不會初始化 aruguments</p>
          <br />

          <p>不能被 new</p>
          <br />

          <p>沒有 prototype</p>
          <br />

          <p>不能當成構造函數執行</p>
          <br />

          <p class="cor36"># 箭頭函數什麼情況可以省略return?</p>
          <p>不加括弧號的時候, 只有一個語句(一句代碼,可以有多個分號)</p>
          <br />
          <p class="cor36"># 箭頭函數的this指向哪裡?</p>
          <p>外部的this or (捕獲其上下文中的this)</p>
          <br />

          <p>箭頭函數不創建 this , 他從自己的作用域鏈的上一層沿用 this</p>
          <div id="onejs012" class="articleCardTitle cor36">
            [ JS ] ≫ 原型鏈是什麼?
          </div>

          <p class="cor36">物件,原型,物件的構造函數間的關係?</p>
          <br />
          <p>首先任何物件都會有屬於它的隱藏屬性下滑線proto屬性__proto__</p>
          <br />
          <p>這個隱藏屬性就會指向它的構造函數的prototype</p>
          <br />
          <p>這時我們就可以說這個物件的原型就是它的構造函數的prototype</p>
          <br />

          <p>這就是原型</p>
          <br />
          <p>
            然後原型鏈就是比如A的原型是B, B的原型是C,
            這樣一條像鏈式的就稱為原型鏈
          </p>
          <br />
          <br />
          <p>
            :
            定義一個物件A,它的原型的地址對應著object.prototype,object.prototype它的原型又會到了null
            這樣一條像鏈式的就稱為原型鏈
          </p>
          <br />
          <br />
          <p>A指向一個物件,意味著A存的是什麼東西?(注意JS沒有指向) A它的地址</p>
          <br />
          <br />
          <div id="onejs013" class="articleCardTitle cor36">
            [ JS ] ≫ new 做了什麼?
          </div>

          <br />
          <p>new後面跟一個構造函數</p>
          <br />
          <p>先創造一個臨時物件</p>
          <br />
          <p>將這個 臨時物件 原型 綁定構造函數的 prototype</p>
          <br />
          <p>再把裡面的 this 指定為這個 臨時物件</p>
          <br />
          <p>再執行構造函數</p>
          <br />
          <p>最後return這個臨時物件</p>
          <br />
          <p class="cor36"># 當我 new 構造函數</p>
          <p>1. 創建 新物件 (空的)</p>
          <p>2. 構造函數的 this 指向 新物件</p>
          <p>3. 執行 構造函數 代碼</p>

          <p class="pFou">this. 指向物件 . . . obj.name="wayne"</p>
          <p class="pFou">name屬性 =賦值 "wayne"</p>
          <p>4. 返回 這個 新物件</p>
          <br />
          <br />
          <p class="cor36">
            # 如果我再new後面構造函數後面最後一行加一個return一個數組會怎樣?
          </p>
          <p>它就會代替這個 this</p>
          <br />
          <p class="cor36">
            # 如果我再new後面構造函數後面最後一行加一個return一個物件會怎樣?
          </p>
          <p>它就會代替這個 this</p>
          <br />
          <p class="cor36"># 原型綁定是綁到這個this的哪個屬性上面?</p>
          <p>__proto__</p>
          <br />
          <p>new後面跟一個構造函數,這個函數可以是箭頭函數嗎? _ 不可以</p>
          <br />
          <p class="cor36"># 你new出來的對象原型是什麼?</p>
          <p>new 出來的 物件的 原型 指向 構造函數的 原型</p>
          <br />
          <br />
          <div id="onejs014" class="articleCardTitle cor36">[ JS ] ≫ 繼承?</div>
          <p class="cor36">1. 原型鏈繼承</p>
          <p>每個 構造函數 都有一個 原型對象 (prototype),</p>
          <br />
          <p>每個 實例對象 包含一個 指向 原型對象的 指針 (__proto__)</p>
          <br />
          <p>當代碼 讀取實例的 某屬性時 ,</p>
          <br />
          <p>都會先在 實例上 搜尋這個屬性, 沒找到 則搜索原型對象</p>
          <br />
          <p class="cor36">缺點</p>
          <p>
            包含引用類型值的 原型屬性 會被所有實例共享。 ( 當一個實例改變該屬性
            , 其他也會改 )
          </p>
          <br />
          <p class="cor36">2. 構造函數繼承</p>

          <p>通過使用 call apply 方法 ,</p>
          <br />
          <p>可以在子類中 執行父類 構造函數 , 從而實現繼承</p>
          <br />
          <p class="cor36">優點</p>
          <p>原型屬性 不會 被共享</p>
          <p class="cor36">缺點</p>
          <p>不能繼承 父類 prototype 上的屬性</p>
          <br />
          <p class="cor36">3. 構造函數繼承 + 構造函數繼承</p>

          <p>child.prototype = new Parent()</p>
          <p class="cor36">優點</p>
          <p>1. 原型屬性不會被共享</p>
          <p>2. 可以繼承父類的 原型鏈上的 屬性和方法</p>
          <br />
          <p class="cor36">點</p>
          <p>調用了 2 次 Parent()</p>
          <p>他在 child 的 prototype 上添加了父類的 屬性和方法</p>

          <br />
          <br />

          <div id="onejs015" class="articleCardTitle cor36">
            [ JS ] ≫ call apply bind
          </div>
          <p class="cor36">call和apply有什麼區別?</p>
          <p>call指定一個this, 傳參數, 直接調用他,</p>
          <br />
          <p>apply指定this, 傳的參數是放在陣列裡面的, 也是直接調用</p>

          <br />
          <br />
          <p class="cor36">什麼情況下只能用apply不能用call?</p>
          <p>你要傳的數據是陣列的話用apply, 你傳的參數很多也用apply</p>
          <br />
          <br />
          <p class="cor36"># 現在ES6,我能不能強行用call? _ 可以</p>
          <p>
            sumNumbers.call(null, ...numbers);
            直接函數.call,null三個點把那個陣列展開
          </p>
          <br />
          <br />

          <p class="cor36"># call和bind有什麼區別?</p>
          <p>
            bind只綁定this,但它不去立即調用它,而是返回一個綁定這個this的新函數
          </p>
          <br />
          <br />
          <div id="onejs016" class="articleCardTitle cor36">
            [ JS ] ≫ 防斗是什麼?
          </div>

          <p>
            防斗比如一個input標籤, 然後input標籤要實現一個功能,
            再用戶輸入的時候彈出相應的提示,
          </p>
          <br />
          <br />
          <p>所以監聽它的input事件, 但是input事件是在用戶每次輸入的時候觸發,</p>
          <br />
          <br />
          <p>所以需要設置一個函數的防斗來實現一個功能,</p>
          <br />
          <br />
          <p>就是當用戶輸入之後停頓某個時間沒有再次輸入才會執行這個函數,</p>
          <br />
          <br />
          <p>否則不執行, 重新計時</p>
          <br />
          <br />
          <p class="cor36">節流是什麼?</p>
          <p>
            節流類似一個技能的冷卻, 就是當你進行一個操作後,
            要等一段時間才能再次進行這個操作,
          </p>
          <br />
          <br />

          <p class="cor36">proxy做什麼的?</p>
          <p>
            用於接管物件內部屬性的讀取或函數的調用方法,
            它跟object.definedproperty是一樣的功能,
            但是object.definedproperty一次只能處理一個屬性
          </p>
          <br />
          <br />
          <div id="onejs017" class="articleCardTitle cor36">
            [ JS ] ≫ 什麼是DOM?
          </div>
          <p>DOM是文檔物件模型</p>
          <br />
          <p>用途是把網頁變成JS中的對象來進行增刪改查操作</p>
          <br />
          <p>平時要操作DOM可以通過document.getElementByID</p>
          <br />
          <p>然後去對他的各種屬性進行修改,</p>
          <br />
          <p class="cor36">什麼是事件捕獲?什麼是事件冒泡?</p>
          <p>
            事件捕獲是從最外層然後向觸發事件子層去一層一層往下傳遞事件,
            冒泡是從子層向外層一層一層冒泡這個事件
          </p>
          <br />
          <br />
          <p class="cor36">那一次點擊會同時觸發捕獲和冒泡嗎?</p>
          <p>會,不管什麼事件一定會先捕獲在冒泡</p>
          <br />
          <p>先從document一層一層的到那個元素</p>
          <br />
          <p>然後再從那個元素一層一層到 document</p>
          <br />

          <p>你監聽捕獲只不過是在其中插入一個函數而已</p>
          <br />
          <p>監聽捕獲是在捕獲那邊插入函數</p>
          <br />
          <p>監聽冒泡是在冒泡那邊插入一個函數</p>
          <br />
          <p>
            如果你兩個都監聽還是先經過捕獲階段觸發你的函數,
            經過冒泡階段在觸發函數
          </p>
          <br />
          <br />

          <p class="cor36"># BOM</p>
          <br />
          <p>BOM是瀏覽器對象模型, 用途是用JS來操作瀏覽器來前進後退和地址欄</p>
          <br />
          <br />

          <p class="cor36"># DOM的事件模型是什麼?</p>
          <p>觸發事件時, 先從上往下進行事件捕獲階段</p>
          <br />
          <p>從觸發結點最上面 document 往下到觸發節點</p>
          <br />
          <p>然後監聽事件有沒有發生</p>
          <br />
          <p>要有同類型事件發生的話就執行函數</p>
          <br />
          <p>之後再從這個節點往上進行事件冒泡</p>
          <br />
          <p class="cor36"># 不想某一個元素往上冒泡可以用什麼API?</p>
          <br />
          <p>e.stopPropergation</p>
          <br />
          <br />
          <p class="cor36">
            假設我點擊一個按鈕得到事件e,我把事件e綁定到變數上面,過一秒後打印這個變數,請問打印出什麼?
          </p>
          <p>
            空 , 因為 setTimeout 他是一個 異步事件, 他等同步執行完再執行,
            這時他那個變量 e 不存在了
          </p>
          <br />
          <br />
          <p class="cor36">事件委託是什麼?</p>
          <p>假設有父子元素, 監聽子元素事件</p>
          <br />
          <p>假設ul裡面有很多li, 然後要求點擊li觸發一個事件</p>
          <br />
          <p>假如在每個li都綁定事件 會增大代碼量和內存</p>

          <br />
          <p>
            可以根據事件冒泡在list item上面觸發的事件會向上冒泡到父元素 ul 上面
          </p>
          <br />
          <p>所以可以在 ul 上面監聽</p>
          <br />
          <p class="cor36">事件委託優點?</p>
          <p>可以減少代碼量, 減少內存, 動態綁定</p>
          <br />
          <p class="cor36">事件委託缺點?</p>
          <p>
            用了之後在開發者工具看他的事件綁定會發現沒有,
            會不知道誰在監聽這個元素
          </p>
          <br />
          <br />
          <div id="onejs018" class="articleCardTitle cor36">
            [ JS ] ≫ 深淺拷貝?
          </div>

          <p>
            潛拷貝是直接複製一層, 深拷貝向下去把它完全複製下來,
            它的實現原理可以用到 遞規 去實現
          </p>
          <br />
          <p class="cor36">
            遞歸怎麼分類呢?你怎麼知道他是基本類型?你怎麼知道它不是一個物件?
          </p>
          <p>用typeof</p>
          <br />
          <br />
          <p class="cor36">typeof返回什麼值,你認為它不是物件或者是物件呢?</p>
          <p>判定 typeof 是 object 就說明他肯定不是基本類型</p>
          <br />
          <br />
          <p class="cor36">如果它不是object有幾種情況?</p>
          <p>string number 布林 null function(返回function)</p>
          <br />
          <br />
          <p class="cor36">假設你知道哪些是物件,那些不是物件,接下來怎麼區分?</p>
          <p>在物件裡面區分看他是不是函數,再看它是普通函數還是箭頭函數</p>
          <br />
          <br />
          <p class="cor36">普通函數還是箭頭函數怎麼看?</p>
          <p>看他有沒有prototype,箭頭函數沒有prototype</p>
          <br />
          <br />
          <p class="cor36">
            你知道他們區別後接下來做什麼?如果它是普通函數要怎麼複製它?
          </p>
          <p>所有參數傳給那個函數,然後返回它的返回值</p>
          <br />
          <p>: 直接用function然後return一個a.call然後地址,然後把參數弄下來</p>
          <br />
          <p class="cor36">如果是箭頭函數要怎麼複製它?</p>
          <p>普通函數創建function 箭頭函數創建箭頭函數</p>
          <br />
          <br />
          <p class="cor36">.函數判斷完再來判斷什麼?</p>
          <p>看他是不是陣列</p>
          <br />
          <br />
          <p class="cor36">陣列判斷完再來判斷什麼?</p>
          <p>看他是不是Date</p>
          <br />
          <p>再來判斷什麼? 正則</p>
          <br />
          <br />
          <p class="cor36">要著重檢測的類型有哪些?</p>
          <p>物件 日期 函數 字串 正則表達式</p>
          <br />
          <br />
          <p class="cor36">先檢查她是對象還是陣列呢?</p>
          <p>先檢查陣列</p>
          <br />
          <br />
          <p class="cor36">對JSON的理解?</p>
          <p>是一門表示通用數據結構的語言</p>
          <br />
          <p>用來代替XML用來做數據交換</p>
          <br />
          <p>JSON可以表示物件 數組 不林 string number</p>
          <br />
          <p>一般在 AJAX 得到的請求就是 JSON</p>
          <br />

          <br />
          <p id="onejs019" class="cor36">什麼是 RESTful API</p>
          <p>RESTful API (表示性狀態轉移接口) 是一種設計風格</p>
          <br />
          <p>API 設計規範</p>
          <br />
          <p>1. 將一切數據視作資源</p>
          <br />
          <p>2. 利用 HTTP 請求方式 , 描述對資源的操作 ( 增 刪 改 查 )</p>
          <br />
          <p>3. 通過 HTTP 響應狀態碼 , 描述對資源的 操作結果</p>
          <br />
          <p>就是通過 URL 就知道要什麼資源 ,</p>
          <br />

          <p>通過 HTTP method 就知道要做什麼,</p>
          <br />
          <p>通過 HTTP status code 就知道結果如何</p>
          <br />
          <p>比如</p>
          <br />
          <p>GET 代表獲取一個資源</p>
          <br />
          <p>POST 代表添加一個資源</p>
          <br />
          <p>PUT 代表修改一個資源</p>
          <br />
          <p>DELETE 代表刪除一個資源</p>
          <br />
          <p>
            用 HTTP Status Code 傳遞 server 的狀態訊息 ,ex 200 表示成功 , 500
            表示 server 內部錯誤
          </p>
          <br />
          <p class="cor36">用 Rest 的優勢?</p>
          <p>1. 風格統一 , 不會出現各種命名的代碼</p>
          <br />
          <p>2. 面相資源 , 一目了然 , 有自解釋性</p>
          <br />
          <p>3. 充分利用 HTTP 協議本身語意</p>
          <br />
          <br />
          <p class="cor36">併發和併行?</p>
          <p>
            併發是宏觀概念,表示並行發生, 並行是微觀概念,
            表示cpu有多個核心同時執行兩個任務
          </p>
          <br />
          <p>並行是微觀概念, 表示cpu有多個核心同時執行兩個任務</p>
          <br />
          <br />
          <p class="cor36">JS異步編程實現方式?</p>
          <p>回調函數 . promise . async和await</p>

          <br />
          <br />
          <p class="cor36">AJAX有2種方法,XMLHttpRequest和fetch,他們的優缺點?</p>
          <p>XHR大多數用他的庫axios</p>
          <br />
          <p>
            Fetch優勢在於瀏覽器原生支持, 方便去用, 他的API也比xhr使用起來簡單
          </p>
          <br />
          <br />

          <div id="onejs020" class="articleCardTitle cor36">
            [ JS ] ≫ promise 的狀態?
          </div>
          <p>pending 待定: 初始狀態</p>
          <br />
          <p>fullfilled 兌現: 操作成功</p>
          <br />
          <p>rejected 拒絕: 操作失敗</p>
          <br />
          <br />
          <p>Promise 狀態 一但 兌現 / 拒絕 就 無法再改變</p>
          <br />

          <p class="cor36">promise解決了什麼問題?</p>
          <p>解決回調地獄</p>
          <br />
          <br />
          <p class="cor36">promise成功失敗的回調放哪?</p>
          <p>.then</p>
          <br />
          <br />
          <p class="cor36">catch是幹嘛的?</p>
          <p>捕獲promise的錯誤</p>
          <br />
          <br />
          <p class="cor36">finally?</p>
          <p>不論成功 (.then) 失敗 (.catch) 都會調用的方法</p>
          <br />
          <br />
          <p class="cor36">promise的缺點?</p>
          <p>一旦執行promise沒辦法取消, 它裡面的錯誤只能用回調函數來捕獲</p>
          <br />
          <br />

          <p class="cor36">Promise.all?</p>
          <p>
            傳入多個promise而這些promise都是成功的話 Promise.all就執行相對應函數
          </p>
          <br />
          <br />

          <p class="cor36">Promise.race?</p>
          <p>傳入多個promise而只要一個成功或失敗, 就返回那個</p>
          <br />
          <br />
          <p class="cor36">promise的缺點?</p>
          <p>一旦執行promise沒辦法取消, 它裡面的錯誤只能用回調函數來捕獲</p>
          <p>就整個都失敗</p>
          <br />
          <p>Promise.all如果失敗了一個會不會執行失敗的回調? _ 會</p>
          <br />
          <p class="cor36">那是第一個失敗時執行還是所有都失敗在執行?</p>
          <p>只要第一個失敗就執行,並以這個失敗的結果來執行下面的回調</p>
          <br />
          <br />
          <p class="cor36">Promise是一個類還是函數呢?</p>
          <p>
            它可以是函數, 你把它做為單獨的函數的話要自己實現原型, 用類的話,
            直接把它方法寫到類的定義上就好
          </p>
          <br />
          <br />
          <p class="cor36">這個Promise接收什麼參數呢?</p>
          <p>它是一個回調函數</p>
          <br />
          <br />

          <p class="cor36">這個回調函數接收什麼參數呢?</p>
          <p>resolve 和 reject</p>
          <br />
          <p>
            Promise接受到這個參數後,它對這個函數要立即執行嗎?還是異步執行? _
            立即執行
          </p>
          <br />
          <p class="cor36">Promise執行完這個函數後要返回什麼值?</p>
          <p>
            物件,這個物件至少有一個than方法, 可能還會有catch跟finaly方法,
            在then裡面可以添加更多的回調
          </p>
          <br />
          <br />
          <p class="cor36">
            一般promise後面.then,這個.then的參數和返回值是什麼?
          </p>
          <p>
            then的參數第一個是成功的回調, 第二個參數是錯誤的回調,
            然後返回一個promise
          </p>
          <br />
          <p>那返回的這個promise是之前的promise嗎? _ 是</p>
          <br />
          <p class="cor36">Promise.all怎麼自己去模擬?</p>
          <p>
            就是發三個請求,三個請求成功了,就調用成功,任何一個失敗了就調用失敗
          </p>
          <br />
          <br />

          <p class="cor36">
            不用Promise.all怎麼做? _ (可不可以給2分鐘考慮思路,promise4步)
          </p>
          <p>
            先記promise.all的用法, 他會接收陣列參數,
            第一步把所有promise封裝到陣列裡面, 陣列能做遍歷,
            裡面寫成功函數和失敗函數,
            如果成功成功數目加一or給結果陣列裡面的結果填充,
            比如第一個promise成功了, 給結果第一項變成他的data, 第二個...,
            怎麼才能繼續, 變了data後看一下是不是三項都是data或成功,
            那就可以繼續了,
            最終要確定是否成功就是我這次成功之後看一下這個陣列是否是全成功的,
            如果不是就什麼都不做, 最後成功的那個請求就負責往下走,
            而失敗就直接調用失敗不用數數
          </p>
          <br />
          <br />

          <p id="onejs021" class="cor36">async/await怎麼用?</p>
          <p>比如在AJAX請求之間, 先聲明一個async function</p>
          <br />
          <p>把這個AJAX請求寫在await後面,</p>
          <br />
          <p>因為這個async本身是一個函數包裹了不同的異步請求的任務,</p>
          <br />
          <p>然後它碰到這個await就會執行這個異步函數返回一個promise</p>
          <br />
          <p>但不確定這個promis會返回正確還是錯誤</p>
          <br />
          <p>所以可以用try catch來捕捉這個異常</p>
          <br />
          <br />

          <p class="cor36">
            假如我有f1f2都返回promise如果我想await要等待兩個異步操作結束之後再console.log(z)?
          </p>
          <p>
            可以用promise.all, peomise.all可以將多個promise合成一個新的promise,
            當兩個promise都是成功的狀態下, 就是它返回一個結果陣列,
            如果是失敗的話它會將, 首先哪個錯的promise的狀態的結果返回出來
          </p>
          <br />
          <br />

          <p class="cor36">
            如果我想用await依次執行f1f2呢?就是等f1執行完我再去執行f2?
          </p>
          <p>.await(f1).await(f2)</p>
          <br />
          <br />
          <p>await永遠異步對不對? _ 對</p>
          <br />
          <br />
          <p>await後面一般接promise對不對? _ 對</p>
          <br />
          <br />

          <p class="cor36">如果不接promise會怎樣?await 1會怎樣?</p>
          <p>它會默認返回一個promise, 它會把它封裝成promise.resolve 1</p>
          <br />
          <br />

          <p class="cor36">const a = 1 和 const a = await 1一樣嗎?</p>
          <p>不一樣, 有await會變異步</p>
          <br />
          <br />

          <p class="cor36">a = await 1相當於a = 1嗎?</p>
          <p>不是</p>
          <br />
          <br />
          <p>
            (await是語法糖,await所有寫法會變成promise,不是promise也強行變成promise)
          </p>
          <br />
          <br />

          <p class="cor36">await我們在之後接上一個異步請求,a = await ajax()?</p>
          <p>那要等到promise結果返回,在執行a = await ajax()</p>
          <br />
          <br />

          <p class="cor36">怎麼捕獲await中的錯誤?</p>

          <p>用 try , catch</p>
          <br />
          <br />

          <p class="cor36">node.js什麼是EventLoop?</p>
          <p>Node.js將任務分成幾個大類</p>
          <br />
          <br />
          <p>有timers階段</p>
          <br />
          <br />
          <p>還有IO</p>
          <br />
          <br />
          <p>callbacks階段</p>
          <br />
          <br />
          <p>還有prepare階段</p>
          <br />
          <br />
          <p>還有poll輪詢階段</p>
          <br />
          <br />
          <p>還有check階段</p>
          <br />
          <br />
          <p>還有close callbcak階段</p>
          <br />
          <br />
          <p>一般在三個階段停留時間比較長 timers poll check</p>
          <br />
          <br />
          <br />
          <p>setTimeout哪個階段阿? timers</p>
          <br /><br />
          <p>
            那promise的then回調在哪個階段執行? 跟nextTick一樣,
            現階段結束之前執行
          </p>
          <br /><br />
          <br />
          <p id="onejs022" class="cor36">JS的事件循環?</p>
          <p>打開瀏覽器頁面時, 瀏覽器會開闢隊列,</p>
          <br />
          <p>然後隊列分為 微任務隊列 宏任務隊列,</p>
          <br />
          <p>在執行script代碼時, 會把同步代碼之外的異步任務放到對列裡面去,</p>
          <br />
          <p>
            在同步的代碼執行完成後, 去查看異步隊列中是否有滿足條件的執行任務,
          </p>
          <br />
          <p>然後把它取出來防到執行環境站裡面執行,</p>
          <br />
          <p>然後不斷循環這個過程, 這就是事件循環</p>
          <br />
          <br />
          <br />

          <p class="cor36">微任務和宏任務?</p>
          <p>微任務 宏任務 是nodejs說法,</p>
          <br />
          <br />
          <p>瀏覽器只有 微任務 任務, 所以可以認為宏任務就是任務</p>
          <br />
          <br />
          <p>
            任務是最常規的東西, 你引入script標籤 寫一個setTimeout,
            它的回調或代碼裡面都是任務,
          </p>
          <br />
          <br />
          <p>
            這個任務裡面你可以不停地去啟用微任務, 例如promise.then執行微任務
          </p>
          <br />
          <br />

          <p class="cor36">那些函數是微任務和那些是宏任務?</p>
          <p>
            setTimeout宏任務 promise裡面then微任務
            async函數裡面await後面的部分微任務
          </p>
          <br />
          <br />
          <p>微任務和宏任務執行順序? _ 宏任務先執行</p>
          <br />
          <br />
          <p>一般第一個任務是什麼任務?(宏任務裡可以插入微任務) _ 宏任務</p>
          <br />
          <br />
          <p>在頁面中引入一個script標籤,那這個script是什麼任務? _ 宏任務</p>
          <br />
          <br />
          <p>
            我在兩個宏任務之間執行一個微任務,那肯定微任務在兩個中間執行隊嗎? _
            對
          </p>
          <br />
          <br />
          <p>
            那我在中間這個微任務裡面再次執行一個微任務,它會插在下一個宏任務執行之前執行嗎?(題目問可不可以插宏任務)
            _ 會
          </p>
          <br />
          <br />
          <p>
            假設我在兩個宏任務之間已經安排了兩個微任務,然後在第一個微任務執行結束的時候,又插入一個新的微任務,這個新的微任務可以在下一個微任務執行之前執行嗎?
          </p>
          <p>(題目問可不可以插微任務)</p>
          <br />
          <p>
            不行, 微任務要排隊, 微任務只能插在宏任務之前 不能, . . .
            兩個微任務之間不能插微任務
          </p>
          <br />
          <br />
          <p class="cor36">假設一個宏任務觸發一個微任務和宏任務,先執行哪個?</p>
          <p>微任務之後的微任務也是會繼續執行微任務, 直到微任務隊列空</p>
          <br />
          <br />
          <p>Promise.then(f1)這個then後面接的f1是異步還是同步? _ 異步</p>
          <br />
          <br />
          <p>
            第一行Promise.then(f1)第二console.log(999),f1會在999之後執行對嗎? _
            對
          </p>
          <br />
          <br />
          <p>
            第一行Promise.then(f1)第二setTimeout(999),f1和999哪個先執行? _ f1
          </p>
          <br />
          <br />
          <p>
            為什麼then回調可以比setTimeout先執行? _ then屬於微任務,
            setTimeout屬於宏任務
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
    <!-- thebottomTHEBOTTOMTABBOTTOMtabbottom -->
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
  <!-- thebottomcssTHEBOTTOMCSSTABBOTTOMCSStabbottomcss -->
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
  font-size: 1.75rem;
  padding: 30px 5px 30px 5px;
}

.cor36 {
  color: #36c1cb;
  font-size: 1.25em;
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
.toTop:hover {
  background-color: #6f020250;
}
.toTopButton {
  position: relative;
  font-size: 20px;
  bottom: 7px;
  padding-left: 0;
  color: #999;
  pointer-events: none;
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
