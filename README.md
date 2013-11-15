exus
====

##ExpressJs rendering backend for Umbraco

It checks the requested URL and gets the corresponding content (for that path) as an object from Umbraco, via the Tapas package.
It also gets the Template (Id) for that URL and renders a jade view for that TemplateId.

###Requirements

Umbraco 6* with Tapas for rest request for published content

Express, Jade and Restler installed from NPM

###Setup

Jade Views in /Views folder, stored with the Template Id (as a temporary workaround - Template Name is not stored in the published content and requires a database hit).

So for example 1046.jade is the template view for the Homepage template
And 1047.jade is the view for the Textpage template

###Sample

Basic running sample at https://exus-playground.azurewebsites.net

