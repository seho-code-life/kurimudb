import{_ as a,c as n,o as s,a as e}from"./app.18ab0afe.js";const b='{"title":"LocalStorage","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"all (\u96C6\u5408\u6A21\u578B\u53EF\u7528)","slug":"all-\u96C6\u5408\u6A21\u578B\u53EF\u7528"},{"level":2,"title":"getLength (\u96C6\u5408\u6A21\u578B\u53EF\u7528)","slug":"getlength-\u96C6\u5408\u6A21\u578B\u53EF\u7528"},{"level":2,"title":"getKeys (\u96C6\u5408\u6A21\u578B\u53EF\u7528)","slug":"getkeys-\u96C6\u5408\u6A21\u578B\u53EF\u7528"}],"relativePath":"drivers/localstorage.md","lastUpdated":1635321897827}',t={},p=e(`<h1 id="localstorage" tabindex="-1">LocalStorage <a class="header-anchor" href="#localstorage" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F\u4E8B\u9879</p><p><a href="https://developer.mozilla.org/docs/Web/API/Window/localStorage" target="_blank" rel="noopener noreferrer">LocalStorage</a> \u4E00\u822C\u53EF\u4EE5\u5B58\u50A8\u7EA6 5MB \u5DE6\u53F3\u7684\u6570\u636E\u3002</p><p>LocalStorage \u53EA\u80FD\u5B58\u50A8\u5B57\u7B26\u4E32\u3002LocalStorage \u9A71\u52A8\u4F1A\u5BF9\u5B58\u5165\u7684\u6570\u636E\u8FDB\u884C <code>JSON.stringify</code>\uFF0C\u6240\u4EE5\uFF0C\u8BF7\u52FF\u5B58\u5165\u65E0\u6CD5\u88AB\u6B63\u786E <code>JSON.stringify</code> \u7684\u5BF9\u8C61 (\u5982 <code>Set</code>\u3001<code>Map</code> \u7B49)\u3002</p></div><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> i kurimudb-driver-localstorage@5
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> SyncModels <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LocalStorageDriver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb-driver-localstorage&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token class-name">LocalStorageState</span> <span class="token keyword">extends</span> <span class="token class-name">SyncModels<span class="token punctuation">.</span>keyValue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;LocalStorageState&#39;</span><span class="token punctuation">,</span>
      driver<span class="token operator">:</span> LocalStorageDriver<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="all-\u96C6\u5408\u6A21\u578B\u53EF\u7528" tabindex="-1">all (\u96C6\u5408\u6A21\u578B\u53EF\u7528) <a class="header-anchor" href="#all-\u96C6\u5408\u6A21\u578B\u53EF\u7528" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u6B64\u6A21\u578B\u5DF2\u5B58\u5165\u7684\u5168\u90E8\u6570\u636E\uFF0C\u6309\u63D2\u5165\u987A\u5E8F\u6392\u5E8F\uFF0C\u8FD4\u56DE\u503C\u4E3A <a href="/others/#KMap">KMap \u5BF9\u8C61</a>\u3002</p><div class="language-js line-numbers-mode"><pre><code>yourModel<span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="getlength-\u96C6\u5408\u6A21\u578B\u53EF\u7528" tabindex="-1">getLength (\u96C6\u5408\u6A21\u578B\u53EF\u7528) <a class="header-anchor" href="#getlength-\u96C6\u5408\u6A21\u578B\u53EF\u7528" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u5DF2\u5B58\u5165\u6570\u636E\u7684\u6761\u6570\uFF0C\u8FD4\u56DE\u503C\u4E3A <code>number</code>\u3002</p><div class="language-js line-numbers-mode"><pre><code>yourModel<span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="getkeys-\u96C6\u5408\u6A21\u578B\u53EF\u7528" tabindex="-1">getKeys (\u96C6\u5408\u6A21\u578B\u53EF\u7528) <a class="header-anchor" href="#getkeys-\u96C6\u5408\u6A21\u578B\u53EF\u7528" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u5DF2\u5B58\u5165\u6570\u636E\u7684\u4E3B\u952E\uFF0C\u6309\u63D2\u5165\u987A\u5E8F\u6392\u5E8F\uFF0C\u8FD4\u56DE\u503C\u4E3A <code>Array&lt;string&gt;</code>\u3002</p><div class="language-js line-numbers-mode"><pre><code>yourModel<span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">getKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),o=[p];function l(c,r,i,u,d,k){return s(),n("div",null,o)}var h=a(t,[["render",l]]);export{b as __pageData,h as default};
