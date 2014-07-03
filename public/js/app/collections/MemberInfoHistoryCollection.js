define (["models/MemberInfoHistory", "parse"], function(MemberInfoHistory, Parse){

    var MemberInfoHistory = Parse.Collection.extend({
        model: MemberInfoHistory
    });
    
    return MemberInfoHistory;
});