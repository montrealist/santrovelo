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
        },
        
        comparator : function(a, b){
            return b.get('membershipStartDate') - a.get('membershipStartDate');
        }
        
    },{
        /*
         * We'll create a class-fetch. Parse limits its fetch to the first 100 items.
         * We want to pull it all (!!!)
         *
         * Pass in an existing collection; when the fetch completes, the collection
         * will be reset.
         * 
         */
        fetch : function(collection){
            var customquery = new Parse.Query('MemberInfo');
            customquery.limit(2000);
            
            var promise = customquery.find({
                //When the fetch finishes; put it in the collection
                success: function(mdls){
                    if(collection){
                        collection.reset(mdls);
                    }
                }
            });
            
            return promise;
        }
    });
    
    return MemberInfoCollection;
});