import{_ as a,c as s,o as e,a as n}from"./app.197c0aa2.js";const m='{"title":"\u4ECE v4 \u8FC1\u79FB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u603B\u89C8","slug":"\u603B\u89C8"},{"level":2,"title":"\u7834\u574F\u6027\u53D8\u5316","slug":"\u7834\u574F\u6027\u53D8\u5316"},{"level":3,"title":"\u4E3B\u952E\u7C7B\u578B\u53D8\u66F4\u4E3A string","slug":"\u4E3B\u952E\u7C7B\u578B\u53D8\u66F4\u4E3A-string"},{"level":3,"title":"\u7EE7\u627F\u6A21\u578B\u62C6\u5206\u4E3A\u540C\u6B65\u6A21\u578B\u548C\u5F02\u6B65\u6A21\u578B","slug":"\u7EE7\u627F\u6A21\u578B\u62C6\u5206\u4E3A\u540C\u6B65\u6A21\u578B\u548C\u5F02\u6B65\u6A21\u578B"},{"level":3,"title":"\u9A71\u52A8\u91CD\u5199","slug":"\u9A71\u52A8\u91CD\u5199"},{"level":3,"title":"\u5BF9\u8C61\u91CD\u547D\u540D","slug":"\u5BF9\u8C61\u91CD\u547D\u540D"}],"relativePath":"migrations/v4.md","lastUpdated":1635335371749}',t={},l=n(`<h1 id="\u4ECE-v4-\u8FC1\u79FB" tabindex="-1">\u4ECE v4 \u8FC1\u79FB <a class="header-anchor" href="#\u4ECE-v4-\u8FC1\u79FB" aria-hidden="true">#</a></h1><p>Kurimudb 5.x \u7248\u672C\u76F8\u8F83\u4E8E 4.x \u7248\u672C\u6709\u8BB8\u591A\u53D8\u5316\uFF0C\u5B83\u4EEC\u53EF\u80FD\u662F\u4E00\u4E9B\u65B0\u7279\u6027\uFF0C\u4E5F\u53EF\u80FD\u662F\u4E00\u4E9B\u4E0D\u517C\u5BB9\u7684\u66F4\u6539\uFF0C\u672C\u6587\u6863\u4F1A\u8BE6\u7EC6\u4E3A\u4F60\u9610\u8FF0\u5176\u4E2D\u7684\u5177\u4F53\u53D8\u5316\u3002</p><h2 id="\u603B\u89C8" tabindex="-1">\u603B\u89C8 <a class="header-anchor" href="#\u603B\u89C8" aria-hidden="true">#</a></h2><p>Kurimudb 5.x \u7248\u672C\u4E3B\u8981\u505A\u4E86\u4EE5\u4E0B\u65B9\u5411\u7684\u6539\u8FDB\uFF1A</p><ol><li><p>\u6574\u4F53\u91CD\u6784\uFF0C\u5B8C\u5584\u6D4B\u8BD5\uFF0C\u4F18\u5316\u4EE3\u7801\u53EF\u8BFB\u6027</p></li><li><p>\u66F4\u52A0\u5B8C\u5584\u548C\u4E25\u8C28\u7684 TypeScript \u7C7B\u578B\u652F\u6301\uFF0C\u5E76\u4E14\u589E\u52A0\u4E86\u5F88\u591A\u81EA\u52A8\u63A8\u65AD\uFF0C\u975E\u5E38\u611F\u8C22 <a href="https://github.com/TheNightmareX" target="_blank" rel="noopener noreferrer">@TheNightmareX</a> \u63D0\u4F9B\u7684\u5E2E\u52A9</p></li><li><p>\u96C6\u5408\u6A21\u578B\u7684\u4E3B\u952E\uFF0C\u9664\u4E86\u81EA\u52A8\u9012\u589E\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u751F\u6210\u65B9\u5F0F\uFF1A\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u8BF8\u5982 Snowflake ID\u3001UUID \u7B49\u5206\u5E03\u5F0F ID \u751F\u6210\u7B97\u6CD5\u6765\u751F\u6210\u4E3B\u952E\uFF0C\u4EE5\u4FBF\u5F00\u53D1\u4E91\u7AEF\u540C\u6B65\u529F\u80FD\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u521B\u5EFA\u81EA\u5B9A\u4E49\u7B97\u6CD5\u6765\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42</p></li><li><p>\u5C06\u5F02\u6B65\u6A21\u578B\u4E0E\u540C\u6B65\u6A21\u578B\u7684\u4EE3\u7801\u62C6\u5206\uFF0C\u4FBF\u4E8E\u540E\u7EED\u7EF4\u62A4</p></li></ol><h2 id="\u7834\u574F\u6027\u53D8\u5316" tabindex="-1">\u7834\u574F\u6027\u53D8\u5316 <a class="header-anchor" href="#\u7834\u574F\u6027\u53D8\u5316" aria-hidden="true">#</a></h2><h3 id="\u4E3B\u952E\u7C7B\u578B\u53D8\u66F4\u4E3A-string" tabindex="-1">\u4E3B\u952E\u7C7B\u578B\u53D8\u66F4\u4E3A string <a class="header-anchor" href="#\u4E3B\u952E\u7C7B\u578B\u53D8\u66F4\u4E3A-string" aria-hidden="true">#</a></h3><p>\u65E7\u7248\u672C\u4E2D\uFF0C\u6A21\u578B\u7684\u4E3B\u952E\u533A\u5206\u4E3A <code>string</code> \u4E0E <code>number</code> \u4E24\u79CD\u7C7B\u578B\uFF0C5.x \u7248\u672C\u5F00\u59CB\u5C06\u7EDF\u4E00\u4E3A <code>string</code> \u7C7B\u578B\uFF0C\u540C\u65F6\u6A21\u578B\u9009\u9879\u4E2D\u4E0D\u518D\u9700\u8981\u58F0\u660E <code>type</code> \u5B57\u6BB5\u3002</p><h3 id="\u7EE7\u627F\u6A21\u578B\u62C6\u5206\u4E3A\u540C\u6B65\u6A21\u578B\u548C\u5F02\u6B65\u6A21\u578B" tabindex="-1">\u7EE7\u627F\u6A21\u578B\u62C6\u5206\u4E3A\u540C\u6B65\u6A21\u578B\u548C\u5F02\u6B65\u6A21\u578B <a class="header-anchor" href="#\u7EE7\u627F\u6A21\u578B\u62C6\u5206\u4E3A\u540C\u6B65\u6A21\u578B\u548C\u5F02\u6B65\u6A21\u578B" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">class</span> <span class="token class-name">noteList</span> <span class="token keyword">extends</span> <span class="token class-name">Models<span class="token punctuation">.</span>collection</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// \u53D8\u66F4\u4E3A</span>
<span class="token keyword">class</span> <span class="token class-name">noteList</span> <span class="token keyword">extends</span> <span class="token class-name">SyncModels<span class="token punctuation">.</span>collection</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// \u6216\u8005</span>
<span class="token keyword">class</span> <span class="token class-name">noteList</span> <span class="token keyword">extends</span> <span class="token class-name">AsyncModels<span class="token punctuation">.</span>collection</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u9A71\u52A8\u91CD\u5199" tabindex="-1">\u9A71\u52A8\u91CD\u5199 <a class="header-anchor" href="#\u9A71\u52A8\u91CD\u5199" aria-hidden="true">#</a></h3><p>\u6240\u6709\u9A71\u52A8\u540C\u6837\u9700\u8981\u5347\u7EA7\u5230 5.x \u7248\u672C\uFF0C\u53EF\u80FD\u90E8\u5206\u9A71\u52A8\u7684 Api \u6709\u53D8\u52A8</p><h3 id="\u5BF9\u8C61\u91CD\u547D\u540D" tabindex="-1">\u5BF9\u8C61\u91CD\u547D\u540D <a class="header-anchor" href="#\u5BF9\u8C61\u91CD\u547D\u540D" aria-hidden="true">#</a></h3><p><code>KurimudbConfig</code> \u88AB\u91CD\u547D\u540D\u4E3A <code>GlobalConfig</code></p>`,14),c=[l];function o(p,i,r,d,h,u){return e(),s("div",null,c)}var _=a(t,[["render",o]]);export{m as __pageData,_ as default};
