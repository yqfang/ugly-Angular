angular.module("myApp")
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
                loadData: function(form) {
                    if (form.serviceId == 1)
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
                    else if (form.serviceId == 2)
                        return self.deepCopy({
                            head: ["hehe1", "hehe2", "hehe3"],
                            body: [{
                                groupName: "group1",
                                groupContent: [{
                                    col1: "group1-row1-hehe1",
                                    col2: "group1-row1-hehe2",
                                    col3: "group1-row1-hehe3"
                                }, {
                                    col1: "group1-row2-col1",
                                    col2: "group1-row2-hehe2",
                                    col3: "group1-row2-hehe3"
                                }]
                            }, {
                                groupName: "group2",
                                groupContent: [{
                                    col1: "group2-row1-hehe1",
                                    col2: "group2-row1-hehe2",
                                    col3: "group2-row1-hehe3"
                                }, {
                                    col1: "group2-row2-hehe1",
                                    col2: "group2-row2-hehe2",
                                    col3: "group2-row2-hehe3"
                                }]
                            }]
                        })
                    
                    else{
                        return self.newInstance();
                    }
                }
            }
        }])