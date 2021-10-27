import{_ as n,c as s,o as a,a as e}from"./app.18ab0afe.js";const m='{"title":"\u6301\u4E45\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u9A71\u52A8","slug":"\u4F7F\u7528\u9A71\u52A8"}],"relativePath":"docs/persistence/index.md","lastUpdated":1635090751972}',p={},t=e(`<h1 id="\u6301\u4E45\u5316" tabindex="-1">\u6301\u4E45\u5316 <a class="header-anchor" href="#\u6301\u4E45\u5316" aria-hidden="true">#</a></h1><p>\u4F60\u53EF\u80FD\u5DF2\u7ECF\u53D1\u73B0\uFF0C\u524D\u6587\u4E2D\uFF0C\u6211\u4EEC\u5411\u6A21\u578B\u4E2D\u5B58\u5165\u7684\u6570\u636E\uFF0C\u5728<strong>\u9875\u9762\u5237\u65B0\u540E\u5C31\u4F1A\u4E22\u5931</strong>\u3002</p><p>\u522B\u62C5\u5FC3\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6211\u4EEC\u6CA1\u6709\u914D\u7F6E\u5B58\u50A8\u9A71\u52A8\u7684\u539F\u56E0\u3002\u5B58\u50A8\u9A71\u52A8\u51B3\u5B9A\u4E86\u6211\u4EEC\u5C06\u6570\u636E\u5B58\u50A8\u5728\u54EA\u91CC\uFF0C\u4E0D\u540C\u7684\u9A71\u52A8\u5728\u589E\u5220\u6539\u67E5\u7684\u7528\u6CD5\u4E0A\uFF0C\u90FD\u662F\u4E00\u81F4\u7684\uFF0C\u53EA\u662F\u6709\u4E9B\u9A71\u52A8\u53EF\u80FD\u4F1A\u4E3A\u4F60\u63D0\u4F9B\u4E00\u4E9B\u989D\u5916\u7684\u4E13\u6709 Api\u3002</p><h2 id="\u4F7F\u7528\u9A71\u52A8" tabindex="-1">\u4F7F\u7528\u9A71\u52A8 <a class="header-anchor" href="#\u4F7F\u7528\u9A71\u52A8" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u8BA9\u6211\u4EEC\u4E3A\u6A21\u578B\u6DFB\u52A0 <code>LocalStorage</code> \u9A71\u52A8\uFF0C\u5B89\u88C5\u9A71\u52A8\uFF1A</p><div class="language-sh line-numbers-mode"><pre><code>npm i kurimudb-driver-localstorage@5
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728\u6A21\u578B\u4E0A\uFF0C\u58F0\u660E\u6211\u4EEC\u8981\u4F7F\u7528\u7684\u9A71\u52A8\u5373\u53EF\uFF1A</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token comment">// /models/configState.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> SyncModels <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> localStorageDriverFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb-driver-localstorage&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token class-name">ConfigState</span> <span class="token keyword">extends</span> <span class="token class-name">SyncModels<span class="token punctuation">.</span>keyValue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      driver<span class="token operator">:</span> localStorageDriverFactory<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u73B0\u5728\u518D\u8BD5\u8BD5\u770B\uFF0C\u6570\u636E\u4F1A\u4E0D\u4F1A\u4E22\u5931\uFF1F\u540E\u9762\u7684\u9A71\u52A8\u7AE0\u8282\uFF0C\u6211\u4EEC\u5C06\u4F1A\u4E3A\u4F60\u8BE6\u7EC6\u4ECB\u7ECD Kurimudb \u63D0\u4F9B\u7684\u5404\u79CD\u9A71\u52A8\uFF0C\u548C\u6559\u4F60\u5982\u4F55\u7F16\u5199\u81EA\u5DF1\u7684\u9A71\u52A8\uFF0C\u6765\u5B8C\u5168\u638C\u63A7\u6570\u636E\u5B58\u50A8\u7684\u903B\u8F91\u3002</p>`,9),o=[t];function c(r,l,i,u,d,k){return a(),s("div",null,o)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
