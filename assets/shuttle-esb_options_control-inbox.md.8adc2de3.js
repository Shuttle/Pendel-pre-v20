import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app.7c955db8.js";
const __pageData = JSON.parse('{"title":"Control Inbox Options","description":"","frontmatter":{},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]}],"relativePath":"shuttle-esb/options/control-inbox.md"}');
const _sfc_main = { name: "shuttle-esb/options/control-inbox.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="control-inbox-options" tabindex="-1">Control Inbox Options <a class="header-anchor" href="#control-inbox-options" aria-hidden="true">#</a></h1><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">configuration</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ConfigurationBuilder</span><span style="color:#89DDFF;">()</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddJsonFile</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">appsettings.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">Build</span><span style="color:#89DDFF;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">services</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddServiceBus</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    builder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ControlInbox </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ControlInboxOptions</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        WorkQueueUri </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">queue://configuration/control-inbox-work</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        ErrorQueueUri </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">queue://configuration/control-inbox-error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        ThreadCount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        DurationToSleepWhenIdle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TimeSpan</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">            TimeSpan</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">FromMilliseconds</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">250</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">            TimeSpan</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">FromSeconds</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">            TimeSpan</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">FromSeconds</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        DurationToIgnoreOnFailure </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TimeSpan</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">            TimeSpan</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">FromSeconds</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">            TimeSpan</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">FromSeconds</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        MaximumFailureCount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">};</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// or bind from configuration</span></span>\n<span class="line"><span style="color:#A6ACCD;">    configuration</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetSection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ServiceBusOptions</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SectionName</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Bind</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">builder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Options</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"><span style="color:#89DDFF;">})</span></span>\n<span class="line"></span></code></pre></div><p>The default JSON settings structure is as follows:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Shuttle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">ServiceBus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">ControlInbox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">WorkQueueUri</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">queue://configuration/control-inbox-work</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">ErrorQueueUri</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">queue://configuration/control-inbox-error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">ThreadCount</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">DurationToSleepWhenIdle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">00:00:00.250</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">00:00:10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">00:00:30</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">DurationToIgnoreOnFailure</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">00:30:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">01:00:00</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">],</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">MaximumFailureCount</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h2><table><thead><tr><th>Option</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>ThreadCount</td><td>5</td><td>The number of worker threads that will service the work queue.</td></tr><tr><td>DurationToSleepWhenIdle</td><td>250ms*4,500ms*2,1s,5s</td><td>A list of <code>TimeSpan</code> instances. Each successive idle processing run will move to the next entry in the list; resets as soon as a message is processed.</td></tr><tr><td>DurationToIgnoreOnFailure</td><td>30s,2m,5m</td><td>A list of <code>TimeSpan</code> instances. Each failure will move to the next entry.</td></tr><tr><td>MaximumFailureCount</td><td>5</td><td>The maximum number of failures that are retried before the message is moved to the error queue if there is one and the queue is not a stream; else the message is released.</td></tr></tbody></table>', 6);
const _hoisted_7 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_7);
}
const controlInbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  controlInbox as default
};
