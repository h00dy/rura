(function(angular){
    angular.module('document')
    .directive("docTabsNav", function(){
        return {
            // replace: true,
            restrict: 'E',
            templateUrl: "static/js/partials/doc-tabs-nav.html",

        };
    });
})(angular)