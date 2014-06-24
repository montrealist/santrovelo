define(['marionette', 'controllers/Controller'], function(Marionette, Controller) {
   return Marionette.AppRouter.extend({
       //"index" must be a method in AppRouter's controller
       appRoutes: {
           "" : "login", //Default is the login view
           "start": "start", //the #start tag will start the app
           "newmember" : "newmember"
       }
   });
});