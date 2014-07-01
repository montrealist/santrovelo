define( [ 'App', 'marionette', 'handlebars', 'text!templates/headerview.html'],
       function(App, Marionette, Handlebars, template){
        
        
        var HeaderView = Marionette.ItemView.extend({
            template: Handlebars.compile(template),

        });
        
        
        return HeaderView;
});