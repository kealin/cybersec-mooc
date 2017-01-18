/**
 * Created by Kim Lindqvist on 18-Jan-17.
 */
app.service('dataService', ['$http', function ($http) {

    var urlBase = '/api/admin';

    this.login = function (credentials) {
        return $http.post(urlBase + '/login', credentials);
    };

    this.getUsers = function() {
        return $http.get(urlBase + '/users');
    };

    this.removeUser = function(user) {
        return $http.delete(urlBase + '/users/' + user.name);
    };
}]);