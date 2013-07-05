define(['pui/base', 'pui/widget'], function(base){
    var Base = base.create('WidgetBase', base.Core, {
        initializer : function() {
            //todo - implement
        },
        destructor : function() {
            //todo - implement
        },
        render : function() {
            if (base.isFunction(this.renderUI)) {
                this.renderUI();
            }
        }
    });

    return {

        Base : Base
    };
});
