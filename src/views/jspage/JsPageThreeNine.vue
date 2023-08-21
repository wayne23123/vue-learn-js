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
          <div @click="locate('threeajax001')" class="leftNavText"></div>
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
          <br />
          <br />
          <p class="fz28">總分總</p>
          <p class="fz28">1.要講哪個知識點</p>
          <p class="fz28">2.細講</p>
          <p class="fz28">3.總結</p>
          <br />
          <br />
          <div id="threeajax001" class="articleCardTitle cor36 fz34">
            9.1 AJAX
          </div>
          <p class="fz28">
            AJAX 是 "Asynchronous JavaScript and XML"（非同步 JavaScript 和
            XML）的縮寫
          </p>
          <br />
          <p class="fz28">是 使用 XMLHttpRequest 對象 與 服務器 通信</p>
          <br />
          <br />
          <p class="fz28">AJAX 是 瀏覽器 與 服務器 進行 數據通信 的技術</p>
          <p class="fz28">
            可以在 不刷新頁面 情況下 與 服務器通信 , 交換數據 , 更新頁面
          </p>

          <div id="threeajax002" class="articleCardTitle cor36 fz34">
            9.2 axios
          </div>
          <a class="fz28" href="https://www.axios-http.cn/">@ axios</a>
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">script</span>
              <span class="word"></span> <span class="word">src</span>
              <span class="then">=</span>
              <span class="src"
                >"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"</span
              >
              <span class="then">>＜/ </span>
              <span class="number">script</span> <span class="then">></span>
            </div>
            <div>
              <span class="variable">axios</span>
              <span class="brackets">({</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">url:</span>
              <span class="src">"https://randomuser.me/api/"</span>
              <div></div>
            </div>
            <div>
              <span class="brackets">})</span>
              <span class="variable">.then</span>
              <span class="brackets">( ( </span>
              <span class="word">result </span> <span class="brackets">)</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">result</span> <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
          </div>

          <p class="fz28">什麼是 URL</p>
          <p class="fz28">統一資源定位符 , 簡稱 網址 , 用於訪問 網路上 資源</p>
          <br />
          <div>
            <span class="number fz30">http://</span
            ><span class="variable fz30">randomuser.me</span>
            <span class="src fz30">/api/</span>
          </div>
          <div>
            <span class="number fz30">協議</span>
            <span class="cor17">......</span>
            <span class="variable fz30">域名</span>
            <span class="cor17">..................</span>
            <span class="src fz30">資源路徑</span>
          </div>
          <br />
          <br />
          <p class="fz28">http 協議</p>
          <p class="fz28">
            超文本傳輸協議 , 規定瀏覽器和服務器之間傳輸數據的格式
          </p>
          <br />
          <br />

          <p class="fz28">域名</p>
          <p class="fz28">標記服務器在互聯網中方位</p>
          <br />
          <br />
          <p class="fz28">URL 查詢參數</p>
          <p class="fz28">
            瀏覽器 提供給 服務器的 額外訊息 , 讓 服務器 返回 瀏覽器 想要的 數據
          </p>
          <p class="fz28">
            http//test.com/test/test<span class="number"
              >?參數名1=值1&參數名2=值2</span
            >
          </p>
          <div class="bgcVS">
            <p>axios 查詢參數</p>
            <p>axios 會把參數名和值 , 拼接到 url?參數名=值</p>
            <div>
              <span class="variable">axios</span>
              <span class="brackets">({</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">url:</span>
              <span class="src">"https://randomuser.me/api/"</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="word">params:</span> <span class="brackets">{</span>
              <div>
                <div class="padTwo VSL">
                  <span class="word">參數名:值</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
            </div>
            <div>
              <span class="brackets">})</span>
              <span class="variable">.then</span>
              <span class="brackets">( ( </span>
              <span class="word">result </span> <span class="brackets">)</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">result</span> <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
          </div>
          <p class="fz28">請求方法: 對服務器資源 , 要執行的操作</p>
          <p class="fz28">GET _ 獲取數據</p>
          <p class="fz28">POST _ 提交數據</p>
          <p class="fz28">PUT _ 修改數據 ( 全部 )</p>
          <p class="fz28">DELETE _ 刪除數據</p>
          <p class="fz28">PATCH _ 修改數據 ( 部分 )</p>
          <div class="bgcVS">
            <p>axios 請求數據 + 查詢參數</p>
            <p>axios 會把參數名和值 , 拼接到 url?參數名=值</p>
            <div>
              <span class="variable">axios</span>
              <span class="brackets">({</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">url:</span>
              <span class="src">"https://randomuser.me/api/"</span>
              <div></div>
            </div>
            <div class="padTwo VSL">
              <div>
                <span class="word">method:</span>
                <span class="src">"請求方法"</span>
              </div>
              <span class="word">params:</span> <span class="brackets">{</span>
              <div>
                <div class="padTwo VSL">
                  <span class="word">參數名:值</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
            </div>
            <div>
              <span class="brackets">})</span>
              <span class="variable">.then</span>
              <span class="brackets">( ( </span>
              <span class="word">result </span> <span class="brackets">)</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">result</span> <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
            <p>axios 提交數據到服務器</p>
            <br />
            <div>
              <span class="then">＜</span> <span class="number">button </span>
              <span class="function">class </span> <span class="then">=</span>
              <span class="src">"btn"</span> <span class="then">></span>
              <span class="word">註冊</span> <span class="then">＜/</span>
              <span class="number">button</span> <span class="then">></span>
            </div>
            <div>
              <span class="word">document</span>
              <span class="variable">.querySelector</span>
              <span class="brackets">(</span> <span class="src">".btn"</span>
              <span class="brackets">)</span>
              <span class="word">.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click"</span>
              <span class="then">,</span> <span class="brackets">()</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="variable">axios</span>
              <span class="brackets">({</span>
              <div>
                <div class="padTwo VSL">
                  <span class="word">url:</span> <span class="src">"",</span>
                  <div>
                    <span class="word">method:</span>
                    <span class="src">"post", </span>
                    <span class="comment">// 提交數據</span>
                  </div>
                  <div>
                    <span class="word">data:</span>
                    <span class="brackets">{</span>
                  </div>
                  <div class="padTwo VSL">
                    <div>
                      <div>
                        <span class="word">username:</span>
                        <span class="src">"",</span>
                      </div>
                      <div>
                        <span class="word">password:</span>
                        <span class="src">""</span>
                      </div>
                    </div>
                  </div>
                  <div><span class="brackets">}</span></div>
                </div>
              </div>
            </div>
            <div class="padTwo VSL">
              <span class="brackets">})</span>
              <span class="variable">.then</span>
              <span class="brackets">((</span> <span class="word">result</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="brackets">{</span>
              <div>
                <div class="padTwo VSL">
                  <span class="word">console.</span>
                  <span class="variable">log</span>
                  <span class="brackets">(</span>
                  <span class="word">result</span>
                  <span class="brackets">)</span>

                  <div></div>
                </div>
                <div><span class="brackets">})</span></div>
              </div>
            </div>
            <div><span class="brackets">})</span></div>

            <br />
            <p>axios 錯誤處理</p>
            <p>
              在 then 方法後面 , 調用 catch 方法 , 傳入 回掉函數 並定義 形參
            </p>
            <br />
            <p></p>
            <br />
            <div>
              <span class="then">＜</span> <span class="number">button </span>
              <span class="function">class </span> <span class="then">=</span>
              <span class="src">"btn"</span> <span class="then">></span>
              <span class="word">註冊</span> <span class="then">＜/</span>
              <span class="number">button</span> <span class="then">></span>
            </div>
            <div>
              <span class="word">document</span>
              <span class="variable">.querySelector</span>
              <span class="brackets">(</span> <span class="src">".btn"</span>
              <span class="brackets">)</span>
              <span class="word">.addEventListener</span>
              <span class="brackets">(</span> <span class="src">"click"</span>
              <span class="then">,</span> <span class="brackets">()</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="variable">axios</span>
              <span class="brackets">({</span>
              <div>
                <div class="padTwo VSL">
                  <span class="word">url:</span> <span class="src">"",</span>
                  <div>
                    <span class="word">method:</span>
                    <span class="src">"post",</span>
                    <span class="comment">// 提交數據</span>
                  </div>
                  <div>
                    <span class="word">data:</span>
                    <span class="brackets">{</span>
                  </div>
                  <div class="padTwo VSL">
                    <div>
                      <div>
                        <span class="word">username:</span>
                        <span class="src">"",</span>
                      </div>
                      <div>
                        <span class="word">password:</span>
                        <span class="src">""</span>
                      </div>
                    </div>
                  </div>
                  <div><span class="brackets">}</span></div>
                </div>
              </div>
            </div>
            <div class="padTwo VSL">
              <span class="brackets">})</span>
              <span class="variable">.then</span>
              <span class="brackets">((</span> <span class="word">result</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="brackets">{</span>
              <div>
                <div class="padTwo VSL">
                  <span class="word">console.</span>
                  <span class="variable">log</span>
                  <span class="brackets">(</span>
                  <span class="word">result</span>
                  <span class="brackets">)</span>
                  <div></div>
                </div>
                <div>
                  <span class="brackets">})</span
                  ><span class="variable">.catch</span>
                  <span class="brackets">( ( </span>
                  <span class="variable">error </span>
                  <span class="brackets">)</span>

                  <span class="function">=></span>
                  <span class="brackets">{</span>
                </div>
                <div class="padTwo VSL">
                  <span class="comment">//處理報錯訊息</span>
                  <div>
                    <span class="word">console</span>
                    <span class="word">.log</span>
                    <span class="brackets">(</span>
                    <span class="variable">error</span>
                    <span class="brackets">)</span>
                  </div>

                  <div></div>
                </div>
                <div><span class="brackets">})</span></div>
              </div>
            </div>
            <div><span class="brackets">})</span></div>

            <br />
          </div>
          <p class="fz28">HTTP 協議 請求報文</p>
          <p class="fz28">
            請求報文: 瀏覽器 按照 HTTP 協議要求的格式 , 發給 服務器 的內容
          </p>
          <br />
          <p class="fz28">1 | POST http://test.com/URL網址... HTTP/1.1</p>
          <p class="fz28">2 | ...</p>
          <p class="fz28">3 | ...</p>
          <p class="fz28">4 | ...</p>
          <p class="fz28">5 | ...</p>
          <p class="fz28">6 | ...</p>
          <p class="fz28">7 | Content-Type : application/json</p>
          <p class="fz28">8 | ...</p>
          <p class="fz28">9 | ...</p>
          <p class="fz28">10| ...</p>
          <p class="fz28">11| ...</p>
          <p class="fz28">12|</p>
          <p class="fz28">13| { "username":"admin","password":"123465" }</p>
          <br />
          <br />
          <p class="fz28">請求報文 4 部分</p>

          <p class="fz28">1. 請求行: 請求方法 , URL , 協議</p>
          <p class="fz28">
            2. 請求頭: 以鍵值對的格式攜帶的附加訊息 ex Content-Type
          </p>
          <p class="fz28">3. 空行: 分割請求頭 , 空行之後是發送給服務器的資源</p>
          <p class="fz28">4. 請求體: 發送的資源</p>
          <br />
          <br />
          <p class="fz28">HTTP 協議 響應報文</p>
          <p class="fz28">
            響應報文: 服務器 按照 HTP 協議要求的格式 , 返回給 瀏覽器 的內容
          </p>
          <br />
          <br />
          <p class="fz28">響應報文 4 部分</p>

          <p class="fz28">1. 響應行: 協議 , HTTP 響應狀態碼 , 狀態訊息</p>
          <p class="fz28">
            2. 響應頭: 以鍵值對的格式攜帶的附加訊息 ex Content-Type
          </p>
          <p class="fz28">3. 空行: 分割響應頭 , 空行之後是服務器返回的資源</p>
          <p class="fz28">4. 請求體: 返回的資源</p>
          <br />
          <br />
          <p class="fz28">1 | HTTP/1.1 400 Bad Request</p>
          <p class="fz28">2 | ...</p>
          <p class="fz28">3 | ...</p>
          <p class="fz28">4 | Content-Type: application/json</p>
          <p class="fz28">5 | ...</p>
          <p class="fz28">6 | ...</p>
          <p class="fz28">7 | ...</p>
          <p class="fz28">8 | ...</p>
          <p class="fz28">9 | ...</p>
          <p class="fz28">10| ...</p>
          <p class="fz28">11| ...</p>
          <p class="fz28">12| ...</p>
          <p class="fz28">13| ...</p>
          <p class="fz28">14| ...</p>
          <p class="fz28">15|</p>
          <p class="fz28">16| {"code":123456,"message":"test"}</p>
          <br />
          <br />
          <p class="fz28">HTTP 響應狀態碼</p>
          <p class="fz28">1XX ... 訊息</p>
          <p class="fz28">2XX ... 成功</p>
          <p class="fz28">3XX ... 重定向</p>
          <p class="fz28">4XX ... 客戶端錯誤</p>
          <p class="fz28">5XX ... 服務端錯誤</p>
          <br />
          <br />
          <p class="fz28">404 服務器找不到資源</p>
          <br />
          <br />
          <p class="fz28">接口文檔</p>
          <p class="fz28">
            接口: 使用 AJAX 和 服務器通訊時 , 使用的 URL , 請求方法 , 參數
          </p>
          <br />
          <br />
          <p class="fz28">XMLHttpRequest</p>
          <p class="fz28">1. 創建 XMLHttpRequest 對象</p>
          <p class="fz28">2. 配 請求方法 & url</p>
          <p class="fz28">3. 監聽 loadend 接收響應結果</p>
          <p class="fz28">4. 發請求</p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="word">xhr</span> <span class="then">=</span>
              <span class="then">new </span>
              <span class="word">XMLHttpRequest</span>
              <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">xhr</span> <span class="variable">.open</span>
              <span class="brackets">(</span>
              <span class="src">"請求方法","請求url網址"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">xhr</span>
              <span class="variable">.addEventListener</span>
              <span class="brackets">(</span>
              <span class="src">"loadend"</span> <span class="then">,</span>
              <span class="brackets">()</span> <span class="function">=></span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">xhr.response</span>
              <span class="brackets">)</span>
              <span class="comment">//響應結果</span>
              <div>
                <span class="function">const </span>
                <span class="word">data</span> <span class="then">=</span>
                <span class="brackets">JSON</span>
                <span class="variable">.parse</span>
                <span class="brackets">(</span>
                <span class="word">xhr.response</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span> <span class="word">data</span>
                <span class="brackets">)</span>
              </div>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
            <div>
              <span class="word">xhr</span> <span class="variable">.send</span>
              <span class="brackets">()</span>
            </div>
          </div>
          <div id="threeajax003" class="articleCardTitle cor36 fz34">
            9.3 Promise 3 狀態 pending . . . fullfilled . . . rejected
          </div>

          <p class="fz28">pending 待定: 初始狀態</p>
          <p class="fz28">fullfilled 兌現: 操作成功</p>
          <p class="fz28">rejected 拒絕: 操作失敗</p>
          <br />
          <br />
          <p class="fz28">Promise 狀態 一但 兌現 / 拒絕 就 無法再改變</p>
          <br />
          <div class="bgcVS">
            <div>
              <span class="comment">//1.創建Promise對象(pending-待定狀態)</span>
            </div>
            <div>
              <span class="function">const </span> <span class="word">p</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="brackets">Promise</span>
              <span class="brackets">((</span>
              <span class="word">resolve,reject</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="src">"Promise對象創建時,這裡的代碼都會執行了"</span>
              <span class="brackets">)</span>

              <div></div>

              <div><span class="comment">//2.執行異步代碼</span></div>

              <div>
                <span class="variable">setTimeout</span>
                <span class="brackets">(()</span>
                <span class="function">=></span> <span class="brackets">{</span>
              </div>

              <div class="padTwo VSL">
                <span class="comment"
                  >//resolve(調用時fullfilled狀態) . . > then()</span
                >
                <div>
                  <span class="variable">resolve</span>
                  <span class="brackets">(</span>
                  <span class="src">"模擬AJAX-成功結果"</span>
                  <span class="brackets">)</span>
                </div>
                <div>
                  <span class="comment"
                    >//reject(調用時rejected狀態) . . > catch()</span
                  >
                </div>
                <div>
                  <span class="variable">reject</span>
                  <span class="brackets">(</span>
                  <span class="then">new </span>
                  <span class="word">Error</span>
                  <span class="brackets">(</span>
                  <span class="src">"模擬AJAX請求-失敗結果"</span>
                  <span class="brackets">))</span>
                </div>
                <div></div>
              </div>
              <div>
                <span class="brackets">},</span>
                <span class="number">2000</span> <span class="brackets">)</span>
              </div>
            </div>
            <div><span class="brackets">})</span></div>
            <div><span class="comment">//3.獲取結果</span></div>
            <div>
              <span class="word">p</span><span class="variable">.then</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="word">result</span> <span class="brackets">)</span>
              <div></div>
            </div>
            <div>
              <span class="brackets">})</span>
              <span class="variable">.catch</span>
              <span class="brackets">(</span>
              <span class="variable">error</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console.</span>
              <span class="variable">log</span> <span class="brackets">(</span>
              <span class="variable">error</span>
              <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
          </div>
          <p class="fz28">xhr + Promise</p>
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">=</span>
              <span class="src">"showData"</span>
              <span class="then">>＜/ </span> <span class="number">div </span>
              <span class="then">></span>
            </div>
            <div><span class="comment">//1.創建Promise對象</span></div>
            <div>
              <span class="function">const </span> <span class="word">p</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="brackets">Promise</span>
              <span class="brackets">((</span>
              <span class="variable">resolve,reject</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="comment">//2.執行xhr異步獲取資料</span>
              <div>
                <span class="function">const </span>
                <span class="word">xhr</span> <span class="then">=</span>
                <span class="then">new </span>
                <span class="word">XMLHttpRequest</span>
                <span class="brackets">()</span>
              </div>
              <div>
                <span class="word">xhr</span>
                <span class="variable">.open</span>
                <span class="brackets">(</span>
                <span class="src">"GET","放URL"</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="word">xhr</span>

                <span class="variable">.addEventListener</span>
                <span class="brackets">(</span>
                <span class="src">"loadend"</span> <span class="then">,</span>
                <span class="brackets">()</span>
                <span class="function">=></span> <span class="brackets">{</span>
              </div>
              <div></div>
              <div class="padTwo VSL">
                <span class="comment">//xhr判斷響應碼,2xx成功</span>
                <div>
                  <span class="then">if</span> <span class="brackets">(</span>
                  <span class="word">xhr.status</span>
                  <span class="then">>=</span> <span class="number">200</span>
                  <span class="word">&&</span>
                  <span class="word">xhr.status</span>
                  <span class="then">＜</span> <span class="number">300</span>
                  <span class="brackets">){</span>
                </div>
                <div></div>
                <div class="padTwo VSL">
                  <span class="variable">resolve</span>
                  <span class="brackets">(</span>
                  <span class="brackets">JSON</span>
                  <span class="variable">.parse</span>
                  <span class="brackets">(</span>
                  <span class="word">xhr.response</span>
                  <span class="brackets">))</span>
                  <div></div>
                </div>
                <div>
                  <span class="brackets">}</span>
                  <span class="then">else </span>
                  <span class="brackets">{</span>
                </div>
                <div class="padTwo VSL">
                  <span class="variable">reject</span>
                  <span class="brackets">(</span>
                  <span class="then">new </span>
                  <span class="word">Error</span>
                  <span class="brackets">(</span>
                  <span class="word">xhr.response</span>
                  <span class="brackets">))</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
              <div><span class="brackets">})</span></div>
              <div>
                <span class="word">xhr</span>
                <span class="variable">.send</span>
                <span class="brackets">()</span>
              </div>
            </div>
            <div><span class="brackets">})</span></div>
            <div>
              <span class="comment">//3.成功執行then,失敗執行catch</span>
            </div>
            <div>
              <span class="word">p</span> <span class="variable">.then</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="brackets">)</span>
              <div>
                <span class="word">document</span>
                <span class="variable">.querySelector</span>
                <span class="brackets">(</span>
                <span class="src">".showData"</span>
                <span class="brackets">)</span>
                <span class="variable">.innerHTML</span>
                <span class="then">=</span> <span class="word">result</span>
              </div>
              <div></div>
            </div>
            <div>
              <span class="brackets">})</span>
              <span class="variable">.catch</span>
              <span class="brackets">(</span>
              <span class="variable">error</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span>
              <span class="variable">error</span>
              <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
          </div>
          <p class="fz28">模仿 axios 封裝 xhr + Promise</p>
          <div class="bgcVS">
            <div>
              <span class="then">＜</span> <span class="number">div </span>
              <span class="function">class </span> <span class="then">=</span>
              <span class="src">"showData"</span>
              <span class="then">>＜/ </span> <span class="number">div </span>
              <span class="then">></span>
            </div>

            <div>
              <span class="function">function </span>
              <span class="word">myAxios</span> <span class="brackets">(</span>
              <span class="word">config</span> <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="then">return </span> <span class="then">new </span>
              <span class="brackets">Promise</span>
              <span class="brackets">((</span>
              <span class="variable">resolve,reject</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="brackets">{</span>
              <div></div>
              <div class="padTwo VSL">
                <span class="comment">//2.發起xhr,默認請求方法GET</span>
                <div>
                  <span class="function">const </span>
                  <span class="word">xhr</span> <span class="then">=</span>
                  <span class="then">new </span>
                  <span class="word">XMLHttpRequest</span>
                  <span class="brackets">()</span>
                </div>
                <div>
                  <span class="word">xhr</span>
                  <span class="variable">.open</span>
                  <span class="brackets">(</span>

                  <span class="word">config.method </span>
                  <span class="then">||</span> <span class="src">"GET"</span>
                  <span class="then">,</span>
                  <span class="word">config.url</span>

                  <span class="brackets">)</span>
                </div>
                <div>
                  <span class="word">xhr</span>

                  <span class="variable">.addEventListener</span>
                  <span class="brackets">(</span>
                  <span class="src">"loadend"</span> <span class="then">,</span>
                  <span class="brackets">()</span>
                  <span class="function">=></span>
                  <span class="brackets">{</span>
                </div>
                <div></div>
                <div class="padTwo VSL">
                  <span class="comment">//xhr判斷響應碼,2xx成功</span>
                  <div>
                    <span class="then">if</span> <span class="brackets">(</span>
                    <span class="word">xhr.status</span>
                    <span class="then">>=</span> <span class="number">200</span>
                    <span class="then">&& </span>
                    <span class="word">xhr.status</span>
                    <span class="then">＜</span> <span class="number">300</span>
                    <span class="brackets">){</span>
                  </div>
                  <div></div>
                  <div class="padTwo VSL">
                    <span class="variable">resolve</span>
                    <span class="brackets">(</span>
                    <span class="brackets">JSON</span>
                    <span class="variable">.parse</span>
                    <span class="brackets">(</span>
                    <span class="word">xhr.response</span>
                    <span class="brackets">))</span>
                    <div></div>
                  </div>
                  <div>
                    <span class="brackets">}</span>
                    <span class="then">else </span>
                    <span class="brackets">{</span>
                  </div>
                  <div class="padTwo VSL">
                    <span class="variable">reject</span>
                    <span class="brackets">(</span>
                    <span class="then">new </span>
                    <span class="word">Error</span>
                    <span class="brackets">(</span>
                    <span class="word">xhr.response</span>
                    <span class="brackets">))</span>
                    <div></div>
                  </div>
                  <div><span class="brackets">}</span></div>
                </div>
                <div><span class="brackets">})</span></div>
                <div>
                  <span class="word">xhr</span>
                  <span class="variable">.send</span>
                  <span class="brackets">()</span>
                </div>
              </div>
              <div><span class="brackets">})</span></div>
            </div>
            <div><span class="brackets">}</span></div>

            <div>
              <span class="comment">//3.成功執行then,失敗執行catch</span>
            </div>
            <div>
              <span class="word">myAxios</span> <span class="brackets">({</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">url:</span> <span class="src">"放網址"</span>
              <div></div>
            </div>

            <div>
              <span class="brackets">})</span
              ><span class="variable">.then</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="brackets">)</span>
              <div>
                <span class="word">document</span>
                <span class="variable">.querySelector</span>
                <span class="brackets">(</span>
                <span class="src">".showData"</span>
                <span class="brackets">)</span>
                <span class="variable">.innerHTML</span>
                <span class="then">=</span> <span class="word">result</span>
              </div>
              <div></div>
            </div>
            <div>
              <span class="brackets">})</span>
              <span class="variable">.catch</span>
              <span class="brackets">(</span>
              <span class="variable">error</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span>
              <span class="variable">error</span>
              <span class="brackets">)</span>

              <div>
                <span class="word">document</span>
                <span class="variable">.querySelector</span>
                <span class="brackets">(</span>
                <span class="src">".showData"</span>
                <span class="brackets">)</span>
                <span class="variable">.innerHTML</span>
                <span class="then">=</span>
                <span class="word">error.message</span>
              </div>

              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
          </div>

          <p class="fz28">同步</p>
          <p class="fz28">逐行執行 , 原地等待結果後 , 才繼續向下執行</p>
          <br />
          <p class="fz28">異步</p>
          <p class="fz28">
            調用後耗時 , 不阻塞代碼執行 , 將來完成後觸發 回調函數
          </p>
          <br />
          <p class="fz28">JS哪些是異步?</p>
          <p class="fz28">setTimeout / setInterval</p>
          <p class="fz28">事件</p>
          <p class="fz28">AJAX</p>
          <br />
          <p class="fz28">異步如何接收結果?</p>
          <p class="fz28">回調函數接收</p>
          <br />
          <br />
          <p class="fz28">回調地獄 . . . 回調函數嵌套問題</p>
          <p class="fz28">setTimeout(function () {</p>
          <p class="fz28 pTwo">console.log(111);</p>
          <p class="fz28 pTwo">setTimeout(function () {</p>
          <p class="fz28 pFou">console.log(222);</p>
          <p class="fz28 pFou">setTimeout(function () {</p>
          <p class="fz28 pSix">console.log(333);</p>

          <p class="fz28 pFou">}, 1000)</p>
          <p class="fz28 pTwo">}, 2000)</p>
          <p class="fz28">}, 3000)</p>
          <br />
          <br />
          <p class="fz28">Promise 鏈式調用</p>
          <br />
          <div>
            <span class="pad20 bor fz30">new Promise()</span> ➔
            <span class="pad20 bor fz30">.then( 回調函數 )</span> ➔
            <span class="pad20 bor fz30">新的 Promise 對象</span>
          </div>
          <br />
          <div class="fz30">
            <span class="cor17">. . . . . . . . . . . . . . . . . . . . .</span>
            ↘ 回調函數中 , return 的結果 ↗
          </div>
          <div class="bgcVS">
            <div>
              <span class="function">const </span> <span class="word">p</span>
              <span class="then">= new </span>
              <span class="brackets">Promise (( </span>
              <span class="variable">resolve,reject</span>
              <span class="brackets">)</span> <span class="function">=></span>
              <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="variable">setTimeout</span>
              <span class="brackets">(()</span>
              <span class="function">=></span> <span class="brackets">{</span>
              <div class="padTwo VSL">
                <span class="variable">resolve</span>
                <span class="brackets">(</span>
                <span class="src">"獲取的資料"</span>
                <span class="brackets">)</span>
                <div></div>
              </div>
              <div></div>
              <div>
                <span class="brackets">},</span>
                <span class="number">2000</span>
                <span class="brackets">)</span>
              </div>
            </div>
            <div><span class="brackets">})</span></div>
            <div>
              <span class="word">p</span> <span class="variable">.then</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="brackets">) </span>
              <span class="comment">// 2 秒後打印 "獲取的資料"</span>

              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
            <div>
              <span class="comment">//promise調用then後在原地等結果</span>
            </div>
            <div><span class="comment">//返回一個全新的promise對象</span></div>
            <div><span class="comment">//const p2 接收</span></div>
            <div>
              <span class="function">const </span> <span class="word">p2</span>
              <span class="then">=</span> <span class="word">p</span>
              <span class="variable">.then</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>

            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="brackets">) </span>
              <span class="comment">// 2 秒後打印 "獲取的資料"</span>
              <div>
                <span class="comment">//創建Promise對象,模擬再發出請求</span>
              </div>
              <div>
                <span class="comment"
                  >// return promise 對象最終狀態和結果, 影響到新的 Promise 對象
                  // p2</span
                >
              </div>
              <div>
                <span class="then">return new </span>
                <span class="brackets">Promise (( </span>
                <span class="variable">resolve,reject</span>
                <span class="brackets">)</span>
                <span class="function">=></span> <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="variable">setTimeout</span>
                <span class="brackets">(()</span>
                <span class="function">=></span> <span class="brackets">{</span>
                <div class="padTwo VSL">
                  <span class="variable">resolve</span>
                  <span class="brackets">(</span>
                  <span class="word">result</span> <span class="then">+</span>
                  <span class="src">"加上模擬另一次AJAX網路請求"</span>
                  <span class="brackets">)</span>

                  <div></div>
                </div>
                <div>
                  <span class="brackets">},</span>
                  <span class="number">2000</span>
                  <span class="brackets">)</span>
                  <div></div>
                </div>

                <div></div>
              </div>
              <div><span class="brackets">})</span></div>

              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">p2</span>
              <span class="then">===</span> <span class="word">p</span>
              <span class="brackets">)</span>
              <span class="comment"
                >// 打印 false // 證明 p2 是全新的 promise</span
              >
            </div>
            <div>
              <span class="comment"
                >// promise 物件保存在內存地址 // false 證明不在同一個地址</span
              >
            </div>
            <br />
            <div><span class="comment">//獲取最終結果</span></div>
            <div>
              <span class="word">p2</span> <span class="variable">.then</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="brackets">)</span>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
          </div>
          <p class="fz28">1. 什麼是 Promise 鏈式調用?</p>
          <p class="fz28">
            使用 then 函數返回新 Promise 物件特性 , 一直串聯下去
          </p>
          <br />
          <p class="fz28">2. then 回調函數中 , return 的值 會傳到 哪裡?</p>
          <p class="fz28">傳給 then 函數生成的 新 Promise 物件</p>
          <br />
          <p class="fz28">3. Promise 鏈式調用有什麼用?</p>
          <p class="fz28">解決 回調嵌套 問題</p>
          <div id="threeajax004" class="articleCardTitle cor36 fz34">
            9.4 async await
          </div>

          <p class="fz28">
            async await 讓我們更簡潔方式寫出基於 Promise 的異步行為 ,
          </p>
          <p class="fz28">而無須鏈式調用 promise</p>
          <br />
          <p class="fz28 cor36">概念:</p>
          <p class="fz28">在 async 函數內 , 用 await 關鍵字 取代 then 函數 ,</p>
          <p class="fz28">
            <span class="spo cor36"> 等待 </span> 獲取 Promise
            對象成功狀態的結果值
          </p>
          <div class="bgcVS">
            <div>
              <span class="function">async function </span>
              <span class="word">getData</span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="variable">try</span> <span class="brackets">{</span>

              <div></div>
            </div>
            <div class="padTwo VSL">
              <span class="comment">//axios在原地返回一個promise對象</span>
              <div>
                <span class="comment"
                  >//await後面接Promise物件"成功狀態"結果值</span
                >
              </div>
              <div>
                <span class="function">const </span>
                <span class="word">pObj</span> <span class="then">=</span>
                <span class="then">await </span>
                <span class="variable">axios</span>
                <span class="brackets">({</span> <span class="word">url:</span>
                <span class="src">"https://randomuser.me/api/"</span>
                <span class="brackets">})</span>
              </div>
              <div>
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="word">pObj</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="function">const </span>
                <span class="word">name</span> <span class="then">=</span>
                <span class="word">pObj.results</span>
                <span class="brackets">[</span> <span class="number">0</span>
                <span class="brackets">]</span> <span class="word">.name</span>
              </div>
              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">getData</span> <span class="brackets">()</span>
            </div>
          </div>
          <p class="fz28">async await 捕獲錯誤</p>
          <div class="bgcVS">
            <div>
              <span class="function">async function </span>
              <span class="word">getData</span>
              <span class="brackets">(){</span>
            </div>

            <div class="padTwo VSL">
              <div>
                <span class="comment"
                  >//try只要某行發生錯誤,以下就不執行,往catch執行</span
                >
              </div>
              <div>
                <span class="variable">try</span>
                <span class="brackets">{</span>
              </div>

              <div class="padTwo VSL">
                <span class="comment">//axios在原地返回一個promise對象</span>
                <div>
                  <span class="comment"
                    >//await後面接Promise物件"成功狀態"結果值</span
                  >
                </div>
                <div>
                  <span class="function">const </span>
                  <span class="word">pObj</span> <span class="then">=</span>
                  <span class="then">await </span>
                  <span class="variable">axios</span>
                  <span class="brackets">({</span>
                  <span class="word">url:</span>
                  <span class="src">"https://randomuser.me/api/"</span>
                  <span class="brackets">})</span>
                </div>
                <div>
                  <span class="word">console</span>
                  <span class="variable">.log</span>
                  <span class="brackets">(</span> <span class="word">pObj</span>
                  <span class="brackets">)</span>
                </div>
                <div>
                  <span class="function">const </span>
                  <span class="word">name</span> <span class="then">=</span>
                  <span class="word">pObj.results</span>
                  <span class="brackets">[</span> <span class="number">0</span>
                  <span class="brackets">]</span>
                  <span class="word">.name</span>
                </div>
                <div></div>
              </div>
              <div>
                <span class="brackets">}</span>
                <span class="variable">catch</span>
                <span class="brackets">(</span>
                <span class="variable">error</span>
                <span class="brackets">){</span>
              </div>

              <div class="padTwo VSL">
                <span class="word">console</span>
                <span class="variable">.dir</span>
                <span class="brackets">(</span>
                <span class="variable">error</span>
                <span class="brackets">)</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">}</span></div>
            <div>
              <span class="word">getData</span> <span class="brackets">()</span>
            </div>
          </div>

          <div id="threeajax005" class="articleCardTitle cor36 fz34">
            9.5 事件循環 EventLoop
          </div>

          <p class="fz28">
            JS 是單線呈 (逐行執行代碼) , 為了 耗時代碼 不阻塞其他代碼 ,
            設計了事件循環
          </p>
          <br />
          <p class="fz28">
            事件循環負責執行代碼 、 收集 、 處理事件 、 執行隊列中子任務
          </p>

          <div class="dis">
            <div class="bgcVS w100">
              <div>
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="number">1</span>
                <span class="brackets">)</span>
              </div>
              <br />
              <div>
                <span class="variable">setTimeout</span>
                <span class="brackets">(()</span>
                <span class="function">=></span> <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="number">2</span>
                <span class="brackets">)</span>
                <div></div>
              </div>
              <div>
                <span class="brackets">},</span> <span class="number">0</span>
                <span class="brackets">)</span>
              </div>
              <br />
              <div>
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="number">3</span>
                <span class="brackets">)</span>
              </div>
              <br />

              <div>
                <span class="variable">setTimeout</span>
                <span class="brackets">(()</span>
                <span class="function">=></span> <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="number">4</span>
                <span class="brackets">)</span>
                <div></div>
              </div>
              <div>
                <span class="brackets">},</span>
                <span class="number">2000</span>
                <span class="brackets">)</span>
              </div>
              <br />
              <div>
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="number">5</span>
                <span class="brackets">)</span>
              </div>
              <br />
              <p>控制台打印: 1 3 5 2 4</p>
            </div>
            <span class="cor17">____</span>

            <div class="bgcVS cor36">
              <div>調用棧</div>
            </div>
            <span class="cor17">____</span>

            <div class="w100">
              <div class="bgcVS">
                <p class="cor36">宿主環境(瀏覽器)</p>
                <br />
                <p>放耗時異步代碼</p>

                <div>
                  <span class="variable">setTimeout</span>
                  <span class="brackets">(()</span>
                  <span class="function">=></span>
                  <span class="brackets">{</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">console</span>
                  <span class="variable">.log</span>
                  <span class="brackets">(</span>
                  <span class="number">2</span>
                  <span class="brackets">)</span>
                  <div></div>
                </div>
                <div>
                  <span class="brackets">},</span>
                  <span class="number">0</span>
                  <span class="brackets">)</span>
                </div>

                <div>
                  <span class="variable">setTimeout</span>
                  <span class="brackets">(()</span>
                  <span class="function">=></span>
                  <span class="brackets">{</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">console</span>
                  <span class="variable">.log</span>
                  <span class="brackets">(</span>
                  <span class="number">4</span>
                  <span class="brackets">)</span>
                  <div></div>
                </div>
                <div>
                  <span class="brackets">},</span>
                  <span class="number">2000</span>
                  <span class="brackets">)</span>
                </div>
              </div>

              <div class="bgcVS">
                <p class="cor36">任務隊列</p>
                <br />
                <p>回調放這邊排隊</p>
                <br />
                <p>調用棧空閒時,</p>
                <p>循環查找隊列執行</p>
              </div>
            </div>
          </div>

          <p class="fz28">1. 什麼是 事件循環?</p>
          <p class="fz28">
            執行代碼 和 收集異步任務 , 在調用棧 空閒時 , 反覆調用 任務隊列裡
            回調函數 執行機制
          </p>
          <br />
          <p class="fz28">2. 為什麼要事件循環?</p>
          <p class="fz28">JS 單線呈 , 為了 不阻塞 JS 引擎</p>
          <br />
          <p class="fz28">3. JS 代碼怎麼執行?</p>
          <p class="fz28">執行 同步代碼 , 遇到異步 交給 宿主瀏覽器環境執行</p>
          <p class="fz28">異步有結果後 , 把回調函數 放入 任務隊列排隊</p>
          <p class="fz28">當 調用棧 空閒時 , 反覆調用 任務隊列裡 的回調函數</p>

          <div id="threeajax006" class="articleCardTitle cor36 fz34">
            9.6 宏任務 微任務
          </div>

          <p class="fz28">ES6 引入 Promise物件 , 讓 JS 引擎可發起異步任務</p>
          <br />
          <p class="fz28">宏任務: 由 瀏覽器環境執行的 異步代碼</p>
          <br />
          <p class="fz28">微任務: 由 JS 引擎環境執行的 異步代碼</p>
          <br />
          <br />
          <br />
          <table>
            <tr>
              <th><div class="pad20 fz36">宏任務</div></th>
              <th><div class="pad20 fz36">執行環境</div></th>
              <th><div class="pad20 fz36">微任務</div></th>
              <th><div class="pad20 fz36">執行環境</div></th>
            </tr>
            <tr>
              <td><div class="pad20 fz30">JS腳本 (script)</div></td>
              <td>
                <div class="pad20 fz30">瀏覽器</div>
              </td>
              <td>
                <div class="pad20 fz30">
                  Promise物件<span class="cor36">.then</span>
                </div>
              </td>
              <td><div class="pad20 fz30">JS引擎</div></td>
            </tr>
            <tr>
              <td>
                <div class="padL20 fz30">setTimeout</div>
                <div class="padL20 fz30">setInterval</div>
              </td>
              <td><div class="pad20 fz30">瀏覽器</div></td>
              <td><div class="pad20"></div></td>
              <td><div class="pad20"></div></td>
            </tr>
            <tr>
              <td><div class="pad20 fz30">AJAX請求完成事件</div></td>
              <td><div class="pad20 fz30">瀏覽器</div></td>
              <td><div class="pad20"></div></td>
              <td><div class="pad20"></div></td>
            </tr>
            <tr>
              <td><div class="pad20 fz30">用戶交互事件</div></td>
              <td><div class="pad20 fz30">瀏覽器</div></td>
              <td><div class="pad20"></div></td>
              <td><div class="pad20"></div></td>
            </tr>
          </table>
          <div class="dis">
            <div class="bgcVS w100">
              <div>
                <span class="then">＜</span>
                <span class="number">script </span> <span class="then">></span>
              </div>

              <div>
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="number">1</span>
                <span class="brackets">)</span>
              </div>
              <br />
              <div>
                <span class="variable">setTimeout</span>
                <span class="brackets">(()</span>
                <span class="function">=></span> <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="number">2</span>
                <span class="brackets">)</span>
                <div></div>
              </div>
              <div>
                <span class="brackets">},</span> <span class="number">0</span>
                <span class="brackets">)</span>
              </div>
              <br />
              <div>
                <span class="function">const </span>
                <span class="word">p</span> <span class="then">= new </span>
                <span class="brackets">Promise</span>
                <span class="brackets">((</span>
                <span class="variable">resolve,reject</span>
                <span class="brackets">)</span>
                <span class="function">=></span> <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="number">2</span>
                <span class="brackets">)</span>
                <div>
                  <span class="variable">resolve</span>
                  <span class="brackets">(</span> <span class="number">4</span>
                  <span class="brackets">)</span>
                </div>
                <div></div>
              </div>
              <div><span class="brackets">})</span></div>
              <br />
              <div>
                <span class="word">p</span> <span class="variable">.then</span>
                <span class="brackets">(</span>
                <span class="word">result</span>
                <span class="function">=></span> <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span>
                <span class="word">result</span> <span class="brackets">)</span>
                <div></div>
              </div>
              <div><span class="brackets">})</span></div>
              <br />
              <div>
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="number">5</span>
                <span class="brackets">)</span>
              </div>

              <div>
                <span class="then">＜/</span>
                <span class="number">script </span> <span class="then">></span>
              </div>
              <br />
              <p>控制台打印: 1 3 5</p>
              <br />
              <p>現在調用棧空閒</p>
              <p>宏&微 執行哪個?</p>
              <p class="cor36">優先 微</p>
              <p>直到 微隊列 清空</p>
              <p>再執行 宏</p>
            </div>

            <span class="cor29">_</span>

            <div class="bgcVS cor36"><div>調用棧</div></div>

            <span class="cor29">_</span>

            <div class="w100">
              <div class="bgcVS">
                <div class="cor36">宿主環境(瀏覽器)</div>
                <div>
                  <span class="variable">setTimeout</span>
                  <span class="brackets">(()</span>
                  <span class="function">=></span>
                  <span class="brackets">{</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">console</span>
                  <span class="variable">.log</span>
                  <span class="brackets">(</span> <span class="number">2</span>
                  <span class="brackets">)</span>
                  <div></div>
                </div>
                <div>
                  <span class="brackets">},</span> <span class="number">0</span>
                  <span class="brackets">)</span>
                </div>
              </div>

              <div class="bgcVS">
                <div class="cor36">
                  <span class="spoGra"> 宏任務隊列 </span>
                </div>
                <div>
                  <span class="brackets">()</span>
                  <span class="function">=></span>
                  <span class="brackets">{</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">console</span>
                  <span class="variable">.log</span>
                  <span class="brackets">(</span> <span class="number">2</span>
                  <span class="brackets">)</span>
                  <div></div>
                </div>
                <div>
                  <span class="brackets">}</span>
                </div>
              </div>

              <div class="bgcVS">
                <div class="cor36">
                  <span class="spoGra"> 微任務隊列 </span>
                </div>
                <div>
                  <span class="word">result</span>
                  <span class="function">=></span>
                  <span class="brackets">{</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">console</span>
                  <span class="variable">.log</span>
                  <span class="brackets">(</span>
                  <span class="word">result</span>
                  <span class="brackets">)</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
              </div>
            </div>
          </div>
          <p class="fz28">1. 什麼是宏任務?</p>
          <p class="fz28">瀏覽器執行的 異步代碼</p>
          <br />
          <p class="fz28">JS腳本 (script)</p>
          <p class="fz28">setTimeout</p>
          <p class="fz28">AJAX請求完成事件</p>
          <p class="fz28">用戶交互事件</p>
          <br />
          <p class="fz28">2. 什麼是微任務?</p>
          <p class="fz28">JS 引擎執行的 異步代碼</p>
          <br />
          <p class="fz28">Promise物件.then() 的回調</p>
          <br />
          <p class="fz28">3. JS 代碼如何執行?</p>
          <p class="fz28">執行第一個 script 腳本事件 宏任務 , 裡面 同步代碼</p>
          <br />
          <p class="fz28">
            遇到 宏任務 / 微任務 交給 宿主環境 , 有 結果 回調函數 進入 對應 隊列
          </p>
          <br />
          <p class="fz28">
            當執行棧 空閒時 , 清空 微任務隊列 , 再執行 下一個 宏任務
          </p>
          <div class="bgcVS">
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="number">1</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="variable">setTimeout</span>
              <span class="brackets">(()</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="number">2</span>
              <span class="brackets">)</span>
              <div>
                <span class="function">const </span>
                <span class="number">p </span> <span class="then">= new </span>
                <span class="brackets">Promise</span>
                <span class="brackets">(</span>
                <span class="variable">resolve</span>
                <span class="function">=></span>
                <span class="variable">resolve</span>
                <span class="brackets">(</span> <span class="number">3</span>
                <span class="brackets">))</span>
              </div>
              <div>
                <span class="number">p </span>
                <span class="variable">.then</span>
                <span class="brackets">(</span>
                <span class="word">result</span>
                <span class="function">=></span>
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span>
                <span class="word">result</span>
                <span class="brackets">))</span>
              </div>
              <div></div>
            </div>
            <div>
              <span class="brackets">},</span> <span class="number">0</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="function">const </span>
              <span class="number">p </span> <span class="then">= new </span>
              <span class="brackets">Promise</span>
              <span class="brackets">(</span>
              <span class="variable">resolve</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="variable">setTimeout</span>
              <span class="brackets">(()</span>
              <span class="function">=></span> <span class="brackets">{</span>
              <div></div>
              <div class="padTwo VSL">
                <span class="word">console</span>
                <span class="variable">.log</span>
                <span class="brackets">(</span> <span class="number">4</span>
                <span class="brackets">)</span>
                <div></div>
              </div>
              <div>
                <span class="brackets">},</span> <span class="number">0</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="variable">resolve</span>
                <span class="brackets">(</span> <span class="number">5</span>
                <span class="brackets">)</span>
              </div>
            </div>
            <div><span class="brackets">})</span></div>
            <br />
            <div>
              <span class="number">p </span>
              <span class="variable">.then</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="function">=></span>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="brackets">))</span>
            </div>
            <br />
            <div>
              <span class="function">const </span> <span class="word">p2</span>
              <span class="then">= new </span>
              <span class="brackets">Promise</span>
              <span class="brackets">(</span>
              <span class="variable">resolve</span>
              <span class="function">=></span>
              <span class="variable">resolve</span>
              <span class="brackets">(</span> <span class="number">6</span>
              <span class="brackets">))</span>
            </div>
            <br />
            <div>
              <span class="word">p2</span> <span class="variable">.then</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="function">=></span>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="brackets">))</span>
            </div>
            <br />
            <div>
              <span class="word">console</span>
              <span class="variable">.log</span>
              <span class="brackets">(</span> <span class="number">7</span>
              <span class="brackets">)</span>
            </div>
          </div>
          <p class="fz28">
            setTimeout ... 宏任務 ... 交給瀏覽器...... 發現 時間到
            0...推入宏任務列隊
          </p>
          <br />
          <p class="fz28">
            new Promise ... 同步 ... 放調用棧 ... resolve立刻執行 ...
            setTimout放宿主環境 ... 發現倒數0,放進宏任務隊列
          </p>
          <br />
          <p class="fz28">
            p 調用的 then 方法 同步 ... then 裡面異步 ... 只有當 promise
            狀態改變後 , 才把 then 裡面回調推入到 微任務隊列
          </p>
          <br />
          <div>
            <img
              class="w100"
              src="../../../src/assets/jsimg/jsmission002.jpg"
            />
          </div>
          <br />
          <p class="fz28">然後 清空微任務隊列</p>
          <p class="fz28">再執行 宏任務 1.</p>
          <p class="fz28">resolve 改變 promise 狀態</p>
          <p class="fz28">.then(裡面的回調推入微任務)</p>
          <br />
          <p class="fz28">!! 先執行微任務 !!</p>
          <br />
          <br />
          <br />
          <p class="fz28">Promise.all</p>
          <p class="fz28">
            合併多個 Promise 對象 , 等待所有
            <span class="spo cor36">同時成功完成</span> or 某一個失敗 , 後續處理
          </p>
          <div class="bgcVS">
            <div>
              <span class="function">const </span>
              <span class="number">p </span> <span class="then">=</span>
              <span class="brackets">Promise</span>
              <span class="variable">.all</span>
              <span class="brackets">([</span>
              <span class="word">Promise對象,Promise對象,...</span>
              <span class="brackets">])</span>
            </div>
            <div>
              <span class="number">p </span>
              <span class="variable">.then</span>
              <span class="brackets">(</span> <span class="word">result</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="comment"
                >//result結果:[Promise對象成功結果,Promise對象成功結果,...]</span
              >
              <div></div>
            </div>
            <div>
              <span class="brackets">})</span>
              <span class="variable">.catch</span>
              <span class="brackets">(</span>
              <span class="variable">error</span>
              <span class="function">=></span> <span class="brackets">{</span>
            </div>
            <div class="padTwo VSL">
              <span class="comment">//第一個失敗的Promise對象,拋出的異常</span>
              <div></div>
            </div>
            <div><span class="brackets">})</span></div>
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
