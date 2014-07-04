/*
 *
 * A view to manage the layout of the edit screen. Provides a view of the current
 * state of the user; as well as a non-interactive 'history' view
 *
 */
define( [ 'App', 'parse', 'marionette', 'views/EditMemberView', 'views/HeaderView',
         'views/MemberHistoryView', 'handlebars', 'models/MemberInfoHistory',
         'collections/MemberInfoHistoryCollection', 'text!templates/editlayout.html'],
    function( App, Parse, Marionette, EditMemberView, HeaderView, MemberHistoryView,
            Handlebars, MemberInfoHistory, MemberInfoHistoryCollection, template) {

        var EditLayoutView = Marionette.LayoutView.extend( {
            template: Handlebars.compile(template),
            className : 'row',
            
            regions: {
                'edit' : '#velo-edit',
                'editHistory' : '#velo-history',
                'header': '#header'
            },
            
            events: {
                'click a[href=#velo-history]' : 'showHistory'
            },
            
            
            onRender : function(){
                this.header.show(new HeaderView());
                
                this.edit.show(new EditMemberView({model:this.options.member}));
                
                //experiment
                this.memberHistory = MemberInfoHistoryCollection.fetchByOwnerObjectId(this.options.member.id);
                
                this.editHistory.show(new MemberHistoryView({
                    collection: this.memberHistory
                }));
                
            },
            
            
            /*
             * Fetches history for display (does it only when history is clicked)
             
            showHistory : function(){
                if (!this.historyFetchPromise) {
                    this.history = new MemberInfoHistory();
                    this.historyFetchPromise = this.history.fetch(
                        {data : { 'ownerObjectId' : this.model.id }});
                }
            }*/

        });
        
        return EditLayoutView;
    });