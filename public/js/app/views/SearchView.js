define( [ 'App', 'marionette', 'views/MemberInfoCollectionView','collections/MemberInfoCollection',
         'handlebars', 'backgrid', 'text!templates/search.html'],
    function( App, Marionette, MemberInfoCollectionView,MemberInfoCollection,
            Handlebars, Backgrid, template) {

        var SearchView = Marionette.ItemView.extend( {

            template: Handlebars.compile(template),

            ui  : {
              'searchword' : 'form #search-term'
            },

            events: {
                'submit @ui.searchword' : 'onSearch',
                'keyup @ui.searchword' : 'onSearch'

            },

            initialize: function(){
                _.bindAll(this);

                //created our filtered info (by default map it to the memberInfo item)
                this.filteredMemberInfo = new MemberInfoCollection(App.memberInfo.toJSON());

                //anytime the App.memberInfo is changed; update our filtered list.
                this.listenTo(App.memberInfo, 'reset', this.filterResults);
                
            },


            /*
             * onRender - el is set; show the memberinfo docllection view
             */
            onRender: function(){                
                if (this.searchResultsView) {
                    this.searchResultsView.destroy();
                }

                this.searchResultsView = new MemberInfoCollectionView({
                    el: this.$('#search-results'),
                    collection: this.filteredMemberInfo
                    });

                this.searchResultsView.render();

            },


            /*
             * Called to make a search based on text input
             */
            onSearch : function(evt){
                evt.preventDefault();
                this.filterResults();
            },


            /*
             * Filters results from App.memberInfo - updates this.filtereMemberInfo
             * with items from our 'search' form.
             */
            filterResults:function(){
                var searchResults = App.memberInfo.filter(this._compareMemberInfoToSearchResults);
                this.filteredMemberInfo.reset(searchResults);

            },

            /*
             * Called by the search/filter function to comapre an item in the colleciton
             * to the search terms in the search form.
             */
            _compareMemberInfoToSearchResults:function(item){
                //fetch the current value in the text box
                var searchword = this.ui.searchword.val();
                var indexof;

                if (searchword ===  "") {
                    //empty form will (by default) return all items
                    return true;
                }

                //do an uppercase comparison
                indexof = item.getFullName().toUpperCase().indexOf(searchword.toUpperCase());

                return indexof > -1;
            }
        });

        return SearchView;
    });