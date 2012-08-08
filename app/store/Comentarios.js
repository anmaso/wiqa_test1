Ext.define('AM.store.Comentarios', {
    extend:'Ext.data.Store',
    model:'AM.model.Comentario',
    requires:[
        'AM.model.Comentario'
    ],

    proxy:am.bo.comentario.list.proxy

});
