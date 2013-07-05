define(['base', 'widget'], function(base){

    function Widget() {}

    Widget.prototype.renderUI = function() {

    };

    Widget.prototype.bindUI = function() {

    };

    Widget.prototype.syncUI = function() {

    };

    return {

        Base : base.create('WidgetBase', base.Core, {
            initializer : function(cfg) {
                console.log('lvl 1', this.name, cfg);
                //debugger;
            },
            destructor : function() {
                console.log('DES');
            }
        })
    };
});
