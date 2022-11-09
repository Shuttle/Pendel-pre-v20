import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app.7c955db8.js";
const __pageData = JSON.parse('{"title":"Purge Queues","description":"","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]}],"relativePath":"shuttle-esb/modules/purge-queues.md"}');
const _sfc_main = { name: "shuttle-esb/modules/purge-queues.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="purge-queues" tabindex="-1">Purge Queues <a class="header-anchor" href="#purge-queues" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">PM&gt; Install-Package Shuttle.Esb.Module.PurgeQueues</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The PurgeQueues module for Shuttle.Esb clears the specified queues on startup.</p><p>The module will attach the <code>PurgeQueuesObserver</code> to the <code>OnAfterConfigure</code> event of the <code>StartupPipeline</code> and purges the configured queues if the relevant queue implementation has implemented the <code>IPurgeQueue</code> interface. If the relevant queue implementation has <em>not</em> implemented the <code>IPurgeQueue</code> interface the purge is ignore.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">services</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddPurgeQueuesModule</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">	builder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Uris </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">List</span><span style="color:#89DDFF;">&lt;string&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scheme-a://configuration-name/queue-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scheme-b://configuration-name/queue-b</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">};</span></span>\n<span class="line"><span style="color:#89DDFF;">});</span></span>\n<span class="line"></span></code></pre></div><p>The default JSON settings structure is as follows:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Shuttle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">Modules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">MessageForwarding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">Uris</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scheme-a://configuration-name/queue-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scheme-b://configuration-name/queue-b</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"><span style="color:#A6ACCD;">	  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
const purgeQueues = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  purgeQueues as default
};
