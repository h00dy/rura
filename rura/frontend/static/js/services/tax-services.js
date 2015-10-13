(function(angular){
    angular.module('document')
        .factory('Tax', ['$resource', function($resource){
            return $resource("/api/taxes/:id/", {}, {})
        }]);
})(angular);