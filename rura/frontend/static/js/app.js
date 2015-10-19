(function(){
    angular.module("document", ['ngResource', 'ui.bootstrap', 'ui.router', 'ngAnimate', 'lk-google-picker', 'tableSort', 'angular-loading-bar'])

    .config(['$resourceProvider', '$stateProvider', '$urlRouterProvider', 'lkGoogleSettingsProvider', '$httpProvider', 'cfpLoadingBarProvider', function(
            $resourceProvider, $stateProvider, $urlRouterProvider, lkGoogleSettingsProvider, $httpProvider, cfpLoadingBarProvider) {
        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;
        cfpLoadingBarProvider.includeBar = false;
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        lkGoogleSettingsProvider.configure({
            apiKey   : '',
            clientId : '',
            locale: 'pl',
            views: ['DocsUploadView().setIncludeFolders(true)']
        });
    }])
})();