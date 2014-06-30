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
            this.$('a.editable').editable({
                success: this.updateEntry,
                mode : 'inline'
            });
        },
        
        /*
         * Sucess from 'x-editable' - provides us with the new value.
         */
        updateEntry : function(response, newValue){
            
            var mdl = this.model;
            var updateable = this.$('a.editable');
            
            //This handler doesn't trigger which element was updated - so we update the entire model
            updateable.each(function(index){
                var attr = $(this).attr('id');
                mdl.set(attr, newValue);
            });
            
            this.model.save({error: this.modelSaveError});
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