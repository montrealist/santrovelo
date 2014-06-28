define( [ 'App', 'marionette', 'views/AddNewMemberView', 'views/SearchView',
         'handlebars', 'backgrid', 'text!templates/velolayout.html'],
    function( App, Marionette, AddNewMemberView, SearchView,
            Handlebars, Backgrid, template) {

        var VeloLayoutView = Marionette.LayoutView.extend( {
            template: Handlebars.compile(template),
            
            regions: {
                'search' : '#velo-search',
                'edit' : '#velo-edit'
            },
            
            onRender : function(){
                //this.$('#velo-main-tab').tab('show');
                
                this.search.show(new SearchView());
                this.edit.show(new AddNewMemberView());
            }

        });
        
        return VeloLayoutView;
    });