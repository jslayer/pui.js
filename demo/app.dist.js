define("pui/object",["pui/object"],function(){return{each:function(e,t,n){for(var r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,e);return this},extend:function(e,t){this.each(t,function(t,n){e[n]=t})}}}),define("pui/array",["pui/array"],function(){return{isEmpty:function(e){return!e.length},invoke:function(){}}}),define("pui/base",["pui/object","pui/array","pui/base"],function(e,t){function n(){var e=[],t=this;while(t)typeof t.initializer=="function"&&t.initializer.apply(this,arguments),t=t.constructor.__super__}return{create:function(t,n,r,i){var s,o;return o=function(){},r&&r.hasOwnProperty("constructor")?s=r.constructor:s=function(){n.apply(this,arguments)},o.prototype=n.prototype,s.prototype=new o,e.extend(s,i),e.extend(s.prototype,r),s.__super__=n.prototype,s.prototype.constructor=s,s.prototype.name=t,s},isArray:function(e){return Object.prototype.toString.call(e)==="[object Array]"},isFunction:function(e){return Object.prototype.toString.call(e)==="[object Function]"},Core:n}}),define("pui/widget",["pui/base","pui/widget"],function(e){var t=e.create("WidgetBase",e.Core,{initializer:function(){},destructor:function(){},render:function(){e.isFunction(this.renderUI)&&this.renderUI()}});return{Base:t}}),require.config({baseUrl:"../src/"}),define("app",["app","pui/base","pui/widget"],function(e,t){var n=e.create("ChildWidget",t.Base,{initializer:function(e){console.log("lvl 2",this.name,e)}})});