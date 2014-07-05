/*
* Helper function - a conditional - pass in a date and it will compare if the
* date is before 'today' (ie: moment() )
* Used to determine if a registration date has passed (or not)
* 
*/
        
define(['handlebars', 'underscore'],
       function ( Handlebars, _ ) {
  
  function checkDate(time){
     if (_.isString(time)) {
                time = parseInt(time, 10);
            }
            
            //checks if a date is before now. Helpful for determining if a membership has expired.
            var now = moment();
            var timeCompare = moment(time);
            //if the difference between the passed in time is less than now; it happened in the past
            if( timeCompare.diff(now) < 0){
                return true;
            }
            return false;
  }
  
  
  function isDateBeforeToday(time, options){
            if (_.isUndefined(time)) {
                return options.inverse();
            }
            if (_.isString(time)) {
                time = parseInt(time, 10);
            }
            if(checkDate(time)){
                return options.fn(this);
            }
            return options.inverse();
            
        }

  Handlebars.registerHelper( 'isDateBeforeToday', isDateBeforeToday );
  
  return checkDate;
          
});