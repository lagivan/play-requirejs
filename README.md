# lagivan/play-requirejs-yui

This project is based on [baratox/play-requirejs](https://github.com/baratox/play-requirejs) with the intention to demonstrate the support of YUI with RequireJS. Javascript minification and uglification happens when running in prod mode as expected. Only YUI dependencies are taken care of by YUI itself instead of RequireJS.

Changes:
* Added YUI support using modified version of [WilcoFiers/UseYUI-for-RequireJS](https://github.com/WilcoFiers/UseYUI-for-RequireJS).
* Removed jQuery, Backbone.js and Underscore.js.
* Replaced separate RequireJS with Play Framework built-in support (using @helper.requireJs).
* Upgraded to the latest Play Framework 2.2.1 version (including the replacement of Build.scala by build.sbt).

## Running and building

To start the application in development mode, run:

    play run

To start in production mode, run:

    play start
