define( [ 'App', 'marionette', 'views/AddNewMemberView', 'views/SearchView',
         'views/HeaderView', 'handlebars', 'backgrid', 'text!templates/velolayout.html'],
    function( App, Marionette, AddNewMemberView, SearchView, HeaderView,
            Handlebars, Backgrid, template) {

        var VeloLayoutView = Marionette.LayoutView.extend( {
            template: Handlebars.compile(template),
            className : 'row',
            regions: {
                'search' : '#velo-search',
                'edit' : '#velo-edit',
                'header': '#header'
            },
            
            onRender : function(){
                this.header.show(new HeaderView());
                this.search.show(new SearchView());
                this.edit.show(new AddNewMemberView());
            }

        });
        
        return VeloLayoutView;
    });