require([
    'lib/lib', 'controller/c2', 'model/m2'
], function (lib, controller, model) {
    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    controller.render(lib.getBody());
});
