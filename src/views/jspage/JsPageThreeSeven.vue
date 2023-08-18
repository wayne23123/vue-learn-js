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
            深拷貝
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
                    <div>
                      <span class="word">newObj</span>
                      <span class="brackets">[ </span>
                      <span class="word">k </span>
                      <span class="brackets">]</span>
                      <span class="then">=</span>
                      <span class="brackets">{ }</span>
                      <span class="cor36">
                        ← . . . . . . . . ↑ . . . 改這兩個
                      </span>

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
            </div>
          </div>

          <p class="fz28 cor36"># 你怎麼實現 深拷貝?</p>
          <p class="fz28">1. 深拷貝 是</p>
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
