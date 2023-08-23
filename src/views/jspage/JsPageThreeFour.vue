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
          <div @click="locate('')" class="leftNavText">.push()</div>
          <div @click="locate('')" class="leftNavText">.pop()</div>
          <div @click="locate('')" class="leftNavText">.shift</div>
          <div @click="locate('')" class="leftNavText">.unshift</div>

          <div @click="locate('')" class="leftNavText">.map()</div>

          <div @click="locate('threemethod001')" class="leftNavText">
            .forEach()
          </div>
          <div @click="locate('')" class="leftNavText">.join()</div>

          <div @click="locate('threemethod002')" class="leftNavText">
            .reduce()
          </div>
          <div @click="locate('threemethod003')" class="leftNavText">
            .find()
          </div>
          <div @click="locate('')" class="leftNavText">.slice()</div>
          <div @click="locate('')" class="leftNavText">.splice()</div>

          <div @click="locate('')" class="leftNavText">
            <div>.every()</div>
            <div>.some()</div>
          </div>
          <div @click="locate('')" class="leftNavText">.concat(arr)</div>

          <div @click="locate('')" class="leftNavText">Array.form()</div>
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
          <div class="fz28">
            <span class="cor17"> . . . . . </span> shift ↖
            <span class="cor17"> . . . </span> ↗ pop
          </div>
          <div class="fz28">unshift → ▯▮▮▮▯ ← push</div>

          <br />

          <table class="fz28">
            <tr>
              <td>🐕🐕🐕🐕.map(🐕=>🐶)</td>
              <td class="pad10">></td>
              <td>🐶🐶🐶🐶</td>
            </tr>

            <tr>
              <td>🐕🐶🐕🐕.filter(🐶)</td>
              <td class="pad10">></td>
              <td>🐶</td>
            </tr>
            <tr>
              <td>🐕🐶🐕🐕.every(🐕)</td>
              <td class="pad10">></td>
              <td>false</td>
            </tr>
            <tr>
              <td>🐕🐶🐶🐕.some(🐶)</td>
              <td class="pad10">></td>
              <td>true</td>
            </tr>
            <tr>
              <td>🐕🐕🐕🐕.fill(🐶,1)</td>
              <td class="pad10">></td>
              <td>🐕🐶🐶🐶</td>
            </tr>
            <tr>
              <td>🐕🐕🐶🐕.findIndex.(el=>el===🐶)</td>
              <td class="pad10">></td>
              <td>2</td>
            </tr>
            <tr>
              <td>🐕🐶🐕🐕.find(🐶)</td>
              <td class="pad10">></td>
              <td>🐶</td>
            </tr>

            <!-- <tr>
              <td></td>
              <td class="pad10"></td>
              <td></td>
            </tr> -->
          </table>
          <br />
          <br />
          <br />
          <br />
          <table class="fz30 methodTable">
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
              <td class="tdPad">forEach</td>
              <td class="tdPad">遍歷數組</td>
              <td class="tdPad">不返回數組, 常用於查找遍歷數組元素</td>
            </tr>
            <tr>
              <td class="tdPad">filter</td>
              <td class="tdPad">過濾數組</td>
              <td class="tdPad">
                <span class="cor36">返回</span>新數組,
                <span class="cor36">返回</span>的是篩選滿足條件的數組元素
              </td>
            </tr>
            <tr>
              <td class="tdPad">reduce</td>
              <td class="tdPad">累計器</td>
              <td class="tdPad">
                <span class="cor36">返回</span>累計處理的結果, 常用於求和
              </td>
            </tr>
            <tr>
              <td class="tdPad">join</td>
              <td class="tdPad"></td>
              <td class="tdPad">
                數組拼接成字串, <span class="cor36">返回</span> 字串
              </td>
            </tr>
            <tr>
              <td class="tdPad">find</td>
              <td class="tdPad">查找元素</td>
              <td class="tdPad">
                <span class="cor36">返回</span>符合條件的第一個數組元素值,
                沒有則<span class="cor36">返回</span>undefined
              </td>
            </tr>
            <tr>
              <td class="tdPad">every</td>
              <td class="tdPad"></td>
              <td class="tdPad">
                數組所有元素是否都符合條件, 所有都符合<span class="cor36"
                  >返回</span
                >true, 否<span class="cor36">返回</span>false
              </td>
            </tr>
            <tr>
              <td class="tdPad">some</td>
              <td class="tdPad"></td>
              <td class="tdPad">
                數組中的元素是否有滿足條件的, 如果有<span class="cor36"
                  >返回</span
                >true, 沒有<span class="cor36">返回</span>false
              </td>
            </tr>
            <tr>
              <td class="tdPad">concat</td>
              <td class="tdPad"></td>
              <td class="tdPad">
                合併 2 個數組, <span class="cor36">返回</span>生成新數組
              </td>
            </tr>
            <tr>
              <td class="tdPad">sort</td>
              <td class="tdPad"></td>
              <td class="tdPad">對原數組單元值排序</td>
            </tr>
            <tr>
              <td class="tdPad">splice</td>
              <td class="tdPad"></td>
              <td class="tdPad">刪除或替換原數組單元</td>
            </tr>
            <tr>
              <td class="tdPad">reverse</td>
              <td class="tdPad"></td>
              <td class="tdPad">反轉數組</td>
            </tr>
            <tr>
              <td class="tdPad">findIndex</td>
              <td class="tdPad"></td>
              <td class="tdPad">查找元素的索引值</td>
            </tr>

            <!-- <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr> -->
          </table>

          <div id="threemethod00" class="articleCardTitle cor36 fz34">
            4. push() . . . 會改變原數組
          </div>
          <p class="fz28">
            push 方法 在 數組末端 添加 一個or多個 元素 ,
            並返回添加新元素後的數組長度
          </p>
          <p class="fz28">注意 會改變原數組</p>
          <br />
          <div class="fz28">
            <span class="cor17"> . . . . . </span> shift ↖
            <span class="cor17"> . . . </span> ↗ pop
          </div>
          <div class="fz28">unshift → ▯▮▮▮▯ ← push</div>

          <div class="bgcVS">
            <div>
              <span class="function">let </span> <span class="word">arr</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="src">"hi"</span> <span class="brackets">]</span>
            </div>
            <div><span class="comment">//arr[1]="添加方法1"</span></div>
            <div>
              <span class="word">arr</span> <span class="variable">.push</span>
              <span class="brackets">(</span> <span class="src">"大家好"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="function">let </span>
              <span class="word">arrLength</span> <span class="then">=</span>
              <span class="word">arr</span> <span class="variable">.push</span>
              <span class="brackets">(</span> <span class="src">"大家好"</span>
              <span class="brackets">)</span>
              <span class="comment">//打印添加這個東西,返回數組長度//2</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">arr</span>
              <span class="brackets">)</span>
              <span class="comment">//["hi","大家好"]</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span>
              <span class="word">arrLength</span>
              <span class="brackets">)</span>
              <span class="comment">// 2</span>
            </div>
            <br />
            <p>也可以同時添加多條</p>
            <div>
              <span class="word">arr</span> <span class="variable">.push</span>
              <span class="brackets">(</span>
              <span class="src">"大家好",123,"hi"</span>
              <span class="brackets">)</span>
            </div>
          </div>

          <div id="threemethod00" class="articleCardTitle cor36 fz34">
            4. pop() . . . 會改變原數組
          </div>
          <p class="fz28">push 方法 刪除數組的最後一個元素 , 並返回該元素</p>
          <p class="fz28">注意 會改變原數組</p>
          <br />
          <div class="fz28">
            <span class="cor17"> . . . . . </span> shift ↖
            <span class="cor17"> . . . </span> ↗ pop
          </div>
          <div class="fz28">unshift → ▯▮▮▮▯ ← push</div>

          <div class="bgcVS">
            <div>
              <span class="function">let </span> <span class="word">arr</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="number">100,200,300,400</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">arr</span> <span class="variable">.pop</span>
              <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">arr</span>
              <span class="brackets">)</span>
              <span class="comment">//[100,200,300]</span>
            </div>
          </div>

          <div id="threemethod00" class="articleCardTitle cor36 fz34">
            4. shift() . . . 會改變原數組
          </div>
          <p class="fz28">shift 方法 刪除數組的第一個元素 , 並返回該元素</p>
          <p class="fz28">注意 會改變原數組</p>
          <br />
          <div class="fz28">
            <span class="cor17"> . . . . . </span> shift ↖
            <span class="cor17"> . . . </span> ↗ pop
          </div>
          <div class="fz28">unshift → ▯▮▮▮▯ ← push</div>

          <div class="bgcVS">
            <div>
              <span class="function">let </span> <span class="word">name</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="src">"wayne","neo","jack"</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">let </span>
              <span class="word">result</span> <span class="then">=</span>
              <span class="word">name</span>
              <span class="variable">.shift</span>
              <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">name</span>
              <span class="brackets">)</span>
              <span class="comment">//["neo","jack"]</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="brackets">)</span>
              <span class="comment">//wayne</span>
            </div>
            <br />
            <div><span class="comment">//清空數組元素</span></div>
            <div>
              <span class="function">let </span> <span class="word">arr</span>
              <span class="then">=</span> <span class="brackets">[]</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">arr</span>
              <span class="variable">.shift</span>
              <span class="brackets">())</span>
              <span class="comment">//undefined</span>
            </div>
            <br />
            <div>
              <span class="function">let </span> <span class="word">arr1</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="number">100,200,300</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">let </span> <span class="word">item</span>
            </div>
            <div>
              <span class="comment"
                >//()裡面取布林值,當0,undefined,Null,NaN,空數值,false為false</span
              >
            </div>
            <div>
              <span class="word">while</span> <span class="brackets">(</span>
              <span class="word">item</span> <span class="then">=</span>
              <span class="word">arr1</span>
              <span class="variable">.shift</span>
              <span class="brackets">()){</span>
              <span class="comment">//我把arr1每次刪除的數據賦值給item</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="brackets">)</span>
              <span class="comment">//100//200//300//[]</span>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
          </div>
          <div id="threemethod00" class="articleCardTitle cor36 fz34">
            4. unshift() . . . 會改變原數組
          </div>
          <p class="fz28">
            shift 方法 向 數組的第一個位置 添加元素 , 並返回添加元素後的
            數組長度
          </p>
          <p class="fz28">注意 會改變原數組</p>
          <br />
          <div class="fz28">
            <span class="cor17"> . . . . . </span> shift ↖
            <span class="cor17"> . . . </span> ↗ pop
          </div>
          <div class="fz28">unshift → ▯▮▮▮▯ ← push</div>

          <div class="bgcVS">
            <div>
              <span class="function">let </span> <span class="word">arr</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="number">200</span> <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">arr</span>
              <span class="variable">.unshift</span>
              <span class="brackets">(</span> <span class="number">100</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">arr</span>
              <span class="brackets">)</span>
              <span class="comment">//[100,200]</span>
            </div>
            <br />
            <p>也可以添加多個</p>
          </div>

          <div id="threemethod001" class="articleCardTitle cor36 fz34">
            4. map()
          </div>
          <p class="fz28">
            map 可以遍歷數組 處理數據 , 並
            <span class="spo pad10 cor36"> 返回 新數組</span>
          </p>
          <br />
          <p class="fz28">map([🐮,🥔,🐔,🌽] , cook) => [🍔,🍟,🍗,🍿]</p>

          <div class="bgcVS">
            <div>
              <span class="word">被遍歷的數組</span>
              <span class="variable">.map</span>
              <span class="brackets">(</span>
              <span class="function">function回調函數 </span>
              <span class="brackets">(</span>
              <span class="word">當前數組元素,當前元素索引號</span>
              <span class="brackets">){</span>
            </div>
            <div class="comment pTwo">//函數體</div>
            <div class="brackets">}</div>

            <br />
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="brackets">[</span> <span class="src">"red"</span>
              <span class="then">,</span> <span class="src">"blue"</span>
              <span class="then">,</span> <span class="src">"pink"</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">arr</span> <span class="variable">.map</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span>
              <span class="word">ele,index</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span> <span class="word">.log</span>
              <span class="brackets">(</span> <span class="word">ele</span>
              <span class="brackets">)</span>
              <span class="comment">//red//blue//pink//數組元素</span>
              <span class="word"></span>
              <div>
                <span class="word">console</span>
                <span class="word">.log</span> <span class="brackets">(</span>
                <span class="word">index</span> <span class="brackets">)</span>
                <span class="comment">//0//1//2//索引號</span>
              </div>
              <div>
                <span class="then">return </span> <span class="word">el</span>
                <span class="then">+</span> <span class="src">"顏色"</span>
              </div>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
            <P>map 特點: 有一個數組返回給我們 , 所以 const newArr</P>
            <br />
            <div>
              <span class="function">const </span>

              <span class="word">newArr</span> <span class="then">=</span>
              <span class="word">arr</span> <span class="variable">.map</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span>
              <span class="word">ele,index</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span> <span class="word">.log</span>
              <span class="brackets">(</span> <span class="word">ele</span>
              <span class="brackets">)</span>
              <span class="comment">//red//blue//pink//數組元素</span>
              <span class="word"></span>
              <div>
                <span class="word">console</span>
                <span class="word">.log</span> <span class="brackets">(</span>
                <span class="word">index</span> <span class="brackets">)</span>
                <span class="comment">//0//1//2//索引號</span>
              </div>
              <div>
                <span class="then">return </span> <span class="word">el</span>
                <span class="then">+</span> <span class="src">"顏色"</span>
              </div>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">newArr</span>
              <span class="brackets">)</span>
            </div>
          </div>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>
          <p class="fz28"></p>

          <div id="threemethod002" class="articleCardTitle cor36 fz34">
            4. forEach
          </div>
          <p class="fz28">
            forEach() 方法用於調用數組的每個元素, 並將元素傳遞給回調函數
          </p>
          <br />
          <p class="fz28">適合用來遍歷數組對象</p>

          <div class="bgcVS">
            <div>
              <span class="comment"
                >1.裡面幾個參數 2. 返回值返回什麼 3. 使用方法</span
              >
            </div>
            <br />
            <div>
              <span class="word">被遍歷的數組</span>
              <span class="variable">.forEach</span>
              <span class="brackets">(</span>
              <span class="function">function回調函數 </span>
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
            <br />
            <br />
            <p>練習 渲染 ul 列表</p>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">list</span> <span class="then">=</span>
              <span class="brackets">[{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">id:</span> <span class="src">"0001",</span>
              <div>
                <span class="word">mame:</span> <span class="src">"wayne"</span>
              </div>
              <div><span class="brackets">},{</span></div>
              <span class="word">id:</span> <span class="src">"0002",</span>
              <div>
                <span class="word">mame:</span> <span class="src">"jack"</span>
              </div>
              <div><span class="brackets">},{</span></div>
              <span class="word">id:</span> <span class="src">"0003",</span>
              <div>
                <span class="word">mame:</span> <span class="src">"neo"</span>
              </div>

              <div></div>
            </div>
            <div><span class="brackets">}]</span></div>
            <br />
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">=</span>
              <span class="src">"list"</span> <span class="then">>＜/ </span>
              <span class="number">div </span> <span class="then">></span>
            </div>
            <div>
              <span class="function">let </span> <span class="word">str</span>
              <span class="then">=</span> <span class="src">""</span>
            </div>
            <div>
              <span class="word">list</span>
              <span class="variable">.forEach</span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span> <span class="word">.log</span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="brackets">)</span>
              <span class="comment">//每一個數組元素->物件</span>
              <div>
                <span class="word">str</span> <span class="then">+=</span>
                <span class="src">` ＜p></span>
                <span class="then">${</span>
                <span class="word">item.name</span> <span class="then">}</span>
                <span class="src">＜/p>`</span>
              </div>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
            <div>
              <span class="word">document</span>
              <span class="variable">.querySelector</span>
              <span class="brackets">(</span> <span class="src">".list"</span>
              <span class="brackets">)</span>
              <span class="variable">.innerHTML</span>
              <span class="then">=</span> <span class="word">str</span>
            </div>
            <br />
            <p>改成 解構賦值</p>
            <br />
            <div>
              <span class="word">list</span>
              <span class="variable">.forEach</span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>

            <div class="padTwo VSL">
              <span class="function">const </span>
              <span class="brackets">{</span> <span class="word">name</span>
              <span class="brackets">}</span> <span class="then">=</span>
              <span class="word">item</span>
              <div>
                <span class="word">str</span> <span class="then">+=</span>
                <span class="src">` ＜p></span>
                <span class="then">${</span>
                <span class="word">name</span> <span class="then">}</span>
                <span class="src">＜/p>`</span>
              </div>
              <div></div>
            </div>

            <div><span class="brackets">})</span></div>
          </div>
          <p class="fz28">1. forEach 主要是遍歷數組</p>
          <p class="fz28">2. 索引號可以不寫</p>

          <div id="threemethod001" class="articleCardTitle cor36 fz34">
            4. join()
          </div>
          <p class="fz28">用於把 數組中的 所有元素 轉換一個字串</p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="brackets">[</span> <span class="src">"red"</span>
              <span class="then">,</span> <span class="src">"blue"</span>
              <span class="then">,</span> <span class="src">"pink"</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arr.join</span>
              <span class="brackets">())</span>
              <span class="comment">//小括號為空,則逗號分割</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arr.join</span>
              <span class="brackets">(</span> <span class="src">""</span>
              <span class="brackets">))</span>
              <span class="comment">//redbluepink</span>
            </div>
          </div>

          <div id="threemethod002" class="articleCardTitle cor36 fz34">
            4. reduce
          </div>
          <p class="fz28">reduce 返回累計處理的結果, 常用於求和</p>
          <div class="bgcVS">
            <div>
              <span class="commsnt"
                >1.裡面幾個參數 2. 返回值返回什麼 3. 使用方法</span
              >
            </div>
            <br />
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
          </div>
          <div id="threemethod003" class="articleCardTitle cor36 fz34">
            4. find <span class="spo marL100">回調</span>
          </div>
          <div class="bgcVS">
            <div>
              <span class="comment"
                >1.裡面幾個參數 2. 返回值返回什麼 3. 使用方法</span
              >
            </div>
            <br />
            <div>
              <span class="word">arr.</span> <span class="variable">find</span>
              <span class="brackets">(</span> <span class="cor36">回調</span>
              <span class="word">返回數組第一個滿足條件的值</span>
              <span class="brackets">)</span>
            </div>
            <br />
            #
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="brackets">[</span>
              <span class="src">"wayne","neo","jack"</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">re </span> <span class="then">= </span>

              <span class="word">arr</span>
              <span class="variable">.find</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span>
              <span class="word">item</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo">
              <span class="then">return </span> <span class="word">item</span>
              <span class="then">===</span> <span class="src">"wayne"</span>
            </div>
            <div class="brackets">})</div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">re</span> <span class="brackets">); </span>
              <span class="comment">// wayne</span>
            </div>
            <br />
            <br />
            <p>我只想要 wayne 怎麼做?</p>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">= </span>
              <span class="brackets">[ {</span>
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
            <br />
            <div>
              <span class="word">arr.</span> <span class="variable">find</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span>

              <span class="brackets">(</span> <span class="word">item</span>
              <span class="brackets">)</span>
              <span class="comment">//{name:"wayne",number:1000},{...}</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span>

              <span class="brackets">(</span>
              <span class="word">item.name</span>
              <span class="brackets">)</span>
              <span class="comment">//wayne neo jack</span>
            </div>
            <div class="pTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="number">1</span> <span class="brackets">)</span>
              <span class="comment"
                >//打印1次//找到數組中第一個滿足就不再找了</span
              >
            </div>
            <div class="pTwo VSL">
              <span class="then">return </span>
              <span class="word">item.name</span> <span class="then">===</span>
              <span class="src">"wayne"</span>
              <span class="comment">//返回這條物件 數組元素</span>
            </div>
            <div class="brackets">})</div>
            <br />
            <br />
            <div>
              <span class="function">const </span> <span class="word">mi</span>
              <span class="then">=</span>

              <span class="word">arr.</span> <span class="variable">find</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="brackets">){</span>
            </div>
            <div class="pTwo VSL">
              <span class="then">return </span>
              <span class="word">item.name</span> <span class="then">===</span>
              <span class="src">"wayne"</span>
              <span class="comment">//返回這條物件 數組元素</span>
            </div>
            <div class="brackets">})</div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">mi</span> <span class="brackets">)</span>
              <span class="comment">//{name:"wayne",number:1000}</span>
            </div>
            <br />
            <br />
            <div>
              <span class="function">const </span> <span class="word">mi</span>
              <span class="then">=</span> <span class="word">arr.</span
              ><span class="variable">find</span>

              <span class="brackets">(</span> <span class="word">item</span>
              <span class="function">=></span>
              <span class="word">item.name</span> <span class="then">===</span>
              <span class="src">"wayne"</span> <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">mi</span> <span class="brackets">)</span>
              <span class="comment">//{name:"wayne",number:1000}</span>
            </div>
          </div>

          <div id="threemethod003" class="articleCardTitle cor36 fz34">
            4. slice
          </div>
          <p class="fz28"></p>
          <br />
          <div class="bgcVS">
            <div>
              <span class="variable">.slice</span>
              <span class="brackets">(</span>
              <span class="number">2個參數可選</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="variable">.slice</span>
              <span class="brackets">(</span>
              <span class="word">擷取時起始位置,終止位置</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <br />
            <div>
              <span class="function">let </span> <span class="word">arr</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="number">1,2,3,4,5</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">let </span> <span class="word">str</span>
              <span class="then">=</span> <span class="src">"12345"</span>
            </div>
            <br />
            <div>
              <span class="comment"
                >//沒參數,直接把原數組or原字串整個拷貝成新數組並返回</span
              >
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">arr</span>
              <span class="variable">.slice</span>
              <span class="brackets">()) </span>
              <span class="comment">//[1,2,3,4,5]</span>
            </div>
            <br />
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">arr</span>
              <span class="variable">.slice</span>
              <span class="brackets">(</span> <span class="number">1</span>
              <span class="brackets">))</span>
              <span class="comment">//[2,3,4,5]//1當起始位置,數組末最終</span>
            </div>
          </div>

          <div id="threemethod003" class="articleCardTitle cor36 fz34">
            4. every & some <span class="spo marL100">回調</span>
          </div>

          <p class="fz28">
            every 每一個是否都符合條件, 都符合返回 true, 否返回 false
          </p>
          <br />
          <p class="fz28">🐕🐶🐕🐕.every(🐕) > false</p>
          <div class="bgcVS">
            <div>
              <span class="comment"
                >1.裡面幾個參數 2. 返回值返回什麼 3. 使用方法</span
              >
            </div>
            <br />
            <div>
              <span class="word">arr.</span>
              <span class="variable">every</span>
              <span class="brackets">(</span> <span class="cor36">回調</span>
              <span class="word">返回布林值</span>
              <span class="brackets">)</span> <span class="word"></span>
            </div>
            <br />
            #
            <div>
              <span class="function">const </span>
              <span class="word">arr</span> <span class="then">=</span>
              <span class="brackets">[</span>
              <span class="number">10,20,30</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">flag</span> <span class="then">=</span>
              <span class="word">arr.</span> <span class="variable">every</span>

              <span class="brackets">(</span> <span class="word">item</span>
              <span class="function">=></span> <span class="word">item</span>
              <span class="then">>=</span> <span class="number">10</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">flag</span> <span class="brackets">) </span>
              <span class="comment">// true</span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">flag</span> <span class="then">=</span>
              <span class="word">arr.</span> <span class="variable">some</span>

              <span class="brackets">(</span> <span class="word">item</span>
              <span class="function">=></span> <span class="word">item</span>
              <span class="then">>=</span> <span class="number">20</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">flag</span> <span class="brackets">) </span>
              <span class="comment">// true</span>
            </div>
          </div>

          <div id="threemethod00" class="articleCardTitle cor36 fz34">
            4. concat . . . 不改變 原數組
          </div>

          <p class="fz28">
            concat 方法用於 多個數組合並 , 他將 新數組的成員 , 加到 原數組
            成員的 後部 , 然後返回一個 新數組
          </p>

          <p class="fz28">原數組不變</p>
          <br />
          <div class="bgcVS">
            <div>
              <span class="function">let </span> <span class="word">arr1</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="src">"wayne","jack"</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="function">let </span> <span class="word">arr2</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="src">"hello","hi"</span>
              <span class="brackets">]</span> <span class="word"></span>
            </div>
            <br />
            <div><span class="comment">//直接+會變字串</span></div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">arr1</span>
              <span class="then">+</span> <span class="word">arr2</span>
              <span class="brackets">)</span>
              <span class="comment">//wayne,jackhello,hi</span>
            </div>
            <br />
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span>
              <span class="word">arr1.concat</span>
              <span class="brackets">(</span> <span class="word">arr2</span>
              <span class="brackets">)) </span>
              <span class="comment">//["wayne","jack","hello","hi"]</span>
            </div>
            <br />
            <p>也可以多個</p>
            <br />
            <div>
              <span class="function">let </span> <span class="word">arr3</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="src">"web","Python"</span>
              <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span>
              <span class="word">arr1.concat</span>
              <span class="brackets">(</span>
              <span class="word">arr2,arr3</span>
              <span class="brackets">))</span>
              <span class="comment"
                >//["wayne","jack","hello","hi","web","Python"]</span
              >
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">arr1</span>
              <span class="brackets">)</span>
              <span class="comment">//3個原數組沒變</span>
            </div>
            <br />
            <p>除了接受數組,也接受其他類型的值作為參數,添加到數組尾部</p>
            <br />
            <div>
              <span class="function">let </span> <span class="word">arr4</span>
              <span class="then">=</span> <span class="brackets">[</span>
              <span class="number">10</span> <span class="brackets">]</span>
            </div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">arr4</span>
              <span class="variable">.concat</span>
              <span class="brackets">(</span>
              <span class="number">20,30,40</span>
              <span class="brackets">))</span>
              <span class="comment">//[10,20,30,40]</span>
            </div>
            <br />
            <br />
            <br />
            <div>
              <span class="brackets">[</span> <span class="number">1,2,3</span>
              <span class="brackets">]</span>
              <span class="variable">.concat</span>
              <span class="brackets">(</span>
              <span class="number">4,5,6,</span>
              <span class="brackets">[</span> <span class="number">7,8,9</span>
              <span class="brackets">])</span>
            </div>
            <div>
              <span class="brackets">[</span>
              <span class="number">1,2,3,4,5,6,7,8,9</span>
              <span class="brackets">]</span>
            </div>
          </div>

          <div id="threemethod00" class="articleCardTitle cor36 fz34">
            4. Array.form()
          </div>

          <p class="fz28">偽數組轉換為真數組</p>
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="word">ul</span>
              <span class="then">></span>
            </div>
            <div class="pTwo">
              <span class="then">＜</span> <span class="word">li</span>
              <span class="then">></span>
            </div>
            <div class="pTwo">
              <span class="then">＜</span> <span class="word">li</span>
              <span class="then">></span>
            </div>
            <div class="pTwo">
              <span class="then">＜</span> <span class="word">li</span>
              <span class="then">></span>
            </div>
            <div>
              <span class="then">＜/</span> <span class="word">ul</span>
              <span class="then">></span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">lis</span> <span class="then">=</span>
              <span class="word">document</span>
              <span class="variable">.querySelectorAll</span>
              <span class="brackets">(</span> <span class="src">"ul li"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">lis</span> <span class="brackets">)</span>
              <span class="comment">// 是 偽數組 Argument 也是</span>
            </div>
            <div>
              <span class="word">lis.</span> <span class="variable">pop</span>
              <span class="brackets">() </span>
              <span class="comment">// pop is not a function</span>
            </div>
            <div>
              <span class="function">const </span>
              <span class="word">liss</span> <span class="then">=</span>
              <span class="brackets">Array</span>
              <span class="variable">.from</span>
              <span class="brackets">(</span> <span class="word">lis</span>
              <span class="brackets">)</span>
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

          <div id="threemethod00" class="articleCardTitle cor36 fz34">
            4. 綜合練習
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
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">spec</span> <span class="then">=</span>
              <span class="brackets">{</span> <span class="word">size:</span>
              <span class="src">"40cm*40cm"</span>
              <span class="word">,color:</span>
              <span class="src">"black"</span> <span class="brackets">}</span>
            </div>
            <span class="comment">//1.獲取所有屬性值</span>
            <div>
              <span class="brackets">Object</span>
              <span class="variable">.values</span>
              <span class="brackets">(</span> <span class="word">spec</span>
              <span class="brackets">)</span>
            </div>

            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">Object.values</span>
              <span class="brackets">(</span> <span class="word">spec</span>
              <span class="brackets">))</span>
              <span class="comment">//["40cm*40cm","black"]</span>
            </div>
            <span class="comment">// 2. 轉換為字串 join("/")</span>

            <span class="comment">// 2. 轉換為字串</span>
            <div>
              <span class="brackets">Object</span>
              <span class="variable">.values</span>
              <span class="brackets">(</span> <span class="word">spec</span>
              <span class="brackets">)</span>
              <span class="variable">.join</span>
              <span class="brackets">(</span> <span class="src">"/"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="brackets">Object</span>
              <span class="variable">.values</span>
              <span class="brackets">(</span> <span class="word">spec</span>
              <span class="brackets">)</span>
              <span class="variable">.join</span>
              <span class="brackets">(</span> <span class="src">"/"</span>
              <span class="brackets">)) </span>
              <span class="comment">//40cm*40cm/black</span>
            </div>
            <div>
              <span class="word">document.</span>
              <span class="variable">querySelect</span>
              <span class="brackets">(</span>
              <span class="src">".showDiv"</span>
              <span class="brackets">)</span>
              <span class="variable">.innerHTML</span>
              <span class="then">=</span> <span class="brackets">Object</span>
              <span class="word">.value</span> <span class="brackets">(</span>
              <span class="word">spec</span> <span class="brackets">)</span>
              <span class="variable">.join</span>
              <span class="brackets">(</span> <span class="src">"/"</span>
              <span class="brackets">)</span>
            </div>
          </div>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">tea</span> <span class="then">=</span>
              <span class="src">"50g的飲料,100g茶葉"</span>
            </div>

            <span class="comment">// 1.把字串轉成數組</span>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="src">","</span>
              <span class="brackets">)) </span>
              <span class="comment">// [ "50g的飲料", "100g茶葉" ]</span>
            </div>
            <span class="comment">// 2. 有幾條數據 我就生成幾個 ＜span></span>
            <div>
              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="src">","</span>
              <span class="brackets">)</span>
              <span class="variable">.map</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="brackets">){ </span>
              <span class="comment">//item是裡面的每一個值</span>
            </div>
            <div class="pTwo">
              <div class="dis">
                <div>
                  <span class="then">return </span>
                  <span class="src">`＜span>贈品</span>
                  <span class="then">${</span> <span class="word">item</span>
                  <span class="then">}</span> <span class="src">＜/span>`</span>
                </div>
                <div class="comment">
                  <span>//贈品50g的飲料</span>
                  <br />
                  <span>//贈品100g茶葉</span>
                </div>
              </div>
            </div>
            <span class="brackets">})</span>
            <div>
              <span class="function">const </span>
              <span class="word">str</span> <span class="then">=</span>

              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="src">","</span>
              <span class="brackets">)</span>
              <span class="variable">.map</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="brackets">){ </span>
            </div>
            <div class="pTwo">
              <div>
                <span class="then">return </span>
                <span class="src">`＜span>贈品</span>
                <span class="then">${</span> <span class="word">item</span>
                <span class="then">}</span> <span class="src">＜/span>`</span>
              </div>
            </div>
            <span class="brackets">})</span>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">arr</span> <span class="brackets">) </span>
              <span class="comment"
                >["＜span>贈品50g的飲料＜/span>","＜span>贈品100g茶葉＜/span>"]</span
              >
            </div>
            <br />
            <div class="comment">數組不能直接往盒子加</div>
            <div class="comment">想要改成字串</div>
            <div>
              <span class="function">const </span>
              <span class="word">str</span> <span class="then">=</span>

              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="src">","</span>
              <span class="brackets">)</span>
              <span class="variable">.map</span>
              <span class="brackets">(</span>
              <span class="function">function </span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="brackets">){ </span>
            </div>
            <div class="pTwo">
              <div>
                <span class="then">return </span>
                <span class="src">`＜span>贈品</span>
                <span class="then">${</span> <span class="word">item</span>
                <span class="then">}</span> <span class="src">＜/span>`</span>
              </div>
            </div>
            <div>
              <span class="brackets">})</span
              ><span class="variable">.join</span>
              <span class="brackets">(</span> <span class="src">""</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">str</span> <span class="brackets">)</span>
            </div>
            <span class="comment"
              >＜span>贈品50g的飲料＜/span>＜span>贈品100g茶葉＜/span></span
            >

            <div>
              <span class="word">document.</span>
              <span class="variable">querySelector</span>
              <span class="brackets">(</span> <span class="src">"div"</span>
              <span class="brackets">)</span>
              <span class="variable">.innerHTML</span>
              <span class="then">=</span> <span class="word">str</span>
            </div>
            <br />
            <br />
            <p>轉成箭頭函數</p>
            <br />
            <div>
              <span class="function">const </span>
              <span class="word">tea</span> <span class="then">=</span>
              <span class="src">"50g的飲料,100g茶葉"</span>
            </div>
            <br />
            <div>
              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="then">","</span>
              <span class="brackets">)</span>
              <span class="variable">.map</span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="function">=></span>
              <span class="src">`＜span>贈品</span>
              <span class="then">${</span> <span class="word">item</span>
              <span class="then">}</span>
              <span class="src">＜/span>＜br>`</span>
              <span class="brackets">)</span>
              <span class="variable">.join</span>
              <span class="brackets">(</span> <span class="src">""</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="word">document.</span>
              <span class="variable">querySelector</span>
              <span class="brackets">(</span> <span class="word">"div"</span>
              <span class="brackets">)</span>
              <span class="variable">.innerHTML</span>
              <span class="then">=</span>

              <span class="word">tea.</span>
              <span class="variable">split</span>
              <span class="brackets">(</span> <span class="then">","</span>
              <span class="brackets">)</span>
              <span class="variable">.map</span>
              <span class="brackets">(</span> <span class="word">item</span>
              <span class="function">=></span>
              <span class="src">`＜span>贈品</span>
              <span class="then">${</span> <span class="word">item</span>
              <span class="then">}</span>
              <span class="src">＜/span>＜br>`</span>
              <span class="brackets">)</span>
              <span class="variable">.join</span>
              <span class="brackets">(</span> <span class="src">""</span>
              <span class="brackets">)</span>
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
td {
  border-bottom: 1px solid #2f2f2f;
}

.tdPad {
  padding: 150px 35px 0 0;
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
