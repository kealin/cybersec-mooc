/**
 * Created by Kim Lindqvist on 18-Jan-17.
 */
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise( '/' );

    $stateProvider

        .state("home", {
            url: "/home",
            templateUrl: 'app/components/home/homeView.html',
            controller  : 'homeController'
        })
        .state("users", {
            url: "/users",
            templateUrl : 'app/components/users/usersView.html',
            controller  : 'userController'
        })
        .state("admin", {
            url: "/admin",
            templateUrl: 'app/components/admin/adminView.html',
            controller  : 'adminController'
        })
});