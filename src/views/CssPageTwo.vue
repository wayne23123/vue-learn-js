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
    <!-- 左邊導航條 -->
    <div class="leftNav">
      <div class="leftNavContainer">
        <div class="leftNavLayout">
          <br />

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
          <div id="" class="articleCardTitle cor36">[ CSS ] ≫ 樣式的順序</div>
          <p>有如下代碼，請問HTML代碼中"文本"最終渲染出的顏色分別是？</p>
          <br />
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">="</span>
              <span class="word">red</span> <span class="word">blue</span>
              <span class="word">"></span> <span class="word">文本</span>
              <span class="then">＜/</span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">="</span>
              <span class="word">blue</span> <span class="word">red</span>
              <span class="word">"></span> <span class="word">文本</span>
              <span class="then">＜/</span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <div class="brackets">.red { color: red; }</div>
            <div class="brackets">.blue { color: blue; }</div>
          </div>
          <br />
          <br />
          <p>兩個都是藍色。</p>
          <br />
          <p>
            為什麼？CSS的層疊規則裡有一條叫做「後來居上原則」，即兩個相同權值的樣式，如存在相同的聲明屬性，則後者獲勝。
            本題的CSS樣式裡，.blue 和 .red 權值相同，且都聲明了 color 屬性，但
            .blue 在樣式表中位於 .red
            後面的位置，所以當HTML中的同一標籤同時引用這兩個類名時，以 .blue 的
            color 聲明為準，和HTML中的 className 的先後順序無關。
          </p>
          <br />
          <br />

          <p class="cor36"></p>
          <p></p>
          <br />
          <br />

          <!-- <div id="" class="articleCardTitle cor36">[ CSS ] ≫</div>
          <p></p>
          <br />
          <br /> -->
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
  font-size: 1.75em;
  padding: 30px 5px 30px 5px;
}

.cor36 {
  color: #36c1cb;
  font-size: 1.25em;
}
</style>
