define(['App', 'backbone', 'marionette', 'parse', 'models/MemberInfo',
        'views/SearchView', 'views/LoginView', 'views/AddNewMemberView'],
    function (App, Backbone, Marionette, Parse, MemberInfo,
              SearchView, LoginView, AddNewMemberView) {
    
    controller =  Backbone.Marionette.Controller.extend({        
        start:function () {
            App.mainRegion.show(new SearchView());
        },
        
        login : function(){
            App.mainRegion.show(new LoginView());
        },
        
        newmember : function(){
            App.mainRegion.show(new AddNewMemberView());
        }
    });
    
    return controller;
});