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
          <div class="articleCardTitle cor36">[ ] ≫</div>

          <p class="cor36"></p>
          <p></p>
          <br />
          <br />

          <div id="" class="articleCardTitle cor36">[ ] ≫</div>
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
