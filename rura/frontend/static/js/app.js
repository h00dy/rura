(function(){
    var app = angular.module("document", []);

    app.controller("FirmController", ['$http', function($http){
        var scope = this;
        scope.firms = [];
        scope.activeFirm = {};

        $http.get("/api/firms/").then(function(response){
            scope.firms = response.data;
        });

        var isSet = function(data){
            return scope.activeFirm === data;
        };
        var setActive = function(data){
            scope.firm.activeFirm = data;
        };
    }]);
})();