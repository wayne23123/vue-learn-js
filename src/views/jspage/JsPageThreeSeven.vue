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
          <div @click="locate('threetips001')" class="leftNavText">淺拷貝</div>
          <div @click="locate('threetips002')" class="leftNavText">深拷貝</div>
          <div @click="locate('threetips003')" class="leftNavText">lodash</div>
          <div @click="locate('threetips004')" class="leftNavText">JSON</div>
          <div @click="locate('threetips005')" class="leftNavText">
            異常處理
          </div>
          <div @click="locate('threetips006')" class="leftNavText">this</div>
          <div @click="locate('threetips007')" class="leftNavText">call</div>
          <div @click="locate('threetips008')" class="leftNavText">apply</div>
          <div @click="locate('threetips009')" class="leftNavText">bind</div>
          <div @click="locate('threetips010')" class="leftNavText">防抖</div>
          <div @click="locate('threetips011')" class="leftNavText">節流</div>
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
          <div id="threetips001" class="articleCardTitle cor36 fz34">
            7.1 淺拷貝
          </div>
          <p class="fz28">只針對引用數據類型</p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span> <span class="word">number:</span>
              <span class="number">1</span> <span class="brackets">}</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">o</span>
              <span class="then">=</span> <span class="word">obj</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">o</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">o.number</span> <span class="then">=</span>
              <span class="number">20</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">o</span> <span class="brackets">)</span>
              <span class="comment">//{number:20} . . . 堆 & 棧</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">obj</span> <span class="brackets">)</span>
              <span class="comment">//{number:20} . . . 堆 & 棧</span>
            </div>
            <div class="dis">
              <div class="pad20">
                <br />

                <div>obj</div>
                <div>o</div>
                <br />
              </div>

              <div class="pad20">
                棧

                <div>→ 0x1111 →</div>
                <div>→ 0x2222 ↗</div>
                <div>把地址</div>
                <div>賦值給他</div>
              </div>

              <div class="pad20">
                堆

                <div>{ number:1 }</div>
                <br />
                <div>址</div>
              </div>
            </div>
            <br />
            <br />
            <p>淺拷貝: 拷貝的是 地址</p>
            <br />
            <p>法一</p>
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">uname:</span> <span class="src">"wayne"</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">number:</span> <span class="number">1</span>
              <div></div>
            </div>

            <div class="brackets">}</div>
            <div>
              <span class="function">const </span> <span class="word">o</span>
              <span class="then">=</span> <span class="brackets">{</span>
              <span class="word">...obj</span> <span class="brackets">}</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">o</span> <span class="brackets">)</span>
            </div>
            <br />
            <p>法二</p>
            <div>
              <span class="function">const </span> <span class="word">o</span>
              <span class="then">=</span> <span class="brackets">{}</span>
            </div>
            <div>
              <span class="brackets">Object</span>
              <span class="word">.assign</span>
              <span class="brackets">(</span> <span class="word">o,obj</span>
              <span class="brackets">)</span>
              <span class="comment">
                // (要拷貝的,被拷貝的)// (右 賦值 給 左)</span
              >
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">o</span> <span class="brackets">)</span>
            </div>
            <br />
            <br />
            <p>淺拷貝只拷貝最外面那一層 (uname number)</p>
            <p>簡單物件還可以 , 裡面又有物件時 , 有問題</p>
            <p>. . > 多層次嵌套 有問題</p>
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">uname:</span> <span class="src">"wayne"</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">number:</span> <span class="number">1</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="word">inner:</span> <span class="brackets">{</span>
              <div>
                <div class="padTwo VSL">
                  <span class="word">cantcopy:</span>
                  <span class="src">"裡面的潛拷貝不到"</span>
                </div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>

            <div class="brackets">}</div>
            <br />
            <br />
            <div class="dis">
              <div class="pad20">
                <br />

                <div>obj.name</div>
                <div>o.name</div>
                <br />
                <div>obj.inner</div>
                <div>o.inner</div>
              </div>

              <div class="pad20">
                棧

                <div>wayne</div>
                <div>wayne</div>
                <div>obj直接把wayne複製給o</div>
                <div>→ 0x1111 →</div>
                <div>→ 0x1111 ↗</div>
                <div>拷貝了地址</div>
              </div>

              <div class="pad20">
                堆
                <br />
                <br />
                <br />
                <br />
                <div>{ cantcopy:"裡面的潛拷貝不到" }</div>
              </div>
            </div>
          </div>
          <p class="fz28">解決 多層次嵌套 問題</p>
          <div id="threetips002" class="articleCardTitle cor36 fz34">
            7.2 深拷貝
          </div>
          <p class="fz28">深拷貝 拷貝的是 物件 不是地址</p>
          <p class="fz28 cor36"># 3 方法</p>
          <p class="fz28">1. 通過 遞歸 實現 深拷貝</p>
          <p class="fz28">2. lodash / cloneDeep</p>
          <p class="fz28">3. 通過 JSON.stringify() 實現</p>
          <br />
          <br />
          <p class="fz28">什麼是遞歸函數?</p>
          <p class="fz28">一個函數在內部 調用自己 就是遞歸函數</p>
          <p class="fz28">
            遞歸容易 "棧溢出" 錯誤 , 所以必須加 退出條件 return
          </p>
          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">fn</span> <span class="brackets">()</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">fn</span> <span class="brackets">()</span>
            </div>

            <br />
            <div>
              <span class="function">let </span> <span class="word">i</span>
              <span class="then">=</span> <span class="number">1</span>
            </div>
            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="src">`這是第</span> <span class="then">${</span>
              <span class="word">i</span> <span class="then">}</span>
              <span class="src">次`</span> <span class="brackets">)</span>
              <div>
                <span class="then">if</span> <span class="brackets">(</span>
                <span class="word">i</span> <span class="then">>=</span>
                <span class="number">6</span> <span class="brackets">){</span>
                <div class="padTwo VSL">
                  <span class="then">return </span>
                </div>
                <div><span class="brackets">}</span></div>
                <div>
                  <span class="word">i</span> <span class="then">++</span>
                </div>
              </div>
            </div>
            <div class="padTwo VSL">
              <span class="word">fn</span> <span class="brackets">()</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">fn</span> <span class="brackets">()</span>
            </div>

            <br />
            <br />
            <p>利用 遞歸函數 實現 setTimeout 模擬 setInterval</p>
            <p>1. 每隔 1 秒輸出當前時間</p>
            <P>2. 輸出當前時間可用 new Date().toLocaleString()</P>
            <div>
              <span class="variable">setTimeout</span>
              <span class="brackets">( </span>
              <span class="function">函數, </span>
              <span class="number">時間 </span> <span class="brackets">)</span>
            </div>
            <br />
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">getTime</span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">document.</span>
              <span class="variable">querySelector</span>
              <span class="brackets">(</span>
              <span class="src">"showTimeDiv"</span>
              <span class="brackets">)</span>
              <span class="variable">.innerHTML</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="brackets">Date()</span>
              <span class="variable">.toLocaleString</span>
              <span class="brackets">()</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">getTime</span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">document.</span>
              <span class="variable">querySelector</span>
              <span class="brackets">(</span>
              <span class="src">".showTimeDiv"</span>
              <span class="brackets">)</span>
              <span class="variable">.innerHTML</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="brackets">Date()</span>
              <span class="variable">.toLocaleString</span>
              <span class="brackets">()</span>
              <div></div>
              <div>
                <span class="variable">setTimeout</span>
                <span class="brackets">(</span>
                <span class="variable">getTime,</span>
                <span class="number">1000</span> <span class="brackets">)</span>
              </div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <br />
            <br />

            <p>for in . for of</p>
            <br />
            <div><span class="comment">// 1. 循環數組</span></div>
            <div>
              <span class="word">cosnt</span> <span class="word">arr</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="src">"a","b","c","d"</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="comment"
                >// for...in 輸出 數組成員 在數組中 的索引</span
              >
            </div>
            <div>
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">let </span> <span class="word">n </span>
              <span class="function">in </span> <span class="word">arr</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.log</span>
              <span class="brackets">(</span> <span class="word">n </span>
              <span class="brackets">) </span>
              <span class="comment">// 0 // 1 // 2 // 3</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="comment">// for...of 輸出 數組的成員</span>
            </div>
            <div>
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">let </span> <span class="word">n </span>
              <span class="function">of </span> <span class="word">arr</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.log</span>
              <span class="brackets">(</span> <span class="word">n </span>
              <span class="brackets">) </span>
              <span class="comment">// a // b // c // d</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div><span class="comment">// 2. 循環物件</span></div>
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span> <span class="word">n:</span>
              <span class="number">4,</span> <span class="word">m:</span>
              <span class="number">5,</span> <span class="word">k:</span>
              <span class="number">6</span> <span class="brackets">}</span>
            </div>
            <div>
              <span class="comment">// for...in </span>
            </div>
            <div>
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">let </span> <span class="word">n </span>
              <span class="function">in </span> <span class="word">obj</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="comment">// 物件的屬性名</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.log</span>
              <span class="brackets">(</span> <span class="word">n</span>
              <span class="brackets">) </span>
              <span class="comment">// n // m // k</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="comment">// 物件的屬性值</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">obj</span> <span class="brackets">[</span>
              <span class="word">n</span> <span class="brackets">])</span>
              <span class="comment">// 4 // 5 // 6</span>
              <div></div>
            </div>

            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="comment">// for...of </span>
            </div>
            <div>
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">let </span> <span class="word">n </span>
              <span class="function">of </span> <span class="word">obj</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <div><span class="comment">// 報錯 , 不能循環</span></div>
              <div><span class="comment">// 因為沒有 iterator 接口</span></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />

            <div><span class="comment">// 3. 循環數組物件</span></div>
            <div>
              <span class="function">const </span>
              <span class="word">arrObj</span> <span class="then">=</span>
              <span class="brackets">[{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">name:</span> <span class="src">"wayne",</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="word">number:</span> <span class="number">1</span>
              <div></div>
            </div>
            <div><span class="brackets">}, {</span></div>
            <div class="padTwo VSL">
              <span class="word">name:</span> <span class="src">"jack",</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="word">number:</span> <span class="number">9</span>
              <div></div>
            </div>
            <div><span class="brackets">}]</span></div>
            <br />
            <div>
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">let </span> <span class="word">nObj </span>
              <span class="function">of </span>
              <span class="word">arrObj</span> <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">nObj</span> <span class="brackets">)</span>
              <span class="comment"
                >//{name:"wayne",number:1},{name:"jack",number:9}</span
              >
            </div>
            <div class="padTwo VSL">
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">let </span> <span class="word">n </span>
              <span class="function">in </span> <span class="word">nObj</span>
              <span class="brackets">){</span>
              <div>
                <div class="padTwo VSL">
                  <span class="word">console.</span>
                  <span class="variable">log</span>
                  <span class="brackets">(</span>
                  <span class="word">nObj</span>
                  <span class="brackets">[</span> <span class="word">n</span>
                  <span class="brackets">]) </span
                  ><span class="comment">// wayne // 1 // jack // 9</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
            </div>
            <div><span class="brackets">}</span></div>

            <div><span class="comment">// for in 循環 物件</span></div>
            <div><span class="comment">// for of 循環 數組</span></div>

            <br />
            <br />

            <p>利用 遞歸 函數 實現 深拷貝</p>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">uname:</span> <span class="src">"wayne"</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">number:</span> <span class="number">1</span>
              <div></div>
            </div>

            <div class="brackets">}</div>
            <span class="comment">// 我想把 obj 物件 拷貝給 o</span>
            <div>
              <span class="function">const </span> <span class="word">o</span>
              <span class="then">=</span> <span class="brackets">{}</span>
            </div>
            <div><span class="comment">思想:</span></div>
            <div>
              <span class="comment"
                >拿到物件 利用 遍歷 把屬性(值) 取過來 做 賦值</span
              >
            </div>
            <div>
              <span class="comment"
                >把 obj 的 wayne 賦值給 o 的 uname 完成一次賦值</span
              >
            </div>
            <div>
              <span class="comment"
                >再利用 循環 把 obj 的 1 傳給 o 的 number</span
              >
            </div>
            <br />
            <div><span class="number">如果是簡單類型直接放行</span></div>
            <br />
            <div class="por">
              <div>
                <span class="function">function </span>
                <span class="variable">deepCopy</span>
                <span class="brackets">( </span>
                <span class="word">newObj, oldObj </span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <span class="comment">//把舊的值取出來給新的值</span>
                <div></div>
                <span class="comment">//先遍歷舊的 , 注意 k 是誰</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">for </span> <span class="brackets">(</span>
                <span class="function">let </span> <span class="word">k </span>
                <span class="function">in </span>
                <span class="word">oldObj </span>
                <span class="brackets">){</span>
                <div>
                  <div class="padTwo VSL">
                    <span class="comment">// k 屬性名 oldObj[ k ] 屬性值</span>
                  </div>
                  <div class="padTwo VSL">
                    <span class="comment">// newObj[ k ] === o.uname</span>
                    <div></div>
                  </div>
                  <div class="padTwo VSL">
                    <div>
                      <span class="word">newObj</span>
                      <span class="brackets">[ </span>
                      <span class="word">k </span>
                      <span class="brackets">]</span>
                      <span class="then">= </span>
                      <span class="word">oldObj</span>
                      <span class="brackets">[ </span>
                      <span class="word">k </span>
                      <span class="brackets">]</span>
                    </div>
                  </div>
                  <div><span class="brackets">}</span></div>
                </div>
              </div>
              <div><span class="brackets">}</span></div>
              <div>
                <span class="variable">deepCopy</span>
                <span class="brackets">(</span> <span class="word">o,obj</span>
                <span class="brackets">)</span>
                <span class="comment">//函數調用,o是新物件,obj是舊物件</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">o</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="word">o.number</span> <span class="then">=</span>
                <span class="word">99</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">obj</span>
                <span class="brackets">)</span>
              </div>

              <div class="objectDivPoa">
                <div><span class="comment">// 2. 循環物件</span></div>
                <div>
                  <span class="function">const </span>
                  <span class="word">obj</span> <span class="then">=</span>
                </div>
                <div>
                  <span class="brackets">{</span> <span class="word">n:</span>
                  <span class="number">4,</span> <span class="word">m:</span>
                  <span class="number">5,</span> <span class="word">k:</span>
                  <span class="number">6</span> <span class="brackets">}</span>
                </div>
                <div>
                  <span class="then">for </span>
                  <span class="brackets">(</span>
                  <span class="function">let </span>
                  <span class="word">n </span>
                  <span class="function">in </span>
                  <span class="word">obj</span>
                  <span class="brackets">){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="comment">// 物件的屬性名</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">console.log</span>
                  <span class="brackets">(</span> <span class="word">n</span>
                  <span class="brackets">) </span>

                  <div></div>
                  <span class="comment">// n // m // k</span>
                </div>
                <div class="padTwo VSL">
                  <span class="comment">// 物件的屬性值</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">console.</span>
                  <span class="variable">log</span>
                  <span class="brackets">(</span><span class="word">obj</span>
                  <span class="brackets">[</span><span class="word">n</span>
                  <span class="brackets">])</span>
                  <div></div>
                  <span class="comment">// 4 // 5 // 6</span>
                </div>

                <div><span class="brackets">}</span></div>
              </div>
              <br />
              <p>Q: oldObj [ k ] 是誰?</p>
              <p>舊物件 屬性值</p>
              <br />
              <p>Q: newObj [ k ] 是誰?</p>
              <p>新物件 屬性名</p>
              <br />
              <p>------------以上做潛拷貝------------</p>
              <div>
                <span class="function">const </span>
                <span class="word">obj</span> <span class="then">=</span>
                <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">uname:</span>
                <span class="src">"wayne"</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">number:</span> <span class="number">1</span>
                <div></div>
              </div>
              <div class="padTwo VSL">
                <span class="word">hobby:</span>
                <span class="brackets">[</span>
                <span class="src">"跑步","足球"</span>
                <span class="brackets">]</span>
                <div></div>
              </div>

              <div class="brackets">}</div>
              <br />
              <div>
                <span class="number"
                  >遇到數組 跑步拿出來 放 hobby[0] 足球拿租來 放 hobby[1]</span
                >
              </div>
              <br />
              <div>
                <span class="function">function </span>
                <span class="variable">deepCopy</span>
                <span class="brackets">( </span>
                <span class="word">newObj, oldObj </span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <span class="comment">//把舊的值取出來給新的值</span>
                <div></div>
                <span class="comment">//先遍歷舊的 , 注意 k 是誰</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">for </span> <span class="brackets">(</span>
                <span class="function">let </span> <span class="word">k </span>
                <span class="function">in </span>
                <span class="word">oldObj </span>
                <span class="brackets">){</span>

                <div class="padTwo VSL">
                  <div>
                    <span class="number">//</span>
                    <span class="comment"> 處理數組問題</span>
                  </div>
                  <div>
                    <span class="number">// </span>
                    <span class="comment">通過值來判斷</span>
                  </div>
                  <div>
                    <span class="then">if</span>
                    <span class="brackets">(</span>
                    <span class="word">oldObj</span>
                    <span class="brackets">[</span> <span class="word">k </span>
                    <span class="brackets">] </span>
                    <span class="word">intanceof </span>
                    <span class="brackets">Array</span>
                    <span class="brackets">) { </span>
                    <span class="comment">// oldObj [ k ] 屬性值</span>
                  </div>
                  <div class="padTwo VSL">
                    <div>
                      <span class="number">// </span>
                      <span class="comment">我要把hobby數組再次遍歷</span>
                    </div>
                    <div>
                      <span class="number">// </span>
                      <span class="comment"
                        >我要把跑步拿出來放到新物件hobby第1個參數</span
                      >
                    </div>
                    <div>
                      <span class="number">// </span>
                      <span class="comment"
                        >我要把足球拿出來放到新物件hobby第2個參數</span
                      >
                    </div>

                    <div>
                      <span class="word">newObj</span>
                      <span class="brackets">[ </span>
                      <span class="word">k </span>
                      <span class="brackets">]</span>
                      <span class="then">=</span>
                      <span class="brackets">[ ]</span>
                      <div></div>
                      <div>
                        <span class="number">// </span>

                        <span class="comment"> newObj[k] 是 hobby</span>
                      </div>
                      <div>
                        <span class="number">// </span>

                        <span class="comment">
                          新物件的 hobby 先給他一個空數組</span
                        >
                      </div>
                      <div>
                        <span class="number">// </span>
                        <span class="comment"
                          >然後我在遍歷舊數組把他放進去</span
                        >
                      </div>
                      <br />
                      <div>
                        <span class="number">// </span>
                        <span class="comment"
                          >deepCopy(newObj[k],["跑步","足球"])</span
                        >
                      </div>
                      <div class="por">
                        <div>
                          <span class="variable">deepCopy</span>
                          <span class="brackets">(</span>
                          <span class="word">newObj</span>
                          <span class="brackets">[</span>
                          <span class="word">k</span>
                          <span class="brackets">],</span>
                          <span class="word">oldObj</span>
                          <span class="brackets">[</span>
                          <span class="word">k</span>
                          <span class="brackets">])</span>
                        </div>
                        <div>
                          <span class="comment">//調用自己遍歷數組時</span>
                        </div>
                        <div>
                          <span class="number">// K 變成數組的索引號了</span>
                        </div>

                        <div class="objectDivPoa">
                          <div><span class="comment">// 1. 循環數組</span></div>
                          <div>
                            <span class="word">cosnt</span>
                            <span class="word">arr</span>
                            <span class="then">=</span>
                          </div>
                          <div>
                            <span class="brackets">[</span>
                            <span class="src">"a","b","c","d"</span>
                            <span class="brackets">]</span>
                          </div>
                          <div>
                            <span class="comment">//for...in輸出</span>
                          </div>
                          <div>
                            <span class="comment">數組成員在</span>
                          </div>
                          <div>
                            <span class="comment">數組中的索引</span>
                          </div>

                          <div>
                            <span class="then">for </span>
                            <span class="brackets">(</span>
                            <span class="function">let </span>
                            <span class="word">n </span>
                            <span class="function">in </span>
                            <span class="word">arr</span>
                            <span class="brackets">){</span>
                          </div>
                          <div class="">
                            <span class="word">console.log</span>
                            <span class="brackets">(</span>
                            <span class="word">n </span>
                            <span class="brackets">) </span>
                          </div>
                          <div>
                            <span class="comment">// 0 // 1 // 2 // 3</span>
                            <div></div>
                          </div>
                          <div><span class="brackets">}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="padTwo VSL">
                  <span class="brackets">}</span>
                  <span class="then">else </span>
                  <span class="brackets">{</span>
                  <div>
                    <div>
                      <div class="padTwo VSL">
                        <span class="comment"
                          >// k 屬性名 oldObj[ k ] 屬性值</span
                        >
                      </div>
                      <div class="padTwo VSL">
                        <span class="comment">// newObj[ k ] === o.uname</span>
                        <div></div>
                      </div>
                      <div class="padTwo VSL">
                        <div>
                          <span class="word">newObj</span>
                          <span class="brackets">[ </span>
                          <span class="word">k </span>
                          <span class="brackets">]</span>
                          <span class="then">= </span>
                          <span class="word">oldObj</span>
                          <span class="brackets">[ </span>
                          <span class="word">k </span>
                          <span class="brackets">]</span>
                        </div>
                      </div>
                      <div><span class="brackets">}</span></div>
                    </div>
                  </div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
              <div><span class="brackets">}</span></div>
              <div>
                <span class="variable">deepCopy</span>
                <span class="brackets">(</span> <span class="word">o,obj</span>
                <span class="brackets">)</span>
                <span class="comment">//函數調用,o是新物件,obj是舊物件</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">o</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="word">o.number</span> <span class="then">=</span>
                <span class="word">99</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">obj</span>
                <span class="brackets">)</span>
              </div>
              <br />
              <div>
                <span class="number">處理遇到物件</span>
              </div>
              <br />
              <div>
                <span class="function">const </span>
                <span class="word">obj</span> <span class="then">=</span>
                <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">uname:</span>
                <span class="src">"wayne"</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">number:</span> <span class="number">1</span>
                <div></div>
              </div>
              <div class="padTwo VSL">
                <span class="word">hobby:</span>
                <span class="brackets">[</span>
                <span class="src">"跑步","足球"</span>
                <span class="brackets">]</span>
                <div></div>
              </div>
              <div class="padTwo VSL">
                <span class="word">family:</span>
                <span class="brackets">{</span>
                <div>
                  <div class="padTwo VSL">
                    <span class="word">baby:</span>
                    <span class="src">"小neo"</span>
                    <div></div>
                  </div>
                  <div><span class="brackets">}</span></div>
                </div>
              </div>

              <div class="brackets">}</div>
              <br />
              <div>
                <span class="function">function </span>
                <span class="variable">deepCopy</span>
                <span class="brackets">( </span>
                <span class="word">newObj, oldObj </span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <span class="comment">//把舊的值取出來給新的值</span>
                <div></div>
                <span class="comment">//先遍歷舊的 , 注意 k 是誰</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">for </span> <span class="brackets">(</span>
                <span class="function">let </span> <span class="word">k </span>
                <span class="function">in </span>
                <span class="word">oldObj </span>
                <span class="brackets">){</span>

                <div class="padTwo VSL">
                  <div>
                    <span class="comment">// 處理數組問題</span>
                  </div>
                  <div>
                    <span class="comment">// 通過值來判斷</span>
                  </div>
                  <div>
                    <span class="then">if</span>
                    <span class="brackets">(</span>
                    <span class="word">oldObj</span>
                    <span class="brackets">[</span> <span class="word">k </span>
                    <span class="brackets">] </span>
                    <span class="word">intanceof </span>
                    <span class="brackets">Array</span>
                    <span class="brackets">) { </span>
                    <span class="comment">// oldObj [ k ] 屬性值</span>
                  </div>
                  <div class="padTwo VSL">
                    <div>
                      <span class="comment">// 我要把hobby數組再次遍歷</span>
                    </div>
                    <div>
                      <span class="comment"
                        >// 我要把跑步拿出來放到新物件hobby第1個參數</span
                      >
                    </div>
                    <div>
                      <span class="comment"
                        >// 我要把足球拿出來放到新物件hobby第2個參數</span
                      >
                    </div>

                    <div>
                      <span class="word">newObj</span>
                      <span class="brackets">[ </span>
                      <span class="word">k </span>
                      <span class="brackets">]</span>
                      <span class="then">=</span>
                      <span class="brackets">[ ]</span>
                      <div></div>
                      <div>
                        <span class="comment">// newObj[k] 是 hobby</span>
                      </div>
                      <div>
                        <span class="comment">
                          // 新物件的 hobby 先給他一個空數組</span
                        >
                      </div>
                      <div>
                        <span class="comment"
                          >// 然後我在遍歷舊數組把他放進去</span
                        >
                      </div>
                      <div>
                        <span class="comment"
                          >// deepCopy(newObj[k],["跑步","足球"])</span
                        >
                      </div>

                      <div>
                        <span class="variable">deepCopy</span>
                        <span class="brackets">(</span>
                        <span class="word">newObj</span>
                        <span class="brackets">[</span>
                        <span class="word">k</span>
                        <span class="brackets">],</span>
                        <span class="word">oldObj</span>
                        <span class="brackets">[</span>
                        <span class="word">k</span>
                        <span class="brackets">])</span>
                      </div>
                      <div>
                        <span class="comment">//調用自己遍歷數組時</span>
                      </div>
                      <div>
                        <span class="comment">// K 變成數組的索引號了</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="padTwo VSL">
                  <div>
                    <span class="brackets">} </span>

                    <span class="then">else if</span>
                    <span class="brackets">(</span>
                    <span class="word">oldObj</span>
                    <span class="brackets">[</span> <span class="word">k </span>
                    <span class="brackets">] </span>
                    <span class="word">intanceof </span>
                    <span class="brackets">Object</span>
                    <span class="brackets">) { </span>
                    <span class="comment">// oldObj [ k ] 屬性值</span>
                  </div>
                  <div class="padTwo VSL">
                    <br />
                    <div>
                      <span class="word">newObj</span>
                      <span class="brackets">[ </span>
                      <span class="word">k </span>
                      <span class="brackets">]</span>
                      <span class="then">=</span>
                      <span class="brackets">{ }</span>
                      <span class="cor36 padTwo">
                        ← . . . . . ↑ . . . 改這兩個
                      </span>
                      <div></div>
                      <br />

                      <div>
                        <span class="variable">deepCopy</span>
                        <span class="brackets">(</span>
                        <span class="word">newObj</span>
                        <span class="brackets">[</span>
                        <span class="word">k</span>
                        <span class="brackets">],</span>
                        <span class="word">oldObj</span>
                        <span class="brackets">[</span>
                        <span class="word">k</span>
                        <span class="brackets">])</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="padTwo VSL">
                  <span class="brackets">}</span>
                  <span class="then">else </span>
                  <span class="brackets">{</span>
                  <div>
                    <div>
                      <div class="padTwo VSL">
                        <span class="comment"
                          >// k 屬性名 oldObj[ k ] 屬性值</span
                        >
                      </div>
                      <div class="padTwo VSL">
                        <span class="comment">// newObj[ k ] === o.uname</span>
                        <div></div>
                      </div>
                      <div class="padTwo VSL">
                        <div>
                          <span class="word">newObj</span>
                          <span class="brackets">[ </span>
                          <span class="word">k </span>
                          <span class="brackets">]</span>
                          <span class="then">= </span>
                          <span class="word">oldObj</span>
                          <span class="brackets">[ </span>
                          <span class="word">k </span>
                          <span class="brackets">]</span>
                        </div>
                      </div>
                      <div><span class="brackets">}</span></div>
                    </div>
                  </div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
              <div><span class="brackets">}</span></div>
              <br />
              <p># 一定要 先數組 再物件</p>
              <p>因為 數組 屬於物件 他就把 數組當物件</p>
              <br />
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">([</span>
                <span class="number">1, 2, 3</span>
                <span class="brackets">]</span>
                <span class="word">instanceof</span>
                <span class="brackets">Object</span>
                <span class="brackets">) </span>
                <span class="comment">// true</span>
              </div>
              <div class="comment">// 陣列 被當成 物件</div>
            </div>
          </div>

          <p class="fz28 cor36"># 你怎麼實現 深拷貝?</p>
          <p class="fz28">深拷貝 是做到 拷貝出來的 新物件 不會影響 舊物件</p>
          <p class="fz28">想實現 深拷貝 函數遞歸</p>
          <p class="fz28">當我在 普通拷貝 直接賦值就好了</p>
          <p class="fz28">當我遇到 陣列 我再次調用 這個函數</p>
          <p class="fz28">當我遇到物件 我再次調用遞歸</p>
          <p class="fz28">先 陣列 後 物件</p>
          <div id="threetips003" class="articleCardTitle cor36 fz34">
            7.3 lodash
          </div>
          <a href="https://lodashjs.com/" class="fz28">@ lodash中文</a>

          <p class="fz28">
            庫 . 把一些常用的 方法 封裝好 . 只需要把庫引用進來 .
            調用一個函數就可以用了
          </p>
          <a
            href="https://www.lodashjs.com/docs/lodash.cloneDeep#_clonedeepvalue"
            class="fz28"
            >@ lodash深拷貝</a
          >
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">script </span>
              <span class="word">src</span> <span class="then">=</span>
              <span class="src">"lodash.js"</span>
              <span class="then">>＜/ </span>
              <span class="number">script</span> <span class="then">></span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">uname:</span>
              <span class="src">"wayne"</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">number:</span> <span class="number">1</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="word">hobby:</span>
              <span class="brackets">[</span>
              <span class="src">"跑步","足球"</span>
              <span class="brackets">]</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="word">family:</span>
              <span class="brackets">{</span>
              <div>
                <div class="padTwo VSL">
                  <span class="word">baby:</span>
                  <span class="src">"小neo"</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="function">const </span>
              <span class="brackets">o </span> <span class="then">= </span>
              <span class="word">_.</span>
              <span class="variable">cloneDeep</span>
              <span class="brackets">( obj )</span>
            </div>
            <div>
              <span class="comment"
                >// _.cloneDeep 有返回值 , 我 const o 接過來</span
              >
            </div>
          </div>
          <div id="threetips004" class="articleCardTitle cor36 fz34">
            7.4 JSON 實現 深拷貝
          </div>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">uname:</span>
              <span class="src">"wayne"</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">number:</span> <span class="number">1</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="word">hobby:</span>
              <span class="brackets">[</span>
              <span class="src">"跑步","足球"</span>
              <span class="brackets">]</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="word">family:</span>
              <span class="brackets">{</span>
              <div>
                <div class="padTwo VSL">
                  <span class="word">baby:</span>
                  <span class="src">"小neo"</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="function">const </span>
              <span class="brackets">o </span> <span class="then">= </span>
              <span class="word">_.</span>
              <span class="variable">cloneDeep</span>
              <span class="brackets">( obj )</span>
            </div>
            <div>
              <span class="comment"
                >// _.cloneDeep 有返回值 , 我 const o 接過來</span
              >
            </div>
            <div><span class="comment">//把物件轉成JSON字串</span></div>
            <div>
              <span class="brackets">JSON</span>
              <span class="variable">.stringify</span>
              <span class="brackets">(</span> <span class="word">obj</span>
              <span class="brackets">)</span>
              <span class="comment">// 得到字串</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="brackets">JSON</span>
              <span class="variable">.stringify</span>
              <span class="brackets">(</span> <span class="word">obj</span>
              <span class="brackets">))</span>
            </div>
            <div>
              <span class="brackets">JSON</span>
              <span class="variable">.parse</span>
              <span class="brackets">(</span>
              <span class="brackets">JSON</span>
              <span class="variable">.stringify</span>
              <span class="brackets">(</span> <span class="word">obj</span>
              <span class="brackets">))</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">o</span>
              <span class="then">=</span> <span class="brackets">JSON</span>
              <span class="variable">.parse</span>
              <span class="brackets">(</span>
              <span class="brackets">JSON</span>
              <span class="variable">.stringify</span>
              <span class="brackets">(</span> <span class="word">obj</span>
              <span class="brackets">))</span>
            </div>
          </div>

          <div id="threetips005" class="articleCardTitle cor36 fz34">
            7.5 異常處理
          </div>

          <div id="" class="articleCardTitle cor36 fz34">throw 拋異常</div>

          <div class="bgcVS">
            <p>JavaScript 中的驚嘆號（"!"）操作符</p>
            <br />
            <p>1. 邏輯 NOT 運算符：</p>
            <br />
            <p>
              驚嘆號（"!"）在 JavaScript 中被用作邏輯 NOT
              運算符。它會將其後的表達式的真值反轉，即如果表達式是真，則 NOT
              運算後為假；如果表達式是假，則 NOT 運算後為真。
            </p>
            <br />
            <div>
              <span class="function">let </span>
              <span class="word">isTrue</span> <span class="then">=</span>
              <span class="number">true</span>
            </div>
            <div>
              <span class="function">let </span>
              <span class="word">isFalse</span> <span class="then">=</span>
              <span class="number">!isTrue</span>
              <span class="comment">//isFalse將會是false</span>
            </div>
            <br />
            <p>1.1</p>
            <br />
            <p>
              如果您的變數 x 沒有被定義，那麼在使用 ! 來取得布林相反值時，會得到
              true，因為 undefined 被轉換為布林值時為 false，而取其相反值則是
              true。
            </p>
            <br />
            <div>
              <span class="function">var </span> <span class="word">y</span>
              <span class="comment">//y是undefined</span>
            </div>
            <div>
              <span class="function">var </span>
              <span class="word">oppositeValue</span>
              <span class="then">=</span> <span class="number">!y</span>
              <span class="comment">//oppositeValue將是true</span>
            </div>

            <br />
            <p>2. 轉換為布林值：</p>
            <br />
            <p>
              在一些情況下，驚嘆號也可以將值轉換為布林值。將任何值進行這樣的轉換後，非空字串將轉換為
              true，數字 0 轉換為 false，以及其他值按通常的 JavaScript
              轉換規則進行轉換。
            </p>
            <br />
            <div>
              <span class="function">let </span>
              <span class="word">value</span> <span class="then">=</span>
              <span class="src">"Hello"</span>
            </div>
            <div>
              <span class="function">let </span>
              <span class="word">convertedValue</span>
              <span class="then">=</span> <span class="number">!!value</span>
              <span class="comment"
                >//convertedValue將會是true，因為非空字串轉換為true</span
              >
            </div>

            <br />
            <br />
            <br />

            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(</span>
              <span class="word">x,y</span> <span class="brackets">){</span>
            </div>

            <div class="padTwo VSL">
              <div>
                <span class="comment"
                  >//如果變數x沒有被定義,那麼在使用!來取得布林相反值時,得到true,因為undefined被轉換為布林值時為false,而取其相反值則是true。</span
                >
              </div>
              <span class="then">if</span> <span class="brackets">(</span>
              <span class="number">!x</span> <span class="then">|| </span>
              <span class="number">!y</span> <span class="brackets">){</span>
              <div>
                <div class="padTwo VSL">
                  <div><span class="comment">//當undefined時,為true</span></div>

                  <span class="function">throw </span>
                  <span class="brackets">(</span>

                  <span class="src">"沒有參數傳遞進來"</span>
                  <span class="brackets">)</span>

                  <div>
                    <span class="comment"
                      >//發現不return值了,一扔錯誤,直接中斷</span
                    >
                  </div>
                  <span class="function">throw </span>
                  <span class="then">new </span>
                  <span class="word">Error </span>
                  <span class="brackets">(</span>
                  <span class="src">"沒有參數傳遞進來"</span>
                  <span class="brackets">)</span>

                  <div>
                    <span class="comment"
                      >//一般用這個,效果一樣,且會標註第幾行</span
                    >
                  </div>
                  <div></div>
                </div>

                <div><span class="brackets">}</span></div>
              </div>
            </div>
            <div class="padTwo VSL">
              <span class="then">return </span> <span class="word">x</span>
              <span class="then">+</span> <span class="word">y</span>
              <div>
                <span class="comment"
                  >// 我沒有傳值 x+y 是 undefined + undefined = NaN</span
                >
              </div>

              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
          </div>

          <p class="fz28">總結</p>
          <p class="fz28">1. throw 後面跟異常訊息,程式也會中止執行</p>
          <p class="fz28">2. Error 對象配合 throw 可設置詳細錯誤訊息</p>

          <div id="" class="articleCardTitle cor36 fz34">try catch</div>

          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">p</span>
              <span class="then">></span> <span class="word">test</span>
              <span class="then">＜/</span> <span class="number">p</span>
              <span class="then">></span>
            </div>

            <br />

            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>

            <div class="padTwo VSL">
              <span class="variable">try</span> <span class="brackets">{</span>

              <div>
                <div class="padTwo VSL">
                  <span class="comment">//try寫可能發送錯誤的代碼</span>
                </div>
                <div class="padTwo VSL">
                  <div>
                    <span class="function">const </span>
                    <span class="word">p</span> <span class="then">=</span>
                    <span class="word">document</span>
                    <span class="variable">.querySelector</span>
                    <span class="brackets">(</span>
                    <span class="src">".p"</span>
                    <span class="brackets">) </span>
                    <span class="comment">//往錯誤的catch(){}走</span>
                  </div>
                  <div>
                    <span class="comment"
                      >//const p = document.querySelector("p") //
                      正確往下走</span
                    >
                  </div>
                  <div>
                    <span class="word">p.style.color</span>
                    <span class="then">=</span> <span class="src">"red"</span>
                  </div>

                  <div></div>
                </div>
              </div>

              <div>
                <span class="brackets">}</span>
                <span class="variable">catch</span>
                <span class="brackets">(</span> <span class="word">err</span>

                <span class="brackets">){ </span>
                <span class="comment"
                  >// 注意catch後面() , ()裡面是形參 寫什麼都行</span
                >
                <div>
                  <div class="padTwo VSL">
                    <div>
                      <span class="comment">// 這邊拋錯後 依然會繼續執行</span>
                    </div>
                    <div>
                      <span class="comment"
                        >//
                        攔截錯誤,提示瀏覽器提供的錯誤訊息,但不中斷程式執行</span
                      >
                    </div>
                    <div>
                      <span class="word">console.</span>
                      <span class="variable">log</span>
                      <span class="brackets">(</span>
                      <span class="word">err</span>
                      <span class="word">.message</span>
                      <span class="brackets">)</span>
                    </div>
                    <span class="comment"
                      >//err是我的形參可以自訂,message是固定的屬性</span
                    >
                    <div>
                      <span class="function">throw </span>
                      <span class="then">new </span>
                      <span class="brackets">Error</span>
                      <span class="brackets">(</span>
                      <span class="src">"選擇器選取錯誤"</span>
                      <span class="brackets">)</span>
                    </div>
                    <div>
                      <span class="comment">//需要加return中斷程式</span>
                    </div>
                    <div><span class="comment">// return </span></div>
                    <div></div>
                  </div>
                  <div><span class="brackets">}</span></div>
                  <div>
                    <span class="function">finally</span>
                    <span class="brackets">{</span>
                  </div>
                  <div class="padTwo VSL">
                    <span class="comment"
                      >//不管程式對不對,一定會執行的代碼</span
                    >
                    <div>
                      <span class="word">console.</span>
                      <span class="variable">log</span>
                      <span class="brackets">(</span>
                      <span class="src">"比如可用在獲取資料的轉圈"</span>
                      <span class="brackets">)</span>
                    </div>
                    <div></div>
                  </div>
                  <div><span class="brackets">}</span></div>
                  <div>
                    <span class="word">console.</span>
                    <span class="variable">log</span>
                    <span class="brackets">(</span>
                    <span class="number">11</span>
                    <span class="brackets">)</span>
                  </div>
                </div>
              </div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">fn</span> <span class="brackets">()</span>
            </div>
          </div>
          <p class="fz28">小結</p>
          <p class="fz28">1. try...catch用於捕獲錯誤訊息</p>
          <p class="fz28">2. 將預估可能發生錯誤的代碼寫在 try</p>
          <p class="fz28">3. 如果 try 錯誤 執行 catch 並獲取錯誤訊息</p>
          <p class="fz28">4. finally 不管怎樣 都執行</p>

          <div id="" class="articleCardTitle cor36 fz34">debugger</div>

          <p class="fz28">代碼特別長 一打斷點 就自動跳過來了</p>
          <p class="fz28">目的</p>
          <p class="fz28">在運行時 可直接跳到這邊 不用再開sorce...</p>

          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="variable">deepCopy</span>
              <span class="brackets">( </span>
              <span class="word">newObj, oldObj </span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="number">debugger</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">for </span> <span class="brackets">(</span>
              <span class="function">let </span> <span class="word">k </span>
              <span class="function">in </span>
              <span class="word">oldObj </span>
              <span class="brackets">){</span>
              <div>
                <div class="padTwo VSL">
                  <div>
                    <span class="word">newObj</span>
                    <span class="brackets">[ </span>
                    <span class="word">k </span>
                    <span class="brackets">]</span>
                    <span class="then">= </span>
                    <span class="word">oldObj</span>
                    <span class="brackets">[ </span>
                    <span class="word">k </span>
                    <span class="brackets">]</span>
                  </div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
            </div>
            <div><span class="brackets">}</span></div>
          </div>

          <div id="threetips006" class="articleCardTitle cor36 fz34">
            7.6 this 指向
          </div>
          <p class="fz28">1. 普通函數 this</p>
          <p class="fz40">誰調用 this的值 指向誰</p>
          <div class="bgcVS">
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//window</span>
            </div>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//window</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="comment"
                >//是 window.fn() // window 調用的指向 window</span
              >
            </div>
            <br />
            <div>
              <span class="variable">setTimeout</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//window</span>
              <div></div>
            </div>
            <div>
              <span class="brackets">},</span> <span class="number">1000</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">window</span>
              <span class="variable">.setTimeout</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(){})</span>
            </div>
            <br />
            <br />
            <div>
              <span class="src">"use strict"</span>
              <span class="comment">//語法要嚴格按照正常語法來寫</span>
            </div>
            <div><span class="comment">//所有變量要先聲明在賦值</span></div>
            <div><span class="comment">//函數不允許聲明多個一樣的</span></div>
            <br />
            <br />
            <div>
              <span class="src">"use strict"</span>
            </div>
            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//undefined</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <br />
            <div>
              <span class="then">＜</span> <span class="number">button</span>
              <span class="then">></span> <span class="word">點擊</span>
              <span class="then">＜/</span> <span class="number">button</span>
              <span class="then">></span>
            </div>
            <div>
              <span class="word">document</span>
              <span class="variable">.querySelector</span>
              <span class="brackets">(</span> <span class="src">"button"</span>
              <span class="brackets">)</span>
              <span class="variable">.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click",</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//button , button 調用了我這個函數</span>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">sayHi:</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
              <div>
                <div class="pTwo VSL">
                  <span class="word">console.</span>
                  <span class="variable">log</span>
                  <span class="brackets">(</span>
                  <span class="then">this</span>
                  <span class="brackets">)</span>
                  <span class="comment">//指向obj</span>
                </div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">obj.sayHi</span>
              <span class="brackets">()</span>
            </div>
          </div>

          <p class="fz28">2. 箭頭函數 this</p>
          <p class="fz40">箭頭函數 this 根據上下文 , 去上一級作用域找 this</p>

          <br />
          <p class="fz28">
            1.箭頭函數 默認 綁定 外層 this 的值, 所以在 箭頭函數中 this 的值和
            外層的 this 是一樣的
          </p>
          <p class="fz28">2.箭頭函數的的 this 引用的就是最近作用域中的 this</p>
          <p class="fz28">
            3.向外層作用域中 , 一層一層查找 this , 直到有 this 的定義
          </p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">user</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <div class="bor pad20 disInl">
                <span class="word">name:</span> <span class="src">"wayne"</span>
                <div><span class="comment">//箭頭函數中的this為</span></div>
                <div>
                  <span class="comment">//函數聲明環境中的this一致</span>
                </div>
                <div>
                  <span class="word">sayHi:</span>
                  <span class="brackets">()</span>
                  <span class="function">=></span>
                  <span class="brackets">{</span>
                </div>
                <div>
                  <div class="padTwo VSL">
                    <span class="word">console.</span>
                    <span class="variable">log</span>
                    <span class="brackets">(</span>
                    <span class="then">this</span>
                    <span class="brackets">)</span>
                    <span class="comment">//箭頭函數裡面沒有this</span>
                    <div>
                      <span class="comment"
                        >//他綁定最近一級的this(這個物件裡面的this)</span
                      >
                    </div>
                    <div><span class="comment">//物件的this是誰?</span></div>
                    <div><span class="comment">//函數有this</span></div>
                    <div>
                      <span class="comment">//而物件的this是外層 //window</span>
                    </div>
                    <div></div>
                  </div>
                  <div><span class="brackets">},</span></div>
                </div>
              </div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">btn</span> <span class="then">=</span>
              <span class="word">document.querySelector</span>
              <span class="brackets">(</span> <span class="src">".btn"</span>
              <span class="brackets">)</span>
            </div>
            <span class="comment">//普通函數指DOM對象</span>

            <div>
              <span class="word">btn.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click",</span>
              <span class="function">function</span>
              <span class="brackets">(){</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">// btn</span>
            </div>
            <div class="brackets">}</div>
            <div>
              <span class="comment">// 箭頭函數 此時 this 指向 window</span>
            </div>
            <div>
              <span class="word">btn.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click",</span>
              <span class="brackets">()</span>
              <span class="function">=> </span>
              <span class="brackets">{</span>
            </div>
            <div class="pTwo">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">// window</span>
            </div>
            <div class="brackets">})</div>
            <br />
            <br />
            <p>原型對象時</p>
            <br />
            <div>
              <span class="function">function </span>
              <span class="brackets">(){}</span>
            </div>
            <div>
              <span class="word">Person.prototype.sayHi</span>
              <span class="then">=</span> <span class="brackets">()</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="src">"hi"</span> <span class="brackets">)</span>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="then">this</span>
                <span class="brackets">)</span>
                <span class="comment">//window</span>
              </div>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="comment">//構造函數&原型對象裡的this都指向實例</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">p1</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="brackets">Person()</span>
              <span class="comment">//this不指向p1了</span>
            </div>
          </div>
          <p class="fz28">總結</p>
          <p class="fz28">1. 函數內不存在 this , 沿用上一級的</p>
          <p class="fz28">2. 不適用 . . > 構造函數 . 原型函數 . dom 事件函數</p>
          <p class="fz28">3. 適用 . . > 需要用上層 this 的地方</p>

          <div id="threetips007" class="articleCardTitle cor36 fz34">
            7.7 改變 this --- call()
          </div>

          <br />

          <p class="fz28">
            使用 call 方法 <span class="spo cor36"> 調用函數 </span> , 同時 指定
            被調用 函數中的 <span class="spo cor36"> this 的值 </span>
          </p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span> <span class="word">name:</span>
              <span class="src">"wayne"</span> <span class="brackets">}</span>
            </div>
            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//window</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div><span class="comment">//1.調用函數</span></div>
            <div><span class="comment">//2.改變this指向</span></div>
            <div>
              <span class="word">fn</span> <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">fn</span> <span class="variable">.call</span>
              <span class="brackets">()</span>
              <span class="comment">//只調用</span>
            </div>
            <div>
              <span class="word">fn</span> <span class="variable">.call</span>
              <span class="brackets">(</span> <span class="word">obj</span>
              <span class="brackets">)</span>
              <span class="comment">//打印了obj//代表改變了this指向</span>
            </div>
            <div>
              <span class="comment"
                >// 3. 返回值: 本身在調用函數, 所以返回值就是函數的返回值</span
              >
            </div>

            <br />
            <div>
              <span class="function">function </span>
              <span class="word">fn</span>

              <span class="brackets">(</span> <span class="word">x,y</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//window</span>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">x</span>
                <span class="then">+</span> <span class="word">y</span>
                <span class="brackets">)</span> <span class="comment">//3</span>
              </div>
              <div></div>
            </div>

            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">fn</span> <span class="variable">.call</span>
              <span class="brackets">(</span> <span class="word">obj,</span>
              <span class="number">1,2</span> <span class="brackets">)</span>
            </div>
          </div>
          <div id="threetips008" class="articleCardTitle cor36 fz34">
            7.8 改變 this --- apply()
          </div>
          <p class="fz28">
            使用 apply 方法 <span class="spo cor36"> 調用函數 </span> , 同時
            指定 被調用 函數中的 <span class="spo cor36"> this 的值 </span>
          </p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span> <span class="word">name:</span>
              <span class="src">"wayne"</span> <span class="brackets">}</span>
            </div>
            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//window</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div><span class="comment">//1.調用函數</span></div>
            <div><span class="comment">//2.改變this指向</span></div>
            <div>
              <span class="word">fn</span> <span class="variable">.apply</span>
              <span class="brackets">(</span> <span class="word">obj</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(</span>
              <span class="word">x,y</span> <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">//window</span>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">x+y</span>
                <span class="brackets">)</span>
              </div>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">fn</span> <span class="word">.</span>
              <span class="variable">apply</span>
              <span class="brackets">(</span> <span class="word">obj, </span>
              <span class="brackets">[</span> <span class="number">1, 2 </span>
              <span class="brackets">])</span>
            </div>

            <div>
              <span class="comment"
                >// 3. 返回值: 本身在調用函數, 所以返回值就是函數的返回值</span
              >
            </div>
            <div>
              <span class="comment">//使用場景:用Math.max()求數組最大值</span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="variable">max</span> <span class="then">=</span>
              <span class="word">Math</span><span class="variable">.max</span>
              <span class="brackets">(</span> <span class="number">1,2,3</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="variable">max</span> <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="variable">max</span> <span class="then">=</span>
              <span class="word">Math</span>
              <span class="variable">.max.apply</span>
              <span class="brackets">(</span> <span class="word">Math,</span>
              <span class="brackets">[</span> <span class="number">1,2,3</span>
              <span class="brackets">])</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="variable">max</span> <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="brackets">[</span>
              <span class="number">100,44,77</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="variable">max</span> <span class="then">=</span>
              <span class="word">Math</span>
              <span class="variable">.max.apply</span>
              <span class="brackets">(</span>
              <span class="word">Math,arr</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="variable">min</span> <span class="then">=</span>
              <span class="word">Math</span>
              <span class="variable">.max.apply</span>

              <span class="brackets">(</span>
              <span class="word">Math,arr</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="variable">min</span> <span class="then">=</span>
              <span class="word">Math</span>
              <span class="variable">.max.apply</span>

              <span class="brackets">(</span>
              <span class="word">null,arr</span> <span class="brackets">)</span>
              <span class="comment">//this指向用null不改變也可以</span>
            </div>

            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="variable">max</span> <span class="brackets">)</span>
            </div>
            <br />
            <br />
            <p>求數組最大值</p>
            <p>1.for循環</p>
            <p>2.apply(要綁定的this,[數組])</p>
            <p>3.console.log(Math.max(...arr))</p>
          </div>

          <p class="fz28">call & apply</p>
          <p class="fz28">都能調用函數 , 改變 this 指向</p>
          <p class="fz28">差在 參數不一樣 , apply 傳遞的 必須是 數組</p>
          <div id="threetips009" class="articleCardTitle cor36 fz34">
            7.9 改變 this --- bind()
          </div>

          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span> <span class="word">name:</span>
              <span class="src">"wayne"</span> <span class="brackets">}</span>
            </div>

            <div>
              <span class="function">function </span>
              <span class="word">fn</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div><span class="comment">//1.bind不調用函數</span></div>
            <div><span class="comment">//2.能改變this指向</span></div>
            <div>
              <span class="word">fn</span><span class="variable">.bind</span>
              <span class="brackets">(</span> <span class="word">obj</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="comment">//3.返回值:返回 已改變this後 的函數</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">fun</span> <span class="then">=</span>
              <span class="word">fn</span><span class="variable">.bind</span>
              <span class="brackets">(</span> <span class="word">obj</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span><span class="brackets">(</span>
              <span class="word">fun</span><span class="brackets">)</span>
            </div>
            <div>
              <span class="word">fun</span><span class="brackets">()</span>
            </div>
            <br />
            <br />
            <p>場景: 改變定時器內的 this 指向</p>
            <br />
            <p>需求: 有一個按鈕 , 點擊後禁用 , 2 秒後開啟</p>
            <br />
            <div>
              <span class="then">＜</span> <span class="number">button</span>
              <span class="then">></span> <span class="word">發送信息</span>
              <span class="then">＜/</span> <span class="number">button</span>
              <span class="then">></span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">btn</span> <span class="then">=</span>
              <span class="word">document</span>
              <span class="variable">.querySelector</span>
              <span class="brackets">(</span> <span class="src">"button"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">btn</span>
              <span class="variable">.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click"</span>
              <span class="then">,</span>
              <span class="function">function </span>
              <span class="brackets">() { </span>
              <span class="comment"> //回調</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this</span>
              <span class="variable">.disabled</span>
              <span class="then">=</span> <span class="number">true</span>
              <span class="comment">//這樣btn改名btn111也可以</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="variable">setTimeout</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
              <div>
                <div class="padTwo VSL">
                  <span class="then">this</span>
                  <span class="variable">.disabled</span>
                  <span class="then">=</span> <span class="number">false</span>
                  <div></div>
                </div>
              </div>
              <div>
                <span class="brackets">},</span>
                <span class="number">2000</span> <span class="brackets">)</span>
              </div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
            <p>出問題, setTimeout 裡面的 this 指向 window</p>
            <br />
            <div>
              <span class="then">＜</span> <span class="number">button</span>
              <span class="then">></span> <span class="word">發送信息</span>
              <span class="then">＜/</span> <span class="number">button</span>
              <span class="then">></span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">btn</span> <span class="then">=</span>
              <span class="word">document</span>
              <span class="variable">.querySelector</span>
              <span class="brackets">(</span> <span class="src">"button"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">btn</span>
              <span class="variable">.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click"</span>
              <span class="then">,</span>
              <span class="function">function </span>
              <span class="brackets">() { </span>
              <span class="comment"> //回調</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this</span>
              <span class="variable">.disabled</span>
              <span class="then">=</span> <span class="number">true</span>
              <span class="comment">//這樣btn改名btn111也可以</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="variable">setTimeout</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
              <div>
                <div class="padTwo VSL">
                  <span class="then">btn</span>
                  <span class="variable">.disabled</span>
                  <span class="then">=</span> <span class="number">false</span>
                  <div></div>
                </div>
              </div>
              <div>
                <span class="brackets">},</span>
                <span class="number">2000</span> <span class="brackets">)</span>
              </div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
            <br />
            <div>
              <span class="then">＜</span> <span class="number">button</span>
              <span class="then">></span> <span class="word">發送信息</span>
              <span class="then">＜/</span> <span class="number">button</span>
              <span class="then">></span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">btn</span> <span class="then">=</span>
              <span class="word">document</span>
              <span class="variable">.querySelector</span>
              <span class="brackets">(</span> <span class="src">"button"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">btn</span>
              <span class="variable">.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click"</span>
              <span class="then">,</span>
              <span class="function">function </span>
              <span class="brackets">() { </span>
              <span class="comment"> //回調</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this</span>
              <span class="variable">.disabled</span>
              <span class="then">=</span> <span class="number">true</span>
              <span class="comment">//這樣btn改名btn111也可以</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="variable">setTimeout</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
              <div>
                <div class="padTwo VSL">
                  <div>
                    <span class="comment"
                      >//在這個普通函數裡面,我們要this由原來的window改為btn</span
                    >
                  </div>
                  <span class="then">this</span>
                  <span class="variable">.disabled</span>
                  <span class="then">=</span> <span class="number">false</span>
                  <div></div>
                </div>
              </div>
              <div>
                <span class="brackets">}</span>
                <span class="variable">.bind</span>
                <span class="brackets">( btn ), </span>

                <span class="number">2000</span> <span class="brackets">)</span>
              </div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />

            <hr />
            <div>
              <img
                style="width: 100%"
                src="../../../src/assets/jsimg/jstip001.jpg"
              />
            </div>
            <hr />

            <br />
            <div>
              <span class="then">＜</span> <span class="number">button</span>
              <span class="then">></span> <span class="word">發送信息</span>
              <span class="then">＜/</span> <span class="number">button</span>
              <span class="then">></span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">btn</span> <span class="then">=</span>
              <span class="word">document</span>
              <span class="variable">.querySelector</span>
              <span class="brackets">(</span> <span class="src">"button"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">btn</span>
              <span class="variable">.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click"</span>
              <span class="then">,</span>
              <span class="function">function </span>
              <span class="brackets">() { </span>
              <span class="comment"> //回調</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">this</span>
              <span class="variable">.disabled</span>
              <span class="then">=</span> <span class="number">true</span>
              <span class="comment">//這樣btn改名btn111也可以</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="variable">setTimeout</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
              <div>
                <div class="padTwo VSL">
                  <div>
                    <span class="comment"
                      >//在這個普通函數裡面,我們要this由原來的window改為btn</span
                    >
                  </div>
                  <span class="then">this</span>
                  <span class="variable">.disabled</span>
                  <span class="then">=</span> <span class="number">false</span>
                  <div></div>
                </div>
              </div>
              <div>
                <span class="brackets">}</span>
                <span class="variable">.bind</span>
                <span class="brackets">(</span> <span class="then">this</span>
                <span class="brackets">),</span>

                <span class="number">2000</span> <span class="brackets">)</span>
              </div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
          </div>

          <p class="fz28">call & apply & bind</p>
          <p class="fz28">相同:</p>
          <p class="fz28">都可以改變函數內部的 this 指向</p>
          <br />

          <p class="fz28">區別:</p>
          <p class="fz28">
            call & apply 會 調用函數 , 並改變函數內部 this 指向
          </p>
          <br />
          <p class="fz28">
            call & apply 傳遞的參數不一樣 , call (aru1 , aru2) apply ([數組])
          </p>
          <br />
          <p class="fz28">bind 不會調用 , 會改變 this 指向</p>
          <br />
          <p class="fz28">場景:</p>
          <p class="fz28">call 調用 並 傳遞 參數</p>
          <br />
          <p class="fz28">apply 並用 並 傳遞 數組</p>
          <br />
          <p class="fz28">
            bind 不調用 , 但想改 this 指向 ex 改定時器內部 this 指向
          </p>
          <br />
          <br />
          <br />
          <div id="threetips010" class="articleCardTitle cor36 fz34">
            7.10 防抖 debounce
          </div>

          <p class="fz28">單位時間內 , 頻繁觸發事件 , 只執行最後一次</p>
          <br />
          <p class="fz28">放技能 , 只要被打斷要重施放</p>
          <br />
          <p class="fz28">場景</p>
          <p class="fz28">
            搜尋框輸入 , 只需要用戶 最後一次輸入完 , 在發送請求
          </p>

          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">input </span>
              <span class="word">type</span> <span class="then">=</span>
              <span class="src">"text"</span> <span class="then">></span>
            </div>
            <div>
              <span class="function">let </span>
              <span class="word">oInput</span> <span class="then">=</span>
              <span class="word">document</span>
              <span class="variable">.querySelector</span>
              <span class="brackets">(</span> <span class="src">"input"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="function">let </span> <span class="word">time</span>
              <span class="then">=</span> <span class="then">null</span>
            </div>
            <div>
              <span class="word">oInput</span>
              <span class="variable">.oninput</span>
              <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="then">this</span>
              <span class="word">.value</span> <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="word">oInput</span>
              <span class="variable">.oninput</span>
              <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">if</span> <span class="brackets">(</span>
              <span class="word">time</span> <span class="then">!==null</span>
              <span class="brackets">){</span>
              <div></div>
              <div class="padTwo VSL">
                <span class="word">clearTimeout</span>
                <span class="brackets">(</span> <span class="word">t</span>
                <span class="brackets">)</span>
                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <div>
                <span class="word">time</span> <span class="then">=</span>
                <span class="variable">setTimeout</span>
                <span class="brackets">(()</span>
                <span class="function">=> </span>
                <span class="brackets">{</span>
                <div class="padTwo VSL">
                  <span class="word">console</span>
                  <span class="variable">.log</span>
                  <span class="brackets">(</span>
                  <span class="then">this</span>
                  <span class="word">.value</span>
                  <span class="brackets">)</span>
                </div>
                <div>
                  <span class="brackets">},</span>
                  <span class="number">1000</span>
                  <span class="brackets">)</span>
                </div>
              </div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <p>用閉包優化結構</p>
            <div class="dis">
              <div class="w100">
                <div>
                  <span class="word">oInput</span>
                  <span class="variable">.oninput</span>
                  <span class="then">=</span>
                  <span class="word">debounce</span>
                  <span class="brackets">()</span>
                </div>
                <div>
                  <span class="function">function </span>
                  <span class="word">debounce</span>
                  <span class="brackets">(){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="function">let </span>
                  <span class="word">time</span> <span class="then">=</span>
                  <span class="then">null</span>
                  <div></div>

                  <span class="then">return </span>
                  <span class="function">function </span>
                  <span class="brackets">(){</span>
                  <div></div>
                  <div class="padTwo VSL">
                    <span class="then">if</span>
                    <span class="brackets">(</span>
                    <span class="word">time</span>
                    <span class="then">!==null</span>
                    <span class="brackets">){</span>
                    <div></div>
                    <div class="padTwo VSL">
                      <span class="word">clearTimeout</span>
                      <span class="brackets">(</span>
                      <span class="word">t</span>
                      <span class="brackets">)</span>
                      <div></div>
                    </div>
                    <div><span class="brackets">}</span></div>
                    <div>
                      <span class="word">time</span>
                      <span class="then">=</span>
                      <span class="variable">setTimeout</span>
                      <span class="brackets">(()</span>
                      <span class="function">=> </span>
                      <span class="brackets">{</span>
                      <div class="padTwo VSL">
                        <span class="word">console</span>
                        <span class="variable">.log</span>
                        <span class="brackets">(</span>
                        <span class="then">this</span>
                        <span class="word">.value</span>
                        <span class="brackets">)</span>
                      </div>
                      <div>
                        <span class="brackets">},</span>
                        <span class="number">1000</span>
                        <span class="brackets">)</span>
                      </div>
                    </div>
                  </div>
                  <div><span class="brackets">}</span></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>

              <div class="w100">
                <div>
                  <span class="word">oInput</span>
                  <span class="variable">.oninput</span>
                  <span class="then">=</span>
                  <span class="word">debounce</span>
                  <span class="brackets">(</span>
                  <span class="variable">function</span>
                  <span class="brackets">(){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">console</span>
                  <span class="variable">.log</span>
                  <span class="brackets">(</span>
                  <span class="then">this</span>
                  <span class="word">.value</span>
                  <span class="brackets">)</span>
                  <div></div>
                </div>
                <div>
                  <span class="brackets">},</span>
                  <span class="number">1000</span>
                  <span class="brackets">)</span>
                </div>

                <div>
                  <span class="function">function </span>
                  <span class="word">debounce</span>

                  <span class="brackets">(</span>
                  <span class="word">fn,delay</span>
                  <span class="brackets">){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="function">let </span>
                  <span class="word">time</span> <span class="then">=</span>
                  <span class="then">null</span>
                  <div></div>

                  <span class="then">return </span>
                  <span class="function">function </span>
                  <span class="brackets">(){</span>
                  <div></div>
                  <div class="padTwo VSL">
                    <span class="then">if</span>
                    <span class="brackets">(</span>
                    <span class="word">time</span>
                    <span class="then">!==null</span>
                    <span class="brackets">){</span>
                    <div></div>
                    <div class="padTwo VSL">
                      <span class="word">clearTimeout</span>
                      <span class="brackets">(</span>
                      <span class="word">t</span>
                      <span class="brackets">)</span>
                      <div></div>
                    </div>
                    <div><span class="brackets">}</span></div>
                    <div>
                      <span class="word">time</span>
                      <span class="then">=</span>
                      <span class="variable">setTimeout</span>
                      <span class="brackets">(()</span>
                      <span class="function">=> </span>
                      <span class="brackets">{</span>
                      <div class="padTwo VSL">
                        <span class="variable">fn</span>
                        <span class="brackets">()</span>
                      </div>
                      <div>
                        <span class="brackets">},</span>
                        <span class="number">delay</span>
                        <span class="brackets">)</span>
                      </div>
                    </div>
                  </div>
                  <div><span class="brackets">}</span></div>
                </div>
                <div><span class="brackets">}</span></div>
                <p>測試發現輸出 undefined</p>
              </div>
            </div>
            <div class="dis">
              <div class="w100">
                <div>
                  <span class="word">oInput</span>
                  <span class="variable">.oninput</span>
                  <span class="then">=</span>
                  <span class="word">debounce</span>
                  <span class="brackets">(</span>
                  <span class="variable">function</span>
                  <span class="brackets">(){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">console</span>
                  <span class="variable">.log</span>
                  <span class="brackets">(</span>
                  <span class="then">this</span>

                  <span class="brackets">) </span>
                  <span class="comment">//發現this指向window</span>
                  <div></div>
                </div>
                <div>
                  <span class="brackets">},</span>
                  <span class="number">1000</span>
                  <span class="brackets">)</span>
                </div>

                <div>
                  <span class="function">function </span>
                  <span class="word">debounce</span>

                  <span class="brackets">(</span>
                  <span class="word">fn,delay</span>
                  <span class="brackets">){</span>
                </div>
                <div class="padTwo VSL">
                  <div><span class="comment">//console.log(this)</span></div>
                  <span class="function">let </span>
                  <span class="word">time</span> <span class="then">=</span>
                  <span class="then">null</span>
                  <div></div>

                  <span class="then">return </span>
                  <span class="function">function </span>
                  <span class="brackets">(){</span>
                  <div></div>
                  <div class="padTwo VSL">
                    <span class="then">if</span>
                    <span class="brackets">(</span>
                    <span class="word">time</span>
                    <span class="then">!==null</span>
                    <span class="brackets">){</span>
                    <div></div>
                    <div class="padTwo VSL">
                      <span class="word">clearTimeout</span>
                      <span class="brackets">(</span>
                      <span class="word">t</span>
                      <span class="brackets">)</span>
                      <div></div>
                    </div>
                    <div><span class="brackets">}</span></div>
                    <div>
                      <span class="word">time</span>
                      <span class="then">=</span>
                      <span class="variable">setTimeout</span>
                      <span class="brackets">(()</span>
                      <span class="function">=> </span>
                      <span class="brackets">{</span>
                      <div class="padTwo VSL">
                        <div>
                          <span class="comment"
                            >//console.log(this) //這邊才指向input對象</span
                          >
                        </div>

                        <span class="variable">fn</span>
                        <span class="brackets">()</span>
                      </div>
                      <div>
                        <span class="brackets">},</span>
                        <span class="number">delay</span>
                        <span class="brackets">)</span>
                      </div>
                    </div>
                  </div>
                  <div><span class="brackets">}</span></div>
                </div>
                <div><span class="brackets">}</span></div>
                <p>雖然這裡執行debounce這個函數</p>
                <p>但返回的是內部這個函數(return..)</p>
                <p>相當於onInput=右邊</p>
                <p>這裡掛者的是內部返回的這個函數</p>
                <p>所以內部這個函數的this指向</p>
                <p>才是這個input對象</p>
              </div>

              <div class="w100">
                <br />
                <br />
                <br />
                <div>
                  <span class="word">oInput</span>
                  <span class="variable">.oninput</span>
                  <span class="then">=</span>
                  <span class="word">debounce</span>
                  <span class="brackets">(</span>
                  <span class="variable">function</span>
                  <span class="brackets">(){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">console</span>
                  <span class="variable">.log</span>
                  <span class="brackets">(</span>
                  <span class="then">this</span>

                  <span class="brackets">) </span>
                  <div></div>
                </div>
                <div>
                  <span class="brackets">},</span>
                  <span class="number">1000</span>
                  <span class="brackets">)</span>
                </div>

                <div>
                  <span class="function">function </span>
                  <span class="word">debounce</span>

                  <span class="brackets">(</span>
                  <span class="word">fn,delay</span>
                  <span class="brackets">){</span>
                </div>
                <div class="padTwo VSL">
                  <div><span class="comment">//console.log(this)</span></div>
                  <span class="function">let </span>
                  <span class="word">time</span> <span class="then">=</span>
                  <span class="then">null</span>
                  <div></div>

                  <span class="then">return </span>
                  <span class="function">function </span>
                  <span class="brackets">(){</span>
                  <div></div>
                  <div class="padTwo VSL">
                    <span class="then">if</span>
                    <span class="brackets">(</span>
                    <span class="word">time</span>
                    <span class="then">!==null</span>
                    <span class="brackets">){</span>
                    <div></div>
                    <div class="padTwo VSL">
                      <span class="word">clearTimeout</span>
                      <span class="brackets">(</span>
                      <span class="word">t</span>
                      <span class="brackets">)</span>
                      <div></div>
                    </div>
                    <div><span class="brackets">}</span></div>
                    <div>
                      <span class="word">time</span>
                      <span class="then">=</span>
                      <span class="variable">setTimeout</span>
                      <span class="brackets">(()</span>
                      <span class="function">=> </span>
                      <span class="brackets">{</span>
                      <div class="padTwo VSL">
                        <span class="variable">fn</span>
                        <span class="number">.call</span>
                        <span class="brackets">(</span>
                        <span class="then">this</span>
                        <span class="brackets">)</span>

                        <span class="brackets">()</span>
                      </div>
                      <div>
                        <span class="brackets">},</span>
                        <span class="number">delay</span>
                        <span class="brackets">)</span>
                      </div>
                    </div>
                  </div>
                  <div><span class="brackets">}</span></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
            </div>
          </div>

          <div id="threetips011" class="articleCardTitle cor36 fz34">
            7.11 節流 throttle
          </div>

          <p class="fz28">單位時間內 , 頻繁觸發事件 , 執行一次</p>
          <br />
          <p class="fz28">技能施放完 等待的 cd 時間</p>
          <br />
          <p class="fz28">場景</p>
          <p class="fz28">滾動條</p>
          <div class="bgcVS">
            <div>
              <span class="word">window</span>
              <span class="word">.onscroll</span> <span class="then">=</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="variable">alert</span>
              <span class="brackets">(</span> <span class="src">"廣告"</span>
              <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <br />
            <br />
            <div>
              <span class="word">window</span>
              <span class="variable">.onscroll</span>
              <span class="then">=</span> <span class="word">throttle</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="variable">alert</span>
              <span class="brackets">(</span> <span class="src">"廣告"</span>
              <span class="brackets">)</span>
              <div></div>
            </div>
            <div>
              <span class="brackets">},</span> <span class="number">2000</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="function">function </span>
              <span class="word">throttle</span>
              <span class="brackets">(</span>
              <span class="word">fn,delay</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="function">let </span> <span class="word">time</span>
              <span class="then">=</span> <span class="number">true</span>
              <div></div>

              <span class="then">return </span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
              <div></div>
              <div class="padTwo VSL">
                <span class="then">if</span> <span class="brackets">(</span>
                <span class="word">time</span> <span class="brackets">){</span>
                <div></div>
                <div class="padTwo VSL">
                  <span class="variable">setTimeout</span>
                  <span class="brackets">(()</span>
                  <span class="function">=></span>
                  <span class="brackets">{</span>
                  <div></div>
                  <div class="padTwo VSL">
                    <span class="word">fn</span>
                    <span class="variable">.call</span>
                    <span class="brackets">(</span>
                    <span class="then">this</span>
                    <span class="brackets">) </span>
                    <span class="comment"
                      >// 綁在 window 有沒有 call 都可以</span
                    >
                    <div>
                      <span class="word">time</span>
                      <span class="then">=</span>
                      <span class="number">true</span>
                    </div>

                    <div></div>
                  </div>
                  <div>
                    <span class="brackets">},</span>
                    <span class="word">delay</span>
                    <span class="brackets">)</span>
                  </div>
                </div>
                <div><span class="brackets">}</span></div>

                <div>
                  <span class="word">time</span> <span class="then">=</span>
                  <span class="number">false</span>
                </div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">}</span></div>
          </div>
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
.objectDivPoa {
  position: absolute;
  right: 0;
  top: 0;
  background-color: #212432;
  padding: 4px;
}

@media screen and (max-width: 1400px) {
  .objectDivPoa {
    position: relative;
    /* position: absolute; */
  }
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
