/*
 *
 * MemberInfoItemView - Asingl row in a database for a member.
 * Allows inline editing via xeditable
 *
 */ 

define( ["App", "backbone","marionette", "models/MemberInfo",
         "text!templates/memberinfoitemview.html", 'xeditable'],
       function(App, Backbone, Marionette, MemberInfo, miivTemplate){
    
    var MemberInfoItemView = Marionette.ItemView.extend({
        template: Handlebars.compile(miivTemplate),
        model:MemberInfo,
        tagName: 'tr',
        
        
        initialize: function(){
            //guard this for our click handlers
            _.bindAll(this);
        },
        
        
        /*
         * Dynamically set the classname on this table row - used to apply bootstrap styling
         */
        className : function(){
            if ( App.isDateBeforeToday(this.model.getRegisteredUntilDate()) ) {
                return 'danger';
            }
            return 'success';
        },
        
        
        /*
         * Apply x-editable attribute
         */
        onRender : function(){
            //not exactly a DRY solution; but works today
            this.$('a#fullname').editable({
                success: this.updateName,
                mode : 'inline'
            });
            this.$('a#email').editable({
                success: this.updateEmail,
                mode : 'inline'
            });
            this.$('a#phone').editable({
                success: this.updatePhone,
                mode : 'inline'
            });
        },
        
        /*
         * Sucess from 'x-editable' - provides us with the new value.
         */
        updateName : function(response, newValue){
            this.model.setFullName(newValue);            
            this.model.saveWithHistory({error: this.modelSaveError});
        },
        
        
        /*
         * Same as above
         */
        updateEmail : function(response, newValue){
            this.model.setEmail(newValue);            
            this.model.saveWithHistory({error: this.modelSaveError});
        },
        
        /*
         * Same as above
         */
        updatePhone : function(response, newValue){
            this.model.setPhoneNumber(newValue);
            this.model.saveWithHistory({error: this.modelSaveError});
        },
        
        
        /*
         * For some reason, the save failed. Lets notify the user
         */
        modelSaveError : function(model, response, options){
            console.log('Save failed. Response code: ' + response);
            alert('Could not save this update. Please reload the page.');
        }

    });
    
    return MemberInfoItemView;
});