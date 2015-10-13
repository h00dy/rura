(function(angular){
    angular.module('document')
        .factory('Delivered', ['$resource', function($resource){
            return $resource("/api/delivered/", {}, {})
        }]);
})(angular);