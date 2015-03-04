angular.module("myApp")
        .directive("recentSearchPage", [function(){
            return {
                restrict: "E",
                templateUrl: './modules/recentSearch/directives/recentSearchPage/recent-search-page-tpl.html',
                transclude: true,
                controller: ['$scope', '$attrs', function($scope, $attrs){
                    vm = this;
                    vm.search = function(form){
                        $scope.$eval($attrs.onSearch, {form : form});
                        vm.data = $scope.$eval($attrs.data);
                    };
                }],
                controllerAs: 'recentSearchPage'
            }
        }])