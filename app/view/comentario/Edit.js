Ext.define('AM.view.comentario.Edit', {
    extend:'Ext.Window',
    alias:'widget.comentarioEdit',

    requires:['Ext.form.Panel', 'M.ux.MButton'],

    title:'Edici�n de comentario',
    autoShow:true,
    modal:true,
    items:[
        {
            xtype:'form',
            bodyStyle:'padding: 5px',
            items:[
                {
                    xtype:'textfield',
                    name:'from',
                    fieldLabel:'Nombre',
                    anchor:'100%'
                },
                {
                    xtype:'textfield',
                    name:'text',
                    fieldLabel:'Texto',
                    anchor:'100%'
                },
                {
                    xtype:'datefield',
                    name:'changeddate',
                    fieldLabel:'Fecha',
                    format:'d/m/Y',
                    anchor:'100%'
                },
                {
                    xtype:'checkboxfield',
                    itemId:'activeEdit',
                    name:'active',
                    fieldLabel:'Activo',
                    boxLabel:'',
                    anchor:'100%'
                }
            ]
        }
    ],
    buttons:[
        {
            text:'Guardar',
            action:'guardar'
        },
        {
            text:'Cancelar',
            action:'cancelar'
        }
    ]

});
