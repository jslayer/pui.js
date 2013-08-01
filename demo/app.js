require.config({
    baseUrl : '../src/'
});

define(['app', 'pui/base', 'pui/widget'], function(base, widget) {
    var ChildWidget = base.create('ChildWidget', widget.Base, {
        initializer : function(cfg) {
            console.log('lvl 2', this.name, cfg);
        }
    });
});
