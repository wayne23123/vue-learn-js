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
          <div @click="locate('twofunction001')" class="leftNavText">
            函數提升
          </div>
          <div @click="locate('twofunction002')" class="leftNavText">
            形參實參
          </div>
          <div @click="locate('twofunction003')" class="leftNavText">
            動態參數
          </div>

          <div @click="locate('twofunction004')" class="leftNavText">
            剩餘參數
          </div>

          <div @click="locate('twofunction005')" class="leftNavText">
            展開運算符
          </div>
          <div @click="locate('twofunction006')" class="leftNavText">
            箭頭函數
          </div>
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
          <div id="twofunction001" class="articleCardTitle cor36 fz34">
            2.1 函數提升
          </div>
          <br />
          <div class="bgcVS fz30">
            <div class="comment">
              // 1.會把所有函數聲明提升到當前作用域最前面
            </div>
            <div class="comment">// 2.只提升函數聲明, 不提升函數調用->()</div>

            <div>
              <span class="word">fn</span> <span class="brackets">()</span>
            </div>

            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>

            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="src">"函數提升</span> <span class="then">"</span>
              <span class="brackets">)</span>
            </div>
            <div class="brackets">)</div>
            <br />
            <br />
            <div>
              <span class="word">fun</span> <span class="brackets">() </span>
              <span class="comment">// fun is not a function</span>
            </div>
            <div>
              <span class="function">var </span>

              <span class="variable">fun </span>
              <span class="then">= </span>

              <span class="function">function </span>
              <span class="brackets">(){ </span>
              <span class="comment">// 這叫 賦值</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="src">"函數表達式"</span>
              <span class="brackets">)</span>
            </div>
            <div class="brackets">}</div>
            <span class="comment">// var 只提升聲明 不賦值</span>
          </div>
          <div id="twofunction002" class="articleCardTitle cor36 fz34">
            2.2 形參實參
          </div>
          <p class="fz28 cor36">形式參數</p>
          <p class="fz28">接收函數在調用的時候傳入的具體參數值</p>
          <br />
          <p class="fz28">1.出現在函數的定義裡面 , 只能在函數體內使用</p>
          <br />
          <p class="fz28 cor36">實際參數</p>
          <p class="fz28">調用的時候傳入的具體值</p>
          <br />
          <p class="fz28">1.出現在主調函數裡面 , 被調不能訪問實參</p>
          <p class="fz28">
            2.實參是基本類型的值, 將實參值進行拷貝傳給形參, 函數運行完,
            釋放形參, 所以實參不會被改變
          </p>
          <p class="fz28">
            2.實參是引用類型的值, 將實參內存地址進行拷貝傳給形參,
            實參和形參將會指向同一地址
          </p>
          <br />
          <p class="fz28">其他:</p>
          <p class="fz28">
            1.函數可以不定義形參, 函數體內可以通過 arguments 這個變量來獲取到
            我們實際傳遞的參數
          </p>
          <p class="fz28">2. 函數的參數個數、數據類型不一定要相同</p>
          <br />
          <br />
          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">fn1</span> <span class="brackets">(){</span>
            </div>
            <div class="pTwo">
              <span class="function">var </span>
              <span class="word">param</span> <span class="then">=</span>
              <span class="src">"hi";</span>
            </div>
            <div class="pTwo">
              <span class="word">fn2</span> <span class="brackets">(</span>
              <span class="word">param</span> <span class="brackets">) </span>
              <span class="comment">// 對 fn2 來說是 實參</span>
            </div>
            <div class="brackets">}</div>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">fn2</span> <span class="brackets">(</span>
              <span class="word">arg</span> <span class="brackets">){ </span>
              <span class="comment">// 形參</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arg</span> <span class="brackets">);</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">param</span> <span class="brackets">); </span>
              <span class="comment">// param is not defined</span>
            </div>

            <div class="brackets">}</div>
            <br />
            <div class="comment">
              // 實參是基本類型的值, 將實參值進行拷貝傳給形參, 函數運行完,
              釋放形參, 所以實參不會被改變
            </div>
            <div>
              <span class="function">var </span> <span class="word">arg</span>
              <span class="then">=</span> <span class="word">1;</span>
            </div>
            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(</span>
              <span class="word">param</span> <span class="brackets">){</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">param</span> <span class="brackets">){</span>
            </div>
            <div class="pTwo">
              <span class="word">param</span> <span class="then">=</span>
              <span class="word">2;</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">fn</span> <span class="brackets">(</span>
              <span class="word">arg</span> <span class="brackets">); </span>
              <span class="comment">// 1</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arg</span> <span class="brackets">); </span>
              <span class="comment">// 1 </span>
              <span class="comment">// 所以實參不會被改變 </span>
            </div>
            <br />
            <br />
            <div class="comment">
              // 實參是引用類型的值, 將實參內存地址進行拷貝傳給形參,
              實參和形參將會指向同一地址
            </div>
            <div>
              <span class="function">var </span> <span class="word">arg2</span>
              <span class="then">=</span> <span class="brackets">{</span>
              <span class="word">name:</span> <span class="src">"wayne"</span>
              <span class="brackets">};</span>
            </div>
            <div>
              <span class="function">function </span>
              <span class="word">fn2</span> <span class="brackets">(</span>
              <span class="word">param</span> <span class="brackets">){</span>
            </div>
            <dir class="pTwo">
              <span class="word">param.name</span> <span class="then">=</span>
              <span class="src">"會改變值但不改變指向"</span>
            </dir>
            <div class="pTwo">
              <span class="word">param</span> <span class="then">=</span>
              <span class="brackets">{};</span>
              <span class="comment">//改變了形參的指向</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">fn2</span> <span class="brackets">(</span>
              <span class="word">arg2</span> <span class="brackets">); </span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arg2</span> <span class="brackets">); </span>
              <span class="comment">// { name: "會改變值但不改變指向" } </span>
            </div>
            <span class="comment">// 不能改變引用地址, 能改變值 </span>
            <br />
            <br />
            <div class="comment">// 函數的參數個數、數據類型不一定要相同</div>
            <div>
              <span class="function">function </span>
              <span class="word">fn3</span> <span class="brackets">(</span>
              <span class="word">arg1:string,arg2</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo">
              <span class="comment">// 1. arg1 傳入 number 類型 可以</span>
            </div>
            <div class="pTwo">
              <span class="comment">// 2. arg2 沒傳入 是 undefined </span>
            </div>
            <div class="brackets">}</div>
          </div>
          <br />
          <br />
          <p class="fz28">需求 寫一個求和函數</p>
          <p class="fz28">不管傳入多少實參 都要求和</p>
          <p class="fz28">getSum( 2, 3)</p>
          <p class="fz28">getSum( 1, 2, 3)</p>
          <p class="fz28">getSum( 1, 2, 3, 4, 5,)</p>
          <div id="twofunction003" class="articleCardTitle cor36 fz34">
            2.3 動態參數 arguments
          </div>
          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">getSum</span> <span class="brackets">(){</span>
            </div>
            <div class="comment pTwo">
              // arguments 動態參數 只存在於 函數裡面
            </div>
            <div class="comment pTwo">
              // 1. 是偽數組 -> 有所引號 有下標 沒有常用的方法
            </div>
            <div class="word pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arguments</span>
              <span class="brackets">) </span>
              <span class="comment">// [2,3,4]</span>
            </div>
            <div class="pTwo">
              <span class="function">let </span> <span class="word">sum</span>
              <span class="then">=</span> <span class="number">0</span>
            </div>
            <div class="pTwo">
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">let </span> <span class="word">i</span>
              <span class="then">=</span> <span class="number">0</span>
              <span class="then">;</span> <span class="word">i</span>
              <span class="then">＜</span>
              <span class="word">arguments.length</span>
              <span class="then">;</span> <span class="word">i++</span>
              <span class="brackets">){</span>
            </div>
            <div class="pFou">
              <span class="word">sum</span> <span class="then">+=</span>
              <span class="word">arguments</span>
              <span class="brackets">[</span> <span class="word">i</span>
              <span class="brackets">]</span>
            </div>
            <div class="pTwo brackets">}</div>
            <div class="pTwo">
              <span class="word">sum</span> <span class="then">+=</span>
              <span class="word">arguments</span>
              <span class="brackets">[</span> <span class="word">i</span>
              <span class="brackets">]</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">getSum</span> <span class="brackets">(</span>
              <span class="word">2,3,4</span> <span class="brackets">)</span>
            </div>
          </div>
          <br />
          <br />
          <p class="fz28">總結</p>
          <p class="fz28">1. arguments 是一個偽數組, 只存在函數中</p>
          <p class="fz28">2. arguments 作用是 動態獲取函數的 實參</p>
          <p class="fz28">3. 可用 for 循環依次得到傳過來的 實參</p>
          <br />
          <br />
          <p class="fz28">需求 寫一個求和函數</p>
          <p class="fz28">不管傳入多少實參 都要求和</p>
          <p class="fz28">getSum( 2, 3)</p>
          <p class="fz28">getSum( 1, 2, 3)</p>
          <p class="fz28">getSum( 1, 2, 3, 4, 5,)</p>
          <p class="fz28">改成形參?</p>
          <div id="twofunction004" class="articleCardTitle cor36 fz34">
            2.4 剩餘參數 ＜- 建議用這個
          </div>
          <p class="fz28">剩餘參數允許我們將一個不定數量的參數表示為一個數組</p>
          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">getSum</span> <span class="brackets">(</span>
              <span class="word">...arr</span>
              <span class="brackets">){</span>
            </div>
            <div class="word pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arr</span>
              <span class="brackets">) </span>
              <span class="comment">// [2,3,4]</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">getSum</span> <span class="brackets">(</span>
              <span class="word">2,3,4</span> <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">getSum</span> <span class="brackets">(</span>
              <span class="word">a, b, ...arr</span>
              <span class="brackets">){</span>
            </div>
            <div class="comment pTwo">// 2 給 a , 3 給 b</div>
            <div class="word pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arr</span>
              <span class="brackets">) </span>
              <span class="comment">// [2,3,4] </span>
              <span class="comment">// 使用時不用...</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">getSum</span> <span class="brackets">(</span>
              <span class="word">2,3,4</span> <span class="brackets">)</span>
            </div>
          </div>
          <br />
          <p class="fz28">動態、剩餘參數差別</p>
          <p class="fz28">
            1. ...是語法符號, 置於最末函數形參之前, 用於獲取多餘的實參
          </p>
          <p class="fz28">2. 剩餘參數 獲取的數組是 真數組</p>
          <div id="twofunction005" class="articleCardTitle cor36 fz34">
            2.5 展開運算符
          </div>
          <p class="fz28">展開運算符</p>
          <p class="fz28">
            可以把陣列展開, 可以利用求陣列最大值 和 合併陣列 等操作
          </p>
          <br />
          <p class="fz28">
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
          <p class="fz28">a={...b} 可以嗎?</p>
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
          <p class="cor36 fz28">
            這三個點除了把一個東西展開,它在函數參數有什麼用?
          </p>
          <p class="fz28">
            可以不去命名那個函數的參數, 直接用函數參數對象裡面的某一個東西
          </p>
          <br />
          <p class="cor36 fz28">參數裡面可不可以用三個點?</p>
          <p class="fz28">可以</p>
          <br />
          <p class="cor36 fz28">在賦值可以用三個點嗎?</p>
          <p class="fz28">可以</p>
          <br />
          <p class="cor36 fz28">
            我有一個陣列長度為10,我想把前面第一個元素命名為a,後面9個元素命名為新的數組叫b怎麼做?
          </p>
          <p class="fz28">
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
          </div>
          <div class="articleCardTitle cor36 fz34">匿名函數</div>
          <a href="https://juejin.cn/post/6844903962257129485"
            >https://juejin.cn/post/6844903962257129485</a
          >
          <a href="https://hackmd.io/@Jung/H1H3ErwUI"
            >https://hackmd.io/@Jung/H1H3ErwUI</a
          >
          <p class="fz28">1.事件</p>
          <p class="fz28">2.物件</p>
          <p class="fz28">3.函數表達式</p>
          <p class="fz28">4.回調函數</p>
          <p class="fz28">5.函數返回值</p>
          <p class="fz28">6.模仿塊及作用域 IIFE</p>
          <div id="twofunction006" class="articleCardTitle cor36 fz34">
            2.6 箭頭函數 -> 更適用於本來需要匿名函數的地方
          </div>
          <p class="fz28">箭頭函數 和 普通function區別</p>
          <p class="fz28">
            在執行過程中不會初始化this, 也不會初始化aruguments, 它不能被new,
            沒有prototype, 它不能當成構造函數執行
          </p>
          <br />
          <br />
          <p class="fz28">另外 1. 箭頭函式可作為物件的方法使用</p>
          <br />
          <p class="fz28">
            2. 箭頭函式(arrow function)的 this 不因為使用 call() / apply() /
            bind() 方法而被修改
          </p>
          <div class="dis">
            <div class="bgcVS">
              <div>
                <span class="function">const </span>
                <span class="word">fn</span> <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="pTwo">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="number">123</span>
                <span class="brackets">)</span>
              </div>
              <div class="brackets">}</div>
            </div>
            <div class="bgcVSMid">></div>
            <div class="bgcVS">
              <div>
                <span class="function">const </span>
                <span class="word">fn</span> <span class="then">=</span>
                <span class="brackets">()</span>
                <span class="function">=></span> <span class="brackets">{</span>
              </div>
              <div class="pTwo">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="number">123</span>
                <span class="brackets">)</span>
              </div>
              <div class="brackets">}</div>
              <br />
              <br />
              <div>
                <span class="function">const </span>
                <span class="word">fn</span> <span class="then">=</span>
                <span class="brackets">(</span> <span class="word">x</span>
                <span class="brackets">)</span>
                <span class="function">=></span>
                <span class="brackets">{ </span>
                <span class="comment">// 這裡接形參</span>
              </div>
              <div class="pTwo">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">x</span>
                <span class="brackets">)</span>
              </div>
              <div class="brackets">}</div>
              <div>
                <span class="word">fn</span> <span class="brackets">(</span>
                <span class="number">1</span> <span class="brackets">)</span>
                <span class="comment">// 這裡放實參</span>
              </div>
              <br />
              <br />
              <span class="comment">// 只有一個形參 可省略小括號</span>

              <div>
                <span class="function">const </span>
                <span class="word">fn</span> <span class="then">= </span>
                <span class="word">x </span>
                <span class="function">=></span>
                <span class="brackets">{ </span>
              </div>
              <div class="pTwo">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">x</span>
                <span class="brackets">)</span>
              </div>
              <div class="brackets">}</div>
              <div>
                <span class="word">fn</span> <span class="brackets">(</span>
                <span class="number">1</span> <span class="brackets">)</span>
                <span class="comment">// 這裡放實參</span>
              </div>
              <span class="comment"
                >// 沒有形參 或 2 個形參 不可省略小括號</span
              >

              <br />
              <br />
              <div class="comment">
                // 只有一個語句 可省略大括號 並自動做為返回值被返回
              </div>
              <div class="comment">// ( 只有一行代碼 )</div>

              <div>
                <span class="function">const </span>
                <span class="word">fn</span> <span class="then">= </span>
                <span class="word">x </span>
                <span class="function">=> </span>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">x</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="word">fn</span> <span class="brackets">(</span>
                <span class="number">1</span> <span class="brackets">)</span>
                <span class="comment">// 要先聲明在調用</span>
              </div>
              <br />
              <br />
              <span class="comment">// 只有一個形參 可省略小括號</span>

              <div>
                <span class="function">const </span>
                <span class="word">fn</span> <span class="then">= </span>
                <span class="word">x </span>
                <span class="function">=></span>
                <span class="brackets">{ </span>
              </div>
              <div class="pTwo">
                <span class="then">return </span>
                <span class="word">x </span>
                <span class="then">+ </span>
                <span class="word">x </span>
              </div>
              <div class="brackets">}</div>
              <div>
                <span class="word">fn</span> <span class="brackets">(</span>
                <span class="number">1</span> <span class="brackets">)</span>
                <span class="comment">// 2</span>
              </div>
              <br />
              <br />
              <span class="comment"
                >// 如果在一行裡面可以省 return & 大括號</span
              >

              <div>
                <span class="function">const </span>
                <span class="word">fn</span> <span class="then">= </span>
                <span class="word">x </span>
                <span class="function">=></span>
                <span class="word">x </span>
                <span class="then">+ </span>
                <span class="word">x </span>
              </div>
              <div>
                <span class="word">fn</span> <span class="brackets">(</span>
                <span class="number">1</span> <span class="brackets">)</span>
                <span class="comment">// 2</span>
              </div>
              <br />
              <br />
              <div class="comment">// 可以直接返回一個物件</div>
              <div class="comment">// 注意! 物件和函數都是 {}</div>
              <div class="comment">// 直接 ( { 物件 } )</div>

              <div>
                <span class="function">const </span>
                <span class="word">fn</span> <span class="then">= </span>
                <span class="brackets">(</span> <span class="word">uname</span>
                <span class="brackets">)</span>
                <span class="function">=></span>
                <span class="brackets">( {</span>
                <span class="word">name: uname</span>
                <span class="brackets">} )</span>
              </div>
              <div>
                <span class="function">const </span>
                <span class="word">fn</span> <span class="then">= </span>
                <span class="brackets">(</span> <span class="word">uname</span>
                <span class="brackets">)</span>
                <span class="function">=></span>
                <span class="brackets">( {</span>
                <span class="word">uname: uname</span>
                <span class="brackets">} )</span>
              </div>

              <div>
                <span class="word">fn</span> <span class="brackets">(</span>
                <span class="src">"wayne"</span> <span class="brackets">)</span>
              </div>
              <br />
              <br />
            </div>
          </div>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">form</span> <span class="then">=</span>
              <span class="word">document.querySelector</span>
              <span class="brackets">(</span> <span class="src">"form"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">form.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click",</span>
              <span class="function">function</span>
              <span class="brackets">(e){</span>
            </div>
            <div class="pTwo">
              <span class="word">e.preventDefault</span>
              <span class="brackets">()</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">form.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click",</span>
              <span class="word">ev</span> <span class="function">=></span>
              <span class="word">ev.preventDefault</span>
              <span class="brackets">())</span>
            </div>
          </div>
          <p class="fz28">結論</p>
          <p class="fz28">1. 箭頭屬於表達式函數, 不存在函數提升</p>
          <p class="fz28">2. 只有一個形參 可省略小括號 ( )</p>
          <p class="fz28">
            3. 只有一個語句 (一行代碼) 可省略大括號 { } 並自動做為返回值被返回
          </p>
          <p class="fz28">4. 加括號 ( ) 的函數體 返回 物件字面量 表達式</p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz34">箭頭函數參數</div>
          <p class="fz28">箭頭函數 沒有 arguments 動態參數</p>
          <p class="fz28">有 剩餘參數 ...args</p>
          <div class="bgcVS">
            <div class="comment">// 利用箭頭函數來求和</div>
            <div>
              <span class="function">const </span>
              <span class="word">getSum</span> <span class="then">=</span>
              <span class="brackets">(</span> <span class="word">...arr</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="brackets">{</span>
            </div>
            <div class="pTwo">
              <span class="function">let </span> <span class="word">sum</span>
              <span class="then">=</span> <span class="number">0</span>
            </div>
            <div class="pTwo">
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">let </span> <span class="word">i</span>
              <span class="then">=</span> <span class="number">0</span>
              <span class="then">;</span> <span class="word">i</span>
              <span class="then">＜</span> <span class="word">arr.length</span>
              <span class="then">;</span> <span class="word">i</span>
              <span class="then">++</span> <span class="brackets">){</span>
            </div>
            <div class="pFou">
              <span class="word">sum</span> <span class="then">+=</span>
              <span class="word">arr</span> <span class="brackets">[</span>
              <span class="word">i</span> <span class="brackets">]</span>
            </div>
            <div class="pTwo brackets">}</div>
            <div class="pTwo">
              <span class="then">return </span> <span class="word">sum</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">getSum</span> <span class="brackets">(</span>
              <span class="number">2,3</span> <span class="brackets">)</span>
            </div>
          </div>
          <div class="articleCardTitle cor36 fz34">箭頭函數 this</div>
          <p class="fz28">箭頭函數的this指向哪裡?</p>
          <p class="fz28">外部的this or (捕獲其上下文中的this)</p>
          <p class="fz28">
            箭頭函數不創建 this , 他從自己的作用域鏈的上一層沿用 this
          </p>

          <div class="bgcVS">
            <div class="comment">
              // 以前學this指向:誰調用的這個函數,this就指向誰
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//window</span>
            </div>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//window</span>
            </div>
            <div class="brackets">}</div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="pTwo">
              <span class="word">uname:</span> <span class="src">"wayne"</span>
            </div>

            <div class="pTwo">
              <span class="word">sayHi:</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="pFou">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">// obj</span>
            </div>
            <div class="brackets pTwo">}</div>

            <div class="brackets">}</div>
            <div>
              <span class="word">obj.sayHi</span>
              <span class="brackets">()</span>
            </div>

            <div class="comment">// sayHi() 是 obj 調用的</div>
            <div class="comment">// this 指向 obj</div>

            <br />
            <br />
            <div class="comment">// 箭頭 this指向 上一層作用域的 this 指向</div>
            <div>
              <span class="function">const </span> <span class="word">fn</span>
              <span class="then">=</span> <span class="brackets">()</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//window</span>
            </div>
            <div class="brackets">}</div>
            <span class="word">fn</span> <span class="brackets">()</span>

            <br />
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="pTwo">
              <span class="word">uname:</span> <span class="src">"wayne"</span>
            </div>
            <div class="pTwo">
              <span class="word">sayHi:</span>
              <span class="brackets">()</span>

              <span class="function">=> </span>
              <span class="brackets">{</span>
            </div>
            <div class="pFou">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">// window</span>
            </div>
            <div class="comment pFou">// 1. { 裡面沒有 this }</div>
            <div class="comment pFou">// 2. 往上一層 作用域找</div>
            <div class="comment pFou">
              // 3. obj.sayHi() 是 window.obj.sayHi()
            </div>
            <div class="comment pFou">// . 是window來調用的</div>
            <div class="comment pFou">// this 指向 window</div>

            <div class="brackets pTwo">}</div>

            <div class="brackets">}</div>
            <div>
              <span class="word">obj.sayHi</span>
              <span class="brackets">()</span>
            </div>
            <br />
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="pTwo">
              <span class="word">uname:</span> <span class="src">"wayne"</span>
            </div>

            <div class="">
              <div class="pTwo">
                <span class="word">sayHi:</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="pFou">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="then">this</span>
                <span class="brackets">)</span>
                <span class="comment">// obj</span>
              </div>
              <div class="pFou">
                <span class="function">let </span> <span class="word">i</span>
                <span class="then">=</span> <span class="number">10</span>
              </div>

              <div class="">
                <div class="pFou">
                  <span class="function">const </span>
                  <span class="word">count</span> <span class="then">=</span>
                  <span class="brackets">()</span>
                  <span class="function">=></span>
                  <span class="brackets">{</span>
                </div>
                <div class="pSix">
                  <span class="word">console.</span>
                  <span class="variable">log</span>
                  <span class="brackets">(</span> <span class="then">this</span>
                  <span class="brackets">)</span>
                  <span class="comment">// obj</span>
                </div>
                <div class="brackets pFou">}</div>
                <div class="pFou">
                  <span class="word">count</span>
                  <span class="brackets">()</span>
                </div>
              </div>

              <div class="brackets pTwo">}</div>
            </div>

            <div class="brackets">}</div>
            <div>
              <span class="word">obj.sayHi</span>
              <span class="brackets">()</span>
            </div>

            <br />
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="pTwo">
              <span class="word">uname:</span> <span class="src">"wayne"</span>
            </div>

            <div class="bor1">
              <span class="comment">// 這層函數 this 指向他的調用者 obj</span>

              <div class="pTwo">
                <span class="word">sayHi:</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="pFou">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="then">this</span>
                <span class="brackets">)</span>
                <span class="comment">// obj</span>
              </div>
              <div class="pFou">
                <span class="function">let </span> <span class="word">i</span>
                <span class="then">=</span> <span class="number">10</span>
              </div>

              <div class="bor2">
                <span class="comment">// 這層沒有 this 往上一層找 ^</span>
                <div class="pTwo">
                  <span class="function">const </span>
                  <span class="word">count</span> <span class="then">=</span>
                  <span class="brackets">()</span>
                  <span class="function">=></span>
                  <span class="brackets">{</span>
                </div>
                <div class="pFou">
                  <span class="word">console.</span>
                  <span class="variable">log</span>
                  <span class="brackets">(</span> <span class="then">this</span>
                  <span class="brackets">)</span>
                  <span class="comment">// obj</span>
                </div>
                <div class="brackets pTwo">}</div>
                <div class="pTwo">
                  <span class="word">count</span>
                  <span class="brackets">()</span>
                </div>
              </div>

              <div class="brackets pTwo">}</div>
            </div>

            <div class="brackets">}</div>
            <div>
              <span class="word">obj.sayHi</span>
              <span class="brackets">()</span>
            </div>
            <br />
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">btn</span> <span class="then">=</span>
              <span class="word">document.querySelector</span>
              <span class="brackets">(</span> <span class="src">".btn"</span>
              <span class="brackets">)</span>
            </div>
            <span class="comment">//普通函數指DOM對象</span>

            <div>
              <span class="word">btn.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click",</span>
              <span class="function">function</span>
              <span class="brackets">(){</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">// btn</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="comment">// 箭頭函數 此時 this 指向 window</span>
            </div>

            <div>
              <span class="word">btn.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click",</span>
              <span class="brackets">()</span>
              <span class="function">=> </span>
              <span class="brackets">{</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">// window</span>
            </div>
            <div class="brackets">})</div>
          </div>

          <p class="fz28">
            箭頭函式(arrow function)的 this 不因為使用 call() / apply() / bind()
            方法而被修改
          </p>
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
.bor1 {
  border: 6px solid #c4c4c4;
  display: inline-block;
  padding-right: 15px;
  padding: 50px 50px 50px 50px;
}

.bor2 {
  border: 6px solid #838181;
  display: inline-block;
  padding-right: 15px;
  margin-left: 50px;
  padding: 50px 50px 50px 50px;
}

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
  background-color: rgba(0, 0, 0, 0.7);
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
