/*
 * Defines a history of 'MemberInfo' transactions.
 *
 * Extends MemberInfo and also records the user who made the change
 * (if that info is available), as well as when the record was updated.
*/

define (['parse', 'underscore', 'moment', 'models/MemberInfoAbstract'],
        function(Parse, _, moment, MemberInfoAbstract){
    
    var MemberInfoHistory = MemberInfoAbstract.extend("MemberInfoHistory",{
        
        //Returns a string describing the current user
        //ie: "Tristan Barry - tbarry@google.com"
        getCurrentUser : function(){
            var parseUser = Parse.User.current();
            return parseUser.getUsername() + ' - ' + parseUser.getEmail();            
        },
        
        
        initialize : function(){
            this.set('savedBy', this.getCurrentUser());
            this.set('historySavedAt', moment().valueOf());
        }
    });
    
    return MemberInfoHistory;

});