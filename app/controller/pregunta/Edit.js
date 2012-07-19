Ext.define('AM.controller.pregunta.Edit', {
  extend: 'M.Controller',

  stores: ['Categorias', 'Comentarios'],

  //Mdoc : creamos el getter getComentarioEditController automaticamente
	controllers : [ 'comentario.Edit' ], 

  init : function(){
    console.log("EditUser init "+this.id+ " "+this.itemId);

    this.control({
        'preguntaEdit [action=guardar]': {
            click: this.guardar
        },
        'preguntaEdit [action=cancelar]': {
            click: this.cancelar
        },

				//Mdoc: este patron captura todos los eventos de los hijos
        'preguntaEdit *': {
            crearComentario: this.crearComentario,
            editarComentario: this.editarComentario,
            borrarComentario: this.borrarComentario
        }
    });

		this.getComentarioEditController().on('closed', this.comentarioCancelado);

		this.callParent(arguments);


  },

	comentarioCancelado : function(){
		console.log("y ahora?");

	},

	crearComentario: function(comp) {
		this.getComentarioEditController().crearComentario();
	},

	editarComentario: function(comp) {
		this.getComentarioEditController().editarComentario();
	},

	borrarComentario: function(comp) {
		this.getComentarioEditController().borrarComentario();
	},

    guardar: function(comp) {
        var form    = comp.up('preguntaEdit'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        form.close();
    }

	, preguntaEdit : function(record){
			var panel = this.preguntaCreate();

      am.bo.pregunta.get.exec({
        params:{id : record.get("id") }
       , success : function(response){
          var record = AM.model.Pregunta.create(response);
          panel.loadRecord(record);
          panel.down('mgrid').getStore().loadData(response.comments);
        }
      });

	},

	 preguntaCreate : function(){
			var panel = this.addPanel('pregunta.Edit');
      return panel;
	},

	 addClick : function(comp,event,data){
		var viewData = this.getViewData(comp,'useredit');
		if (viewData.countClick===undefined){
			viewData.countClick=0;
		}
		viewData.countClick+=1;
		comp.setText('addClick ' +viewData.countClick); 
	}
});
