define(['base', 'widget'], function(base){

    function Widget() {}

    Widget.prototype.renderUI = function() {
        //todo - implement
    };

    Widget.prototype.bindUI = function() {
        //todo - implement
    };

    Widget.prototype.syncUI = function() {
        //todo - implement
    };

    return {

        Base : base.create('WidgetBase', base.Core, {
            initializer : function() {
                //todo - implement
            },
            destructor : function() {
                //todo - implement
            }
        })
    };
});
