import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createStaticVNode } from "./app.7c955db8.js";
const __pageData = JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":3,"title":"Send a command message for processing","slug":"send-a-command-message-for-processing","link":"#send-a-command-message-for-processing","children":[]},{"level":3,"title":"Publish an event message when something interesting happens","slug":"publish-an-event-message-when-something-interesting-happens","link":"#publish-an-event-message-when-something-interesting-happens","children":[]},{"level":3,"title":"Subscribe to those interesting events","slug":"subscribe-to-those-interesting-events","link":"#subscribe-to-those-interesting-events","children":[]},{"level":3,"title":"Handle any messages","slug":"handle-any-messages","link":"#handle-any-messages","children":[]}],"relativePath":"shuttle-esb/guide/getting-started.md"}');
const _sfc_main = { name: "shuttle-esb/guide/getting-started.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><p>Start a new <strong>Console Application</strong> project and select a Shuttle.Esb queue implementation from the supported queues:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">PM&gt; Install-Package Shuttle.Esb.AzureStorageQueues</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>We&#39;ll also make use of the <a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/generic-host" target="_blank" rel="noreferrer">.NET generic host</a>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">PM&gt; Install-Package Microsoft.Extensions.Hosting</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Next we&#39;ll implement our endpoint in order to start listening on our queue:</p><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">internal</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Program</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Main</span><span style="color:#89DDFF;">()</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        Host</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CreateDefaultBuilder</span><span style="color:#89DDFF;">()</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ConfigureServices</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                services</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddServiceBus</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                    builder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Inbox</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">WorkQueueUri </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">azuresq://azure/work</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">                services</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddAzureStorageQueues</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                    builder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddOptions</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">azure</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AzureStorageQueueOptions</span></span>\n<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                        ConnectionString </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UseDevelopmentStorage=true;</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">});</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">});</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">})</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Build</span><span style="color:#89DDFF;">()</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Run</span><span style="color:#89DDFF;">();</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>Even though the options may be set directly as above, typically one would make use of a configuration provider:</p><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">internal</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Program</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Main</span><span style="color:#89DDFF;">()</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        Host</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CreateDefaultBuilder</span><span style="color:#89DDFF;">()</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ConfigureServices</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">configuration</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ConfigurationBuilder</span><span style="color:#89DDFF;">()</span></span>\n<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddJsonFile</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">appsettings.json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Build</span><span style="color:#89DDFF;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">                services</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddSingleton</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IConfiguration</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">configuration</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">                services</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddServiceBus</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                    configuration</span></span>\n<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetSection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ServiceBusOptions</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SectionName</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Bind</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">builder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Options</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">                services</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddAzureStorageQueues</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                    builder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddOptions</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">azure</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AzureStorageQueueOptions</span></span>\n<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">                        ConnectionString </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> configuration</span></span>\n<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetConnectionString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">azure</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">});</span></span>\n<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">});</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">})</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Build</span><span style="color:#89DDFF;">()</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Run</span><span style="color:#89DDFF;">();</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>The <code>appsettings.json</code> file would be as follows:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">ConnectionStrings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">azure</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UseDevelopmentStorage=true;</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Shuttle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">ServiceBus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">Inbox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">WorkQueueUri</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">azuresq://azure/work</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="send-a-command-message-for-processing" tabindex="-1">Send a command message for processing <a class="header-anchor" href="#send-a-command-message-for-processing" aria-hidden="true">#</a></h3><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">bus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Send</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RegisterMember</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    UserName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user-name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    EMailAddress </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user@domain.com</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">});</span></span>\n<span class="line"></span></code></pre></div><h3 id="publish-an-event-message-when-something-interesting-happens" tabindex="-1">Publish an event message when something interesting happens <a class="header-anchor" href="#publish-an-event-message-when-something-interesting-happens" aria-hidden="true">#</a></h3><p>Before publishing an event one would need to register an <code>ISubscrtiptionService</code> implementation such as <a href="/shuttle-esb/implementations/subscription/sql.html">Shuttle.Esb.Sql.Subscription</a>.</p><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">bus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Publish</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MemberRegistered</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    UserName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user-name</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">});</span></span>\n<span class="line"></span></code></pre></div><h3 id="subscribe-to-those-interesting-events" tabindex="-1">Subscribe to those interesting events <a class="header-anchor" href="#subscribe-to-those-interesting-events" aria-hidden="true">#</a></h3><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">services</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddServiceBus</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">builder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    builder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddSubscription</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MemberRegistered</span><span style="color:#89DDFF;">&gt;();</span></span>\n<span class="line"><span style="color:#89DDFF;">});</span></span>\n<span class="line"></span></code></pre></div><h3 id="handle-any-messages" tabindex="-1">Handle any messages <a class="header-anchor" href="#handle-any-messages" aria-hidden="true">#</a></h3><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RegisterMemberHandler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IMessageHandler</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RegisterMember</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RegisterMemberHandler</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IDependency</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">dependency</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ProcessMessage</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IHandlerContext</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RegisterMember</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">context</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// perform member registration</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">		context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Publish</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MemberRegistered</span></span>\n<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">			UserName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Message</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">UserName</span></span>\n<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">});</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MemberRegisteredHandler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IMessageHandler</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MemberRegistered</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ProcessMessage</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">IHandlerContext</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MemberRegistered</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">context</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// processing</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div>', 21);
const _hoisted_22 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_22);
}
const gettingStarted = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gettingStarted as default
};
