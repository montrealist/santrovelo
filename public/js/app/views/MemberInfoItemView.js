define( ["backbone","marionette", "models/MemberInfo", "text!templates/memberinfoitemview.html"],
       function(Backbone, Marionette, MemberInfo, miivTemplate){
    
    var MemberInfoItemView = Marionette.ItemView.extend({
        template: Handlebars.compile(miivTemplate),
        model:MemberInfo,
        tagName: 'tr'

    });
    
    return MemberInfoItemView;
});