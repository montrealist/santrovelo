define( ["marionette", "models/MemberInfo", "text!templates/memberinfoitemview.html"],
       function(Marionette, MemberInfo, miivTemplate){
    
    var MemberInfoItemView = Marionette.ItemView.extend({
        template: Handlebars.compile(miivTemplate),
        model:MemberInfo,
        tagName: 'tr'
    });
    
    return MemberInfoItemView;
});