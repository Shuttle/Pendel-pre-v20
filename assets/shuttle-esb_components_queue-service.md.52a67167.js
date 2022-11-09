import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app.7c955db8.js";
const __pageData = JSON.parse('{"title":"Queue Service","description":"","frontmatter":{},"headers":[{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"Get","slug":"get","link":"#get","children":[]},{"level":3,"title":"Contains","slug":"contains","link":"#contains","children":[]}]}],"relativePath":"shuttle-esb/components/queue-service.md"}');
const _sfc_main = { name: "shuttle-esb/components/queue-service.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="queue-service" tabindex="-1">Queue Service <a class="header-anchor" href="#queue-service" aria-hidden="true">#</a></h1><p>An implementation of the <code>IQueueService</code> interface is used to manage the queues used in Shuttle.Esb.</p><p>The queue service should not be swapped out for your own implementation as it is integral to the functioning of Shuttle.Esb and the default implementation should suffice.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="get" tabindex="-1">Get <a class="header-anchor" href="#get" aria-hidden="true">#</a></h3><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">IQueue</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">(string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uri</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"></span></code></pre></div><p>This method returns an <code>IQueue</code> implementation that interacts with the queuing mechanism represented by the <code>scheme</code> in the uri. This method will attempt to return a cached <code>IQueue</code> instance. If none is found a new instance is requested using the <code>IQueueFactoryService.Create()</code> method.</p><p>Should the uri scheme be <code>resolver</code> this method will invoke the configured <code>IUriResolver</code> to obtain the represented queue uri and wrap that as a <code>ResolvedQueue</code>.</p><h3 id="contains" tabindex="-1">Contains <a class="header-anchor" href="#contains" aria-hidden="true">#</a></h3><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Contains</span><span style="color:#89DDFF;">(string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uri</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"></span></code></pre></div><p>This method determines whether the queue service has a queue registered for the given URI.</p>', 11);
const _hoisted_12 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_12);
}
const queueService = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  queueService as default
};
