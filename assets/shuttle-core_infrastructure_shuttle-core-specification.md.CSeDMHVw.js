import{_ as e,c as t,o as i,a4 as a}from"./chunks/framework.HjHqGs9w.js";const f=JSON.parse('{"title":"Shuttle.Core.Specification","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-core/infrastructure/shuttle-core-specification.md","filePath":"shuttle-core/infrastructure/shuttle-core-specification.md"}'),s={name:"shuttle-core/infrastructure/shuttle-core-specification.md"},c=a('<h1 id="shuttle-core-specification" tabindex="-1">Shuttle.Core.Specification <a class="header-anchor" href="#shuttle-core-specification" aria-label="Permalink to &quot;Shuttle.Core.Specification&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PM&gt; Install-Package Shuttle.Core.Specification</span></span></code></pre></div><p>Provides a simple <code>ISpecification</code> interface.</p><p>A default <code>Specification</code> class is available that accepts a function as a callback for scenarios where an explicit <code>ISpecification</code> implementation may not be warranted:</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Specification</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Func</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> function)</span></span></code></pre></div>',5),n=[c];function o(l,p,r,h,d,u){return i(),t("div",null,n)}const _=e(s,[["render",o]]);export{f as __pageData,_ as default};
