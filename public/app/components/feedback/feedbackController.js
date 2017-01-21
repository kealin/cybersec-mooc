/**
 * Created by Kim Lindqvist on 18-Jan-17.
 */
app.controller('feedbackController',['$scope', 'dataService', function ($scope, dataService) {

    $scope.feedbacks = [];
    $scope.feedback = {};

    dataService.getFeedbacks().then(function (response) {
        $scope.feedbacks = response.data;
    });

        $scope.send = function () {
            dataService.send($scope.feedback)
                .then(function (response) {
                    $scope.feedbacks.push(response.data[0]);
                })
        }
}]);