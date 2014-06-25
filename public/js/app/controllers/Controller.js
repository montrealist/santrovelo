define(['App', 'backbone', 'marionette', 'parse', 'models/MemberInfo',
        'views/SearchView', 'views/LoginView', 'views/AddNewMemberView',
        'views/EditMemberView'],
    function (App, Backbone, Marionette, Parse, MemberInfo,
              SearchView, LoginView, AddNewMemberView, EditMemberView) {
    
    controller =  Backbone.Marionette.Controller.extend({        
        start:function () {
            App.mainRegion.show(new SearchView());
        },
        
        login : function(){
            App.mainRegion.show(new LoginView());
        },
        
        newMember : function(){
            App.mainRegion.show(new AddNewMemberView());
        },
        
        editMember : function(id){
            var member = App.memberInfo.get(id);
            App.mainRegion.show(new EditMemberView({model:member}));
        }
    });
    
    return controller;
});