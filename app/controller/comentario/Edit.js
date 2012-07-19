Ext.define('AM.controller.comentario.Edit', {
	extend : 'M.Controller',
	views : ['AM.view.comentario.Edit'],

  //Mdoc : ejemplo de variable --> fijamos una nomenclatura? _questionId ?
  questionId : -1,

	init : function(){
		this.control({
			'comentarioEdit [action="guardar"]' : {
				click : this.aceptar
			},
			'comentarioEdit [action="cancelar"]' : {
				click : this.cancelar
			}
		});
	},

	crearComentario : function(questionId){
		this.questionId=questionId;
		var panel=this.addPanel('comentario.Edit');
		return panel;
	},

	editarComentario : function(record){
		var panel = this.crearComentario();
		//en este caso los datos del comentario vienen TODOS de la pantalla anterior, no necesitamos hacer llamada al servidor
	},

	borrarComentario : function(){
	},

	aceptar : function(comp){
		var params = comp.up('window').down('form').getValues();
		Ext.apply(params, {questionId : this.questionId});
		am.bo.comentario.create.exec({
			params : params,
			success : function(){
			}
		});
	},

	cancelar : function(cmp){
			cmp.up('window').close();
			this.fireEvent('closed');
	}

});


