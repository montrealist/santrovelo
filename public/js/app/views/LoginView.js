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
            
            
            loginSuccess : function(user){
                alert ('user logged in');
                Backbone.history.navigate("test");

            },
            
            
            loginFailure : function(user, error){
                this.$('#bad-login').removeClass('hidden');
            }
            
            
        });
    });