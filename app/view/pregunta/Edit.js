Ext.define('AM.view.pregunta.Edit', {
    extend: 'Ext.form.Panel',
    alias : 'widget.preguntaEdit',

    requires: ['Ext.form.Panel', 'M.ux.MButton'],
    closable : true,

    title : 'Editar Pregunta',
    autoShow: true,
    items: [
        {
            xtype: 'fieldset',
            title: 'Pregunta',
            flex: 0.25,
            items: [
                {
                    xtype: 'textfield',
                    itemId: 'questionEdit',
                    name: 'question',
                    fieldLabel: 'Pregunta',
                    anchor: '100%'
                },
                {
                    xtype: 'datefield',
                    itemId: 'datechangedEdit',
                    name: 'changeddate',
                    fieldLabel: 'Fecha',
                    format: 'd/m/Y',
                    anchor: '100%'
                },
                {
                    xtype: 'combobox',
                    itemId: 'categoryEdit',
                    name: 'category',
                    fieldLabel: 'Categoria',
                    displayField: 'label',
                    forceSelection: true,
                    store: 'Categorias',
                    valueField: 'id',
                    anchor: '100%',
                    formBind: false
                },
                {
                    xtype: 'checkboxfield',
                    itemId: 'activeEdit',
                    name: 'active',
                    fieldLabel: 'Activo',
                    boxLabel: '',
                    anchor: '100%'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Respuesta',
            flex: 0.25,
            items: [
                {
                    xtype: 'textareafield',
                    itemId: 'answerEdit',
                    name: 'answer',
                    fieldLabel: 'Respuesta',
                    anchor: '100%'
                },
                {
                    xtype: 'datefield',
                    itemId: 'answerdateEdit',
                    name: 'answerdate',
                    fieldLabel: 'Fecha',
                    format: 'd/m/Y',
                    anchor: '100%'
                }
            ]
        },
        {
            xtype: 'mgrid',
            M : {
              storeMultiple : true
            },
            itemId: 'comments',
            title: 'Comentarios',
            store: 'Comentarios',
            flex: 0.5,
            dockedItems: [
                {
                    xtype: 'toolbar',
                    itemId: 'commentsToolbar',
                    dock: 'top',
                    items: [
                        {
													//Mdoc: si extendemos mbutton el action dispara directamente el evento
                            xtype: 'mbutton',
                            text: 'Nuevo comentario',
														action : 'crearComentario'
                        },
                        {
                            xtype: 'button',
                            action: 'editarComentario',
                            text: 'Modificar'
                        },
                        {
                            xtype: 'button',
                            itemId: 'borrarComentario',
                            text: 'Borrar'
                        }
                    ]
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 42,
                    dataIndex: 'id',
                    text: 'id'
                },
                {
                    xtype: 'gridcolumn',
                    width: 149,
                    dataIndex: 'from',
                    text: 'From'
                },
                {
                    xtype: 'gridcolumn',
                    width: 295,
                    dataIndex: 'text',
                    text: 'Text'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'changeddate',
                    text: 'Changed'
                },
                {
                    xtype: 'booleancolumn',
                    dataIndex: 'active',
                    text: 'Active'
                }
            ],
            viewConfig: {

            }
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            itemId: 'itemToolbar',
            activeItem: '',
            flex: 1,
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    itemId: 'saveItem',
                    text: 'Guardar'
                },
                {
                    xtype: 'button',
                    itemId: 'cancelItem',
                    text: 'Anular'
                }
            ]
        }
    ],
        tbar : [
            {
                text: 'Guardar',
                action: 'guardar'
            },
            {
                text: 'Cancelar',
                action: 'cancelar'
            }
        ],

  initComponent : function(){
        this.callParent(arguments);

				this.initData = function(params){
					console.log("UserEdit " + params);
				};
    }
});
