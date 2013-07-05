'use strict';

define(['array'], function() {
    //todo - implement array extras
    return {
        each : function(a, cb, ctx) {
            var i, length;

            for(i = 0, length = a.length; i < length; i++) {
                cb.call(ctx, a[i]);
            }
        }
    };
});