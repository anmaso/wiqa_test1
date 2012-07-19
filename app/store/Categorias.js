Ext.define('AM.store.Categorias', {
    extend: 'Ext.data.Store',
    model : 'AM.model.Categoria',
    alias: 'store.categoriaStore',
    requires: [
        'AM.model.Categoria'
    ]
    ,autoLoad : true

    ,proxy : am.bo.categoria.list.proxy
});
