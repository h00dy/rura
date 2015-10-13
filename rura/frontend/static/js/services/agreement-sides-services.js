(function(angular){
    angular.module('document')
        .factory('AgreementSide', ['$resource', function($resource){
            return $resource("/api/agreementSides/", {}, {})
        }]);
})(angular);