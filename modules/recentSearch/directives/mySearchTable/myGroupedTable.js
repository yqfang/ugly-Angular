angular.module("myApp")
        .directive("myGroupedTable", [function() {
            return {
                restrict: "E",
                scope: {
                    data: '='
                },
                templateUrl: './modules/recentSearch/directives/mySearchTable/my-grouped-table-tpl.html'
            }
        }])