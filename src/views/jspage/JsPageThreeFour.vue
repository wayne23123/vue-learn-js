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
          <div @click="locate('threemethod001')" class="leftNavText">
            forEach
          </div>
          <div @click="locate('threemethod002')" class="leftNavText">
            reduce
          </div>
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
          <br />
          <br />
          <p class="fz28">總分總</p>
          <p class="fz28">1.要講哪個知識點</p>
          <p class="fz28">2.細講</p>
          <p class="fz28">3.總結</p>
          <br />
          <br />
          <table class="fz30">
            <tr class="cor36">
              <th>方法</th>
              <th>作用</th>
              <th>說明</th>
            </tr>
            <tr>
              <td>map</td>
              <td>迭代數組</td>
              <td>
                <span class="cor36">返回</span> 新數組,
                <span class="cor36">返回</span>的是處理之後的數組元素,
                想要使用返回的新數組
              </td>
            </tr>

            <tr>
              <td>forEach</td>
              <td>遍歷數組</td>
              <td>不返回數組, 常用於查找遍歷數組元素</td>
            </tr>
            <tr>
              <td>filter</td>
              <td>過濾數組</td>
              <td>
                <span class="cor36">返回</span>新數組,
                <span class="cor36">返回</span>的是篩選滿足條件的數組元素
              </td>
            </tr>
            <tr>
              <td>reduce</td>
              <td>累計器</td>
              <td><span class="cor36">返回</span>累計處理的結果, 常用於求和</td>
            </tr>
            <tr>
              <td>join</td>
              <td></td>
              <td>數組拼接成字串, <span class="cor36">返回</span> 字串</td>
            </tr>
            <tr>
              <td>find</td>
              <td>查找元素</td>
              <td>
                <span class="cor36">返回</span>符合條件的第一個數組元素值,
                沒有則<span class="cor36">返回</span>undefined
              </td>
            </tr>
            <tr>
              <td>every</td>
              <td></td>
              <td>
                數組所有元素是否都符合條件, 所有都符合<span class="cor36"
                  >返回</span
                >true, 否<span class="cor36">返回</span>false
              </td>
            </tr>
            <tr>
              <td>some</td>
              <td></td>
              <td>
                數組中的元素是否有滿足條件的, 如果有<span class="cor36"
                  >返回</span
                >true, 沒有<span class="cor36">返回</span>false
              </td>
            </tr>
            <tr>
              <td>concat</td>
              <td></td>
              <td>合併 2 個數組, <span class="cor36">返回</span>生成新數組</td>
            </tr>
            <tr>
              <td>sort</td>
              <td></td>
              <td>對原數組單元值排序</td>
            </tr>
            <tr>
              <td>splice</td>
              <td></td>
              <td>刪除或替換原數組單元</td>
            </tr>
            <tr>
              <td>reverse</td>
              <td></td>
              <td>反轉數組</td>
            </tr>
            <tr>
              <td>findIndex</td>
              <td></td>
              <td>查找元素的索引值</td>
            </tr>

            <!-- <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr> -->
          </table>

          <div id="threemethod001" class="articleCardTitle cor36 fz34">
            4. forEach
          </div>
          <p class="fz28">
            forEach() 方法用於調用數組的每個元素, 並將元素傳遞給回調函數
          </p>
          <br />
          <p class="fz28">適合用來遍歷數組對象</p>

          <div class="bgcVS">
            <div>
              <span class="word">被遍歷的數組</span>
              <span class="variable">.forEach</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span>
              <span class="word">當前數組元素,當前元素索引號</span>
              <span class="brackets">){</span>
            </div>
            <div class="comment pTwo">//函數體</div>
            <div class="brackets">}</div>
            <br />
            <div class="number">只遍歷 , 不返回值</div>
            <br />
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="brackets">[</span>
              <span class="src">"wayne","neo","jack"</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">arr</span>
              <span class="variable">.forEach</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span>
              <span class="word">item,index</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">item</span> <span class="brackets">) </span>
              <span class="comment">// wayne neo jack</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">index</span> <span class="brackets">) </span>
              <span class="comment">// 0 1 2</span>
            </div>
            <div class="brackets">})</div>
            <br />
            <div class="number">和 map 差在 他不返回數組</div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">result</span> <span class="then">=</span>

              <span class="word">arr</span>
              <span class="variable">.forEach</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span>
              <span class="word">item,index</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">item</span> <span class="brackets">) </span>
              <span class="comment">// wayne neo jack</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">index</span> <span class="brackets">) </span>
              <span class="comment">// 0 1 2</span>
            </div>
            <div class="brackets">})</div>

            <div class="">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">result</span> <span class="brackets">) </span>
              <span class="comment">// undefined</span>
            </div>
          </div>
          <p class="fz28">1. forEach 主要是遍歷數組</p>
          <p class="fz28">2. 索引號可以不寫</p>

          <div id="threemethod002" class="articleCardTitle cor36 fz34">
            4. reduce
          </div>
          <p class="fz28">reduce 返回累計處理的結果, 常用於求和</p>
          <div class="bgcVS">
            <div>
              <span class="word">arr.reduce</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(){},</span>
              <span class="word">起始值</span>
              <span class="brackets">) </span>
              <span class="comment">// 第 1 個參數回調函數</span>
            </div>
            <div class="comment">// 回調裡面有 2 個形參</div>
            <div>
              <span class="word">arr.reduce</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span>
              <span class="word">上一次值,當前值</span>
              <span class="brackets">){},</span>
              <span class="word">初始值</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="brackets">[</span> <span class="number">1,5,8</span>
              <span class="brackets">]</span>
            </div>
            <br />
            <div class="comment">//1.沒初始值</div>
            <div>
              <span class="word">arr.reduce</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span>
              <span class="word">prev,current</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo">
              <span class="then">return </span> <span class="word">prev</span>
              <span class="then">+</span> <span class="word">current</span>
            </div>
            <div class="brackets">})</div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">total</span> <span class="brackets">) </span>
              <span class="comment">// 14</span>
            </div>

            <br />
            <div class="comment">//2.有初始值</div>
            <div>
              <span class="word">arr.reduce</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span>
              <span class="word">prev,current</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo">
              <span class="then">return </span> <span class="word">prev</span>
              <span class="then">+</span> <span class="word">current</span>
            </div>
            <div>
              <span class="brackets">},</span> <span class="number">10</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">total</span> <span class="brackets">) </span>
              <span class="comment">// 24</span>
            </div>
            <br />
            <div class="comment">//3.匿名函數</div>
            <div>
              <span class="function">const </span>
              <span class="word">total</span> <span class="then">=</span>
              <span class="word">arr.reduce</span>
              <span class="brackets">((</span>
              <span class="word">prev,current</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="word">prev</span> <span class="then">+</span>
              <span class="word">current,</span> <span class="number">10</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">total</span> <span class="brackets">) </span>
              <span class="comment">// 24</span>
            </div>
          </div>
          <p class="fz28">reduce 執行過程</p>
          <p class="fz28">
            1. 如果 沒有 起始值 , 則 上一次值 以 數組的 第一個 數組元素 的值
          </p>
          <p class="fz28">
            2. 每一次循環 , 把返回值 做為 下一次循環的 上一次值
          </p>
          <p class="fz28">3. 如果 有 起始值, 則 起始值 做為 上一次值</p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="brackets">[{</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">name:</span> <span class="src">"wayne"</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">number:</span> <span class="number">1000</span>
            </div>
            <div class="brackets">}, {</div>
            <div class="pTwo VSL">
              <span class="word">name:</span> <span class="src">"neo"</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">number:</span> <span class="number">2000</span>
            </div>
            <div class="brackets">}, {</div>
            <div class="pTwo VSL">
              <span class="word">name:</span> <span class="src">"jack"</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">number:</span> <span class="number">3000</span>
            </div>
            <div class="brackets">} ]</div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">total</span> <span class="then">=</span>
              <span class="word">arr.reduce</span>
              <span class="brackets">((</span>
              <span class="word">prev,current</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="brackets">{</span>
            </div>
            <div class="pTwo">
              <span class="then">return </span> <span class="word">prev</span>
              <span class="then">+</span>
              <span class="word">current.number</span>
            </div>
            <div>
              <span class="brackets">},</span> <span class="number">0</span>
              <span class="brackets">) </span>
              <span class="comment"
                >// 不寫出使值則以數組第一個元素{}為初始值</span
              >
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">total</span> <span class="brackets">) </span>
              <span class="comment">// 6000</span>
            </div>
            <br />
            <p>數字 + 30% 怎麼改?</p>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">total</span> <span class="then">=</span>
              <span class="word">arr.reduce</span>
              <span class="brackets">((</span>
              <span class="word">prev,current</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="word">prev</span>
              <span class="then">+</span>
              <span class="word">current.number </span>
              <span class="then">* </span>

              <span class="number">1.3 , 0</span>
              <span class="brackets">) </span>
            </div>
            <div id="threemethod003" class="articleCardTitle cor36 fz34">
              4. join
            </div>
          </div>

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
td {
  padding: 150px 35px 0 0;
  border-bottom: 1px solid #2f2f2f;
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
