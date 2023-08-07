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
    <div class="sectionHolderNav"></div>
    <!-- 左邊導航條 -->
    <div class="leftNav">
      <div class="leftNavContainer">
        <div class="leftNavLayout">
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
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
        <div class="mainLayout">
          <p class="cor36">SCSS相比於CSS有那些好處?</p>
          <p>它可以在寫語法時層層包裹, 可以用變量</p>
          <br />
          <br />
          <div id="" class="articleCardTitle cor36">
            [ CSS ] ≫ CSS有幾個單位px,rem,em,vw分別是怎樣?
          </div>
          <p>px是一個像素</p>
          <p>rem是根據根元素(html)</p>
          <p>em當前節點字體大小的倍數</p>
          <p>vw相對於設備視口的寬度</p>
          <br />
          <br />
          <p class="cor36"># 像素是絕對的單位嗎?</p>
          <p>像素是由操作系統和硬件決定的</p>
          <p>一般來說硬件的象素是改變不了的</p>
          <p>但是操作系統可以說你這個硬件我 2 個象素做 1 個象素用</p>
          <br />
          <br />

          <p class="cor36"></p>
          <p></p>
          <br />
          <br />

          <div id="" class="articleCardTitle cor36">[ CSS ] ≫</div>
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
