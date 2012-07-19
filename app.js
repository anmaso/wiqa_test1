Ext.application({
	name: 'AM',

	controllers : [
	  'M'
	],
 
  requires : [ 'M', 'M.Controller' ],

    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true
});
