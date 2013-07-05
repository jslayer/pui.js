require.config({
   baseUrl : '../src/'
});

require(['base', 'widget'], function(base, widget) {
    /*console.log(base);

    function Animal() {
        //console.log('Animal');
    }

    Animal.prototype.isAnimal = function() {
        console.log('is animal');
        return this;
    };

    *//**
     * @constructor
     *//*
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
    console.log(r instanceof Rabbit);*/

    //console.log(Widget, new Widget);

    /*window.Widget = widget.Base;
    window.wdt = new widget.Base();*/
    //window.wdb = widget.Base;

    //console.log(new widget.Base());

    var ChildWidget = base.create('ChildWidget', widget.Base, {
        initializer : function(cfg) {
            console.log('lvl 2', this.name, cfg);
        }
    });

    var InnerWidget = base.create('InnerWidget', ChildWidget, {
        initializer : function(cfg) {
            console.log('lvl 3', this.name, cfg);
        }
    });

    /*console.log(new InnerWidget({
        some: 'value'
    }));*/

    var i = new InnerWidget({
        test : 'value'
    });

    console.log(i instanceof InnerWidget);
    console.log(i instanceof ChildWidget);
    console.log(i instanceof widget.Base);

    console.log('------');



});