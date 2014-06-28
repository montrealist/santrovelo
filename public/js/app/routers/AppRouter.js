define(['marionette', 'controllers/Controller'], function(Marionette, Controller) {
   
   return Marionette.AppRouter.extend({
       appRoutes: {
           "" : "login", 
           "start": "entry",  //was: start
           "newmember" : "newMember",
           "edit/:id" : "editMember"
       }
   });

});