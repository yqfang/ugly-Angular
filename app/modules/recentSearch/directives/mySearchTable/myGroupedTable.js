angular.module("myApp")
        .directive("myGroupedTable", [function() {
            return {
                restrict: "E",
                templateUrl: './modules/recentSearch/directives/mySearchTable/my-grouped-table-tpl.html',
                controller: function(){
                    this.data = {
                        head: ["结果为空"],
                        isEmpty: true
                    }
                },
                controllerAs: 'myGroupedTable'
            }
        }])