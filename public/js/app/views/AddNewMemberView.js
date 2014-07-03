/*
 * A view for adding a new member to the system.
 * Collects basic information and does basic validation
 */
define( [ 'App', 'backbone', 'marionette','collections/MemberInfoCollection', 'models/MemberInfo',
         'handlebars', 'text!templates/newuser.html', 'jquery-validation'],
       function(App, Backbone, Marionette, MemberInfoCollection, MemberInfo, Handlebars, template){
        
        
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
                this.model = new MemberInfo();
                
                //Preset the reigstered until date to be one year from now
                var oneYearFromToday = moment().add('years', 1);
                this.model.setRegisteredUntilDate(oneYearFromToday.valueOf());
            },
            
            
            /*
             * The form is being submitted
             * Set the model details and save the information
             */
            onSubmit : function(evt){
                evt.preventDefault();
            
                var signoff = this.ui.signoff.prop('checked');
                var fee = this.ui.fee.val();
                
                this.model.setSignOff(signoff);
                this.model.setEmail(this.ui.email.val());
                this.model.setFeePaid(parseFloat(fee));
                this.model.setFullName(this.ui.name.val());
                this.model.setPhoneNumber(this.ui.phone.val());
                
                //Save the model with history
                var promise = this.model.save();
                
                promise.done(function(mdl){
                    //add it to our history and save its history (why not)
                    App.memberInfo.add(mdl);
                    mdl.saveHistory();
                });
            
                $('a[href=#velo-search]').tab('show');
            }
            
            
        });
        
        return AddNewMemberView;
});