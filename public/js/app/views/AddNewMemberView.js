define( [ 'App', 'marionette','collections/MemberInfoCollection', 'handlebars',
         'text!templates/newuser.html'],
       function(App, Marionette, MemberInfoCollection, Handlebars, template){
        
        var AddNewMemberView = Marionette.ItemView.extend({
            template : Handlebars.compile(template)
        });
        
        return AddNewMemberView;
});