import{_ as n,c as s,o as a,a as p}from"./app.197c0aa2.js";const b='{"title":"\u5165\u95E8","description":"","frontmatter":{},"headers":[{"level":2,"title":"Kurimudb \u662F\u4EC0\u4E48","slug":"kurimudb-\u662F\u4EC0\u4E48"},{"level":2,"title":"\u4F53\u9A8C","slug":"\u4F53\u9A8C"},{"level":3,"title":"Local","slug":"local"},{"level":3,"title":"Cookie","slug":"cookie"},{"level":3,"title":"Memory","slug":"memory"},{"level":3,"title":"Db","slug":"db"},{"level":3,"title":"\u8BA2\u9605\u53D8\u66F4","slug":"\u8BA2\u9605\u53D8\u66F4"},{"level":2,"title":"\u51C6\u5907\u597D\u4E86\u5417\uFF1F","slug":"\u51C6\u5907\u597D\u4E86\u5417\uFF1F"}],"relativePath":"docs/intro/index.md","lastUpdated":1635329641677}',e={},t=p(`<h1 id="\u5165\u95E8" tabindex="-1">\u5165\u95E8 <a class="header-anchor" href="#\u5165\u95E8" aria-hidden="true">#</a></h1><h2 id="kurimudb-\u662F\u4EC0\u4E48" tabindex="-1">Kurimudb \u662F\u4EC0\u4E48 <a class="header-anchor" href="#kurimudb-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>Kurimudb \u662F\u4E00\u6B3E\u6E10\u8FDB\u5F0F\u7684 <strong>Web \u7AEF\u672C\u5730\u5B58\u50A8\u5E93</strong>\uFF0C\u53EF\u5C06\u6570\u636E\u4FDD\u5B58\u5230 LocalStorage\u3001IndexedDB\u3001Cookie \u7B49\u5730\u65B9\uFF0C\u548C\u8BA2\u9605\u503C\u7684\u53D8\u66F4\u3002</p><p>\u9664\u4E86\u6301\u4E45\u5316\u6570\u636E\u4E4B\u5916\uFF0C\u82E5\u4F60\u613F\u610F\uFF0CKurimudb \u8FD8\u80FD\u6210\u4E3A\u4F60\u5E94\u7528\u7684 <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel#Components_of_MVVM_pattern" target="_blank" rel="noopener noreferrer">Model \u5C42</a>\u62BD\u8C61\uFF0C\u63A5\u4EFB\u4F60\u5E94\u7528\u4E2D\u72B6\u6001\u7BA1\u7406\u5E93\u7684\u804C\u8D23 (\u5982 Vuex\u3001Redux\u3001Mobx)\uFF0C\u4F7F\u4F60\u5E94\u7528\u771F\u6B63\u62E5\u6709\u5355\u4E00\u6570\u636E\u6765\u6E90\u3002</p><p>Kurimudb \u7684\u6570\u636E\u5B58\u50A8\u529F\u80FD\u662F\u9A71\u52A8\u5316\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u5728\u4E0D\u66F4\u6539\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\u66F4\u6362\u5177\u4F53\u5B9E\u73B0\uFF0C\u6211\u4EEC\u5236\u4F5C\u4E86\u51E0\u4E2A\u5E38\u7528\u7684\u9A71\u52A8\uFF0C\u5982\u679C\u4E0D\u6EE1\u8DB3\u9700\u6C42\u7684\u8BDD\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u7F16\u5199\u5C5E\u4E8E\u81EA\u5DF1\u7684\u9A71\u52A8\u3002</p><h2 id="\u4F53\u9A8C" tabindex="-1">\u4F53\u9A8C <a class="header-anchor" href="#\u4F53\u9A8C" aria-hidden="true">#</a></h2><p><code>kurimudb-zero-config</code> \u662F Kurimudb \u7684\u96F6\u914D\u7F6E\u5305\uFF0C\u6267\u884C\u4E0B\u9762\u547D\u4EE4\u6765\u5B89\u88C5\u5B83\uFF1A</p><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> i kurimudb-zero-config@5
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="local" tabindex="-1">Local <a class="header-anchor" href="#local" aria-hidden="true">#</a></h3><p>\u64CD\u4F5C <code>local</code> \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u628A\u6570\u636E\u5B58\u50A8\u5728 LocalStorage \u4E2D\u3002\u5373\u4F7F\u9875\u9762\u5237\u65B0\uFF0C\u6570\u636E\u8FD8\u4F1A\u5728\u54D2\uFF01\u53EF\u4EE5\u5B58\u50A8\u7EA6 5M \u6570\u636E\u3002</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> local <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-zero-config&quot;</span><span class="token punctuation">;</span>

local<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u5199\u5165..</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> local<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// \u8BFB\u53D6..</span>
<span class="token keyword">delete</span> local<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664..</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span> <span class="token keyword">in</span> local<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// \u5224\u65AD\u662F\u5426\u5B58\u5728..</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-hidden="true">#</a></h3><p>\u64CD\u4F5C <code>cookie</code> \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u628A\u6570\u636E\u5B58\u50A8\u5728 Cookie \u4E2D\uFF0C\u5176\u4E2D\u5B58\u50A8\u7684\u6570\u636E\u5E94\u5F53\u5C3D\u91CF\u7684\u5C11\uFF0C\u56E0\u4E3A\u6D4F\u89C8\u5668\u4E00\u822C\u4F1A\u5728\u6BCF\u6B21\u8BF7\u6C42\u65F6\uFF0C\u5C06\u4F60\u7684 Cookie \u90FD\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF~</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> cookie <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-zero-config&quot;</span><span class="token punctuation">;</span>

cookie<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u5199\u5165..</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> cookie<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// \u8BFB\u53D6..</span>
<span class="token keyword">delete</span> cookie<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664..</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span> <span class="token keyword">in</span> cookie<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// \u5224\u65AD\u662F\u5426\u5B58\u5728..</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="memory" tabindex="-1">Memory <a class="header-anchor" href="#memory" aria-hidden="true">#</a></h3><p>\u64CD\u4F5C <code>memory</code> \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u628A\u6570\u636E\u5B58\u50A8\u5728 Memory \u4E2D\uFF0C\u5F53\u9875\u9762\u5237\u65B0\u65F6\uFF0C\u6570\u636E\u5C31\u88AB\u6E05\u7A7A\u5566\u3002</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> memory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-zero-config&quot;</span><span class="token punctuation">;</span>

memory<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u5199\u5165..</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> memory<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// \u8BFB\u53D6..</span>
<span class="token keyword">delete</span> memory<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664..</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span> <span class="token keyword">in</span> memory<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// \u5224\u65AD\u662F\u5426\u5B58\u5728..</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="db" tabindex="-1">Db <a class="header-anchor" href="#db" aria-hidden="true">#</a></h3><p>\u64CD\u4F5C <code>db</code> \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u628A\u6570\u636E\u5B58\u50A8\u5728 IndexedDB \u4E2D\uFF0CIndexedDB \u53EF\u4EE5\u4FDD\u5B58\u8BF8\u5982 File\u3001Blob \u7B49 JavaScript \u5BF9\u8C61\uFF0C\u5176\u6700\u5927\u6570\u636E\u5BB9\u91CF\uFF0C\u57FA\u4E8E\u7528\u6237\u8BBE\u5907\u7684\u53EF\u7528\u786C\u76D8\u5927\u5C0F\u3002</p><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u7531\u4E8E IndexedDB \u7684 Api \u662F\u5F02\u6B65\u7684\uFF0C\u56E0\u6B64 <code>db</code> \u548C\u8BFB\u6709\u5173\u7684 Api \u8FD4\u56DE\u503C\u90FD\u662F <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise \u5BF9\u8C61</a>\u3002</p></div><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> db <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;kurimudb-zero-config&quot;</span><span class="token punctuation">;</span>

db<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5199\u5165..</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BFB\u53D6\uFF0C\u8FD4\u56DE\u503C\u5C06\u662F Promise..</span>
<span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664..</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">hasItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// \u5224\u65AD\u662F\u5426\u5B58\u5728..</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u8BA2\u9605\u53D8\u66F4" tabindex="-1">\u8BA2\u9605\u53D8\u66F4 <a class="header-anchor" href="#\u8BA2\u9605\u53D8\u66F4" aria-hidden="true">#</a></h3><p>Kurimudb \u8FD8\u63D0\u4F9B\u4E86\u8BA2\u9605\u503C\u53D8\u5316\u7684\u529F\u80FD\uFF0C\u53EA\u9700\u5728\u503C\u540E\u52A0\u4E0A <code>$</code> \u7B26\u53F7\uFF0C\u5C31\u80FD\u5728\u5B83\u88AB\u6539\u53D8\u65F6\u505A\u70B9\u4EC0\u4E48\uFF1A</p><div class="language-js line-numbers-mode"><pre><code>local<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">say$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;what you want to say: &#39;</span> <span class="token operator">+</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6216\u8005\u4F7F\u7528<strong>\u81EA\u52A8\u8BA2\u9605\u529F\u80FD</strong>\uFF0C\u5F53\u95ED\u5305\u4E2D\u7528\u5230\u7684\u503C\uFF0C\u6709\u4EFB\u4E00\u88AB\u66F4\u6539\u65F6\uFF0C\u90FD\u4F1A\u89E6\u53D1\u8BA2\u9605\uFF0C\u91CD\u65B0\u6267\u884C\u6B64\u95ED\u5305\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> auto$ <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb-zero-config&#39;</span><span class="token punctuation">;</span>

<span class="token function">auto$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5173\u4E8E\u8BA2\u9605\uFF0C\u8FD8\u6709\u66F4\u591A\u7684\u9AD8\u7EA7\u7528\u6CD5\u5662\uFF01\u8BF7\u9605\u8BFB<a href="/docs/subscribe/">\u8BA2\u9605\u53D8\u66F4</a>\u7AE0\u8282\u3002</p><h2 id="\u51C6\u5907\u597D\u4E86\u5417\uFF1F" tabindex="-1">\u51C6\u5907\u597D\u4E86\u5417\uFF1F <a class="header-anchor" href="#\u51C6\u5907\u597D\u4E86\u5417\uFF1F" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u521A\u521A\u4ECB\u7ECD\u4E86 Kurimudb \u7684\u6838\u5FC3\u7528\u6CD5\u2014\u2014\u4F46\u8FD9\u53EA\u662F Kurimudb \u529F\u80FD\u7684\u5F88\u5C0F\u4E00\u90E8\u5206\uFF0C\u6240\u4EE5\uFF0C\u8BF7\u52A1\u5FC5\u8BFB\u5B8C\u6574\u4E2A\u6559\u7A0B\uFF01</p>`,29),o=[t];function c(l,u,i,r,k,d){return a(),s("div",null,o)}var h=n(e,[["render",c]]);export{b as __pageData,h as default};
