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
          <div class="articleCardTitle cor36 fz34">8.1 事件流</div>
          <p class="fz28">事件流</p>
          <p class="fz28">指事件完整執行過程中的流動路徑</p>
          <br />
          <br />
          <div class="fz30">
            1 <span class="cor17">. . . </span>
            <span class="cor36 pad10 bor"> Document </span>
            <span class="cor17"> . . . </span> 7
          </div>
          <div class="fz30">
            <span class="cor17">. . . </span> ↘
            <span class="cor17">. . . . . . </span> |
            <span class="cor17">. . . . . . . . . . </span> ↖
            <span class="cor17">. . </span> 冒泡階段 由下往上
          </div>
          <div class="fz30">
            <span class="cor17">. . . . . </span>2
            <span class="cor17">. . </span>
            <span class="cor36 pad10 bor"> Element html </span>
            <span class="cor17"> . . . </span> 6
          </div>

          <div class="fz30">
            <span class="cor17">. . . . . . . </span> ↘
            <span class="cor17">. . . . . . </span> |
            <span class="cor17">. . . . . . . . . . </span> ↖
          </div>
          <div class="fz30">
            捕獲階段 <span class="cor17">. . </span> 3
            <span class="cor17">. . </span>
            <span class="cor36 pad10 bor"> Element body </span>
            <span class="cor17"> . . . </span> 5
          </div>
          <div class="fz30">
            由上往下 <span class="cor17"> . . . . </span> ↘
            <span class="cor17">. . . . . . . . </span> |
            <span class="cor17">. . . . . . . . . . </span> ↖
          </div>
          <div class="fz30">
            <span class="cor17">. . . . . . . . . . . . . . </span> ↘
            <span class="cor17">. . . . </span>
            <span class="cor36 pad10 bor"> Element div </span>
            <span class="cor17"> . . . </span> 4
          </div>
          <div class="fz30">
            <span class="cor17">. . . . . . . . . . . . . . . .</span> ↘ → → → →
            → → ↗
          </div>

          <p class="fz28">說明</p>
          <p class="fz28">
            假設頁面裡有 div , 當觸發事件時 , 經歷 "捕獲階段" & "冒泡階段"
          </p>
          <p class="fz28">捕獲 -> 父到子</p>
          <p class="fz28">冒泡 -> 子到父</p>
          <br />
          <p class="fz28">實際開發 冒泡為主</p>
          <br />
          <br />
          <p class="fz34 cor36">事件捕獲</p>
          <p class="fz28">
            從 DOM 的 根元素 開始去執行 對應的 事件 ( 從裡到外 )
          </p>

          <a class="fz28" href="https://codepen.io/wayne23123/pen/gOZbBRw"
            >DEMO @codepen</a
          >

          <p class="fz34 cor36">事件冒泡</p>
          <p class="fz28">
            當一個元素被觸發 , 同樣的事件將會在該元素的所有祖先元素中
            依次被觸發。
          </p>

          <p class="fz28">這過程為冒泡。</p>
          <br />
          <p class="fz28">
            當一元素觸發事件後 , 會 依次 向上調用 所有 父級元素的 同名事件
          </p>

          <a class="fz28" href="https://codepen.io/wayne23123/pen/gOZbBRw"
            >DEMO @codepen</a
          >
          <br />
          <p class="fz34 cor36">阻止冒泡</p>

          <p class="fz28">默認有冒泡模式存在 , 容易導致 事件影像到 父元素</p>
          <br />
          <p class="fz28">需求:</p>
          <p class="fz28">想把事件限制在當前元素 , 需要 阻止 事件 冒泡</p>
          <br />
          <p class="fz28">前提:</p>
          <p class="fz28">阻止事件冒泡 需要拿到 事件對象</p>
          <br />
          <div class="spo fz30">
            <span class="number">事件對象</span>
            <span class="variable">.stopPropagation</span>
            <span class="brackets">()</span>
          </div>

          <a class="fz28" href="https://codepen.io/wayne23123/pen/RwENeBG"
            >DEMO @codepen</a
          >

          <br />
          <br />
          <p class="fz34 cor36">解綁事件</p>

          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">button</span>
              <span class="then">></span> <span class="word">test</span>
              <span class="then">＜/</span> <span class="number">button</span>
              <span class="then">></span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">btn</span> <span class="then">=</span>
              <span class="word">documnet</span>
              <span class="variable">.querySelector</span>
              <span class="brackets">(</span> <span class="src">"button"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">btn</span>
              <span class="variable">.onclick</span>
              <span class="then">=</span> <span class="then">null</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">alert</span> <span class="brackets">(</span>
              <span class="src">"點擊了"</span> <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div><span class="comment">//L0事件移除解綁</span></div>
            <div>
              <span class="word">btn</span>
              <span class="variable">.onclick</span>
              <span class="then">=</span> <span class="then">null</span>
            </div>
            <br />
            <br />
            <p>addEventListener 解綁方式</p>
            <div><span class="comment">//L2事件移除解綁</span></div>

            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">alert</span> <span class="brackets">(</span>
              <span class="src">"點擊了"</span> <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">btn</span>
              <span class="variable">.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click"</span>
              <span class="then">,</span> <span class="word">fn</span>
              <span class="brackets">) </span>
              <span class="comment">//這些回調函數不用(),setTimeout也是</span>
            </div>
            <div>
              <span class="word">btn</span>
              <span class="variable">.removeEventListener</span>
              <span class="brackets">(</span> <span class="src">"click"</span>
              <span class="then">,</span> <span class="word">fn</span>
              <span class="brackets">) </span>
            </div>
            <br />
            <p>匿名函數 無法解綁</p>
          </div>
          <p class="fz28">鼠標經過</p>
          <p class="fz28">mouseover & mouseout 有冒泡效果</p>
          <p class="fz28">mouseenter & mouseleave 沒冒泡 (推薦)</p>
          <div class="articleCardTitle cor36 fz34">8.2 事件委託</div>

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
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>

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
