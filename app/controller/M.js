Ext.define('AM.controller.M', {
    extend:'M.Controller',

    init:function (app) {

        M.Ext.setApplication(app);

        console.log("controller.M init");
        this.control({
            '[action="preguntaList"]':{
                click:this.preguntaList
            },
            '[action="ajaxTest1"]':{
                click:this.ajaxTest1
            }
        });
    },

    preguntaList:function () {
        //Mdoc : para crear una pantalla se pide al manager correspondiente el tab
        var users = this.getController('AM.controller.pregunta.List').preguntaList();
        //M.addTab(users);
    }, ajaxTest1:function () {
        pesca.flow.tareas.lista.exec({hola:'mundo'});
    }
});
