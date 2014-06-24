/*
 * Represents membership infor for the Santropol Roulant bike shop.
 */


define (['parse', 'underscore'], function(Parse, _){
    //Using the parse object to create objects. But should be replaceablewith Backbone.
    
    var MemberInfo = Parse.Object.extend("MemberInfo",{
        initialize : function(options){
        },
        
        /*
         * Getter for fullname
         */
        getFullName : function(){
            if (_.isUndefined(this.get('fullname'))){
                this.set('fullname', "");
            }
            return this.get('fullname');
            
        },
        
        /*
         * Name needs to be a string. Throws an exception if this fails
         */
        setFullName : function(name){
            if(_.isString(name)){
                this.set(fullname, name);
            }else{
                throw "name needs to be oftype string";   
            }
        },
        
        /*
         * Getter for phone number. Using Strings
         */
        getPhoneNumber : function(){
            if (_.isUndefined(this.phone)) {
                this.phone = "";
            }
            return this.phone;
        },
        
        /*
         * setter - no error checking if it is string, number, etc
         */ 
        setPhoneNumber : function(number){
            this.phone = number;
        },
        
        /*
         * Email address getter
         */
        getEmail : function(){
            if (_.isUndefined(this.email)) {
                this.email = "";
            }
            return this.email;
        },
        
        /*
         * set email. Must be a string or it will throw an error.
         */
        setEmail : function(email){
            if (_.isString(email)) {
                this.email = email;
            }else{
                throw "email must be a string";
            }
        },
        
        /*
         * Getter for fee paid
         */
        getFeePaid : function(){
            return feePaid;
        },
        
        /*
         * Setter for fee paid - will throw an error if it is not a number.
         */
        setFeePaid : function(fee){
            if (_.isNumber(fee)) {
                this.fee = fee;
            }else{
                throw "fee must be a number";
            }
        },
        
        /*
         * returns true or false if user has signed off on terms of service
         */
        getSignOff : function(){
            if (_.isUndefined(this.signoff)) {
                this.signoff = false;
            }
            return this.signoff;
        },
        
        /*
         * Sets if the users has signed off - must be a boolean
         */
        setSignOff : function(signoff){
            if (_.isBoolean(signoff)) {
                this.signoff = signoff;
            }else{
                throw "signoff must be a boolean";
            }
        }
    });
    
    
    return MemberInfo;
});