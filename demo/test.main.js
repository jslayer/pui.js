require.config({
   baseUrl : '../src/'
});

require(['base', 'widget'], function(base, widget) {
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

    var i = new InnerWidget({
        test : 'value'
    });

    console.log(i instanceof InnerWidget);
    console.log(i instanceof ChildWidget);
    console.log(i instanceof widget.Base);

    console.log('------');

    var c = new ChildWidget({
        some: 'other'
    });

    console.log(c instanceof InnerWidget);
    console.log(c instanceof ChildWidget);
    console.log(c instanceof widget.Base);
});