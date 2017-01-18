/**
 * Created by Kim Lindqvist on 18-Jan-17.
 */
app.controller('adminController', ['$scope', 'dataService', function ($scope, dataService) {

    /** Top 10 2013-A2-Broken Authentication and Session Management **/
    var isAdmin = false;
    $scope.loggedIn = false;

    if (isAdmin) {
        dataService.getUsers()
            .then(function (response) {
                $scope.users = response.data;
            }, function (error) {
                console.log(error);
            });
    }

    $scope.login = function (credentials) {
        dataService.login(credentials)
            .then(function (response) {
                if (response.data == 'Youre the captain!') {
                    $scope.loggedIn = true;
                }
            })
    };

    /** Top 10 2013-A7-Missing Function Level Access Control **/
    $scope.delete = function (user) {
        if (isAdmin) {
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
        }
    }
}]);