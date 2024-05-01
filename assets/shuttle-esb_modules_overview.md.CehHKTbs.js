import{_ as e,c as t,o,a4 as s}from"./chunks/framework.HjHqGs9w.js";const _=JSON.parse('{"title":"Modules","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-esb/modules/overview.md","filePath":"shuttle-esb/modules/overview.md"}'),a={name:"shuttle-esb/modules/overview.md"},r=s('<h1 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;Modules&quot;">​</a></h1><p>More information on the pipelines infrastructure can be obtained in the <a href="https://shuttle.github.io/shuttle-core/infrastructure/shuttle-core-pipelines.html" target="_blank" rel="noreferrer">Shuttle.Core.Pipelines</a> documentation.</p><p>Shuttle.Esb is, therefore, also extensible via modules. These plug into a relevant pipeline to perform additional tasks within the pipeline by registering one or more observers that respond to the events raised by the pipeline.</p><p>Each pipeline has state that contains various name/value pair items. You can add any state and there are some extensions on the state that return various well-known items such as <code>GetTransportMessage()</code> that returns the <code>TransportMessage</code> on the pipeline. Prior to deserializing the transport message it will, of course, be <code>null</code>.</p><p>The easiest way to add a module is to create a <a href="https://learn.microsoft.com/en-us/dotnet/core/extensions/timer-service" target="_blank" rel="noreferrer">Hosted Service</a> that has a constructor dependency of type <code>IPipelineFactory</code>. Please reference any of the existing modules to gain better insight into the implementation of a custom module.</p>',5),n=[r];function i(l,c,d,h,p,u){return o(),t("div",null,n)}const f=e(a,[["render",i]]);export{_ as __pageData,f as default};
