'use strict';

define(['array'], function() {

    return {
        each : function(a, cb, ctx) {
            var i, length;

            for(i = 0, length = a.length; i < length; i++) {
                cb.call(ctx, a[i]);
            }
        }
    };
});