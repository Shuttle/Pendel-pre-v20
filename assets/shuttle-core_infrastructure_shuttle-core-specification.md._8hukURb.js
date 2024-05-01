import { _ as _export_sfc, c as createElementBlock, o as openBlock, a4 as createStaticVNode } from "./chunks/framework.CfygL32k.js";
const __pageData = JSON.parse('{"title":"Shuttle.Core.Specification","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-core/infrastructure/shuttle-core-specification.md","filePath":"shuttle-core/infrastructure/shuttle-core-specification.md"}');
const _sfc_main = { name: "shuttle-core/infrastructure/shuttle-core-specification.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="shuttle-core-specification" tabindex="-1">Shuttle.Core.Specification <a class="header-anchor" href="#shuttle-core-specification" aria-label="Permalink to &quot;Shuttle.Core.Specification&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PM&gt; Install-Package Shuttle.Core.Specification</span></span></code></pre></div><p>Provides a simple <code>ISpecification</code> interface.</p><p>A default <code>Specification</code> class is available that accepts a function as a callback for scenarios where an explicit <code>ISpecification</code> implementation may not be warranted:</p><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Specification</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Func</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> function)</span></span></code></pre></div>', 5);
const _hoisted_6 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_6);
}
const shuttleCoreSpecification = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  shuttleCoreSpecification as default
};
