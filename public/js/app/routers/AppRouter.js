define(['marionette', 'controllers/Controller'], function(Marionette, Controller) {
   
   return Marionette.AppRouter.extend({
       appRoutes: {
           "" : "login", 
           "start": "entry", 
           "edit/:id" : "editMember"
       }
   });

});