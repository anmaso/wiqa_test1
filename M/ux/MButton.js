Ext.define('M.ux.MButton', {
	extend : 'Ext.Button',
  alias : 'widget.mbutton',
	initComponent : function(){
		if (this.action && !this.handler){
			//this.enableBubble(this.action);
			this.handler =  function(){
				this.fireEvent(this.action, this);
			}
		}
		this.callParent(arguments);
	}
});
