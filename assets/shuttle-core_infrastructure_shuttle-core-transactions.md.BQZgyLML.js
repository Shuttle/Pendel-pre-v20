import{_ as s,c as a,o as i,a4 as t}from"./chunks/framework.HjHqGs9w.js";const u=JSON.parse('{"title":"Shuttle.Core.Transactions","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-core/infrastructure/shuttle-core-transactions.md","filePath":"shuttle-core/infrastructure/shuttle-core-transactions.md"}'),e={name:"shuttle-core/infrastructure/shuttle-core-transactions.md"},n=t(`<h1 id="shuttle-core-transactions" tabindex="-1">Shuttle.Core.Transactions <a class="header-anchor" href="#shuttle-core-transactions" aria-label="Permalink to &quot;Shuttle.Core.Transactions&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PM&gt; Install-Package Shuttle.Core.Transactions</span></span></code></pre></div><p>This package makes use of the .Net <code>TransactionScope</code> class to provide ambient transaction handling.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>The relevant components may be configured using <code>IServiceColletion</code>:</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">services.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AddTransactionScope</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">builder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    builder.Options.Enabled </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    builder.Options.IsolationLevel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isolationLevel;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    builder.Options.Timeout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TimeSpan.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FromSeconds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>The default JSON settings structure is as follows::</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;Shuttle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;TransactionScope&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;Enabled&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;IsolationLevel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;isolation-level&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			&quot;Timeout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;00:00:30&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		} </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h1 id="itransactionscope" tabindex="-1">ITransactionScope <a class="header-anchor" href="#itransactionscope" aria-label="Permalink to &quot;ITransactionScope&quot;">​</a></h1><p>An implementation of the <code>ITransactionScope</code> interface is used to wrap a <code>TransactionScope</code>.</p><p>The <code>DefaultTransactionScope</code> makes use of the standard .NET <code>TransactionScope</code> functionality. There is also a <code>NullTransactionScope</code> that implements the null pattern so it implements the interface but does not do anything.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Guid Id { get; }</span></span></code></pre></div><p>Returns the Id of the transaction scope.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Complete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Marks the transaction scope as complete.</p><h1 id="itransactionscopefactory" tabindex="-1">ITransactionScopeFactory <a class="header-anchor" href="#itransactionscopefactory" aria-label="Permalink to &quot;ITransactionScopeFactory&quot;">​</a></h1><p>An implementation of the <code>ITransactionScopeFactory</code> interface provides instances of an <code>ITransactionScope</code> implementation.</p><p>The <code>TransactionScopeFactory</code> provides a <code>DefaultTransactionScope</code> instance if transaction scopes are <code>Enabled</code>; else a <code>NullTransactionScope</code> that implements the null pattern.</p><h2 id="create" tabindex="-1">Create <a class="header-anchor" href="#create" aria-label="Permalink to &quot;Create&quot;">​</a></h2><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ITransactionScope</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsolationLevel</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isolationLevel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TimeSpan</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Creates the relevant instance using the given parameters.</p>`,23),l=[n];function o(p,h,r,c,k,d){return i(),a("div",null,l)}const g=s(e,[["render",o]]);export{u as __pageData,g as default};
