/*jslint nomen: true */
/*global define, YUI */

/**
 * UseYUI is a plugin for RequireJS, that let's you load YUI 3 into
 * requireJS application.
 *
 * By coma seperating the module names you want YUI to preload
 * you can chain multiple YUI dependencies to a single instance of YUI.
 * Example: require(['UseYUI!node,anim'], function (Y) {
 *    // Do stuff with Y.anim and YUI node
 * }
 *
 * If you only want to load the core simply request UseYUI!YUI.
 *
 * You can either load YUI before requiring modules, or use the config
 * options in RequireJS to load YUI for you. The same RequireJS config
 * property also allows you to pass a config option to YUI. Use either
 * one of the following methods:
 * require({YUI : 'yui-min.js', ...); OR:
 * require({YUI : { src : 'yui-min.js', more_yui_config: 'here'} ... );
 *
 * @version   0.1
 * @author    Wilco Fiers <wilco@wilcofiers.com>
 * @license   New BSD License
 * @copyright Wilco Fiers, 2011
 */
define([ "YUI" ], function (YUI) {
    "use strict";

    // because it's easier then typeof, and undefined isn't allowed in ES5
    var Y;

    function loadModule(name, load) {
        if (name === 'yui') {
            load(Y);
        } else {
            var useParams = name.split(',');

            // Add a callback for Y.use as the end of useParams
            useParams.push(function (Y) {
                // tell RequireJS Y has been loaded
                load(Y);
            });

            // apply useParams to Y.use
            Y.use.apply(Y, useParams);
        }
    }

    return {
        load: function (name, req, load, config) {
            if (YUI === undefined) {
                // Required to make PROD optimizations work without YUI
                load();
            } else {
                if (Y === undefined)
                    Y = YUI(config.YUI);

                loadModule(name, load);
            }
        }
    };
});