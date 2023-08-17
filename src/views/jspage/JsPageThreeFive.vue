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
          <div @click="locate('threeobject001')" class="leftNavText">
            創建物件
          </div>
          <div @click="locate('threeobject002')" class="leftNavText">
            構造函數
          </div>
          <div @click="locate('threeobject003')" class="leftNavText">
            new做了什麼
          </div>
          <div @click="locate('threeobject004')" class="leftNavText">
            實例&靜態成員
          </div>
          <div @click="locate('threeobject005')" class="leftNavText">
            內置構造函數
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
          <div id="threeobject001" class="articleCardTitle cor36 fz34">
            5.1 創建物件
          </div>
          <div class="bgcVS">
            <p>1. 利用對象字面量 創建</p>
            <br />
            <!-- <div>
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

            <div class="brackets">}</div> -->

            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="pTwo">
              <span class="word">uname:</span> <span class="src">"wayne"</span>
            </div>

            <div class="brackets">}</div>
            <br />
            <br />
            <p>2. 利用 new Object 創建</p>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">obj</span>
              <span class="then">= new </span> <span class="word">Object</span>
              <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">obj.name</span> <span class="then">=</span>
              <span class="src">"wayne"</span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">obj</span>
              <span class="then">= new </span> <span class="word">Object</span>
              <span class="brackets">( {</span> <span class="word">name:</span>
              <span class="src">"wayne"</span> <span class="brackets">} )</span>
            </div>
          </div>
          <div id="threeobject002" class="articleCardTitle cor36 fz34">
            5.2 利用 構造函數 創建
          </div>

          <p class="fz28">是一種特殊的 函數 , 用來 初始化 物件</p>
          <br />
          <p class="fz28">1. 是什麼? _ 函數</p>
          <p class="fz28">2. 做什麼? _ 創建物件</p>
          <br />
          <br />
          <p class="fz28">約定 (非強制)</p>
          <p class="fz28">1. 第 1 個字母大寫</p>
          <p class="fz28">2. 只能由 new 操作符</p>
          <div class="bgcVS">
            <p>創建 構造函數</p>
            <br />
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
          </div>
          <p class="fz28">說明</p>
          <p class="fz28">1. 使用 new 調用函數 的行為 叫 實例化</p>
          <p class="fz28">
            2. 實例化 構造函數時 沒有參數 可以省略 ( )
            <span class="comment">不建議省略</span>
          </p>
          <p class="fz28">
            3. 構造函數內部 無需寫 return, 返回值為新創建的物件
          </p>
          <p class="fz28 comment">以前 調用函數 要加 return 才返回給我們</p>
          <p class="fz28">
            4. 構造函數內部的 return 返回的值無效 , 不要寫 return
          </p>
          <p class="fz28">5. new Object() new Date() 也是 實例化構造函數</p>
          <div id="threeobject003" class="articleCardTitle cor36 fz34">
            5.3 new做了什麼?
          </div>
          <p class="fz28">
            :
            new後面跟一個構造函數,先創造一個臨時對象,將這個臨時對象原型綁定構造函數的prototype,再把裡面的this指定為這個臨時對象,再執行構造函數,最後return這個臨時對象
          </p>
          <br />
          <p class="fz28 cor36"># 當我 new 構造函數</p>
          <p class="fz28">1. 創建 新物件 (空的)</p>
          <p class="fz28">2. 構造函數的 this 指向 新物件</p>
          <p class="fz28">3. 執行 構造函數 代碼</p>
          <p class="fz28 pFou">
            this. 指向物件
            <span class="comment">. . . obj.name="wayne"</span>
          </p>
          <p class="fz28 pFou">name屬性 =賦值 "wayne"</p>
          <p class="fz28">4. 返回 這個 新物件</p>
          <div id="threeobject004" class="articleCardTitle cor36 fz34">
            5.4 實例成員 & 靜態成員
          </div>
          <p class="fz28">通過 構造函數創建的 對象 為 實例對象</p>
          <p class="fz28">實例對象中的屬性方法 為 實例成員</p>
          <br />
          <p class="fz28">說明</p>
          <p class="fz28">1. 為構造函數傳入參數, 創建結構相同但值不同的對象</p>
          <p class="fz28">2. 構造函數創建的實例對象彼此獨立互不影響</p>
          <div class="bgcVS">
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
            <!-- <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">new </span> <span class="word">Person</span>
              <span class="brackets">(</span>
              <span class="src">"wayne",</span> <span class="number">123</span>
              <span class="brackets">))</span>
            </div> -->
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
              <span class="function">const </span>
              <span class="word">n</span>

              <span class="then">= new </span>
              <span class="word">Person</span> <span class="brackets">(</span>
              <span class="src">"neo",</span> <span class="number">3</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">p</span>
              <span class="then">=== </span> <span class="word">n</span>
              <span class="brackets">) </span>
              <span class="comment">// false</span>
            </div>
            <br />
            <p>new p 時, 內存開闢了新空間 存放 p 這個新物件</p>
            <p>new n 時, 內存開闢了新空間 存放 n 這個新物件</p>
            <p>所以 2 個物件 在不同位置</p>
            <br />
            <div>
              <span class="word">p.name</span> <span class="then">=</span>
              <span class="src">"jack"</span>
              <span class="comment"> // 實例屬性</span>
            </div>
            <br />
            <p>不影響 n 的 name</p>
            <br />
            <div>
              <span class="word">p.sayHi</span> <span class="then">=</span>
              <span class="brackets">()</span> <span class="function">=></span>
              <span class="brackets">{ </span>
              <span class="comment"> // 實例方法</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="src">"hi"</span> <span class="brackets">)</span>
            </div>
            <div class="brackets">}</div>

            <br />
            <p class="fz28">p 增加 sayHi 方法 不影響 n</p>
          </div>

          <p class="fz28">靜態成員</p>
          <p class="fz28">構造函數的屬性和方法 是 靜態成員</p>
          <p class="fz28">靜態 屬性 & 靜態 方法</p>
          <br />
          <p class="fz28">說明</p>

          <p class="fz28">1. 靜態成員 只能 構造函數來訪問</p>
          <p class="fz28">2. 靜態方法 中的 this 指向 構造函數</p>

          <div class="bgcVS">
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
            <div>
              <span class="word">Person.eyes</span> <span class="then">=</span>
              <span class="number">2 </span>
              <span class="comment">// 靜態屬性</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">Person.eyes</span>
              <span class="brackets">) </span> <span class="comment">// 2</span>
            </div>
            <br />
            <p class="fz28">Math.Pi 就是 Math 這個構造函數 加了 Pi 屬性</p>
            <br />
            <div>
              <span class="word">Person.sayHi</span>
              <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){ </span>
              <span class="comment">// 這邊不要用箭頭函數,因為沒this</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">) </span>
              <span class="comment">// Person // 指向構造函數</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">Person.sayHi</span>
              <span class="brackets">()</span>
            </div>
          </div>

          <div id="threeobject005" class="articleCardTitle cor36 fz34">
            5.5 內置構造函數
          </div>

          <p class="fz28 cor36">
            # 基本數據類型不是物件 為什麼 基本類型可以用方法?
          </p>
          <p class="fz28 cor36"># 為什麼字串可以使用.length?為什麼有方法?</p>
          <p class="fz28">
            在JS底層把基本數據類型包裝成了引用數據類型, 轉成物件,
            物件有屬性和方法, 就可以使用方法了
          </p>

          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">str</span> <span class="then">=</span>
              <span class="word">"wayne"</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">str.length</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div class="comment">// JS底層做包裝</div>
            <div>
              <span class="function">const </span>
              <span class="word">str</span> <span class="then">= new </span>
              <span class="word">String</span> <span class="brackets">(</span>
              <span class="src">"wayne"</span> <span class="brackets">)</span>
            </div>
            <div class="comment">
              // JS底層把簡單數據類型包裝成了引用數據類型
            </div>
          </div>
          <p class="fz28 cor36">Object</p>

          <p class="fz28">
            Object 是內置的 構造函數, 用於創建普通物件 (new Object)
          </p>
          <br />
          <p class="fz28">3 個常用靜態方法</p>
          <p class="fz28">( 靜態方法只有構造函數 Object 可以調用 )</p>
          <br />
          <p class="fz28">Object.values 靜態方法獲取物件中所有屬性值</p>
          <p class="fz28">注意: 返回的是一個數組</p>

          <br />
          <div class="bgcVS">
            <p>想要獲得物件裡面的屬性和值?</p>
            <br />
            <p>之前</p>
            <br />
            <div>
              <span class="function">const </span> <span class="word">o</span>
              <span class="then">=</span> <span class="brackets">{</span>
              <span class="word">name:"wayne",number:</span>
              <span class="number">123</span> <span class="brackets">}</span>
            </div>
            <div>
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">let </span> <span class="word">k </span>
              <span class="function">in </span> <span class="word">o</span>
              <span class="brackets">){</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">k</span> <span class="brackets">) </span>
              <span class="comment">// 屬性 name number</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">o</span> <span class="brackets">[</span>
              <span class="word">k</span> <span class="brackets">]</span>
              <span class="brackets">) </span>
              <span class="comment">// 值 wayne 123</span>
            </div>
            <div class="brackets">}</div>
            <br />
            <br />
            <div>
              <span class="function">const </span> <span class="word">o</span>
              <span class="then">=</span> <span class="brackets">{</span>
              <span class="word">name:"wayne",number:</span>
              <span class="number">123</span> <span class="brackets">}</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="word">Object.keys</span>
              <span class="brackets">(</span> <span class="word">o</span>
              <span class="brackets">)</span>
            </div>
            <div class="comment">// 獲得所有 屬性名</div>

            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="word">Object.keys</span>
              <span class="brackets">(</span> <span class="word">o</span>
              <span class="brackets">)</span>
            </div>
            <div class="comment">// 獲得所有 屬性值</div>

            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">Object.value</span>
              <span class="brackets">(</span> <span class="word">o</span>
              <span class="brackets">)) </span>
              <span class="comment">//["wayne",123]</span>
            </div>
          </div>
          <p class="fz28">Object.assign 靜態方法用於物件拷貝</p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span> <span class="word">o</span>
              <span class="then">=</span> <span class="brackets">{</span>
              <span class="word">name:"wayne",number:</span>
              <span class="number">123</span> <span class="brackets">}</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{}</span>
            </div>
            <div>
              <span class="word">Object.assign</span>
              <span class="brackets">(</span> <span class="word">obj,o</span>
              <span class="brackets">) </span>
              <span class="comment">// (要拷貝的,被拷貝的)</span>
              <span class="comment">// (右 賦值 給 左)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">obj</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <p>可用來新增屬性</p>
            <br />
            <div>
              <span class="word">Object.assign</span>
              <span class="brackets">(</span> <span class="word">o,</span>
              <span class="brackets">{</span>
              <span class="word">gender:"男"</span>
              <span class="brackets">})</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">o</span>
              <span class="brackets">)</span>
            </div>

            <br />
            <p>把一個物件 拷貝到裡面去</p>
          </div>
          <div>
            <RouterLink to="/js/method" class="fz34">Array 方法</RouterLink>
          </div>

          <div id="" class="articleCardTitle cor36 fz34">String 方法</div>

          <p class="fz28">1. 實例屬性 length 獲取字串長度</p>
          <br />

          <p class="fz28">2. 實例方法 split("分隔符") 用來將字串拆分成數組</p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">str</span> <span class="then">=</span>
              <span class="src">"wayne,jack"</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="word">str.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="then">","</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arr</span> <span class="brackets">)</span>
              <span class="comment">//["wayne","jack"]</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">str1</span> <span class="then">=</span>
              <span class="src">"2077-1-1"</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">arr1</span> <span class="then">=</span>
              <span class="word">str1.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="src">"-"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arr</span> <span class="brackets">)</span>
              <span class="comment">//["2077","1","1"]</span>
            </div>
          </div>
          <p class="fz28">
            3. 實例方法 substring (需要擷取的第一個字符的索引[,結束的索引號])
            用於字串擷取
          </p>
          <br />
          <p class="fz28">3.1 省略 結束索引號 默認取到最後</p>
          <p class="fz28">3.2 結束索引號 不包含 想要擷取的部分</p>

          <div class="bgcVS">
            <div>
              <span class="comment"
                >1.裡面幾個參數 2. 返回值返回什麼 3. 使用方法</span
              >
            </div>
            <br />
            <div>
              <span class="word">str.</span>
              <span class="variable">substring</span>
              <span class="brackets">(</span>
              <span class="word">要截的第一個字所引</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="cor36">返回</span>
              <span class="word">擷取的那部分的新字串</span>
            </div>
            <br />

            <div>
              <span class="function">const </span>
              <span class="word">str</span> <span class="then">=</span>
              <span class="src">"waynetestneo"</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">str.</span>
              <span class="variable">substring</span>
              <span class="brackets">(</span> <span class="number">9</span>
              <span class="brackets">)) </span>
              <span class="comment">// neo</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">str.</span>
              <span class="variable">substring</span>
              <span class="brackets">(</span> <span class="number">5 , 9</span>
              <span class="brackets">)) </span>
              <span class="comment">// test</span>
            </div>
          </div>
          <p class="fz28">
            4. 實例方法 startWith (檢測字串[,檢測位置索引號])
            判斷是否以某字符開頭
          </p>

          <p class="fz28">返回 true or false</p>
          <div class="bgcVS">
            <div>
              <span class="comment"
                >1.裡面幾個參數 2. 返回值返回什麼 3. 使用方法</span
              >
            </div>
            <br />
            <div>
              <span class="word">str.</span>
              <span class="variable">starstWith</span>
              <span class="brackets">(</span>
              <span class="word">要搜索的字串</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="word">一定要開頭 </span>
              <span class="comment">＜=> includes 就不用</span>
            </div>
            <p class="fz28">返回 true or false</p>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">str</span> <span class="then">=</span>
              <span class="src">"wayne學JS中"</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">str.</span>
              <span class="variable">startsWith</span>
              <span class="brackets">(</span> <span class="word"></span>
              <span class="src">"yne"</span> <span class="brackets">))</span>
              <span class="comment">//true</span>
            </div>
          </div>
          <p class="fz28">
            5. 實例方法 includes (搜索的字串[,檢測位置索引號])
            判斷一個字串是否包含在另一個字串中
          </p>
          <p class="fz28">返回 true or false</p>
          <div class="bgcVS">
            <div>
              <span class="comment"
                >1.裡面幾個參數 2. 返回值返回什麼 3. 使用方法</span
              >
            </div>
            <br />
            <div>
              <span class="word">str.</span>
              <span class="variable">includes</span>
              <span class="brackets">(</span>
              <span class="word">要搜索的字串</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="word">裡面有就 true </span>
              <span class="comment">＜=> starstWith 一定要開頭</span>
            </div>

            <p class="fz28">返回 true or false</p>
            <p class="fz28">有區分大小寫 false</p>

            <br />
            <div>
              <span class="function">const </span>
              <span class="word">str</span> <span class="then">=</span>
              <span class="src">"我是wayne"</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">str.</span>
              <span class="variable">includes</span>
              <span class="brackets">(</span> <span class="src">"wayne"</span>
              <span class="brackets">) )</span>
              <span class="comment">//true</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">str.</span>
              <span class="variable">includes</span>
              <span class="brackets">(</span> <span class="src">"wayne" </span>
              <span class="number">, 3 </span>

              <span class="brackets">) )</span>
              <span class="comment">//false</span>
            </div>
          </div>

          <p class="fz28">6. 實例方法 toUpperCase 用於將字母轉成大寫</p>
          <br />
          <p class="fz28">7. 實例方法 toLowerCase 用於將字母轉成小寫</p>
          <br />
          <p class="fz28">8. 實例方法 indexOf 檢測是否包含某字符</p>
          <br />
          <p class="fz28">9. 實例方法 endsWith 檢測是否以某字符結尾</p>
          <br />
          <p class="fz28">10. 實例方法 replace 用於替換字串, 支持正則匹配</p>
          <br />
          <p class="fz28">11. 實例方法 match 用於查找字串, 支持正則匹配</p>
          <br />
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">tea</span> <span class="then">=</span>
              <span class="src">"50g的飲料,100g茶葉"</span>
            </div>

            <span class="comment">// 1.把字串轉成數組</span>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="src">","</span>
              <span class="brackets">)) </span>
              <span class="comment">// [ "50g的飲料", "100g茶葉" ]</span>
            </div>
            <span class="comment">// 2. 有幾條數據 我就生成幾個 ＜span></span>
            <div>
              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="src">","</span>
              <span class="brackets">)</span>
              <span class="variable">.map</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="brackets">){ </span>
              <span class="comment">//item是裡面的每一個值</span>
            </div>
            <div class="pTwo">
              <div class="dis">
                <div>
                  <span class="then">return </span>
                  <span class="src">`＜span>贈品</span>
                  <span class="then">${</span> <span class="word">item</span>
                  <span class="then">}</span> <span class="src">＜/span>`</span>
                </div>
                <div class="comment">
                  <span>//贈品50g的飲料</span>
                  <br />
                  <span>//贈品100g茶葉</span>
                </div>
              </div>
            </div>
            <span class="brackets">})</span>
            <div>
              <span class="function">const </span>
              <span class="word">str</span> <span class="then">=</span>

              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="src">","</span>
              <span class="brackets">)</span>
              <span class="variable">.map</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="brackets">){ </span>
            </div>
            <div class="pTwo">
              <div>
                <span class="then">return </span>
                <span class="src">`＜span>贈品</span>
                <span class="then">${</span> <span class="word">item</span>
                <span class="then">}</span> <span class="src">＜/span>`</span>
              </div>
            </div>
            <span class="brackets">})</span>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arr</span> <span class="brackets">) </span>
              <span class="comment"
                >["＜span>贈品50g的飲料＜/span>","＜span>贈品100g茶葉＜/span>"]</span
              >
            </div>
            <br />
            <div class="comment">數組不能直接往盒子加</div>
            <div class="comment">想要改成字串</div>
            <div>
              <span class="function">const </span>
              <span class="word">str</span> <span class="then">=</span>

              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="src">","</span>
              <span class="brackets">)</span>
              <span class="variable">.map</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="brackets">){ </span>
            </div>
            <div class="pTwo">
              <div>
                <span class="then">return </span>
                <span class="src">`＜span>贈品</span>
                <span class="then">${</span> <span class="word">item</span>
                <span class="then">}</span> <span class="src">＜/span>`</span>
              </div>
            </div>
            <div>
              <span class="brackets">})</span
              ><span class="variable">.join</span>
              <span class="brackets">(</span> <span class="src">""</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">str</span> <span class="brackets">)</span>
            </div>
            <span class="comment"
              >＜span>贈品50g的飲料＜/span>＜span>贈品100g茶葉＜/span></span
            >

            <div>
              <span class="word">document.</span>
              <span class="variable">querySelector</span>
              <span class="brackets">(</span> <span class="src">"div"</span>
              <span class="brackets">)</span>
              <span class="variable">.innerHTML</span>
              <span class="then">=</span> <span class="word">str</span>
            </div>
            <br />
            <br />
            <p>轉成箭頭函數</p>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">tea</span> <span class="then">=</span>
              <span class="src">"50g的飲料,100g茶葉"</span>
            </div>
            <br />
            <div>
              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="then">","</span>
              <span class="brackets">)</span>
              <span class="variable">.map</span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="function">=></span>
              <span class="src">`＜span>贈品</span>
              <span class="then">${</span> <span class="word">item</span>
              <span class="then">}</span>
              <span class="src">＜/span>＜br>`</span>
              <span class="brackets">)</span>
              <span class="variable">.join</span>
              <span class="brackets">(</span> <span class="src">""</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="word">document.</span>
              <span class="variable">querySelector</span>
              <span class="brackets">(</span> <span class="word">"div"</span>
              <span class="brackets">)</span>
              <span class="variable">.innerHTML</span>
              <span class="then">=</span>

              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="then">","</span>
              <span class="brackets">)</span>
              <span class="variable">.map</span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="function">=></span>
              <span class="src">`＜span>贈品</span>
              <span class="then">${</span> <span class="word">item</span>
              <span class="then">}</span>
              <span class="src">＜/span>＜br>`</span>
              <span class="brackets">)</span>
              <span class="variable">.join</span>
              <span class="brackets">(</span> <span class="src">""</span>
              <span class="brackets">)</span>
            </div>
          </div>

          <p class="fz28 cor36">Number</p>
          <p class="fz28">1. toFixed() 設置保留小數位的長度</p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">num</span> <span class="then">=</span>
              <span class="number">10.123</span>
            </div>

            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">num.toFixed</span>
              <span class="brackets">()) </span>
              <span class="comment">// 10 // 四捨五入到整數位</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">num.toFixed</span>
              <span class="brackets">(</span> <span class="number">2</span>

              <span class="brackets"> )) </span>
              <span class="comment">// 10.12</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">integer</span> <span class="then">=</span>
              <span class="number">10</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">num.toFixed</span>
              <span class="brackets">(</span> <span class="number">2</span>

              <span class="brackets"> )) </span>
              <span class="comment">// 10.00</span>
            </div>
          </div>
          <p class="fz28">
            2. Math.floor()：無條件捨去，回傳大於所給數字的最小整數
          </p>
          <br />
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
