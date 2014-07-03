define(['App', 'backbone', 'marionette', 'parse', 'models/MemberInfo',
        'views/SearchView', 'views/LoginView', 'views/AddNewMemberView',
        'views/EditLayoutView', 'views/VeloLayoutView'],
    function (App, Backbone, Marionette, Parse, MemberInfo,
              SearchView, LoginView, AddNewMemberView, EditLayoutView, VeloLayoutView) {
    
    controller =  Backbone.Marionette.Controller.extend({        
        login : function(){
            App.mainRegion.show(new LoginView());
        },
        
        _checkUser : function(){
            var user = Parse.User.current();
            
            if (user === null) {
                Backbone.history.navigate('#', {trigger: true});
                return false;
            }
            return true;
        },
        
        
        entry : function(){
            if(this._checkUser()){
                App.mainRegion.show(new VeloLayoutView());
            }
        },
        
        
        editMember : function(id){
            //If we don't wait for the promise to complete, the page will load blank.
            App.memberPromise.done(function(){
                var member = App.memberInfo.get(id);
                //App.mainRegion.show(new EditMemberView({model:member}));
                App.mainRegion.show(new EditLayoutView({member:member}));
            });
        }
    });
    
    return controller;
});