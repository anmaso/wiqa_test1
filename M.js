M = {};

M.Ext = {
	setApplication : function(app){
			this.app=app;
	}
	,getApplication : function(){
		return this.app;
	}
};

/**
 * metodos relacionados con los controller de ExtJS
 * */
/*
M.controller = {
	get : function(id){
		var ctrl = M.Ext.getApplication().getController(id);
		if (!ctrl.initialized) {
			ctrl.init();
			ctrl.initialized=true;
		}
		return ctrl;
	}
};
*/


Ext.onReady(function(){

  for(var opName in M.operations){
    var bo=Ext.ns(opName);
		var op = M.operations[opName];
    bo.proxy = new Ext.data.proxy.Ajax({
      url : 'data/'+opName+'.json',
      reader: {
          type: 'json',
          root: 'results',
          successProperty: 'success'
      }
    });

		bo.schema = op.schema;

		bo.exec = function(opts){
      opts = opts || {};
			var validation = JSONSchema.validate(opts.params, this.schema);
			console.warn(validation);
			if (!validation.valid){
				var msg=[];
				Ext.each(validation.errors, function(err){
					msg.push('<b>'+err.property+'</b> : '+err.message);
				});
				console.error(validation);
				Ext.MessageBox.show({
					title : 'Error parametros de envio',
					msg : msg.join('<br/>'),
					buttons : Ext.Msg.OK
				});
        return;
			}
      Ext.Ajax.request({
        url : 'data/'+opName+'.json',
        method : 'GET',
        params : opts.params,
        success : function(response){
          var data, results;
          if (!opts.success) return;

          if (response.responseText){
            data = Ext.JSON.decode(response.responseText);
          }

          if (data.success){
            opts.success(data.results);
          }
        }
      });
		}
  }
});


M.addTab = function(panel, data){
	if (!(panel instanceof Ext.Component)){
		panel = new panel;
	}
	var contenido = Ext.getCmp('contenido');
	contenido.add(panel);
	contenido.setActiveTab(panel);

	return panel;
};

M.getController = function(id){
	var ctrl = jj;
};


M.log = function(level, args){
	if (level>M.log.level){
		console.log(arguments.slice(1));
	}
};

M.log.levels = {
	TRACE : 0, 
	DEBUG : 1,
	INFO  : 2,
	WARN  : 3,
	ERROR : 4
};

M.log.level=M.log.levels.TRACE;


