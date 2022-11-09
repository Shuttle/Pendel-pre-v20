import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app.7c955db8.js";
const __pageData = JSON.parse('{"title":"SQL","description":"","frontmatter":{},"headers":[{"level":2,"title":"Supported providers","slug":"supported-providers","link":"#supported-providers","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]}],"relativePath":"shuttle-esb/implementations/idempotence/sql.md"}');
const _sfc_main = { name: "shuttle-esb/implementations/idempotence/sql.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="sql" tabindex="-1">SQL <a class="header-anchor" href="#sql" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">PM&gt; Install-Package Shuttle.Esb.Sql.Idempotence</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Contains a sql-based <code>IIdempotenceService</code> implementation.</p><h2 id="supported-providers" tabindex="-1">Supported providers <a class="header-anchor" href="#supported-providers" aria-hidden="true">#</a></h2><p>Currently only the <code>System.Data.SqlClient</code> and <code>Microsoft.Data.SqlClient</code> provider names are supported but this can easily be extended. Feel free to give it a bash and please send a pull request if you <em>do</em> go this route. You are welcome to create an issue and assistance will be provided where able.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">services</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddDataAccess</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    builder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddConnectionString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">shuttle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">System.Data.SqlClient</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">server=.;database=shuttle;user id=sa;password=Pass!000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"><span style="color:#89DDFF;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">services</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddServiceBus</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    builder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Idempotence</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ConnectionStringName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">shuttle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">services</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddSqlIdempotence</span><span style="color:#89DDFF;">();</span></span>\n<span class="line"></span></code></pre></div><p>And the JSON configuration structure:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Shuttle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">ServiceBus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">Idempotence</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">ConnectionStringName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">connection-string-name</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>', 9);
const _hoisted_10 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_10);
}
const sql = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  sql as default
};
