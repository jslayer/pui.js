/**
 * TODO - implement the following
 * - one, all - DOM selectors
 * - array extras (?)
 * - class base
 * - widget's base
 * - event system
 */
'use strict';

define(['object', 'array', 'base'], function(O, A){
    function Core(){
        var _init = [],
            link = this;

        while(link) {
            if (typeof link.initializer === 'function') {
                link.initializer.apply(this, arguments)
            }
            link = link.constructor.__super__;
        }
    }

    return {
        create : function(name, P, px, sx){
            var C, F;

            F = function() {};

            if (px && px.hasOwnProperty('constructor')) {
                C = px.constructor;
            }
            else {
                C = function(){
                    P.apply(this, arguments);
                };
            }

            F.prototype = P.prototype;
            C.prototype = new F();

            O.extend(C, sx);
            O.extend(C.prototype, px);

            C.__super__ = P.prototype;
            C.prototype.constructor = C;
            C.prototype.name = name;

            return C;
        },
        Core : Core
    };
});