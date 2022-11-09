import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app.7c955db8.js";
const __pageData = JSON.parse('{"title":"Message Handler","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"Reusability","slug":"reusability","link":"#reusability","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"ProcessMessage","slug":"processmessage","link":"#processmessage","children":[]}]}],"relativePath":"shuttle-esb/components/message-handler.md"}');
const _sfc_main = { name: "shuttle-esb/components/message-handler.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="message-handler" tabindex="-1">Message Handler <a class="header-anchor" href="#message-handler" aria-hidden="true">#</a></h1><p>In order to handle a message sent to an endpoint you need to implement the <code>IMessageHandler&lt;&gt;</code> interface on a class that is typically called the <em>message handler</em>.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><p>Although the interface does not have any properties you could implement the <code>IReusability</code> interface. If this interface is <em>not</em> implemented the message handler is regarded as stateless and will be pooled.</p><h3 id="reusability" tabindex="-1">Reusability <a class="header-anchor" href="#reusability" aria-hidden="true">#</a></h3><p>By default all message handlers are regarded as stateless and the instances are re-used for subsequent calls.</p><p>If, however, you would like to mark any message handler as not being re-usable you can implement the <code>IReusability</code> interface and return <code>false</code> from the <code>IsReusable</code> property:</p><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">bool IsReusable </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>Return <code>true</code> to indicate that the message handler instance can be re-used. This usually results in faster performance since new message handlers do not have to be instantiated. The performance gain will probably be negligible but stateless message handlers are preferred none-the-less.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="processmessage" tabindex="-1">ProcessMessage <a class="header-anchor" href="#processmessage" aria-hidden="true">#</a></h3><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ProcessMessage</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IHandlerContext</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">context</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"></span></code></pre></div><p>The <code>&lt;T&gt;</code> generic argument should be the type of the POCO message you are interested in. This method will contain the actual implementation code that reacts to the message that is passed in. If <a href="https://shuttle.github.io/shuttle-core/infrastructure/shuttle-core-transactions.html" target="_blank" rel="noreferrer">Shuttle.Core.Transactions</a> are enabled then this method will be wrapped in a <code>TransactionScope</code>.</p>', 13);
const _hoisted_14 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_14);
}
const messageHandler = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  messageHandler as default
};
