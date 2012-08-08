Ext.define('AM.view.pregunta.List', {
    extend:'Ext.panel.Panel',
    alias:'widget.preguntaList',

    closable:true,
    requires:['M.ux.MGrid'],

    tbar:[
        { text:'nueva pestaña de busqueda', action:'preguntaList'},
    ],
    title:'Buscar preguntas',
    items:[
        {
            xtype:'form',
            bodyStyle:'padding:5px',
            border:false,
            layout:'hbox',
            valign:'bottom',
            defaults:{margin:'0 5px 0 0'},
            items:[
                {xtype:'textfield', name:'pregunta', fieldLabel:'Pregunta'}
                ,
                {xtype:'textfield', name:'respuesta', fieldLabel:'Respuesta'}
                ,
                {xtype:'button', text:'Buscar', width:120, action:'buscar'}
                ,
                {xtype:'button', text:'Limpiar', width:120, action:'limpiar'}
            ]
        }
        ,
        {
            xtype:'mgrid',
            tbar:[
                { text:'Nueva pregunta', action:'preguntaCreate'},
                { text:'Borrar pregunta', action:'preguntaRemove'}
            ],
            title:'Todas las preguntas',
            store:'Preguntas',

            M:{
                storeMultiple:true
            },

            columns:[
                {header:'id', dataIndex:'id', width:50},
                {header:'Categoria', dataIndex:'category', width:100},
                {header:'Fecha act.', dataIndex:'changeddate', flex:1},
                {header:'Pregunta', dataIndex:'question', flex:2},
                {header:'Respuesta', dataIndex:'answer', flex:1},
                {header:'Activo', dataIndex:'active', flex:1}
            ]
        }
    ]
});
