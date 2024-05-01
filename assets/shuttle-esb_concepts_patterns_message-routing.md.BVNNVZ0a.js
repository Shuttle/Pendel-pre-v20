import{_ as s,c as e,o as i,a4 as a}from"./chunks/framework.HjHqGs9w.js";const E=JSON.parse('{"title":"Message Routing","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-esb/concepts/patterns/message-routing.md","filePath":"shuttle-esb/concepts/patterns/message-routing.md"}'),t={name:"shuttle-esb/concepts/patterns/message-routing.md"},n=a(`<h1 id="message-routing" tabindex="-1">Message Routing <a class="header-anchor" href="#message-routing" aria-label="Permalink to &quot;Message Routing&quot;">​</a></h1><p>Once you have instantiated a message you need to get it to a specific endpoint. You can let Shuttle.Esb decide this for you implicitly by configuring a routing mechanism or you can even specify the endpoint explicitly.</p><p>Typically when sending a message that message is a command. It does not <em>have</em> to be a command and you <em>can</em> send an event message to a specific endpoint but more-often-than-not you will be sending a command. Messages are sent by calling one of the relevant overloaded methods on the service bus instance:</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TransportMessage</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">object</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Action</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TransportMessageBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">builder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Only messages that have no <code>RecipientInboxWorkQueueUri</code> set will be routed by the service bus.</p><p>The <code>TransportMessage</code> envelope will be returned should you need access to any of the metadata available for the message.</p><p>Shuttle.Esb uses an implementation of an <code>IMessageRouteProvider</code> to determine where messages are sent.</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IMessageRouteProvider</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    IEnumerable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IMessageRoute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MessageRoutes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Task</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IEnumerable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetRouteUrisAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> messageType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    IEnumerable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetRouteUris</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> messageType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IMessageRoute</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> messageRoute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation&quot;">​</a></h2><p>The <code>DefaultMessageRouteProvider</code> is registered if no <code>IMessageRouteProvider</code> has been registered and makes use of the <a href="/shuttle-esb/options/message-routes.html">message routing options</a> to determine where to send messages:</p><p>Each implementation of <code>IMessageRouteProvider</code> can determine the routes however it needs to, from the given message type. A typical scenario, and the way the <code>DefaultMessageRouteProvider</code> works, is to use the full type name to determine the destination.</p><p><strong>Please note</strong>: each message type may only be sent to <em>one</em> endpoint using <code>Send</code>.</p>`,12),h=[n];function l(p,o,k,r,d,g){return i(),e("div",null,h)}const y=s(t,[["render",l]]);export{E as __pageData,y as default};
