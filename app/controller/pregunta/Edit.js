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
        },

        '!comentario.Edit' : {
          comentarioAceptado : this.comentarioAceptado
        }
    });

    window.dd=this;
		//Mdoc: revisar este patron. para comunicar resultados de una vista/controller hijo, se envian eventos desde su controller
		// sin embargo cuando se comunica hacia un controller hijo, se hace accediendo directamente
    //
    /*
		this.getComentarioEditController().on({
      closed: this.comentarioCancelado,
      comentarioAceptado : this.comentarioAceptado,
      scope : this
    });
    */

		this.callParent(arguments);


  },

	comentarioAceptado : function(panel){
		console.log("refrescamos panel", panel);
    this.cargarDatosIniciales(panel, panel.getViewData().questionId);
	},

	comentarioCancelado : function(){
		console.log("y ahora?");

	},

	crearComentario: function(comp) {
    //Mdoc : obtener datos de la vista que controla este controller
    var panel = comp.up('preguntaEdit');
		//Mdoc accedemos directamente al metodo del controller
		this.getComentarioEditController().crearComentario(panel.getViewData().questionId, panel);

		//Mdoc altenariva, enviando un envento
		//this.getComentarioEditController().fireEvent('crearComentario', panel.getViewData().questionId, panel);

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

	, editarPregunta : function(id){
			var panel = this.crearPregunta();
      panel.setViewData({questionId:id});
      this.cargarDatosIniciales(panel, id);

	},

    //Mdoc : estandarizamos el nombre del método?
  cargarDatosIniciales : function(panel,id){
      am.bo.pregunta.get.exec({
        params:{id : id }
       , success : function(response){
          var record = AM.model.Pregunta.create(response);
          panel.loadRecord(record);
          panel.down('mgrid').getStore().loadData(response.comments);
        }
      });
  },

	 crearPregunta : function(){
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
