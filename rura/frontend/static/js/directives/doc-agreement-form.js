(function(angular){
    angular.module('document')
    .directive("docAgreementForm", function(){
        return {
            replace: true,
            restrict: 'E',
            templateUrl: "static/js/partials/doc-agreement-form.html",
        };
    });
})(angular)