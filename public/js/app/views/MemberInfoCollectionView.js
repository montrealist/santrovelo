/*
 * Marionette Needs to define a collectionview container for all member items
 */

define( ["marionette", "views/MemberInfoItemView", "handlebars",
         "text!templates/loading.html"],
       function(Marionette, MemberInfoItemView, Handelbars, loadingTemplate){
    
    Loading = Backbone.Marionette.ItemView.extend({
        template: Handelbars.compile(loadingTemplate)
    });
    
    var MemberInfoCollectionView = Marionette.CollectionView.extend({
        childView:MemberInfoItemView,
        emptyView: Loading
    });
    
    
    return MemberInfoCollectionView;
});