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
    <!-- 左邊導航條 -->
    <div class="leftNav">
      <div class="leftNavContainer">
        <div class="leftNavLayout">
          <br />
          <!-- <RouterLink to="/js/jsthree">1.作用域</RouterLink> -->
          <div>
            <RouterLink to="/js">1.作用域</RouterLink>
          </div>
          <div>
            <RouterLink to="/js/function">2.函數進階</RouterLink>
          </div>
          <div>
            <RouterLink to="/js/destructuringassignment">3.解構賦值</RouterLink>
          </div>
          <div>
            <RouterLink to="/js/method">4.數組方法</RouterLink>
          </div>
          <div>
            <RouterLink to="/js/object">5.創建物件</RouterLink>
          </div>
          <div>
            <RouterLink to="/js/prototype">6.物件導向</RouterLink>
          </div>
          <div>
            <RouterLink to="/js/tips">7.技巧</RouterLink>
          </div>
          <div>
            <RouterLink to="/js/dom">8.事件</RouterLink>
          </div>
          <div>
            <RouterLink to="/js/ajax">9.AJAX</RouterLink>
          </div>
          <div>
            <RouterLink to="/js/other">10.其他</RouterLink>
          </div>
          <div>
            <RouterLink to="/js"></RouterLink>
          </div>
          <div>
            <RouterLink to="/js"></RouterLink>
          </div>
          <div>
            <RouterLink to="/js"></RouterLink>
          </div>
          <div>
            <RouterLink to="/js"></RouterLink>
          </div>
          <div>
            <RouterLink to="/js"></RouterLink>
          </div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
        <div class="mainLayout">
          <router-view />
        </div>
      </div>
    </div>
  </section>
  <!-- <div>
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
  </div> -->
</template>

<style scoped>
a.router-link-exact-active {
  color: #36c1cb;
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
</style>
