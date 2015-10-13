(function(angular){
    angular.module('document')
        .factory('Contractor', ['$resource', function($resource){
            return $resource("/api/contractors/", {}, {})
        }]);
})(angular);