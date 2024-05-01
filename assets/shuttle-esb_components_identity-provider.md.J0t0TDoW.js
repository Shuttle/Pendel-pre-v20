import{_ as e,c as t,o as i,a4 as o}from"./chunks/framework.HjHqGs9w.js";const _=JSON.parse('{"title":"IIdentityProvider","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-esb/components/identity-provider.md","filePath":"shuttle-esb/components/identity-provider.md"}'),a={name:"shuttle-esb/components/identity-provider.md"},s=o('<h1 id="iidentityprovider" tabindex="-1">IIdentityProvider <a class="header-anchor" href="#iidentityprovider" aria-label="Permalink to &quot;IIdentityProvider&quot;">​</a></h1><p>An implementation of the <code>IIdentityProvider</code> interface is used to obtain the <code>IIdentity</code> instance to use to return the <code>PrincipalIdentityName</code> of the <code>TransportMessage</code>.</p><p>There is a <code>DefaultIdentityProvider</code> that is used if no other instance is provided.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="get" tabindex="-1">Get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;Get&quot;">​</a></h3><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IIdentity</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>The method will return the <code>IIdentity</code> instance to use.</p><p><em>Note</em>: the <code>IIdentityProvider</code> implementation is responsible for honouring the <code>ServiceBusOptions.CacheIdentity</code> property.</p>',8),d=[s];function n(r,c,h,p,l,u){return i(),t("div",null,d)}const y=e(a,[["render",n]]);export{_ as __pageData,y as default};
