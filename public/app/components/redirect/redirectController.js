/**
 * Created by Kim Lindqvist on 18-Jan-17.
 */
app.controller('redirectController',['$scope', '$window', function ($scope, $window) {

    /** Top 10 2013-A10-Unvalidated Redirects and Forwards **/
    $scope.redirect = function() {
        $window.open($scope.redirectUrl);
    }

}]);