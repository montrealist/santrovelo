/*
 * A container for the MemberInfo model
 */
define (["models/MemberInfo", "parse"], function(MemberInfo, Parse){

    var MemberInfoCollection = Parse.Collection.extend({
        model: MemberInfo,
        
        //Parse hasn't kept up with Backbone - need to make a quick and dirty clone function.
        clone : function(){
            var mic = new MemberInfoCollection();
            
            for(var i = 0; i < this.size(); i++){
                mic.add(this.at(i));
            }
            
            return mic;
        }
    });
    
    return MemberInfoCollection;
});