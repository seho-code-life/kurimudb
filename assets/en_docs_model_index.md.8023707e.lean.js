import{_ as n,c as s,o as a,a as e}from"./app.197c0aa2.js";const b='{"title":"Model","description":"","frontmatter":{},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started"},{"level":2,"title":"Create a Model","slug":"create-a-model"},{"level":2,"title":"API Similar to the Storage Object","slug":"api-similar-to-the-storage-object"},{"level":2,"title":"Model Methods","slug":"model-methods"},{"level":2,"title":"Collection Model","slug":"collection-model"},{"level":3,"title":"Key Generator","slug":"key-generator"},{"level":3,"title":"NUID","slug":"nuid"},{"level":2,"title":"Model Seeding","slug":"model-seeding"}],"relativePath":"en/docs/model/index.md","lastUpdated":1635330407629}',t={},p=e(`__VP_STATIC_START__<h1 id="model" tabindex="-1">Model <a class="header-anchor" href="#model" aria-hidden="true">#</a></h1><p>In the preamble, we introduced the basic usage and used the zero config library, <code>kurimudb-zero-config</code>. Normally, this would have already satisfied our needs.</p><p>However, if we are currently developing a complex single-page application, do we really want to save various kinds of data messily in a single object? This is not a good idea.</p><p>This is the time for <strong>Model feature</strong> to make its grand debut\uFF01 \u{1F389}</p><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><p>Models are the core of saving and managing your data. The <code>memory</code>\u3001<code>local</code>\u3001<code>cookie</code> and <code>db</code> objects we previously used in our zero config library are actually all models!</p><p>Before we continue, let&#39;s install Kurimudb:</p><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> i kurimudb@5
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="create-a-model" tabindex="-1">Create a Model <a class="header-anchor" href="#create-a-model" aria-hidden="true">#</a></h2><p>Creating a model is actually very simple. You only need to inherit the Kurimudb&#39;s Model class.</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// create a file /models/configState.js</span>
<span class="token comment">// we can use it to store data related to user configuration</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SyncModels <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token class-name">ConfigState</span> <span class="token keyword">extends</span> <span class="token class-name">SyncModels<span class="token punctuation">.</span>keyValue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// model name is required; must be globally unique</span>
      name<span class="token operator">:</span> <span class="token string">&#39;ConfigState&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Just like this, you will have a <code>ConfigState</code> model. You can read and write the data inside it like an ordinary object:</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> configState <span class="token keyword">from</span> <span class="token string">&#39;./models/configState.js&#39;</span><span class="token punctuation">;</span>

configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span> <span class="token comment">// writing..</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// reading..</span>
<span class="token keyword">delete</span> configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// deleting..</span>
<span class="token string">&#39;say&#39;</span> <span class="token keyword">in</span> configState<span class="token punctuation">;</span> <span class="token comment">// check existence..</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="api-similar-to-the-storage-object" tabindex="-1">API Similar to the Storage Object <a class="header-anchor" href="#api-similar-to-the-storage-object" aria-hidden="true">#</a></h2><p>If you have used <code>localStorage</code>, you will be familiar with this method:</p><div class="language-js line-numbers-mode"><pre><code>local<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;say&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// setting</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> local<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;say&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// obtaining</span>
local<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;say&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// deleting</span>
local<span class="token punctuation">.</span><span class="token function">subscribeItem</span><span class="token punctuation">(</span><span class="token string">&#39;say&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// subscription data mutating</span>
local<span class="token punctuation">.</span><span class="token function">bulkSetItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  say<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  then<span class="token operator">:</span> <span class="token string">&#39;goodbye&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// batch setting</span>
local<span class="token punctuation">.</span><span class="token function">bulkGetItem</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;say&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;then&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// batch obtaining</span>
local<span class="token punctuation">.</span><span class="token function">bulkRemoveItem</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;say&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;then&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// batch deleting</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>The functions of the batch operation are all <strong>atomic</strong>. If the operation on some of the values fails, the previously successful value will be automatically rolled back.</p><p>Instead of manipulating data through the <code>data</code> object in the previous article, we actually <strong>prefer</strong> you to use the API similar to storage object. Explicitly called functions are more readable, and are not easily confused with ordinary objects and cause bugs.</p><h2 id="model-methods" tabindex="-1">Model Methods <a class="header-anchor" href="#model-methods" aria-hidden="true">#</a></h2><p>We can add <strong>any methods</strong> in the model class! Just like:</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// /models/configState.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Models <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConfigState</span> <span class="token keyword">extends</span> <span class="token class-name">Models<span class="token punctuation">.</span>keyValue</span> <span class="token punctuation">{</span>
  <span class="token comment">// ..</span>

  <span class="token comment">// add a model method</span>
  <span class="token function">setFoo</span><span class="token punctuation">(</span><span class="token parameter">bar<span class="token punctuation">,</span> foo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// various logic..</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>foo <span class="token operator">=</span> foo<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar <span class="token operator">=</span> bar<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// the method can also be asychronous</span>
  <span class="token keyword">async</span> <span class="token function">calcBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ..</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">ConfigState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>Directly call the method when using it\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> configState <span class="token keyword">from</span> <span class="token string">&#39;./models/configState.js&#39;</span><span class="token punctuation">;</span>

configState<span class="token punctuation">.</span><span class="token function">setFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> configState<span class="token punctuation">.</span><span class="token function">calcBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>We recommend that write the changes to the model data <strong>all in the method inside the model</strong>. The external only changes the data of the model by calling these methods. Following this simple agreement, in addition to making it easier to reuse code, it can also effectively decouple our applications and make it easier for you to track changes in data flow. Moreover, the changes to the model data are gathered in one place. When reading the code, it is easy to understand how the data changes.</p><h2 id="collection-model" tabindex="-1">Collection Model <a class="header-anchor" href="#collection-model" aria-hidden="true">#</a></h2><p>The models are divided into <strong>Key Value Model</strong> and <strong>Collection Model</strong>\u3002Previously, the models that we used were all key-value values model, which acts like an object when used.</p><div class="language-js line-numbers-mode"><pre><code>state<span class="token punctuation">.</span>data<span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Sometimes, we may need need a model in which the primary key is automatically incremented when adding data in a collective manner, somewhat similar to an array:</p><div class="language-js line-numbers-mode"><pre><code>list<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">700</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>The common application scenarios of the collection model are various lists, such as the cached video list, the user&#39;s draft box list... Next, suppose we are developing a sticky note application and need to store the sticky notes written by the user locally.</p><p>Let&#39;s create a <code>NoteList</code> model\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// create a file /models/noteList.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SyncModels <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// inherit SyncModels.collection to make it a set model</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token class-name">NoteList</span> <span class="token keyword">extends</span> <span class="token class-name">SyncModels<span class="token punctuation">.</span>collection</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;NoteList&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>When using it, the primary key of data created through <code>insert</code> method will be auto incremented:</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> noteList <span class="token keyword">from</span> <span class="token string">&#39;@/models/noteList&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> note1 <span class="token operator">=</span> noteList<span class="token punctuation">.</span><span class="token function">insertItem</span><span class="token punctuation">(</span><span class="token string">&#39;This is the content of note 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> note2 <span class="token operator">=</span> noteList<span class="token punctuation">.</span><span class="token function">insertItem</span><span class="token punctuation">(</span><span class="token string">&#39;This is the content of note 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>noteList<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// echo &quot;This is the content of note 1&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>noteList<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// echo &quot;This is the content of note 2&quot;</span>

<span class="token keyword">const</span> keys <span class="token operator">=</span> noteList<span class="token punctuation">.</span><span class="token function">bulkInsertItem</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;note3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;note4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// echo [&quot;3&quot;, &quot;4&quot;]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>::: Warning Tips:</p><ul><li>The primary key of the collection model is incremented from <code>1</code>, which is different from arrays. This design is for better compatibility with IndexedDB, because IndexedDB starts from <code>1</code>.</li><li>In the collection model, deleting any value will not cause the primary key of other values to change. In other words, the keys of the collection model can be regarded as unique and unchanging.</li></ul><p>:::</p><h3 id="key-generator" tabindex="-1">Key Generator <a class="header-anchor" href="#key-generator" aria-hidden="true">#</a></h3><p>We may hope that the user&#39;s data can be synchronized in the cloud, the user creates the data locally when the user is offline, and synchronizes with the cloud when the network is restored. In the collection model, if the primary key is incremented one by one, the user will have synchronization problems when using multiple devices.</p><p>To this end, we can add the <code>autoIncrementHandler</code> attribute to the model options to customize the primary key generation method, instead of the default auto-increment mode.</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br></div><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token class-name">NoteList</span> <span class="token keyword">extends</span> <span class="token class-name">SyncModels<span class="token punctuation">.</span>collection</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;NoteList&#39;</span><span class="token punctuation">,</span>
      <span class="token function">autoIncrementHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// return a globally unique distributed ID</span>
        <span class="token keyword">return</span> <span class="token string">&#39;9cac24ea-fe09-4280-927e-e378943d4aca&#39;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>::: Warning Tips</p><ul><li><p>In the synchronous model, it <strong>must be a synchronous function</strong>. If you need it to be an asynchronous function, please use the asynchronous model.</p></li><li><p>Its return value must be of type <code>string</code>. Because the largest integer that can be accurately represented by <code>number</code> in JavaScript is <code>2^53-1</code>, this will have precision problems for common purely digital distributed algorithms.</p></li></ul><p>:::</p><h3 id="nuid" tabindex="-1">NUID <a class="header-anchor" href="#nuid" aria-hidden="true">#</a></h3><p>We can use algorithms such as <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier" target="_blank" rel="noopener noreferrer">UUID</a>, <a href="https://en.wikipedia.org/wiki/Snowflake_ID" target="_blank" rel="noopener noreferrer">Snowflake ID</a> to generate the primary key. At the same time, we have designed a <strong>more general</strong> and distributed ID algorithm that is <strong>suitable for use in front-end business</strong>, which we call <strong>NUID</strong>:</p><div class="language-js line-numbers-mode"><pre><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>current millisecond timestamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>random <span class="token function">number</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">9999</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>In this algorithm, only the user of the current account generates multiple pieces of data within the same millisecond, and the probability of repetition of two pieces of data is <code>(1/10000)^2</code>, one in 100 million.</p><div class="language-"><pre><code>Invalid code snippet option</code></pre><div class="line-numbers-wrapper"></div></div><h1 id="\u4E00\u822C\u6765\u8BF4\uFF0C\u6B63\u5E38\u7528\u6237\u5F88\u96BE\u5728\u540C\u4E00\u6BEB\u79D2\u65B0\u589E\u591A\u6761\u6570\u636E\uFF0C\u6240\u4EE5\uFF0C\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u91CD\u590D\u7684\u51E0\u7387\u6781\u4F4E\u3002\u4E3B\u8981\u53EF\u80FD\u91CD\u590D\u7684\u573A\u666F\u662F\u5728\u540C\u4E00\u5BA2\u6237\u7AEF\uFF0C\u6279\u91CF\u65B0\u589E\u6570\u636E\u65F6\u4EA7\u751F\u3002\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u5728\u751F\u6210\u540C\u4E00\u6BEB\u79D2\u751F\u6210\u7684-nuid-\u4E2D\uFF0C\u6DFB\u52A0\u4E3B\u52A8\u89C4\u907F\u751F\u6210\u76F8\u540C-id-\u7684\u903B\u8F91\u3002" tabindex="-1">\u4E00\u822C\u6765\u8BF4\uFF0C\u6B63\u5E38\u7528\u6237\u5F88\u96BE\u5728\u540C\u4E00\u6BEB\u79D2\u65B0\u589E\u591A\u6761\u6570\u636E\uFF0C\u6240\u4EE5\uFF0C\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u91CD\u590D\u7684\u51E0\u7387\u6781\u4F4E\u3002\u4E3B\u8981\u53EF\u80FD\u91CD\u590D\u7684\u573A\u666F\u662F\u5728\u540C\u4E00\u5BA2\u6237\u7AEF\uFF0C\u6279\u91CF\u65B0\u589E\u6570\u636E\u65F6\u4EA7\u751F\u3002\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u5728\u751F\u6210\u540C\u4E00\u6BEB\u79D2\u751F\u6210\u7684 NUID \u4E2D\uFF0C\u6DFB\u52A0\u4E3B\u52A8\u89C4\u907F\u751F\u6210\u76F8\u540C ID \u7684\u903B\u8F91\u3002 <a class="header-anchor" href="#\u4E00\u822C\u6765\u8BF4\uFF0C\u6B63\u5E38\u7528\u6237\u5F88\u96BE\u5728\u540C\u4E00\u6BEB\u79D2\u65B0\u589E\u591A\u6761\u6570\u636E\uFF0C\u6240\u4EE5\uFF0C\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u91CD\u590D\u7684\u51E0\u7387\u6781\u4F4E\u3002\u4E3B\u8981\u53EF\u80FD\u91CD\u590D\u7684\u573A\u666F\u662F\u5728\u540C\u4E00\u5BA2\u6237\u7AEF\uFF0C\u6279\u91CF\u65B0\u589E\u6570\u636E\u65F6\u4EA7\u751F\u3002\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u5728\u751F\u6210\u540C\u4E00\u6BEB\u79D2\u751F\u6210\u7684-nuid-\u4E2D\uFF0C\u6DFB\u52A0\u4E3B\u52A8\u89C4\u907F\u751F\u6210\u76F8\u540C-id-\u7684\u903B\u8F91\u3002" aria-hidden="true">#</a></h1><p>Generally speaking, it is almost impossible for a normal user to add multiple pieces of data in the same millisecond, so the chance of duplication in practical applications is extremely low. The main repetitive scenarios are generated when adding data in batches on the same client. The solution is that we can try to add logic to actively avoid generating the same ID in the NUID generated in the same millisecond.</p><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><blockquote><p>da15f2179061787723092e2f5e825f2776e1eb24</p></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote><h2 id="model-seeding" tabindex="-1">Model Seeding <a class="header-anchor" href="#model-seeding" aria-hidden="true">#</a></h2><p>We may want to pad initial values for some models. For example, we are working on an e-book application, and we hope to specify a default font size, theme, page turning mode for the user when he uses it for the first time...</p><p>We can call the <code>seed</code> method in the construction method of the model to pad the initial value:</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token comment">// /models/configState.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SyncModels <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConfigState</span> <span class="token keyword">extends</span> <span class="token class-name">SyncModels<span class="token punctuation">.</span>keyValue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ..</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">seed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;fontSize&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;14px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;theme&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;turningMode&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;roll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>For the <strong>key-value model</strong>, you can pass in an object to simplify model seeding:</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">seed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
  baz<span class="token operator">:</span> <span class="token string">&#39;qux&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// equivalent to\uFF1A</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">seed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>baz <span class="token operator">=</span> <span class="token string">&#39;qux&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>For the <strong>collection model</strong>, you can pass in an array to simplify model seeding:</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">seed</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// equivalent to\uFF1A</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">seed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>By default, every time you run your web page, data will be populated once. If the model is configured with <a href="/docs/persistence/">Storage Drive</a>, then data will only be padded when the user runs your web page for the first time.</p>__VP_STATIC_END__`,61),o=[p];function c(l,i,u,r,k,d){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{b as __pageData,h as default};
