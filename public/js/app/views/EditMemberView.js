define( [ 'App', 'backbone', 'marionette','collections/MemberInfoCollection', 'models/MemberInfo',
         'handlebars', 'views/HeaderView', 'text!templates/edituser.html', 'moment'],
       function(App, Backbone, Marionette, MemberInfoCollection, MemberInfo, Handlebars,
                HeaderView, template,moment){
        
        
        var EditMemberView = Marionette.ItemView.extend({
            template : Handlebars.compile(template),
            
            ui:{
                'form' : 'form',
                'startDate' : 'form #membershipStartDate',
                'renewBtn' : 'form #renew',
                'reregister' : 'form #re-registration',
                'registerUntilDate': 'form #registeredUntilDate',
                'signoff' : 'form #signoff',
                'name' : 'form #name',
                'phone' : 'form #phone',
                'email' : 'form #email',
                'fee' : 'form #fee',
                'header' : '#header'
            },
            
            
            events: {
                'submit @ui.form' : 'onSubmit',
                'click @ui.renewBtn' : 'renewMember'
            },
            
            
            initialize: function(){
                if (!this.model) {
                    this.model = new MemberInfo();
                }
                _.bindAll(this);
            },
            
            
            onRender : function(){
                //setup date picker
                this.ui.startDate.datepicker({ dateFormat: "MM dd yy",
                                                 onSelect: this.memberDateStartSelect});
            },
            
            
            /*
             * Called when the renew member button is clicked. Show the fee and
             * register-until feilds.
            */
            renewMember : function(evt){
                evt.preventDefault();
                this.ui.reregister.removeClass('hidden');
                this.ui.registerUntilDate.datepicker({dateFormat: "MM dd yy",
                                                     onSelect: this.registerUntilSelect,
                                                     defaultDate : '+1y'});
            },
            
            
            /*
             * Helper function to get the epoch time from the jqueryUI widget
             */
            _getEpochTimeFromJqueryUi : function(inst){
                var formatDate = inst.selectedDay + '-' + (inst.selectedMonth+1) + '-' + inst.selectedYear;
                return moment(formatDate, 'DD-MM-YYYY').valueOf();
            },
            
            
            //Called when the member Date Start is changed
            memberDateStartSelect : function(dateText, inst){
                var epochTime = this._getEpochTimeFromJqueryUi(inst);
                this.ui.startDate.attr('date', epochTime);
            },
            
            //Called when its time to update the registation time
            registerUntilSelect: function(dateText, inst){
                var epochTime = this._getEpochTimeFromJqueryUi(inst);
                this.ui.registerUntilDate.attr('date', epochTime);
            },
            
            //Called when its time to save date
            onSubmit: function(evt){
                evt.preventDefault();
                var startDate = this.ui.startDate.attr('date');
                var registerDate = this.ui.registerUntilDate.attr('date');
                
                //Save Dates and times if they have been used
                if (typeof startDate !== typeof undefined && startDate !== false) {
                    this.model.set('membershipStartDate',parseInt(startDate, 10));
                }
                if (typeof registerDate !== typeof undefined && registerDate !== false) {
                    this.model.set('registeredUntilDate', parseInt(registerDate, 10));
                }

                
                var signoff = this.ui.signoff.prop('checked');
                var fee = this.ui.fee.val() || 0;
                
                this.model.setSignOff(signoff);
                this.model.setEmail(this.ui.email.val());
                this.model.setFeePaid(parseFloat(fee));
                this.model.setFullName(this.ui.name.val());
                this.model.setPhoneNumber(this.ui.phone.val());

                this.model.saveWithHistory({success:function(){
                    Backbone.history.navigate('#start', {trigger: true});
                    }
                });
            }
        });
        
        return EditMemberView;
    });