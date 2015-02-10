angular.module("myApp", ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './modules/recentSearch/recent-search.html',
                controller: 'recentSearchController',
                controllerAs: 'recentSearchCtrl'
            })
            .otherwise({
                    redirect: '/'
            });
        }])
