define( [ 'App', 'marionette', 'views/EditMemberView', 'views/HeaderView',
         'views/MemberHistoryView', 'handlebars', 'models/MemberInfoHistory',
         'collections/MemberInfoHistoryCollection', 'text!templates/editlayout.html'],
    function( App, Marionette, EditMemberView, HeaderView, MemberHistoryView,
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
                this.edit.show(new EditMemberView({model:this.model}));
                
                //experiment
                this.memberHistory = new MemberInfoHistoryCollection();
                this.editHistory.show(new MemberHistoryView({
                    collection: this.memberHistory
                    }));
                
                this.memberHistory.fetch();
            },
            
            
            /*
             * Fetches history for display (does it only when history is clicked)
             */
            showHistory : function(){
                if (!this.historyFetchPromise) {
                    this.history = new MemberInfoHistory();
                    this.historyFetchPromise = this.history.fetch(
                        {data : { 'ownerObjectId' : this.model.id }});
                }
            }

        });
        
        return EditLayoutView;
    });