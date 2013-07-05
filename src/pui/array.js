'use strict';

define(['pui/array'], function(){
    //todo - implement array extras
    return {
        each   : function(a, cb, ctx){
            var i, length;

            for (i = 0, length = a.length; i < length; i++) {
                cb.call(ctx, a[i]);
            }
        },
        isEmpty : function(o) {
          return !o.length;
        },
        map    : function(){
            //todo - implement
        },
        filter : function(){
            //todo - implement
        },
        sort   : function(){
            //todo - implement
        },
        some   : function(){
            //todo - implement
        },
        invoke : function(){
            //todo - implement
        }
    };
});
