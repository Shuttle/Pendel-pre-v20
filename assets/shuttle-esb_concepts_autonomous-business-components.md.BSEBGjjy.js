import{_ as e,c as s,o as t,a4 as i}from"./chunks/framework.HjHqGs9w.js";const g=JSON.parse('{"title":"Autonomous Business Component","description":"","frontmatter":{},"headers":[],"relativePath":"shuttle-esb/concepts/autonomous-business-components.md","filePath":"shuttle-esb/concepts/autonomous-business-components.md"}'),n={name:"shuttle-esb/concepts/autonomous-business-components.md"},o=i('<h1 id="autonomous-business-component" tabindex="-1">Autonomous Business Component <a class="header-anchor" href="#autonomous-business-component" aria-label="Permalink to &quot;Autonomous Business Component&quot;">​</a></h1><p>With any system it is advisable to isolate tasks and decouple them. In this way each can be implemented independently and versioned independently. By using a specific endpoint / queue to handle a particular message type you have the ability to send a relevant message for processing at any time.</p><p>For example, in a tightly-coupled system you may have a process that registers a new user. So after gathering the user information from some front-end the information is submitted for processing:</p><ul><li>check if the user is deny-listed</li><li>register the user in the database</li><li>send an activation e-mail</li></ul><p>If this is done in a synchronous fashion the user presses the <em>submit</em> button and waits. Let&#39;s assume our mail server has gone down. Now the user cannot register. What&#39;s more is that sending e-mail by using our shared smtp server takes a couple of seconds so during periods of heavy traffic this process takes quite some time.</p><p>We could change this process to gather the user information from the front-end and submit it for registration by sending a <em>RegisterUser</em> to our user service. The call returns immediately informing the user that there registration request has been received and they will be contact with the result via e-mail. Now our process will be as follows (autonomous components indicated by <em>AC</em>):</p><ul><li><p>User Registration Service (AC) - handles <em>RegisterUser</em></p><ul><li>check deny-listing</li><li>if user deny-listed send <em>SendEMail</em> to then e-mail service (AC) to notify user that the details provided (user name / e-mail address / contact numbers) have been deny-listed.</li><li>if not deny-listed register user in database and send <em>SendEMail</em> to the e-mail server (AC) and publishes <em>UserRegistered</em>.</li></ul></li><li><p>E-Mail Service (AC) - handles <em>SendEMail</em></p><ul><li>sends the requested e-mail via our smtp server; if the server is down the message will simply be retried until it goes through</li></ul></li><li><p>CRM User Registration Service (AC) - subscribes to <em>UserRegistered</em></p><ul><li>registers the new user in our CRM system</li></ul></li></ul><p>In this way each component can be developed, versioned, and deployed in isolation. Stopping any of the services for deployment would not result in any process breaking since the queues will continue receiving work. Even if the entire machine is brought down Shuttle.Esb will still store message on the sending machine when using an outbox.</p>',8),a=[o];function r(l,u,m,d,h,c){return t(),s("div",null,a)}const f=e(n,[["render",r]]);export{g as __pageData,f as default};
