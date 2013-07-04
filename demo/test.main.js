require.config({
   baseUrl : '../src/'
});

require(['base'], function(base) {
    console.log(base);

    function Animal() {
        //console.log('Animal');
    }

    Animal.prototype.isAnimal = function() {
        console.log('is animal');
        return this;
    };

    /**
     * @constructor
     */
    var Rabbit = base.create('rabbit', Animal, {
        isRabbit : function() {
            console.log('is rabbit');
            return this;
        },
        live : true
    }, {
        attrs : [1,2,3]
    });

    var r = new Rabbit;

    window.r = r;

    console.log(r);
    console.log(r instanceof Animal);
    console.log(r instanceof Rabbit);

});