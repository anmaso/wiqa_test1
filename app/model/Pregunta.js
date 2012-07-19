Ext.define('AM.model.Pregunta', {
    extend: 'Ext.data.Model',
    alias: 'model.preguntaItem',
    idProperty: 'id',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'changeddate',
            type: 'date'
        },
        {
            name: 'answerdate',
            type: 'date'
        },
        {
            name: 'question',
            type: 'string'
        },
        {
            name: 'answer',
            type: 'string'
        },
        {
            name: 'category',
            type: 'int'
        },
        {
            name: 'active',
            type: 'boolean'
        }
    ]
});
