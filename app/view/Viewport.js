Ext.define('AM.view.Viewport', {
    extend:'Ext.container.Viewport',

requires : [ 'AM.view.Cabecera', 'AM.view.MenuNavegacion'],
    layout:'fit',

    items:[
        {
            xtype:'panel',
            items:[
								{ 
									xtype : 'cabecera', html : 'panel1'

								
								},
                {
                    xtype:'tabpanel',
                    id:'contenido',
                    items:[
                        {
                            xtype:'panel', title:'Inicio', layout:'fit', html:'<h1>Demo Ria</h1>', border:false, bodyStyle:'font-size:2em;padding:2em;'
                        }
                    ]
                }
            ],
        }
    ]
});
