define( ["marionette", "views/MemberInfoItemView"],
       function(Marionette, MemberInfoItemView){
    
    var MemberInfoCollectionView = Marionette.CollectionView.extend({
        childView:MemberInfoItemView,
    });
    
    
    return MemberInfoCollectionView;
});