(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./src/markdown/api/Match.md":function(n,a,s){"use strict";s.r(a),s.d(a,"title",function(){return o});var t=s("./node_modules/react/index.js"),p=s.n(t);const o="Match";a.default=function(){return p.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:'<h1>Match</h1>\n<p>Matches a path to the location and calls back with a match or null. Matching is relative to any parent Routers, but not parent Match’s, because they render even if they don’t match.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Match <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reach/router"</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Match</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/hot/:item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span>props <span class="token operator">=></span>\n      props<span class="token punctuation">.</span>match <span class="token operator">?</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hot <span class="token punctuation">{</span>props<span class="token punctuation">.</span>match<span class="token punctuation">.</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Uncool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Match</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n</code></pre>\n<h2>props.match: object</h2>\n<p>Will be null if your path does not match the location. If it does match it will contain:</p>\n<ul>\n<li><code>uri</code></li>\n<li><code>path</code></li>\n<li><code>:params</code></li>\n</ul>\n<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Match</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/cool/beans<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">{</span>props <span class="token operator">=></span>\n    props<span class="token punctuation">.</span>match <span class="token operator">?</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Cool beans<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Uncool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Match</span><span class="token punctuation">></span></span>\n</code></pre>\n<h2>props.match[param]: string</h2>\n<p>Any params in your the path will be parsed and passed as <code>match[param]</code> to your callback.</p>\n<pre><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Match</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>events/:eventId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">{</span>props <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>match\n        <span class="token operator">?</span> props<span class="token punctuation">.</span>match<span class="token punctuation">.</span>eventId\n        <span class="token punctuation">:</span> <span class="token string">"No match"</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Match</span><span class="token punctuation">></span></span>\n</code></pre>\n<h2>props.match.uri: string</h2>\n<p>The portion of the URI that matched. If you pass a wildcard path, the wildcard portion will not be included. Not sure how this is useful for a <code>Match</code>, but it’s critical for how focus managment works, so we might as well pass it on to Match if we pass it on to Route Components!</p>\n<pre><code class="language-jsx"><span class="token comment">// URL: /somewhere/deep/i/mean/really/deep</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Match</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/somewhere/deep/*<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">{</span>props <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token comment">// props.match.uri === "/somewhere/deep"</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>match<span class="token punctuation">.</span>uri<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Match</span><span class="token punctuation">></span></span>\n</code></pre>\n<h2>props.match.path: string</h2>\n<p>The path you passed in as a prop.</p>\n<h2>props.location: object</h2>\n<p>The location of the app. Typically you don’t need this, but you can log it and see what there is to look at!</p>\n<h2>navigate(to, { state={}, replace=false })</h2>\n<p>A version of <a href="navigate">navigate</a> that does not support relative paths because we might not be matching anything to be relative to.</p>\n'}})}}}]);