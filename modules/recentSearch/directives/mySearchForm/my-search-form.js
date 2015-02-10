angular.module("myApp")
        .directive("myGroupedTableSearchForm", [function() {
            return {
                restrict: "E",
                templateUrl: './modules/recentSearch/directives/mySearchForm/my-search-form-tpl.html',
                controller: [function(){
                    var vm = this;
                    vm.form = {};
                }],
                controllerAs: 'myGroupedTableSearchForm',
                require: ['?^recentSearchPage', 'myGroupedTableSearchForm'],
                link: function(scope, element, attr, ctrls){
                    //proxy the search action to the upper-dom directive
                    var recentSearchPage = ctrls[0];
                    var myGroupedTableSearchForm = ctrls[1];
                    myGroupedTableSearchForm.search = function(){
                        recentSearchPage && recentSearchPage.search(myGroupedTableSearchForm.form);
                        scope.myGroupedTable.data = recentSearchPage.data;//share infos between the same scope easily with the help of controllerAs object
                    }
                }
            }
        }])