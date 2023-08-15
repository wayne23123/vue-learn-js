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
          <div @click="locate(scope005)" class="leftNavText">閉包</div>
          <div @click="locate(scope006)" class="leftNavText">變量提升</div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
        <div class="mainLayout">
          <br />
          <p class="fz28">總分總</p>
          <p class="fz28">1.要講哪個知識點</p>
          <p class="fz28">2.細講</p>
          <p class="fz28">3.總結</p>
          <br />
          <div class="articleCardTitle cor36 fz34">1. 作用域</div>
          <p class="fz28">作用域 scope 規定了變量能夠被訪問的"範圍" ,</p>
          <br />
          <p class="fz28">離開這個"範圍"變量便不能被訪問。</p>

          <br />
          <div id="scope001" class="articleCardTitle cor36 fz34">
            1.1 局部作用域
          </div>
          <p class="fz28">
            在函數內部聲明的變量只能在函數內部被訪問，外部無法直接訪問。
          </p>

          <br />
          <div class="bgcVS fz30">
            <br />
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
            <br />
          </div>
          <br />
          <p class="fz28">結論</p>
          <p class="fz28">1.函數內部聲明變量, 外部無法訪問</p>
          <p class="fz28">2.函數的參數也是函數內部的局部變量</p>
          <p class="fz28">3.不同函數內部聲明的變量無法互相訪問</p>
          <p class="fz28">4.函數執行完, 函數內部的變量實際被清空了</p>
          <br />
          <br />
          <div class="articleCardTitle cor36 fz34">1.2 塊作用域</div>
          <p class="fz28">
            在 JS 中用 {} 包裹為代碼塊, 代碼塊內部聲明變量外部 "有可能"
            無法被訪問
          </p>
          <br />

          <div class="bgcVS fz30">
            <br />
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
            <br />
            <div class="comment">var 沒塊級作用域</div>
            <br />
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
            <div class="comment">if() while() 也有塊級作用域</div>
            <br />
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
          <br />
          <p class="fz28">結論</p>
          <p class="fz28">1.let const 聲明的變量產生塊級作用域, var沒有塊級</p>
          <p class="fz28">2.不同代碼塊之間的變量無法互相訪問</p>
          <br />
          <div id="scope002" class="articleCardTitle cor36 fz34">
            1.2 全局作用域
          </div>
          <p class="fz28">script標籤的最外層 就是 全局作用域</p>
          <p class="fz28">全局作用域聲明變量, 任何其他作用域都可以被訪問</p>
          <br />
          <div id="scope003" class="articleCardTitle cor36 fz34">
            1.3 作用域鏈
          </div>
          <p class="fz28">就近原則: 誰離我近找誰</p>
          <br />
          <p class="cor36 fz32">作用域鏈 是 變量查找機制</p>
          <br />
          <p class="fz28">函數執行, 優先找當前函數作用域中 找變量</p>
          <p class="fz28">
            當前作用域找不到 . > . 依次逐級找 父級作用域 直到全局作用域
          </p>
          <br />
          <p class="fz28">總結:</p>
          <p class="fz28">作用域鏈像鍊子一樣, 按照從小到大查找</p>
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
  background-color: rgba(0, 0, 0, 0.5);
  /* color: #36c1cb; */
  color: #a1b6cb;
  display: flex;
  justify-content: center;
  overflow: auto;
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
