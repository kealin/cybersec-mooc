/**
 * Created by Kim Lindqvist on 18-Jan-17.
 */
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise( '/' );

    $stateProvider

        .state("home", {
            url: "/",
            templateUrl: 'app/components/home/homeView.html',
            controller  : 'homeController'
        })
        .state("feedback", {
            url: "/feedback",
            templateUrl : 'app/components/feedback/feedbackView.html',
            controller  : 'feedbackController'
        })
        .state("redirect", {
            url: "/redirect",
            templateUrl : 'app/components/redirect/redirectView.html',
            controller  : 'redirectController'
        })
        .state("admin", {
            url: "/admin",
            templateUrl: 'app/components/admin/adminView.html',
            controller  : 'adminController'
        })
});