(function(angular){
    angular.module('document')
    .controller("FirmListController", function($scope, Firm){
        $scope.firms = Firm.query();
    })
})(angular)