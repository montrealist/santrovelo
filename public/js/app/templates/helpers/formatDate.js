/*
* Helper function - Register a quick helper for date conversions
*/
        
define(['handlebars', 'underscore'],
       function ( Handlebars, _ ) {
  
  function formateDate(time) {
    if (_.isString(time)) {
      time = parseInt(time, 10);
    }
      
    //returns a friendly time format
    return moment(time).format('LL');
  }

  console.log('test: ' + Handlebars);
        
  Handlebars.registerHelper( 'formatDate', formateDate );
  
  return formateDate;
});