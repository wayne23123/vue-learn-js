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
    <div class="sectionHolderNav"></div>
    <!-- 左邊導航條 -->
    <div class="leftNav">
      <div class="leftNavContainer">
        <div class="leftNavLayout">
          <div>瀏覽器內核,主要組成部分</div>
          <div>瀏覽器主要組成部分</div>
          <div>瀏覽器輸入網址後按下enter</div>
          <div>http有那些請求方法和用途</div>
          <div>什麼是瀏覽器同源跨域</div>
          <div>如何進行網站性能優化</div>
          <div>如何進行渲染優化</div>
          <div>瀏覽器垃圾回收&內存洩漏</div>
          <div>前端需要注意哪些SEO</div>
          <div>腳本攻擊XSS,請求偽造CSRF</div>
          <div>Cookies.localStorage</div>
          <div>WEB標準&W3C標準</div>
          <div>漸進增強和優雅降級</div>
          <div>網頁用的圖片格式</div>
          <div>大型網站有大量圖片</div>
          <div>會話跟蹤的方法</div>
          <div>CDN多域名存取網站資源</div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
        <div class="mainLayout">
          <div class="articleCardTitle cor36">
            [ Web筆記 ] ≫ 瀏覽器內核,主要組成部分
          </div>
          <p>主要分成 2 部分:</p>
          <p class="cor36">渲染引擎:</p>
          <br />
          <p class="pTwo">
            負責取得網頁內容 ( HTML . XML . 圖片 )，整理訊息 ( 加入 CSS )
            ，計算網頁顯示方式，然後輸出至顯示器。
          </p>
          <p class="cor36">JS 引擎:</p>
          <br />
          <p class="pTwo">
            解析和執行網頁中的 JavaScript 代碼，實現網頁的動態效果和交互功能。
          </p>
          <br />
          <p>瀏覽器內核可以理解為排版引擎</p>
          <br />
          <h3 class="cor36">WebKit</h3>
          <p>代表作品是 Safari、舊版 Chrome</p>
          <br />
          <h3 class="cor36">Blink</h3>
          <p>代表作品是 Chrome、Opera</p>
          <br />
          <h3 class="cor36">Trident</h3>
          <p>代表作品是IE</p>
          <br />
          <h3 class="cor36">Gecko</h3>
          <p>代表作品是Firefox</p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36"># 瀏覽器主要組成部分</h3>
          <p>1.使用者介面： 包括位址列、前進/後退/重新整理/書籤等按鈕</p>
          <p>2.瀏覽器引擎： 在使用者介面與呈現引擎之間傳遞指令</p>
          <p>3.渲染引擎： 用於繪製請求的內容</p>
          <p>
            4.網路： 用於完成網路調用，例如 HTTP
            請求，具有跨平台的介面，可以在不同平台上運作
          </p>
          <p>5.JavaScript 解譯器： 用於解析執行 JavaScript 程式碼</p>
          <p>
            6.使用者介面後端：
            用於繪製基本的視窗元件，例如組合框和視窗，底層使用作業系統的使用者介面
          </p>
          <p>
            7.資料儲存： 屬於持久層，瀏覽器在硬碟中儲存各種類似 Cookie
            的資料，HTML5 定義了 Web Database
            技術，這是一種輕量級完整的客戶端儲存技術。
          </p>
          <br />
          <br />
          <h1 class="articleCardTitle cor36">
            [ Web筆記 ] ≫ 瀏覽器輸入網址後按下 enter 會發生什麼 ?
          </h1>
          <p>1.瀏覽器接受 URL 開啟網路請求線程 (線程&進程)</p>
          <p>
            2.瀏覽器通過 DNS 服務器得到域名的 IP位置, 向 IP 地址
            建立連接(TCP3次握手) 後請求得到 HTML 文本
          </p>
          <p>3.瀏覽器渲染進程解析 HTML 文本， 構建 DOM 樹</p>
          <p>
            4.解析 HTML 時, 如果遇到 內連樣式 或 CSS 文本, 則下載並構建樣式規則,
            如果遇到 JS 腳本, 則下載執行腳本
          </p>
          <p>5.DOM 樹和 CSSOM 構建完成之後, 渲染線程將 2 者合併成渲染樹</p>
          <p>6.渲染進程開始對渲染樹進行布局, 生成布局樹 (layout tree)</p>
          <p>7.渲染樹對布局樹進行繪製, 生成繪製紀錄</p>
          <p>8.釋放 TCP 連結 ( 4 次揮手 )</p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36"># CSS 會阻塞 DOM 嗎?</h3>
          <p>CSS 不會阻塞 DOM 解析，會阻塞 DOM 渲染</p>
          <p>CSS 會阻塞 JS 執行，不會阻塞 JS 文件下載</p>
          <br />
          <p>DOM樹和CSSOM樹都加載完畢才渲染render樹</p>
          <p>CSS 文件會在 JS 文件執行前先加載執行完畢</p>
          <br />
          <p>避免 FOUC 白屏</p>
          <p>
            CSS 檔案放置在 HTML 文檔的 head 標籤中
            ,確保在頁面渲染前加載並應用CSS樣式。
          </p>
          <p>避免使用 JavaScript 動態加載 CSS 檔案</p>
          <p>
            樣式預加載技術，如 preload 或 prefetch，提前加載 CSS
            檔案以減少延遲。
          </p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36">JS 會阻塞頁面嗎?</h3>
          <p>JS 會阻塞 DOM 解析，建議將 JS 文件放在 HTML 最下面</p>
          <p>
            瀏覽器在解析 HTML 時，如果遇到 ＜script>，會先下載、解析完這些
            JavaScript 檔案，再往下繼續解析 HTML 其他內容。
          </p>
          <br />
          <p>defer和async的差別?</p>
          <p>async 下載完就直接執行。</p>
          <p>defer 等到瀏覽器解析完 HTML 後執行。</p>
          <br />
          <br />
          <div class="articleCardTitle cor36"># URL组成部分</div>
          <p>1.協議（protocol）：協議標頭，例如http、https、ftp等</p>
          <p>2.主機（host）：主機域名或IP地址</p>
          <p>3.端口（port）：端口號</p>
          <p>4.路徑（path）：目錄路徑</p>
          <p>5.查詢（query）：查詢參數</p>
          <p>6.哈希（hash）：#後面的哈希值，用於定位特定位置</p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36"># 發送 HTTP 請求</h3>
          <p>
            取得 IP 地址後，就可以發送 HTTP 請求了。HTTP 請求的本質是基於 TCP/IP
            的請求構建。建立連線時需要進行三次握手進行驗證，斷開連結也同樣需要四次揮手進行驗證，以確保傳輸的可靠性。
          </p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36"># http & https</h3>
          <p>https ，是在原本的 http 傳輸方式上多加一層加密程序</p>
          <p>這個s，代表是加密協定 SSL。</p>
          <p>優點: 加強資訊安全，保障傳輸機密資料。</p>
          <p>缺點: 1.額外的加密導致網路傳輸時間與傳輸量的增加</p>
          <p>2.使用SSL加密必須購買SSL憑證，造成開發端增加額外的開發成本。</p>
          <p>3.對於部分網路攻擊無效，如常見的DDoS。</p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36"># 解析 ip 過程</h3>
          <p>
            1.首先，瀏覽器會檢查瀏覽器的DNS緩存，如果有相應的記錄，就直接使用緩存的結果。
          </p>
          <p>2.如果沒有，會查詢計算機本地的DNS緩存（localhost）。</p>
          <p>3.如果沒有，詢問遞歸式DNS伺服器（網路提供商）發出查詢請求。</p>
          <p>
            4.如果沒有，向根域名伺服器發出查詢請求。根域名伺服器負責管理頂級域名（TLD）的DNS伺服器的地址。
          </p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36"># 瀏覽器緩存機制</h3>
          <p>當瀏覽器請求一個網站時，會載入各種資源。</p>
          <p>
            對於一些不經常變動的資源，瀏覽器會將它們儲存於本地記憶體中，下次訪問時直接載入這些資源，以提高訪問速度。
          </p>
          <br />
          <p>資源size值， from disk cache， from memory cache</p>
          <br />
          <p>當瀏覽器訪問一個已經訪問過的資源時，它的步驟如下：</p>
          <p>1.先檢查是否命中了強制緩存，如果命中了，則直接使用緩存的資源。</p>
          <br />
          <p>2.沒有，則向服務器發送請求，檢查是否命中了協商緩存。</p>
          <br />
          <p>
            3.如果命中了協商緩存，服務器會返回狀態碼304，告訴瀏覽器可以使用本地緩存的資源。
          </p>
          <br />
          <p>4.沒有，則服務器會返回新的資源給瀏覽器。</p>
          <br />
          <br />
          <br />
          <h3 class="articleCardTitle cor36">
            # 三次握手 -> 與 WEB 服務器建立連接 -> 確認雙方都能接收,發送正常
          </h3>
          <br />
          <p>第一次握手： 客戶端發送 SYN 數據包,服務端收到</p>
          <p>第二次握手： 服務端回復 SYN 和 ACK 數據包,客戶端收到</p>
          <p>
            第三次握手： 客戶端 檢查接收數據包正確後 發送 ACK
            數據包,服務端收到,連接建立成功
          </p>
          <br />
          <p>
            第一次握手：客戶端向伺服器發送一個帶有 SYN
            標誌位為1的數據包，同時隨機生成一個初始序列號（Seq =
            J）作為起始序列號。客戶端表示希望建立連接。
          </p>
          <p>
            第二次握手：伺服器收到客戶端的請求後，回復一個帶有 SYN 和 ACK
            標誌位為1的數據包，確認連接請求，同時生成自己的序列號（Seq =
            K），同時將客戶端的序列號加1作為確認號（Ack = J +
            1）。伺服器表示接受客戶端的連接請求並發送確認信息。
          </p>
          <p>
            第三次握手：客戶端收到伺服器的確認信息後，檢查確認號是否正確（Ack =
            K + 1），如果正確，則發送一個帶有 ACK
            標誌位為1的數據包，將伺服器的序列號加1作為確認號（Ack = K +
            1），表示客戶端接受伺服器的確認信息。伺服器收到客戶端的確認信息後，連接建立成功。
          </p>
          <br />
          <br />
          <p class="articleCardTitle cor36">4次揮手</p>
          <p>
            客戶端發送一個FIN Seq =
            M（FIN置位，序號為M）封包，用來關閉客戶端到伺服器端的資料傳送。
          </p>
          <p>
            伺服器端收到這個FIN，它回送一個ACK，確認序號Ack為收到的序號M+1。
          </p>
          <p>伺服器端關閉與客戶端的連接，發送一個FIN Seq = N給客戶端。</p>
          <p>客戶端回覆ACK報文確認，確認序號Ack為收到的序號N+1。</p>
          <br />
          <br />
          <p>為什麼建立是 3 次，關閉是 4 次</p>
          <p>
            因為服務端在 LISTEN 狀態下, 收到建立連接請求的 SYN 報文後， 把 ACK
            和 SYN 放在一個報文裡發送給客戶端。
          </p>
          <p>
            而關閉連接時, 收到對方的 FIN 報文時,
            僅表示對方不再發送數據但還是能發送數據,
            己方是否現在關閉發送數據通道, 需要上層應用來決定, 因此己方 ACK 和
            FIN 分開發送
          </p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36">五層網絡協議</h3>
          <p>1.應用層（DNS，HTTP）：域名解析為IP並發送HTTP請求</p>
          <p>2.傳輸層（TCP，UDP）：建立TCP連接（三次握手）</p>
          <p>3.網路層（IP，ARP）：IP尋址</p>
          <p>4.數據鏈路層（PPP）：封裝成幀</p>
          <p>
            5.物理層（利用物理介質傳輸比特流）：物理傳輸（通過雙絞線、電磁波等各種介質）
          </p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36">解析 HTML</h3>
          <p>
            HTML是逐行解析的，瀏覽器的渲染引擎會將HTML文檔解析並轉換為DOM節點。
          </p>
          <p>將標記 （Tokens） 解析成物件</p>
          <p>將物件組合成一個DOM樹</p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36">解析 CSS</h3>
          <p>瀏覽器會從右到左解析CSS選擇器</p>
          <p>∕span -> ∕div -> html</p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36">JavaScript 解析的流程</h3>
          <p>
            1.瀏覽器創建 Document 物件並開始解析 HTML
            文件。解析器將解析到的元素和文本節點添加到文件中，此時
            document.readyState 屬性為 "loading"。
          </p>
          <br />
          <p>
            2.HTML 解析器遇到沒有 async 和 defer 屬性的 script
            標籤時，將它們添加到文件中並開始執行內部或外部腳本。這些腳本將同步執行，解析器在腳本下載和執行期間會暫停解析。因此，可以使用
            document.write()
            方法將文本插入到輸入流中。同步腳本通常用於定義函數和註冊事件處理程序，它們可以遍歷和操作腳本之前的文件內容。
          </p>
          <br />
          <p>
            3.當解析器遇到設置了 async 屬性的 script
            標籤時，它會開始下載該腳本並繼續解析文件。這些腳本將在下載完成後盡快執行，但解析器不會等待它們的下載。異步腳本禁止使用
            document.write()，它們可以訪問其所在的 script
            標籤以及之前的文件元素。
          </p>
          <br />
          <p>
            4.所有設置了 defer
            屬性的腳本將按照它們在文件中出現的順序執行。延遲腳本能夠訪問完整的文件樹，但禁止使用
            document.write()。
          </p>
          <br />
          <p>
            5.當文件上的所有延遲腳本執行完成時，瀏覽器將在 Document 物件上觸發
            DOMContentLoaded 事件。這表示文件的 DOM
            結構已完全構建，可以進行操作。
          </p>
          <br />
          <p>
            6.等待其他內容加載完成並且所有異步腳本執行完成後，document.readyState
            屬性變為 "complete"，此時 window 物件觸發 load
            事件。這表示整個文件和相關資源已經加載完成。
          </p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36">OSI七層模型</h3>
          <p>
            1.物理層利用傳輸介質為數據鏈路層提供物理連接，實現比特流的透明傳輸。
          </p>
          <br />
          <p>
            2.數據鏈路層在物理層提供的比特流的基礎上，通過差錯控制、流量控制方法，使有差錯的物理線路變為無差錯的數據鏈路。
          </p>
          <br />
          <p>3.網絡層向傳輸層提供最基本的端到端的數據傳輸服務。</p>
          <br />
          <p>
            4.數據鏈路層向用戶提供可靠的端到端的差錯和流量控制，保證報文的正確傳輸，同時向高層屏蔽下層數據通信的細節，即向用戶透明地傳送報文。
          </p>
          <br />
          <p>
            5.會話層組織和協調兩個會話進程之間的通信，並對數據交換進行管理。
          </p>
          <br />
          <p>
            6.表示層處理用戶信息的表示問題，如編碼、數據格式轉換和加密解密等。
          </p>
          <br />
          <p>
            7.應用層直接向用戶提供服務，完成用戶希望在網絡上完成的各種工作。
          </p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36">DOMContentLoaded和load的差別?</h3>
          <p>DOMContentLoaded:</p>
          <p>瀏覽器已完全加載 HTML 並構建 DOM 樹，</p>
          <p>但像 ＜img> 和樣式表之類的外部資源 可能尚未加載完成。</p>
          <br />
          <p>load：</p>
          <p>瀏覽器已完全加載 HTML ，還加載完成所有外部資源 。</p>
          <br />
          <p>beforeunload 是在網頁被卸載「之前」觸發</p>
          <p>unload 是在網頁被卸載「之後」觸發</p>
          <br />
          <br />
          <div class="articleCardTitle cor36">
            [ Web筆記 ] ≫ 什麼是重排(回流)和重繪?如何避免
          </div>
          <h2>重繪不一定重排，重排一定重繪</h2>
          <br />
          <h3 class="cor36"># 重排(回流)（reflow）是什麼:</h3>
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
          <h1 class="articleCardTitle cor36">
            [ Web筆記 ] ≫ http 有那些請求方法 和 用途 ?
          </h1>
          <p>GET方法： 用途：發送一個請求來獲取伺服器上的某一資源。</p>
          <div class="pTwo">1.GET方法的特點是甚麼?</div>
          <div class="pFou">
            1.獲取資源： GET方法用於從伺服器獲取指定URL上的資源。
          </div>
          <br />
          <div class="pFou">
            2.幂等性：
            GET方法是幂等的，即對同一URL進行多次連續GET請求，不會產生不同的效果。
          </div>
          <br />
          <div class="pTwo">2.GET 請求和 POST 請求的區別是甚麼?</div>
          <div class="pFou">
            1.GET 請求將參數附加在 URL 的查詢字串中, 而 POST
            請求將參數放在請求體中。
          </div>
          <br />
          <div class="pFou">
            2.GET 請求的數據會顯示在 URL 中, 而 POST 請求的數據不會顯示在 URL
            中。
          </div>
          <br />
          <div class="pFou">3.GET 請求用於獲取數據, 而 POST 用於提交數據</div>
          <br />
          <div class="pTwo">3.GET請求可以有請求體嗎?</div>
          <div class="pFou">
            根據HTTP協議規範，GET請求的特性是不包含請求體,
            參數應通過URL的查詢字串進行傳遞
          </div>
          <br />
          <div class="pTwo">4.GET請求的參數如何傳遞?</div>
          <div class="pFou">
            GET請求可以通過URL的查詢字串傳遞參數。參數位於URL的問號後面，並以鍵值對的形式表示。例如：https://example.com/search?keyword=apple。
          </div>
          <br />
          <div class="pTwo">5.GET請求的安全性和幂等性如何保證?</div>
          <div class="pFou">
            1.GET請求被認為是安全的，因為它不會修改伺服器上的資源。
          </div>
          <br />
          <div class="pFou">
            2.GET請求是幂等的，多次發送相同的 GET 請求不會影響伺服器
          </div>
          <br />
          <p>POST 方法： 用途：向 URL 指定的資源提交數據或附加新的數據</p>
          <div class="pTwo">1.POST 方法的特點是甚麼?</div>
          <div class="pFou">1.POST 方法用於向伺服器提交數據</div>
          <br />
          <div class="pFou">
            2.POST 不是幂等的, 多次發送相等的 POST 請求可能會產生不同結果
          </div>
          <br />
          <div class="pTwo">2.POST 請求和 GET 請求的區別是甚麼?</div>
          <div class="pFou">
            1.POST 請求將參數放在請求體中, 而 GET 請求將參數附加在 URL
            的查詢字串中。
          </div>
          <br />
          <div class="pFou">
            2.POST 請求的數據不會顯示在 URL 中, 而 GET 請求的數據會顯示在 URL
            中。
          </div>
          <br />
          <div class="pFou">3.POST 用於提交數據, 而 GET 請求用於獲取數據</div>
          <br />
          <div class="pTwo">3.POST 請求的請求體如何傳遞數據?</div>
          <div class="pFou">
            POST 請求的數據可以通過請求體以表單形式傳遞,或以 JSON 格式傳遞
          </div>
          <br />
          <div class="pTwo">4.POST 請求的安全性和幂等性如何保證?</div>
          <div class="pFou">
            1.POST 請求可能對伺服器端的資源產生副作用, 因此被視為不安全的
          </div>
          <br />
          <div class="pFou">
            2.POST 請求不是幂等的, 多次發送相等的 POST
            請求可能會對伺服器端產生影響
          </div>
          <br />
          <p>
            PUT 方法: 用途: 將數據發送給伺服器, 並將其儲存在指定的 URL 位置。與
            POST 方法不同的是, PUT 方法指定了資源在伺服器上的位置。
          </p>
          <div class="pTwo">1.PUT 方法的特點是甚麼?</div>
          <div class="pFou">
            1.PUT 方法用於將數據發送給伺服器並儲存在指定的 URL 位置
          </div>
          <br />
          <div class="pFou">
            2.PUT 請求是幂等的, 多次發送相同的 PUT 請求會對伺服器端產生相同結果
          </div>
          <br />
          <div class="pTwo">2.PUT 請求和 POST 請求有甚麼區別?</div>
          <div class="pFou">
            1.PUT 請求用於指定資源在伺服器上的位置, 而 POST 請求沒有指定位置
          </div>
          <br />
          <div class="pFou">
            2.PUT 請求用於更新or替換資源, 而 POST 請求用於 新增資源或提交數據
          </div>
          <br />
          <div class="pTwo">3.PUT請求的幂等性如何保證?</div>
          <div class="pFou">1.PUT 請求的幂等性保證由伺服器端實現的。</div>
          <br />
          <div class="pFou">
            2.伺服器端應根據請求中的資源位置來處理請求, 多次發送相同的 PUT
            請求會對該位置上的資源進行相同的更新或替換操作。
          </div>
          <br />
          <p>HEAD 方法: 用途: 只請求頁面的首部</p>
          <p>DELETE 方法: 用途: 刪除伺服器上某資源</p>
          <p>
            OPTIONS 方法: 用途: 獲取當前 URL 所支援的方法。如果請求成功,
            會有一個 Allow 的頭包含類似 "GET,POST" 訊息
          </p>
          <br />
          <br />
          <h3 class="articleCardTitle cor36"># HTTP狀態碼和其含義</h3>
          <p>1xx（資訊性狀態碼）：表示請求已被接收，正在處理。</p>
          <div class="pTwo">
            100 Continue：繼續，在發送 POST 請求時，已發送了 http header
            之後伺服器將返回此訊息，表示確認，之後發送具體參數訊息
          </div>
          <p>2xx（成功狀態碼）：表示請求已成功被伺服器接收、理解和處理。</p>
          <div class="pTwo">200 OK：請求已成功，伺服器正常返回請求的內容。</div>
          <div class="pTwo">
            201 Created：請求已成功並在伺服器上創建了新的資源。
          </div>
          <div class="pTwo">202 Accepted：伺服器已接受請求，但尚未處理。</div>
          <p>
            3xx（重新導向狀態碼）：表示客戶端需要採取進一步操作才能完成請求。
          </p>
          <div class="pTwo">
            301 Moved Permanently：請求的資源已永久移動到新位置。
          </div>
          <div class="pTwo">302 Found：請求的資源已臨時移動到新位置。</div>
          <div class="pTwo">
            304 Not Modified：客戶端的快取資源是最新的，可以直接使用。
          </div>
          <p>4xx（客戶端錯誤狀態碼）：表示客戶端發起的請求有錯誤或無法完成。</p>
          <div class="pTwo">
            400 Bad Request：請求語法錯誤，伺服器無法理解。
          </div>
          <div class="pTwo">401 Unauthorized：請求需要用戶驗證。</div>
          <div class="pTwo">403 Forbidden：禁止訪問。</div>
          <div class="pTwo">404 Not Found：請求的資源不存在。</div>
          <p>5xx（伺服器錯誤狀態碼）：表示伺服器在處理請求時發生了錯誤。</p>
          <div class="pTwo">
            500 Internal Server Error：伺服器遇到了一個未知的錯誤。
          </div>
          <div class="pTwo">
            503 Service
            Unavailable：伺服器暫時無法處理請求，可能是由於過載或維護。
          </div>
          <br />
          <br />
          <h1 class="articleCardTitle">[ Web筆記 ] ≫ 什麼是瀏覽器同源?跨域?</h1>
          <h3>同源指的是協議、域名和端口均要相同。</h3>
          <p>同源策略是瀏覽器的一種自我保護行為。</p>
          <br />
          <p>瀏覽器大部分内容受到同源策略的限制，以下例外</p>
          <p>＜img src="..."></p>
          <p>＜link href="..."></p>
          <p>＜script src="...">＜/script></p>
          <br />
          <br />
          <h3>跨域指瀏覽器不能執行其他域名下的腳本。</h3>
          <p>跨域請求能發送到服務器，服務器接受返回結果，結果被服務器攔截</p>
          <br />
          <br />
          <h3>解決跨域問題:</h3>
          <h3>JSONP</h3>
          <p>
            利用 script 標籤不受瀏覽器協議同源策略影響，
            可以拿到從其他源傳輸過來的數據，需要服務端支持。
          </p>
          <br />
          <p>優: 兼容性較好</p>
          <p>缺: 僅能 get 請求, 有侷限性, 不安全, 可能被 XSS 攻擊</p>
          <br />
          <br />
          <h3>跨域資源共享 (CORS)</h3>
          <p>
            是透過自訂的HTTP標頭，讓瀏覽器與伺服器進行溝通，從而判斷請求或回應應該是成功還是失敗的。
          </p>
          <p>實現 CORS 關鍵是後端，</p>
          <p>服務端設置 Access-Control-Allow-Origin 頭部字段開啟 CORS</p>
          <br />
          <br />
          <h3>Nginx 反向代理</h3>
          <p>所有客戶端請求經 Nginx 處理， Nginx 再向服務器請求轉發給後段</p>
          <br />
          <br />
          <h1 class="articleCardTitle cor36">
            [ Web筆記 ] ≫ 如何進行網站性能優化 ?
          </h1>
          <p>加載方面:</p>
          <div class="pTwo">1. 減少 http 請求 ( Spriter精靈圖 , 文件合併 )</div>
          <div class="pTwo">
            2. 減小文件大小 ( 資源壓縮 , 圖片壓縮 , 代碼壓縮 )
          </div>
          <div class="pTwo">3. CDN ( 第三方庫 , 大文件 , 大圖 )</div>
          <div class="pTwo">4. SSR 服務端渲染 , 預渲染</div>
          <div class="pTwo">5. 懶加載</div>
          <div class="pTwo">6. 分包</div>
          <br />
          <p>性能方面:</p>
          <div class="pTwo">
            減少 DOM 操作 , 有操作量很大的 DOM 可以用 文檔碎片
          </div>
          <br />
          <p>CSS 方面:</p>
          <div class="pTwo">1. 將樣式表放在頁面頂部</div>
          <div class="pTwo">2. 不使用 CSS 表達式</div>
          <div class="pTwo">3. 使用 ＜link> 不使用 @import</div>
          <br />
          <p>JS 方面:</p>
          <div class="pTwo">1. 將 JS 腳本放在頁面底部</div>
          <div class="pTwo">2. 將 JS 和 CSS 從外部引入</div>
          <div class="pTwo">3. 壓縮 JS 和 CSS</div>
          <div class="pTwo">4. 刪除不需要的腳本</div>
          <div class="pTwo">5. 減少 DOM 訪問</div>
          <br />
          <p>圖片方面:</p>
          <div class="pTwo">1. 壓縮圖片 tinyJPG</div>
          <div class="pTwo">2. Spriter精靈圖</div>
          <div class="pTwo">3. 不要在 HTML 中拉伸圖片</div>
          <br />
          <br />
          <h1 class="articleCardTitle">有用過那些前端性能優化的方法 ?</h1>
          <p>
            1. 減少 http 請求次數 => Spriter精靈圖 , JS & CSS 代碼壓縮 ,
            圖片壓縮工具來減小圖片大小 , 網頁
            <a href="https://zh.wikipedia.org/wiki/Gzip" class="cor36"
              >GZIP @WIKI</a
            >
            , 引用 CDN 庫
          </p>
          <p>2. 用 innerHTML 代替 DOM 操作 , 減少 DOM 操作次數 , 來優化 JS</p>
          <p>3. 當需要設置的樣式很多時用 className 而不是直接操作 style</p>
          <p>4. 圖片預加載 , 將樣式表放在頂部 , 將 script 放在底部</p>
          <p>
            5. 避免在主佈局中用 table 標籤 , 因為 table
            要等其中內容完全下載之後才會顯示出來 ( 比 div + css 慢 )
          </p>
          <br />
          <br />
          <h1 class="articleCardTitle">前端性能優化最佳實踐 ?</h1>
          <p>
            PageSpeed：PageSpeed是由Google開發的工具，用於評估網頁的性能。它通過分析網頁的載入速度、渲染性能、資源優化等指標，給出性能優化建議和分數評級。PageSpeed的評分基於一系列規則和最佳實踐，根據網頁的優化程度給出具體的優化建議，幫助開發人員改進網頁的性能。
          </p>
          <br />
          <p>
            YSlow：YSlow是由Yahoo開發的網頁性能評估工具，它也用於評估網頁的性能和優化建議。YSlow根據一系列的規則和性能指標，對網頁的載入速度、緩存設置、JavaScript和CSS優化等進行分析和評估。它提供了類似於PageSpeed的性能分數和建議，幫助開發人員了解和改善網頁的性能表現。
          </p>
          <br />
          <br />
          <h1 class="articleCardTitle">最後甚麼是性能優化</h1>
          <p>1. 頁面加載性能 -> 加載時間 , 用戶體驗</p>
          <p>2. 動畫與操作性能 -> 是否流暢不卡頓</p>
          <div class="pTwo">用 translate 和 定位 比較不會卡頓</div>
          <div class="pTwo">
            translate 是脫離正常文檔流 , 所以移動不會影響上方&下方元素
          </div>
          <div class="pTwo">所以不用重新渲染 DOM</div>
          <p>3. 內存佔用 -> 內存佔用過大導致瀏覽器崩潰</p>
          <div class="pTwo">直播內存超出瀏覽器上限 , 導致卡頓</div>
          <p>4. 電量消耗 -> 遊戲方面</p>
          <br />
          <p>那些不是性能優化 ?</p>
          <p>1. while 循環快 還是 for 循環快 ?</p>
          <p>2. |0 比 Math.floor 快</p>
          <p>3. 三元運算符 比 if else 快</p>
          <p>這些是執行效率</p>
          <br />
          <br />
          <h1 class="articleCardTitle">[ Web筆記 ] ≫ 如何進行渲染優化 ?</h1>
          <p>1.不使用 iframe</p>
          <p class="pTwo">iframe 會阻塞主頁面的 onload 事件</p>
          <p class="pTwo">
            iframe
            和主頁面共享連接池，瀏覽器對相同域的連接有限制，因而影響頁面的併行加載。
          </p>
          <br />
          <p>
            2.不使用 gif 來實現 loading 效果 ( 降低 CPU 消耗 而提升渲染性能)
          </p>
          <br />
          <p>3.用 CSS 代替 JS 動畫 ( 避免重新繪排 )</p>
          <br />
          <p>
            4.小圖用 base64 位編碼，以減少網路請求。 (不建議大圖 => 較消耗CPU)
          </p>
          <br />
          <p>
            5.不把 style 和 script
            都放在頭部，才不會阻塞頁面。(Renderer進程中JS線程和渲染線程互斥)
          </p>
          <br />
          <p>6.避免在 href 和 src 中用空值。(link . script . img)</p>
          <p class="pTwo">
            瀏覽器會嘗試解析這些標籤並發起對應的網路請求，即使他為空值也會發起。
          </p>
          <br />
          <p>7.用 className 而不是直接操作 style</p>
          <br />
          <p>8.用 innerHTML 代替 DOM 操作次數 來優化 JS。</p>
          <br />
          <p>
            9.前端用變數保存 AJAX 請求結果，並操作客戶端變數來減少請求次數。
          </p>
          <br />
          <p>10.圖片預加載 , 網頁 Gzip , CDN 庫 , data 緩存 , 圖片服務器</p>
          <br />
          <br />
          <h1 class="articleCardTitle">[ Web筆記 ] ≫ 瀏覽器垃圾回收機制</h1>
          <p>垃圾回收是一種自動的記憶體管理機制。</p>
          <p>當電腦上的動態記憶體不再需要時，就應該予以釋放。</p>
          <br />
          <p>
            自動的意思是瀏覽器可以自動幫助我們回收記憶體垃圾，但並不代表我們不用關心記憶體管理，如果操作不當，JavaScript中仍然會出現記憶
          </p>
          <br />
          <br />
          <h3 class="articleCardTitle">標記清除</h3>
          <p>
            JavaScript 中有一個全域物件， 在固定的時間間隔內，
            垃圾回收器會從這個全域物件開始，
          </p>
          <br />
          <p>尋找所有從這個全域物件開始引用的物件， 再找這些物件引用的物件</p>
          <br />
          <p>
            對這些活躍的物件進行標記， 這是標記階段。
            清除階段就是清除那些沒有被標記的物件。
          </p>
          <br />
          <br />
          <p>問題: 在整理之後，內存空間是不連續的，即出現了內存碎片。</p>
          <br />
          <br />
          <h3>標記整理：</h3>
          <p>
            標記階段與標記清除法沒什麼區別， 只是標記結束後，
            標記整理法會將存活的物件向內存的一邊移動， 最後清理掉邊界內存。
          </p>
          <br />
          <br />
          <h3 class="articleCardTitle">引用記數</h3>
          <p>跟蹤紀錄每個值被引用次數。</p>
          <br />
          <br />
          <h3 class="articleCardTitle">
            在瀏覽器中，不同類型的變量在何時釋放內存？
          </h3>
          <p>引用類型: 當它們不再被引用時，由V8自動回收。</p>
          <br />
          <p>基本類型:</p>
          <p>如果處於閉包的情況下，只有在閉包沒有引用時，V8才會回收它們。</p>
          <p>如果不是閉包的情況，則在等待V8進行新生代切換時回收。</p>
          <br />
          <br />
          <h3 class="articleCardTitle">內存洩漏</h3>
          <p>內存洩漏指任何對象在不再擁有之後它仍然存在</p>
          <br />
          <p>1.閉包使用不當</p>
          <p>2.setTimeout 的第一個参數用字串</p>
          <br />
          <br />
          <p>
            循環引用：當兩個或多個物件相互引用，並且沒有被其他物件引用時，它們將無法被垃圾回收。
          </p>
          <p>
            未釋放資源：使用了需要手動釋放的資源，如檔案處理器、資料庫連線或網路連線，在不再需要時沒有正確釋放這些資源。
          </p>
          <p>
            定時器和回呼函式：
            在使用定時器或回呼函式時，沒有正確清理或取消這些定時器或回呼函式，導致它們仍然保留在內存中。
          </p>
          <p>
            快取導致：
            過度使用快取，將大量物件存儲在快取中，並且沒有適當的清理策略。
          </p>
          <br />
          <br />
          <p>解決:</p>
          <p>
            解除引用：當不再需要某個物件時，將其引用設置為null，使垃圾回收器能夠回收該物件佔用的內存空間。
          </p>
          <p>
            關閉資源：對於使用了需要手動釋放的資源，如檔案處理器或資料庫連線，確保在使用完畢後進行正確的關閉和釋放。
          </p>
          <p>
            取消定時器和回呼函式：在使用定時器或註冊回呼函式時，確保在不再需要時及時取消定時器或移除回呼函式，避免它們繼續佔用內存空間。
          </p>
          <p>
            合理管理快取：對於使用快取的情況，確保採用適當的清理策略，定期清除不再需要的快取物件，避免過度佔用內存。
          </p>
          <p>
            注意作用域和生命週期：確保物件的作用域和生命週期符合需求，避免長時間持有物件的引用，及時釋放不再需要的物件。
          </p>
          <p>使用內存管理工具和效能分析工具：借助工具進行內存泄漏</p>
          <br />
          <br />
          <h1 class="articleCardTitle">[ Web筆記 ] ≫ 前端需要注意哪些SEO</h1>
          <p>1.合理的title、description、keywords標籤</p>
          <div class="pTwo">＜title >網頁標題＜/title ></div>
          <div class="pTwo">
            ＜meta name="description" content="網站內容概述">
          </div>
          <div class="pTwo">
            ＜meta name="keywords"
            content="SEO,metatag,html">曾經是SEO優化最重要的根據,但現在不參考keywords來決定SEO排名了
          </div>
          <br />
          <p>2.語義化的HTML代碼, 可以讓搜索引擎更容易理解網頁的結構和內容</p>
          <p>
            3.重要內容HTML代碼放在最前面：
            搜索引擎抓取HTML的順序是從上到下，有些搜索引擎對抓取長度有限制。將重要的內容放在HTML的前面，確保重要內容一定會被抓取。
          </p>
          <p>4.重要內容不要用JavaScript輸出： 爬蟲不會執行JavaScript獲得內容</p>
          <p>5.少使用iframe： 搜索引擎通常不會抓取iframe中的內容</p>
          <p>
            6.非裝飾性圖片加上 alt 屬性:
            當圖片無法加載時會顯示該描述，也可供讀屏器讀取圖片內容。
          </p>
          <p>7.提高網站速度： 網站速度是搜索引擎排序的一個重要指標</p>
          <div class="pTwo">壓縮圖片</div>
          <div class="pTwo">瀏覽器緩存</div>
          <div class="pTwo">最小化 CSS 和 JavaScript</div>
          <div class="pTwo">使用 CDN 庫</div>
          <div class="pTwo">優化代碼</div>
          <div class="pTwo">避免重定向</div>
          <div class="pTwo">壓縮頁面</div>
          <div class="pTwo">使用快速的主機服務器</div>
          <div class="pTwo">非同步載入資源</div>
          <div class="pTwo">使用快取機制</div>
          <br />
          <br />
          <h1 class="articleCardTitle">
            [ Web筆記 ] ≫ 腳本攻擊XSS,請求偽造CSRF
          </h1>
          <h3 class="articleCardTitle">
            跨站腳本攻擊（XSS）Cross-site request forgery
          </h3>
          <p>
            攻擊者在網頁中注入惡意腳本，並將該腳本傳送給其他使用者的瀏覽器執行。
          </p>
          <br />
          <br />
          <p>防止XSS攻擊:</p>
          <p>開發者應該適當地驗證和過濾使用者的輸入。</p>
          <br />
          <br />
          <h3 class="articleCardTitle">
            跨站請求偽造（CSRF）Cross-site request forgery
          </h3>
          <p>
            攻擊者誘導使用者到第三方網站, 在第三方網站中,
            向被攻擊網站發送跨站請求。
          </p>
          <br />
          <p>利用受害者在被攻擊網站已獲取的註冊憑證, 繞過後台用戶驗證,</p>
          <br />
          <p>冒充用戶對被攻擊網站執行操作。</p>
          <br />
          <br />
          <p>防止CSRF攻擊:</p>
          <p>
            檢查和驗證請求的來源、實施隨機生成的驗證碼（CSRF令牌）和同源政策等。
          </p>
          <br />
          <br />
          <h1 class="articleCardTitle">
            [ Web筆記 ] ≫ 描述Cookies、sessionStorage和localStorage的區別
          </h1>
          <p>
            cookie是網站為了標識使用者身份而儲存在使用者本地終端（Client
            Side）上的數據（通常經過加密）。
          </p>
          <p>
            cookie數據始終在同源的HTTP請求中攜帶（即使不需要），在瀏覽器和伺服器之間來回傳遞。
          </p>
          <p>
            sessionStorage和localStorage不會自動將數據發送給伺服器，僅在本地保存。
          </p>
          <br />
          <h3>儲存容量：</h3>
          <p>cookie數據大小不能超過4KB。</p>
          <p>
            sessionStorage和localStorage雖然也有儲存大小的限制，但比cookie大得多，可以達到5MB或更大。
          </p>
          <br />
          <h3>生命週期： (有效時間)</h3>
          <p>cookie 需要設置有效時間，過期後 cookie 銷毀。</p>
          <p>localStorage 除非主動刪除數據，否則永久存在。</p>
          <p>sessionStorage 頁面關閉後刪除。</p>
          <br />
          <h3>儲存形式:</h3>
          <p>三者都是字串類型</p>
          <p>複雜對象 可用 json 的 stringify 和 parse</p>
          <br />
          <p>JSON.stringify() 將字串轉成 JSON</p>
          <p>JSON.parse() 將 JSON 轉成字串</p>
          <br />
          <h3>安全性:</h3>
          <p>cookie 請求時一般會攜帶在 header 中</p>
          <p>localStorage、sessionStorage 請求時不會攜帶</p>
          <br />
          <br />
          <h1 class="articleCardTitle">[ Web筆記 ] ≫ WEB標準 & W3C標準</h1>
          <p>WEB 標準不是某一個標準，是一系列的集合</p>
          <p>WEB 標準: 結構 . 表現 . 行為</p>
          <p>結構(Structure):</p>
          <p class="pTwo">指 body 裡面寫的標籤 => HTML 標籤組成</p>
          <br />
          <p>表現(Presentation)</p>
          <p class="pTwo">指豐富 HTML 標籤樣式， 由 CSS 樣式組成</p>
          <br />
          <p>行為(Behavior)</p>
          <p class="pTwo">指頁面和用戶交互，由 JS 組成</p>
          <p class="pTwo">標準包括: DOM . ECMAScript</p>
          <br />
          <p>W3C對於WEB標準提出了規範化的要求：</p>
          <p>1.標籤字母要小寫。</p>
          <p>2.標籤要閉合。</p>
          <p>3.標籤不允許隨意嵌套。</p>
          <p>
            4.儘量用外部連結 CSS樣式表 和 JS
            腳本，使結構、表現、行為分離，符合規範。能提高頁面渲染速度，提升使用者體驗。
          </p>
          <p class="comment">
            5.儘量減少使用行內樣式表，實現結構與表現的分離。
          </p>
          <p class="comment">
            6.標籤的id和class等屬性命名應具有語意，更有利於SEO（搜尋引擎優化），並使代碼易於維護。
          </p>
          <br />
          <br />
          <h1 class="articleCardTitle">
            [ Web筆記 ] ≫ 描述漸進增強和優雅降級之間的不同?
          </h1>
          <p>漸進增強（Progressive Enhancement）:</p>
          <p>
            針對低版本瀏覽器進行構建頁面，保證最基本的功能，然後再針對高級瀏覽器進行效果、互動等改進和追加功能，以達到更好的使用者體驗。
          </p>
          <br />
          <p>優雅降級（Graceful Degradation）:</p>
          <p>一開始就構建完整的功能，然後再針對低版本瀏覽器進行兼容。</p>
          <br />
          <br />
          <p>
            區別：優雅降級是從複雜的現狀開始，並試圖減少使用者體驗的供給，而漸進增強則是從一個非常基礎的、能夠起作用的版本開始，並不斷擴充，以適應未來環境的需求。降級（功能衰減）意味著往回看；而漸進增強則意味著朝前看，同時保證其根基處於安全地帶。
          </p>
          <br />
          <br />
          <h1 class="articleCardTitle">
            [ Web筆記 ] ≫ 製作網頁用的圖片格式有哪些?
          </h1>
          <p>Webp . jpeg . gif . svg . Apng</p>
          <br />
          <p>WebP 格式:</p>
          <p>由 Google 開發的一種圖像格式。圖片壓縮體積約只有 JPEG 的 2/3。</p>
          <p>在質量相同情況下， WebP 比 JPEG 小 40%。</p>
          <br />
          <p>
            Apng: “Animated Portable Network Graphics” 可以實現 png
            格式的動態圖片效果。
          </p>
          <br />
          <br />
          <h1 class="articleCardTitle">
            [ Web筆記 ] ≫
            大型網站有大量圖片，加載很慢，有哪些方法能優化這些圖片加載，提升用戶體驗?
          </h1>
          <p>圖片懶加載:</p>
          <p>
            在頁面上的未被看見的區域添加滾動條事件的技術，判斷圖片與瀏覽器頂部的距離和頁面的距離，如果前者小於後者，則優先加載該圖片。
          </p>
          <br />
          <p>預加載:</p>
          <p>
            如果為幻燈片，可以使用圖片預加載技術，先下載當前展示圖片的前一張和後一張圖片。
          </p>
          <br />
          <p>
            如果圖片是CSS圖片，可以使用 CSS Sprite、SVG
            Sprite、Iconfont、Base64等技術
          </p>
          <br />
          <p>
            如果圖片過大，可以使用特殊編碼的圖片。在加載時，首先加載壓縮程度極高的縮略圖，以提高用戶體驗。
          </p>
          <br />
          <p>
            如果圖片展示區域小於圖片的實際大小，可以在伺服器端根據業務需求先進行圖片壓縮，使圖片壓縮後的大小與展示一致。
          </p>
          <br />
          <br />
          <h1 class="articleCardTitle">
            [ Web筆記 ] ≫ Web 開發中會話跟蹤的方法有哪些?
          </h1>
          <p>1.會話</p>
          <p class="pTwo">
            用戶打開瀏覽器，訪問 Web
            服務器的資源，會話建立，直到有一方斷開連結，會話結束。
          </p>
          <p class="pTwo">一次會話中可以包含多次請求和響應</p>
          <br />
          <p>2.會話跟蹤</p>
          <p class="pTwo">
            一種維護瀏覽器狀態的方法，服務器需要識別多次請求是否來自於同一瀏覽器，以便於在同一次會話中的多次請求間共享數據。
          </p>
          <br />
          <p>一次會話中的多次請求間共享數據 => 購物車 . 登陸 . 驗證碼</p>
          <br />
          <p>
            3.客戶端和伺服器用HTTP協議是無狀態的 =>
            伺服器不知道多次請求中，那些來自同一瀏覽器
          </p>
          <p class="pTwo">
            每次瀏覽器向伺服器發請求時，伺服器都將該請求視為新的請求
          </p>
          <p class="pTwo">所以需要會話跟蹤</p>
          <p>Cookie 和 Seccion 都是來完成一次會話內多次請求間數據共享</p>
          <p>存取位置: Cookie 數據存在客戶端 ， Session 數據存在伺服器</p>
          <p>安全性: Cookie 不安全 ， Session 安全</p>
          <p>數據大小: Cookie 4KB ， Session 無大小限制</p>
          <p>儲存時間: Cookie 可以長期存取 ， Session 默認 30 min</p>
          <p>伺服器: Cookie 不佔伺服器資源 ， Session 佔用 伺服器資源</p>
          <br />
          <p>1.客戶端會話跟蹤技術 Cookie</p>
          <p>把數據存在客戶端瀏覽器</p>
          <br />
          <p>2.服務端會話跟蹤技術 Session</p>
          <p>把數據存在服務端</p>
          <br />
          <p>3.URL重寫</p>
          <p>URL重寫是一種在URL中嵌入會話ID的方法。</p>
          <br />
          <p>4.隱藏表單字段</p>
          <p>
            在HTML表單中，可以添加一個隱藏的字段來存儲會話ID。該字段在每次表單提交時一同發送到服務器，以維護會話狀態。
          </p>
          <br />
          <p>5.ip地址</p>
          <p>
            伺服器可以記錄使用者的IP地址，並將其與其他會話標識符（如Cookie或會話ID）相關聯。這樣，即使會話標識符發生變化（如Cookie被刪除），伺服器仍然可以根據IP地址來識別使用者並恢復其會話狀態。
          </p>
          <br />
          <br />
          <br />
          <br />
          <p>
            HTTP協議如果是有狀態，每一次後邊請求要攜帶前一次請求所有的數據，會導致後邊數據大，而後邊請求速度慢。
          </p>
          <br />
          <br />
          <h1 class="articleCardTitle">
            [ Web筆記 ] ≫ CDN為什麼利用多個域名來存取網站資源更有效?
          </h1>
          <p>內容傳遞網路（英語：Content Delivery Network，縮寫：CDN）</p>
          <p>
            指一種透過網際網路互相連接的電腦網路系統，利用最靠近每位使用者的伺服器，更快、更可靠地將音樂、圖片、影片、應用程式及其他檔案傳送給使用者，來提供高效能、可擴展性及低成本的網路內容傳遞給使用者。
          </p>
          <br />
          <br />
          <p>CDN和緩存:</p>
          <p>
            使用多個域名還可以更好地與 內容分發網絡（CDN） 和緩存系統配合使用。
          </p>
          <p>
            CDN可以將網站資源分佈在全球各地的伺服器上，通過使用多個域名，可以更好地與CDN緩存機制配合，提供更快速的內容傳輸和加載。
          </p>
          <br />
          <br />
          <br />
          <p>1.突破瀏覽器並發限制：</p>
          <p>瀏覽器對同一域名下的並發請求數量有限制。</p>
          <p>
            通過使用CDN，可以將頁面資源分佈在多個CDN伺服器上，使瀏覽器可以同時從多個域名下載資源，從而提高並發性能。
          </p>
          <br />
          <p>2.節省Cookie帶寬：</p>
          <p>
            Cookie是在客戶端和伺服器之間傳輸的小型資料文件，用於存儲會話信息和使用者偏好等。
          </p>
          <p>
            CDN緩存靜態資源時，可以避免將Cookie傳輸到CDN伺服器，從而減少帶寬消耗，提高傳輸效率。
          </p>
          <br />
          <p>3.節省主域名的連接數，優化頁面響應速度：</p>
          <p>瀏覽器對同一域名下的並發連接數有限制。</p>
          <p>
            使用CDN時，可以將靜態資源（如圖片、CSS和JavaScript文件）分發到CDN伺服器上，從而減輕主域名的負載，提高頁面的響應速度和性能。
          </p>
          <br />
          <p>4.防止不必要的安全問題：</p>
          <p>
            通過使用CDN，可以將靜態資源從主伺服器分離出來，減少直接與主伺服器進行交互的機會。
          </p>
          <p>這有助於防止潛在的攻擊和安全問題，提高網站的安全性。</p>
          <br />
          <br />

          <!-- thebottomTHEBOTTOM -->
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
  position: fixed;
  width: 19vw;
  height: 100%;
  background-color: #040404;
  /* color: #36c1cb; */
  color: #a1b6cb;
  display: flex;
  justify-content: center;
}

.leftNavContainer {
  padding: 25px 5px 0 5px;
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

.articleCardTitle {
  font-size: 1.25rem;
  padding: 30px 5px 30px 5px;
}

.cor36 {
  color: #36c1cb;
}

/* top按鈕的css -------------------------------------------------------*/
.toTop {
  /* bottom: 50px; */
  bottom: 20vh;
  /* right: 200px; */
  right: 10px;
  position: fixed;
  z-index: 100;
  background-color: #6f020290;
  height: 40px;
  width: 40px;
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
  /* bottom: 50px; */
  bottom: 10vh;
  /* right: 200px; */
  right: 10px;
  position: fixed;
  z-index: 100;
  background-color: #6f020290;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.toBot:hover {
  background-color: #6f020250;
}
</style>
