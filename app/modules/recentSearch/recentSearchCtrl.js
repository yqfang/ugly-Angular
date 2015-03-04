angular.module("myApp")
    .controller("recentSearchController", ['dataFactory', function(dataFactory) {
        var vm = this;
        vm.search = function(form) {
            vm.data = dataFactory.loadData(form)
        }
    }])
