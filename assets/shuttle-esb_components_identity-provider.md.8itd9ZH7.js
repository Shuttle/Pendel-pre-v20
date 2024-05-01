import { _ as _export_sfc, c as createElementBlock, o as openBlock, a4 as createStaticVNode } from "./chunks/framework.CfygL32k.js";
const __pageData = JSON.parse('{"title":"IIdentityProvider","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-esb/components/identity-provider.md","filePath":"shuttle-esb/components/identity-provider.md"}');
const _sfc_main = { name: "shuttle-esb/components/identity-provider.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="iidentityprovider" tabindex="-1">IIdentityProvider <a class="header-anchor" href="#iidentityprovider" aria-label="Permalink to &quot;IIdentityProvider&quot;">​</a></h1><p>An implementation of the <code>IIdentityProvider</code> interface is used to obtain the <code>IIdentity</code> instance to use to return the <code>PrincipalIdentityName</code> of the <code>TransportMessage</code>.</p><p>There is a <code>DefaultIdentityProvider</code> that is used if no other instance is provided.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="get" tabindex="-1">Get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;Get&quot;">​</a></h3><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IIdentity</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>The method will return the <code>IIdentity</code> instance to use.</p><p><em>Note</em>: the <code>IIdentityProvider</code> implementation is responsible for honouring the <code>ServiceBusOptions.CacheIdentity</code> property.</p>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
const identityProvider = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  identityProvider as default
};
