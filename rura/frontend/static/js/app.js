(function(){
    angular.module("document", ['ngResource', 'ui.bootstrap', 'ui.router', 'ngAnimate', 'lk-google-picker'])

    .config(['$resourceProvider', '$stateProvider', '$urlRouterProvider', 'lkGoogleSettingsProvider', '$httpProvider', function(
            $resourceProvider, $stateProvider, $urlRouterProvider, lkGoogleSettingsProvider, $httpProvider) {
        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        lkGoogleSettingsProvider.configure({
            apiKey   : '',
            clientId : '',
            locale: 'pl',
            views: ['DocsUploadView().setIncludeFolders(true)']
        });
        // $urlRouterProvider.otherwise("#");
    }])
})();