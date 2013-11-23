exus
====

##ExpressJs rendering backend for Umbraco

####Status: a play project - far, far away from a stable solution I'd run for a client.

It checks the requested URL and gets the corresponding content (for that path) as an object from Umbraco, via the Tapas package.
It also gets the Template (Id) for that URL and renders a jade view for that TemplateId.

It replaces the MVC part in Umbraco and much needs to be done, but it works with the most basic functionality : render the right document content based on url and the right view based on the document template.

(The Backend Umbraco UI is not changed, editor is good old Umbraco, and so is the Businesslogic and Data layer. Even the router is used, but I use another router on the express site.)

_The active part of "Exus" is only 16 lines of code: https://github.com/joeriks/exus/blob/master/server.js_

See a running sample live at https://exus-playground.azurewebsites.net

##What about getting data cross http vs using edge.js?

I would like to use edgejs for this, to be able to get the best performance. However, I haven't figured out how to do that in a good way, 
since the backend runs in a pure .net process, and updates after publish only happens there. The node.js with edge.js would run in the v8 process,
and therefore would not see the publish event. Therefore, in my approach I call the .net process over http to get the latest version of the published data.

https://github.com/tjanczuk/edge/wiki/Performance shows 1.4 ms latency with this kind of call. With in-process the latency would be 32 times as small. 

Still - 1.4 ms is not much.

For a complete request on my current Azure playground site I get times at usually 15-30 ms (when I'm alone requesting the site and after first warmup call which takes a bit longer ~150, and that is for Umbraco and not the node part).

Total request time is usually about 150ms after that first one. And it includes the Umbraco part.

Very rough numbers, but I think they are valid for comparisons.

###Requirements

Umbraco 6* with Tapas for rest request for published content

Express, Jade and Restler installed from NPM

###Setup

Jade Views in /Views folder, stored with the Template Id (as a temporary workaround - Template Name is not stored in the published content and requires a database hit).

So for example 1046.jade is the template view for the Homepage template
And 1047.jade is the view for the Textpage template


###Up next

* Move to Kraken by Paypal & Dustjs by Linkedn
* locallink and media from the rich text editor
* Sample navigation "macro"
