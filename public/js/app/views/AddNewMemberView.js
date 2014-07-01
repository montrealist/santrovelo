define( [ 'App', 'marionette','collections/MemberInfoCollection', 'models/MemberInfo',
         'handlebars', 'text!templates/newuser.html', 'jquery-validation'],
       function(App, Marionette, MemberInfoCollection, MemberInfo, Handlebars, template){
        
        
        var AddNewMemberView = Marionette.ItemView.extend({
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
                var oneYearFromToday = moment().add('years', 1);
                this.model = new MemberInfo();
                this.model.setRegisteredUntilDate(oneYearFromToday.valueOf());
            },
            
            
            onSubmit : function(evt){
                evt.preventDefault();
            
                var signoff = this.ui.signoff.prop('checked');
                var fee = this.ui.fee.val();
                
                this.model.setSignOff(signoff);
                this.model.setEmail(this.ui.email.val());
                this.model.setFeePaid(parseFloat(fee));
                this.model.setFullName(this.ui.name.val());
                this.model.setPhoneNumber(this.ui.phone.val());
                
                App.memberInfo.create(this.model, {wait: true});                
            }
        });
        
        return AddNewMemberView;
});