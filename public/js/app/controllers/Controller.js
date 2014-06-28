define(['App', 'backbone', 'marionette', 'parse', 'models/MemberInfo',
        'views/SearchView', 'views/LoginView', 'views/AddNewMemberView',
        'views/EditMemberView', 'views/VeloLayoutView'],
    function (App, Backbone, Marionette, Parse, MemberInfo,
              SearchView, LoginView, AddNewMemberView, EditMemberView, VeloLayoutView) {
    
    controller =  Backbone.Marionette.Controller.extend({        
        login : function(){
            App.mainRegion.show(new LoginView());
        },
        
        entry : function(){
            App.mainRegion.show(new VeloLayoutView());  
        },
        
        
        start:function () {
            App.mainRegion.show(new SearchView());
        },
        
        
        newMember : function(){
            App.mainRegion.show(new AddNewMemberView());
        },
        
        editMember : function(id){
            //If we don't wait for the promise to complete, the page will load blank.
            App.memberPromise.done(function(){
                var member = App.memberInfo.get(id);
                App.mainRegion.show(new EditMemberView({model:member}));
            });
        }
    });
    
    return controller;
});