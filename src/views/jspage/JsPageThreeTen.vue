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
          <br />
          <br />
          <div class="articleCardTitle cor36 fz34">javascript 隱式轉換</div>

          <p class="fz28">相等比較 ( == )</p>
          <br />
          <br />
          <p class="fz28">1. 如果 兩個 數據類型相同 , 執行 嚴格比較</p>
          <br />
          <br />
          <p class="fz28">
            2. 如果 兩個 數據類型 不相同 , 進行 類型轉換後 再比較
          </p>

          <div class="fz28 padTwo VSL">
            <br />
            <div>2-1. 如果 一個是 null 另一個是 undefined 返回 true</div>
            <br />
            <div>2-2. 如果 一個是 number 另一個是 string</div>

            <div class="padTwo VSL">
              <br />
              <div>將 string 轉成 number 再比較</div>
            </div>
            <br />
            <div>2-3. 如果 一個是 布林</div>

            <div class="padTwo VSL">
              <br />
              <div>將 布林 轉成 number 再比較</div>

              <div class="padTwo VSL">
                <br />
                <div>true 轉成 1</div>
                <br />
                <div>false 轉成 0</div>
              </div>
            </div>
            <br />

            <div>2-4. 如果 一個是 物件 另一個是 number || 字串</div>

            <div class="padTwo VSL">
              <br />
              <div>將 物件 轉成 原始值 再比較</div>

              <div class="padTwo VSL">
                <br />
                <div>先調用 物件 valueOf()方法 轉成 基本類型</div>
                <br />
                <div>
                  當 valueOf() 返回 非 基本類型 , 再調用 toString() 方法
                </div>
              </div>
            </div>
            <br />
            <div>2-5. NaN 和其他任何類型比較永遠返回 false</div>
            <br />
            <div>2-6. 兩個都為引用類型，則比較它們是否指向同一個物件</div>
          </div>
          <br />
          <div class="fz30 bgcVS">
            <div>
              <span class="then">if</span> <span class="brackets">(</span>
              <span class="word">a</span> <span class="then">==</span>
              <span class="number">1</span> <span class="then">&&</span>
              <span class="word">a</span> <span class="then">==</span>
              <span class="number">2</span> <span class="then">&&</span>
              <span class="word">a</span> <span class="then">==</span>
              <span class="number">3</span> <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span>
              <span class="src">"條件返回true"</span>
              <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="function">let </span> <span class="word">a</span>
              <span class="then">=</span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">value:</span> <span class="number">1,</span>
              <div>
                <span class="word">valueOf:</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>

              <div></div>
              <div class="padTwo VSL">
                <span class="then">return </span>
                <span class="then">this</span> <span class="word">.value</span>
                <span class="then">++;</span>
                <div></div>
              </div>
              <div><span class="brackets">},</span></div>
            </div>
            <div><span class="brackets">};</span></div>
            <br />
            <p>也可以 用 toString</p>
            <br />
            <div>
              <span class="function">let </span> <span class="word">a</span>
              <span class="then">=</span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">value:</span> <span class="number">1,</span>
              <div>
                <span class="word">toString:</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>

              <div></div>
              <div class="padTwo VSL">
                <span class="then">return </span>
                <span class="then">this</span> <span class="word">.value</span>
                <span class="then">++;</span>
                <div></div>
              </div>
              <div><span class="brackets">},</span></div>
            </div>
            <div><span class="brackets">};</span></div>
            <br />
            <p>如果 valueOf() 和 toString() 都寫 先調用 valueOf (規則 2-4)</p>
          </div>

          <br />

          <br /><br />
          <p class="fz28 cor36"># 那些值轉換成 false?</p>
          <br /><br />
          <p class="fz28">1. 空字串 ""</p>
          <br /><br />
          <p class="fz28">2. 數字 0</p>
          <br /><br />
          <p class="fz28">3. NaN</p>
          <br /><br />
          <p class="fz28">4. null 或 undefined</p>
          <div class="bgcVS">
            <p>練習 1</p>
            <div>
              <span class="function">let </span> <span class="word">arr</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="number">0</span> <span class="brackets">]</span>
            </div>
            <div>
              <span class="then">if</span> <span class="brackets">(</span>
              <span class="word">arr</span> <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="comment">//arr不屬於上面4種,為true</span>
              <div>
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="word">arr</span>
                <span class="then">==</span> <span class="number">true</span>
                <span class="brackets">)</span>
              </div>
              <div><span class="comment">//觸發隱式轉換2-4</span></div>
              <div>
                <span class="comment"
                  >//valueOf//console.log(arr.valueOf)//返回數組,沒轉原始值</span
                >
              </div>
              <div>
                <span class="comment"
                  >//toString//console.log(arr.toString())//返回0</span
                >
              </div>
              <div>
                <span class="comment">//當調用Array.toString()方法時</span>
              </div>
              <div>
                <span class="comment"
                  >//會嘗試用join方法將數組裡面的元素拼接起來</span
                >
              </div>
              <div>
                <span class="comment"
                  >//發現console.log(arr.join())//也返回0</span
                >
              </div>
              <div><span class="comment">//0==true</span></div>
              <div><span class="comment">//觸發隱式轉換2-3</span></div>
              <div><span class="comment">//true 轉成 1</span></div>
              <div><span class="comment">//0 == 1 //打印 false</span></div>

              <div></div>
            </div>
            <div>
              <span class="brackets">}</span> <span class="then">else </span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">a</span>
              <span class="brackets">);</span>
              <div></div>
            </div>

            <div><span class="brackets">}</span></div>
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
