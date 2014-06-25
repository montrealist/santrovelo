define(['marionette', 'controllers/Controller'], function(Marionette, Controller) {
   
   return Marionette.AppRouter.extend({
       appRoutes: {
           "" : "login", 
           "start": "start", 
           "newmember" : "newMember",
           "edit/:id" : "editMember"
       }
   });

});