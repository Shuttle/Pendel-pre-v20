import { _ as _export_sfc, c as createElementBlock, o as openBlock, a4 as createStaticVNode } from "./chunks/framework.CfygL32k.js";
const __pageData = JSON.parse('{"title":"Subscription Service","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-esb/components/subscription-service.md","filePath":"shuttle-esb/components/subscription-service.md"}');
const _sfc_main = { name: "shuttle-esb/components/subscription-service.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="subscription-service" tabindex="-1">Subscription Service <a class="header-anchor" href="#subscription-service" aria-label="Permalink to &quot;Subscription Service&quot;">​</a></h1><p>An implementation of the <code>ISubscriptionService</code> interface is used by endpoints to subscribe to message types and to get the endpoint uris that have subscribed to a message type.</p><p>There is no <em>default</em> implementation of the <code>ISubscriptionService</code> interface as the data has to be persisted in some central data store.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getsubscribeduris" tabindex="-1">GetSubscribedUris <a class="header-anchor" href="#getsubscribeduris" aria-label="Permalink to &quot;GetSubscribedUris&quot;">​</a></h3><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IEnumerable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetSubscribedUris</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">object</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Returns a list of endpoint uris that have subscribed to the type name of the given message.</p>', 7);
const _hoisted_8 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_8);
}
const subscriptionService = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  subscriptionService as default
};
