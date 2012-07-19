Ext.define('AM.view.MGrid', {
	extend : 'Ext.grid.Panel',
  alias : 'widget.mgrid',
	initComponent : function(){
			console.log('initComponent MGrid');
      if (this.M && this.M.storeMultiple){
        this.store = new AM.store[this.store];
    }
			this.callParent(arguments);
	}
});
