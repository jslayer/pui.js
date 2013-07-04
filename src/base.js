/**
 * TODO - implement the following
 * - one, all - DOM selectors
 * - array extras (?)
 * - class base
 * - widget's base
 * - event system
 */
'use strict';

define(['object','base'], function(O){

        return {
            create : function(name, P, px, sx){
                var _i, C;

                if (px && px.hasOwnProperty('constructor')) {
                    C = px.constructor;
                }
                else {
                    C = function(){
                        return P.apply(this, arguments);
                    };
                }

                O.extend(C, P);

                var F = function(){ this.constructor = C; };

                F.prototype = P.prototype;
                C.prototype = new F;

                O.extend(C, sx);
                O.extend(C.prototype, px);

                C.name = name;
                C.__super__ = P.prototype;

                return C;
            }
        };
    });