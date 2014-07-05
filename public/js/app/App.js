/*
 *
 * App entry point - setup initializers and setup some handlebars parsers
 * 
 */
define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars',
        'moment', 'collections/MemberInfoCollection',
        'templates/helpers/formatDate', 'templates/helpers/isDateBeforeToday'],
    function ($, Backbone, Marionette, _, Handlebars, moment, MemberInfoCollection) {
        var App = new Backbone.Marionette.Application();

        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        App.addRegions({
            mainRegion:"#index-container"
        });

        App.addInitializer(function (options) {
            //Bootstrap member info
            App.memberInfo = new MemberInfoCollection();
            
            //App.memberPromise = App.memberInfo.fetch();
            App.memberPromise = MemberInfoCollection.fetch(App.memberInfo);
            
            Backbone.history.start();
        });

        return App;
    });