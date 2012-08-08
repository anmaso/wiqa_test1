Ext.define('AM.view.Viewport', {
    extend:'Ext.container.Viewport',

    layout:'fit',

    items:[
        {
            xtype:'panel',
            items:[
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
            tbar:[
                {xtype:'button', text:'Buscar preguntas', action:'preguntaList'}
                ,
                {xtype:'button', text:'ajaxTest1', action:'ajaxTest1'}
            ]
        }
    ]
});
