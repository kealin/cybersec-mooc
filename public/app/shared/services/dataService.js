/**
 * Created by Kim Lindqvist on 18-Jan-17.
 */
app.service('dataService', ['$http', function ($http) {

    var adminUrlBase = '/api/admin';
    var feedbackUrlBase = '/api/feedback';

    this.login = function (credentials) {
        return $http.post(adminUrlBase + '/login', credentials);
    };

    this.getUsers = function() {
        return $http.get(adminUrlBase + '/users');
    };

    this.removeUser = function(user) {
        return $http.delete(adminUrlBase + '/users/' + user.name);
    };

    this.send = function(feedback) {
        return $http.post(feedbackUrlBase, feedback);
    }

    this.getFeedbacks = function() {
        return $http.get(feedbackUrlBase);
    }
}]);