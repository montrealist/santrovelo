require.config({
    baseUrl:"./js/app",
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths:{
        // Core Libraries
        "jquery":"../libs/jquery/jquery.min",
        "jqueryui":"../libs/jqueryui/jquery-ui",
        "underscore":"../libs/lodash/dist/lodash.min",
        "backbone":"../libs/backbone/backbone",
        "marionette":"../libs/marionette/lib/backbone.marionette.min",
        "handlebars":"../libs/handlebars/handlebars",
        "bootstrap": "../libs/bootstrap/dist/js/bootstrap.min",
        "text":"../libs/plugins/text",
        "parse": "../libs/parse-1.2.16.min",
        "moment" : "../libs/moment/moment",
        "xeditable" : "../libs/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.min"
    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim:{
        "bootstrap":["jquery"],
        "jqueryui":["jquery"],
        "bootbox":["jquery"],
        "backbone":{
            "deps": ["jquery","underscore", "handlebars"],
            "exports":"Backbone"
        },
        "marionette":{
            "deps":["underscore", "backbone", "jquery", "handlebars"],
            "exports":"Marionette"
        },
        "handlebars":{
            "exports":"Handlebars",
            init: function() {
                this.Handlebars = Handlebars;
                return this.Handlebars;
            }
        },
        "parse": {
            "deps": ["jquery", "underscore"],
            "exports" : "Parse"
        },
        "xeditable":["jquery", "bootstrap"]
    }
});


// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["App", "routers/AppRouter", "controllers/Controller", "config/ParseInit",
         "jquery", "jqueryui","bootstrap"],
    function (App, AppRouter, Controller, ParseInit) {
        
        ParseInit.init();
        
        App.appRouter = new AppRouter({
            controller:new Controller()
        });
        
        App.start();
    });