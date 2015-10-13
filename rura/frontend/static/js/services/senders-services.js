(function(angular){
    angular.module('document')
        .factory('Sender', ['$resource', function($resource){
            return $resource("/api/senders/", {}, {})
        }]);
})(angular);