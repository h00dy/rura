(function(angular){
    angular.module('document')
        .factory('Invoice', ['$resource', function($resource){
            return $resource("/api/invoices/?firm__id=:id", {}, {})
        }])
        .factory('Agreement', ['$resource', function($resource){
            return $resource("/api/agreements/?firm__id=:id", {}, {})
        }])
        .factory('Other', ['$resource', function($resource){
            return $resource("/api/other/?firm__id=:id", {}, {})
        }]);
})(angular);