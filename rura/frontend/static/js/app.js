(function(){
    angular.module("document", ['ngResource', 'ui.bootstrap', 'ui.router'])

    .config(['$resourceProvider', '$stateProvider', '$urlRouterProvider', function($resourceProvider, $stateProvider, $urlRouterProvider) {
        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;

        // $urlRouterProvider.otherwise("#");
    }])
})();