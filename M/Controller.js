/*
 * Mdoc: obtiene un manager y lo inicializa si no esta inicializado
 * Mdoc: los manager seran singleton
 * */
Ext.define('M.Controller', {
    extend:'Ext.app.Controller',


    constructor:function () {
        console.log("M.Controller constructor:...");
        this.callParent(arguments);
        console.log("M.Controller constructor:" + this.id);
        this.viewId = Ext.id(null, 'viewId');

        var _controller = this;
        if (this.refs) {
            Ext.each(this.refs, function (ref) {
                _controller[_controller.getGetterName(ref.ref)] = function (comp) {
                    if (!comp) {
                        console.error("Has llamado al getter : this." + this.getGetterName(ref.ref) + " sin pasar un componente como parametro");
                    }
                    return comp.up(ref.parent).down(ref.selector);
                }
            });
        }

        //create getters for injected controllers
        if (this.controllers) {
            Ext.each(this.controllers, function (name) {
                var getterName = _controller.getControllerGetterName(name);
                console.log("creating getter : " + getterName);
                _controller[getterName] = function () {
                    return _controller.getController(name);
                }
            });
        }
    },

    init:function () {
        console.log("M.controller init:" + this.id);
        this.callParent(arguments);
    },

    getControllerGetterName:function (name) {
        return this.getGetterName(name, 'Controller');
    },

    getGetterName:function (name, suffix) {
        suffix || (suffix = '');
        return 'get' + Ext.String.capitalize(name.replace(/\./g, '')) + suffix;
    },

    /*
     override control function for extended syntax
     query ![controller.name]
     */
    control:function (config) {
        for (var selector in config) {

            if (selector.charAt(0) == '!') {  //get events from other controllers

                var events = config[selector];
                events.scope = this;
                (this[this.getControllerGetterName(selector.slice(1))])().on(events);
                delete config[selector];
            }
        }
        this.callParent(arguments);
    },

    /*
     get a controller by name and initialize it if it is not yet initialized
     */
    getController:function () {
        var ctrl = this.callParent(arguments);
        if (!ctrl.initialized) {
            ctrl.init();
            ctrl.initialized = true;
        }
        return ctrl;
    },

    /*
     standarize the access/store of view assorted data
     */
    getViewData:function (comp, xtype) {
        var view = comp.up(xtype);
        return view.getViewData();
    },

    /*
     adds a panel to the main container
     */
    addPanel:function (viewId) {
        var panel = this.getView(viewId).create();
        panel.viewData = {};
        panel.getViewData = function () {
            return panel.viewData;
        }
        panel.setViewData = function (data) {
            panel.viewData = data;
        }
        M.addTab(panel);
        return panel;
    }
});
