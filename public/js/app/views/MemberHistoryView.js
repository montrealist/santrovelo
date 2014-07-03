/*
 * Marionette Needs to define a composite view for the container AND collection of items
 */

define( [ 'App', 'backbone', 'marionette','handlebars', 'views/MemberHistoryItemView',
         'text!templates/memberhistoryviewtable.html'],
       function(App, Backbone, Marionette, Handlebars, MemberHistoryItemView,
                template){

    var MemberHistoryView = Marionette.CompositeView.extend({
        
        template : Handlebars.compile(template),
        childView : MemberHistoryItemView,
        childViewContainer: "tbody"
        
    });
    
    return MemberHistoryView;


});
