
define (['parse','models/MemberInfoAbstract', 'models/MemberInfoHistory'],
        function(Parse, MemberInfoAbstract, MemberInfoHistory){
    //Using the parse object to create objects. But should be replaceablewith Backbone.
    
    var MemberInfo = MemberInfoAbstract.extend("MemberInfo",{
        
        //saves an associated history object when this is being saved
        saveWithHistory : function(){
            var cloned = this.toJSON();
            //we have to unset some of the options that parse puts on for us
            delete cloned.updatedAt;
            delete cloned.createdAt;
            
            
            //make sure we save the owner object ID - acts as a foriegn key
            cloned.ownerObjectId = cloned.objectId;
            delete cloned.objectId;
            
            
            //Save a history entry
            new MemberInfoHistory(cloned).save();
            
            //this.save.apply(arguments);
            this.save.apply(this, arguments);
            
        }
        
        
    });
    
    return MemberInfo;
});