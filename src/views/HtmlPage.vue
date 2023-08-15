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
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <!-- thetopTHETOPmaintopMAINTOP -->
    <div class="Main">
      <div class="mainContainer">
        <h1 id="html001" class="articleCardTitle cor36">
          [ Html ] ≫ 塊級元素和行內元素的差別?src和href差別?
        </h1>
        <h3>塊元素有哪些?</h3>
        <p>
          ＜div> . ＜p> . ＜h1> . ＜ul> . ＜table> 獨佔一行, 頁面中垂直排列,
          可以設置寬高 和 內外邊距可控
        </p>
        <br />
        <h3>行內元素有哪些?</h3>
        <p>
          ＜span> . ＜a> . ＜img> . ＜input> 默認同行排列, 寬高由內容決定,
          不能設置寬高
        </p>
        <br />
        <h3>行內塊元素特點?</h3>
        <p>display:inline-block 不獨佔一行, 可以設置寬高</p>
        <br />
        <p>空元素: 指沒有內容或結束標籤的HTML元素。</p>
        <p>＜br> . ＜hr> . ＜img> . ＜input> . ＜link> . ＜meta></p>
        <br />
        <br />
        <p>行內元素如何轉塊元素?</p>
        <p>css display inline block</p>
        <br />
        <br />
        <h2 class="articleCardTitle cor36">
          [ Html ] ≫ 頁面導入樣式,使用@import和link差異?
        </h2>
        <p>
          link支持早於import, 兼容性link比import好, 先加載的是link標籤,
          後加載@import
        </p>
        <br />
        <br />
        <h2 class="articleCardTitle">src 和 href 差別?</h2>
        <p>相同點:</p>
        <p class="pFou">都可以加載外部文件</p>
        <br />
        <br />
        <h3>差別:</h3>
        <p class="pFou">
          herf 用在 link , a ; 而 src 用在 img , style , script
        </p>
        <br />
        <h3 class="pFou">
          瀏覽器遇到 href 會並行下載資源, 且不會停止對當前文檔的處理。
        </h3>
        <br />
        <h3 class="pFou">
          瀏覽器遇到 src 會暫停其他資源的下載和處理, 直到該資源加載 或
          執行完畢。
        </h3>
        <br />
        <br />
        <h1 id="" class="articleCardTitle cor36">
          [ Html ] ≫ ＜img> 元素的 title 屬性和 alt 屬性有甚麼不同?
        </h1>
        <p>
          alt 屬性是必需的，它提供了對於圖像的描述。當圖像無法加載時， alt
          屬性的值會顯示在圖像的位置，也可供螢幕閱讀器讀取圖像內容。
        </p>
        <br />
        <p>
          title 屬性提供了對圖像的附加說明。當滑鼠懸停在圖像上時，會顯示 title
          屬性的值作為工具提示。
        </p>
        <br />
        <br />
        <h1 id="" class="articleCardTitle cor36">
          [ Html ] ≫ html5有哪些新特性
        </h1>
        <p>1. 語意化標籤: header footer nav aside article section</p>
        <p>2. 影片 和 音源 支持: audio video 標籤</p>
        <p>
          3. 畫布 canvas 元素允許通過JavaScript動態繪制圖形、動畫和圖像, 失量圖
          svg
        </p>
        <p>4. 本地儲存 localStorage , seesionStorage</p>
        <p>
          5. 語意化表單 ，如＜input type="email">、＜input type="url">、＜input
          type="date">等，使表單的輸入和驗證更加簡化和語義化。
        </p>
        <p>6. web worker</p>
        <br />
        <br />
        <h1 id="" class="articleCardTitle cor36">[ Html ] ≫ 語義化的理解?</h1>
        <p>HTML語意化就是的 編寫方式, 包括header nav footer標籤</p>
        <p>讓頁面結構更加清晰, 更容易去維護開發</p>
        <p>更容易SEO搜尋引擎優化</p>
        <br />
        <br />
        <h1 id="" class="articleCardTitle cor36">
          [ Html ] ≫ 那些操作可以提升SEO?
        </h1>
        <p>可以在header裡面的meta這一章節加上description網頁的描述</p>
        <p>再來可以加上keyword網頁關鍵字</p>
        <p>h1標籤要寫好</p>
        <p>
          每個頁面的標籤要寫的符合聯結的東西, 比如你跳轉到一個頁面叫A,
          你跳轉的鏈結的文字必須符合那個頁面的內容,
        </p>
        <br />
        <br />
        <h2 class="articleCardTitle cor36">canvas能幹嘛?</h2>
        <p>畫圖的 畫2D為主</p>
        <br />
        <br />
        <h2 class="articleCardTitle cor36">canvas它畫的是偽圖還是失量圖?</h2>
        <p>位圖(有像素操作), SVG才是失量圖</p>
        <br />
        <br />
        <h2 class="articleCardTitle cor36">canvas支持鼠標事件嗎?</h2>
        <p>不支持</p>
        <br />
        <br />
        <h2 class="articleCardTitle cor36">canvas和svg區別?</h2>
        <p>1.一個是位圖一個是失量圖</p>
        <p>2.一個是用畫筆一個用標籤,畫筆直接畫,標籤進行累加</p>
        <p>3.SVG可以進行類似CSS樣式,canvas只能全靠自己畫不能用css</p>
        <br />
        <br />
        <h2 class="articleCardTitle cor36">canvas 要用的話怎麼獲取API?</h2>
        <p>1.獲取canvas dom元素</p>
        <p>2.用dom方法,一開始可以用getContext設2D或3D,</p>
        <p>3.設好後可以用繪畫API, fillStyle之類的</p>
        <br />
        <br />
        <h2 class="articleCardTitle cor36">失量圖是什麼?</h2>
        <p>
          失量圖是不管放大多少倍, 都沒有鋸齒的一種圖形, 因為它保存的不是色彩值,
          而是曲線的座標
        </p>
        <br />
        <br />
        <h2 class="articleCardTitle cor36">位圖是什麼?</h2>
        <p>每個像素用RGB來表示</p>
        <br />
        <br />

        <h2 class="articleCardTitle cor36">svg標籤可以任意嵌套嗎?</h2>
        <p>不可以, 一個svg裡面有單獨的p,g,路徑之類的</p>
        <p>g可以分組式嵌套</p>
        <br />
        <br />

        <h2 class="articleCardTitle cor36">svg標籤和DOM標籤的區別?</h2>
        <p>svg不可以嵌套,除了g, DOM大部分可以任意嵌套</p>
        <br />
        <br />

        <h2 class="articleCardTitle cor36">
          如果繪畫的量很大,一般用svg還是canvas?
        </h2>
        <p>
          canvas, svg相當於是一種DOM元素, 操作有性能問題,
          小量圖再用svg更方便一點
        </p>
        <br />
        <br />

        <h2 class="articleCardTitle">3. canvas 的常用 api 有哪些</h2>
        <div>
          <a
            class="comment svgs"
            href="https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API"
            >canvas @MDN</a
          >
        </div>
        <p>getContext: 返回一個指定 canvas 的繪畫環境對象</p>
        <p>beginPath: 開始繪製</p>
        <p>moveTo: 移動畫筆位置</p>
        <p>lineTo: 用來繪畫線段</p>
        <p>stroke: 用來實施繪製的操作</p>
        <p>lineStyle: 設置線段的樣式</p>
        <p>closePath: 結束繪製</p>
        <br />
        <br />

        <h2 class="articleCardTitle cor36">HTML5 和 H5的區別?</h2>
        <p>H5是手機端顯示的頁面</p>
        <p>
          HTML5是前端標準化技術的平台, 它提供很多強大功能,
          比如再頁面上顯示視屏video標籤, 音屏audio標籤, 網頁中存儲數據 local
          sessionStorage, 畫2D.3D圖形canvas, 音屏解析, 操作文件,
          所有新推出的網頁API都屬於HTML5範圍, 甚至CSS3都屬於HTML5的一部分
        </p>
        <br />
        <br />

        <h1 id="html008" class="articleCardTitle cor36">
          [ Html ] ≫ Doctype作用?嚴格模式和混雜模式如何區分?他們有何意義?
        </h1>
        <p>
          ＜!Doctype>（文件類型聲明）位於文檔中最前面，在＜html>標籤之前。它告訴瀏覽器的解析器用哪個HTML版本的規範來解析網頁。
        </p>
        <br />
        <p>嚴格模式：</p>
        <p>
          瀏覽器會按照HTML規範的嚴格要求解析和渲染網頁，可以確保網頁在不同瀏覽器之間的一致性。
        </p>
        <p>在HTML文檔開頭的Doctype聲明如＜!DOCTYPE html>，則會進入嚴格模式。</p>
        <br />
        <p>混雜模式：</p>
        <p>
          瀏覽器以一種向後兼容的方式解析和渲染網頁，以支持舊版本的HTML規範和非標準的HTML代碼。可能導致瀏覽器之間的解析差異。
        </p>
        <p>
          HTML文檔開頭沒有正確的Doctype聲明或使用了過時的Doctype聲明，瀏覽器會進入混雜模式。
        </p>
        <br />
        <br />
        <p>
          嚴格模式和混雜模式的意義在於幫助開發者確保網頁在各種瀏覽器中的一致性和可靠性。嚴格模式遵循HTML規範，提供了更好的標準支持和更嚴格的錯誤檢查，有助於開發更可靠、易於維護的網頁。而混雜模式則提供了向後兼容的特性，以支持舊版本的網頁和非標準的HTML代碼，但容易導致瀏覽器之間的解析差異和不確定性。因此，建議使用嚴格模式並正確聲明Doctype，以確保網頁的良好兼容性和可靠性。
        </p>
        <br />
        <br />

        <h1 id="" class="articleCardTitle cor36">
          [ Html ] ≫ HTML全局属性(global attribute)有哪些?
        </h1>

        <p>1.class：為元素指定一個或多個類名，用於樣式和 JavaScript 操作。</p>
        <p>2.id：為元素指定唯一的標識符。</p>
        <p>3.style：用於內聯樣式，用於指定元素的樣式規則。</p>
        <p>4.title：用於提供關於元素的額外信息。</p>
        <p>5.lang：用於指定元素的語言。</p>
        <p>6.data-*：用於自定義數據屬性，可以存儲與元素相關的自定義數據。</p>
        <p>7.draggable：指定元素是否可拖動。</p>
        <p>8.hidden：指定元素是否隱藏。</p>
        <br />
        <br />
        <h1 class="articleCardTitle">
          [ Html ] ≫ 如何在頁面上實現一個圓形的可點擊區域
        </h1>
        <div>
          <a
            class="comment svgs"
            href="https://codepen.io/wayne23123/pen/jOQBdZr?editors=1010"
            >作品DEMO: 在頁面上實現一個圓形可點擊區域</a
          >
        </div>
        <br />
        <br />

        <h1 class="articleCardTitle">怎樣處理 移動端 1px 被渲染成 2px?</h1>

        <p>
          2倍屏 => 移動設備螢幕尺寸沒有變化，但螢幕分辨率卻提高一倍 (
          同大小螢幕像素多一倍 )
        </p>
        <br />
        <p>局部處理:</p>
        <p>meta 標籤中的 viewport 屬性， initial-scale 設為 1</p>
        <p>rem 照設計稿走 ， 利用 transform: scale(0.5) 縮小</p>
        <br />
        <p>全局處理:</p>
        <p>meta 標籤中的 viewport 屬性， initial-scale 設為 0.5</p>
        <p>rem 照設計稿走</p>
        <br />
        <br />
        <h1 id="" class="articleCardTitle cor36">
          [ Html ] ≫ div+css 布局 比 table 布局有甚麼優點?
        </h1>
        <p>div+css:</p>
        <p>
          頁面加載速度更快，結構化清晰。(他一邊加載一邊呈現，至少基本網頁結構可以很快呈現)
        </p>
        <p>div 布局符合 W3C 標準 => 做到了 結構 表現 行為 分離</p>
        <p>有利 SEO</p>
        <br />
        <p>table:</p>
        <p>
          如果 table 嵌套層數太多，可能導致頁面一直出不來。(table 布局要等到全部
          table 加載完，再呈現頁面)
        </p>
        <br />
        <br />

        <h1 id="" class="articleCardTitle">
          [ Html ] ≫ iframe（內嵌框架）有哪些缺點?
        </h1>
        <p>1.iframe的載入確實會阻塞主頁面的onload事件。</p>
        <p class="pTwo">
          當頁面中包含一個或多個iframe元素時，當iframe開始載入和渲染內容時，主頁面的onload事件將被延遲到所有的iframe載入完成後才觸發。
        </p>
        <br />
        <p>2.搜索引擎無法解讀這種頁面，不利 SEO。</p>
        <br />
        <p>
          3.iframe
          和主頁面共享連接池，而瀏覽器對相同域的連接有限制，所以會影響頁面的併行加載
        </p>
        <br />
        <br />
        <p>
          使用 JS 動態給 iframe 添加 src 屬性值可以避免 阻塞主頁面的onload事件
          和 和主頁面共享連接池
        </p>
        <br />
        <p>1.在主頁面的 onload 事件觸發後再用 JS 給 iframe 添加 src 屬性</p>
        <p>
          2.在主頁面加載完成後 用 JS 給 iframe 添加 src 屬性
          可以減少對連接池的佔用，提高頁面並行加載能力。
        </p>
        <br />
        <br />
        <h1 id="" class="articleCardTitle">
          [ Html ] ≫ XHTML（可擴展超文本標記語言）和HTML（超文本標記語言）區別?
        </h1>
        <p>1.XHTML 元素必須正確嵌套</p>
        <p>2.XHTML 標籤必須閉合</p>
        <p>3.XHTML 元素必須</p>
        <p>4.XHTML 標籤名小寫</p>
        <p>5.XHTML 必須有根元素 -> ＜html></p>
        <br />
        <p>語法要求：</p>
        <p class="pTwo">
          HTML語法相對寬鬆，不強制要求標籤閉合，標籤名可以使用大寫或小寫。
        </p>
        <p class="pTwo">
          XHTML採用XML語法，要求所有標籤必須閉合，並且標籤名必須使用小寫。
        </p>
        <br />
        <p>兼容性：</p>
        <p class="pTwo">
          HTML對於各大瀏覽器的兼容性相對較差，特別是對於IE瀏覽器而言。網頁開發者需要具備較高的HTML編寫技巧，否則容易出現兼容性問題。
        </p>
        <p class="pTwo">
          XHTML則能夠有效處理各大瀏覽器的兼容性問題，因為XHTML的語法要求較為嚴謹。如果習慣於鬆散的HTML編寫方式，轉向XHTML可能需要一些適應的時間。XHTML結合了部分XML的強大功能和大部分HTML的簡單特性。
        </p>
        <br />
        <br />

        <h1 id="" class="articleCardTitle cor36">
          [ Html ] ≫ ＜meta name="viewport">
        </h1>
        <div class="bgcVS">
          <div>
            <span class="then"></span>
            <span class="number">meta </span>
            <span class="function">name</span>
            <span class="then">="</span>
            <span class="src">viewport</span>
            <span class="then">"</span>
            <span class="function">content</span>
            <span class="then">="</span>
            <span class="src"
              >width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no</span
            >
            <span class="then">" /></span>
          </div>
          <br />
          <div class="comment">
            // width 設置viewport寬度，可以是正整數或字符串'device-width'
          </div>
          <br />
          <div class="comment">// device-width 設備寬度</div>
          <br />
          <div class="comment">
            // height
            設置viewport高度，一般設置寬度後，高度會自動解析，可以不設置
          </div>
          <br />
          <div class="comment">
            // initial-scale
            默認縮放比例（初始縮放比例），為一個數字，可以帶小數
          </div>
          <br />
          <div class="comment">
            // minimum-scale 允許用戶最小縮放比例，為一個數字，可以帶小數
          </div>
          <br />
          <div class="comment">
            // maximum-scale 允許用戶最大縮放比例，為一個數字，可以帶小數
          </div>
          <br />
          <div class="comment">// user-scalable 是否允許手動縮放</div>
          <br />
          <br />
        </div>
        <br />
        <br />

        <h2 class="articleCardTitle">4. web worker 有甚麼作用?應用場景?</h2>
        <div>
          <a
            class="comment svgs"
            href="https://developer.mozilla.org/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers"
            >web worker @MDN</a
          >
        </div>
        <p>新開一個子線程, 且子線程的操作不受線程影響</p>
        <p>用於大數據處理 或 耗費時間長的操作</p>
        <br />
        <br />
        <h1 id="" class="articleCardTitle cor36">
          [ Html ] ≫ html5 的離線儲存
        </h1>
        <p>
          當使用者沒有與網際網路連接時，可以正常訪問網站或應用程式；當使用者與網際網路連接時，則會更新使用者機器上的快取檔案。
        </p>
        <br />
        <p>
          工作原理：HTML5的離線儲存是建立在一個名為「.appcache」的快取機制上（並非儲存技術）。透過這個檔案中的解析清單，網站的資源可以被離線儲存。當網路處於離線狀態時，瀏覽器會使用這些已儲存的資源來顯示網頁。
        </p>
        <br />
        <p>使用方法：</p>
        <p class="pTwo">
          1.在網頁的標頭中加入「manifest」屬性，例如：＜html
          manifest="cache.manifest">＜/html>
        </p>
        <p class="pTwo">
          2.創建一個「cache.manifest」檔案，並在其中編寫離線儲存的資源清單。
        </p>
        <p class="pTwo">
          3.在需要實現離線儲存的地方，可以使用「window.applicationCache」對離線儲存進行操作。例如，可以通過檢查「applicationCache.status」來確定快取的狀態，並根據需要更新或讀取快取的資源。
        </p>
        <br />
        <br />

        <!-- thebottomTHEBOTTOMTABBOTTOMtabbottom -->
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
