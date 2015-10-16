(function(angular){
    angular.module('document')
        .factory('Invoice', ['$resource', function($resource){
            return $resource(
                "/api/invoices/:id/?firm__id=:firm",
                {id:'@id', firm:'@firm'},
                {
                    'update': { method:'PUT' }
                })
        }])
        .factory('Agreement', ['$resource', function($resource){
            return $resource(
                "/api/agreements/:id/?firm__id=:firm",
                {
                    id:'@id', firm:'@firm'
                }, {
                    'update': { method:'PUT' }
                })
        }])
        .factory('Other', ['$resource', function($resource){
            return $resource(
                "/api/other/:id/?firm__id=:firm",
                {
                    id:'@id', firm:'@firm'
                }, {
                    'update': { method:'PUT' }
                })
        }]);
})(angular);