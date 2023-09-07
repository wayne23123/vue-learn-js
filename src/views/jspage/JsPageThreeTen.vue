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
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
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
          <div class="articleCardTitle cor36 fz34">set</div>
          <div class="bgcVS">
            <p>先 new 一個 Set</p>
            <div>
              <span class="function">const </span>
              <span class="word">set</span> <span class="then">= new </span>
              <span class="word">Set</span> <span class="brackets">()</span>
            </div>
            <br />
            <div><span class="comment">//往裡面放東西用.add()</span></div>
            <div>
              <span class="variable">set</span>
              <span class="variable">.add</span>
              <span class="brackets">(</span> <span class="number">1</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="variable">set</span>
              <span class="variable">.add</span>
              <span class="brackets">(</span> <span class="number">2</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="variable">set</span>
              <span class="variable">.add</span>
              <span class="brackets">(</span> <span class="number">3</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="variable">set</span>
              <span class="variable">.add</span>
              <span class="brackets">(</span> <span class="number">7</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="comment">//set 能保證 裡面的東西 不重複</span>
            </div>
            <div>
              <span class="comment">//添加重複元素時 他並不會被添加進去 </span>
            </div>
            <div>
              <span class="variable">set</span>
              <span class="variable">.add</span>
              <span class="brackets">(</span> <span class="number">1</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="variable">set</span>
              <span class="brackets">) </span>
              <span class="comment">//{ 1,2,3,7 } //仍然只有 1 個 1</span>
            </div>
            <br />
            <div>
              <span class="comment"
                >//.delete()刪除方法,返回是否有此元素並刪除是否成功(true)</span
              >
            </div>
            <div>
              <span class="variable">set</span>
              <span class="variable">.delete</span>
              <span class="brackets">(</span> <span class="number">1</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="variable">set</span>
              <span class="brackets">) </span>
              <span class="comment">//{ 2,3,7 } </span>
            </div>
            <br />
            <div>
              <span class="comment"
                >//.has()查詢是否有此元素的方法,返回是否有此元素(true)</span
              >
            </div>
            <div>
              <span class="variable">set.has</span>
              <span class="brackets">(</span> <span class="number">2</span>
              <span class="brackets">)</span>
              <span class="comment">//true</span>
            </div>
            <br />
            <div>
              <span class="comment"
                >//.size判斷set裡有多少個元素,返回多少個元素</span
              >
            </div>
            <div>
              <span class="variable">set.size</span>
              <span class="comment">// 3</span>
            </div>
            <br />
            <div>
              <span class="comment">//遍歷可以用 forEach()</span>
            </div>
            <div>
              <span class="variable">set.forEach</span>
              <span class="brackets">(</span> <span class="word">number</span>
              <span class="function">=> </span>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">number</span>
              <span class="brackets">))</span>
            </div>
          </div>
          <div class="articleCardTitle cor36 fz34">map</div>

          <p class="fz28">map 很像 object 也是 key value 配對的形式</p>
          <div class="bgcVS">
            <p>先 new 一個 map</p>
            <div>
              <span class="function">const </span>
              <span class="word">person</span> <span class="then">= new </span>
              <span class="word">Map</span> <span class="brackets">()</span>
            </div>
            <br />
            <div><span class="comment">//往裡面添加東西用.set()</span></div>
            <div>
              <span class="word">person</span>
              <span class="variable">.set</span>
              <span class="brackets">(</span> <span class="src">"name"</span>
              <span class="then">,</span> <span class="src">"wayne"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">person</span>
              <span class="variable">.set</span>
              <span class="brackets">(</span> <span class="src">"age"</span>
              <span class="then">,</span> <span class="number">18</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">person</span>
              <span class="variable">.set</span>
              <span class="brackets">(</span> <span class="src">"hobby"</span>
              <span class="then">,</span> <span class="brackets">[</span>
              <span class="src">"leetcode"</span> <span class="then">,</span>
              <span class="src">"sleep"</span> <span class="brackets">])</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">person</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="comment"
                >//Map(3){"name"=>"wayne","age"=>18,"hobby"=>Array(2)}</span
              >
            </div>
            <br />
            <div>
              <span class="comment">//get()方法,可以用key獲取value的值</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">person</span>
              <span class="variable">.get</span>
              <span class="brackets">(</span> <span class="src">"name"</span>
              <span class="brackets">))</span>
              <span class="comment">//"wayne"</span>
            </div>
            <br />
            <div>
              <span class="comment"
                >//.size判斷map裡有多少個元素,返回多少個元素</span
              >
            </div>
            <div>
              <span class="variable">map.size</span>
              <span class="comment">// 3</span>
            </div>
            <br />
            <div>
              <span class="comment">//has()方法,返回有無這個key</span>
            </div>
            <div>
              <span class="word">person</span> <span class="word">.has</span>
              <span class="brackets">(</span> <span class="src">"age"</span>
              <span class="brackets">)</span>
              <span class="comment">//true</span>
            </div>
            <br />
            <div>
              <span class="comment"
                >//已經有age再添加age,會用新的值去更新舊值</span
              >
            </div>
            <div>
              <span class="word">person</span>
              <span class="variable">.set</span>
              <span class="brackets">(</span> <span class="src">"age"</span>
              <span class="then">,</span> <span class="number">30</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">person</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="comment"
                >//Map(3){"name"=>"wayne","age"=>30,"hobby"=>Array(2)}</span
              >
            </div>
            <br />
            <div>
              <span class="comment"
                >//.delete()刪除方法,返回是否有此元素並刪除是否成功(true)</span
              >
            </div>
            <div>
              <span class="word">person</span>
              <span class="variable">.delete</span>
              <span class="brackets">(</span> <span class="src">"age"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">person</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="comment"
                >//Map(3){"name"=>"wayne","hobby"=>Array(2)}</span
              >
            </div>
            <br />
          </div>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <div class="articleCardTitle cor36 fz34"></div>
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <div class="articleCardTitle cor36 fz34"></div>
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <p class="fz28"></p>
          <br /><br />
          <div class="articleCardTitle cor36 fz34"></div>
          <p class="fz28"></p>
          <br /><br />
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
</style>
