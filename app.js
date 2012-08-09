Ext.Loader.setConfig({
	enabled: true
	, paths : { AM : 'app' }
});
Ext.application({
    name:'AM',


	controllers : [
	  'M'
	],
 
  requires : [ 'M.Controller' ],


    // automatically create an instance of AM.view.Viewport
    autoCreateViewport:true
});
