Ext.define('AM.store.Preguntas', {
    extend: 'Ext.data.Store',
    model : 'AM.model.Pregunta',
    requires: [
        'AM.model.Pregunta'
    ],

    autoLoad : true,
    proxy : am.bo.pregunta.list.proxy,
});
