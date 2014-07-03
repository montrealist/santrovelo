/*
 * A container for the history of a member
 */
define (["models/MemberInfoHistory", "parse"], function(MemberInfoHistory, Parse){

    var MemberInfoHistoryCollection = Parse.Collection.extend({
        model: MemberInfoHistory,
        comparator : function(a, b){
            return b.get('historySavedAt') - a.get('historySavedAt');
        }
    },{
        /*
         * Helper function.
         * Returns a MemberInfoHistoryCollection that is initially empty,
         * however it will run a parse.come query to fetch items that
         * have an equivalent 'ownerObjectId' attribute and reset the collection.
         */
        fetchByOwnerObjectId : function(ownerObjId){
            var history = new MemberInfoHistoryCollection();
            
            var query = new Parse.Query(MemberInfoHistory);
                query.equalTo('ownerObjectId', ownerObjId);
                query.find({
                    success: function(results) {
                        history.reset(results);
                    },
                    error: function(error) {
                        alert("Error - could not fetch history for this member");
                    }
                });
                
            return history;
        }
    });
    
    return MemberInfoHistoryCollection;
});