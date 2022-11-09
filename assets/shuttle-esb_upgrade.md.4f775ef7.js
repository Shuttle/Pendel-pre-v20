import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app.7c955db8.js";
const __pageData = JSON.parse('{"title":"Upgrade to v-13.0.0","description":"","frontmatter":{},"headers":[{"level":2,"title":"Shuttle.Core.Container","slug":"shuttle-core-container","link":"#shuttle-core-container","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Queue configuration","slug":"queue-configuration","link":"#queue-configuration","children":[]},{"level":2,"title":"Shuttle.Esb.AzureMQ","slug":"shuttle-esb-azuremq","link":"#shuttle-esb-azuremq","children":[]},{"level":2,"title":"Streams","slug":"streams","link":"#streams","children":[]},{"level":2,"title":"Discord","slug":"discord","link":"#discord","children":[]}],"relativePath":"shuttle-esb/upgrade.md"}');
const _sfc_main = { name: "shuttle-esb/upgrade.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="upgrade-to-v-13-0-0" tabindex="-1">Upgrade to v-13.0.0 <a class="header-anchor" href="#upgrade-to-v-13-0-0" aria-hidden="true">#</a></h1><h2 id="shuttle-core-container" tabindex="-1">Shuttle.Core.Container <a class="header-anchor" href="#shuttle-core-container" aria-hidden="true">#</a></h2><p>Prior to version <code>13.0.0</code> all <code>Shuttle.*</code> components supported dependency injection via an adapter based on <a href="https://github.com/Shuttle/Shuttle.Core.Container" target="_blank" rel="noreferrer">Shuttle.Core.Container</a> and would typically register dependencies using a <code>IComponentRegistry.Register*</code> method.</p><p>You would have to choose and implementation, such as <code>Shuttle.Core.Ninject</code>, in order to support dependency injection.</p><p>From v-13.0.0 of <code>Shuttle.Esb</code> only <a href="https://docs.microsoft.com/en-us/dotnet/core/extensions/dependency-injection" target="_blank" rel="noreferrer">.NET dependency injection</a> is supported and the configuration of components has been refactored to make use of the <a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options?view=aspnetcore-6.0" target="_blank" rel="noreferrer">options pattern</a>.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h2><p>As per the .Net dependency injection guidelines the components are added using an <code>IServiceCollection.Add{Library}</code> method. When there are options applicable to the component a <code>Builder</code> may be used to facilitate configuration, e.g.:</p><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ServiceCollection</span><span style="color:#89DDFF;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddLibrary</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    builder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ConfigurationMethod</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">    builder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">option </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> optionValue</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">})</span></span>\n<span class="line"></span></code></pre></div><p>Please see the documentation related to each component for specifics.</p><p>The <code>ServiceBus</code> instance no longer needs to be managed as the instance lifecycle is managed by the <code>ServiceBusHostedService</code>.</p><h2 id="queue-configuration" tabindex="-1">Queue configuration <a class="header-anchor" href="#queue-configuration" aria-hidden="true">#</a></h2><p>All queues URIs are now structured as <code>scheme://configuration-name/queue-name</code> and the <code>scheme</code> represents a unique name for the <code>IQueue</code> implementation. The <code>scheme</code> and <code>configuration-name</code> (represented by the URI&#39;s <code>Host</code> property) should always be lowercase as creating a <code>new Uri(uriString)</code> forces the scheme and host to lowercaseThe intention is to allow easier configuration of queue properties.</p><p>This does mean, however, that all existing queue configuration would need to be refactored, including subscriptions.</p><h2 id="shuttle-esb-azuremq" tabindex="-1">Shuttle.Esb.AzureMQ <a class="header-anchor" href="#shuttle-esb-azuremq" aria-hidden="true">#</a></h2><p>This package has been renamed to <code>Shuttle.Esb.AzureStorageQueues</code> and the scheme has been changed to <code>azuresq</code> from <code>azuremq</code>.</p><h2 id="streams" tabindex="-1">Streams <a class="header-anchor" href="#streams" aria-hidden="true">#</a></h2><p>The <code>IQueue</code> interface now has an <code>IsStream</code> boolean property that indicates whether or not the queue represents a stream such as <code>Shuttle.Esb.Kafka</code>.</p><h2 id="discord" tabindex="-1">Discord <a class="header-anchor" href="#discord" aria-hidden="true">#</a></h2><p>Should you have any questions or comments you are welcome to visit the <a href="https://discord.gg/Q2yEsfht6f" target="_blank" rel="noreferrer">Discord channel</a>.</p>', 19);
const _hoisted_20 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_20);
}
const upgrade = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  upgrade as default
};
