
define (['parse','models/MemberInfoAbstract', 'models/MemberInfoHistory'],
        function(Parse, MemberInfoAbstract, MemberInfoHistory){
    //Using the parse object to create objects. But should be replaceablewith Backbone.
    
    var MemberInfo = MemberInfoAbstract.extend("MemberInfo",{
        
        //saves an associated history object when this is being saved
        saveWithHistory : function(){
            this.saveHistory();
            
            //this.save.apply(arguments);
            return this.save.apply(this, arguments);
            
        },
        
        saveHistory :function(){
            var cloned = this.toJSON();
            //we have to unset some of the options that parse puts on for us
            delete cloned.updatedAt;
            delete cloned.createdAt;
            
            //make sure we save the owner object ID - acts as a foriegn key
            cloned.ownerObjectId = cloned.objectId;
            delete cloned.objectId;
            
            //Save a history entry
            return new MemberInfoHistory(cloned).save();
        }
        
        
    });
    
    return MemberInfo;
});