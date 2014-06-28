define( ["App", "backbone","marionette", "models/MemberInfo",
         "text!templates/memberinfoitemview.html"],
       function(App, Backbone, Marionette, MemberInfo, miivTemplate){
    
    var MemberInfoItemView = Marionette.ItemView.extend({
        template: Handlebars.compile(miivTemplate),
        model:MemberInfo,
        tagName: 'tr',
        
        events: {
            "click a.edit" : "editClick"
        },
        
        //Dynamically set the classname on this table row - used to apply bootstrap styling
        className : function(){
            if ( App.isDateBeforeToday(this.model.getRegisteredUntilDate()) ) {
                return 'danger';
            }
            return 'success';
        },
        
        
        editClick : function(evt){
        }
        

    });
    
    return MemberInfoItemView;
});