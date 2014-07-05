/*
 *
 * Defines the layoutview for the main interface. Allows user to search and add new members
 * 
 */
define( [ 'App', 'marionette', 'views/AddNewMemberView', 'views/SearchView',
         'views/HeaderView', 'handlebars', 'text!templates/velolayout.html'],
    function( App, Marionette, AddNewMemberView, SearchView, HeaderView,
            Handlebars, template) {

        var VeloLayoutView = Marionette.LayoutView.extend( {
            template: Handlebars.compile(template),
            className : 'row',
            
            regions: {
                'search' : '#velo-search',
                'addNewView' : '#velo-edit',
                'header': '#header'
            },
            
            ui : {
                'addTab': 'a[href=#velo-edit]'
            },
            
            events : {
                'click @ui.addTab' : 'addTabClick'
            },
            
            
            onRender : function(){
                //Show the header and search functions
                this.header.show(new HeaderView());
                this.search.show(new SearchView());
            },
            
            /*
             * When the 'add' tab is clicked; create a new view for creating a new member.
             */
            addTabClick : function(){
                this.addNewView.show(new AddNewMemberView());
            }
        });
        
        return VeloLayoutView;
    });