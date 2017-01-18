/**
 * Created by Kim Lindqvist on 18-Jan-17.
 */
app.controller('adminController', ['$scope', 'dataService', function ($scope, dataService) {

    /** Top 10 2013-A2-Broken Authentication and Session Management **/
    /** Simple scope to determine admin status & auth status, easy to abuse **/
    $scope.loggedIn = false;
    $scope.credentials = {};

    /** Top 10 2013-A6-Sensitive Data Exposure **/
    /** Users aren't hidden, they just aren't rendered into view **/
    dataService.getUsers()
        .then(function (response) {
            $scope.users = response.data;
        }, function (error) {
            console.log(error);
        });


    $scope.login = function () {
        dataService.login($scope.credentials)
            .then(function (response) {
                if (response.data == 'Youre the captain!') {
                    $scope.loggedIn = true;
                }
            })
    };

    /** Top 10 2013-A7-Missing Function Level Access Control **/
    /** Admin check is done only on frontend **/
    $scope.delete = function (user) {
        if ($scope.loggedIn) {
            dataService.removeUser(user)
                .then(function (response) {
                    $scope.users = response.data;
                })
        }
    }
}]);