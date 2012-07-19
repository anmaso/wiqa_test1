Ext.define('AM.model.Comentario', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'questionId',
            type: 'int'
        },
        {
            name: 'from',
            type: 'string'
        },
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'changeddate',
            type: 'date'
        },
        {
            name: 'active',
            type: 'boolean'
        }
    ]
});
