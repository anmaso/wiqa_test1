Ext.define('AM.controller.pregunta.List', {
    extend: 'M.Controller',

    models: ['Pregunta'],
    stores: ['Preguntas'],

    views: ['pregunta.Edit', 'pregunta.List'],

		//Mdoc: para hacer referencias a otros controllers definirlo siempre en métodos, no hacer el M.controller.get directamente
		getPreguntaEditController : function(){
			return this.getController('pregunta.Edit');
		},


    //Mdoc : introducimos el parametro "parent" para que las referencias sean relativas, 
    //los getter (this.getPregunta) necesitarán un componente para subir hasta la vista 
    refs : [
      { ref : 'pregunta', selector : '[name="pregunta"]', parent : 'preguntaList' }
      ,{ ref : 'respuesta', selector : '[name="respuesta"]', parent : 'preguntaList' }
      ,{ ref : 'preguntas', selector : 'dataview', parent : 'preguntaList' }
    ],

    init: function() {
			console.log('controller.pregunta.List init');

			this.control({
					'preguntaList dataview': {
							itemdblclick: this.editarPregunta
					},
					'preguntaList [action=crearPregunta]': {
							click: this.crearPregunta
					},
					'preguntaList [action=borrarPregunta]': {
							click: this.borrarPregunta
					},

					'preguntaList [action=buscar]': {
							click: this.buscar
					},
					'preguntaList [action=limpiar]': {
							click: this.limpiar
					}
			});
			this.callParent(arguments);
    },


    limpiar : function(comp){

      this.getPregunta(comp).reset();
      this.getRespuesta(comp).reset();


      return;
      //alternativa: hacer referencia manualmente a los controles
      var view = comp.up('preguntaList');
      //Ext.each(view.query('textfield'), function(){ this.reset(); });
      view.down('[name="pregunta"]').reset();
      view.down('[name="respuesta"]').reset();
     
    },

    buscar : function(comp){
      var pregunta = this.getPregunta(comp).getValue();
      var respuesta = this.getRespuesta(comp).getValue();
      var store = this.getPreguntas(comp).getStore();

      if (!pregunta && !respuesta){
        store.clearFilter();
      }else{
        store.filter( function(rec){
          return (pregunta && rec.get("question").indexOf(pregunta)>=0) || ( respuesta && rec.get("answer").indexOf(respuesta)>=0);
        });
      }
    },


		//Mdoc : metodo estandarizado para crear una vista a partir de un controller
		getPanel : function(){
         return this.getView('pregunta.List');
		},

    //Mdoc: es responsabilidad de este controller mostrarse en el panel?? o es del padre?
    preguntaList : function(){
      this.addPanel('pregunta.List');
    },

		borrarPregunta : function(grid, record){
        this.getPreguntaEditController().borrarPregunta(record.get("id"));
        //Mdoc alternativa 1 , pasar el record al otro controller
        // mejor un controller no dependa de datos de pantalla (record) de otro controller, mejor pasar datos básicos o un dto nuevo
        //this.getPreguntaEditController().borrarPregunta(record);
		},


    editarPregunta : function(grid, record) {
        this.getPreguntaEditController().editarPregunta(record.get("id"));
    }
    
    ,crearPregunta : function(grid, record) {
        this.getPreguntaEditController().crearPregunta();
    }

});
