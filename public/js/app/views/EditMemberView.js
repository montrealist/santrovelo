define( [ 'App', 'marionette','collections/MemberInfoCollection', 'models/MemberInfo',
         'handlebars', 'text!templates/edituser.html'],
       function(App, Marionette, MemberInfoCollection, MemberInfo, Handlebars, template){
        
        
        var EditMemberView = Marionette.ItemView.extend({
            template : Handlebars.compile(template)
            
        });
        
        return EditMemberView;
       });