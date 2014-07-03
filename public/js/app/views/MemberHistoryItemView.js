define( ["App", "backbone","marionette", "models/MemberInfoHistory",
         "text!templates/memberhistoryitemview.html"],
       function(App, Backbone, Marionette, MemberInfoHistory, template){
    
    var MemberHistoryItemView = Marionette.ItemView.extend({
        template : Handlebars.compile(template),
        tagName:'tr'
    });
    
    return MemberHistoryItemView;
});
    
    