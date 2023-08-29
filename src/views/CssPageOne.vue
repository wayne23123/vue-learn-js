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
          <div @click="locate('cssOne001')" class="leftNavText">
            px,rem,em,vw
          </div>
          <div @click="locate('cssOne014')" class="leftNavText">
            link&@import
          </div>

          <div @click="locate('cssOne002')" class="leftNavText">position</div>
          <div @click="locate('cssOne012')" class="leftNavText">display</div>

          <div @click="locate('cssOne003')" class="leftNavText">盒模型</div>
          <div @click="locate('cssOne004')" class="leftNavText">BFC</div>
          <div @click="locate('cssOne005')" class="leftNavText">
            選擇器優先級
          </div>

          <div @click="locate('cssOne006')" class="leftNavText">
            水平垂直置中
          </div>
          <div @click="locate('cssOne007')" class="leftNavText">布局</div>
          <div @click="locate('cssOne008')" class="leftNavText">動畫</div>
          <div @click="locate('cssOne015')" class="leftNavText">
            偽類&偽元素
          </div>

          <div @click="locate('cssOne011')" class="leftNavText">
            隱藏元素的方法
          </div>

          <div @click="locate('cssOne010')" class="leftNavText">重繪回流</div>
          <div @click="locate('cssOne013')" class="leftNavText">
            那些屬性可繼承
          </div>
          <div @click="locate('cssOne009')" class="leftNavText">三角形</div>

          <div @click="locate('cssOne0')" class="leftNavText"></div>
          <div @click="locate('cssOne0')" class="leftNavText"></div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
        <div class="mainLayout">
          <br />
          <br />
          <p class="cor36">CSS3有哪些新屬性?</p>
          <p>flex transform translation animation 陰影 圓角</p>
          <br />
          <br />
          <div id="cssOne001" class="articleCardTitle cor36">
            [ CSS ] ≫ CSS有幾個單位px,rem,em,vw分別是怎樣?
          </div>
          <p>px是一個像素 . . . 絕對單位長度</p>
          <br />
          <br />
          <p class="pTwo">像素 是 顯示器上 給我們呈現畫面的 像素</p>
          <br />
          <p>rem是根據根元素(html) . . . 相對單位</p>
          <br />
          <p class="pTwo">
            相對 html 根節點的 font-size 的值 , 直接給 html 節點的 font-size:
            62.5%
          </p>
          <br />
          <p class="pTwo">1rem = 10px ( 16px * 62.5% = 10px)</p>
          <br />
          <br />
          <p>em當前節點字體大小的倍數</p>
          <br />
          <br />
          <p>vw相對於設備視口的寬度</p>
          <br />
          <br />
          <p class="cor36"># 像素是絕對的單位嗎?</p>
          <p>像素是由操作系統和硬件決定的</p>
          <br />
          <p>一般來說硬件的象素是改變不了的</p>
          <br />
          <p>但是操作系統可以說你這個硬件我 2 個象素做 1 個象素用</p>
          <br />
          <br />
          <p class="cor36"># vw的v</p>
          <p>viewport視口, 眼睛所能瀏覽到的區域</p>
          <br />
          <p class="cor36"># 視口是窗口嗎?</p>
          <p>不是,如果窗口裡面有一個內嵌窗口, 這個viewport會變成指內嵌窗口</p>
          <br />
          <br />
          <div id="cssOne014" class="articleCardTitle cor36">
            [ CSS ] ≫ link & @import
          </div>

          <p>都是引入外部 CSS 的方式</p>
          <br />
          <br />

          <p>1.</p>
          <p>link 是 HTML 提供的標籤</p>
          <br />
          <p>
            @import 是 CSS 提供語法 /p>
            <br />
            <br />
          </p>

          <p>2.加載順</p>

          <p>加載頁面時 link 標籤引入 CSS 可同時加載</p>
          <br />

          <p>@import 只會在頁面加載完畢後 才被加載</p>
          <br />
          <br />
          <p>3.</p>
          <p>link 支持使用 JS 控制 DOM 去改變樣式 (插入link標籤)</p>
          <br />

          <p>@import 不支持</p>
          <br />
          <br />

          <div id="cssOne002" class="articleCardTitle cor36">
            [ CSS ] ≫ position 的值和作用?
          </div>
          <p>static . relative . absolute . fixed</p>
          <br />
          <p class="cor36">static</p>
          <p class="pTwo">
            它是文檔流布局, 有行內元素和塊元素, 塊元素有一行接一行這種,
            行內元素就是橫著直到一行待不下就到第二行
          </p>
          <br />
          <p class="cor36">relative</p>
          <p class="pTwo">將元素偏離文檔流, 但占用正常文檔流位置</p>
          <p class="pTwo">relative 相對於 自身 進行定位</p>
          <br />
          <p class="cor36">absolute</p>
          <p class="pTwo">將元素偏離文檔流, 不占用正常文檔流位置</p>
          <br />

          <p class="pTwo">
            若沒有指定基準元素的話，預設以 body 元素(整個視窗)為基準
          </p>
          <p class="pTwo">
            absolute 元素的父元素 有 相對 或 絕對 定位 的元素的話
          </p>
          <p class="pTwo">
            absolute 元素相對於父元素 的 padding 左上角進行定位
          </p>
          <br />
          <p class="cor36">fixed</p>
          <p class="pTwo">將元素偏離文檔流, 不占用正常文檔流位置</p>
          <p class="pTwo">相對於 body 定位</p>
          <br />
          <br />
          <p class="cor36">sticky</p>
          <p class="pTwo">
            和 fixed 很像，差在 sticky 會佔住原本版面的空間，和 sticky 的預設
            width 是 100 % (滿版)
          </p>
          <br />
          <p class="pTw">
            被 fixed 的區塊會被固定在指定位置，並且覆蓋網頁中內容
          </p>
          <p class="pTw">
            而 sticky 會讓原本網頁的內容推到下面，不會讓 sticky 擋住原有的文字。
          </p>

          <br />
          <br />

          <div id="cssOne012" class="articleCardTitle cor36">
            [ CSS ] ≫ display的值?
          </div>
          <h3>none . 隱藏元素</h3>
          <br />
          <br />
          <h3>block . 把某元素 轉成 塊元素</h3>
          <br />
          <br />
          <h3>inline . 把某元素 轉成 內聯元素</h3>
          <br />
          <br />
          <h3>inline-block . 把某元素 轉成 行內塊元素</h3>
          <br />
          <br />
          <h3>flex . 彈性盒子</h3>
          <br />
          <br />
          <h3></h3>
          <br />
          <br />
          <h3>塊元素</h3>
          <p>
            ＜div> . ＜p> . ＜h1> . ＜ul> . ＜table> 獨佔一行, 頁面中垂直排列,
            可以設置寬高 和 內外邊距可控
          </p>
          <br />
          <h3>行內元素</h3>
          <p>
            ＜span> . ＜a> . ＜img> . ＜input> 默認同行排列, 寬高由內容決定,
            不能設置寬高
          </p>
          <br />
          <h3>行內塊元素</h3>
          <p>display:inline-block 不獨佔一行, 可以設置寬高</p>
          <br />
          <div id="cssOne003" class="articleCardTitle cor36">
            [ CSS ] ≫ 盒模型?區別?
          </div>
          <p>分為content-box和border-box</p>
          <p>區別在於width指定寬度不同</p>
          <p>content-box的寬度是內容的寬度</p>
          <p>border-box的寬度是內容寬度加上padding加上border</p>
          <br />
          <br />
          <div class="disCen">
            <img
              style="max-width: 500px"
              src="../assets/cssimg/cssbox001.png"
              alt=""
            />
          </div>
          <br />
          <br />
          <p class="cor36">#　一般用哪種?為什麼?</p>
          <p>border-box</p>
          <p>
            因為你改變大小時,那個盒子總大小不會變 ; 子元素會繼承父元素寬度
            content-box 寬度比你預想的要寬 用borderbox比較方便不用做額外計算
          </p>
          <br />
          <br />
          <p class="cor36">
            # *{box-sizing:border-box}偽元素會被影響到嗎?為什麼?
          </p>
          <p>不會, 因為*就選不到偽元素, *:before *:after</p>
          <br />
          <br />
          <div id="cssOne004" class="articleCardTitle cor36">
            [ CSS ] ≫ BFC是什麼
          </div>
          <p>塊級格式化上下文</p>
          <p>當前元素把他所有子元素包起來,不受外部影響</p>
          <p>
            在一個BFC中，塊狀盒子與行盒（行盒由一行中所有的內聯元素所組成）都會垂直地沿著其父元素的邊框排列。
          </p>
          <br />
          <br />
          <p class="cor36"># 為什麼要觸發BFC?</p>
          <p>阻止margin重叠 . 解决高度塌陷问题 . 消除浮動</p>
          <br />
          <br />
          <p class="cor36"># BFC怎麼觸發?</p>
          <p>overflow 的值非 visable . . . 一般用 overflow hidden</p>
          <p>display 的值為 inline-block</p>
          <p>position 的值為 absolute 或 fixed</p>
          <p>float 的值非 none</p>
          <br />
          <br />
          <p class="cor36"># margin外邊距重疊? or 外邊距合併?</p>
          <p>
            塊級元素的上外邊距和下外邊距有時會合併（或折疊）為一個外邊距，其大小取其中的最大者。
          </p>
          <br />
          <p>
            假設一個div元素在上面，另一個div元素在下面，下面外邊距為20px，上面外邊距為30px，他們之間的邊距會取最大值30px。
          </p>
          <br />
          <br />
          <p class="cor36"># 高度塌陷問題?</p>
          <p>
            父元素没有設定大小（或不設定高度），子元素浮動，子元素會跳出父元素的邊界（脫離文檔流）當父元素的高度為auto時，父元素的高度直接為0。
          </p>
          <br />
          <p class="vor36">解決:</p>
          <p class="pFou">1.父元素設定固定高度。</p>
          <p class="pFou">2.父元素設定overflow:hidden屬性。</p>
          <p class="pFou">3.在父元素末尾添加一個空元素並設定為清除浮動。</p>
          <p class="pFou">4.使用after偽元素來清除浮動。</p>
          <br />
          <br />
          <p class="cor36"># 清除浮動有哪些方式?</p>
          <p>1.觸發BFC</p>
          <p>
            2.後面加一個after偽類, content設為空, display設為block,
            然後加一個clear:both, 現在我一般用FLEX沒怎麼用浮動
          </p>
          <br />
          <br />
          <div id="cssOne005" class="articleCardTitle cor36">
            [ CSS ] ≫ CSS選擇器優先級和權重?
          </div>
          <span
            ><a href="https://ithelp.ithome.com.tw/articles/10243699"
              >資料來源: 選擇器表 @iT邦幫忙 Eudora</a
            ></span
          >
          <div></div>
          <br />
          <p>
            !import > 內聯樣式 > id 選擇器 > 類選擇器 > 標籤選擇器 >
            通配符選擇器
          </p>
          <br />
          <p class="cor36">CSS 權重計算:</p>
          <p>1.第一等: 內聯樣式 權重 1000</p>
          <br />
          <p>2.第二等: ID選擇器 權重 100</p>
          <br />
          <p>3.第三等: 類,屬性,偽類選擇器 權重 10</p>
          <br />
          <p>4.第四等: 標籤選擇器,偽元素選擇器 權重 1</p>
          <br />
          <p>5.第五等: 通配符選擇器 權重 0</p>
          <br />
          <br />
          <p class="cor36"># 選擇器在解析在匹配的時候從左邊開始還是右邊開始?</p>
          <p class="cor36">
            or # 假設我的選擇器是 a b
            c,目標是找到所有c,那瀏覽器是先去找到所有的c還是先找所有的a?
          </p>
          <br />
          <p>瀏覽器會從右到左解析CSS選擇器</p>
          <p>∕span -> ∕div -> html</p>
          <br />
          <p>從c找到a,右往左找</p>
          <br />
          <br />
          <p>
            <spen class="cor36">因為: </spen
            ><span
              >性能問題,假設從左往右會先找到很多a,可能99%沒用,沒必要找</span
            >
          </p>
          <br />
          <br />
          <p class="cor36">想選擇一個標籤的下一子層?</p>
          <p>標籤 右鍵頭 再加一個標籤</p>
          <br />
          <div class="dis spa">
            <div>elA > elB</div>
            <div>A 的下一子層 的所有 B (不含子子層)</div>
            <div>article > h2</div>
          </div>
          <br />
          <br />
          <p class="cor36">
            # CSS選擇器,我想選擇一個標籤的下一個標籤用什麼選擇器?
          </p>
          <p>加號選擇器</p>
          <br />
          <div class="dis spa">
            <div>elA + elB</div>
            <div>緊接在 A 後面的 B (同輩)</div>
            <div>h1 + p</div>
          </div>
          <br />
          <br />
          <p class="cor36"># 如果要找到所有name,x開頭的標籤,能找到嗎?</p>
          <p>屬性選擇器 加 上間號 等於</p>
          <br />
          <div class="dis spa">
            <div>X[ attr ^= val ]</div>
            <div>有___屬性且屬性值"開頭"為___的 X</div>
            <div>a[src^="https"]</div>
          </div>
          <br />
          <br />
          <p class="cor36">
            # jQuery選擇器怎麼實現的?IE可以.a或.b但不支持.a
            .b你怎麼實現查找$(".a .b")查找過程?
          </p>
          <p>
            先把選擇器做正則解析, 發現它的層級關係, 遍歷所有元素,
            看它是否滿足這個關係
          </p>
          <br />
          <br />

          <div id="cssOne006" class="articleCardTitle cor36">
            [ CSS ] ≫ 水平垂直置中?
          </div>
          <div>(margin 0 auto 前提是 child 要設寬)</div>
          <div>(margin auto前提是當前元素是絕對定位)</div>
          <div>
            (translate前提是先做了絕對定位, 距離負元素 let 50% top50%
            再translate(-50%, -50%))
          </div>
          <br />
          <div>1.知不知寬高 . 水平or垂直</div>
          <br />
          <h3 class="cor36">塊級元素居中布局</h3>
          <p class="cor36">水平居中</p>
          <p class="pFou">知道寬：margin: 0 auto;</p>
          <p class="pFou">不知寬</p>
          <br />
          <p class="cor36">垂直居中</p>
          <p class="pFou">
            position: absolute 設置 left、top、margin-left、margin-to (定高)
          </p>
          <p class="pFou">position: fixed 設置 margin: auto (定高)</p>
          <p class="pFou">display: table-cell</p>
          <p class="pFou">transform: translate(x, y)</p>
          <p class="pFou">flex (不定高，不定寬) ie11 ↑</p>
          <p class="pFou">grid (不定高，不定寬)，兼容性相對比較差 ie10 ↑</p>
          <br />

          <h3 class="cor36">內聯元素居中布局</h3>
          <p class="cor36">水平居中</p>
          <p class="pFou">行內元素父元素下可設置：text-align: center</p>
          <p class="pFou">
            flex布局設置父元素：display: flex; justify-content: center
          </p>
          <br />
          <p class="cor36">垂直居中</p>
          <p class="pFou">單行文本父元素確認高度：height === line-height</p>
          <br />
          <br />

          <br />
          <br />
          <h3 class="cor36">塊級元素居中布局</h3>
          <br />
          <p>flex 彈性盒子布局 (主軸垂直 , 交叉軸水平)</p>
          <p>
            justify-content: center會使flex容器下的所有flex項目全部水平居中。
          </p>
          <p>缺點? _ IE8以下不能用</p>
          <br />
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">= "</span>
              <span class="word">parent</span>
              <span class="then">"</span> <span class="then">></span>
            </div>
            <div class="pTwo">
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">="</span>
              <span class="word">child</span> <span class="then">">＜/ </span>
              <span class="number">div </span> <span class="then">></span>
            </div>
            <div>
              <span class="then">＜ </span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <div class="brackets">.parent {</div>
            <div class="brackets pTwo">display: flex;</div>
            <div class="brackets pTwo">justify-content: center;</div>
            <div class="brackets pTwo">align-items: center;</div>
            <div class="brackets">}</div>
          </div>
          <br />
          <br />
          <p>flex 格線佈局布局</p>
          <br />
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">= "</span>
              <span class="word">parent</span>
              <span class="then">"</span> <span class="then">></span>
            </div>
            <div class="pTwo">
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">="</span>
              <span class="word">child</span> <span class="then">">＜/ </span>
              <span class="number">div </span> <span class="then">></span>
            </div>
            <div>
              <span class="then">＜ </span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <div class="brackets">.parent {</div>
            <div class="brackets pTwo">display: grid;</div>
            <div class="brackets">}</div>
            <div class="brackets">.child {</div>
            <div class="brackets pTwo">justify-self: center;</div>
            <div class="brackets pTwo">align-self: center;</div>
            <div class="brackets">}</div>
          </div>
          <br />
          <br />

          <br />
          <p>absolute + transform translate ( -50% , -50% )</p>
          <p>絕對定位，這個方法不需要子元素固定寬高</p>
          <br />
          <p>
            : 可以用transform實現, 給他子絕對父相對定位, 給子top百分之50
            left百分之50, 然後transform translate負的百分之50 實現垂直居中,
          </p>
          <br />
          <p class="cor36">你說的絕對定位方法有沒有副作用?</p>
          <p>(fix定位會被transform屏蔽掉)</p>
          <p>
            它的位置的中點會相對於原來的位置有偏移,它以前相對於窗口定位,它現在相對於父元素定位
          </p>
          <br />
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">= "</span>
              <span class="word">parent</span>
              <span class="then">"</span> <span class="then">></span>
            </div>
            <div class="pTwo">
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">="</span>
              <span class="word">child</span> <span class="then">">＜/ </span>
              <span class="number">div </span> <span class="then">></span>
            </div>
            <div>
              <span class="then">＜ </span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <div class="brackets">.parent {</div>
            <div class="brackets pTwo">position: relative;</div>
            <div class="brackets">}</div>
            <div class="brackets">.child {</div>
            <div class="brackets pTwo">position: absolute;</div>
            <div class="brackets pTwo">top: 50%;</div>
            <div class="brackets pTwo">left: 50%;</div>
            <div class="brackets pTwo">transform: translate(-50%, -50%);</div>
            <div class="brackets">}</div>
          </div>
          <br />
          <br />
          <p>margin: 0 auto . . . <span class="cor36">(知道子元素寬)</span></p>
          <p>只有 <span class="cor36">非絕對定位 </span> 的元素才有效</p>
          <p>絕對定位指: absolute . fixed . sticky</p>
          <p class="comment">img/input/button等自帶寬，可不設</p>
          <br />
          <p>: 如果知道它的寬度的話, 可用margin 0 auto來實現</p>
          <br />
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">= "</span>
              <span class="word">parent</span>
              <span class="then">"</span> <span class="then">></span>
            </div>
            <div class="pTwo">
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">="</span>
              <span class="word">child</span> <span class="then">">＜/ </span>
              <span class="number">div </span> <span class="then">></span>
            </div>
            <div>
              <span class="then">＜ </span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <div class="brackets">.child {</div>
            <div class="comment pTwo">/* 必須設定 box 的寬 */</div>
            <div class="brackets pTwo">width: 100px;</div>
            <div class="brackets pTwo">margin: 0 auto;</div>
            <div class="brackets">}</div>
          </div>
          <br />
          <br />

          <p class="cor36"># 父子高度都不確定但確實有值如何實現垂直居中?</p>
          <br />
          <p>
            margin: auto . . .
            <span class="cor36"
              >(1.需要父元素高 2.子元素寬高 3.父相對子絕對)</span
            >
          </p>
          <p>缺點: 不兼容ie</p>
          <br />
          <p>: 在子CSS屬性上加上下左右值為0 然後加上margin auto,</p>

          <br />
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">= "</span>
              <span class="word">parent</span>
              <span class="then">"</span> <span class="then">></span>
            </div>
            <div class="pTwo">
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">="</span>
              <span class="word">child</span> <span class="then">">＜/ </span>
              <span class="number">div </span> <span class="then">></span>
            </div>
            <div>
              <span class="then">＜ </span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <div class="brackets">.parent {</div>
            <div class="brackets pTwo">position: relative;</div>
            <div class="brackets pTwo">height: 300px;</div>
            <div class="brackets">}</div>
            <div class="brackets">.child {</div>
            <div class="brackets pTwo">width: 100px;</div>
            <div class="brackets pTwo">height: 100px;</div>
            <div class="brackets pTwo">position: absolute;</div>
            <div class="brackets pTwo">top: 0;</div>
            <div class="brackets pTwo">left: 0;</div>
            <div class="brackets pTwo">right: 0;</div>
            <div class="brackets pTwo">bottom: 0;</div>
            <div class="brackets pTwo">margin: auto;</div>
            <div class="brackets">}</div>
          </div>
          <br />
          <br />
          <h3 class="cor36">內聯元素水平居中</h3>
          <p>
            text-align: center
            可以使行內級元素和行內塊級元素在父元素中水平居中。
          </p>
          <p>
            父元素下的所有行級元素，包含子元素以及孫子元素，都相對於自己的父元素水平居中。
          </p>
          <br />
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">= "</span>
              <span class="word">parent</span>
              <span class="then">"</span> <span class="then">></span>
            </div>
            <div class="pTwo">
              <span class="then">＜</span> <span class="number">span </span>
              <span class="function">class </span> <span class="then">="</span>
              <span class="word">child</span> <span class="then">">＜/ </span>
              <span class="number">div </span> <span class="then">></span>
            </div>
            <div>
              <span class="then">＜ </span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <div class="brackets">.parent {</div>
            <div class="brackets pTwo">width: 300px;</div>
            <div class="brackets pTwo">height: 300px;</div>
            <div class="brackets pTwo">text-align: center;</div>
            <div class="brackets">}</div>
            <div class="brackets">.child {</div>
            <div class="brackets pTwo">width: 100px;</div>
            <div class="brackets pTwo">height: 100px;</div>
            <div class="brackets">}</div>
          </div>
          <br />
          <br />
          <h3 class="cor36">內聯元素垂直居中</h3>
          <p>子元素 line-heignt 設跟父元素一樣高度</p>
          <br />
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">= "</span>
              <span class="word">parent</span>
              <span class="then">"</span> <span class="then">></span>
            </div>
            <div class="pTwo">
              <span class="then">＜</span> <span class="number">span </span>
              <span class="function">class </span> <span class="then">="</span>
              <span class="word">child</span> <span class="then">">＜/ </span>
              <span class="number">div </span> <span class="then">></span>
            </div>
            <div>
              <span class="then">＜ </span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <div class="brackets">.parent {</div>
            <div class="brackets pTwo">width: 300px;</div>
            <div class="brackets pTwo">height: 300px;</div>
            <div class="brackets">}</div>
            <div class="brackets">.child {</div>
            <div class="brackets pTwo">width: 100px;</div>
            <div class="brackets pTwo">line-heignt:父元素的高度;</div>
            <div class="brackets">}</div>
          </div>
          <br />
          <br />
          <div id="cssOne007" class="articleCardTitle cor36">
            [ CSS ] ≫ CSS有哪些常見的布局方法?
          </div>
          <span
            ><a href="https://ithelp.ithome.com.tw/articles/10208741"
              >資料來源: Flex 空間分配 @iT邦幫忙 Lai</a
            ></span
          >
          <div></div>
          <br />
          <p>FLEX GRID</p>
          <br />
          <br />
          <p class="cor36">實現一個左中右三欄布局,不能用FLEX,GRID怎麼做?</p>
          <p>定位 float table</p>
          <br />
          <br />
          <p class="cor36">Flex 布局用在什麼情況下比較合適?</p>
          <p>用於線性布局, 水平或垂直</p>
          <br />
          <br />
          <p class="cor36">Grid 布局用在什麼情況下比較合適?</p>
          <p>用於線性布局,水平或垂直</p>
          <br />
          <br />
          <p class="cor36">做一個左中右的布局用FLEX怎麼做?</p>
          <p>可以直接給父元素加display:flex 子元素加space:between</p>
          <br />
          <br />
          <p class="cor36">不夠寬自然會收縮,有哪些元素會收縮?</p>
          <p>它會等比例收縮</p>
          <br />
          <br />

          <p class="cor36">如果我希望它不等比例收縮呢?比如中間不縮左右縮呢?</p>
          <p>中間的設 flex-shrink 0</p>
          <p>兩邊默認的shrink是 1</p>
          <br />
          <br />

          <p class="cor36">
            如果希望左邊固定寬100px右邊固定寬200px中間自由收縮怎麼做?
          </p>
          <p>左邊寬100右邊寬200</p>
          <br />
          <br />

          <p class="cor36">寫了寬度之後shrink怎麼寫?</p>
          <p>左右0 中間寫1</p>
          <br />
          <br />

          <p class="cor36">那左中右grow怎麼寫?</p>
          <p>左右grow0 中間1</p>
          <br />
          <br />

          <p class="cor36">grid一般用來做甚麼樣的布局?怎麼用?</p>
          <p>網格 屏幕做四個相等的 用行列布局骨架</p>
          <br />
          <br />

          <div id="cssOne008" class="articleCardTitle cor36">
            [ CSS ] ≫ CSS動畫有哪些屬性?
          </div>
          <p>transition</p>
          <p>@keyframe</p>
          <p>animation</p>
          <br />
          <br />

          <p class="cor36">
            transition怎麼實現動畫的,例如你怎麼把一個東西從左移到右?
          </p>
          <p>先自訂一個初始的位置, 比如你觸發點擊事件</p>
          <p>
            點擊讓它移動100px, 用transition優化它中間過度的動畫, 寫 all 0.25秒
          </p>
          <br />
          <br />

          <p class="cor36">
            你用transition加了從開始到結束的動畫,這動畫可以是線性也可以非線性也可以緩動的,你能舉幾個例子嗎?線性是用什麼值?
          </p>
          <p>transition-timing-function</p>
          <p>預設ease緩入中間快緩出</p>
          <p>linear均速</p>
          <p>ease-in 緩入</p>
          <p>ease-out 緩出</p>
          <br />
          <br />

          <p class="cor36">
            你做旋轉時,它默認從那裡開始旋轉?從哪個基點開始旋轉?
          </p>
          <p>中心點, 可以設定transform-origin 改變 例如 top left 到左上角</p>
          <br />
          <br />
          <p class="cor36">
            animation我如果希望它撥放完了再繼續撥無限撥怎麼做?
          </p>
          <p>animation-iteration-count 設定 infinite</p>
          <br />
          <br />
          <div id="cssOne015" class="articleCardTitle cor36">
            [ CSS ] ≫ 偽類 偽元素?
          </div>
          <p class="cor36">:偽類</p>
          <br />
          <br />
          <p>當我們 希望樣式在 某些特定狀態下 才被呈現到 指定的 元素時</p>
          <br />
          <br />

          <p>就是 當某元素狀態改變時 , 我們期待給這元素添加一些特殊效果</p>
          <br />
          <br />

          <p>:hover 懸浮在某元素上時 , 期望該元素要顯示的樣式</p>
          <br />
          <br />

          <p class="cor36">::偽元素</p>
          <br />
          <br />

          <p>創建一些不在文檔樹中的元素 , 並為其添加樣式</p>
          <br />
          <br />

          <p>要注意 偽元素樣式裡 必須要給 content 屬性</p>
          <br />
          <br />

          <p>::before 在一個元素前增加一些文本 , 並對文本添加樣式</p>
          <br />
          <br />

          <p class="cor36">小結:</p>
          <p>偽類 操作對象 是 文檔樹中 已有的元素</p>
          <br />
          <br />

          <p>偽元素 創建文檔樹 以外的元素 並添加樣式</p>
          <br />
          <br />

          <div id="cssOne011" class="articleCardTitle cor36">
            [ CSS ] ≫ 隱藏元素的方法?
          </div>
          <h3>display: none</h3>
          <p>元素在 頁面上消失 , 不佔空間 . . . 重排 重繪</p>
          <br />
          <br />
          <h3>opacity: 0</h3>
          <p>設置元素透明度 0 , 元素不可見 , 佔空間</p>
          <br />
          <br />
          <h3>visbility: hidden</h3>
          <p>讓 元素消失 , 佔位置 . . . 重繪</p>
          <br />
          <br />
          <h3>position: absolute</h3>
          <br />
          <br />

          <div id="cssOne010" class="articleCardTitle cor36">
            [ css ] ≫ 什麼是重排(回流)和重繪?如何避免
          </div>
          <h2>重繪不一定重排，重排一定重繪</h2>
          <br />
          <br />
          <h3 class="cor36"># 重排(回流)（reflow）是什麼:</h3>
          <p>布局引擎會根據所有的樣式計算出盒模型在頁面上的位置 & 大小</p>
          <br />
          <p>當瀏覽器偵測到頁面的佈局發生變化時，就需要進行回退並重新渲染。</p>
          <br />
          <p class="cor36"># 觸發重排(回流)條件：</p>
          <p>1.頁面第一次渲染（初始化）</p>
          <p>2.DOM樹節點的增刪或移動</p>
          <p>3.DOM元素的幾何屬性變化</p>
          <p class="pFou">寬度（width）</p>
          <p class="pFou">高度（height）</p>
          <p class="pFou">內邊距（padding）</p>
          <p class="pFou">邊框（border）等</p>
          <p class="pFou">外邊距（margin）</p>
          <p class="pFou">左偏移（left）</p>
          <p class="pFou">上偏移（top）</p>
          <br />
          <p>4.瀏覽器窗口大小改變（resize）</p>
          <p>獲取元素的某些屬性，如offset系列、scroll系列和client系列屬性。</p>
          <br />
          <p class="cor36"># 重排(回流)過程</p>
          <p>
            劉覽器會從根節點＜html>元素
            開始進行遞歸，逐個計算所有節點的幾何尺寸和位置，以確定是渲染樹的一部分發生變化還是整個渲染樹需要重新渲染。
          </p>
          <br />
          <br />
          <h3 class="cor36"># 重繪（repaint）是什麼:</h3>
          <p>
            計算好盒模型的 位置 大小 其他屬性後 , 瀏覽器根據每個盒模型的 特性
            進行 繪製瀏覽器的渲染機制
          </p>
          <br />

          <p>
            當我們改變某個元素的背景色、文字顏色、邊框顏色等屬性時，屏幕的一部分需要重繪，但是元素的幾何尺寸和位置沒有發生改變。重繪過程不涉及布局的計算，只是重新繪製已有的元素。
          </p>
          <br />
          <p class="cor36"># 觸發重繪條件:</p>
          <p>
            1.重排(回流)必會引起重繪，因為回流的過程中可能會改變元素的樣式屬性，需要重新繪製已有的元素。
          </p>
          <p>2.背景色、文字顏色、字體等的改變會觸發重繪。</p>
          <p class="pTwo">
            注意 字體大小發生變化時，將觸發回流而非僅重繪。(會影響元素的佈局)
          </p>
          <br />
          <p class="cor36"># 重繪過程</p>
          <p>
            沒有導致 DOM
            元素的幾何屬性（寬度、高度、位置）發生變化，因此元素的位置信息不需要更新，從而省去了佈局（layout）的過程。
          </p>
          <br />
          <br />
          <h2 class="cor36"># 如何避免重排(回流).重繪?</h2>
          <p>1.集中改變樣式: ex 用 class 集中改變</p>
          <br />
          <p>2.用 transform 做變形和位移，可以減少重排(回流)的次數。</p>
          <br />
          <p>
            3.將需要多次修改的 DOM 元素設置為 display:none，操作完成後再顯示。
          </p>
          <br />
          <p>4.避免多次讀取某些屬性</p>
          <br />
          <p>5.絕對定位將複雜的節點脫離文檔流中，形成新的 Render Layer。</p>
          <br />
          <p>
            6.使用 DocumentFragment 將需要多次修改的 DOM
            元素緩存起來，最後一次性添加到真實的 DOM 中進行渲染。
          </p>
          <br />
          <br />
          <div id="cssOne013" class="articleCardTitle cor36">
            [ CSS ] ≫ CSS 的那些屬性 可以繼承?
          </div>
          <p>css 3 特性 : 繼承 、 層疊 、 優先級</p>
          <br />
          <br />

          <p class="cor36">子元素 可繼承 父元素 樣式</p>
          <div id="" class="articleCardTitle cor36">[ CSS ] ≫</div>
          <p>1. 字體 fonst . . . 顏色 大小</p>
          <br />
          <br />
          <p>2. 文本 line-height</p>
          <br />
          <br />
          <p>3. 元素可見性 visbility: hidden</p>
          <br />
          <br />
          <p>4. 表格布局的屬性 border-spacing</p>
          <br />
          <br />
          <p>5. 列表屬性 list-style</p>
          <br />
          <br />
          <div id="cssOne013" class="articleCardTitle cor36">
            [ CSS ] ≫ 預處理器?
          </div>
          <p class="cor36">SCSS相比於CSS有那些好處?</p>
          <p>它可以在寫語法時層層包裹, 可以用變量</p>
          <br />
          <br />

          <p class="cor36">SASS 、 LESS</p>
          <p>變量 、 函數 、 混入</p>
          <br />
          <br />

          <div id="cssOne009" class="articleCardTitle cor36">
            [ CSS ] ≫ 畫三角形的方法?
          </div>
          <div>
            <span
              ><a href="https://codepen.io/wayne23123/pen/QWJdjVJ?editors=1100"
                >@codePen demo</a
              >
            </span>
          </div>
          <p>1.</p>
          <p>用border, 給四個邊距, 然後給三個透明</p>
          <br />
          <p>2.</p>
          <p>用2個div做, 第一個div做正方形, 然後旋轉90度變成菱形,</p>
          <p>
            另一個div做為父容器把他的上面百分之50顯示, 下面百分之50
            overflow:hidden起來
          </p>

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

          <div id="" class="articleCardTitle cor36">[ CSS ] ≫</div>
          <p></p>
          <br />
          <br />
        </div>
      </div>
    </div>
    <!-- thebottomTHEBOTTOMTABBOTTOMtabbottom -->
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
  <!-- thebottomcssTHEBOTTOMCSSTABBOTTOMCSStabbottomcss -->
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
  font-size: 1.75rem;
  padding: 30px 5px 30px 5px;
}

.cor36 {
  color: #36c1cb;
  font-size: 1.25em;
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
.toTop:hover {
  background-color: #6f020250;
}
.toTopButton {
  position: relative;
  font-size: 20px;
  bottom: 7px;
  padding-left: 0;
  color: #999;
  pointer-events: none;
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
