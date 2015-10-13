(function(angular){
    angular.module('document')
    .directive("docOtherForm", function(){
        return {
            replace: true,
            restrict: 'E',
            templateUrl: "static/js/partials/doc-other-form.html",
        };
    });
})(angular)