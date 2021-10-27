import{_ as s,c as n,o as a,a as e}from"./app.197c0aa2.js";const b='{"title":"Persistence","description":"","frontmatter":{},"headers":[{"level":2,"title":"Use Driver","slug":"use-driver"}],"relativePath":"en/docs/persistence/index.md","lastUpdated":1635253574181}',t={},o=e(`__VP_STATIC_START__<h1 id="persistence" tabindex="-1">Persistence <a class="header-anchor" href="#persistence" aria-hidden="true">#</a></h1><p>You may have discovered that the data we saved to the model, mentioned in the previous article, <strong>will be lost after the page is refreshed</strong>.</p><p>Don&#39;t worry, this is because we did not configure the storage driver. The storage driver determines where we store the data. Different drivers have the same usage in addition, deletion, modification, and checking, but some drivers may provide you with some additional proprietary APIs.</p><h2 id="use-driver" tabindex="-1">Use Driver <a class="header-anchor" href="#use-driver" aria-hidden="true">#</a></h2><p>Let&#39;s add the driver <code>LocalStorage</code> to the model. Install the driver as following shows:</p><div class="language-sh line-numbers-mode"><pre><code>npm i kurimudb-driver-localstorage@5
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Just declare the driver we want to use in the model:</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token comment">// /models/configState.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> SyncModels <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> localStorageDriverFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb-driver-localstorage&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token class-name">ConfigState</span> <span class="token keyword">extends</span> <span class="token class-name">SyncModels<span class="token punctuation">.</span>keyValue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      driver<span class="token operator">:</span> localStorageDriverFactory<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Try again now, the data should not be lost now. In the following driver chapters, we will give you a detailed introduction to the various drivers provided by Kurimudb and teach you how to write your own drivers to fully control the logic of data storage.</p>__VP_STATIC_END__`,9),r=[o];function p(i,c,l,d,u,k){return a(),n("div",null,r)}var m=s(t,[["render",p]]);export{b as __pageData,m as default};
