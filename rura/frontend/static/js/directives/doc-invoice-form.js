(function(angular){
    angular.module('document')
    .directive("docInvoiceForm", function(){
        return {
            replace: true,
            restrict: 'E',
            templateUrl: "static/js/partials/doc-invoice-form.html",
        };
    });
})(angular)