import{_ as n,c as a,o as s,a as e}from"./app.197c0aa2.js";const m='{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction to Kurimudb","slug":"introduction-to-kurimudb"},{"level":2,"title":"Getting Started","slug":"getting-started-1"},{"level":3,"title":"Local","slug":"local"},{"level":3,"title":"Cookie","slug":"cookie"},{"level":3,"title":"Memory","slug":"memory"},{"level":3,"title":"Db","slug":"db"},{"level":3,"title":"Subscribing Data Mutation","slug":"subscribing-data-mutation"},{"level":2,"title":"Are You Ready?","slug":"are-you-ready"}],"relativePath":"en/docs/intro/index.md","lastUpdated":1635329652037}',t={},o=e(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="introduction-to-kurimudb" tabindex="-1">Introduction to Kurimudb <a class="header-anchor" href="#introduction-to-kurimudb" aria-hidden="true">#</a></h2><p>Kurimudb is a progressive <strong>Web front-end local persistence library</strong>. It can save your data to LocalStorage, IndexedDB, Cookie, and elsewhere. Also, support subscribing to the mutating of data.</p><p>In addition to persistent data, Kurimudb can be <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel#Components_of_MVVM_pattern" target="_blank" rel="noopener noreferrer">Model layer</a> of your application if your want, then take the responsibility of state management in your application (i.e., Vuex, Redux and Mobx) to make your app \u201Csingle source of truth\u201D really.</p><p>Kurimudb&#39;s persistence feature is driver-oriented. It means you can replace the implementation without changing the code. We build several common drivers. If these are not for you, you can build your own driver.</p><h2 id="getting-started-1" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started-1" aria-hidden="true">#</a></h2><p><code>kurimudb-zero-config</code> is Kurimudb&#39;s zero configuration package, execute the following command to install it:</p><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> i kurimudb-zero-config@5
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="local" tabindex="-1">Local <a class="header-anchor" href="#local" aria-hidden="true">#</a></h3><p>By operating the <code>local</code> object, the data can be stored in LocalStorage. Even if the page is refreshed, the data will still be there! It can store about 5M data in LocalStorage.</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> local <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-zero-config&quot;</span><span class="token punctuation">;</span>

local<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// writing..</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> local<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// reading..</span>
<span class="token keyword">delete</span> local<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// deleting..</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span> <span class="token keyword">in</span> local<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// checking existence..</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-hidden="true">#</a></h3><p>By operating the <code>cookie</code> object, the data can be stored in Cookie. The data stored in Cookie should be less as possible because all data in Cookie will send to the server-side automatically by the browser when making the request.</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> cookie <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-zero-config&quot;</span><span class="token punctuation">;</span>

cookie<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// writing..</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> cookie<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// reading..</span>
<span class="token keyword">delete</span> cookie<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// deleting..</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span> <span class="token keyword">in</span> cookie<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// checking existence..</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="memory" tabindex="-1">Memory <a class="header-anchor" href="#memory" aria-hidden="true">#</a></h3><p>By operating the <code>memory</code> object, data can be stored in Memory. When the page is refreshed, the data will be cleared.</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> memory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-zero-config&quot;</span><span class="token punctuation">;</span>

memory<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// writing..</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> memory<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// reading..</span>
<span class="token keyword">delete</span> memory<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// deleting..</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span> <span class="token keyword">in</span> memory<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// checking existence..</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="db" tabindex="-1">Db <a class="header-anchor" href="#db" aria-hidden="true">#</a></h3><p>By operating the <code>db</code> object, the data can be stored in IndexedDB. IndexedDB can store JavaScript Objects such as File and Blob. Its maximum data capacity depends on the available hard disk size of the user&#39;s disk.</p><p>::: Warning Tips:</p><p>It is worth noting that IndexedDB&#39;s API is asynchronous so that the return values of APIs related to <code>db</code> and reading are all <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise Object</a>.</p><p>:::</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> db <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-zero-config&quot;</span><span class="token punctuation">;</span>

db<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// writing..</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// reading, return value will be a Promise Object..</span>
<span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// deleting..</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">hasItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// checking existence..</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="subscribing-data-mutation" tabindex="-1">Subscribing Data Mutation <a class="header-anchor" href="#subscribing-data-mutation" aria-hidden="true">#</a></h3><p>Kurimudb also provides the feature of Subscribing Data Mutation. All things you need to do is adding <code>$</code> to the end of the value, then you can make something after it mutates.</p><div class="language-js line-numbers-mode"><pre><code>local<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">say$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;what you want to say: &#39;</span> <span class="token operator">+</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Or use the <strong>automatic subscription function</strong>, when any of the values used in the closure is changed, the subscription will be triggered, and the closure will be executed again:</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> auto$ <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb-zero-config&#39;</span><span class="token punctuation">;</span>

<span class="token function">auto$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Regarding subscriptions, there are more advanced usages! Please read the <a href="/en/docs/subscribe/">Subscription Changes</a> chapter.</p><h2 id="are-you-ready" tabindex="-1">Are You Ready? <a class="header-anchor" href="#are-you-ready" aria-hidden="true">#</a></h2><p>We just get to the start point of using Kurimudb. Let&#39;s carry on to get know it better in next chapters!</p>`,31),p=[o];function c(i,l,r,u,d,k){return s(),a("div",null,p)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};
