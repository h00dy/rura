(function(angular){
    angular.module('document')
        .factory('InvoiceResp', ['$resource', function($resource){
            return $resource("/api/invoiceResponsibles/", {}, {})
        }]);
})(angular);