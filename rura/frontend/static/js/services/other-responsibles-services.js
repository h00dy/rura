(function(angular){
    angular.module('document')
        .factory('OtherResp', ['$resource', function($resource){
            return $resource("/api/otherResponsibles/", {}, {})
        }]);
})(angular);