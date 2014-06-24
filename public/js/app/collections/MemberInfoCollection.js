define (["models/MemberInfo", "parse"], function(MemberInfo, Parse){

    var MemberInfoCollection = Parse.Collection.extend({
        model: MemberInfo
    });
    
    return MemberInfoCollection;
});