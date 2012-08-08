Ext.define('AM.model.Categoria', {
    extend:'Ext.data.Model',
    idProperty:'id',
    fields:[
        {
            name:'id',
            type:'int'
        },
        {
            name:'label',
            type:'string'
        }
    ]
});
