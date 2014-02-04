require([
    'lib/lib', 'controller/c1', 'model/m1', 'lib/UseYUI!node'
], function (lib, controller, model, Y) {
    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    controller.render(lib.getBody());

    //Display backbone and underscore versions
    Y.one('body')
        .append('<div>YUI version: ' + Y.version + '</div>')
});
