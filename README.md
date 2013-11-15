exus
====

ExpressJs rendering backend for Umbraco

It works with this basic setup:

Umbraco 6* with Tapas for rest request for published content

Express, Jade and Restler installed from NPM

Jade Views in /Views folder, stored with the Template Id as a temporary workaround - Template Name is not stored in the published content and requires a database hit

So for example 1046.jade is the template view for the Homepage template
And 1047.jade is the view for the Textpage template

Sample at https://exus-playground.azurewebsites.net

