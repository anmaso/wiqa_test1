Ext.define('AM.view.MenuNavegacion', {
    extend:'Ext.toolbar.Toolbar',
    alias:'widget.menunavegacion',
		border : false, 
	
		items : [
					{xtype:'button', text:'Buscar preguntas', action:'preguntaList'}
					,
					{xtype:'button', text:'ajaxTest1', action:'ajaxTest1'}
		],

		initComponent : function(){
		 var me = this;
		 if (M.config.showHelpButton()){
			 this.items.push({xtype:'tbfill'});
			 this.items.push({xtype:'tbseparator'});
			 this.items.push({xtype:'button', text : i18n.helpButton});
		 }
		 me.callParent(arguments);
		}
});
