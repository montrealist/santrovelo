/*
 * Marionette Needs to define a collectionview container for all member items
 */

define( ["marionette", "views/MemberInfoItemView"],
       function(Marionette, MemberInfoItemView){
    
    var MemberInfoCollectionView = Marionette.CollectionView.extend({
        childView:MemberInfoItemView
    });
    
    
    return MemberInfoCollectionView;
});