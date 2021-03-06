Ext.define('AM.controller.comentario.Edit', {
    extend:'M.Controller',
    views:['AM.view.comentario.Edit'],

    //Mdoc : ejemplo de variable --> fijamos una nomenclatura? _questionId ?
    questionId:-1,

    init:function () {
        this.control({
            'comentarioEdit [action="guardar"]':{
                click:this.aceptar
            },
            'comentarioEdit [action="cancelar"]':{
                click:this.cancelar
            }
        });
    },

    crearComentario:function (questionId, callerCmp) {
        var panel = this.addPanel('comentario.Edit');
        //Mdoc : como esta pantalla va a ser SingleView, podemos almacenar datos en "this".
        this.questionId = questionId;
        //Mdoc : pero es mejor si estandarizamos y almacenamos los datos en el panel de la visat
        panel.setViewData({callerCmp:callerCmp});
        return panel;
    },

    editarComentario:function (record) {
        var panel = this.crearComentario();
        //en este caso los datos del comentario vienen TODOS de la pantalla anterior, no necesitamos hacer llamada al servidor
    },

    borrarComentario:function () {
    },

    aceptar:function (cmp) {
        var panel = cmp.up('comentarioEdit');
        var params = cmp.up('window').down('form').getValues(false, false, false, true);  // Mdoc : undocumented sencha, obtiene los getValue como objetos
        var _controller = this;
        Ext.apply(params, {questionId:this.questionId});
        am.bo.comentario.create.exec({
            params:params,
            success:function () {
				//Mdoc: se comunica al controller padre mediante eventos, el primer parametro debe ser la view de este controller
				// de forma que si el controller padre tiene asociados varios paneles de este sub-controller sepa a donde tiene
				// que enviar datos
                 _controller.fireEvent('comentarioAceptado', panel, panel.getViewData().callerCmp);
                panel.close();
            }
        });
    },

    cancelar:function (cmp) {
        cmp.up('window').close();
        this.fireEvent('closed');
    }

});


