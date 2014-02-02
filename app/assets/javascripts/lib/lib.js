define(['lib/UseYUI!node'], function (Y) {
    return {
        getBody: function () {
            return Y.one('body');
        }
    }
});
