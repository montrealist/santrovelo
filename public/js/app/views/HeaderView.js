/*
 * A very simple view to manage the person who is logged in via the header
 */

define( [ 'App', 'backbone', 'parse', 'marionette', 'handlebars', 'text!templates/headerview.html'],
       function(App, Backbone, Parse, Marionette, Handlebars, template){
        
        
        var HeaderView = Marionette.ItemView.extend({
            template: Handlebars.compile(template),
            className : 'row',
            
            ui : {
                'logoutBtn' : 'a#logout'
            },
            
            events : {
                'click @ui.logoutBtn' : 'logout'  
            },
            
            
            initialize : function(){
                this.model = Parse.User.current();
            },
            
            
            /*
             * Logs out and redirects to login screen
             */
            logout : function(){
                Parse.User.logOut();
                Backbone.history.navigate('#', {trigger:true});
            }
        });
        
        
        return HeaderView;
});