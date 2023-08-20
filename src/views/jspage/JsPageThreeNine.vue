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
              <span class="word">p</span> <span class="variable">.then</span>
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
