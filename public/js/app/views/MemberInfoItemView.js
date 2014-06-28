define( ["App", "backbone","marionette", "models/MemberInfo",
         "text!templates/memberinfoitemview.html"],
       function(App, Backbone, Marionette, MemberInfo, miivTemplate){
    
    var MemberInfoItemView = Marionette.ItemView.extend({
        template: Handlebars.compile(miivTemplate),
        model:MemberInfo,
        tagName: 'tr',
        
        //Dynamically set the classname on this table row - used to apply bootstrap styling
        className : function(){
            if ( App.isDateBeforeToday(this.model.getRegisteredUntilDate()) ) {
                return 'danger';
            }
            return 'success';
        }

    });
    
    return MemberInfoItemView;
});