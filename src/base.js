/**
 * TODO - implement the following
 * - one, all - DOM selectors
 * - array extras (?)
 * - class base
 * - widget's base
 * - event system
 */
'use strict';
define(['base'], function() {
    return {
        create : function(name, P, px, sx) {
            var C;

            if (px && px.hasOwnProperty('constructor')) {
                C = px.constructor;
            }
            else {
                C = function() {
                  return P.apply(this, arguments);
                };
            }

            var _i;
            
            for (_i in P) {
                if (P.hasOwnProperty(_i)) {
                    C[_i] = P[_i];
                }
            }
            
            var F = function() {
              this.constructor = C;
            };
            
            F.prototype = P.prototype;

            C.prototype = new F;

            for (_i in sx) {
                if (sx.hasOwnProperty(_i)) {
                    C[_i] = sx[_i];
                }
            }

            for (_i in px) {
                if (px.hasOwnProperty(_i)) {
                    C.prototype[_i] = px[_i];
                }
            }

            C.name = name;

            C.__super__ = P.prototype;

            return C;
        }
    };
});