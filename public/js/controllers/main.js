angular.module('mainApp')
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.tempDatas = [];

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.test = "test";

        $http.get('/models').success(function(data){
            console.log(data);
            $scope.tempDatas = data;
        });
    }]);
