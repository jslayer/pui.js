'use strict';

define(['object'], function() {

    return {
        each   : function(o, cb, ctx){
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    cb.call(ctx, o[i], i, o);
                }
            }

            return this;
        },
        extend : function(t, s){
            this.each(s, function(v, k) {
              t[k] = v;
            });
        }
    };
});