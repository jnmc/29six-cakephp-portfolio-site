    
// FACTORY & SERVICES

var factoryServe = angular.module("factoryServe", []);
factoryServe.factory('calendarService', function ($http, $q) {
    return {
        getDates: function($scope) {
            return $http.get('http://192.168.33.10/29six/app/webroot/js/calendarDates.json')
                .then(function(data, status, headers, config) {
 
                    angular.forEach(data.data.calendarUpdate.userEvents, function(value, key){
                        if(Object.keys(value) == "Discussion" && value['Discussion']) {
                            $scope.events.push({
                                title: value['Discussion']['title'],
                                start: value['Discussion']['startDate'],
                                allDay: value['Discussion']['allDay'],
                                url: value['Discussion']['url'],
                                mType: value['Discussion']['meetingType']
                            });
                        }

                        if(Object.keys(value) == "Meeting" && value['Meeting']) {
                            $scope.events.push({
                                title: value['Meeting']['title'],
                                start: value['Meeting']['startDate'],
                                allDay: value['Meeting']['allDay'],
                                url: value['Meeting']['url'],
                                mType: value['Meeting']['meetingType']
                            });
                        }
                    });

                    return $scope.events;
                }, function(data, status, headers, config) {
                    console.log('no data for the month');
                    // something went wrong
                    return $q.reject(response.data);
                });

        }
    };
});


var validationServe = angular.module("validationServe", []);
validationServe.factory('validationService', function ($http, $q) {
    return {
        postValidation: function($params) {
            return $http({
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                url: 'http://192.168.33.10/29six/app/webroot/files/validation.php',
                method: "POST",
                data: $params,
            })
            .then(function(data, status, headers, config) {
                // something went right
                return data;
            }, function(data, status, headers, config) {
                // something went wrong
                return $q.reject(response.data);
            });
        }

    };    
});