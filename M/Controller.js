/*
 * Mdoc: obtiene un manager y lo inicializa si no est� inicializado
 * Mdoc: los manager ser�n singleton
 * */
Ext.define('M.Controller', {
    extend: 'Ext.app.Controller',
		

		constructor : function(){
			console.log("M.Controller constructor:...");
			this.callParent(arguments);
			console.log("M.Controller constructor:"+this.id);
			this.viewId = Ext.id(null,'viewId');

      var _controller=this;
      if (this.refs){
        Ext.each(this.refs, function(ref){
          _controller['get'+Ext.String.capitalize(ref.ref)] = function(comp){
            if (!comp){
              console.error("Has llamado al getter : this.get"+Ext.String.capitalize(ref.ref)+" sin pasar un componente como parametro"); 
            }
            return comp.up(ref.parent).down(ref.selector);
          }
        });
      }

			if (this.controllers){
				Ext.each(this.controllers, function(name){
					var getterName='get'+Ext.String.capitalize(name.replace(/\./g,''))+'Controller';
					console.log("creating getter : "+getterName);
					_controller[getterName] = function(){
						return _controller.getController(name);
					}
				});
			}
		},

		init : function(){
			console.log("M.controller init:"+this.id);
			this.callParent(arguments);
		},

		getController : function(){
				var ctrl = this.callParent(arguments);
				if (!ctrl.initialized){
					ctrl.init();
					ctrl.initialized=true;
				}
				return ctrl;
		}

	, getViewData : function(comp, xtype){
		 var view = comp.up(xtype);
		 return view.getViewData();
	}	

	, addPanel : function(viewId){
			var panel = this.getView(viewId).create();
			panel.viewData = {};
			panel.getViewData = function(){ return panel.viewData; }
			M.addTab(panel);
			return panel;
	}
});