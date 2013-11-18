exus
====

##ExpressJs rendering backend for Umbraco

It checks the requested URL and gets the corresponding content (for that path) as an object from Umbraco, via the Tapas package.
It also gets the Template (Id) for that URL and renders a jade view for that TemplateId.

It replaces the MVC part in Umbraco and much needs to be done, but it works with the most basic functionality : render the right document content based on url and the right view based on the document template.

(The Backend Umbraco UI is not changed.)

##What about getting data cross http vs using edge.js?

I would like to use edgejs for this, to be able to get the best performance. However, I haven't figured out how to do that in a good way, 
since the backend runs in a pure .net process, and updates after publish only happens there. The node.js with edge.js would run in the v8 process,
and therefore would not see the publish event. Therefore, in my approach I call the .net process over http to get the latest version of the published data.

https://github.com/tjanczuk/edge/wiki/Performance shows 1.4 ms latency with this kind of call. With in-process the latency would be 32 times as small. 

Still - 1.4 ms is not much, and probably one of the least expensive parts of the web request, which usally take about 100 times as long time to complete.

Very rough numbers, but I think they are valid for comparisons.


###Requirements

Umbraco 6* with Tapas for rest request for published content

Express, Jade and Restler installed from NPM

###Setup

Jade Views in /Views folder, stored with the Template Id (as a temporary workaround - Template Name is not stored in the published content and requires a database hit).

So for example 1046.jade is the template view for the Homepage template
And 1047.jade is the view for the Textpage template

###Sample

Basic running sample at https://exus-playground.azurewebsites.net

###Up next

* locallink and media from the rich text editor
* Sample navigation "macro"


