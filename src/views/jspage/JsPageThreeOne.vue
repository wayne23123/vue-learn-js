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
          <div @click="locate('scope001')" class="leftNavText">局部作用域</div>
          <div @click="locate('scope002')" class="leftNavText">全局作用域</div>
          <div @click="locate('scope003')" class="leftNavText">作用域鏈</div>
          <div @click="locate('scope004')" class="leftNavText">
            JS垃圾回收機制
          </div>
          <div @click="locate('scope005')" class="leftNavText">閉包</div>
          <div @click="locate('scope006')" class="leftNavText">變量提升</div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
        <div class="mainLayout">
          <br />
          <br />
          <p class="fz28">總分總</p>
          <p class="fz28">1.要講哪個知識點</p>
          <p class="fz28">2.細講</p>
          <p class="fz28">3.總結</p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz34">1. 作用域</div>
          <p class="fz28">作用域 scope 規定了變量能夠被訪問的"範圍" ,</p>
          <br /><br />
          <p class="fz28">離開這個"範圍"變量便不能被訪問。</p>

          <br /><br />
          <div id="scope001" class="articleCardTitle cor36 fz34">
            1.1 局部作用域
          </div>
          <p class="fz28">
            在函數內部聲明的變量只能在函數內部被訪問，外部無法直接訪問。
          </p>

          <br /><br />
          <div class="bgcVS fz30">
            <br /><br />
            <div>
              <span class="function">function </span>
              <span class="word">getSun</span> <span class="brackets">(){</span>
            </div>
            <div class="pTwo">
              <span class="function">const </span>
              <span class="word">num</span> <span class="then">=</span>
              <span class="number">10</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">num</span> <span class="brackets">) </span>
              <span class="comment">// 報錯函數外部不能使用局部作用域變量</span>
            </div>
            <br /><br />
          </div>
          <br /><br />
          <p class="fz28">結論</p>
          <p class="fz28">1.函數內部聲明變量, 外部無法訪問</p>
          <p class="fz28">2.函數的參數也是函數內部的局部變量</p>
          <p class="fz28">3.不同函數內部聲明的變量無法互相訪問</p>
          <p class="fz28">4.函數執行完, 函數內部的變量實際被清空了</p>
          <br /><br /><br />
          <br />
          <div class="articleCardTitle cor36 fz34">1.2 塊作用域</div>
          <p class="fz28">
            在 JS 中用 {} 包裹為代碼塊, 代碼塊內部聲明變量外部 "有可能"
            無法被訪問
          </p>
          <br /><br />

          <div class="bgcVS fz30">
            <br /><br />
            <div>
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">let </span> <span class="word">i</span>
              <span class="then">=</span> <span class="number">1</span>
              <span class="then">;</span> <span class="word">i</span>
              <span class="word">＜=</span> <span class="number">3</span>
              <span class="then">;</span> <span class="word">i</span>
              <span class="then">++</span> <span class="brackets">){</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">i</span> <span class="brackets">)</span>
              <span class="comment">//塊作用域 // 依序打印 1 2 3</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">i</span> <span class="brackets">)</span
              ><span class="comment">// undefined</span>
            </div>
            <br /><br />
            <div class="comment">var 沒塊級作用域</div>
            <br /><br />
            <div>
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">var </span> <span class="word">i</span>
              <span class="then">=</span> <span class="number">1</span>
              <span class="then">;</span> <span class="word">i</span>
              <span class="word">＜=</span> <span class="number">3</span>
              <span class="then">;</span> <span class="word">i</span>
              <span class="then">++</span> <span class="brackets">){</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">i</span> <span class="brackets">)</span>
              <span class="comment">//塊作用域 // 依序打印 1 2 3</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">i</span> <span class="brackets">)</span
              ><span class="comment">// 4</span>
            </div>
            <br />
            <br />
            <div class="comment">if() while() 也有塊級作用域</div>
            <br /><br />
            <div>
              <span class="then">if </span> <span class="brackets">(</span>
              <span class="word">true</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo">
              <span class="word">let </span>
              <span class="variable">i</span> <span class="then">=</span>
              <span class="number">10</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">i</span> <span class="brackets">)</span
              ><span class="comment">// undefined</span>
            </div>
          </div>
          <br /><br />
          <p class="fz28">結論</p>
          <p class="fz28">1.let const 聲明的變量產生塊級作用域, var沒有塊級</p>
          <p class="fz28">2.不同代碼塊之間的變量無法互相訪問</p>
          <br /><br />
          <div id="scope002" class="articleCardTitle cor36 fz34">
            1.2 全局作用域
          </div>
          <p class="fz28">script標籤的最外層 就是 全局作用域</p>
          <p class="fz28">全局作用域聲明變量, 任何其他作用域都可以被訪問</p>
          <br /><br />
          <div id="scope003" class="articleCardTitle cor36 fz34">
            1.3 作用域鏈
          </div>
          <p class="fz28">就近原則: 誰離我近找誰</p>
          <br /><br />
          <p class="cor36 fz32">作用域鏈 是 變量查找機制</p>
          <br /><br />
          <p class="fz28">函數執行, 優先找當前函數作用域中 找變量</p>
          <p class="fz28">
            當前作用域找不到 . > . 依次逐級找 父級作用域 直到全局作用域
          </p>
          <br /><br />
          <p class="fz28">總結:</p>
          <p class="fz28">作用域鏈像鍊子一樣, 按照從小到大查找</p>
          <br /><br />
          <div id="scope004" class="articleCardTitle cor36 fz34">
            1.4 垃圾回收機制 ( Garbage Collection )
          </div>
          <p class="fz28">
            JS 內存的分配和回收自動完成, 內存在不使用時被垃圾回收機制回收
          </p>
          <br /><br />
          <p class="cor36 fz28">內存生命週期</p>
          <p class="fz28">
            1. 內存分配: 當聲明變量 、 函數 、 物件, 系統自動分配內存
          </p>
          <p class="fz28">2. 內存使用: 讀寫內存, 使用變量、函數</p>
          <p class="fz28">3. 內存回收: 使用完, 垃圾回收器 回收不再使用的內存</p>
          <br /><br />
          <p class="fz28">全局變量不回收 ( 直到頁面關閉 )</p>
          <p class="fz28">局部變量的值, 不用了, 自動回收掉</p>
          <br /><br />
          <p class="fz28 cor36"># 內存洩漏</p>
          <p class="fz28">程序中分配的內存 由於某種原因 未釋放 or 無法釋放</p>
          <br /><br />
          <p class="fz28">堆棧空間分配</p>
          <p class="fz28">1.棧 stack</p>
          <p class="fz28">基本數據類型, 系統自動分配 自動釋放</p>
          <br /><br />
          <p class="fz28">2.堆 heap</p>
          <p class="fz28">
            複雜數據類型, 由程序員分配釋放, 若不釋放 則 由垃圾回收機制回收
          </p>
          <br /><br />
          <p class="fz28 cor36"># 引用計數法</p>
          <p class="fz28">看一個對象 是否有 指向它的引用, 沒有就回收對象</p>
          <br /><br />
          <p class="fz28">1. 跟蹤紀錄被引用的次數</p>
          <p class="fz28">2. 被引用 1 次就 ++</p>
          <p class="fz28">3. 減少 1 個引用就 --</p>
          <p class="fz28">4. 引用次數 0 則 釋放內存</p>
          <br /><br />
          <p class="fz28">const arr = [ 1, 2, 3, 4 ]</p>
          <p class="fz28">
            arr -> (stack) 0x1111 --counter++-> (heap) [ 1, 2, 3, 4 ]
          </p>
          <br /><br />
          <p class="fz28">arr = null</p>
          <p class="fz28">arr -> (stack) null 不指向 heap</p>
          <p class="fz28">[ 1, 2, 3, 4 ] 的被引用次數變為 0 回收</p>
          <br /><br />
          <p class="fz28 cor36"># 引用計數 缺點</p>
          <p class="fz28 cor36">嵌套引用 (循環引用)</p>
          <p class="fz28">
            兩個物件 相互引用 . . . 儘管不再用, 不會回收, 而內存洩漏
          </p>
          <br /><br />
          <p class="fz20">現代瀏覽器 不用 引用計數</p>
          <br /><br />
          <div class="bgcVS fz30">
            <br /><br />
            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>
            <div class="pTwo">
              <span class="function">let </span> <span class="word">obj1</span>
              <span class="then">=</span> <span class="brackets">{}</span>
            </div>
            <div class="pTwo">
              <span class="function">let </span> <span class="word">obj2</span>
              <span class="then">=</span> <span class="brackets">{}</span>
            </div>
            <div class="pTwo">
              <span class="word">obj1.a</span> <span class="then">=</span>
              <span class="word">obj2</span>
            </div>
            <div class="pTwo">
              <span class="word">obj2.a</span> <span class="then">=</span>
              <span class="word">obj1</span>
            </div>
            <div class="brackets">}</div>
            <br /><br />
          </div>
          <br /><br />

          <p class="fz28 cor36"># 標記清除法</p>
          <p class="fz28">
            將 "不再使用的對象" 定義為 "無法到達的對象" -> (我找不到你)
          </p>
          <br /><br />
          <p class="fz28">1. 從根部 (全局對象) 出發定期掃描內存中對象</p>
          <p class="fz28">2. 從根部出發找不到的對象就標記為 不再使用 回收</p>
          <br />
          <br />
          <div id="scope005" class="articleCardTitle cor36 fz34">
            1.5 閉包 ( closure )
          </div>
          <p class="fz28">
            一個函數對周圍狀態的引用綑綁在一起,
            內層函數中訪問到其外層函數的作用域
          </p>
          <p class="fz28 cor36">閉包 = 內層函數 + 外層函數的變量</p>
          <br />
          <br />
          <div class="dis">
            <div class="bgcVS fz30">
              <br />
              <br />
              <div>
                <span class="function">function </span>
                <span class="word">outer</span>
                <span class="brackets">(){</span>
              </div>
              <div class="pTwo">
                <span class="function">let </span> <span class="word">a</span>
                <span class="then">=</span> <span class="number">10;</span>
              </div>
              <div class="pTwo">
                <span class="function">function </span>
                <span class="word">fn</span> <span class="brackets">(){</span>
              </div>
              <div class="pFou">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">a</span>
                <span class="brackets">)</span>
              </div>
              <div class="brackets pTwo">}</div>
              <div class="pTwo">
                <span class="then">return </span>
                <span class="word">fn</span>
              </div>
              <div class="brackets">}</div>
              <br />
              <div>
                <span class="word">outer</span>
                <span class="brackets">()</span> <span class="then">===</span>
                <span class="word">fn</span>
                <span class="then">===</span>
                <span class="function">function </span>
                <span class="word">fn</span> <span class="brackets">(){}</span>
              </div>
              <br />
              <div>
                <span class="function">const </span>
                <span class="word">fun</span> <span class="then">=</span>
                <span class="function">function </span>
                <span class="word">fn</span> <span class="wbrackets">(){}</span>
              </div>
              <br />
              <div>
                <span class="function">const </span>
                <span class="word">fun</span> <span class="then">=</span>
                <span class="word">outer</span> <span class="brackets">()</span>
              </div>
              <div>
                <span class="word">fun</span> <span class="brackets">() </span>
                <span class="comment">// 調用函數 </span
                ><span class="comment">// 10</span>
              </div>
              <div class="comment">
                // 實現外部函數 使用 outer 函數 內部的變量
              </div>
              <br />

              <br />
              <p>另外 return 也可以這樣寫</p>
              <div>
                <span class="function">function </span>
                <span class="word">fn</span> <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="function">let </span> <span class="word">a</span>
                <span class="then">=</span> <span class="number">0</span>
                <div>
                  <span class="then">return </span>
                  <span class="function">function </span>
                  <span class="brackets">(){</span>
                </div>

                <div></div>
                <div class="padTwo VSL">
                  <span class="word">a</span> <span class="then">++</span>
                  <div>
                    <span class="word">console</span>
                    <span class="variable">.log</span>
                    <span class="brackets">(</span> <span class="word">a</span>
                    <span class="brackets">)</span>
                  </div>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
              <div><span class="brackets">}</span></div>
              <div>
                <span class="function">let </span> <span class="word">f</span>
                <span class="then">=</span> <span class="word">fn</span>
                <span class="brackets">() </span
                ><span class="comment">//</span> <span class="word">外部</span>
                <span class="word">fn</span>
                <span class="word">只是一開始創建閉包時</span>
                <span class="then">,</span> <span class="word">執行一次</span>
              </div>
              <div>
                <span class="word">f</span> <span class="brackets">() </span
                ><span class="comment">//</span>
                <span class="word">後面每次執行</span>
                <span class="then">return </span>
                <span class="word">後的</span>
                <span class="function">function </span>
              </div>
              <div>
                <span class="word">f</span> <span class="brackets">() </span
                ><span class="comment">//</span>
                <span class="word">後面每次執行</span>
                <span class="then">return </span>
                <span class="word">後的</span>
                <span class="function">function </span>
              </div>
            </div>

            <div class="bgcVSMid">></div>

            <div class="bgcVS fz30">
              <br />
              <br />
              <div>
                <span class="function">function </span>
                <span class="word">outer</span>
                <span class="brackets">(){</span>
              </div>
              <div class="pTwo">
                <span class="function">let </span> <span class="word">a</span>
                <span class="then">=</span> <span class="number">10;</span>
              </div>
              <div class="pTwo">
                <span class="function">return function </span>
                <span class="word">fn</span> <span class="brackets">(){</span>
              </div>
              <div class="pFou">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">a</span>
                <span class="brackets">)</span>
              </div>
              <div class="brackets pTwo">}</div>
              <div class="brackets">}</div>
              <br />

              <br />
              <div>
                <span class="function">const </span>
                <span class="word">fun</span> <span class="then">=</span>
                <span class="word">outer</span> <span class="brackets">()</span>
              </div>
              <div>
                <span class="word">fun</span> <span class="brackets">() </span>
                <span class="comment">// 調用函數 </span
                ><span class="comment">// 10</span>
              </div>
              <div class="comment">
                // 實現外部函數 使用 outer 函數 內部的變量
              </div>
              <br />
              <br />
            </div>
          </div>
          <br />
          <br />
          <p class="fz28 cor36"># 作用</p>
          <p class="fz28">封閉數據, 提供操作, 外部也可以訪問函數內部的變量</p>
          <br />
          <br />
          <p class="fz28"># 應用</p>
          <p class="fz28">實現數據私有</p>
          <p class="fz28">比如 統計函數調用次數</p>
          <br />
          <br />
          <div class="bgcVS fz30">
            <br />
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">count</span> <span class="brackets">(){</span>
            </div>
            <div class="pTwo">
              <span class="function">let </span> <span class="word">i</span>
              <span class="then">=</span> <span class="number">0</span>
            </div>
            <div class="pTwo">
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>
            <div class="pFou">i++</div>
            <div class="pFou">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">i</span> <span class="brackets">)</span>
            </div>
            <div class="brackets pTwo">}</div>
            <div class="pTwo">
              <span class="then">return </span>
              <span class="word">fn</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="function">const </span>
              <span class="word">fun</span> <span class="then">=</span>
              <span class="word">count</span> <span class="brackets">()</span>
            </div>
            <br />
            <div class="number">Q1: 裡面的 i 會被回收嗎?</div>
            <br />
            <div class="number">global > fun > fn() > i++ > let i</div>
            <div class="number">i 不會被回收</div>
            <div class="number">內存洩漏</div>

            <br />
            <br />
          </div>
          <br />
          <br />
          <div id="scope006" class="articleCardTitle cor36 fz34">
            1.6 變量提升 ( Hoisting )
          </div>
          <p class="fz28">變數提升是指變數在其宣告之前已經可以使用</p>
          <p class="fz28">只提升聲明 , 不賦值</p>

          <br />
          <p class="fz28">把所有 var 聲明的變量提升到當前作用域的最前面</p>
          <p class="fz28">只提升聲明 , 不賦值</p>
          <br />
          <br />
          <p class="fz28 comment">var num</p>
          <p class="fz28">console.log( num ) . . . // undefined</p>
          <p class="fz28">var num = 10</p>
          <p class="fz28">console.log( num ) . . . // 10</p>
          <br />
          <br />
          <p class="fz28">function fn() {</p>
          <p class="fz28 comment pTwo">var num</p>
          <p class="fz28 pTwo">console.log( num ) . . . // undefined</p>
          <p class="fz28 pTwo">var num = 10</p>
          <p class="fz28 pTwo">console.log( num ) . . . // 10</p>
          <p class="fz28">}</p>

          <br />
          <br />
          <p class="fz28">用 let 或 const 宣告的變量和常量不會被提升</p>
          <br />
          <br />
          <p class="fz28">注意:</p>
          <p class="fz28">1.變量在未聲明即被訪問時會報錯</p>
          <p class="fz28">2.變量在var聲明之前被訪問, 值為 undefined</p>
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
