import { _ as _export_sfc, c as createElementBlock, o as openBlock, a4 as createStaticVNode } from "./chunks/framework.CfygL32k.js";
const __pageData = JSON.parse('{"title":"Purge Inbox","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-esb/modules/purge-inbox.md","filePath":"shuttle-esb/modules/purge-inbox.md"}');
const _sfc_main = { name: "shuttle-esb/modules/purge-inbox.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="purge-inbox" tabindex="-1">Purge Inbox <a class="header-anchor" href="#purge-inbox" aria-label="Permalink to &quot;Purge Inbox&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PM&gt; Install-Package Shuttle.Esb.PurgeInbox</span></span></code></pre></div><p>The PurgeInbox module for Shuttle.Esb clears the inbox work queue upon startup.</p><p>The module will attach the <code>PurgeInboxObserver</code> to the <code>OnAfterConfigure</code> event of the <code>StartupPipeline</code> and purges the inbox work queue if the relevant queue implementation has implemented the <code>IPurgeQueue</code> interface. If the inbox work queue implementation has <em>not</em> implemented the <code>IPurgeQueue</code> interface the purge is ignored.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">services.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AddPurgeInbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>', 6);
const _hoisted_7 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_7);
}
const purgeInbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  purgeInbox as default
};
