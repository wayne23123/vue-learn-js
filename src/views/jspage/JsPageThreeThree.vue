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
          <div @click="locate('threeda001')" class="leftNavText">數組解構</div>
          <div @click="locate('threeda002')" class="leftNavText">物件解構</div>
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
          <div id="threeda001" class="articleCardTitle cor36 fz34">
            3.1 數組解構
          </div>
          <p class="fz28">
            數組解構是將數組的單元值快速批量賦值給一系列變量的簡潔語法
          </p>
          <br />
          <p class="fz28">1. 是什麼? _ 語法</p>
          <p class="fz28">2. 做什麼? _ 批量賦值給變量</p>
          <p class="fz28">3. 誰賦值給變量? _ 單元值</p>

          <p class="fz28">4. 單元值? _ 數組原素</p>

          <div class="dis">
            <div class="bgcVS w100">
              <div>
                <span class="function">const </span>
                <span class="word">arr</span> <span class="then">=</span>
                <span class="brackets">[</span>
                <span class="number">100,60,80</span>
                <span class="brackets">]</span>
              </div>
              <div>
                <span class="function">const </span>
                <span class="word">max</span> <span class="then">=</span>
                <span class="word">arr</span> <span class="brackets">[</span>
                <span class="number">0</span> <span class="brackets">]</span>
              </div>
              <div>
                <span class="function">const </span>
                <span class="word">min</span> <span class="then">=</span>
                <span class="word">arr</span> <span class="brackets">[</span>
                <span class="number">1</span> <span class="brackets">]</span>
              </div>
              <div>
                <span class="function">const </span>
                <span class="word">avg</span> <span class="then">=</span>
                <span class="word">arr</span> <span class="brackets">[</span>
                <span class="number">3</span> <span class="brackets">]</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">max</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">min</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">avg</span>
                <span class="brackets">)</span>
              </div>
            </div>

            <div class="bgcVSMid">></div>
            <div class="bgcVS w100">
              <div>
                <span class="function">const </span>
                <span class="brackets">[</span>
                <span class="word">max,min,avg</span>
                <span class="brackets">]</span> <span class="then">=</span>
                <span class="brackets">[</span>
                <span class="number">100,60,80</span>
                <span class="brackets">]</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">max</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">min</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">avg</span>
                <span class="brackets">)</span>
              </div>
            </div>
          </div>

          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="brackets">[</span>
              <span class="number">100,60,80</span>
              <span class="brackets">]</span>
            </div>

            <div>
              <span class="function">const </span>
              <span class="brackets">[</span>
              <span class="word">max,min,avg</span>
              <span class="brackets">]</span> <span class="then">=</span>
              <span class="word">arr</span>
            </div>
            <span class="comment">相當於 </span>

            <div>
              <span class="function">const </span>
              <span class="word">max</span> <span class="then">=</span>
              <span class="word">arr</span> <span class="brackets">[</span>
              <span class="number">0</span> <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">min</span> <span class="then">=</span>
              <span class="word">arr</span> <span class="brackets">[</span>
              <span class="number">1</span> <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">avg</span> <span class="then">=</span>
              <span class="word">arr</span> <span class="brackets">[</span>
              <span class="number">3</span> <span class="brackets">]</span>
            </div>
            <br />
            <br />

            <div class="comment">//交換2變量</div>
            <div>
              <span class="function">const </span> <span class="word">a</span>
              <span class="then">=</span> <span class="number">1</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">b</span>
              <span class="then">=</span> <span class="number">2</span>
            </div>
            <div>
              <span class="brackets">[</span> <span class="word">b,a</span>
              <span class="brackets">]</span> <span class="then">=</span>
              <span class="brackets">[</span> <span class="word">a,b</span>
              <span class="brackets">] </span>
              <span class="number">// !!!報錯了!!!</span>
            </div>
            <div>
              <span class="word">console.log</span>
              <span class="brackets">(</span> <span class="word">a,b</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="function">const </span> <span class="word">a</span>
              <span class="then">=</span> <span class="number">1</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">b</span>
              <span class="then">=</span> <span class="number">2</span>
              <span class="number">; . . . // 一定要加分號</span>
            </div>
            <div>
              <span class="brackets">[</span> <span class="word">b,a</span>
              <span class="brackets">]</span> <span class="then">=</span>
              <span class="brackets">[</span> <span class="word">a,b</span>
              <span class="brackets">] </span>
            </div>
            <div>
              <span class="word">console.log</span>
              <span class="brackets">(</span> <span class="word">a,b</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <br />
            <p>當變量多 單元值少的情況</p>
            <div>
              <span class="function">const </span>
              <span class="brackets">[</span> <span class="word">a,b,c,d</span>
              <span class="brackets">]</span> <span class="then">=</span>
              <span class="brackets">[</span> <span class="number">1,2,3</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">a</span> <span class="brackets">)</span>
              <span class="comment">// 1</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">b</span> <span class="brackets">)</span>
              <span class="comment">// 2</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">c</span> <span class="brackets">)</span>
              <span class="comment">// 3</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">d</span> <span class="brackets">)</span>
              <span class="comment">// undefined</span>
            </div>
            <br />
            <br />
            <p>當變量多 單元值少的情況</p>
            <div>
              <span class="function">const </span>
              <span class="brackets">[</span> <span class="word">a,b</span>
              <span class="brackets">]</span> <span class="then">=</span>
              <span class="brackets">[</span> <span class="number">1,2,3</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">a</span> <span class="brackets">)</span>
              <span class="comment">// 1</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">b</span> <span class="brackets">)</span>
              <span class="comment">// 2</span>
            </div>
            <br />
            <br />
            <p>用剩餘參數解決 變量少 單元值多的情況</p>
            <div>
              <span class="function">const </span>
              <span class="brackets">[</span>
              <span class="word">a,b,...c</span>
              <span class="brackets">]</span> <span class="then">=</span>
              <span class="brackets">[</span>
              <span class="number">1,2,3,4</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">a</span> <span class="brackets">)</span>
              <span class="comment">// 1</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">b</span> <span class="brackets">)</span>
              <span class="comment">// 2</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">c</span> <span class="brackets">)</span>
              <span class="comment">// [3,4] //真陣列</span>
            </div>
            <br />
            <br />
            <p>防止有undefined 傳遞單元值的情況, 可以設默認值:</p>
            <div>
              <span class="function">const </span>
              <span class="brackets">[</span>
              <span class="word">a</span> <span class="then">=</span>
              <span class="number">0,</span> <span class="word">b</span>
              <span class="then">=</span> <span class="number">0</span>
              <span class="brackets">]</span> <span class="then">=</span>
              <span class="brackets">[</span>
              <span class="number">1,2</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">a</span> <span class="brackets">)</span>
              <span class="comment">// 1</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">b</span> <span class="brackets">)</span>
              <span class="comment">// 2</span>
            </div>
            <br />
            <br />
            <p>按需導入賦值</p>
            <div>
              <span class="function">const </span>
              <span class="brackets">[</span> <span class="word">a,b, ,d</span>
              <span class="brackets">]</span> <span class="then">=</span>
              <span class="brackets">[</span>
              <span class="number">1,2,3,4</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">a</span> <span class="brackets">)</span>
              <span class="comment">// 1</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">b</span> <span class="brackets">)</span>
              <span class="comment">// 2</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">d</span> <span class="brackets">)</span>
              <span class="comment">// 4</span>
            </div>
            <br />
            <br />
            <p>多維數組</p>
            <div>
              <span class="word">const</span> <span class="word">arr</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="number">1,2,</span> <span class="brackets">[</span>
              <span class="number">3,4</span> <span class="brackets">] ]</span>
            </div>
            <br />
            <br />
            <p>支持多維數組解構</p>
            <div>
              <div>
                <span class="function">const </span>
                <span class="brackets">[</span> <span class="word">a,b,c</span>
                <span class="brackets">]</span>
                <span class="then">=</span> <span class="brackets">[</span>
                <span class="number">1,2,</span>
                <span class="brackets">[</span> <span class="number">3,4</span>
                <span class="brackets">] ]</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">c</span>
                <span class="brackets">)</span>
                <span class="comment">// [3,4] </span>
              </div>
              <br />
              <div>
                <span class="function">const </span>
                <span class="brackets">[</span> <span class="word">a,b</span>
                <span class="brackets">[</span> <span class="word">c,d</span>

                <span class="brackets">] ]</span>
                <span class="then">=</span> <span class="brackets">[</span>
                <span class="number">1,2,</span>
                <span class="brackets">[</span> <span class="number">3,4</span>
                <span class="brackets">] ]</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">a</span>
                <span class="brackets">)</span>
                <span class="comment">// 1</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">b</span>
                <span class="brackets">)</span>
                <span class="comment">// 2</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">c</span>
                <span class="brackets">)</span>
                <span class="comment">// 3</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">d</span>
                <span class="brackets">)</span>
                <span class="comment">// 4</span>
              </div>
            </div>
          </div>
          <div id="threeda002" class="articleCardTitle cor36 fz34">
            3.2 物件解構
          </div>
          <p class="fz28">
            物件解構是將物件屬性和方法快速批量賦值給一系列變量的簡潔語法
          </p>
          <div class="bgcVS">
            <!-- <div>
              <span class="function">const </span>
              <span class="word">obj</span> <span class="then">=</span>
              <span class="brackets">{</span>
            </div>
            <div class="pTwo">
              <span class="word">uname:</span> <span class="src">"wayne"</span>
            </div>

            <div class="pTwo">
              <span class="word">sayHi:</span>
              <span class="function">function </span>
              <span class="brackets">(){</span>
            </div>
            <div class="pFou">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="then">this</span> <span class="brackets">)</span>
              <span class="comment">// obj</span>
            </div>
            <div class="brackets pTwo">}</div>

            <div class="brackets">}</div>
          </div> -->

            <div>
              <span class="comment">const name = "不能變量名衝突" // 報錯</span>
            </div>
            <br />

            <div>
              <span class="function">const </span>
              <span class="brackets">{</span>
              <span class="word">name,number</span>
              <span class="brackets">}</span> <span class="then">=</span>
              <span class="brackets">{</span> <span class="word">name:</span>
              <span class="src">"wayne",</span>
              <span class="word">number:</span> <span class="number">123</span>
              <span class="brackets">}</span>
            </div>
            <div class="comment">// 相當於 const name = obj.name</div>
            <br />
            <p>1. 變量名 (左) 和 屬姓名 (右) 要一樣</p>
            <p>2. 解構的變量名 不要和 外面的 變量名衝突</p>
            <p>3. 變量名 (左) 可以重新改名</p>
            <br />
            <div>
              <span class="function">const </span>
              <span class="brackets">{ </span>
              <span class="word">name: username , number</span>
              <span class="brackets">}</span> <span class="then">=</span>
              <span class="brackets">{</span> <span class="word">name:</span>
              <span class="src">"wayne",</span>
              <span class="word">number:</span> <span class="number">123</span>
              <span class="brackets">}</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">username</span> <span class="brackets">)</span>
              <span class="comment">// wayne</span>
            </div>
          </div>
          <div class="articleCardTitle cor36 fz34">數組物件解構</div>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="brackets">[ </span>
            </div>
            <div class="brackets pTwo">{</div>

            <div class="pFou">
              <span class="word">uname:</span> <span class="src">"wayne",</span>
            </div>
            <div class="pFou">
              <span class="word">number:</span> <span class="number">123</span>
            </div>

            <div class="brackets pTwo">}</div>
            <div class="brackets">]</div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="brackets">[{</span>
              <span class="word">uname,number</span>
              <span class="brackets">}]</span> <span class="then">=</span>
              <span class="word">arr</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">uname</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">number</span> <span class="brackets">)</span>
            </div>
          </div>
          <div class="articleCardTitle cor36 fz34">多級物件解構</div>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">objOuter</span> <span class="then">=</span>
              <span class="brackets">{ </span>
            </div>
            <div class="pTwo">
              <span class="word">name:</span> <span class="src">"wayne",</span>
            </div>
            <div class="pTwo">
              <span class="word">number:</span> <span class="number">123</span>
            </div>
            <div class="pTwo">
              <span class="word">objInner:</span>
              <span class="brackets">{</span>
            </div>

            <div class="pFou">
              <span class="word">iname:</span> <span class="src">"inn",</span>
            </div>
            <div class="pFou">
              <span class="word">inumber:</span> <span class="number">321</span>
            </div>

            <div class="brackets pTwo">}</div>
            <div class="brackets">}</div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="brackets">{ </span>
              <span class="word">name, number, </span>
              <span class="word">objInner: </span>
              <span class="brackets">{ </span>
              <span class="word">iname, inumber </span>
              <span class="brackets">} } </span> <span class="then">=</span>
              <span class="word">objOuter</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">name</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">number</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">iname</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">inumber</span> <span class="brackets">)</span>
            </div>
          </div>
          <p class="fz28">陣列包起來時</p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">porson </span> <span class="then">=</span>
              <span class="brackets">[ </span>
            </div>
            <div class="brackets pTwo VSL">{</div>

            <div class="pFou VSL">
              <span class="word">123name:</span>
              <span class="src">"wayne",</span>
            </div>
            <div class="pFou VSL">
              <span class="word">number:</span> <span class="number">123</span>
            </div>
            <div class="pFou VSL">
              <span class="word">objInner:</span>
              <span class="brackets">{</span>
            </div>

            <div class="pSix VSL">
              <span class="word">iname:</span>
              <span class="src">"inn",</span>
            </div>
            <div class="pSix VSL">
              <span class="word">inumber:</span>
              <span class="number">321</span>
            </div>

            <div class="brackets pFou VSL">}</div>
            <div class="brackets pTwo VSL">}</div>
            <div class="brackets">]</div>

            <br />
            <div>
              <span class="function">const </span>
              <span class="brackets">[ { </span>
              <span class="word">name, number, objInner: </span>
              <span class="brackets">{ </span>
              <span class="word">iname, inumber </span>
              <span class="brackets">} } ]</span> <span class="then">=</span>
              <span class="word">person</span>
            </div>
          </div>
          <div class="dis">
            <div class="bgcVS w100">
              <p>JSON格式msg={"code":200,"data":[{...}]}</p>
              <br />
              <div>
                <span class="function">const </span>
                <span class="brackets">{</span> <span class="word">data</span>
                <span class="brackets">}</span> <span class="then">=</span>
                <span class="word">msg</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">data</span>
                <span class="brackets">)</span>
              </div>
              <br />
              <div>
                <span class="function">function </span>
                <span class="word">render</span>
                <span class="brackets">(</span> <span class="word">arr</span>
                <span class="brackets">){</span>
              </div>
              <div class="pTwo VSL">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">arr</span>
                <span class="brackets">)</span>
              </div>
              <div class="brackets">}</div>
              <div>
                <span class="word">render</span>
                <span class="brackets">(</span> <span class="word">data</span>
                <span class="brackets">)</span>
              </div>
            </div>
            <div class="bgcVSMid">></div>
            <div class="bgcVS w100">
              <br />
              <br />
              <div>
                <span class="function">function </span>
                <span class="word">render</span>
                <span class="brackets">(</span> <span class="word">arr</span>
                <span class="brackets">){</span>
              </div>
              <div class="pTwo VSL">
                <span class="function">const </span>
                <span class="brackets">{</span> <span class="word">data</span>
                <span class="brackets">}</span> <span class="then">=</span>
                <span class="word">arr</span>
              </div>

              <div class="pTwo VSL">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">data</span>
                <span class="brackets">)</span>
              </div>
              <div class="brackets">}</div>
              <div>
                <span class="word">render</span>
                <span class="brackets">(</span> <span class="word">msg</span>
                <span class="brackets">)</span>
              </div>
              <br />
              <div class="disCen comment">更簡潔寫法 V</div>
              <br />
              <div>
                <span class="function">function </span>
                <span class="word">render</span>
                <span class="brackets">( { </span>
                <span class="word">data </span>
                <span class="brackets">} ) {</span>
              </div>

              <div class="pTwo VSL">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">data</span>
                <span class="brackets">)</span>
              </div>
              <div class="brackets">}</div>
              <div>
                <span class="word">render</span>
                <span class="brackets">(</span> <span class="word">msg</span>
                <span class="brackets">)</span>
              </div>
              <br />
              <div class="comment">data容易命名衝突, 接進來資料改名myData</div>
              <br />
              <div>
                <span class="function">function </span>
                <span class="word">render</span>
                <span class="brackets">( { </span>
                <span class="word">data: myData </span>
                <span class="brackets">} ) {</span>
              </div>

              <div class="pTwo VSL">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">myData</span>
                <span class="brackets">)</span>
              </div>
              <div class="brackets">}</div>
              <div>
                <span class="word">render</span>
                <span class="brackets">(</span> <span class="word">msg</span>
                <span class="brackets">)</span>
              </div>
            </div>
          </div>
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
