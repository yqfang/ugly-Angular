angular.module("myApp", ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: './index.html',
                    controller: 'recentSearchController',
                    controllerAs: 'recentSearchCtrl'
                })
        }])
        .controller('recentSearchCtrl', [function(){
                        
        }])
        .factory("dataFactory", [function() {
            var self;
            return self = {
                deepCopy: function(source) {
                    return angular.copy(source);
                },
                newInstance: function() {
                    return self.deepCopy({
                        head: ["结果为空"],
                        body: [{
                            groupName: "",
                            groupContent: []
                        }],
                        isEmpty: true
                    })
                },
                loadData: function(dataKey) {
                    if (dataKey == '1111')
                        return self.deepCopy({
                            head: ["col1", "col2", "col3"],
                            body: [{
                                groupName: "group1",
                                groupContent: [{
                                    col1: "group1-row1-col1",
                                    col2: "group1-row1-col2",
                                    col3: "group1-row1-col3"
                                }, {
                                    col1: "group1-row2-col1",
                                    col2: "group1-row2-col2",
                                    col3: "group1-row2-col3"
                                }]
                            }, {
                                groupName: "group2",
                                groupContent: [{
                                    col1: "group2-row1-col1",
                                    col2: "group2-row1-col2",
                                    col3: "group2-row1-col3"
                                }, {
                                    col1: "group2-row2-col1",
                                    col2: "group2-row2-col2",
                                    col3: "group2-row2-col3"
                                }]
                            }]
                        })
                    else if (dataKey == '2222')
                        return self.deepCopy({
                            head: ["col1", "col2", "col3"],
                            body: [{
                                groupName: "group4",
                                groupContent: [{
                                    col1: "group1-row1-col1",
                                    col2: "group1-row1-col2",
                                    col3: "group1-row1-col3"
                                }, {
                                    col1: "group1-row2-col1",
                                    col2: "group1-row2-col2",
                                    col3: "group1-row2-col3"
                                }]
                            }, {
                                groupName: "group5",
                                groupContent: [{
                                    col1: "group2-row1-col1",
                                    col2: "group2-row1-col2",
                                    col3: "group2-row1-col3"
                                }, {
                                    col1: "group2-row2-col1",
                                    col2: "group2-row2-col2",
                                    col3: "group2-row2-col3"
                                }]
                            }]
                        })
                    else{
                        return self.newInstance();
                    }
                }
            }
        }])