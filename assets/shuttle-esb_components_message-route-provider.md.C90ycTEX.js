import{_ as e,c as t,o as s,a4 as a}from"./chunks/framework.HjHqGs9w.js";const m=JSON.parse('{"title":"Message Route Provider","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-esb/components/message-route-provider.md","filePath":"shuttle-esb/components/message-route-provider.md"}'),i={name:"shuttle-esb/components/message-route-provider.md"},o=a('<h1 id="message-route-provider" tabindex="-1">Message Route Provider <a class="header-anchor" href="#message-route-provider" aria-label="Permalink to &quot;Message Route Provider&quot;">​</a></h1><p>An implementation of the <code>IMessageRouteProvider</code> interface is used to obtain a list of the uris that a message should be routed to.</p><p>The <code>DefaultMessageRouteProvider</code> makes use if the <code>ServiceBusOptions</code> to determine the routing. You could implement this interface for custom routing such as a centrally managed database containing the routing.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getrouteuris" tabindex="-1">GetRouteUris <a class="header-anchor" href="#getrouteuris" aria-label="Permalink to &quot;GetRouteUris&quot;">​</a></h3><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IEnumerable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetRouteUris</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">object</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>The method will return the list of uris that the message should be routed to. All qualifying routes should be added to the resulting collection of uris.</p><h3 id="add" tabindex="-1">Add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;Add&quot;">​</a></h3><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IMessageRoute</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> messageRoute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>The method will add a new <code>IMessageRoute</code> instance.</p><h2 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation&quot;">​</a></h2><h3 id="defaultmessagerouteprovider" tabindex="-1">DefaultMessageRouteProvider <a class="header-anchor" href="#defaultmessagerouteprovider" aria-label="Permalink to &quot;DefaultMessageRouteProvider&quot;">​</a></h3><p>The <code>MessageRouteProvider</code> obtains its configuration from the <a href="/shuttle-esb/options/message-routes.html">MessageRouteOptions</a> defined on the <code>ServiceBusOptions</code>.</p><h3 id="specifications" tabindex="-1">Specifications <a class="header-anchor" href="#specifications" aria-label="Permalink to &quot;Specifications&quot;">​</a></h3><p>For each message route you need to specify the specification to apply to the value. The <a href="http://en.wikipedia.org/wiki/Specification_pattern" target="_blank" rel="noreferrer">specification</a> will determine wether the route will be added.</p><h4 id="startswithmessageroutespecification" tabindex="-1">StartsWithMessageRouteSpecification <a class="header-anchor" href="#startswithmessageroutespecification" aria-label="Permalink to &quot;StartsWithMessageRouteSpecification&quot;">​</a></h4><p>The <code>StartsWithMessageRouteSpecification</code> will include the route when the message type&#39;s full name starts with the given <code>value</code></p><h4 id="typelistmessageroutespecification" tabindex="-1">TypeListMessageRouteSpecification <a class="header-anchor" href="#typelistmessageroutespecification" aria-label="Permalink to &quot;TypeListMessageRouteSpecification&quot;">​</a></h4><p>For the <code>TypeListMessageRouteSpecification</code> you need to provide a list of the assembly-qualified name of the type or types (semi-colon delimited).</p><h4 id="regexmessageroutespecification" tabindex="-1">RegexMessageRouteSpecification <a class="header-anchor" href="#regexmessageroutespecification" aria-label="Permalink to &quot;RegexMessageRouteSpecification&quot;">​</a></h4><p>For the <code>RegexMessageRouteSpecification</code> you need to provide the <a href="http://msdn.microsoft.com/en-us/library/system.text.regularexpressions.regex.aspx" target="_blank" rel="noreferrer">regex</a> expression to apply to the full name of the type.</p><h4 id="assemblymessageroutespecification" tabindex="-1">AssemblyMessageRouteSpecification <a class="header-anchor" href="#assemblymessageroutespecification" aria-label="Permalink to &quot;AssemblyMessageRouteSpecification&quot;">​</a></h4><p>The <code>AssemblyMessageRouteSpecification</code> is derived from the <code>TypeListMessageRouteSpecification</code> and includes all the types from the assembly represented by <code>value</code>. If the assembly provided by <code>value</code> ends with either <code>.exe</code> or <code>.dll</code> the assembly will be loaded from the given path, else the assembly will be loaded from the <code>AppDomain</code> (so it should be referenced).</p>',23),r=[o];function n(h,d,l,c,p,u){return s(),t("div",null,r)}const f=e(i,[["render",n]]);export{m as __pageData,f as default};
