Ext.define('AM.view.Cabecera', {
    extend:'Ext.panel.Panel',
    alias:'widget.cabecera',
		border : false,
height : 100,

		//porque no funciona aqui esta propiedad?
		html : 'contenido cabecera <<- no se ve' ,

		items : [
			{ html : 'elemento de items'}
		],

			bbar:[
				{xtype : 'menunavegacion' }
			],

	 initComponent : function(){
		 var me = this;

		 Ext.apply(me, {
		
		html : 'contenido cabecera <<- si se ve' ,
			});

		 me.callParent(arguments);

	 }
});
