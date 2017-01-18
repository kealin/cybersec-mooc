/**
 * Created by Kim Lindqvist on 18-Jan-17.
 */
app.directive('ngTopNav', function () {
    return {
        restrict: 'AE',
        templateUrl: 'app/shared/directives/topnavTemplate.html',
        scope: '=ngModel' ,
        link: function ($scope, element, attr) {
        }
    };
});