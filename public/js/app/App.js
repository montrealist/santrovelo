/*
 *
 * App entry point - setup initializers and setup some handlebars parsers
 * 
 */
define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars',
        'moment', 'collections/MemberInfoCollection'],
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
            App.memberPromise = App.memberInfo.fetch();
            Backbone.history.start();
        });
        
        
        //Helper function - determines if date for registration has expired.
        App.isDateBeforeToday = function(time){
            //checks if a date is before now. Helpful for determining if a membership has expired.
            var now = moment();
            var timeCompare = moment(time);
            //if the difference between the passed in time is less than now; it happened in the past
            if( timeCompare.diff(now) < 0){
                return true;
            }
            return false;
        };
        

        // Register a quick helper for date conversions
        Handlebars.registerHelper('formatDate', function(time) {
            //returns a friendly time format
            return moment(time).format('LL');
        });
        
        /*
         * Helper function - a conditional - pass in a date and it will compare if the
         * date is before 'today' (ie: moment() )
         * Used to determine if a registration date has passed (or not)
         */
        Handlebars.registerHelper('isDateBeforeToday', function(time, options){
            if (_.isUndefined(time)) {
                return options.inverse();
            }
            if( App.isDateBeforeToday(time)){
                return options.fn(this);
            }
            return options.inverse();
            
        });

        return App;
    });