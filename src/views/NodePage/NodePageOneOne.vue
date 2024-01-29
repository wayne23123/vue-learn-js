<script setup>
import { ref } from 'vue';

const toTopRef = ref(false);
window.addEventListener('scroll', function () {
  // 當 scrollY大於0 則 showRef 為 true
  toTopRef.value = window.scrollY > 0;
});
// 當點擊返回頂部時，滾動到頁面頂部
function toTopFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
function toBotFunction() {
  window.scrollTo({
    top: 999999,
    left: 0,
    behavior: 'smooth',
  });
}
function locate(idPound) {
  window.scrollTo({
    top: document.getElementById(`${idPound}`).offsetTop,
    behavior: 'smooth',
  });
}
</script>

<template>
  <div>
    <section>
      <!-- <div class="sectionHolderNav"></div> -->
      <!-- 左邊導航條 -->
      <div class="leftNav">
        <div class="leftNavContainer">
          <div class="leftNavLayout">
            <div @click="locate('')" class="leftNavText">文件系統fs</div>
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
        <div class="">
          <div class="">
            <!-- 這裡 -->
            <p class="fz20">總分總</p>
            <p class="fz20">1.要講哪個知識點</p>
            <p class="fz20">2.細講</p>
            <p class="fz20">3.總結</p>
            <br />
            <br />

            <div id="" class="articleCardTitle cor36 fz30">複習</div>
            <p class="fz20">1. 異步代碼</p>
            <div class="bgcVS fz18">
              <div>
                <span class="function">const </span>
                <span class="word">fetchData</span> <span class="then">=</span>
                <span class="word">callback</span>
                <span class="function">=> </span>
                <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="variable">setTimeout</span>
                <span class="brackets">(()</span>
                <span class="function">=> </span>
                <span class="brackets">{</span>
                <div>
                  <div class="padTwo VSL">
                    <span class="word">callback</span>
                    <span class="brackets">(</span>
                    <span class="src">'done'</span>
                    <span class="brackets">)</span>
                    <div></div>
                  </div>
                </div>
                <div>
                  <span class="brackets">},</span>
                  <span class="number">1500</span>
                  <span class="brackets">)</span>
                </div>
              </div>
              <div>
                <span class="brackets">}</span>
              </div>
              <br />
              <div>
                <span class="variable">setTimeout</span>
                <span class="brackets">(()</span>
                <span class="function">=> </span>
                <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span>
                <span class="src">'timer done'</span>
                <span class="brackets">)</span>
                <div>
                  <span class="word">fetchData</span>
                  <span class="brackets">(</span>
                  <span class="word">text</span>
                  <span class="function">=> </span>
                  <span class="brackets">{</span>
                </div>
                <div>
                  <div class="padTwo VSL">
                    <span class="word">console.</span>
                    <span class="variable">log</span>
                    <span class="brackets">(</span>
                    <span class="word">text</span>
                    <span class="brackets">) </span>
                    <span class="comment">//done</span>
                    <div></div>
                  </div>
                </div>
                <div><span class="brackets">})</span></div>
              </div>
              <div>
                <span class="brackets">},</span>
                <span class="number">2000</span> <span class="brackets">)</span>
              </div>
              <br />
              <div>
                <span class="comment"
                  >----------------------------------//可以寫成------------------------------------</span
                >
              </div>
              <div>
                <span class="function">const </span>
                <span class="word">fetchData</span> <span class="then">=</span>
                <span class="brackets">()</span>
                <span class="function">=> </span>
                <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="function">const </span>
                <span class="word">promise</span>
                <span class="then">= new </span>
                <span class="brackets">Promise</span>
                <span class="brackets">((</span>
                <span class="variable">resolve,reject</span>
                <span class="brackets">)</span>
                <span class="function">=> </span>
                <span class="brackets">{</span>
                <div></div>
                <div class="padTwo VSL">
                  <span class="variable">setTimeout</span>
                  <span class="brackets">(()</span>
                  <span class="function">=> </span>
                  <span class="brackets">{</span>
                  <div></div>
                  <div class="padTwo VSL">
                    <span class="variable">resolve</span>
                    <span class="brackets">(</span>
                    <span class="src">'done'</span>
                    <span class="brackets">)</span>
                    <div></div>
                  </div>
                  <div>
                    <span class="brackets">},</span>
                    <span class="number">1500</span>
                    <span class="brackets">)</span>
                  </div>
                </div>
                <div><span class="brackets">})</span></div>
                <div>
                  <span class="then">return </span>
                  <span class="word">promise</span>
                </div>
              </div>
              <div><span class="brackets">}</span></div>
              <br />
              <div>
                <span class="variable">setTimeout</span>
                <span class="brackets">(()</span>
                <span class="function">=> </span>
                <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">console.</span>
                <span class="variable">log</span>
                <span class="brackets">(</span>
                <span class="src">'timer done'</span>
                <span class="brackets">)</span>
                <div></div>
                <div>
                  <span class="word">fetchData</span>
                  <span class="brackets">()</span>
                </div>
                <div class="padTwo VSL">
                  <span class="variable">.then</span>
                  <span class="brackets">(</span>
                  <span class="word">text</span>
                  <span class="function">=> </span>
                  <span class="brackets">{</span>
                  <div></div>
                  <div class="padTwo VSL">
                    <span class="word">console.</span>
                    <span class="variable">log</span>
                    <span class="brackets">(</span>
                    <span class="word">text</span>
                    <span class="brackets">)</span>
                    <div></div>
                    <div>
                      <span class="then">return </span>
                      <span class="word">fetchData</span>
                      <span class="brackets">()</span>
                    </div>
                  </div>
                  <div><span class="brackets">})</span></div>
                  <span class="variable">.then</span>
                  <span class="brackets">(</span>
                  <span class="word">text2</span>
                  <span class="function">=> </span>
                  <span class="brackets">{</span>
                  <div></div>
                  <div class="padTwo VSL">
                    <span class="word">console.</span>
                    <span class="variable">log</span>
                    <span class="brackets">(</span>
                    <span class="word">text2</span>
                    <span class="brackets">)</span>
                  </div>
                  <div><span class="brackets">})</span></div>
                </div>
              </div>
              <div>
                <span class="brackets">},</span>
                <span class="number">2000</span>
                <span class="brackets">)</span>
              </div>
            </div>
            <br />
            <div id="" class="articleCardTitle cor36 fz30">
              1.1 範例1 原生 node 底層邏輯，等等用 express
            </div>
            <div class="bgcVS fz18">
              <div>
                <span class="function">const </span>
                <span class="word">http</span> <span class="then">=</span>
                <span class="word">require</span>
                <span class="brackets">(</span> <span class="src">'http'</span>
                <span class="brackets">)</span>
              </div>
              <div>
                <span class="function">const </span>
                <span class="word">fs</span> <span class="then">=</span>
                <span class="word">require</span>
                <span class="brackets">(</span> <span class="src">'fs'</span>
                <span class="brackets">)</span>
              </div>
              <br />
              <div>
                <span class="function">const </span>
                <span class="word">server</span> <span class="then">=</span>
                <span class="word">http.</span>
                <span class="variable">createServer</span>
                <span class="brackets">((</span>
                <span class="word">req,res</span>
                <span class="brackets">)</span>
                <span class="function">=> </span>
                <span class="brackets">{</span>
              </div>
              <div class="padTwo VSL">
                <span class="function">const </span>
                <span class="word">url</span> <span class="then">=</span>
                <span class="word">req.url</span>
                <div></div>
                <div>
                  <span class="function">const </span>
                  <span class="word">method</span> <span class="then">=</span>
                  <span class="word">req.method</span>
                </div>
                <div>
                  <span class="then">if</span> <span class="brackets">(</span>
                  <span class="word">url</span> <span class="then">===</span>
                  <span class="src">'/'</span> <span class="brackets">){</span>
                </div>
                <div class="padTwo VSL">
                  <div>
                    <span class="word">res.</span>
                    <span class="variable">write</span>
                    <span class="brackets">(</span>
                    <span class="src">'＜ html>'</span>
                    <span class="brackets">)</span>
                  </div>
                  <div>
                    <span class="word">res.</span>
                    <span class="variable">write</span>
                    <span class="brackets">(</span>
                    <span class="src"
                      >'＜ head>＜ title > enter msg ＜/title>＜ /head>'</span
                    >
                    <span class="brackets">)</span>
                  </div>
                  <div>
                    <span class="word">res.</span>
                    <span class="variable">write</span>
                    <span class="brackets">(</span>
                    <span class="src"
                      >'＜ body>＜ form action='/msg' method="post">＜ input
                      type='text' name='msg'>＜ body>'</span
                    >
                    <span class="brackets">)</span>
                  </div>
                  <div>
                    <span class="word">res.</span>
                    <span class="variable">write</span>
                    <span class="brackets">(</span>
                    <span class="src">'＜ /html> '</span>
                    <span class="brackets">)</span>
                  </div>
                  <div>
                    <span class="then">return </span>
                    <span class="word">res.</span>
                    <span class="variable">end</span>
                    <span class="brackets">()</span>
                  </div>
                </div>
                <div><span class="brackets">}</span></div>
                <div>
                  <span class="then">if</span> <span class="brackets">(</span>
                  <span class="word">url</span> <span class="then">===</span>
                  <span class="src">'/msg'</span>
                  <span class="then">&&</span> <span class="word">method</span>
                  <span class="then">===</span> <span class="src">'post'</span>
                  <span class="brackets">){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="function">const </span>
                  <span class="word">body</span> <span class="then">=</span>
                  <span class="brackets">[ ]</span>
                  <div></div>
                  <div>
                    <span class="word">req.</span
                    ><span class="variable">on</span>
                    <span class="brackets">(</span>
                    <span class="src">'data'</span>
                    <span class="brackets">,(</span>
                    <span class="word">chunk</span>
                    <span class="brackets">)</span>
                    <span class="function">=> </span>
                    <span class="brackets">{</span>
                  </div>
                  <div class="padTwo VSL">
                    <span class="word">console.</span>
                    <span class="variable">log</span>
                    <span class="brackets">(</span>
                    <span class="word">chunk</span>
                    <span class="brackets">)</span>
                    <div></div>
                    <div>
                      <span class="word">body.</span>
                      <span class="variable">push</span>
                      <span class="brackets">(</span>
                      <span class="word">chunk</span>
                      <span class="brackets">)</span>
                    </div>
                  </div>
                  <div><span class="brackets">})</span></div>
                  <div>
                    <span class="word">req.</span
                    ><span class="variable">on</span>
                    <span class="brackets">(</span>
                    <span class="src">'end'</span>
                    <span class="brackets">,() </span>
                    <span class="function">=> </span>
                    <span class="brackets">{</span>
                  </div>
                  <div class="padTwo VSL">
                    <span class="function">const </span>
                    <span class="word">parseBody</span>
                    <span class="then">=</span>
                    <span class="word">Buffer.</span>
                    <span class="variable">concat</span>
                    <span class="brackets">(</span>
                    <span class="word">body</span>
                    <span class="brackets">)</span>
                    <span class="variable">.toString</span>
                    <span class="brackets">()</span>
                    <div></div>
                    <div>
                      <span class="function">const </span>
                      <span class="word">msg</span> <span class="then">=</span>
                      <span class="word">parsedBody</span>
                      <span class="variable">.split</span>
                      <span class="brackets">(</span>
                      <span class="src">'='</span>
                      <span class="brackets">)[</span>
                      <span class="number">1</span>
                      <span class="brackets">]</span>
                    </div>
                    <div>
                      <span class="word">fs.</span>
                      <span class="variable">writeFileSync</span>
                      <span class="brackets">(</span>
                      <span class="src">'msg.text'</span>
                      <span class="word">,msg</span>
                      <span class="brackets">)</span>
                    </div>
                    <div>
                      <span class="comment"
                        >//會在下方 return res.end() 後才執行</span
                      >
                    </div>
                    <div>
                      <span class="comment"
                        >// 1. 在響應之後，這邊註冊的事件不會消失</span
                      >
                    </div>
                    <div>
                      <span class="comment"
                        >// 2. 如果在這
                        事件偵聽器中做了影響響應的事，是錯誤設置方式</span
                      >
                    </div>
                  </div>
                  <div><span class="brackets">})</span></div>
                  <div>
                    <span class="word">res.</span>
                    <span class="variable">statusCode</span>
                    <span class="then">=</span> <span class="number">302</span>
                  </div>
                  <div>
                    <span class="word">res.</span>
                    <span class="variable">setHeader</span>
                    <span class="brackets">(</span>
                    <span class="src">'Location'</span>
                    <span class="then">,</span> <span class="src">'/'</span>
                    <span class="brackets">)</span>
                  </div>
                  <div>
                    <span class="then">return </span>
                    <span class="word">res.</span>
                    <span class="variable">end</span>
                    <span class="brackets">()</span>
                  </div>
                </div>
                <div><span class="brackets">}</span></div>
                <div>
                  <span class="word">res.</span>
                  <span class="variable">setHeader</span>
                  <span class="brackets">(</span>
                  <span class="src">'Content-Type'</span>
                  <span class="then">,</span>
                  <span class="src">'text/html'</span>
                  <span class="brackets">)</span>
                </div>
                <div>
                  <span class="word">res.</span>
                  <span class="variable">write</span>
                  <span class="brackets">(</span>
                  <span class="src">'＜ html>'</span>
                  <span class="brackets">)</span>
                </div>
                <div>
                  <span class="word">res.</span>
                  <span class="variable">write</span>
                  <span class="brackets">(</span>
                  <span class="src"
                    >'＜ head>＜ title>my first page＜ /title>＜ /head>'</span
                  >
                  <span class="brackets">)</span>
                </div>
                <div>
                  <span class="word">res.</span>
                  <span class="variable">write</span>
                  <span class="brackets">(</span>
                  <span class="src"
                    >'＜ body>＜ h1>hello world!＜ /h1> ＜ body>'</span
                  >
                  <span class="brackets">)</span>
                </div>
                <div>
                  <span class="word">res.</span>
                  <span class="variable">write</span>
                  <span class="brackets">(</span>
                  <span class="src">'＜ /html>'</span>
                  <span class="brackets">)</span>
                </div>
                <div>
                  <span class="word">res.</span>
                  <span class="variable">end</span>
                  <span class="brackets">()</span>
                </div>
              </div>
              <div><span class="brackets">})</span></div>
              <div>
                <span class="word">server.</span>
                <span class="variable">listen</span>
                <span class="brackets">(</span>
                <span class="number">3000</span> <span class="brackets">)</span>
              </div>
            </div>
            <div id="" class="articleCardTitle cor36 fz30">小技巧</div>
            <p class="fz20">1.更改啟動方式</p>
            <p class="fz20">init</p>
            <p class="fz20">package.json</p>
            <p class="fz20">設定</p>
            <p class="fz20">之後可以 npm start</p>
            <br />
            <br />
            <p class="fz20">2.存檔不用重啟伺服器</p>
            <p class="fz20">npm install nodemon</p>
            <br />
            <p class="fz20">
              npm install nodemon --save-dev 只安裝到這個項目中
            </p>
            <p class="fz20">
              npm install nodemon -g 全局安裝到電腦上，不會在這個項目中安裝它
            </p>

            <p class="fz20">到 package.json 將 script -> start -> 中的改成</p>
            <p class="fz20">nodemon app.js</p>
            <br />
            <br />
            <p class="fz20">3. debugger</p>
            <p class="fz20">手動添加 nodemon</p>
            <p class="fz20">View -> Explorer</p>
            <p class="fz20">Debug -> AddConfiguration</p>
            <p class="fz20">在 "program": 下方增加</p>
            <p class="fz20">"restart": true,</p>
            <p class="fz20">"runtimeExcutable": "nodemon"</p>
            <p class="fz20">
              到 Debug -> Start Debugging
              如果失敗，是因為他不會用本地nodemon，而是全局尋找它
            </p>
            <p class="fz20">npm install nodemon -g</p>
            <br />
            <br />
            <div id="" class="articleCardTitle cor36 fz30">Express.js</div>
            <p class="fz20">npm install --save express</p>
            <p class="fz20">用 --save 而不是 --save-dev</p>
            <p class="fz20">因為不僅是開發時用的工具，發布時是必要的一部分</p>
            <p class="fz20"></p>
            <p class="fz20"></p>
            <p class="fz20"></p>
            <p class="fz20"></p>
            <p class="fz20"></p>
            <p class="fz20"></p>
            <p class="fz20"></p>
            <!-- <div id="" class="articleCardTitle cor36 fz30">
              1.2 事件循環 Event Loop
            </div>
            <p class="fz20">node.js 只使用一個 JavaScript 線程(Thread)</p>
            <p class="fz20">如何能夠處理多個請求?</p>
            <p class="fz20">
              因為不能為每個請求分配一個新線程，他們最終會在同一個線程
            </p>
            <br />
            <p class="fz20">事件循環處理所有的回調，他有一個特定的回調順序</p> -->
            <p class="fz20"></p>
            <p class="fz20"></p>
            <p class="fz20"></p>

            <br />
            <br />
            <div id="" class="articleCardTitle cor36 fz30">1.</div>
            <p class="fz20"></p>
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
