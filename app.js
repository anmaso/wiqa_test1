Ext.Loader.setConfig({
	enabled: true
	, paths : { AM : 'app' }
});
Ext.application({
    name:'AM',


	controllers : [
	  'AM'
	],
 
  requires : [ 'M.Controller' ],
	// automatically create an instance of AM.view.Viewport
	autoCreateViewport:true,

	init : function(){
		console.log('app init');
		M.i18n.resolveLocale('es_ES');
		M.i18n.resolveLocale('en_EN');
	},

	launch : function(){
		console.log('app launch');
	},

	onLaunch : function(){
		console.log('app onLaunch');
	},
});
