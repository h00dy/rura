(function(angular){
    angular.module('document')
        .factory('Firm', ['$resource', function($resource){
            return $resource("/api/firms/", {}, {})
        }]);
})(angular);