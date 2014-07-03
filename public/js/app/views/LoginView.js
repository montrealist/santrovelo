/*
 *
 * Loginview dictates the template and functionality when someone logs in.
 *
 */
define([ 'marionette', 'backbone', 'handlebars', 'parse', 'text!templates/login.html'],
    function (Marionette, Backbone, Handlebars, Parse, template) {
        
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend({
            template : Handlebars.compile(template),
            
            initialize : function(){
                _.bindAll(this);
            },
            
            
            events: {
                'submit form' : 'loginAction'
            },
            
            /*
             * Called when the user logs in - provides a call to Parse.User.logIn 
             */
            loginAction : function(evt){
                evt.preventDefault();
                this.$('#bad-login').addClass('hidden');
                
                var userid = this.$('form #userid').val();
                var password = this.$('form #password').val();
                
                Parse.User.logIn(userid, password, {
                    success: this.loginSuccess,
                    error: this.loginFailure
                });
            },
            
            /*
             * callback for Parse.User.logIn - If the login was sucess redirect to app
             */
            loginSuccess : function(user){
                Backbone.history.navigate("#start", {trigger: true});

            },
            
            
            /*
             * Callback for bad - login - show the 'you dun goofed' message
             */
            loginFailure : function(user, error){
                this.$('#bad-login').removeClass('hidden');
            }
            
            
        });
    });