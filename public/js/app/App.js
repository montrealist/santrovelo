define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars',
        'collections/MemberInfoCollection'],
    function ($, Backbone, Marionette, _, Handlebars, MemberInfoCollection) {
        var App = new Backbone.Marionette.Application();

        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        App.addRegions({
            headerRegion:"header",
            mainRegion:"#main"
        });

        App.addInitializer(function (options) {
            //Bootstrap member info
            App.memberInfo = new MemberInfoCollection();
            App.memberInfo.fetch();
            Backbone.history.start();
        });

        return App;
    });