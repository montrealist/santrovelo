define( [ 'App', 'marionette','collections/MemberInfoCollection', 'models/MemberInfo',
         'handlebars', 'text!templates/edituser.html'],
       function(App, Marionette, MemberInfoCollection, MemberInfo, Handlebars, template){
        
        
        var EditMemberView = Marionette.ItemView.extend({
            template : Handlebars.compile(template),
            
            ui:{
                'form' : 'form',
                'signoff' : 'form #signoff',
                'name' : 'form #name',
                'phone' : 'form #phone',
                'email' : 'form #email',
                'fee' : 'form #fee'
            },
            
            events: {
                'submit @ui.form' : 'onSubmit'
            },
            
            initialize: function(){
                if (!this.model) {
                    this.model = new MemberInfo();
                }
            }
        });
        
        return EditMemberView;
    });